import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import CommonHelmet from '../../common/CommonHelmet';
import Content from '../../slots/Content';
import Sidebar from '../../slots/Sidebar';

const SidebarLayout: FC<PropsWithChildren> = ({ children }) => (
  <main style={{ display: 'flex', marginTop: 40 }}>
    <CommonHelmet />
    <Sidebar />
    <Content>{children}</Content>
  </main>
);

export default SidebarLayout;
