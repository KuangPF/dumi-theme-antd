import { useLocale, useSiteData } from 'dumi';
import type { IAllThemeConfig } from '../types';

export default function useLocaleValue(key: string) {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  const additionalThemeConfig: IAllThemeConfig = themeConfig;
  const value = additionalThemeConfig[key];
  return typeof value === 'string' || Array.isArray(value) ? value : value?.[locale.id];
}
