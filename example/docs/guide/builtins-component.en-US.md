---
order: 3
title: Builtins Component
---

In order to use some components in Markdown more conveniently and enhance the display effect of Markdown, some common components are built into the theme, as follows:

## Alert <Badge>0.2.5+</Badge>

Warning prompt, showing the information that needs attention, using the same method as the `antd` [Alert](https://ant.design/components/alert-cn) component, which supports `type`, `closable` and `showIcon` parameters , with the same type.

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
