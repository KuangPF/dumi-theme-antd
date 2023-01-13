import type { MenuProps } from 'antd';
import { Link, useFullSidebarData, useLocation, useSidebarData } from 'dumi';
import { isRegExp } from 'lodash';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { ISidebarGroupModePathItem } from '../types';
import useAdditionalThemeConfig from './useAdditionalThemeConfig';

export type UseMenuOptions = {
  before?: ReactNode;
  after?: ReactNode;
};

const useMenu = (options: UseMenuOptions = {}): [MenuProps['items'], string] => {
  const fullData = useFullSidebarData();
  const { pathname, search } = useLocation();
  const sidebarData = useSidebarData();
  const { sidebarGroupModePath } = useAdditionalThemeConfig();
  const { before, after } = options;

  const menuItems = useMemo<MenuProps['items']>(() => {
    const sidebarItems = [...(sidebarData ?? [])];

    return (
      sidebarItems?.reduce<Exclude<MenuProps['items'], undefined>>((result, group) => {
        if (group?.title) {
          console.log(pathname);
          // sideBar menu group 模式, 默认以非 group 模式渲染
          const isSideBarGroupMode =
            (sidebarGroupModePath ?? []).filter((rule: ISidebarGroupModePathItem) => {
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
                    <span className="chinese" key="chinese">
                      {(item.frontmatter as any).subtitle}
                    </span>
                    {after}
                  </Link>
                ),
                key: item.link.replace(/(-cn$)/g, ''),
              })),
            });
          } else {
            const childrenGroup = group.children.reduce<
              Record<string, ReturnType<typeof useSidebarData>[number]['children']>
            >((childrenResult, child) => {
              const type = (child.frontmatter as any).type ?? 'default';
              if (!childrenResult[type]) {
                childrenResult[type] = [];
              }
              childrenResult[type].push(child);
              return childrenResult;
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
                key: item.link.replace(/(-cn$)/g, ''),
              })),
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
                    key: item.link.replace(/(-cn$)/g, ''),
                  })),
                });
              }
            });
            result.push({
              label: group?.title,
              key: group?.title,
              children: childItems,
            });
          }
        } else {
          const list = group.children || [];
          // 如果有 date 字段，我们就对其进行排序
          if (list.every((info) => info?.frontmatter?.date)) {
            list.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
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
              key: item.link.replace(/(-cn$)/g, ''),
            })),
          );
        }
        return result;
      }, []) ?? []
    );
  }, [sidebarData, fullData, pathname, search]);

  return [menuItems, pathname];
};

export default useMenu;
