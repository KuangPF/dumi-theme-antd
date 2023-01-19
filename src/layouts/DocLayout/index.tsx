import { css } from '@emotion/react';
import { Helmet, useLocale, useLocation, useOutlet } from 'dumi';
import React, { useMemo, type FC } from 'react';
import GlobalStyles from '../../common/GlobalStyles';
import Footer from '../../slots/Footer';
import Header from '../../slots/Header';
import Homepage from '../HomePageLayout';
import SidebarLayout from '../SidebarLayout';

const useStyles = () => {
  return {
    layoutWrap: css`
      display: flex;
      flex-direction: column;
      height: 100vh;
    `,
  };
};

const DocLayout: FC = () => {
  const outlet = useOutlet();
  const locale = useLocale();
  const location = useLocation();
  const styles = useStyles();
  const { pathname } = location;

  const content = useMemo(() => {
    if (
      ['', '/'].some((path) => path === pathname) ||
      ['/index'].some((path) => pathname.startsWith(path))
    ) {
      return (
        <React.Fragment>
          <Homepage />
          <Footer />
        </React.Fragment>
      );
    }
    return <SidebarLayout>{outlet}</SidebarLayout>;
  }, [pathname, outlet]);
  return (
    <div css={styles.layoutWrap}>
      <Helmet encodeSpecialCharacters={false}>
        <html lang={locale.id} />
        <link
          sizes="144x144"
          href="https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      {content}
    </div>
  );
};

export default DocLayout;
