import { css } from '@emotion/react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation, useNavData } from 'dumi';
import useSiteToken from '../../hooks/useSiteToken';

export interface NavigationProps {
  isMobile: boolean;
}

const useStyle = () => {
  const { token } = useSiteToken();

  const { antCls, iconCls, fontFamily, headerHeight, menuItemBorder, colorPrimary } = token;

  return {
    nav: css`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, ${fontFamily}, sans-serif;
      border: 0;

      &${antCls}-menu-horizontal {
        border-bottom: none;

        & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
          min-width: (40px + 12px * 2);
          height: ${headerHeight}px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: ${headerHeight}px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: ${menuItemBorder}px;
          }
        }

        & ${antCls}-menu-submenu-title ${iconCls} {
          margin: 0;
        }

        & > ${antCls}-menu-item-selected {
          a {
            color: ${colorPrimary};
          }
        }
      }

      & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
        text-align: center;
      }
    `,
    popoverMenuNav: css`
      ${antCls}-menu-item,
      ${antCls}-menu-submenu {
        text-align: left;
      }

      ${antCls}-menu-item-group-title {
        padding-left: 24px;
      }

      ${antCls}-menu-item-group-list {
        padding: 0 16px;
      }

      ${antCls}-menu-item,
      a {
        color: #333;
      }
    `,
  };
};

export default function Navigation({ isMobile }: NavigationProps) {
  // 统一使用 themeConfig.nav，使用 useNavData，当存在自定义 pages 时，会导致 nav 混乱
  let navList = useNavData();

  const { pathname } = useLocation();
  let activeMenuItem = pathname.split('/').slice(0, 2).join('/');

  // @ts-ignore
  const menuItems: MenuProps['items'] = navList.map((navItem) => {
    const linkKeyValue = navItem.link.split('/').slice(0, 2).join('/');
    return {
      label: <Link to={navItem.link}>{navItem.title}</Link>,
      key: linkKeyValue,
    };
  });
  const menuMode = isMobile ? 'inline' : 'horizontal';
  const style = useStyle();
  return (
    <Menu
      items={menuItems}
      mode={menuMode}
      css={style.nav}
      selectedKeys={[activeMenuItem]}
      disabledOverflow
    />
  );
}
