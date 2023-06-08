---
order: 4
title: 更新日志
toc: false
timeline: true
---

`dumi-theme-antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

## 0.2.7

`2023-06-08`

- 🆕 增加图片预览 `<ImagePreview />` 内置组件。

## 0.2.6

`2023-06-05`

- 🆕 支持 `LTR` 以及 `RTL` 文字方向切换。
- 🆕 支持 antd 定制主题配置，详见 [theme](/config/base#theme)。
- 🐞 修复传入 `bannerConfig` 配置，头部图片被压缩。[#7](https://github.com/KuangPF/dumi-theme-antd/issues/7)

## 0.2.5

`2023-05-31`

- 🆕 支持 `sidebarGroupModePath` 为 `true`，详细说明见 [sidebarGroupModePath 配置](/config/base#sidebargroupmodepath)。
- 🆕 增加 `<Alert />` 内置组件。
- 🆕 支持多级 sidebar，详细见 [sidebarEnhance 配置](/config/base#sidebarenhance)。
- 🆕 支持首页完全自定义渲染。
- 💄 新增多级侧边栏配置文档[多级侧边栏](/config/markdown#多级侧边栏)。

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
