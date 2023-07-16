import React, { useCallback } from 'react';
import { Skeleton, Space, Spin } from 'antd';
import { useLocation } from 'dumi';
import type { IAllThemeConfig } from '../../types';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';

const defaultLoadingConfig: IAllThemeConfig['loading'] = {
  skeleton: []
};

const Loading: React.FC = () => {
  const { pathname } = useLocation();
  const { loading = defaultLoadingConfig } = useAdditionalThemeConfig();

  const skeletonLoadingRenderRule = useCallback(() => {
    const pathnameReg = loading.skeleton;
    if (pathnameReg) {
      return (
        pathnameReg.filter((rule) => {
          return pathname.startsWith(rule);
        }).length > 0
      );
    }
    return false;
  }, [loading, pathname]);

  if (skeletonLoadingRenderRule()) {
    return (
      <Space direction="vertical" style={{ width: '100%', marginTop: 24 }} size={40}>
        <Skeleton title={false} active paragraph={{ rows: 3 }} />
        <Skeleton active paragraph={{ rows: 3 }} />
      </Space>
    );
  }

  return (
    <Space style={{ width: '100%', margin: '120px 0', justifyContent: 'center' }} align="center">
      <Spin size="large" />
    </Space>
  );
};

export default Loading;
