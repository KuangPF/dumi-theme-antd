import { defineConfig } from 'dumi';

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  // pass theme config
  themeConfig: {
    name: 'dumi-theme-antd',
    hello: 'world',
  },
});
