import { ConfigProvider, theme as antdTheme } from 'antd';
import { createSearchParams, useOutlet, useSearchParams } from 'dumi';
import type { FC } from 'react';
import { startTransition, useCallback, useEffect, useMemo, useState } from 'react';
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
    return antdTheme.defaultAlgorithm;
  });

const GlobalLayout: FC = () => {
  const outlet = useOutlet();

  const [{ theme, isMobile }, setSiteState] = useState<SiteState>({
    isMobile: false,
    theme: ['light']
  });
  const [searchParams, setSearchParams] = useSearchParams();

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
        if (key === 'theme') {
          // @ts-ignore
          nextSearchParams = createSearchParams({
            ...nextSearchParams,
            theme: value.filter((t) => t !== 'light')
          });
        }
      });

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  const updateMobileMode = useCallback(() => {
    updateSiteConfig({
      isMobile: window.innerWidth < RESPONSIVE_MOBILE
    });
  }, [updateSiteConfig]);

  useEffect(() => {
    const _theme = searchParams.getAll('theme') as ThemeName[];
    startTransition(() => {
      setSiteState({
        theme: _theme
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
      isMobile: isMobile!,
      theme: theme!,
      updateSiteConfig
    }),
    [isMobile, theme, updateSiteConfig]
  );

  return (
    <SiteContext.Provider value={siteContextValue}>
      <ConfigProvider
        theme={{
          algorithm: getAlgorithm(theme)
        }}
      >
        {outlet}
        <ThemeSwitch
          value={theme}
          onChange={(nextTheme) => updateSiteConfig({ theme: nextTheme })}
        />
      </ConfigProvider>
    </SiteContext.Provider>
  );
};

export default GlobalLayout;
