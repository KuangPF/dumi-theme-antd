import { css } from '@emotion/react';
import { Button, Space, Typography } from 'antd';
import { Link, useSiteData } from 'dumi';
import { useContext, type FC } from 'react';
import useLocaleValue from '../../hooks/useLocaleValue';
import useSiteToken from '../../hooks/useSiteToken';
import SiteContext from '../../slots/SiteContext';
import { IAction } from '../../types';
import Features from './components/Features';
import { GroupMask } from './components/Group';

const useStyle = () => {
  const { token } = useSiteToken();
  const { isMobile } = useContext(SiteContext);

  return {
    mainContent: css`
      position: relative;
      text-align: center;
      flex: 1;
    `,
    titleBase: css`
      h1& {
        font-family: AliPuHui, ${token.fontFamily};
      }
    `,
    title: isMobile
      ? css`
          h1& {
            margin-bottom: ${token.margin}px;
            font-weight: normal;
            font-size: ${token.fontSizeHeading1 + 2}px;
            line-height: ${token.lineHeightHeading2};
          }
        `
      : css`
          h1& {
            margin-bottom: ${token.marginMD}px;
            font-weight: 900;
            font-size: 68px;
          }
        `
  };
};

const Homepage: FC = () => {
  const style = useStyle();
  const { token } = useSiteToken();
  const { isMobile } = useContext(SiteContext);
  const {
    themeConfig: { name }
  } = useSiteData();

  const actions: IAction[] = useLocaleValue('actions');
  const title = useLocaleValue('title');
  const description = useLocaleValue('description');

  return (
    <div css={style.mainContent}>
      {isMobile ? (
        <img
          src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JmlaR5oQn3MAAAAAAAAAAAAADrJ8AQ/original"
          style={{ width: '100%' }}
          alt=""
        />
      ) : (
        <div
          style={{
            height: 320,
            background: '#77C6FF',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              backgroundImage:
                'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*6d50SboraPIAAAAAAAAAAAAAARQnAQ)',
              flex: 'auto',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: '100% 0',
              backgroundSize: 'auto 100%'
            }}
          />

          <video style={{ height: '100%', objectFit: 'contain' }} autoPlay muted loop>
            <source
              src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
              type="video/webm"
            />
            <source
              src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/file/A*XYYNQJ3NbmMAAAAAAAAAAAAAARQnAQ"
              type="video/mp4"
            />
          </video>

          <div
            style={{
              backgroundImage:
                'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*8ILtRrQlVDMAAAAAAAAAAAAAARQnAQ)',
              flex: 'auto',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: '0 0',
              backgroundSize: 'auto 100%',
              marginLeft: -1
            }}
          />
        </div>
      )}
      {/* Image Left Top */}
      <div style={{ position: 'relative' }}>
        <GroupMask
          style={{
            textAlign: 'center',
            paddingTop: token.marginFar - 16,
            paddingBottom: token.marginFarSM
          }}
        >
          {/* Image Left Top */}
          <img
            style={{ position: 'absolute', left: isMobile ? -120 : 0, top: 0, width: 240 }}
            src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
            alt="bg"
          />
          {/* Image Right Top */}
          <img
            style={{ position: 'absolute', right: isMobile ? 0 : 120, top: 0, width: 240 }}
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
              marginBottom: token.marginMD * 2
            }}
          >
            <div>{description}</div>
          </Typography.Paragraph>
          <Space
            size="middle"
            style={{
              marginBottom: token.marginFar
            }}
          >
            {actions?.map(({ link, text, type }) => {
              return /^(\w+:)\/\/|^(mailto|tel):/.test(link) ? (
                <Button size="large" type={type} href={link} target="_blank">
                  {text}
                </Button>
              ) : (
                <Link to={link} key={link}>
                  <Button size="large" type={type}>
                    {text}
                  </Button>
                </Link>
              );
            })}
          </Space>
          <Features />
        </GroupMask>
      </div>
    </div>
  );
};

export default Homepage;
