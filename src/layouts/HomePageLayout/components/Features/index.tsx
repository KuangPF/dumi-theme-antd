import { css } from '@emotion/react';
import { Typography } from 'antd';
import { type FC } from 'react';
import useAdditionalThemeConfig from '../../../../hooks/useAdditionalThemeConfig';
import useSiteToken from '../../../../hooks/useSiteToken';
import { type IFeature } from '../../../../types';

const useStyle = () => {
  const { token } = useSiteToken();
  return {
    container: css`
      display: flex;
      max-width: 1208px;
      margin-inline: auto;
      box-sizing: border-box;
      padding-inline: ${token.marginXXL}px;
      column-gap: ${token.paddingMD * 2}px;
      align-items: stretch;
      text-align: start;
    `,
    itemBase: css`
      display: flex;
      flex: 1 1 0;
      flex-direction: column;
      align-items: stretch;
      text-decoration: none;
      background: ${token.colorBgContainer};
      border: ${token.lineWidth}px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadiusLG}px;
      transition: all ${token.motionDurationSlow};
      padding-block: ${token.paddingMD}px;
      padding-inline: ${token.paddingLG}px;
    `,
    cardItem: css`
      width: 33%;
      &:hover {
        box-shadow: ${token.boxShadowCard};
      }
    `,
  };
};

const RecommendItem = ({ title, details }: IFeature) => {
  const style = useStyle();

  return (
    <a key="" href="" target="_blank" css={[style.itemBase, style.cardItem]} rel="noreferrer">
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Paragraph type="secondary" style={{ flex: 'auto' }}>
        {details}
      </Typography.Paragraph>
    </a>
  );
};

const Features: FC = () => {
  const style = useStyle();
  const { features } = useAdditionalThemeConfig();
  return (
    <div css={style.container}>
      {features?.map((item, index) => (
        <RecommendItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Features;
