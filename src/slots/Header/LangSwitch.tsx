// 多语言切换
import { css } from '@emotion/react';
import { useIntl, useSiteData } from 'dumi';
import { type FC } from 'react';
import useSiteToken from '../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();
  return {
    langWrap: css`
      color: ${token.colorText};
    `,
  };
};

const LangSwitch: FC = () => {
  const { locales } = useSiteData();
  const { locale } = useIntl();

  console.log(locales, locale);
  const style = useStyle();
  return <div css={style.langWrap}>lang</div>;
};

export default LangSwitch;
