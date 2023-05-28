import { css } from '@emotion/react';
import { Helmet, Outlet, useLocale, useLocation, useOutlet, useRouteMeta, useSiteData } from 'dumi';
import React, { useEffect, useMemo, type FC } from 'react';
import GlobalStyles from '../../common/GlobalStyles';
import useLocaleValue from '../../hooks/useLocaleValue';
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
    `
  };
};

const DocLayout: FC = () => {
  const outlet = useOutlet();
  const locale = useLocale();
  const location = useLocation();
  const styles = useStyles();
  const routeMeta = useRouteMeta();
  const title = useLocaleValue('title');
  const description = useLocaleValue('description');
  const { pathname, hash } = location;
  const { loading } = useSiteData();
  const is404Home = useMemo(
    () => pathname.startsWith('/index') && routeMeta.texts.length === 0,
    [pathname, routeMeta]
  );
  const content = useMemo(() => {
    if (
      ['', '/'].some((path) => path === pathname) ||
      ['/index'].some((path) => pathname.startsWith(path))
    ) {
      return (
        <React.Fragment>
          {outlet && !is404Home ? outlet : <Homepage />}
          <Footer />
        </React.Fragment>
      );
    }
    return routeMeta.frontmatter?.sidebar === false ? (
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
    ) : (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    );
  }, [routeMeta.frontmatter?.sidebar, outlet, pathname, is404Home]);

  // handle hash change or visit page hash from Link component, and jump after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');
    if (id) document.getElementById(decodeURIComponent(id))?.scrollIntoView();
  }, [loading, hash]);

  return (
    <div css={styles.layoutWrap}>
      <Helmet encodeSpecialCharacters={false}>
        <html lang={locale.id} />
        <title>{`${title || 'dumi'}${description ? `-${description}` : ''}`}</title>
        <link
          sizes="144x144"
          href="https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
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
