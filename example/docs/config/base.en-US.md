---
nav:
  title: config
  order: 2
title: Base
---

`dumi-theme-antd` In order to better adapt to the theme style of the antd v5 official website, some unique fields have been added and placed in the `themeConfig` field of the `dumi` theme configuration item. The specific configuration fields are as follows:

## Basic configuration

### github

- type：`string`
- default：`null`

The Github icon link in the navigation bar. If this field is not configured, it will not be displayed.

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

### description

- type：`string | Record<string, string>`
- default：`null`

Configure the introduction text of the first screen area on the home page.

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

- type：`Array<string | RegExp>`
- default：`[]`

```ts
export default {
  themeConfig: {
    antdTheme: {
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

[antd-menuitemgrouptype-url]: https://ant.design/components/menu-cn#menuitemgrouptype
