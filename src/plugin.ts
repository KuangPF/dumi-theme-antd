/* eslint-disable no-param-reassign */
import type { IApi } from 'dumi';

const dumiThemeUmiPlugin = (api: IApi) => {
  const ssrCssFileName = `ssr-${Date.now()}.css`;
  // add ssr css file to html
  api.modifyConfig((memo) => {
    memo.styles ??= [];
    memo.styles.push(`/${ssrCssFileName}`);

    return memo;
  });
};

export default dumiThemeUmiPlugin;
