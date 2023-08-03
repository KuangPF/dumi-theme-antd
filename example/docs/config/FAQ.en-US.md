---
nav:
  title: DEMO
title: FAQ
order: 3
---

Here are some dumi-theme-antd common questions and official answers for your reference.

> WIP

## How to fully customize the homepage

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
