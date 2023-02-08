// 获取 dumi-theme-antd 额外的配置
import { useSiteData } from 'dumi';

import type { IAllThemeConfig } from '../types';

const useAdditionalThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig: IAllThemeConfig = themeConfig;

  return additionalThemeConfig;
};

export default useAdditionalThemeConfig;
