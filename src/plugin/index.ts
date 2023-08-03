import type { IApi } from 'dumi';

export default (api: IApi) => {
  api.describe({
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    key: `dumi-theme:${require('../../package.json').name}`
  });
  // TODO: add your plugin code here
};
