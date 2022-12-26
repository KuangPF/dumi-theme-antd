import { defineConfig } from 'dumi';

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  publicPath: '/dumi-theme-antd/',
  base: '/dumi-theme-antd',
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  // pass theme config
  themeConfig: {
    name: 'dumi-theme-antd',
    hello: 'world',
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide' },
        { title: '配置', link: '/config' },
      ],
      'en-US': [
        { title: 'guide', link: '/guide-en' },
        { title: 'config', link: '/config-en' },
      ],
    },
    antdTheme: {
      github: 'https://github.com/KuangPF/dumi-theme-antd',
      owner: 'KuangPF | Copyright © 2022-present',
      base: '/dumi-theme-antd',
      localesEnhance: [
        { id: 'zh-CN', switchPrefix: '中' },
        { id: 'en-US', switchPrefix: 'en' },
      ],
    },
  },
});
