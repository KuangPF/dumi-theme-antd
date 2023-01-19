import type { SerializedStyles } from '@emotion/react';

interface IAdditionalThemeConfig {
  /** github 链接 */
  github?: string;
  /** 多语言额外配置，主要用于展示语言切换文字（只针对于两项多语言时） */
  localesEnhance: ILocaleEnhance[];
  /** 配置首页首屏区域的大标题。 */
  title?: string;
  /** 配置首页首屏区域的简介文字 */
  description?: string;
  /** 配置首页首屏区域的操作按钮 */
  actions?: IAction[] | Record<string, IAction[]>;
  /** 配置首页特性描述 */
  features?: IFeature[] | Record<string, IFeature[]>;
  /** sidebar group 模式路由 */
  sidebarGroupModePath?: ISidebarGroupModePathItem[];
}

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

interface IFeature {
  /** 特性名称 */
  title: string;
  /** 特性具体描述 */
  details: string;
  /** css in js 样式 */
  itemCss: SerializedStyles;
}

export interface IThemeConfig {
  antdTheme: IAdditionalThemeConfig;
}

export type ISidebarGroupModePathItem = string | RegExp;

export { IAdditionalThemeConfig, ILocaleEnhance, IFeature };
