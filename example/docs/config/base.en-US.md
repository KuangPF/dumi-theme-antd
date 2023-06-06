---
nav:
  title: config
  order: 2
title: Base
---

`dumi-theme-antd` In order to better adapt to the theme style of the antd v5 official website, some unique fields have been added and placed in the `themeConfig` field of the `dumi` theme configuration item. The specific configuration fields are as follows:

## Basic Configuration

### github

- type：`string`
- default：`null`

The Github icon link in the navigation bar. If this field is not configured, it will not be displayed.

### bannerConfig

- type：`IBannerConfig`
- default：`bannerConfigDefault`

```ts
export interface IBannerConfig {
  /** Whether to display the header banner background*/
  showBanner?: boolean;
  /** banner url */
  bannerImgUrl?: string;
  /** banner mobile url */
  bannerMobileImgUrl?: string;
}

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl: 'xx', // antd v5 official website comes with banner image
  bannerImgUrl: 'xx' // antd v5 official website comes with banner image
};
```

Home page header banner image configuration options

### localesEnhance

- type：`ILocaleEnhance[]`
- default：`dumi-theme-antd`

```ts
interface ILocaleEnhance {
  /** Same as the id in the locales item in themeConfig */
  id: string;
  /** The prefix used to display switching when there are only two items in multiple languages */
  switchPrefix: string;
}
```

The display of the multi-language switching prefix icon in the navigation header is only applicable to two multi-language situations.

### title

- type：`string | Record<string, string>`
- default：`Dumi Theme AntD`

```ts
// multi-language configuration object, the key is the language name
title: {
  'zh-CN': 'Dumi Ant Design 主题',
  'en-US': 'Dumi Theme Ant Design'
}
```

Configure the title of the first screen area on the home page.

### theme <Badge>0.2.6+</Badge>

- type：`Omit<ThemeConfig, 'algorithm'>`
- default：`undefined`

```ts
theme: {
  token: {
    colorPrimary: '#00b96b',
  },
}
```

It is used to customize antd theme style, same as `theme` in `ConfigProvider`, delete its preset algorithm `algorithm` attribute, and the preset algorithm can be modified through the page theme style button.

### description

- type：`string | Record<string, string>`
- default：`null`

Configure the introduction text of the first screen area on the home page.

### docVersions

- 类型：`IDocVersion`
- 默认值：`null`

```ts
interface IDocVersion {
  [propName: string]: string;
}
// .dumi.ts
docVersions: {
  '1.0.0': '',
  '0.x.x': 'http://xxxx.com'
}
```

Display the current document version or multi-document drop-down selection box in the navigation bar, and the default first attribute is the current document version.

### moreLinks

- 类型：`IMoreLink[]`
- 默认值：`null`

```ts
interface IMoreLink {
  /** link text description */
  text: string;
  /** link */
  link: string;
}
// .dumi.ts
moreLinks: [
  {
    text: 'Dumi',
    link: 'https://d.umijs.org/'
  },
  {
    text: 'Ant Design',
    link: 'https://ant.design/'
  }
];
```

Configure more ecosystem links in the navigation bar.

### actions

- type：`IAction[] | Record<string, IAction[]>`
- default：`null`

```ts
interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
  /** 按钮类型 */
  type?: 'primary' | 'default';
}

// Just configure the array for single language
actions: [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }]
// Multi-language configuration object, the key is the language name
actions: {
  'zh-CN': [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
```

Configure the operation buttons in the first screen area of the home page.

### features

- type：`IFeature[] | Record<string, IFeature[]>`
- default：`null`

```ts
interface IFeature {
  /** title */
  title: string;
  /** detail */
  details: string;
}
// Just configure the array for single language
features: [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}]
// Multi-language configuration object, the key is the language name
features: {
  'zh-CN': [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
```

After configuration, the page will be presented as the homepage, used to display the features of the component library in the form of 3 per row.

### sidebarGroupModePath

- type：`Array<string | RegExp> | true`
- default：`[]`

```ts
export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // when true, all routes will be treated as a group
      sidebarGroupModePath: [
        // Matches routes starting with `/config`
        '/config',
        // Support regular matching
        /\/guide\//
      ]
    }
  }
};
```

Whether the left navigation bar needs to be treated as a group, please refer to antd [menuitemgrouptype][antd-menuitemgrouptype-url].

### sidebarEnhance

- type：`Record<string, SidebarEnhanceItems>`
- default：`undefined`

```ts
export default {
  themeConfig: {
    sidebarEnhance: {
      '/welcome': [
        {
          title: '快速开始',
          type: 'group',
          children: [
            {
              // 支持多层级
              title: '安装',
              children: [
                '/welcome/getting-started/installation', // 支持仅填写链接，title 自动根据 `# xxx` 生成
                '/welcome/getting-started/installation/docker'
              ]
            },
            {
              title: '升级',
              children: [
                '/welcome/getting-started/upgrading',
                '/welcome/getting-started/upgrading/docker-compose'
              ]
            }
          ]
        },
        // 支持对象的方式
        {
          title: '更新记录',
          link: 'https://github.com/xx/xx/changelog.md'
        }
      ]
    }
  }
};
```

Since dumi only supports two-level sidebar [issues](https://github.com/umijs/dumi/issues/748), if the customization needs need to support three-level sidebar or want to fully customize the sidebar display , you can use this parameter. For configuration parameters, refer to the [items attribute](https://ant.design/components/menu-cn#itemtype) of the ant-design menu component.

[antd-menuitemgrouptype-url]: https://ant.design/components/menu-cn#menuitemgrouptype
