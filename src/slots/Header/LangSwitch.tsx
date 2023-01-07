// 多语言切换
import { Select } from 'antd';
import { useIntl, useLocale, useSiteData } from 'dumi';
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
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.slice(currentProtocol.length);

    window.location.href = currentProtocol + currentHref.replace(window.location.pathname, path);
  }, []);

  const onLangChange = useCallback(() => {
    handleLangChange(locales.filter((item) => item.id !== locale)[0].id);
  }, []);

  let LangSwitchJSX = null;
  // do not render in single language
  if (locales.length > 2 || (!localesEnhance && locale.length > 0)) {
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
  } else if (locales.length === 2 && localesEnhance.length > 1) {
    // 按 locales 顺序展示
    const switchValue = locales[0].id === locale ? 1 : 2;
    LangSwitchJSX = (
      <SwitchBtn
        key="lang"
        onClick={onLangChange}
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
