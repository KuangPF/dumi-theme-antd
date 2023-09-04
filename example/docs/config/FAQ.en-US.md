---
nav:
  title: DEMO
title: FAQ
order: 3
tag:
  title: New
  color: success
---

Here are some dumi-theme-antd common questions and official answers for your reference.

## How to fully customize the homepage <Badge>0.3.0+</Badge>

The home page of `dumi-theme-antd` is generated according to the configuration by default, and there will inevitably be some custom modules in the actual use process. `dumi-theme-antd` internally separates the home page module into a built-in component of `HomeBaseLayout`, if you want While fully customizing the homepage and wanting to retain the layout of the built-in homepage, it can be introduced and used in the page. For example, to create a new page:

```md
<!-- .dumi/pages/index.md -->

<HomeBaseLayout></HomeBaseLayout>
....some text or images
<YourCustomComponent></YourCustomComponent>
```

Or import it as a React component:

```tsx | pure
/*.dumi/pages/index.tsx */
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

## Conventional secondary navigation <Badge>0.3.3+</Badge>

The theme package has been adapted to the conventional secondary navigation function provided by dumi, which is convenient for organizing documents. For the specific directory structure and FrontMatter configuration, please refer to the official website [Conventional secondary navigation](https://d.umijs.org/guide/conventional-routing#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E4%BA%8C%E7%BA%A7%E5%AF%BC%E8%88%AA)。

## How the component library documentation adapts to the dark mode

The theme switching logic inside the theme package is compatible with dumi’s built-in `usePrefersColor` API, so you can use the `@dark-selector` global variable in the Less file to add a dark mode style to the components of the theme package:

```less
.some-container {
  // Bright color mode is white
  color: #fff;

  // dark mode is black
  @{dark-selector} & {
    color: #000;
  }
}
```

If it is a pure css file, you can use [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to achieve.

## SSR <Badge>0.3.9+</Badge>

The theme package supports ssr, and the cssinjs' style was not completely compatible before the ` 0.3.9' version, but the problem has been fixed in later versions. SSR recommends the following configuration:

```ts
export default defineConfig({
  ssr: process.env.NODE_ENV === 'development' ? false : {}
});
```

:::warning
When configured as SSR, if the homepage uses the built-in homepage module of the theme package, a 404 routing page will appear briefly when it is loaded for the first time. The reason is that the built-in homepage did not export `index.html`. is not immediately loaded into the corresponding resource. The solution is to create a custom homepage, then import the built-in `<HomeBaseLayout />` module of the theme package, and then package and export`index.html`, you can refer to [dumi-theme-antd official website homepage](https:// github.com/KuangPF/dumi-theme-antd/blob/main/example/.dumi/pages/index/index.tsx).
:::

## Why is there no `index.html` after build

After using `dumi-theme-antd` theme package, the homepage is generated through configuration, and `index.md` is not written, so `index.html` will not be generated. If you want to generate `index.html`, you can add `index.md` or completely customize the home page, and then import the built-in `HomeBaseLayout` component.

:::info
When deploying GitHub Pages, it will search for the `index.html` file step by step by default. If you use nginx deployment, you can configure `try_files` related parameters. When `index.html` cannot be found in the root directory, it will go to other directories to find` index.html`.
:::
