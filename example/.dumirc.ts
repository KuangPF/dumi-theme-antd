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
      title: 'Dumi Theme AntD',
      description: 'Ant Design 5.0 官网风格',
      actions: [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide',
        },
        {
          text: '配置',
          link: '/config',
        },
      ],
      features: [
        {
          title: '内置全文搜索',
          details:
            '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。',
        },
        {
          title: '更好的编译性能',
          details:
            '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。',
        },
        {
          title: '开箱即用',
          details: '接入简单，安装即使用，全面融入 Ant Design 风格。',
        },
      ],
    },
  },
});
