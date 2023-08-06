// eslint-disable-next-line import/no-unresolved
import Footer from 'dumi/theme/slots/Footer';
import { IAllThemeConfig } from './types';
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
