import { css } from '@emotion/react';
import { Button, Space, Typography } from 'antd';
import { Link, useSiteData } from 'dumi';
import { type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useSiteToken from '../../hooks/useSiteToken';
import Features from './components/Features';

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    mainContent: css`
      position: relative;
      text-align: center;
      padding: 80px 0;
      min-height: calc(100vh - 320px);
    `,
    titleBase: css`
      h1& {
        font-family: AliPuHui, ${token.fontFamily};
      }
    `,
    title: css`
      h1& {
        margin-bottom: ${token.marginMD}px;
        font-weight: 900;
        font-size: 68px;
      }
    `,
  };
};

const Homepage: FC = () => {
  const style = useStyle();
  const { token } = useSiteToken();
  const {
    themeConfig: { name },
  } = useSiteData();
  const { title, description, actions } = useAdditionalThemeConfig();
  return (
    <div css={style.mainContent}>
      {/* Image Left Top */}
      <img
        style={{ position: 'absolute', left: 0, top: 0, width: 240 }}
        src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
        alt="bg"
      />
      {/* Image Right Top */}
      <img
        style={{ position: 'absolute', right: 120, top: 0, width: 240 }}
        src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
        alt="bg"
      />
      <Typography.Title level={1} css={[style.titleBase, style.title]}>
        {title || name}
      </Typography.Title>
      <Typography.Paragraph
        style={{
          fontSize: token.fontSizeHeading5,
          lineHeight: token.lineHeightHeading5,
          marginBottom: token.marginMD * 2,
        }}
      >
        <div>{description}</div>
      </Typography.Paragraph>
      <Space size="middle" style={{ marginBottom: token.marginFar }}>
        {actions?.map((item) => (
          <Link to={item.link} key={item.link}>
            <Button size="large" type={item.type}>
              {item.text}
            </Button>
          </Link>
        ))}
      </Space>
      <Features />
    </div>
  );
};

export default Homepage;
