// 获取 dumi-theme-antd 额外的配置
import { useSiteData } from 'dumi';
import type { IAdditionalThemeConfig } from '../types/index';

const useAdditionalThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig: IAdditionalThemeConfig = themeConfig['antdTheme'];

  return additionalThemeConfig;
};

export default useAdditionalThemeConfig;
