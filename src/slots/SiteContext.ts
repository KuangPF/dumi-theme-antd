import { createContext } from 'react';

export interface SiteContextProps {
  isMobile: boolean;
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = createContext<SiteContextProps>({
  isMobile: false,
  updateSiteConfig: () => {},
});

export default SiteContext;
