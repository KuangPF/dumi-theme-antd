import { css, Global } from '@emotion/react';

const PREFERS_COLOR_ATTR = 'data-prefers-color';

export default () => (
  <Global
    styles={css`
      [${PREFERS_COLOR_ATTR}=dark] {
        .markdown {
          img {
            opacity: 0.8;
          }
        }
      }
    `}
  />
);
