import { css } from '@emotion/react';
import { Link, useLocale, useSiteData } from 'dumi';
import useSiteToken from '../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();

  const { antCls, headerHeight, colorTextHeading, fontFamily, mobileMaxWidth } = token;

  return {
    logo: css`
      height: ${headerHeight}px;
      padding-left: 40px;
      overflow: hidden;
      color: ${colorTextHeading};
      font-weight: bold;
      font-size: 18px;
      font-family: PuHuiTi, ${fontFamily}, sans-serif;
      line-height: ${headerHeight}px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: ${colorTextHeading};
      }

      ${antCls}-row-rtl & {
        float: right;
        padding-right: 40px;
        padding-left: 0;
      }

      img {
        height: 32px;
        margin-right: 12px;
        vertical-align: middle;

        ${antCls}-row-rtl & {
          margin-right: 0;
          margin-left: 16px;
        }
      }

      @media only screen and (max-width: ${mobileMaxWidth}px) {
        padding-right: 0;
        padding-left: 0;
      }
    `,
  };
};

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo = () => {
  const { logo } = useStyle();
  const { themeConfig } = useSiteData();
  const locale = useLocale();
  const logImgUrl =
    themeConfig.logo || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
  return (
    <h1>
      <Link to={'base' in locale ? locale.base : '/'} css={logo}>
        <img alt="logo" src={logImgUrl} />
        <span style={{ lineHeight: '32px' }}>{themeConfig.name}</span>
      </Link>
    </h1>
  );
};

export default Logo;
