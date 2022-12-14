import { Col, Row } from 'antd';
import { useLocale as useDumiLocale, useLocation } from 'dumi';
// import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import React, { type FC } from 'react';
import Logo from './Logo';

const Header: FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const isHome = ['', 'index', 'index-cn'].includes(pathname);

  const { id } = useDumiLocale();
  const isZhCN = id === 'zh-CN';
  const sharedProps = { isZhCN };

  const colProps = isHome
    ? [{ flex: 'none' }, { flex: 'auto' }]
    : [
        { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
        { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
      ];
  return (
    <Row style={{ flexFlow: 'nowrap', height: 64 }}>
      <Col {...colProps[0]}>
        <Logo {...sharedProps} location={location} />
      </Col>
    </Row>
  );
};

export default Header;
