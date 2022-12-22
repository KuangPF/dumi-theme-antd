// 多语言切换
import { Select } from 'antd';
import { history, useIntl, useLocale, useSiteData } from 'dumi';
import { useCallback, type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import { getTargetLocalePath } from '../../utils';
import SwitchBtn from './SwitchBtn';

const { Option } = Select;

const LangSwitch: FC = () => {
  const { localesEnhance } = useAdditionalThemeConfig();
  const { locales } = useSiteData();
  const { locale } = useIntl();
  const current = useLocale();

  const handleLangChange = useCallback((lang: string) => {
    const path = getTargetLocalePath({
      current,
      target: locales.find(({ id }) => id === lang)!,
    });
    history.push(path);
  }, []);

  let LangSwitchJSX = null;
  // do not render in single language
  if (locales.length > 1) {
    const langOptions = locales.map((lang) => (
      <Option value={lang.id} key={lang.id}>
        {lang.name}
      </Option>
    ));
    LangSwitchJSX = (
      <Select
        key="lang"
        className="version"
        size="small"
        defaultValue={locale}
        onChange={handleLangChange}
        // dropdownStyle={getDropdownStyle}
        dropdownMatchSelectWidth={false}
        getPopupContainer={(trigger) => trigger.parentNode}
      >
        {langOptions}
      </Select>
    );
  } else if (locales.length === 2) {
    // 按 locales 顺序展示
    const switchValue = locales[0].id === locale ? 1 : 2;
    LangSwitchJSX = (
      <SwitchBtn
        key="lang"
        // onClick={handleLangChange}
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
