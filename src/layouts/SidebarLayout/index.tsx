import type { FC } from 'react';
import React from 'react';
import CommonHelmet from '../../common/CommonHelmet';
import Sidebar from '../../slots/Sidebar';

const SidebarLayout: FC = () => (
  <main style={{ display: 'flex', marginTop: 40 }}>
    <CommonHelmet />
    <Sidebar />
  </main>
);

export default SidebarLayout;
