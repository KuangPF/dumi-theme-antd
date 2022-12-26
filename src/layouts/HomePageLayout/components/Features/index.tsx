import { css } from '@emotion/react';
import { Typography } from 'antd';
import React, { type FC } from 'react';
import useSiteToken from '../../../../hooks/useSiteToken';

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

const RecommendItem = () => {
  const style = useStyle();

  return (
    <a key="" href="" target="_blank" css={[style.itemBase, style.cardItem]} rel="noreferrer">
      <Typography.Title level={5}>Ant Design 5.0 发布！</Typography.Title>
      <Typography.Paragraph type="secondary" style={{ flex: 'auto' }}>
        Design Token 全面升级，更灵活的动态主题能力！
      </Typography.Paragraph>
    </a>
  );
};

const Features: FC = () => {
  const style = useStyle();
  return (
    <div css={style.container}>
      <RecommendItem />
      <RecommendItem />
      <RecommendItem />
    </div>
  );
};

export default Features;
