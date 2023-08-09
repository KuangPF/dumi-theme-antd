---
nav:
  title: Config
title: Markdown Config
order: 2
---

All Markdown configurations are configured in the form of FrontMatter at the top of the Markdown file, for example

```
---
title: configure page title
---

Additional Markdown content
```

Currently the theme supports the following Markdown configurations.

## Multi-level sidebar

> This configuration needs to be distinguished from the `sidebarEnhance` parameter. The `sidebarEnhance` parameter is to deal with issues such as multi-level file directories, custom sidebars, and preventing multi-level sidebar clicks and jumps. The Markdown configuration is in the same Under the file directory, functions such as grouping and three-level sidebars are realized through configuration.

<Alert type="warning" showIcon closable>
   This configuration only takes effect in none <code>sidebarGroupModePath</code> mode.
</Alert>

Configuring multi-level sidebars mainly depends on two fields `group` and `type`, `group` configures the first-level sidebar, and `type` configures the second-level sidebar. First level sidebar configuration:

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

Second level sidebar configuration:

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

The `group` field type supports object format, which is used to adjust the display order of `group`. For example, setting the `order` field in `group` can adjust the order of `global style` and `design mode`:

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

Similarly, `type` field type also supports object format, which is used to adjust the display order of `type`.

## Hide the sidebar

To hide the sidebar just set the `sidebar` value to `false` in FrontMatter:

```md
---
sidebar: false
nav: example
title: hide sidebar
order: 3
---
```

## Menu bar Tag configuration <Badge>+0.3.4</Badge>

In order to display the menu bar update or identify the status, the menu supports tag configuration:

```md
---
tag:
  title: new
  color: success <!-- Same as color attribute of antd Tag component,eg. success,processing,warning etc.-->
---
```

The menu is then rendered as:
<img description="tag" width=300 src="https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/259418494-f44e99d2-7ce2-4816-8eb1-45b66c473ea6.png" / >

You can also directly use the simple mode and configure it directly as a string. In this case, the default color is `processing`.

```md
---
tag: new
---
```
