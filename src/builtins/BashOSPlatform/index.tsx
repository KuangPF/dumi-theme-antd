import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import SourceCode from 'dumi/theme-default/builtins/SourceCode';
import React, { useContext } from 'react';
import SiteContext from '../../slots/SiteContext';
import type { SiteContextProps } from '../../slots/SiteContext';
import WindowsLogo from './windows';
import MacOSLogo from './macos';
import LinuxLogo from './linux';

interface BashOSPlatformProps {
  windows?: string;
  linux?: string;
  macos?: string;
}

const windowsLabel = (
  <span className="snippet-label">
    <WindowsLogo />
    windows
  </span>
);

const MacOSLabel = (props) => (
  <span className="snippet-label">
    <MacOSLogo {...props} />
    macos
  </span>
);

const linuxLabel = (
  <span className="snippet-label">
    <LinuxLogo />
    linux
  </span>
);

const BashOSPlatform: React.FC<BashOSPlatformProps> = (props) => {
  const { windows, linux, macos } = props;
  const { theme } = useContext<SiteContextProps>(SiteContext);
  const items = React.useMemo<TabsProps['items']>(
    () =>
      [
        {
          key: 'windows',
          children: windows ? <SourceCode lang="bash">{windows}</SourceCode> : null,
          label: windowsLabel
        },
        {
          key: 'linux',
          children: linux ? <SourceCode lang="bash">{linux}</SourceCode> : null,
          label: linuxLabel
        },
        {
          key: 'macos',
          children: macos ? <SourceCode lang="bash">{macos}</SourceCode> : null,
          label: <MacOSLabel theme={theme} />
        }
      ].filter((item) => item.children),
    [windows, linux, macos, theme]
  );
  return <Tabs className="antd-site-snippet" defaultActiveKey="windows" items={items} />;
};

export default BashOSPlatform;
