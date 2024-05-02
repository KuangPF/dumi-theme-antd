---
group: 内置组件
title: 依赖安装
order: 3
---

依赖安装组件用于展示脚本安装信息，内置 `npm` 、`yarn`以及 `pnpm` 三种包管理器，安装脚本语句分别通过不用的 prop 参数传递：

- npm: 展示 `npm` 包管理器安装信息
- yarn: 展示 `yarn` 包管理器安装信息
- pnpm: 展示 `pnpm` 包管理器安装信息

```md
<InstallDependencies 
  npm='$ npm install dumi-theme-antd ' 
  yarn='$ yarn add dumi-theme-antd' 
  pnpm='$ pnpm install dumi-theme-antd ' 
/>
</InstallDependencies>
```

可以设置 `defaultActiveKey` 值指定初始化选中面板的 key。

<InstallDependencies 
  npm='$ npm install dumi-theme-antd ' 
  yarn='$ yarn add dumi-theme-antd' 
  pnpm='$ pnpm install dumi-theme-antd ' 
/>
</InstallDependencies>

只展示部分包管理器：

```md
<InstallDependencies 
  npm='$ npm install' 
  yarn='$ yarn'
/>
</InstallDependencies>
```

<InstallDependencies 
  npm='$ npm install' 
  yarn='$ yarn'
/>
</InstallDependencies>
