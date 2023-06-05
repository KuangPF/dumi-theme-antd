import { ConfigProvider, theme as antdTheme } from 'antd';
import { createSearchParams, Outlet, usePrefersColor, useSearchParams } from 'dumi';
import type { FC } from 'react';
import { startTransition, useCallback, useEffect, useMemo, useState } from 'react';
import type { DirectionType } from 'antd/es/config-provider';
import useAdditionalThemeConfig from '../hooks/useAdditionalThemeConfig';
import type { ThemeName } from '../common/ThemeSwitch';
import ThemeSwitch from '../common/ThemeSwitch';
import type { SiteContextProps } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;
const RESPONSIVE_MOBILE = 768;

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

const GlobalLayout: FC = () => {
  const [, , setPrefersColor] = usePrefersColor();

  const [{ theme, isMobile, direction }, setSiteState] = useState<SiteState>({
    isMobile: false,
    direction: 'ltr',
    theme: ['light']
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme: configTheme } = useAdditionalThemeConfig();

  const updateSiteConfig = useCallback(
    (props: SiteState) => {
      setSiteState((prev) => ({
        ...prev,
        ...props
      }));
      // updating `searchParams` will clear the hash
      const oldSearchStr = searchParams.toString();

      let nextSearchParams: URLSearchParams = searchParams;
      (Object.entries(props) as Entries<SiteContextProps>).forEach(([key, value]) => {
        if (key === 'direction') {
          if (value === 'rtl') {
            nextSearchParams.set('direction', 'rtl');
          } else {
            nextSearchParams.delete('direction');
          }
        }

        if (key === 'theme') {
          // @ts-ignore
          nextSearchParams = createSearchParams({
            ...nextSearchParams,
            theme: value.filter((t) => t !== 'light')
          });

          setPrefersColor(value.indexOf('dark') > -1 ? 'dark' : 'light');
        }
      });

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
      }
    },
    [searchParams, setSearchParams, setPrefersColor]
  );

  const updateMobileMode = useCallback(() => {
    updateSiteConfig({
      isMobile: window.innerWidth < RESPONSIVE_MOBILE
    });
  }, [updateSiteConfig]);

  useEffect(() => {
    const _theme = searchParams.getAll('theme') as ThemeName[];
    const _direction = searchParams.get('direction') as DirectionType;

    startTransition(() => {
      setSiteState({
        theme: _theme,
        direction: _direction === 'rtl' ? 'rtl' : 'ltr'
      });
      // Handle isMobile
      updateMobileMode();
    });
    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, [searchParams, updateMobileMode]);

  const siteContextValue = useMemo(
    () => ({
      direction,
      isMobile: isMobile!,
      theme: theme!,
      updateSiteConfig
    }),
    [isMobile, theme, direction, updateSiteConfig]
  );

  return (
    <SiteContext.Provider value={siteContextValue}>
      <ConfigProvider
        theme={{
          ...configTheme,
          algorithm: getAlgorithm(theme)
        }}
      >
        <Outlet />
        <ThemeSwitch
          value={theme}
          onChange={(nextTheme) => updateSiteConfig({ theme: nextTheme })}
        />
      </ConfigProvider>
    </SiteContext.Provider>
  );
};

export default GlobalLayout;
