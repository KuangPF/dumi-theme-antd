---
order: 1
title: Change Log
timeline: true
tag: VERSION
---

`dumi-theme-antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

## 0.4.4

`2025-02-27`

- 🐞 修复渲染异常

## 0.4.3

`2025-02-24`

- 🛠 优化依赖版本。[#36](https://github.com/KuangPF/dumi-theme-antd/issues/40)。

## 0.4.2

`2024-08-15`

- 💄 优化 dumi 默认页面 Tab 样式[#36](https://github.com/KuangPF/dumi-theme-antd/issues/36)。

## 0.4.1

`2024-05-23`

- 🛠 优化 SSR 样式提取逻辑。
- 💄 调整 `RTL` icon。


## 0.4.0

`2024-05-22`

- 🛠 升级 `dumi` 以及 `antd` 版本号。
- 💄 优化侧边栏暗黑模式下背景颜色。

`2024-05-14`

- 🐞 修复 `defineThemeConfig` 引入报错[#34](https://github.com/KuangPF/dumi-theme-antd/issues/34)。
- 🐞 修复导航栏选中样式逻辑。
- 💄 删除 `Table` 预置宽度，默认不干预样式。

## 0.3.17

`2024-05-10`

- 🐞 修复自定义首页无效。

## 0.3.16

`2024-05-09`

- 💄 内容区样式优化，当内容区内容较少时，高度默认撑满。

## 0.3.15

`2024-05-09`

- 💄 点击文档锚点页面滚动位置优化。
- 💄 `themeConfig` 中 logo 支持 `boolean` 类型控制显隐。
- 💄 内容区样式优化，当内容区内容较少时，高度默认撑满[#33](https://github.com/KuangPF/dumi-theme-antd/issues/33)。
- 🆕 内置组件 `<BashOSPlatform />` 新增支持 ios 和 android。

## 0.3.14

`2024-04-07`

- 🐞 `themeConfig` 的 nav 配置 children 无效[#30](https://github.com/KuangPF/dumi-theme-antd/issues/30)。

## 0.3.13

`2024-03-14`

- 🆕 升级 `dumi` 依赖版本。
- 🐞 多语言配置导致 sidebar 选中状态无效[#27](https://github.com/KuangPF/dumi-theme-antd/issues/27)。
- 💄 优化页面加载效果。

## 0.3.12

`2023-09-05`

- 🆕 支持官方 `editLink` 配置字段。
- 📃 文档更新：FAQ 页面增加 **构建后为什么没有 `index.html`** 项

## 0.3.11

`2023-08-31`

- 🛠 重构主题切换内部逻辑，适配官方 `prefersColor` 配置项。
- 🛠 兼容官方 `socialLinks.github` 配置.
- 💄 优化暗黑模式下滚动条样式。

## 0.3.10

`2023-08-29`

- 🆕 新增内置组件 `<BashOSPlatform />`,[详情](/guide/builtins-bash--o-s-platform)。

`2023-08-22`

- 🛠 重构提取 @emotion cssinjs 样式导出方法，避免样式加载闪烁。
- 💄 适配 dumi 内置 markdown 增强 tip 颜色，与 antd 色系保持一致。
- 💄 优化页面部分 api，更好兼容 SSR。

## 0.4.1

`2024-05-23`

- 🛠 优化 SSR 样式提取逻辑。
- 💄 调整 `RTL` icon。

## 0.3.8

`2023-08-20`

- 🐞 修复 SSR 样式设置 `publicPath` 不设置时返回为 `undefined` 的问题。
- 🆕 内容区 toc 支持 FrontMatter `toc` 控制显隐。

## 0.3.7

`2023-08-20`

- 🐞 修复 SSR 样式设置 `publicPath` 时引入路径不对。

## 0.3.6

`2023-08-20`

- 🐞 修复 SSR 样式没有单独提取导致首次加载样式闪屏[#20](https://github.com/KuangPF/dumi-theme-antd/issues/20)。

## 0.3.5

`2023-08-18`

- 🆕 支持官方 `lastUpdated` 配置项。

## 0.3.4

`2023-08-10`

- 💄 优化内置 `PrevAndNext` 展示逻辑。
- 🆕 菜单项支持 `Tag` 配置，详细说明见[菜单栏-tag-配置](/config/markdown#菜单栏-tag-配置)。

## 0.3.3

`2023-08-09`

- 💄 修复首页背景大图 max-width 样式属性在自定义首页中通 Markdown.css 样式冲突。
- 🆕 支持约定式二级目录导航。
- 📃 文档更新：示例页面增加二级目录导航以及 FAQ 增加相关介绍说明。

## 0.3.2

`2023-08-06`

- 💄 增加内置模块`<Footer />`导出，便于在自定义页面使用。
- 💄 Footer 更多链接模块图片样式优化，避免样式冲突。
- 💄 删除自定义页面默认 `padding` 样式。
- 💄 首页初次加载完成后设置 html `data-prefers-color` 值。
- 🆕 首页 action 跳转链接适配主题切换。

## 0.3.1

`2023-08-04`

- 💄 优化内置模块`<Loading /> 以及 <HomeBaseLayout />`导出形式。
- 💄 优化内置 `types` 导出，提升配置体验。
- 🐞 修改 `useSiteToken` hook 中 `config-provider/ConfigContext` 引入路径为 `lib` 形式。
- 📃 文档更新：示例页面增加无侧边栏案例。

## 0.3.0

`2023-08-04`

- 🆕 首页模块导出为内置组件，支持在自定义首页中引入进行扩展,详细说明见[如何完全自定义首页](/config/faq#如何完全自定义首页)。

## 0.2.13

`2023-08-02`

- 🐞 修复内置 `dumi` 以及 `antd` 版本依赖问题，避免控制打印 API 废弃日志[#19](https://github.com/KuangPF/dumi-theme-antd/issues/19)。

## 0.2.12

`2023-07-27`

- 🐞 修复 `useMenu` hook 在某些情况下出现报错白屏问题。
- 💄 优化 `footer` 配置， 支持多语言配置。
- 🆕 侧边栏三级分组 `type` 字段支持排序。
- 🆕 增加 `footerLinks` 配置，用于在 `footer` 上方展示更多友情链接，详见 [footerLinks](/config/base#footerlinks)。
- 📃 文档更新：增加示例页面。

## 0.2.11

`2023-07-19`

- 🐞 修复 `useLocaleValue` 多语言模式下取值兼容问题[#17](https://github.com/KuangPF/dumi-theme-antd/issues/17)。
- 🐞 修复 `title` 配置为多语言时，document.title 展示异常。
- 🛠 配置项 `moreLinks` 支持多语言配置。
- 💄 优化首页 `features` 大于三项时布局展示。
- 💄 Footer 删除默认拼接模式，渲染值完全由传入值接管。

## 0.2.10

`2023-07-16`

- 🐞 修复头部导航链接为外部链接时不能正确设置其跳转值。
- 🐞 `sidebarGroupModePath` 配置删除正则匹配选项，原因在于正则类型在 dumi 内部无法被正常序列化。
- 🆕 新增 `InstallDependencies` 内置组件[详情](/guide/builtins-install-dependencies)。
- 🆕 新增 `loading` 配置项，用于增强页面交互体验[详情](/config/base#loading)。
- 📃 文档更新：将内置组件菜单调整为二级导航菜单。

## 0.2.9

`2023-07-11`

- 🐞 当 actions `url` 为绝对路径时，Button 按钮 key 值适配 [#15](https://github.com/KuangPF/dumi-theme-antd/pull/15)。

## 0.2.8

`2023-07-11`

- 🐞 修复非多语言模式下，`useLocaleValue` 无法获取 actions 值 [#13](https://github.com/KuangPF/dumi-theme-antd/pull/13)。
- 🆕 rtl 导航支持配置，详见 [rtl](/config/base-en#rtl)。

## 0.2.7

`2023-06-08`

- 🆕 增加图片预览 `<ImagePreview />` 内置组件。

## 0.2.6

`2023-06-05`

- 🆕 支持 `LTR` 以及 `RTL` 文字方向切换。
- 🆕 支持 antd 定制主题配置，详见 [theme](/config/base-en#theme)。
- 🐞 修复传入 `bannerConfig` 配置，头部图片被压缩。[#7](https://github.com/KuangPF/dumi-theme-antd/issues/7)

## 0.2.5

`2023-05-31`

- 🆕 支持 `sidebarGroupModePath` 为 `true`，详细说明见 [sidebarGroupModePath 配置](/config/base-en#sidebargroupmodepath)。
- 🆕 增加 `<Alert />` 内置组件。
- 🆕 支持多级 sidebar，详细见 [sidebarEnhance 配置](/config/base-en#sidebarenhance)。
- 🆕 支持首页完全自定义渲染。
- 💄 新增多级侧边栏配置文档[多级侧边栏](/config/markdown-en#multi-level-sidebar)。

## 0.2.4

- 🐞 修复页面锚点以及搜索框点击不跳转至对于区域[#6](https://github.com/KuangPF/dumi-theme-antd/issues/6)。

## 0.2.3

- 🆕 首页 banner 区域支持自定义配置[#4](https://github.com/KuangPF/dumi-theme-antd/issues/4)。

## 0.2.2

- 🆕 导航栏支持配置更多生态链接。
- 🆕 文档增加上一页以及下一页操作。

## 0.2.1

- 🆕 增加文档版本显示配置。
- 🆕 增加紧凑主题模式。
- 🆕 首页 `action` 支持外部链接 [#2](https://github.com/KuangPF/dumi-theme-antd/issues/2)。
- 🆕 优化暗黑模式下，字体颜色、图片透明度、搜索框以及代码预览模块样式。
- 💄 更新相关文档。

## 0.2.0

- 🆕 优化首页内容，增加视频动画效果。
- 🐞 修复多语言切换第二次点击路由无法跳转。
- 💄 优化配置项，将配置项字段移动到 dumi 内置 `themeConfig` 字段中。
- 💄 更新相关文档。

## 0.1.4

- 🆕 调整 api 文档表格样式。
- 🐞 导航栏切换保留暗黑主题参数。
- ⌨️ 项目使用 `@utopia` 中内置 eslint rules 以及 prettier configs。

## 0.1.3

- 🆕 文档适配英文。
- 🆕 语言切换维持系统主题。
- 🐞 黑模式下，多语言切换图标字体颜色调整。
- 🐞 文档拼写错误。

## 0.1.2

- 🆕 移动端适配：增加二级导航栏。
- 🆕 首页适配多语言展示。
- 🐞 修复移动端模式下出现横向滚动条。
- 🐞 修复 `markdown` 内容标题不显示锚点。

## 0.1.1

- 🆕 适配移动端。
- 🆕 支持浅色主题、暗黑主题两种主题切换。

## 0.1.0

- 🐞 修复非多语言情况下出现下拉选择。

## 0.0.9

- 🛠 重构 `Footer` 内容，使用 dumi 内置 `footer` 配置信息。
- 🛠 更新相应文档介绍。

## 0.0.8

- 🆕 新增 404 页面布局，内置 `zh/en` 切换。

## 0.0.7

- 🐞 修复使用 `@emotion/react`情况下 ， React `<>` 节点编译问题。

## 0.0.6

- 🐞 修复使用 `@emotion/react`情况下 ， React `<>` 节点编译问题。

## 0.0.5

- 🆕 新增 `sidebarGroupModePath` 字段配置。
