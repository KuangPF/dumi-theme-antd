// 最后更新时间
import React from 'react';
import { css } from '@emotion/react';
import { FormattedMessage } from 'dumi';
import { ClockCircleOutlined } from '@ant-design/icons';
import useSiteToken from '../hooks/useSiteToken';
import useAdditionalThemeConfig from '../hooks/useAdditionalThemeConfig';

const useStyle = () => {
  const { token } = useSiteToken();

  const { colorText, marginXXS, marginSM, screenLG } = token;

  return {
    lastUpdatedWrap: css`
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      margin-block-end: ${marginSM}px;
      color: ${colorText};
      display: flex;
      @media only screen and (max-width: ${screenLG}px) {
        margin-inline-end: 24px;
        margin-inline-start: 24px;
      }
    `,
    lastUpdatedLabel: css`
      margin-inline-start: ${marginXXS}px;
      margin-inline-end: ${marginXXS}px;
    `
  };
};

const LastUpdated: React.FC<{ time?: number }> = ({ time }) => {
  const styles = useStyle();
  const { lastUpdated } = useAdditionalThemeConfig();
  const isoLastUpdated = new Date(time!).toISOString();
  const lastUpdatedTime = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(time);
  return lastUpdated && time ? (
    <div css={styles.lastUpdatedWrap}>
      <ClockCircleOutlined />
      <span css={styles.lastUpdatedLabel}>
        <FormattedMessage id="content.footer.last.updated" />
      </span>
      <time dateTime={isoLastUpdated}>{lastUpdatedTime}</time>
    </div>
  ) : null;
};

export default LastUpdated;
