import { createContext } from 'react';
import type { ThemeName } from '../common/ThemeSwitch';

export interface SiteContextProps {
  isMobile: boolean;
  theme: ThemeName[];
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = createContext<SiteContextProps>({
  isMobile: false,
  theme: ['light'],
  updateSiteConfig: () => {}
});

export default SiteContext;
