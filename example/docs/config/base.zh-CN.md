---
nav:
  title: 配置
  order: 2
title: 基础
---

`dumi-theme-antd` 为了更好地适配 antd v5 官网主题风格，增加了一些特有字段，并将其置于 `dumi` 主题配置项 `themeConfig` 字段中，具体配置字段如下：

## 基础配置

### github

- 类型：`string`
- 默认值：`null`

导航栏 Github 图标链接，如不配置该字段，则不展示。

### bannerConfig

- 类型：`IBannerConfig`
- 默认值：`bannerConfigDefault`

```ts
export interface IBannerConfig {
  /** 是否展示头部 banner 背景 */
  showBanner?: boolean;
  /** banner 图片地址 */
  bannerImgUrl?: string;
  /** banner 移动端图片地址 */
  bannerMobileImgUrl?: string;
}

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl: 'xx', // antd v5 官网自带 banner 图
  bannerImgUrl: 'xx' // antd v5 官网自带 banner 图
};
```

首页头部 banner 图配置选项

### localesEnhance

- 类型：`ILocaleEnhance[]`
- 默认值：`dumi-theme-antd`

```ts
interface ILocaleEnhance {
  /** 同 themeConfig 中 locales 项中的 id */
  id: string;
  /** 当多语言只有两项时用于展示切换的前缀 */
  switchPrefix: string;
}
```

导航头部多语言切换前缀图标展示，只适用于两种多语言的情况。

### title

- 类型：`string | Record<string, string>`
- 默认值：`Dumi Theme AntD`

```ts
// 多语言时配置对象，key 为语言名
title: {
  'zh-CN': 'Dumi Ant Design 主题',
  'en-US': 'Dumi Theme Ant Design'
}
```

配置首页首屏区域的大标题。

### theme <Badge>0.2.6+</Badge>

- 类型：`Omit<ThemeConfig, 'algorithm'>`
- 默认值：`undefined`

```ts
theme: {
  token: {
    colorPrimary: '#00b96b',
  },
}
```

用于定制 antd 主题样式，同 `ConfigProvider` 中 `theme`，删除其预设算法`algorithm`属性，预设算法通过页面主题样式按钮修改。

### description

- 类型：`string | Record<string, string>`
- 默认值：`null`

配置首页首屏区域的简介文字。

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

在导航栏中显示当前文档版本或者多文档本下拉选择框，默认第一个属性为当前文档版本。

### moreLinks

- 类型：`IMoreLink[]`
- 默认值：`null`

```ts
interface IMoreLink {
  /** 链接文字描述 */
  text: string;
  /** 链接 */
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

在导航栏中配置更多生态系统链接。

### actions

- 类型：`IAction[] | Record<string, IAction[]>`
- 默认值：`null`

```ts
interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
  /** 按钮类型 */
  type?: 'primary' | 'default';
}

// 单语言时配置数组即可
actions: [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }]
// 多语言时配置对象，key 为语言名
actions: {
  'zh-CN': [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
```

配置首页首屏区域的操作按钮。

### features

- 类型：`IFeature[] | Record<string, IFeature[]>`
- 默认值：`null`

```ts
interface IFeature {
  /** 特性名称 */
  title: string;
  /** 特性具体描述 */
  details: string;
}
// 单语言时配置数组即可
features: [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}]
// 多语言时配置对象，key 为语言名
features: {
  'zh-CN': [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
```

配置后该页面将会以首页形式呈现，用于每行 3 个的形式展示组件库的特性。

### sidebarGroupModePath

- 类型：`Array<string | RegExp> | true`
- 默认值：`[]`

```ts
export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // 当为 true 时，全部都以分组形式展示
      sidebarGroupModePath: [
        // 匹配以 /config 开头的路由
        '/config',
        // 支持正则匹配
        /\/guide\//
      ]
    }
  }
};
```

左侧导航栏是否需要作为分组处理，参考 antd [menuitemgrouptype][antd-menuitemgrouptype-url]。

### sidebarEnhance

- 类型：`Record<string, SidebarEnhanceItems>`
- 默认值：`undefined`

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

由于 dumi 暂只支持两级侧边栏 [issues](https://github.com/umijs/dumi/issues/748)，如果定制需求需要支持三级侧边栏或者想完全定制侧边栏展示的，可以使用该参数，配置参数参考 ant-design menu 组件的 [items 属性](https://ant.design/components/menu-cn#itemtype)。

[antd-menuitemgrouptype-url]: https://ant.design/components/menu-cn#menuitemgrouptype
