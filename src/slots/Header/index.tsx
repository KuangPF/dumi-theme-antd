import { css } from '@emotion/react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { useLocation } from 'dumi';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import { type FC } from 'react';
import useSiteToken from '../../hooks/useSiteToken';
import HeaderExtra from './HeaderExtral';
import LangSwitch from './LangSwitch';
import Logo from './Logo';
import Navigation from './Navigation';

// for debug...
import GlobalStyles from '../../common/GlobalStyles';

const useStyle = () => {
  const { token } = useSiteToken();
  const searchIconColor = '#ced4d9';

  return {
    header: css`
      position: relative;
      z-index: 10;
      max-width: 100%;
      background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadow};

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: ${searchIconColor};
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: ${searchIconColor};
          }
        }

        .dumi-default-search-shortcut {
          color: ${searchIconColor};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `,
    menuRow: css`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0 12px 0 0;

        &:last-child {
          margin-right: 40px;
        }
      }

      ${token.antCls}-row-rtl & {
        > * {
          &:last-child {
            margin-right: 12px;
            margin-left: 40px;
          }
        }
      }
    `,
    popoverMenu: {
      width: 300,

      [`${token.antCls}-popover-inner-content`]: {
        padding: 0,
      },
    },
  };
};

const Header: FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const isHome = ['', 'index', 'index-cn'].includes(pathname);

  const style = useStyle();

  const headerClassName = classNames({
    clearfix: true,
    'home-header': isHome,
  });

  const colProps = isHome
    ? [{ flex: 'none' }, { flex: 'auto' }]
    : [
        { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
        { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
      ];
  return (
    <header css={style.header} className={headerClassName}>
      <GlobalStyles />
      <Row style={{ flexFlow: 'nowrap', height: 64 }}>
        <Col {...colProps[0]}>
          <Logo />
        </Col>
        <Col {...colProps[1]} css={style.menuRow}>
          <div className="nav-search-wrapper">
            <DumiSearchBar />
          </div>
          <Navigation />
          <LangSwitch />
          <HeaderExtra />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
