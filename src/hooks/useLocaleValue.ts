import { useLocale, useSiteData } from 'dumi';
import type { IAllThemeConfig } from '../types';

export default function useLocaleValue(key: string) {
  const { themeConfig, locales } = useSiteData();
  const locale = useLocale();

  const additionalThemeConfig: IAllThemeConfig = themeConfig;
  const value = additionalThemeConfig[key];
  return locales.length > 1 ? value?.[locale.id] : value;
}
