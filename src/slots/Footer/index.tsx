import { TinyColor } from '@ctrl/tinycolor';
import { css } from '@emotion/react';
import getAlphaColor from 'antd/es/theme/util/getAlphaColor';
import { useSiteData } from 'dumi';
import { type FC } from 'react';
import useSiteToken from '../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();
  const background = new TinyColor(getAlphaColor('#f0f3fa', '#fff'))
    .onBackground(token.colorBgContainer)
    .toHexString();

  return {
    footer: css`
      background: ${background};
      color: ${token.colorTextSecondary};
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
      * {
        box-sizing: border-box;
      }
      h2,
      a {
        color: ${token.colorText};
      }
    `,
    footerContainer: css`
      font-size: ${token.fontSize}px;
      max-width: 1200px;
      text-align: center;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 32px;
    `
  };
};

const Footer: FC = () => {
  const style = useStyle();
  const {
    themeConfig: { footer }
  } = useSiteData();
  return (
    <div css={style.footer}>
      <div css={style.footerContainer}>
        <div
          style={{
            opacity: '0.4'
          }}
        >
          Made with
          <span
            style={{
              color: '#fff'
            }}
          >
            ❤
          </span>
          by{' '}
          {footer ? (
            <span
              dangerouslySetInnerHTML={{
                __html: footer
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Footer;
