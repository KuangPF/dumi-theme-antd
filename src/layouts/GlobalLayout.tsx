import {
  createCache,
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
  StyleProvider,
  extractStyle
} from '@ant-design/cssinjs';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { Outlet, useServerInsertedHTML, usePrefersColor } from 'dumi';
import type { FC } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useAdditionalThemeConfig from '../hooks/useAdditionalThemeConfig';
import type { ThemeName } from '../common/ThemeSwitch';
import ThemeSwitch from '../common/ThemeSwitch';
import type { SiteContextProps } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';

type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;
const RESPONSIVE_MOBILE = 768;
const SITE_STATE_LOCALSTORAGE_KEY = 'dumi-theme-antd-site-state';

const defaultSiteState: SiteState = {
  theme: ['light'],
  isMobile: false,
  direction: 'ltr'
};
const getAlgorithm = (themes: ThemeName[] = []) =>
  themes.map((theme) => {
    if (theme === 'dark') {
      return antdTheme.darkAlgorithm;
    }
    if (theme === 'compact') {
      return antdTheme.compactAlgorithm;
    }
    return antdTheme.defaultAlgorithm;
  });

const isThemeDark = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)')?.matches;
  }
  return false;
};

const getSiteState = (siteState) => {
  const localSiteState = siteState;
  const isDark = isThemeDark(); // 系统默认主题
  const theme = localSiteState?.theme || [];
  const isAutoTheme = theme.filter((item) => item === 'auto').length > 0;
  if (isAutoTheme) {
    const nextTheme = theme.filter((item) => item !== 'auto');
    nextTheme.push(isDark ? 'dark' : 'light');
    localSiteState.theme = nextTheme;
  }
  return Object.assign(defaultSiteState, localSiteState);
};

const GlobalLayout: FC = () => {
  const [, , setPrefersColor] = usePrefersColor();
  const { theme: configTheme, ssr, prefersColor } = useAdditionalThemeConfig();
  const [{ theme, isMobile, direction }, setSiteState] = useState<SiteState>(defaultSiteState);

  // 基于 localStorage 实现
  const updateSiteConfig = useCallback((props: SiteState) => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      const localSiteState = JSON.parse(
        window.localStorage.getItem(SITE_STATE_LOCALSTORAGE_KEY) || '{}'
      );
      const nextLocalSiteState = Object.assign(localSiteState, props);
      window.localStorage.setItem(SITE_STATE_LOCALSTORAGE_KEY, JSON.stringify(nextLocalSiteState));
      setSiteState((prev) => ({
        ...prev,
        ...props
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, []);

  const updateMobileMode = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }
    updateSiteConfig({
      isMobile: window.innerWidth < RESPONSIVE_MOBILE
    });
  }, [updateSiteConfig]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      const localSiteState = JSON.parse(
        window.localStorage?.getItem(SITE_STATE_LOCALSTORAGE_KEY) || '{}'
      );
      // 首次设置主题样式
      if (!localSiteState?.theme) {
        localSiteState.theme = [prefersColor.default];
      }
      const siteConfig = getSiteState(localSiteState);
      updateSiteConfig(siteConfig);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [prefersColor, updateSiteConfig]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {};
    }
    updateMobileMode();
    // set data-prefers-color
    setPrefersColor((theme ?? []).indexOf('dark') > -1 ? 'dark' : 'light');
    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, [theme, updateMobileMode, setPrefersColor]);

  const siteContextValue = useMemo(
    () => ({
      direction,
      isMobile: isMobile!,
      theme: theme!,
      updateSiteConfig
    }),
    [isMobile, theme, direction, updateSiteConfig]
  );

  const [styleCache] = React.useState(() => createCache());

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: 'style'
    });
    return <style data-type="antd-cssinjs" dangerouslySetInnerHTML={{ __html: styleText }} />;
  });

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: ['cssVar', 'token']
    });
    return (
      <style
        data-type="antd-css-var"
        data-rc-order="prepend"
        data-rc-priority="-9999"
        dangerouslySetInnerHTML={{ __html: styleText }}
      />
    );
  });

  const BaseGlobalLayoutJSX = (
    <SiteContext.Provider value={siteContextValue}>
      <ConfigProvider
        theme={{
          ...configTheme,
          algorithm: getAlgorithm(theme)
        }}
      >
        <Outlet />
        {prefersColor.switch && (
          <ThemeSwitch
            value={theme}
            onChange={(nextTheme) => updateSiteConfig({ theme: nextTheme })}
          />
        )}
      </ConfigProvider>
    </SiteContext.Provider>
  );

  const SSRGlobalLayoutJSX = (
    <StyleProvider
      cache={styleCache}
      linters={[logicalPropertiesLinter, legacyNotSelectorLinter, parentSelectorLinter]}
    >
      {BaseGlobalLayoutJSX}
    </StyleProvider>
  );
  if (ssr) {
    (global as any).styleCache = styleCache;
    return SSRGlobalLayoutJSX;
  }
  return BaseGlobalLayoutJSX;
};

export default GlobalLayout;
