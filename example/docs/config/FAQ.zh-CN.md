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
import { HomeBaseLayout } from 'dumi-theme-antd';

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

## 约定式二级导航 <Badge>0.3.3+</Badge>

主题包已适配 dumi 提供的约定式二级导航功能，该功能便于组织文档，具体目录结构以及 FrontMatter 配置可参考官网[约定式二级导航](https://d.umijs.org/guide/conventional-routing#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E4%BA%8C%E7%BA%A7%E5%AF%BC%E8%88%AA)。

## 组件库文档如何适配暗黑模式

主题包内部主题切换逻辑兼容 dumi 内置`usePrefersColor` API，因此可以在 Less 文件中使用 `@dark-selector` 的全局变量来为主题包的组件增加暗色模式的样式：

```less
.some-container {
  // 亮色模式为白色
  color: #fff;

  // 暗色模式变黑色
  @{dark-selector} & {
    color: #000;
  }
}
```

如果是纯 css 文件，可使用[prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)实现。
