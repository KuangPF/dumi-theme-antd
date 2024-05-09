---
group: Builtins Components
title: BashOSPlatform
order: 4
tag:
  title: New
  color: success
---

The OS platform script component is used to display the script content corresponding to different operating system platforms. There are three built-in operating system platforms `Windows`, `macOS` and `Linux`. The script content is passed through different prop parameters:

- windows: show `Windows` platform script information
- macos: show `macOS` platform script information
- linux: show `Linux` platform script information
- ios: show `ios` platform script information
- android: show `android` platform script information

```md
<BashOSPlatform 
  windows='winget install Docker.DockerDesktop' 
  macos='$ brew install --cask docker' 
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io'
  ios='$ swift package init --name MyCLI --type executable' 
  android='$ apksigner verify --print-certs path/to/your/app.apk'
/>
```

You can set the `defaultActiveKey` value to specify the key to initialize the selected panel.

<BashOSPlatform 
  windows='winget install Docker.DockerDesktop' 
  macos='$ brew install --cask docker' 
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io' 
  ios='$ swift package init --name MyCLI --type executable' 
  android='$ apksigner verify --print-certs path/to/your/app.apk' 
/>

Only part of the platform script information is displayed:

```md
<BashOSPlatform
  macos='$ brew install --cask docker'
/>
```

<BashOSPlatform
  macos='$ brew install --cask docker'
/>
