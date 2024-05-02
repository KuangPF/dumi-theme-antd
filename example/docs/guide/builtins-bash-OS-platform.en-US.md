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

```md
<BashOSPlatform
  windows='winget install Docker.DockerDesktop'
  macos='$ brew install --cask docker'
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io'
/>
```

You can set the `defaultActiveKey` value to specify the key to initialize the selected panel.

<BashOSPlatform 
  windows='winget install Docker.DockerDesktop' 
  macos='$ brew install --cask docker' 
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io' 
/>

```md
<BashOSPlatform
  macos='$ brew install --cask docker'
/>
```

Only part of the platform script information is displayed:
<BashOSPlatform
  macos='$ brew install --cask docker'
/>
