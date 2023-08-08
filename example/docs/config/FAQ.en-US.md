---
nav:
  title: DEMO
title: FAQ
order: 3
---

Here are some dumi-theme-antd common questions and official answers for your reference.

> WIP

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
