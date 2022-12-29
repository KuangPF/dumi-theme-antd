---
nav:
  title: 配置
  order: 2
title: 基础
---

`dumi-theme-antd` 为了更好地管理主题特有字段，将所有主题相关配置项存于 `themeConfig.antdTheme` 字段中，具体配置字段如下：

## 基础配置

### github

- 类型：`string`
- 默认值：`null`

导航栏 Github 图标链接，如不配置该字段，则不展示。

### owner

- 类型：`string`
- 默认值：`dumi-theme-antd`

footer 版权所有者信息，可以是 HTML。

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

- 类型：`string`
- 默认值：`Dumi Theme AntD`

配置首页首屏区域的大标题。

### description

- 类型：`string`
- 默认值：`null`

配置首页首屏区域的简介文字。

### actions

- 类型：`IAction[]`
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
```

配置首页首屏区域的操作按钮。

### features

- 类型：`IFeature[]`
- 默认值：`null`

```ts
interface IFeature {
  /** 特性名称 */
  title: string;
  /** 特性具体描述 */
  details: string;
}
```

配置首页首屏区域特性描述模块，推荐配置 3 条数据。
