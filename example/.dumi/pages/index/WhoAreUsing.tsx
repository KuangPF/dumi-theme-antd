import { useCallback, type FC } from 'react';
import { Flex, Typography, Row, Col } from 'antd';
import { useLocale } from 'dumi';
import { css } from '@emotion/react';
import { defaultImage, addImage } from '../../constants/images';
import useSiteToken from '../../../../src/hooks/useSiteToken';

const userList = [
  {
    name: 'Ant Design Web3',
    site: 'https://web3.ant.design/',
    logoUrl:
      'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*MgfMRpa9Df8AAAAAAAAAAAAADlrGAQ/original'
  },
  {
    name: 'CANDY-HOUSE',
    site: 'https://document.candyhouse.co/demo/hello',
    logoUrl: 'https://avatars.githubusercontent.com/u/16471477?s=200&v=4'
  },
  {
    name: '增加更多',
    site: 'https://github.com/KuangPF/dumi-theme-antd/issues/23',
    logoUrl: addImage
  }
];

const localesConfig = {
  'zh-CN': {
    'page.home.who-are-using': '谁在使用'
  },
  'en-US': {
    'page.home.who-are-using': 'Who are using'
  }
};
const useStyle = () => {
  const { token } = useSiteToken();
  return {
    containerWrap: css`
      background: rgba(255, 255, 255, 0.1);
      backdropfilter: blur(25px);
    `,
    container: css`
      display: flex;
      flex-wrap: wrap;
      max-width: 1208px;
      margin-inline: auto;
      padding-bottom: ${token.marginFarSM}px;
      box-sizing: border-box;
      padding-inline: 2.5%;
      column-gap: 2.5%;
      align-items: stretch;
      text-align: start;
    `,
    title: css`
      width: 100%;
      text-align: center;
    `,
    userItem: css`
      height: 40px;
      text-align: center;
      cursor: pointer;
      padding: ${token.paddingSM}px ${token.padding}px;
      border: 1px solid ${token.colorBorderSecondary};
      font-size: ${token.fontSizeLG}px;
      border-radius: ${token.borderRadius}px;
      background: ${token.colorBgContainer};
      a {
        color: ${token.colorText};
      }
      &:hover {
        box-shadow: ${token.boxShadowTertiary};
        transform: translateY(-1px);
      }
    `,
    userLogo: css`
      width: 42px;
      margin-right: ${token.marginSM}px;
    `
  };
};

const WhoAreUsing: FC = () => {
  const style = useStyle();
  const { id } = useLocale();
  const {
    token: {}
  } = useSiteToken();

  const handleError = useCallback((e) => {
    e.target.src = defaultImage;
  }, []);

  return (
    <div css={style.containerWrap}>
      <div css={style.container}>
        <div css={style.title}>
          <Typography.Title level={3}>
            {localesConfig[id]?.['page.home.who-are-using']}
          </Typography.Title>
        </div>
        <Row gutter={[20, 16]} style={{ width: '100%', justifyContent: 'center' }}>
          {userList.map((item, index) => (
            <Col span={6} xxl={6} xl={6} lg={8} md={12} sm={24} xs={24} key={index}>
              <Flex css={style.userItem} justify="center" align="center">
                <a href={item.site} target="_blank" rel="noreferrer">
                  <Flex justify="center" align="center">
                    <img
                      css={style.userLogo}
                      src={item.logoUrl}
                      alt={item.name}
                      onError={handleError}
                    />
                    <span>{item.name}</span>
                  </Flex>
                </a>
              </Flex>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WhoAreUsing;
