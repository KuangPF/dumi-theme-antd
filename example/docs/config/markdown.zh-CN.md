---
nav:
  title: 配置
title: Markdown 配置
order: 2
---

所有 Markdown 配置均以 FrontMatter 的形式配置在 Markdown 文件顶端，例如

```
---
title: 配置页面标题
---

其他 Markdown 内容
```

目前主题支持以下 Markdown 配置。

## 多级侧边栏

> 需将该配置与 `sidebarEnhance` 参数区分，`sidebarEnhance` 参数是为了处理多级文件目录、自定义侧边栏以及防止多级侧边栏点击跳转等问题，而该 Markdown 配置则是在同一文件目录下，通过配置实现分组以及三级侧边栏等功能。

<Alert type="warning" showIcon closable>
  该配置只在非 <code>sidebarGroupModePath</code> 模式下生效。 
</Alert>

配置多级侧边栏主要依赖 `group` 以及 `type` 两个字段，`group`配置一级侧边栏，`type`配置二级侧边栏。一级侧边栏配置：

```
<!-- /xx/a.md -->
---
group: '全局样式'
order: 0
title: '色彩'
---

<!-- /xx/b.md -->
---
group: '全局样式'
order: 1
title: '布局'
---
```

![side-menu-1](https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/242193437-38a1cd75-493f-4c23-96d2-0ecd2fad662c.png)

二级级侧边栏配置：

```
<!-- /xx/c.md -->
---
group: '设计模式'
order: 0
title: '概览'
---

<!-- /xx/d.md -->
---
group: '设计模式'
type: '模板文档'
order: 1
title: '表单页'
---

<!-- /xx/e.md -->
---
group: '设计模式'
type: '模板文档'
order: 0
title: '数据可视化页'
---
```

![side-menu-2](https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/242193448-133ef65c-7ad6-4531-adcd-5e70d9bda289.png)

`group` 字段类型支持对象格式，用于调整 `group` 显示顺序，比如设置 `group` 中 `order` 字段，可调整`全局样式`与`设计模式`顺序:

```
<!-- /xx/a.md -->
---
group:
  title: '全局样式'
  order: 2
order: 1
title: '布局'
---

<!-- /xx/c.md -->
---
group:
  title: '设计模式'
  order: 1
order: 0
title: '概览'
---
```

![side-menu-3](https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/242193454-eb63d438-1cd8-41d1-8563-c628245bda09.png)

同理，`type` 字段类型也支持对象格式，用于调整 `type` 显示顺序。

## 隐藏侧边栏

隐藏侧边栏只需要在 FrontMatter 中设置 `sidebar` 值为 `false` 即可:

```md
---
sidebar: false
nav: 示例
title: 隐藏侧边栏
order: 3
---
```

## 菜单栏 Tag 配置 <Badge>+0.3.4</Badge>

为了展示菜单栏更新或者标识状态，菜单支持 tag 配置:

```md
---
tag:
  title: New
  color: success <!-- 同 antd Tag 组件 color 属性，eg. success,processing,warning etc.-->
---
```

菜单则渲染为：
<img description="tag" width=300 src="https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/259418494-f44e99d2-7ce2-4816-8eb1-45b66c473ea6.png" />

也可以直接使用简单模式，直接配置成字符串，此时默认颜色为 `processing`。

```md
---
tag: New
---
```
