import type { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { Link, useFullSidebarData, useLocation, useSidebarData } from 'dumi';
import { isRegExp } from 'lodash';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type {
  AntdModeSidebarMenuGroupType,
  AntdModeSidebarMenuItems,
  AntdModeSidebarMenuItemType,
  AntdModeSidebarMenuType,
  AntdModeSubMenuType,
  ISidebarGroupModePathItem
} from '../types';
import useAdditionalThemeConfig from './useAdditionalThemeConfig';

export type UseMenuOptions = {
  before?: ReactNode;
  after?: ReactNode;
};

const useMenu = (options: UseMenuOptions = {}): [MenuProps['items'], string] => {
  const { pathname, search } = useLocation();
  const sidebarData = useSidebarData();
  const { sidebarGroupModePath, antdModeSidebar = {} } = useAdditionalThemeConfig();
  const { before, after } = options;

  const fullSidebarData = useFullSidebarData();
  const linkTitleMap = useMemo(() => {
    return Object.values(fullSidebarData).reduce<Record<string, string>>((res, sidebar) => {
      const sidebarItems = sidebar.map((item) => item.children).flat();
      sidebarItems.forEach((item) => {
        res[item.link] = item.title;
      });
      return res;
    }, {});
  }, [fullSidebarData]);

  const currentAntdModeSidebarData = useMemo<AntdModeSidebarMenuItems | undefined>(() => {
    const currentLink = Object.keys(antdModeSidebar).find((link) => pathname.startsWith(link));
    if (!currentLink) return undefined;
    return antdModeSidebar[currentLink];
  }, [pathname, antdModeSidebar]);
  const antdModeSidebarMenuItems = useMemo<MenuProps['items']>(() => {
    const isItemMenu = (v: any): v is AntdModeSidebarMenuItemType => {
      return v && typeof v === 'object' && 'link' in v && 'title' in v;
    };
    const isGroupMenu = (v: any): v is AntdModeSidebarMenuGroupType => {
      return v && typeof v === 'object' && v.type === 'group';
    };
    const isSubMenu = (v: any): v is AntdModeSubMenuType => {
      return v && typeof v === 'object' && 'children' in v;
    };
    function processMenu(menu: AntdModeSidebarMenuType): ItemType {
      if (typeof menu === 'string') {
        // menu: '/introduction'
        return {
          key: menu,
          label: (
            <Link to={`${menu}${search}`}>
              {before}
              {linkTitleMap[menu]}
              {after}
            </Link>
          )
        };
      }
      if (isGroupMenu(menu)) {
        // menu: { type: 'group', title: '组件', children: ['/components/button', { title: 'Installation', children: ['/aaa'] }] }
        return {
          type: 'group',
          label: menu.title,
          key: menu.title,
          children: menu.children.map(processMenu)
        };
      }
      if (isSubMenu(menu)) {
        return {
          key: menu.title,
          label: <span style={{ paddingLeft: 10 }}>{menu.title}</span>,
          children: menu.children.map(processMenu)
        };
      }
      if (isItemMenu(menu)) {
        // { title: 'aaa', link: '/xxx' }
        return {
          label: (
            <Link target={menu.target} to={menu.link}>
              {menu.title}
            </Link>
          ),
          key: menu.link
        };
      }
      return null;
    }

    if (!currentAntdModeSidebarData) return undefined;
    return currentAntdModeSidebarData.map(processMenu);
  }, [after, before, currentAntdModeSidebarData, linkTitleMap, search]);

  const menuItems = useMemo<MenuProps['items']>(() => {
    const sidebarItems = [...(sidebarData ?? [])];

    return (
      sidebarItems?.reduce<Exclude<MenuProps['items'], undefined>>((result, group) => {
        if (group?.title) {
          // sideBar menu group 模式, 默认以非 group 模式渲染
          const isSideBarGroupMode =
            sidebarGroupModePath === true
              ? true
              : (sidebarGroupModePath ?? []).filter((rule: ISidebarGroupModePathItem) => {
                  return isRegExp(rule) ? rule.test(pathname) : pathname.startsWith(rule);
                }).length > 0;

          if (isSideBarGroupMode) {
            result.push({
              type: 'group',
              label: group?.title,
              key: group?.title,
              children: group.children?.map((item) => ({
                label: (
                  <Link to={`${item.link}${search}`}>
                    {before}
                    <span key="english">{item?.title}</span>
                    {item.frontmatter && (
                      <span className="chinese" key="chinese">
                        {item.frontmatter.subtitle}
                      </span>
                    )}
                    {after}
                  </Link>
                ),
                key: item.link.replace(/(-cn$)/g, '')
              }))
            });
          } else {
            const childrenGroup = group.children.reduce<
              Record<string, ReturnType<typeof useSidebarData>[number]['children']>
            >((childrenResult, child) => {
              const nextChildrenResult = childrenResult;
              const type = child?.frontmatter?.type ?? 'default';
              if (!nextChildrenResult[type]) {
                nextChildrenResult[type] = [];
              }
              nextChildrenResult[type].push(child);
              return nextChildrenResult;
            }, {});
            const childItems = [];
            childItems.push(
              ...childrenGroup.default.map((item) => ({
                label: (
                  <Link to={`${item.link}${search}`}>
                    {before}
                    {item?.title}
                    {after}
                  </Link>
                ),
                key: item.link.replace(/(-cn$)/g, '')
              }))
            );
            Object.entries(childrenGroup).forEach(([type, children]) => {
              if (type !== 'default') {
                childItems.push({
                  type: 'group',
                  label: type,
                  key: type,
                  children: children?.map((item) => ({
                    label: (
                      <Link to={`${item.link}${search}`}>
                        {before}
                        {item?.title}
                        {after}
                      </Link>
                    ),
                    key: item.link.replace(/(-cn$)/g, '')
                  }))
                });
              }
            });
            result.push({
              label: group?.title,
              key: group?.title,
              children: childItems
            });
          }
        } else {
          const list = group.children || [];
          // 如果有 date 字段，我们就对其进行排序
          if (list.every((info) => info?.frontmatter?.date)) {
            list.sort((a, b) => (a?.frontmatter?.date > b?.frontmatter?.date ? -1 : 1));
          }

          result.push(
            ...list.map((item) => ({
              label: (
                <Link to={`${item.link}${search}`}>
                  {before}
                  {item?.title}
                  {after}
                </Link>
              ),
              key: item.link.replace(/(-cn$)/g, '')
            }))
          );
        }
        return result;
      }, []) ?? []
    );
  }, [sidebarData, pathname, search, after, before, sidebarGroupModePath]);

  return [antdModeSidebarMenuItems || menuItems, pathname];
};

export default useMenu;
