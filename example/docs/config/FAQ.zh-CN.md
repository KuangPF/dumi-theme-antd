---
nav:
  title: 配置
title: FAQ
order: 3
tag:
  title: New
  color: success
---

以下整理了一些 dumi-theme-antd 常见的问题和官方答复，可供参考。

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

## SSR <Badge>0.3.9+</Badge>

主题包支持 SSR，`0.3.9` 版本之前 `cssinjs` 样式未做完全兼容，之后版本已修复该问题， ssr 推荐配置：

```ts
export default defineConfig({
  ssr: process.env.NODE_ENV === 'development' ? false : {}
});
```

:::warning
在配置为 SSR 时，首页如果使用的是主题包内置的首页模块，在首次加载时会短暂出现 404 路由页面，原因在于内置首页在文档构建时没有导出 `index.html`，因此当路由指向首页时并不会立即加载到对应的资源。解决方式可新建自定义首页，然后引入主题包内置的 `<HomeBaseLayout />` 模块即可，然后打包就导出`index.html`，可参考 [dumi-theme-antd 官网首页](https://github.com/KuangPF/dumi-theme-antd/blob/main/example/.dumi/pages/index/index.tsx)。
:::

## 构建后为什么没有 `index.html`

使用 `dumi-theme-antd` 主题包后，首页是通过配置产生，没有编写 `index.md`，因此不会生成 `index.html`。如果想要生成 `index.html` 可以添加 `index.md` 或者完全自定义首页，然后引入内置 `HomeBaseLayout` 组件即可。

:::info
GitHub Pages 部署时，默认会逐级寻找 `index.html` 文件，如果采用 nginx 部署，可以配置 `try_files` 相关参数，当在根目录找不到 `index.html` 时，便去其他目录寻找 `index.html`。
:::
