---
nav:
  title: 配置
title: FAQ
order: 3
---

以下整理了一些 dumi-theme-antd 常见的问题和官方答复，可供参考。

> WIP

## 如何完全自定义首页 <Badge>0.3.0+</Badge>

`dumi-theme-antd` 首页默认是根据配置生成，在实际使用过程中难免会存在一些定制模块，`dumi-theme-antd`内部将首页模块单独抽离成了 `HomeBaseLayout` 内置组件，如果想在完全自定义首页的同时又想保留内置首页的布局，可在页面中引入使用。例如，新建页面：

```md
<!-- .dumi/pages/index.md -->

<HomeBaseLayout></HomeBaseLayout>
.... some text or images
<YourCustomComponent></YourCustomComponent>
```

或者以 React 组件的形式引入：

```tsx | pure
/* .dumi/pages/index.tsx */
import HomeBaseLayout from 'dumi-theme-antd/homeBaseLayout';

const CustomHomePage = () => {
  return (
    <div>
      <HomeBaseLayout />
      <div>other content</div>
    </div>
  );
};

export default CustomHomePage;
```
