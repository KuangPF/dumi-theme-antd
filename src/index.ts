import Footer from './slots/Footer';
import type { IAllThemeConfig } from './types';
import Loading from './common/Loading';
import HomeBaseLayout from './builtins/HomeBaseLayout';

/**
 * @description provider declaration of config files
 * @param {ThemeConfig} config theme config
 * @returns {ThemeConfig}
 */
export function defineThemeConfig(config: IAllThemeConfig): IAllThemeConfig {
  return config;
}

export { Loading, Footer, HomeBaseLayout };
