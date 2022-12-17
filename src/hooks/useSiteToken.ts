import { theme } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';
import { useContext } from 'react';

const { useToken } = theme;

const useSiteToken = () => {
  const result = useToken();
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const { token } = result;
  const siteMarkdownCodeBg = token.colorFillTertiary;

  return {
    ...result,
    token: {
      ...token,
      headerHeight: 64,
      menuItemBorder: 2,
      mobileMaxWidth: 767.99,
      siteMarkdownCodeBg,
      antCls: `.${rootPrefixCls}`,
      iconCls: `.${iconPrefixCls}`,
      /** 56 */
      marginFarXS: (token.marginXXL / 6) * 7,
      /** 80 */
      marginFarSM: (token.marginXXL / 3) * 5,
      /** 96 */
      marginFar: token.marginXXL * 2,
      codeFamily: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    },
    /** dumi-theme-antd 站点 class 前缀 */
    siteCls: 'dumi-antd',
  };
};

export default useSiteToken;
