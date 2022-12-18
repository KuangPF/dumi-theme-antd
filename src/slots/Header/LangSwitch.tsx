// 多语言切换
import { useIntl, useSiteData } from 'dumi';
import { type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import SwitchBtn from './SwitchBtn';

const LangSwitch: FC = () => {
  const { localesEnhance } = useAdditionalThemeConfig();
  const { locales } = useSiteData();
  const { locale } = useIntl();

  console.log(locales, locale);

  let LangSwitchJSX = null;
  // do not render in single language
  if (locales.length > 2) {
    LangSwitchJSX = <div>下拉框</div>;
  } else if (locales.length === 2) {
    // 按 locales 顺序展示
    const switchValue = locales[0].id === locale ? 1 : 2;

    LangSwitchJSX = (
      <SwitchBtn
        key="lang"
        // onClick={onLangChange}
        value={switchValue}
        label1={localesEnhance[0].switchPrefix}
        label2={localesEnhance[1].switchPrefix}
        tooltip1={`${locales[0].name} / ${locales[1].name}`}
        tooltip2={`${locales[1].name} / ${locales[0].name}`}
      />
    );
  }
  return LangSwitchJSX;
};

export default LangSwitch;
