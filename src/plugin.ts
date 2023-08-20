/* eslint-disable no-param-reassign */
import fs from 'fs';
import { extractStyle } from '@ant-design/cssinjs';
import type { IApi } from 'dumi';

const dumiThemeUmiPlugin = (api: IApi) => {
  const ssrCssFileName = `ssr-${Date.now()}.css`;

  // add ssr css file to html
  api.modifyConfig((memo) => {
    if (memo.ssr) {
      memo.styles ??= [];
      memo.styles.push(`${memo.publicPath ?? '/'}${ssrCssFileName}`);
    }

    // 将 .dumrc 中 ssr 配置注入 themeConfig 中，便于页面获取
    memo.themeConfig.ssr = memo.ssr;

    return memo;
  });

  api.modifyExportHTMLFiles((files) => {
    if (api.config?.ssr) {
      const nextFiles = files
        .filter((f) => !f.path.includes(':'))
        .map((file) => {
          let styles = '';

          // extract all emotion style tags from body
          file.content = file.content.replace(/<style data-emotion[\S\s]+?<\/style>/g, (s) => {
            styles += s;
            return '';
          });
          // insert emotion style tags to head
          file.content = file.content.replace('</head>', `${styles}</head>`);
          return file;
        });

      return nextFiles;
    }
    return files;
  });

  // generate ssr css file
  api.onBuildHtmlComplete(() => {
    if (api.config?.ssr) {
      const styleCache = (global as any)?.styleCache;
      const styleText = styleCache ? extractStyle(styleCache) : '';
      const styleTextWithoutStyleTag = styleText
        .replace(/<style\s[^>]*>/g, '')
        .replace(/<\/style>/g, '');
      fs.writeFileSync(
        `${api.paths?.absOutputPath}/${ssrCssFileName}`,
        styleTextWithoutStyleTag,
        'utf8'
      );
    }
  });
};

export default dumiThemeUmiPlugin;
