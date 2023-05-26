import type { SerializedStyles } from '@emotion/react';
import { type IThemeConfig } from 'dumi/dist/client/theme-api/types';

export type ISidebarGroupModePathItem = string | RegExp;

interface ILocaleEnhance {
  /** 同 themeConfig 中 locales 项中的 id */
  id: string;
  /** 当多语言只有两项时用于展示切换的前缀 */
  switchPrefix: string;
}

interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
  /** 按钮类型 */
  type?: 'primary' | 'default';
}

interface IMoreLink {
  /** 链接文字描述 */
  text: string;
  /** 链接 */
  link: string;
}

interface IFeature {
  /** 特性名称 */
  title: string;
  /** 特性具体描述 */
  details: string;
  /** css in js 样式 */
  itemCss?: SerializedStyles;
}

// 分组类型，将 children 换位字符串数组

export type AntdModeSidebarMenuItemType = {
  title: string;
  link: string;
  target?: string;
};

export type AntdModeSidebarMenuChildrenType = string | AntdModeSidebarMenuItemType;
export type AntdModeSubMenuType = {
  children: AntdModeSidebarMenuChildrenType[];
  title: string;
};

// antd 模式的 sidebar 相关类型
export type AntdModeSidebarMenuGroupChildren = (
  | AntdModeSubMenuType
  | AntdModeSidebarMenuChildrenType
)[];
export type AntdModeSidebarMenuGroupType = {
  type: 'group';
  title: string;
  children: AntdModeSidebarMenuGroupChildren;
};
export type AntdModeSidebarMenuType =
  | AntdModeSubMenuType
  | AntdModeSidebarMenuGroupType
  | AntdModeSidebarMenuChildrenType;
export type AntdModeSidebarMenuItems = AntdModeSidebarMenuType[];

interface IDocVersion {
  [propName: string]: string;
}

export interface IBannerConfig {
  /** 是否展示头部 banner 背景 */
  showBanner?: boolean;
  /** banner 图片地址 */
  bannerImgUrl?: string;
  /** banner 移动端图片地址 */
  bannerMobileImgUrl?: string;
}

interface IAdditionalThemeConfig {
  /** github 链接 */
  github?: string;
  /** 首页链接 */
  homeLink?: string;
  /** 多语言额外配置，主要用于展示语言切换文字（只针对于两项多语言时） */
  localesEnhance?: ILocaleEnhance[];
  /** 配置首页首屏区域的大标题。 */
  title?: string | Record<string, string>;
  /** 配置首页首屏区域的简介文字 */
  description?: string | Record<string, string>;
  /** 配置首页首屏区域的操作按钮 */
  actions?: IAction[] | Record<string, IAction[]>;
  /** 配置首页特性描述 */
  features?: IFeature[] | Record<string, IFeature[]>;
  /** sidebar group 模式路由 */
  sidebarGroupModePath?: true | ISidebarGroupModePathItem[];
  /** 文档版本 */
  docVersions?: IDocVersion;
  /** 更多链接 */
  moreLinks?: IMoreLink[];
  /** banner 配置 */
  bannerConfig?: IBannerConfig;
  /** antd 模式的 sidebar */
  antdModeSidebar?: Record<string, AntdModeSidebarMenuItems>;
}

export interface IAllThemeConfig extends Omit<IThemeConfig, 'socialLinks'>, IAdditionalThemeConfig {
  socialLinks?: IThemeConfig['socialLinks']; // https://github.com/umijs/dumi/pull/1694
}

export { IAdditionalThemeConfig, ILocaleEnhance, IFeature, IAction };
