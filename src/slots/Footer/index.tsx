import { TinyColor } from '@ctrl/tinycolor';
import { css } from '@emotion/react';
import RcFooter from 'rc-footer';
import getAlphaColor from 'antd/es/theme/util/getAlphaColor';
import { useContext } from 'react';
import { type FC } from 'react';
import useSiteToken from '../../hooks/useSiteToken';
import useLocaleValue from '../../hooks/useLocaleValue';
import SiteContext from '../SiteContext';
import type { SiteContextProps } from '../SiteContext';

const useStyle = () => {
  const { token } = useSiteToken();
  const { isMobile } = useContext<SiteContextProps>(SiteContext);
  const background = new TinyColor(getAlphaColor('#f0f3fa', '#fff'))
    .onBackground(token.colorBgContainer)
    .toHexString();

  return {
    holder: css`
      background: ${background};
    `,

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

      .rc-footer-column {
        margin-bottom: ${isMobile ? 60 : 0}px;
        :last-child {
          margin-bottom: ${isMobile ? 20 : 0}px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: ${token.marginXXL}px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: ${token.fontSize}px;
        }
      }
    `
  };
};

const Footer: FC = () => {
  const style = useStyle();
  const footer = useLocaleValue('footer');

  if (!footer) return null;
  return (
    <RcFooter
      css={style.footer}
      bottom={
        <div
          style={{
            opacity: '0.4'
          }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: footer
            }}
          />
        </div>
      }
    />
  );
};

export default Footer;
