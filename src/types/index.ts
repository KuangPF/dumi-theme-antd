interface IAdditionalThemeConfig {
  /** github 链接 */
  github?: string;
  /** 多语言额外配置，主要用于展示语言切换文字（只针对于两项多语言时） */
  localesEnhance: ILocaleEnhance[];
}

interface ILocaleEnhance {
  /** 同 themeConfig 中 locales 项中的 id */
  id: string;
  /** 当多语言只有两项时用于展示切换的前缀 */
  switchPrefix: string;
}
export { IAdditionalThemeConfig, ILocaleEnhance };
