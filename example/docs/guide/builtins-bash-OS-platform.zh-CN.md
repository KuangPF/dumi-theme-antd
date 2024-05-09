---
group: 内置组件
title: OS 平台脚本
order: 3
tag:
  title: New
  color: success
---

OS 平台脚本组件用于展示在不同操作系统平台所对应的脚本内容，内置 `Windows` 、`macOS`以及 `Linux` 三种操作系统平台，脚本内容分别通过不用的 prop 参数传递：

- windows: 展示 `Windows` 平台脚本信息
- macos: 展示 `macOS` 平台脚本信息
- linux: 展示 `Linux` 平台脚本信息
- ios: 展示 `ios` 平台脚本信息
- android: 展示 `android` 平台脚本信息

```md
<BashOSPlatform 
  windows='winget install Docker.DockerDesktop' 
  macos='$ brew install --cask docker' 
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io'
  ios='$ swift package init --name MyCLI --type executable' 
  android='$ apksigner verify --print-certs path/to/your/app.apk'
/>
```

可以设置 `defaultActiveKey` 值指定初始化选中面板的 key。

<BashOSPlatform 
  windows='winget install Docker.DockerDesktop' 
  macos='$ brew install --cask docker' 
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io' 
  ios='$ swift package init --name MyCLI --type executable' 
  android='$ apksigner verify --print-certs path/to/your/app.apk' 
/>

只展示部分平台脚本信息：

```md
<BashOSPlatform 
  macos='$ brew install --cask docker' 
/>
```

<BashOSPlatform 
  macos='$ brew install --cask docker' 
/>
