import { useOutlet, useSearchParams } from 'dumi';
import type { FC } from 'react';
import { startTransition, useCallback, useEffect, useMemo, useState } from 'react';
import type { SiteContextProps } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';

type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;
const RESPONSIVE_MOBILE = 768;

const GlobalLayout: FC = () => {
  const outlet = useOutlet();

  const [{ isMobile }, setSiteState] = useState<SiteState>({
    isMobile: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSiteConfig = useCallback(
    (props: SiteState) => {
      setSiteState((prev) => ({ ...prev, ...props }));
      // updating `searchParams` will clear the hash
      const oldSearchStr = searchParams.toString();

      let nextSearchParams: URLSearchParams = searchParams;

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const updateMobileMode = () => {
    updateSiteConfig({ isMobile: window.innerWidth < RESPONSIVE_MOBILE });
  };

  useEffect(() => {
    startTransition(() => {
      // Handle isMobile
      updateMobileMode();
    });
    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, []);

  const siteContextValue = useMemo(
    () => ({
      isMobile: isMobile!,
      updateSiteConfig,
    }),
    [isMobile],
  );

  return <SiteContext.Provider value={siteContextValue}>{outlet}</SiteContext.Provider>;
};

export default GlobalLayout;
