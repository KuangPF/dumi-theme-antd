import { css, Global } from '@emotion/react';
import useSiteToken from '../../hooks/useSiteToken';

const THEME_PREFIX = 'dumi-default-';
const PREFERS_COLOR_ATTR = 'data-prefers-color';

export default () => {
  const { token } = useSiteToken();

  return (
    <Global
      styles={css`
        html[${PREFERS_COLOR_ATTR}='dark'] {
          .${THEME_PREFIX}search-bar {
            &-input {
              background: ${token.colorBgContainer};
              &:focus {
                background: ${token.colorBgContainer};
              }
              &::placeholder {
                color: ${token.colorTextPlaceholder} !important;
              }
            }
          }
          .${THEME_PREFIX}search-popover {
            background-color: ${token.colorBgElevated} !important;
          }
          .${THEME_PREFIX}search-result {
            dt {
              background-color: ${token.controlItemBgActive} !important;
            }
            dd {
              a {
                &:hover {
                  background-color: ${token.controlItemBgHover};
                }
              }
            }
          }
        }
      `}
    />
  );
};
