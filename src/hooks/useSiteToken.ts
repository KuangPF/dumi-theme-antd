import { useContext } from 'react';
import { ConfigContext } from 'antd/es/config-provider';

const useSiteToken = ()=> {
  const { getPrefixCls } = useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  return {
    token: {
      antCls: `.${rootPrefixCls}`,
    },
  };
}

export default useSiteToken