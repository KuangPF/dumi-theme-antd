---
order: 3
title: 内置组件
---

为了更加方便地在 Markdown 中使用一些组件，增强 Markdown 展示效果，主题内置一些常见组件，具体如下：

## Alert <Badge>0.2.5+</Badge>

警告提示，展现需要关注的信息，使用方法同 `antd` [Alert](https://ant.design/components/alert-cn) 组件，该组件支持 `type`、`closable`以及`showIcon`参数，类型与之保持一致。

```markdown
<Alert>
  Text
</Alert>

<Alert type="success" showIcon >
  Success Text
</Alert>

<Alert type="info">
  Info Text
</Alert>

<Alert type="warning">
  Warning Text
</Alert>

<Alert type="error" closable >
  Error Text
</Alert>
```

<Alert>
  Text
</Alert>

<Alert type="success" showIcon >
  Success Text
</Alert>

<Alert type="info">
  Info Text
</Alert>

<Alert type="warning">
  Warning Text
</Alert>

<Alert type="error" closable >
  Error Text
</Alert>
