import { defineConfig } from 'dumi';
import pkgJSON from '../package.json';
import { defineThemeConfig } from './.dumi/theme';

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  publicPath: '/dumi-theme-antd/',
  base: '/dumi-theme-antd',
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' }
  ],
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  // pass theme config
  themeConfig: defineThemeConfig({
    name: 'dumi-theme-antd',
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide/introduce' },
        { title: '配置', link: '/config/base' }
      ],
      'en-US': [
        { title: 'guide', link: '/guide/introduce-en' },
        { title: 'config', link: '/config/base-en' }
      ]
    },
    footer: 'KuangPF | Copyright © 2022-present',
    github: 'https://github.com/KuangPF/dumi-theme-antd',
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中' },
      { id: 'en-US', switchPrefix: 'en' }
    ],
    sidebarGroupModePath: ['/config'],
    title: 'Dumi Theme Ant Design',
    description: {
      'zh-CN': 'Ant Design 5.0 官网风格类似的 dumi2 主题插件',
      'en-US': 'dumi2 theme similar to antd v5 website'
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide/introduce'
        },
        {
          text: '配置',
          link: '/config/base'
        }
      ],
      'en-US': [
        {
          type: 'primary',
          text: 'Start',
          link: '/guide/introduce-en'
        },
        {
          text: 'Config',
          link: '/config/base-en'
        }
      ]
    },
    features: {
      'zh-CN': [
        {
          title: '内置全文搜索',
          details:
            '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。'
        },
        {
          title: '更好的编译性能',
          details:
            '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。'
        },
        {
          title: '开箱即用',
          details: '接入简单，安装即使用，全面融入 Ant Design 风格。'
        }
      ],
      'en-US': [
        {
          title: 'Built-in Full-Text search',
          details:
            'There is no need to access any third-party services, and the contents such as title, text, demo, etc. can be searched, which supports multi-keyword search and will not increase the product volume.'
        },
        {
          title: 'Better Compilation Performance',
          details:
            'By combining Umi 4 MFSU, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than dumi1.x.'
        },
        {
          title: 'Simple Use',
          details:
            'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'
        }
      ]
    },
    docVersions: {
      [pkgJSON.version]: ''
    },
    moreLinks: [
      {
        text: 'Dumi',
        link: 'https://d.umijs.org/'
      },
      {
        text: 'Ant Design',
        link: 'https://ant.design/'
      }
    ]
  })
});
