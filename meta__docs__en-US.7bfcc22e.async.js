"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[7430],{73665:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(34224),o={}},34783:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(77475),o={}},70475:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(95488),o={}},83586:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(14046),o={}},62653:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(38292),o={}},26752:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(79424),o={}},63865:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(92876),o={}},47052:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(64868),o={}},46410:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(59271),o={}},26891:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(84149),o={}},74221:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(96457),o={}},7392:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(74409),o={}},15005:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(44948),o={}},84812:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(3922),o={}},37245:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(26459),o={}},83553:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(61473),o={}},24249:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(39364),o={}},29429:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(68774),o={}},48369:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(28764),o={}},60394:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(31390),o={}},77957:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(67294),t=e(57620),o={}},2801:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(34224);const t=[{value:"Here are some dumi-theme-antd common questions and official answers for your reference.",paraId:0},{value:"0.3.0+",paraId:1},{value:"The home page of ",paraId:2,tocIndex:0},{value:"dumi-theme-antd",paraId:2,tocIndex:0},{value:" is generated according to the configuration by default, and there will inevitably be some custom modules in the actual use process. ",paraId:2,tocIndex:0},{value:"dumi-theme-antd",paraId:2,tocIndex:0},{value:" internally separates the home page module into a built-in component of ",paraId:2,tocIndex:0},{value:"HomeBaseLayout",paraId:2,tocIndex:0},{value:", if you want While fully customizing the homepage and wanting to retain the layout of the built-in homepage, it can be introduced and used in the page. For example, to create a new page:",paraId:2,tocIndex:0},{value:`<!-- .dumi/pages/index.md -->

<HomeBaseLayout></HomeBaseLayout>
....some text or images
<YourCustomComponent></YourCustomComponent>
`,paraId:3,tocIndex:0},{value:"Or import it as a React component:",paraId:4,tocIndex:0},{value:`/*.dumi/pages/index.tsx */
import { HomeBaseLayout } from 'dumi-theme-antd';

const CustomHomePage = () => {
  return (
    <div>
      <HomeBaseLayout />
      <div>other content</div>
    </div>
  );
};

export default CustomHomePage;
`,paraId:5,tocIndex:0},{value:"0.3.3+",paraId:6,tocIndex:0},{value:"The theme package has been adapted to the conventional secondary navigation function provided by dumi, which is convenient for organizing documents. For the specific directory structure and FrontMatter configuration, please refer to the official website ",paraId:7,tocIndex:1},{value:"Conventional secondary navigation",paraId:7,tocIndex:1},{value:"\u3002",paraId:7,tocIndex:1},{value:"The theme switching logic inside the theme package is compatible with dumi\u2019s built-in ",paraId:8,tocIndex:2},{value:"usePrefersColor",paraId:8,tocIndex:2},{value:" API, so you can use the ",paraId:8,tocIndex:2},{value:"@dark-selector",paraId:8,tocIndex:2},{value:" global variable in the Less file to add a dark mode style to the components of the theme package:",paraId:8,tocIndex:2},{value:`.some-container {
  // Bright color mode is white
  color: #fff;

  // dark mode is black
  @{dark-selector} & {
    color: #000;
  }
}
`,paraId:9,tocIndex:2},{value:"If it is a pure css file, you can use ",paraId:10,tocIndex:2},{value:"prefers-color-scheme",paraId:10,tocIndex:2},{value:" to achieve.",paraId:10,tocIndex:2},{value:"0.3.9+",paraId:11,tocIndex:2},{value:"The theme package supports ssr, and the cssinjs' style was not completely compatible before the ` 0.3.9' version, but the problem has been fixed in later versions. SSR recommends the following configuration:",paraId:12,tocIndex:3},{value:`export default defineConfig({
  ssr: process.env.NODE_ENV === 'development' ? false : {}
});
`,paraId:13,tocIndex:3},{value:"When configured as SSR, if the homepage uses the built-in homepage module of the theme package, a 404 routing page will appear briefly when it is loaded for the first time. The reason is that the built-in homepage did not export ",paraId:14},{value:"index.html",paraId:14},{value:". is not immediately loaded into the corresponding resource. The solution is to create a custom homepage, then import the built-in ",paraId:14},{value:"<HomeBaseLayout />",paraId:14},{value:" module of the theme package, and then package and export",paraId:14},{value:"index.html",paraId:14},{value:", you can refer to [dumi-theme-antd official website homepage](https:// github.com/KuangPF/dumi-theme-antd/blob/main/example/.dumi/pages/index/index.tsx).",paraId:14},{value:"index.html",paraId:15},{value:"After using ",paraId:16,tocIndex:4},{value:"dumi-theme-antd",paraId:16,tocIndex:4},{value:" theme package, the homepage is generated through configuration, and ",paraId:16,tocIndex:4},{value:"index.md",paraId:16,tocIndex:4},{value:" is not written, so ",paraId:16,tocIndex:4},{value:"index.html",paraId:16,tocIndex:4},{value:" will not be generated. If you want to generate ",paraId:16,tocIndex:4},{value:"index.html",paraId:16,tocIndex:4},{value:", you can add ",paraId:16,tocIndex:4},{value:"index.md",paraId:16,tocIndex:4},{value:" or completely customize the home page, and then import the built-in ",paraId:16,tocIndex:4},{value:"HomeBaseLayout",paraId:16,tocIndex:4},{value:" component.",paraId:16,tocIndex:4},{value:"When deploying GitHub Pages, it will search for the ",paraId:17},{value:"index.html",paraId:17},{value:" file step by step by default. If you use nginx deployment, you can configure ",paraId:17},{value:"try_files",paraId:17},{value:" related parameters. When ",paraId:17},{value:"index.html",paraId:17},{value:" cannot be found in the root directory, it will go to other directories to find",paraId:17},{value:" index.html",paraId:17},{value:".",paraId:17}]},74682:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(77475);const t=[{value:"dumi-theme-antd",paraId:0},{value:" In order to better adapt to the theme style of the antd v5 official website, some unique fields have been added and placed in the ",paraId:0},{value:"themeConfig",paraId:0},{value:" field of the ",paraId:0},{value:"dumi",paraId:0},{value:" theme configuration item. The specific configuration fields are as follows:",paraId:0},{value:" You can get better prompts through the ",paraId:1},{value:"defineThemeConfig",paraId:1},{value:" method inside the theme package:",paraId:1},{value:`import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  themeConfig: defineThemeConfig({
    title: 'Dumi Theme Ant Design'
  })
});
`,paraId:2},{value:"type\uFF1A",paraId:3,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:"default\uFF1A",paraId:3,tocIndex:1},{value:"null",paraId:3,tocIndex:1},{value:"The Github icon link in the navigation bar. If this field is not configured, it will not be displayed, and it is compatible with the official ",paraId:4,tocIndex:1},{value:"socialLinks.github",paraId:4,tocIndex:1},{value:" configuration.",paraId:4,tocIndex:1},{value:"type\uFF1A",paraId:5,tocIndex:2},{value:"IBannerConfig",paraId:5,tocIndex:2},{value:"default\uFF1A",paraId:5,tocIndex:2},{value:"bannerConfigDefault",paraId:5,tocIndex:2},{value:`export interface IBannerConfig {
  /** Whether to display the header banner background*/
  showBanner?: boolean;
  /** banner url */
  bannerImgUrl?: string;
  /** banner mobile url */
  bannerMobileImgUrl?: string;
}

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl: 'xx', // antd v5 official website comes with banner image
  bannerImgUrl: 'xx' // antd v5 official website comes with banner image
};
`,paraId:6,tocIndex:2},{value:"Home page header banner image configuration options",paraId:7,tocIndex:2},{value:"type\uFF1A",paraId:8,tocIndex:3},{value:"ILocaleEnhance[]",paraId:8,tocIndex:3},{value:"default\uFF1A",paraId:8,tocIndex:3},{value:"dumi-theme-antd",paraId:8,tocIndex:3},{value:`interface ILocaleEnhance {
  /** Same as the id in the locales item in themeConfig */
  id: string;
  /** The prefix used to display switching when there are only two items in multiple languages */
  switchPrefix: string;
}
`,paraId:9,tocIndex:3},{value:"The display of the multi-language switching prefix icon in the navigation header is only applicable to two multi-language situations.",paraId:10,tocIndex:3},{value:"type\uFF1A",paraId:11,tocIndex:4},{value:"string | Record<string, string>",paraId:11,tocIndex:4},{value:"default\uFF1A",paraId:11,tocIndex:4},{value:"Dumi Theme AntD",paraId:11,tocIndex:4},{value:`// multi-language configuration object, the key is the language name
title: {
  'zh-CN': 'Dumi Ant Design \u4E3B\u9898',
  'en-US': 'Dumi Theme Ant Design'
}
`,paraId:12,tocIndex:4},{value:"Configure the title of the first screen area on the home page.",paraId:13,tocIndex:4},{value:"0.2.6+",paraId:14,tocIndex:4},{value:"type\uFF1A",paraId:15,tocIndex:5},{value:"Omit<ThemeConfig, 'algorithm'>",paraId:15,tocIndex:5},{value:"default\uFF1A",paraId:15,tocIndex:5},{value:"undefined",paraId:15,tocIndex:5},{value:`theme: {
  token: {
    colorPrimary: '#00b96b',
  },
}
`,paraId:16,tocIndex:5},{value:"It is used to customize antd theme style, same as ",paraId:17,tocIndex:5},{value:"theme",paraId:17,tocIndex:5},{value:" in ",paraId:17,tocIndex:5},{value:"ConfigProvider",paraId:17,tocIndex:5},{value:", delete its preset algorithm ",paraId:17,tocIndex:5},{value:"algorithm",paraId:17,tocIndex:5},{value:" attribute, and the preset algorithm can be modified through the page theme style button.",paraId:17,tocIndex:5},{value:"type\uFF1A",paraId:18,tocIndex:6},{value:"string | Record<string, string>",paraId:18,tocIndex:6},{value:"default\uFF1A",paraId:18,tocIndex:6},{value:"null",paraId:18,tocIndex:6},{value:"Configure the introduction text of the first screen area on the home page.",paraId:19,tocIndex:6},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:7},{value:"IDocVersion",paraId:20,tocIndex:7},{value:"\u9ED8\u8BA4\u503C\uFF1A",paraId:20,tocIndex:7},{value:"null",paraId:20,tocIndex:7},{value:`interface IDocVersion {
  [propName: string]: string;
}
// .dumi.ts
docVersions: {
  '1.0.0': '',
  '0.x.x': 'http://xxxx.com'
}
`,paraId:21,tocIndex:7},{value:"Display the current document version or multi-document drop-down selection box in the navigation bar, and the default first attribute is the current document version.",paraId:22,tocIndex:7},{value:"0.2.12+",paraId:23,tocIndex:7},{value:"Type: ",paraId:24,tocIndex:8},{value:"FooterColumn[] | Record<string, FooterColumn[]>",paraId:24,tocIndex:8},{value:"Default: ",paraId:24,tocIndex:8},{value:"null",paraId:24,tocIndex:8},{value:"FooterColumn",paraId:25,tocIndex:8},{value:" is the ",paraId:25,tocIndex:8},{value:"rc-footer",paraId:25,tocIndex:8},{value:" component ",paraId:25,tocIndex:8},{value:"columns",paraId:25,tocIndex:8},{value:" attribute type value, ",paraId:25,tocIndex:8},{value:"click to view details",paraId:25,tocIndex:8},{value:".",paraId:25,tocIndex:8},{value:`
   Note: The `,paraId:26},{value:"icon",paraId:26},{value:" field in ",paraId:26},{value:"FooterColumn",paraId:26},{value:" is ",paraId:26},{value:"ReactNode",paraId:26},{value:", because the ",paraId:26},{value:"themeConfig",paraId:26},{value:" field sequence in dumirc.ts needs to be used in actual use However, the ",paraId:26},{value:"ReactNode",paraId:26},{value:` type does not support serialization very well, so if you need to set this value, you can directly set it to the online image address.
`,paraId:26},{value:`// Just configure the array for single language
footerLinks: [
   {
     title: 'More Products',
     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
     items: [
       {
         icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
         title: 'Yuque',
         url: 'https://yuque.com',
         description: 'Build your digital garden',
         openExternal: true
       }
     ]
   }
]

// Multi-language configuration object, the key is the language name
footerLinks: {
   'zh-CN': [],
   'en-US': [],
},
`,paraId:27},{value:"The friendly link module at the top of footer, such as more products, community links, etc.",paraId:28},{value:"\u7C7B\u578B\uFF1A",paraId:29,tocIndex:9},{value:"IMoreLink[] | Record<string, IMoreLink[]>",paraId:29,tocIndex:9},{value:"\u9ED8\u8BA4\u503C\uFF1A",paraId:29,tocIndex:9},{value:"null",paraId:29,tocIndex:9},{value:`interface IMoreLink {
  /** link text description */
  text: string;
  /** link */
  link: string;
}
// Just configure the array for single language
moreLinks: [
  {
    text: 'Dumi',
    link: 'https://d.umijs.org/'
  },
  {
    text: 'Ant Design',
    link: 'https://ant.design/'
  }
];
// Multi-language configuration object, the key is the language name
moreLinks: {
  'zh-CN': [],
  'en-US': [],
},
`,paraId:30,tocIndex:9},{value:"Configure more ecosystem links in the navigation bar.",paraId:31,tocIndex:9},{value:"type\uFF1A",paraId:32,tocIndex:10},{value:"boolean",paraId:32,tocIndex:10},{value:"default\uFF1A",paraId:32,tocIndex:10},{value:"true",paraId:32,tocIndex:10},{value:"Whether to display the rtl navigation button, it is displayed by default.",paraId:33,tocIndex:10},{value:"type\uFF1A",paraId:34,tocIndex:11},{value:"IAction[] | Record<string, IAction[]>",paraId:34,tocIndex:11},{value:"default\uFF1A",paraId:34,tocIndex:11},{value:"null",paraId:34,tocIndex:11},{value:`interface IAction {
  /** \u6309\u94AE\u6587\u5B57\u63CF\u8FF0 */
  text: string;
  /** \u6309\u94AE\u94FE\u63A5 */
  link: string;
  /** \u6309\u94AE\u7C7B\u578B */
  type?: 'primary' | 'default';
}

// Just configure the array for single language
actions: [{ type: 'primary', text: '\u5F00\u59CB\u4F7F\u7528', link: '/guide/introduce' }]
// Multi-language configuration object, the key is the language name
actions: {
  'zh-CN': [{ type: 'primary', text: '\u5F00\u59CB\u4F7F\u7528', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
`,paraId:35,tocIndex:11},{value:"Configure the operation buttons in the first screen area of the home page.",paraId:36,tocIndex:11},{value:"type\uFF1A",paraId:37,tocIndex:12},{value:"IFeature[] | Record<string, IFeature[]>",paraId:37,tocIndex:12},{value:"default\uFF1A",paraId:37,tocIndex:12},{value:"null",paraId:37,tocIndex:12},{value:`interface IFeature {
  /** title */
  title: string;
  /** detail */
  details: string;
}
// Just configure the array for single language
features: [{ title: '\u5F00\u7BB1\u5373\u7528'}, { details: '\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002'}]
// Multi-language configuration object, the key is the language name
features: {
  'zh-CN': [{ title: '\u5F00\u7BB1\u5373\u7528'}, { details: '\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
`,paraId:38,tocIndex:12},{value:"After configuration, the page will be presented as the homepage, used to display the features of the component library in the form of 3 per row.",paraId:39,tocIndex:12},{value:"type\uFF1A",paraId:40,tocIndex:13},{value:"Array<string> | true",paraId:40,tocIndex:13},{value:"default\uFF1A",paraId:40,tocIndex:13},{value:"[]",paraId:40,tocIndex:13},{value:`export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // when true, all routes will be treated as a group
      sidebarGroupModePath: [
        // Matches routes starting with \`/config\`
        '/config'
      ]
    }
  }
};
`,paraId:41,tocIndex:13},{value:"Whether the left navigation bar needs to be treated as a group, please refer to antd ",paraId:42,tocIndex:13},{value:"menuitemgrouptype",paraId:42,tocIndex:13},{value:".",paraId:42,tocIndex:13},{value:"type\uFF1A",paraId:43,tocIndex:14},{value:"Record<string, SidebarEnhanceItems>",paraId:43,tocIndex:14},{value:"default\uFF1A",paraId:43,tocIndex:14},{value:"undefined",paraId:43,tocIndex:14},{value:`export default {
  themeConfig: {
    sidebarEnhance: {
      '/welcome': [
        {
          title: '\u5FEB\u901F\u5F00\u59CB',
          type: 'group',
          children: [
            {
              // \u652F\u6301\u591A\u5C42\u7EA7
              title: '\u5B89\u88C5',
              children: [
                '/welcome/getting-started/installation', // \u652F\u6301\u4EC5\u586B\u5199\u94FE\u63A5\uFF0Ctitle \u81EA\u52A8\u6839\u636E \`# xxx\` \u751F\u6210
                '/welcome/getting-started/installation/docker'
              ]
            },
            {
              title: '\u5347\u7EA7',
              children: [
                '/welcome/getting-started/upgrading',
                '/welcome/getting-started/upgrading/docker-compose'
              ]
            }
          ]
        },
        // \u652F\u6301\u5BF9\u8C61\u7684\u65B9\u5F0F
        {
          title: '\u66F4\u65B0\u8BB0\u5F55',
          link: 'https://github.com/xx/xx/changelog.md'
        }
      ]
    }
  }
};
`,paraId:44,tocIndex:14},{value:"Since dumi only supports two-level sidebar ",paraId:45,tocIndex:14},{value:"issues",paraId:45,tocIndex:14},{value:", if the customization needs need to support three-level sidebar or want to fully customize the sidebar display , you can use this parameter. For configuration parameters, refer to the ",paraId:45,tocIndex:14},{value:"items attribute",paraId:45,tocIndex:14},{value:" of the ant-design menu component.",paraId:45,tocIndex:14},{value:"type: ",paraId:46,tocIndex:16},{value:"ILoading",paraId:46,tocIndex:16},{value:".",paraId:46,tocIndex:16},{value:"default: ",paraId:46,tocIndex:16},{value:"undefined",paraId:46,tocIndex:16},{value:`interface ILoading {
  skeleton?: Array<string>;
}
`,paraId:47,tocIndex:16},{value:"In the loading status of the current page, routing is enabled on demand by default, so there will be a loading process when switching routes. ",paraId:48,tocIndex:16},{value:"Dumi-theme-antd",paraId:48,tocIndex:16},{value:" provides two common forms of loading: ",paraId:48,tocIndex:16},{value:"Skeleton",paraId:48,tocIndex:16},{value:" and ",paraId:48,tocIndex:16},{value:"spin",paraId:48,tocIndex:16},{value:", and the corresponding loading forms can be set for different routes, with the default Spin form.",paraId:48,tocIndex:16},{value:`
Because dumi does not provide the form of slot to support loading components, it is necessary to manually import the loading components in `,paraId:49},{value:"dumi-theme-antd",paraId:49},{value:" into ",paraId:49},{value:".dumi/loading.(js|jsx|ts|tsx)",paraId:49},{value:` first.
`,paraId:49},{value:`/* .dumi/loading.tsx */
export { default } from 'dumi-theme-antd/loading';
`,paraId:50},{value:"The import method after ",paraId:51},{value:"0.3.1",paraId:51},{value:" version:",paraId:51},{value:`/* .dumi/loading.tsx */
export { Loading as default } from 'dumi-theme-antd';
`,paraId:52},{value:"Configure the loading value",paraId:53},{value:`/* .dumirc.ts */
export default {
  themeConfig: {
    loading: {
      Skeleton: [
        '/guide',
        ' /config'
      ] /* the route loading component at the beginning of /config or /guide are in skeleton form. */
    }
  }
};
`,paraId:54}]},15195:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(95488);const t=[{value:"All Markdown configurations are configured in the form of FrontMatter at the top of the Markdown file, for example",paraId:0},{value:`---
title: configure page title
---

Additional Markdown content
`,paraId:1},{value:"Currently the theme supports the following Markdown configurations.",paraId:2},{value:"This configuration needs to be distinguished from the ",paraId:3,tocIndex:0},{value:"sidebarEnhance",paraId:3,tocIndex:0},{value:" parameter. The ",paraId:3,tocIndex:0},{value:"sidebarEnhance",paraId:3,tocIndex:0},{value:" parameter is to deal with issues such as multi-level file directories, custom sidebars, and preventing multi-level sidebar clicks and jumps. The Markdown configuration is in the same Under the file directory, functions such as grouping and three-level sidebars are realized through configuration.",paraId:3,tocIndex:0},{value:`
   This configuration only takes effect in none `,paraId:4},{value:"sidebarGroupModePath",paraId:4},{value:` mode.
`,paraId:4},{value:"Configuring multi-level sidebars mainly depends on two fields ",paraId:5},{value:"group",paraId:5},{value:" and ",paraId:5},{value:"type",paraId:5},{value:", ",paraId:5},{value:"group",paraId:5},{value:" configures the first-level sidebar, and ",paraId:5},{value:"type",paraId:5},{value:" configures the second-level sidebar. First level sidebar configuration:",paraId:5},{value:`<!-- /xx/a.md -->
---
group: '\u5168\u5C40\u6837\u5F0F'
order: 0
title: '\u8272\u5F69'
---

<!-- /xx/b.md -->
---
group: '\u5168\u5C40\u6837\u5F0F'
order: 1
title: '\u5E03\u5C40'
---
`,paraId:6},{value:"Second level sidebar configuration:",paraId:7},{value:`<!-- /xx/c.md -->
---
group: '\u8BBE\u8BA1\u6A21\u5F0F'
order: 0
title: '\u6982\u89C8'
---

<!-- /xx/d.md -->
---
group: '\u8BBE\u8BA1\u6A21\u5F0F'
type: '\u6A21\u677F\u6587\u6863'
order: 1
title: '\u8868\u5355\u9875'
---

<!-- /xx/e.md -->
---
group: '\u8BBE\u8BA1\u6A21\u5F0F'
type: '\u6A21\u677F\u6587\u6863'
order: 0
title: '\u6570\u636E\u53EF\u89C6\u5316\u9875'
---
`,paraId:8},{value:"The ",paraId:9},{value:"group",paraId:9},{value:" field type supports object format, which is used to adjust the display order of ",paraId:9},{value:"group",paraId:9},{value:". For example, setting the ",paraId:9},{value:"order",paraId:9},{value:" field in ",paraId:9},{value:"group",paraId:9},{value:" can adjust the order of ",paraId:9},{value:"global style",paraId:9},{value:" and ",paraId:9},{value:"design mode",paraId:9},{value:":",paraId:9},{value:`<!-- /xx/a.md -->
---
group:
  title: '\u5168\u5C40\u6837\u5F0F'
  order: 2
order: 1
title: '\u5E03\u5C40'
---

<!-- /xx/c.md -->
---
group:
  title: '\u8BBE\u8BA1\u6A21\u5F0F'
  order: 1
order: 0
title: '\u6982\u89C8'
---
`,paraId:10},{value:"Similarly, ",paraId:11},{value:"type",paraId:11},{value:" field type also supports object format, which is used to adjust the display order of ",paraId:11},{value:"type",paraId:11},{value:".",paraId:11},{value:"To hide the sidebar just set the ",paraId:12,tocIndex:1},{value:"sidebar",paraId:12,tocIndex:1},{value:" value to ",paraId:12,tocIndex:1},{value:"false",paraId:12,tocIndex:1},{value:" in FrontMatter:",paraId:12,tocIndex:1},{value:`---
sidebar: false
nav: example
title: hide sidebar
order: 3
---
`,paraId:13,tocIndex:1},{value:"+0.3.4",paraId:14,tocIndex:1},{value:"In order to display the menu bar update or identify the status, the menu supports tag configuration:",paraId:15,tocIndex:2},{value:`---
tag:
  title: new
  color: success <!-- Same as color attribute of antd Tag component,eg. success,processing,warning etc.-->
---
`,paraId:16,tocIndex:2},{value:"The menu is then rendered as:",paraId:17,tocIndex:2},{value:`
<img description="tag" width=300 src="`,paraId:17,tocIndex:2},{value:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/259418494-f44e99d2-7ce2-4816-8eb1-45b66c473ea6.png",paraId:17,tocIndex:2},{value:'" / >',paraId:17,tocIndex:2},{value:"You can also directly use the simple mode and configure it directly as a string. In this case, the default color is ",paraId:18,tocIndex:2},{value:"processing",paraId:18,tocIndex:2},{value:".",paraId:18,tocIndex:2},{value:`---
tag: new
---
`,paraId:19,tocIndex:2}]},60071:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(14046);const t=[{value:"Ant Design allows you to customize our design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.",paraId:0},{value:"In version 5.0, we provide a new way to customize themes. Different from the less and CSS variables of the 4.x version, with CSS-in-JS, the ability of theming has also been enhanced, including but not limited to:",paraId:1},{value:"Switching theme dynamically\uFF1B",paraId:2},{value:"Multiple themes\uFF1B",paraId:2},{value:"Customizing theme variables for some component\uFF1B",paraId:2},{value:"...",paraId:2}]},76319:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(38292);const t=[{value:`
  `,paraId:0},{value:"Ant Financial has a large number of enterprise-level products. With complex scenarios, designers and developers often need to respond fast due to frequent changes in product demands and concurrent R & D workflow. Many similar contents exist in the process. Through abstraction, we could obtain some stable and highly reusable components and pages.",paraId:1},{value:"On the other hand, with the trend of commercialization, more and more enterprise products begin to pursue better user experiences. Under this situation, Ant User-Experience Design Team builds a design system for enterprise products based on four design values of Natural, Certain, Meaningful, and Growing. It aims to uniform the user interface specs and reduce redundancies and excessive production costs, helping product designers to focus on better user experience.",paraId:2}]},47942:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(79424);const t=[{value:"In order to help users understand what the application is currently doing, and to refer to the user's next behavior, and to understand the results of the operation, when the user need to interact with the system , use different modes to feedback information or results. When the designer uses feedback or customizes some feedback, please note:",paraId:0},{value:"Provide users with necessary, positive and immediate feedback at all stages;",paraId:1},{value:"Avoid excessive feedback, so as not to cause unnecessary disturbance to the user, you can omit the feedback prompt at the results users can see immediately and simple operation.",paraId:1}]},2453:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(92876);const t=[{value:"Broadly speaking, anything telling users where they are, where to go and how to get there can be called navigation. When using navigation or customizing navigational structures, please pay attention to following common pitfalls:",paraId:0},{value:"Provide visual and contextual cues as many as possible, to prevent users from getting lost",paraId:1},{value:"Maintain consistency between form and behavior, or reduce the number of items in navigation, to decrease user's learning cost",paraId:1},{value:"Minimize page transitions (i.e. reduce the number of page transitions required by a task from several to just once or twice), to ensure that user travels only a short distance from any page to another",paraId:1}]},44572:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(64868);const t=[{value:"The use of design patterns in enterprise-level businesses can significantly increase the certainty of the R&D team, save unnecessary design and maintain system consistency, allowing designers to focus on creativity where it is most needed.",paraId:0},{value:"Design patterns adhere to Ant Design design values and provide a general solution to recurring design issues in enterprise products. The designer can directly use the design pattern to complete the interface design, or the design pattern can be used as a starting point to derive a more business-specific solution to meet the individual design needs.",paraId:1}]},34648:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(59271);const t=[{value:"When several items are in close proximity to each other, they become one visual unit rather than several separate units. Otherwise, their distance should be larger and look more like several visual units. The basic purpose of proximity is to organize. To give an apparent view of the page structure and the hierarchy of information to users.",paraId:0}]},5126:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(84149);const t=[{value:"Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.",paraId:0},{value:"The system-level color system mainly defines the basic color palette, neutral color palette and data visualization color palette in the design of Ant Financial. The product-level color system is in the specific design process, based on the color of the system to further define the tone of the product in accordance with the requirements and function of the color.",paraId:1}]},45801:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(96457);const t=[{value:"The font system is one of the most foundational parts of any interface design.",paraId:0},{value:`Text is a major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency. The Ant Design typography system is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has been verified by a large number of Ant products. While defining the font system for a visual system, we propose to start from the following five aspects:`,paraId:1},{value:"Font Family",paraId:2},{value:"Base Font Size",paraId:2},{value:"Font Scale & Line Height",paraId:2},{value:"Font Weight",paraId:2},{value:"Font Color",paraId:2}]},32740:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(74409);const t=[{value:"Spatial layout is the starting point of systematic visual design. The difference from traditional graphic design is that the layout space of UI interface should be based on the dynamic and systematic perspective. We were inspired by the architectural ethic of the architect Le Corbusier and explored the dynamic spatial order in UI design and formed the interface layout of Ant Design based on the principle of 'beauty of order', making it possible for designers to create spatial layout that comes with rational beauty.",paraId:0},{value:"While defining the layout system in a visual system, we propose to start from the following 5 aspects:\uFF1A",paraId:1},{value:"Unified Canvas Dimension",paraId:2},{value:"Adaptation",paraId:2},{value:"Grid Unit",paraId:2},{value:"Raster",paraId:2},{value:"Common Scales",paraId:2}]},86375:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(44948);const t=[{value:"Button",paraId:0},{value:"Property",paraId:1,tocIndex:0},{value:"Description",paraId:1,tocIndex:0},{value:"Type",paraId:1,tocIndex:0},{value:"Default",paraId:1,tocIndex:0},{value:"Version",paraId:1,tocIndex:0},{value:"block",paraId:1,tocIndex:0},{value:"Option to fit button width to its parent width",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"classNames",paraId:1,tocIndex:0},{value:"Semantic DOM class",paraId:1,tocIndex:0},{value:"Record<SemanticDOM, string>",paraId:2,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"5.4.0",paraId:1,tocIndex:0},{value:"danger",paraId:1,tocIndex:0},{value:"Set the danger status of button",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"disabled",paraId:1,tocIndex:0},{value:"Disabled state of button",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"ghost",paraId:1,tocIndex:0},{value:"Make background transparent and invert text and border colors",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"href",paraId:1,tocIndex:0},{value:"Redirect url of link button",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"htmlType",paraId:1,tocIndex:0},{value:"Set the original html ",paraId:1,tocIndex:0},{value:"type",paraId:1,tocIndex:0},{value:" of ",paraId:1,tocIndex:0},{value:"button",paraId:1,tocIndex:0},{value:", see: ",paraId:1,tocIndex:0},{value:"MDN",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"button",paraId:1,tocIndex:0},{value:"icon",paraId:1,tocIndex:0},{value:"Set the icon component of button",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"loading",paraId:1,tocIndex:0},{value:"Set the loading status of button",paraId:1,tocIndex:0},{value:"boolean | { delay: number }",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"shape",paraId:1,tocIndex:0},{value:"Can be set button shape",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"circle",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"round",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"size",paraId:1,tocIndex:0},{value:"Set the size of button",paraId:1,tocIndex:0},{value:"large",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"middle",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"small",paraId:1,tocIndex:0},{value:"middle",paraId:1,tocIndex:0},{value:"styles",paraId:1,tocIndex:0},{value:"Semantic DOM style",paraId:1,tocIndex:0},{value:"Record<SemanticDOM, CSSProperties>",paraId:3,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"5.4.0",paraId:1,tocIndex:0},{value:"target",paraId:1,tocIndex:0},{value:"Same as target attribute of a, works when href is specified",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"type",paraId:1,tocIndex:0},{value:"Set button type",paraId:1,tocIndex:0},{value:"primary",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"dashed",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"link",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"text",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"onClick",paraId:1,tocIndex:0},{value:"Set the handler to handle ",paraId:1,tocIndex:0},{value:"click",paraId:1,tocIndex:0},{value:" event",paraId:1,tocIndex:0},{value:"(event: MouseEvent) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},93860:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(3922);const t=[{value:"Warning prompt, showing the information that needs attention, using the same method as the ",paraId:0},{value:"antd",paraId:0},{value:" ",paraId:0},{value:"Alert",paraId:0},{value:" component, which supports ",paraId:0},{value:"type",paraId:0},{value:", ",paraId:0},{value:"closable",paraId:0},{value:" and ",paraId:0},{value:"showIcon",paraId:0},{value:" parameters , with the same type.",paraId:0},{value:`<Alert>
  Text
</Alert>

<Alert type="success" showIcon >
  Success Text
</Alert>

<Alert type="info">
  Info Text
</Alert>

<Alert type="warning">
  Warning Text
</Alert>

<Alert type="error" closable >
  Error Text
</Alert>
`,paraId:1},{value:`
  Text
`,paraId:2},{value:`
  Success Text
`,paraId:3},{value:`
  Info Text
`,paraId:4},{value:`
  Warning Text
`,paraId:5},{value:`
  Error Text
`,paraId:6}]},40170:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(26459);const t=[{value:"The OS platform script component is used to display the script content corresponding to different operating system platforms. There are three built-in operating system platforms ",paraId:0},{value:"Windows",paraId:0},{value:", ",paraId:0},{value:"macOS",paraId:0},{value:" and ",paraId:0},{value:"Linux",paraId:0},{value:". The script content is passed through different prop parameters:",paraId:0},{value:"windows: show ",paraId:1},{value:"Windows",paraId:1},{value:" platform script information",paraId:1},{value:"macos: show ",paraId:1},{value:"macOS",paraId:1},{value:" platform script information",paraId:1},{value:"linux: show ",paraId:1},{value:"Linux",paraId:1},{value:" platform script information",paraId:1},{value:"ios: show ",paraId:1},{value:"ios",paraId:1},{value:" platform script information",paraId:1},{value:"android: show ",paraId:1},{value:"android",paraId:1},{value:" platform script information",paraId:1},{value:`<BashOSPlatform 
  windows='winget install Docker.DockerDesktop' 
  macos='$ brew install --cask docker' 
  linux='$ sudo apt-get install docker-ce docker-ce-cli containerd.io'
  ios='$ swift package init --name MyCLI --type executable' 
  android='$ apksigner verify --print-certs path/to/your/app.apk'
/>
`,paraId:2},{value:"You can set the ",paraId:3},{value:"defaultActiveKey",paraId:3},{value:" value to specify the key to initialize the selected panel.",paraId:3},{value:"Only part of the platform script information is displayed:",paraId:4},{value:`<BashOSPlatform
  macos='$ brew install --cask docker'
/>
`,paraId:5}]},51597:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(61473);const t=[{value:"Image preview component, used when images need to be displayed. This component supports two parameters ",paraId:0},{value:"float",paraId:0},{value:" and ",paraId:0},{value:"pure",paraId:0},{value:", which are used to control the image display effect.",paraId:0},{value:"By default, the background color will be added to the image and the relevant spacing will be adjusted. ",paraId:1,tocIndex:0},{value:"description",paraId:1,tocIndex:0},{value:" is the description of the image, which will be displayed below the image.",paraId:1,tocIndex:0},{value:`<ImagePreview Preview>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
`,paraId:2,tocIndex:0},{value:`
   `,paraId:3},{value:"If you don't need effects such as background color and image centering, set the ",paraId:4,tocIndex:1},{value:"pure",paraId:4,tocIndex:1},{value:" attribute.",paraId:4,tocIndex:1},{value:`<ImagePreview pure>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
`,paraId:5,tocIndex:1},{value:`
   `,paraId:6},{value:"In this mode, the image will be displayed floating on the right, and the text will surround it. Set the ",paraId:7,tocIndex:2},{value:"float",paraId:7,tocIndex:2},{value:" property to use this mode.",paraId:7,tocIndex:2},{value:`<ImagePreview float>
   <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

Brand color is one of the most intuitive visual elements to reflect product characteristics and communication concepts. When choosing a color, it is necessary to clarify the use scene and scope of the brand color in the interface. Choose the main color in the basic color palette, we recommend choosing the sixth color from light to dark in the color palette as the main color. The brand color of Ant Design is taken from the blue of the basic color palette, and the Hex value is \`#1890ff\`. The application scenarios include: key action points, operation status, important information highlighting, graphics and other scenarios.
`,paraId:8,tocIndex:2},{value:`
   `,paraId:9},{value:"Brand color is one of the most intuitive visual elements to reflect product characteristics and communication concepts. When choosing a color, it is necessary to clarify the use scene and scope of the brand color in the interface. Choose the main color in the basic color palette, we recommend choosing the sixth color from light to dark in the color palette as the main color. The brand color of Ant Design is taken from the blue of the basic color palette, and the Hex value is ",paraId:10},{value:"#1890ff",paraId:10},{value:". The application scenarios include: key action points, operation status, important information highlighting, graphics and other scenarios.",paraId:10},{value:"In some cases, multiple images need to be displayed side by side, just put multiple ",paraId:11,tocIndex:3},{value:"<img />",paraId:11,tocIndex:3},{value:" tags in the ",paraId:11,tocIndex:3},{value:"ImagePreview",paraId:11,tocIndex:3},{value:" component, and add ",paraId:11,tocIndex:3},{value:"inline",paraId:11,tocIndex:3},{value:" class name to the ",paraId:11,tocIndex:3},{value:"img",paraId:11,tocIndex:3},{value:" tags.",paraId:11,tocIndex:3},{value:`<ImagePreview float>
   <img class='bad inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*di8jS5EWYSIAAAAAAAAAAABkARQnAQ" alt="bad inline" description="Do not place more than one in a button area Main button.">
   <img class='good inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3WUkT5pD1SUAAAAAAAAAAABkARQnAQ" alt="correct demonstration" description="1. Emphasize a main operation;< br/>2. There is no primary or secondary operation, and the secondary button is the safest choice.">
</ImagePreview>
`,paraId:12,tocIndex:3},{value:`
   `,paraId:13},{value:`
   `,paraId:13},{value:"In this mode, comparison styles are also supported. For example, one is a positive example and the other is a negative example. You only need to add the class name ",paraId:14},{value:"good",paraId:14},{value:" or ",paraId:14},{value:"bad",paraId:14},{value:" to the corresponding ",paraId:14},{value:"<img />",paraId:14},{value:".",paraId:14}]},96425:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(39364);const t=[{value:"The dependent installation component is used to display script installation information. There are three built-in package managers ",paraId:0},{value:"npm",paraId:0},{value:", ",paraId:0},{value:"yarn",paraId:0},{value:" and ",paraId:0},{value:"pnpm",paraId:0},{value:". The installation script statements are passed through different prop parameters:",paraId:0},{value:"npm: Show ",paraId:1},{value:"npm",paraId:1},{value:" package manager installation information",paraId:1},{value:"yarn: show ",paraId:1},{value:"yarn",paraId:1},{value:" package manager installation information",paraId:1},{value:"pnpm: show ",paraId:1},{value:"pnpm",paraId:1},{value:" package manager installation information",paraId:1},{value:`<InstallDependencies
npm='$ npm install dumi-theme-antd '
yarn='$ yarn add dumi-theme-antd'
pnpm='$ pnpm install dumi-theme-antd '

> </InstallDependencies>
`,paraId:2},{value:"You can set the ",paraId:3},{value:"defaultActiveKey",paraId:3},{value:" value to specify the key to initialize the selected panel.",paraId:3},{value:"Only some package managers are shown:",paraId:4},{value:`<InstallDependencies 
  npm='$ npm install' 
  yarn='$ yarn'
/>
</InstallDependencies>
`,paraId:5}]},52270:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(68774);const t=[{value:"In order to use some components in Markdown more conveniently and enhance the display effect of Markdown, some common components are built into the theme, including the following components:",paraId:0},{value:"Alert",paraId:1},{value:" ",paraId:2},{value:"0.2.5+",paraId:3},{value:"ImagePreview",paraId:4},{value:" ",paraId:2},{value:"0.2.7+",paraId:5},{value:"InstallDependencies",paraId:6},{value:" ",paraId:2},{value:"0.2.10+",paraId:7},{value:"BashOSPlatform",paraId:8},{value:" ",paraId:2},{value:"0.3.10+",paraId:9}]},20834:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(28764);const t=[{value:"dumi-theme-antd",paraId:0},{value:" \u4E25\u683C\u9075\u5FAA ",paraId:0},{value:"Semantic Versioning 2.0.0",paraId:0},{value:" \u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303\u3002",paraId:0},{value:"2025-02-24",paraId:1,tocIndex:0},{value:"\u{1F6E0} \u4F18\u5316\u4F9D\u8D56\u7248\u672C\u3002",paraId:2,tocIndex:0},{value:"#36",paraId:2,tocIndex:0},{value:"\u3002",paraId:2,tocIndex:0},{value:"2024-08-15",paraId:3,tocIndex:1},{value:"\u{1F484} \u4F18\u5316 dumi \u9ED8\u8BA4\u9875\u9762 Tab \u6837\u5F0F",paraId:4,tocIndex:1},{value:"#36",paraId:4,tocIndex:1},{value:"\u3002",paraId:4,tocIndex:1},{value:"2024-05-23",paraId:5,tocIndex:2},{value:"\u{1F6E0} \u4F18\u5316 SSR \u6837\u5F0F\u63D0\u53D6\u903B\u8F91\u3002",paraId:6,tocIndex:2},{value:"\u{1F484} \u8C03\u6574 ",paraId:6,tocIndex:2},{value:"RTL",paraId:6,tocIndex:2},{value:" icon\u3002",paraId:6,tocIndex:2},{value:"2024-05-22",paraId:7,tocIndex:3},{value:"\u{1F6E0} \u5347\u7EA7 ",paraId:8,tocIndex:3},{value:"dumi",paraId:8,tocIndex:3},{value:" \u4EE5\u53CA ",paraId:8,tocIndex:3},{value:"antd",paraId:8,tocIndex:3},{value:" \u7248\u672C\u53F7\u3002",paraId:8,tocIndex:3},{value:"\u{1F484} \u4F18\u5316\u4FA7\u8FB9\u680F\u6697\u9ED1\u6A21\u5F0F\u4E0B\u80CC\u666F\u989C\u8272\u3002",paraId:8,tocIndex:3},{value:"2024-05-14",paraId:9,tocIndex:3},{value:"\u{1F41E} \u4FEE\u590D ",paraId:10,tocIndex:3},{value:"defineThemeConfig",paraId:10,tocIndex:3},{value:" \u5F15\u5165\u62A5\u9519",paraId:10,tocIndex:3},{value:"#34",paraId:10,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u{1F41E} \u4FEE\u590D\u5BFC\u822A\u680F\u9009\u4E2D\u6837\u5F0F\u903B\u8F91\u3002",paraId:10,tocIndex:3},{value:"\u{1F484} \u5220\u9664 ",paraId:10,tocIndex:3},{value:"Table",paraId:10,tocIndex:3},{value:" \u9884\u7F6E\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E0D\u5E72\u9884\u6837\u5F0F\u3002",paraId:10,tocIndex:3},{value:"2024-05-10",paraId:11,tocIndex:4},{value:"\u{1F41E} \u4FEE\u590D\u81EA\u5B9A\u4E49\u9996\u9875\u65E0\u6548\u3002",paraId:12,tocIndex:4},{value:"2024-05-09",paraId:13,tocIndex:5},{value:"\u{1F484} \u5185\u5BB9\u533A\u6837\u5F0F\u4F18\u5316\uFF0C\u5F53\u5185\u5BB9\u533A\u5185\u5BB9\u8F83\u5C11\u65F6\uFF0C\u9AD8\u5EA6\u9ED8\u8BA4\u6491\u6EE1\u3002",paraId:14,tocIndex:5},{value:"2024-05-09",paraId:15,tocIndex:6},{value:"\u{1F484} \u70B9\u51FB\u6587\u6863\u951A\u70B9\u9875\u9762\u6EDA\u52A8\u4F4D\u7F6E\u4F18\u5316\u3002",paraId:16,tocIndex:6},{value:"\u{1F484} ",paraId:16,tocIndex:6},{value:"themeConfig",paraId:16,tocIndex:6},{value:" \u4E2D logo \u652F\u6301 ",paraId:16,tocIndex:6},{value:"boolean",paraId:16,tocIndex:6},{value:" \u7C7B\u578B\u63A7\u5236\u663E\u9690\u3002",paraId:16,tocIndex:6},{value:"\u{1F484} \u5185\u5BB9\u533A\u6837\u5F0F\u4F18\u5316\uFF0C\u5F53\u5185\u5BB9\u533A\u5185\u5BB9\u8F83\u5C11\u65F6\uFF0C\u9AD8\u5EA6\u9ED8\u8BA4\u6491\u6EE1",paraId:16,tocIndex:6},{value:"#33",paraId:16,tocIndex:6},{value:"\u3002",paraId:16,tocIndex:6},{value:"\u{1F195} \u5185\u7F6E\u7EC4\u4EF6 ",paraId:16,tocIndex:6},{value:"<BashOSPlatform />",paraId:16,tocIndex:6},{value:" \u65B0\u589E\u652F\u6301 ios \u548C android\u3002",paraId:16,tocIndex:6},{value:"2024-04-07",paraId:17,tocIndex:7},{value:"\u{1F41E} ",paraId:18,tocIndex:7},{value:"themeConfig",paraId:18,tocIndex:7},{value:" \u7684 nav \u914D\u7F6E children \u65E0\u6548",paraId:18,tocIndex:7},{value:"#30",paraId:18,tocIndex:7},{value:"\u3002",paraId:18,tocIndex:7},{value:"2024-03-14",paraId:19,tocIndex:8},{value:"\u{1F195} \u5347\u7EA7 ",paraId:20,tocIndex:8},{value:"dumi",paraId:20,tocIndex:8},{value:" \u4F9D\u8D56\u7248\u672C\u3002",paraId:20,tocIndex:8},{value:"\u{1F41E} \u591A\u8BED\u8A00\u914D\u7F6E\u5BFC\u81F4 sidebar \u9009\u4E2D\u72B6\u6001\u65E0\u6548",paraId:20,tocIndex:8},{value:"#27",paraId:20,tocIndex:8},{value:"\u3002",paraId:20,tocIndex:8},{value:"\u{1F484} \u4F18\u5316\u9875\u9762\u52A0\u8F7D\u6548\u679C\u3002",paraId:20,tocIndex:8},{value:"2023-09-05",paraId:21,tocIndex:9},{value:"\u{1F195} \u652F\u6301\u5B98\u65B9 ",paraId:22,tocIndex:9},{value:"editLink",paraId:22,tocIndex:9},{value:" \u914D\u7F6E\u5B57\u6BB5\u3002",paraId:22,tocIndex:9},{value:"\u{1F4C3} \u6587\u6863\u66F4\u65B0\uFF1AFAQ \u9875\u9762\u589E\u52A0 ",paraId:22,tocIndex:9},{value:"\u6784\u5EFA\u540E\u4E3A\u4EC0\u4E48\u6CA1\u6709 ",paraId:22,tocIndex:9},{value:"index.html",paraId:22,tocIndex:9},{value:" \u9879",paraId:22,tocIndex:9},{value:"2023-08-31",paraId:23,tocIndex:10},{value:"\u{1F6E0} \u91CD\u6784\u4E3B\u9898\u5207\u6362\u5185\u90E8\u903B\u8F91\uFF0C\u9002\u914D\u5B98\u65B9 ",paraId:24,tocIndex:10},{value:"prefersColor",paraId:24,tocIndex:10},{value:" \u914D\u7F6E\u9879\u3002",paraId:24,tocIndex:10},{value:"\u{1F6E0} \u517C\u5BB9\u5B98\u65B9 ",paraId:24,tocIndex:10},{value:"socialLinks.github",paraId:24,tocIndex:10},{value:" \u914D\u7F6E.",paraId:24,tocIndex:10},{value:"\u{1F484} \u4F18\u5316\u6697\u9ED1\u6A21\u5F0F\u4E0B\u6EDA\u52A8\u6761\u6837\u5F0F\u3002",paraId:24,tocIndex:10},{value:"2023-08-29",paraId:25,tocIndex:11},{value:"\u{1F195} \u65B0\u589E\u5185\u7F6E\u7EC4\u4EF6 ",paraId:26,tocIndex:11},{value:"<BashOSPlatform />",paraId:26,tocIndex:11},{value:",",paraId:26,tocIndex:11},{value:"\u8BE6\u60C5",paraId:27,tocIndex:11},{value:"\u3002",paraId:26,tocIndex:11},{value:"2023-08-22",paraId:28,tocIndex:11},{value:"\u{1F6E0} \u91CD\u6784\u63D0\u53D6 @emotion cssinjs \u6837\u5F0F\u5BFC\u51FA\u65B9\u6CD5\uFF0C\u907F\u514D\u6837\u5F0F\u52A0\u8F7D\u95EA\u70C1\u3002",paraId:29,tocIndex:11},{value:"\u{1F484} \u9002\u914D dumi \u5185\u7F6E markdown \u589E\u5F3A tip \u989C\u8272\uFF0C\u4E0E antd \u8272\u7CFB\u4FDD\u6301\u4E00\u81F4\u3002",paraId:29,tocIndex:11},{value:"\u{1F484} \u4F18\u5316\u9875\u9762\u90E8\u5206 api\uFF0C\u66F4\u597D\u517C\u5BB9 SSR\u3002",paraId:29,tocIndex:11},{value:"2024-05-23",paraId:30,tocIndex:12},{value:"\u{1F6E0} \u4F18\u5316 SSR \u6837\u5F0F\u63D0\u53D6\u903B\u8F91\u3002",paraId:31,tocIndex:12},{value:"\u{1F484} \u8C03\u6574 ",paraId:31,tocIndex:12},{value:"RTL",paraId:31,tocIndex:12},{value:" icon\u3002",paraId:31,tocIndex:12},{value:"2023-08-20",paraId:32,tocIndex:13},{value:"\u{1F41E} \u4FEE\u590D SSR \u6837\u5F0F\u8BBE\u7F6E ",paraId:33,tocIndex:13},{value:"publicPath",paraId:33,tocIndex:13},{value:" \u4E0D\u8BBE\u7F6E\u65F6\u8FD4\u56DE\u4E3A ",paraId:33,tocIndex:13},{value:"undefined",paraId:33,tocIndex:13},{value:" \u7684\u95EE\u9898\u3002",paraId:33,tocIndex:13},{value:"\u{1F195} \u5185\u5BB9\u533A toc \u652F\u6301 FrontMatter ",paraId:33,tocIndex:13},{value:"toc",paraId:33,tocIndex:13},{value:" \u63A7\u5236\u663E\u9690\u3002",paraId:33,tocIndex:13},{value:"2023-08-20",paraId:34,tocIndex:14},{value:"\u{1F41E} \u4FEE\u590D SSR \u6837\u5F0F\u8BBE\u7F6E ",paraId:35,tocIndex:14},{value:"publicPath",paraId:35,tocIndex:14},{value:" \u65F6\u5F15\u5165\u8DEF\u5F84\u4E0D\u5BF9\u3002",paraId:35,tocIndex:14},{value:"2023-08-20",paraId:36,tocIndex:15},{value:"\u{1F41E} \u4FEE\u590D SSR \u6837\u5F0F\u6CA1\u6709\u5355\u72EC\u63D0\u53D6\u5BFC\u81F4\u9996\u6B21\u52A0\u8F7D\u6837\u5F0F\u95EA\u5C4F",paraId:37,tocIndex:15},{value:"#20",paraId:37,tocIndex:15},{value:"\u3002",paraId:37,tocIndex:15},{value:"2023-08-18",paraId:38,tocIndex:16},{value:"\u{1F195} \u652F\u6301\u5B98\u65B9 ",paraId:39,tocIndex:16},{value:"lastUpdated",paraId:39,tocIndex:16},{value:" \u914D\u7F6E\u9879\u3002",paraId:39,tocIndex:16},{value:"2023-08-10",paraId:40,tocIndex:17},{value:"\u{1F484} \u4F18\u5316\u5185\u7F6E ",paraId:41,tocIndex:17},{value:"PrevAndNext",paraId:41,tocIndex:17},{value:" \u5C55\u793A\u903B\u8F91\u3002",paraId:41,tocIndex:17},{value:"\u{1F195} \u83DC\u5355\u9879\u652F\u6301 ",paraId:41,tocIndex:17},{value:"Tag",paraId:41,tocIndex:17},{value:" \u914D\u7F6E\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u89C1",paraId:41,tocIndex:17},{value:"\u83DC\u5355\u680F-tag-\u914D\u7F6E",paraId:42,tocIndex:17},{value:"\u3002",paraId:41,tocIndex:17},{value:"2023-08-09",paraId:43,tocIndex:18},{value:"\u{1F484} \u4FEE\u590D\u9996\u9875\u80CC\u666F\u5927\u56FE max-width \u6837\u5F0F\u5C5E\u6027\u5728\u81EA\u5B9A\u4E49\u9996\u9875\u4E2D\u901A Markdown.css \u6837\u5F0F\u51B2\u7A81\u3002",paraId:44,tocIndex:18},{value:"\u{1F195} \u652F\u6301\u7EA6\u5B9A\u5F0F\u4E8C\u7EA7\u76EE\u5F55\u5BFC\u822A\u3002",paraId:44,tocIndex:18},{value:"\u{1F4C3} \u6587\u6863\u66F4\u65B0\uFF1A\u793A\u4F8B\u9875\u9762\u589E\u52A0\u4E8C\u7EA7\u76EE\u5F55\u5BFC\u822A\u4EE5\u53CA FAQ \u589E\u52A0\u76F8\u5173\u4ECB\u7ECD\u8BF4\u660E\u3002",paraId:44,tocIndex:18},{value:"2023-08-06",paraId:45,tocIndex:19},{value:"\u{1F484} \u589E\u52A0\u5185\u7F6E\u6A21\u5757",paraId:46,tocIndex:19},{value:"<Footer />",paraId:46,tocIndex:19},{value:"\u5BFC\u51FA\uFF0C\u4FBF\u4E8E\u5728\u81EA\u5B9A\u4E49\u9875\u9762\u4F7F\u7528\u3002",paraId:46,tocIndex:19},{value:"\u{1F484} Footer \u66F4\u591A\u94FE\u63A5\u6A21\u5757\u56FE\u7247\u6837\u5F0F\u4F18\u5316\uFF0C\u907F\u514D\u6837\u5F0F\u51B2\u7A81\u3002",paraId:46,tocIndex:19},{value:"\u{1F484} \u5220\u9664\u81EA\u5B9A\u4E49\u9875\u9762\u9ED8\u8BA4 ",paraId:46,tocIndex:19},{value:"padding",paraId:46,tocIndex:19},{value:" \u6837\u5F0F\u3002",paraId:46,tocIndex:19},{value:"\u{1F484} \u9996\u9875\u521D\u6B21\u52A0\u8F7D\u5B8C\u6210\u540E\u8BBE\u7F6E html ",paraId:46,tocIndex:19},{value:"data-prefers-color",paraId:46,tocIndex:19},{value:" \u503C\u3002",paraId:46,tocIndex:19},{value:"\u{1F195} \u9996\u9875 action \u8DF3\u8F6C\u94FE\u63A5\u9002\u914D\u4E3B\u9898\u5207\u6362\u3002",paraId:46,tocIndex:19},{value:"2023-08-04",paraId:47,tocIndex:20},{value:"\u{1F484} \u4F18\u5316\u5185\u7F6E\u6A21\u5757",paraId:48,tocIndex:20},{value:"<Loading /> \u4EE5\u53CA <HomeBaseLayout />",paraId:48,tocIndex:20},{value:"\u5BFC\u51FA\u5F62\u5F0F\u3002",paraId:48,tocIndex:20},{value:"\u{1F484} \u4F18\u5316\u5185\u7F6E ",paraId:48,tocIndex:20},{value:"types",paraId:48,tocIndex:20},{value:" \u5BFC\u51FA\uFF0C\u63D0\u5347\u914D\u7F6E\u4F53\u9A8C\u3002",paraId:48,tocIndex:20},{value:"\u{1F41E} \u4FEE\u6539 ",paraId:48,tocIndex:20},{value:"useSiteToken",paraId:48,tocIndex:20},{value:" hook \u4E2D ",paraId:48,tocIndex:20},{value:"config-provider/ConfigContext",paraId:48,tocIndex:20},{value:" \u5F15\u5165\u8DEF\u5F84\u4E3A ",paraId:48,tocIndex:20},{value:"lib",paraId:48,tocIndex:20},{value:" \u5F62\u5F0F\u3002",paraId:48,tocIndex:20},{value:"\u{1F4C3} \u6587\u6863\u66F4\u65B0\uFF1A\u793A\u4F8B\u9875\u9762\u589E\u52A0\u65E0\u4FA7\u8FB9\u680F\u6848\u4F8B\u3002",paraId:48,tocIndex:20},{value:"2023-08-04",paraId:49,tocIndex:21},{value:"\u{1F195} \u9996\u9875\u6A21\u5757\u5BFC\u51FA\u4E3A\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u652F\u6301\u5728\u81EA\u5B9A\u4E49\u9996\u9875\u4E2D\u5F15\u5165\u8FDB\u884C\u6269\u5C55,\u8BE6\u7EC6\u8BF4\u660E\u89C1",paraId:50,tocIndex:21},{value:"\u5982\u4F55\u5B8C\u5168\u81EA\u5B9A\u4E49\u9996\u9875",paraId:51,tocIndex:21},{value:"\u3002",paraId:50,tocIndex:21},{value:"2023-08-02",paraId:52,tocIndex:22},{value:"\u{1F41E} \u4FEE\u590D\u5185\u7F6E ",paraId:53,tocIndex:22},{value:"dumi",paraId:53,tocIndex:22},{value:" \u4EE5\u53CA ",paraId:53,tocIndex:22},{value:"antd",paraId:53,tocIndex:22},{value:" \u7248\u672C\u4F9D\u8D56\u95EE\u9898\uFF0C\u907F\u514D\u63A7\u5236\u6253\u5370 API \u5E9F\u5F03\u65E5\u5FD7",paraId:53,tocIndex:22},{value:"#19",paraId:53,tocIndex:22},{value:"\u3002",paraId:53,tocIndex:22},{value:"2023-07-27",paraId:54,tocIndex:23},{value:"\u{1F41E} \u4FEE\u590D ",paraId:55,tocIndex:23},{value:"useMenu",paraId:55,tocIndex:23},{value:" hook \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u51FA\u73B0\u62A5\u9519\u767D\u5C4F\u95EE\u9898\u3002",paraId:55,tocIndex:23},{value:"\u{1F484} \u4F18\u5316 ",paraId:55,tocIndex:23},{value:"footer",paraId:55,tocIndex:23},{value:" \u914D\u7F6E\uFF0C \u652F\u6301\u591A\u8BED\u8A00\u914D\u7F6E\u3002",paraId:55,tocIndex:23},{value:"\u{1F195} \u4FA7\u8FB9\u680F\u4E09\u7EA7\u5206\u7EC4 ",paraId:55,tocIndex:23},{value:"type",paraId:55,tocIndex:23},{value:" \u5B57\u6BB5\u652F\u6301\u6392\u5E8F\u3002",paraId:55,tocIndex:23},{value:"\u{1F195} \u589E\u52A0 ",paraId:55,tocIndex:23},{value:"footerLinks",paraId:55,tocIndex:23},{value:" \u914D\u7F6E\uFF0C\u7528\u4E8E\u5728 ",paraId:55,tocIndex:23},{value:"footer",paraId:55,tocIndex:23},{value:" \u4E0A\u65B9\u5C55\u793A\u66F4\u591A\u53CB\u60C5\u94FE\u63A5\uFF0C\u8BE6\u89C1 ",paraId:55,tocIndex:23},{value:"footerLinks",paraId:56,tocIndex:23},{value:"\u3002",paraId:55,tocIndex:23},{value:"\u{1F4C3} \u6587\u6863\u66F4\u65B0\uFF1A\u589E\u52A0\u793A\u4F8B\u9875\u9762\u3002",paraId:55,tocIndex:23},{value:"2023-07-19",paraId:57,tocIndex:24},{value:"\u{1F41E} \u4FEE\u590D ",paraId:58,tocIndex:24},{value:"useLocaleValue",paraId:58,tocIndex:24},{value:" \u591A\u8BED\u8A00\u6A21\u5F0F\u4E0B\u53D6\u503C\u517C\u5BB9\u95EE\u9898",paraId:58,tocIndex:24},{value:"#17",paraId:58,tocIndex:24},{value:"\u3002",paraId:58,tocIndex:24},{value:"\u{1F41E} \u4FEE\u590D ",paraId:58,tocIndex:24},{value:"title",paraId:58,tocIndex:24},{value:" \u914D\u7F6E\u4E3A\u591A\u8BED\u8A00\u65F6\uFF0Cdocument.title \u5C55\u793A\u5F02\u5E38\u3002",paraId:58,tocIndex:24},{value:"\u{1F6E0} \u914D\u7F6E\u9879 ",paraId:58,tocIndex:24},{value:"moreLinks",paraId:58,tocIndex:24},{value:" \u652F\u6301\u591A\u8BED\u8A00\u914D\u7F6E\u3002",paraId:58,tocIndex:24},{value:"\u{1F484} \u4F18\u5316\u9996\u9875 ",paraId:58,tocIndex:24},{value:"features",paraId:58,tocIndex:24},{value:" \u5927\u4E8E\u4E09\u9879\u65F6\u5E03\u5C40\u5C55\u793A\u3002",paraId:58,tocIndex:24},{value:"\u{1F484} Footer \u5220\u9664\u9ED8\u8BA4\u62FC\u63A5\u6A21\u5F0F\uFF0C\u6E32\u67D3\u503C\u5B8C\u5168\u7531\u4F20\u5165\u503C\u63A5\u7BA1\u3002",paraId:58,tocIndex:24},{value:"2023-07-16",paraId:59,tocIndex:25},{value:"\u{1F41E} \u4FEE\u590D\u5934\u90E8\u5BFC\u822A\u94FE\u63A5\u4E3A\u5916\u90E8\u94FE\u63A5\u65F6\u4E0D\u80FD\u6B63\u786E\u8BBE\u7F6E\u5176\u8DF3\u8F6C\u503C\u3002",paraId:60,tocIndex:25},{value:"\u{1F41E} ",paraId:60,tocIndex:25},{value:"sidebarGroupModePath",paraId:60,tocIndex:25},{value:" \u914D\u7F6E\u5220\u9664\u6B63\u5219\u5339\u914D\u9009\u9879\uFF0C\u539F\u56E0\u5728\u4E8E\u6B63\u5219\u7C7B\u578B\u5728 dumi \u5185\u90E8\u65E0\u6CD5\u88AB\u6B63\u5E38\u5E8F\u5217\u5316\u3002",paraId:60,tocIndex:25},{value:"\u{1F195} \u65B0\u589E ",paraId:60,tocIndex:25},{value:"InstallDependencies",paraId:60,tocIndex:25},{value:" \u5185\u7F6E\u7EC4\u4EF6",paraId:60,tocIndex:25},{value:"\u8BE6\u60C5",paraId:61,tocIndex:25},{value:"\u3002",paraId:60,tocIndex:25},{value:"\u{1F195} \u65B0\u589E ",paraId:60,tocIndex:25},{value:"loading",paraId:60,tocIndex:25},{value:" \u914D\u7F6E\u9879\uFF0C\u7528\u4E8E\u589E\u5F3A\u9875\u9762\u4EA4\u4E92\u4F53\u9A8C",paraId:60,tocIndex:25},{value:"\u8BE6\u60C5",paraId:62,tocIndex:25},{value:"\u3002",paraId:60,tocIndex:25},{value:"\u{1F4C3} \u6587\u6863\u66F4\u65B0\uFF1A\u5C06\u5185\u7F6E\u7EC4\u4EF6\u83DC\u5355\u8C03\u6574\u4E3A\u4E8C\u7EA7\u5BFC\u822A\u83DC\u5355\u3002",paraId:60,tocIndex:25},{value:"2023-07-11",paraId:63,tocIndex:26},{value:"\u{1F41E} \u5F53 actions ",paraId:64,tocIndex:26},{value:"url",paraId:64,tocIndex:26},{value:" \u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u65F6\uFF0CButton \u6309\u94AE key \u503C\u9002\u914D ",paraId:64,tocIndex:26},{value:"#15",paraId:64,tocIndex:26},{value:"\u3002",paraId:64,tocIndex:26},{value:"2023-07-11",paraId:65,tocIndex:27},{value:"\u{1F41E} \u4FEE\u590D\u975E\u591A\u8BED\u8A00\u6A21\u5F0F\u4E0B\uFF0C",paraId:66,tocIndex:27},{value:"useLocaleValue",paraId:66,tocIndex:27},{value:" \u65E0\u6CD5\u83B7\u53D6 actions \u503C ",paraId:66,tocIndex:27},{value:"#13",paraId:66,tocIndex:27},{value:"\u3002",paraId:66,tocIndex:27},{value:"\u{1F195} rtl \u5BFC\u822A\u652F\u6301\u914D\u7F6E\uFF0C\u8BE6\u89C1 ",paraId:66,tocIndex:27},{value:"rtl",paraId:67,tocIndex:27},{value:"\u3002",paraId:66,tocIndex:27},{value:"2023-06-08",paraId:68,tocIndex:28},{value:"\u{1F195} \u589E\u52A0\u56FE\u7247\u9884\u89C8 ",paraId:69,tocIndex:28},{value:"<ImagePreview />",paraId:69,tocIndex:28},{value:" \u5185\u7F6E\u7EC4\u4EF6\u3002",paraId:69,tocIndex:28},{value:"2023-06-05",paraId:70,tocIndex:29},{value:"\u{1F195} \u652F\u6301 ",paraId:71,tocIndex:29},{value:"LTR",paraId:71,tocIndex:29},{value:" \u4EE5\u53CA ",paraId:71,tocIndex:29},{value:"RTL",paraId:71,tocIndex:29},{value:" \u6587\u5B57\u65B9\u5411\u5207\u6362\u3002",paraId:71,tocIndex:29},{value:"\u{1F195} \u652F\u6301 antd \u5B9A\u5236\u4E3B\u9898\u914D\u7F6E\uFF0C\u8BE6\u89C1 ",paraId:71,tocIndex:29},{value:"theme",paraId:72,tocIndex:29},{value:"\u3002",paraId:71,tocIndex:29},{value:"\u{1F41E} \u4FEE\u590D\u4F20\u5165 ",paraId:71,tocIndex:29},{value:"bannerConfig",paraId:71,tocIndex:29},{value:" \u914D\u7F6E\uFF0C\u5934\u90E8\u56FE\u7247\u88AB\u538B\u7F29\u3002",paraId:71,tocIndex:29},{value:"#7",paraId:71,tocIndex:29},{value:"2023-05-31",paraId:73,tocIndex:30},{value:"\u{1F195} \u652F\u6301 ",paraId:74,tocIndex:30},{value:"sidebarGroupModePath",paraId:74,tocIndex:30},{value:" \u4E3A ",paraId:74,tocIndex:30},{value:"true",paraId:74,tocIndex:30},{value:"\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u89C1 ",paraId:74,tocIndex:30},{value:"sidebarGroupModePath \u914D\u7F6E",paraId:75,tocIndex:30},{value:"\u3002",paraId:74,tocIndex:30},{value:"\u{1F195} \u589E\u52A0 ",paraId:74,tocIndex:30},{value:"<Alert />",paraId:74,tocIndex:30},{value:" \u5185\u7F6E\u7EC4\u4EF6\u3002",paraId:74,tocIndex:30},{value:"\u{1F195} \u652F\u6301\u591A\u7EA7 sidebar\uFF0C\u8BE6\u7EC6\u89C1 ",paraId:74,tocIndex:30},{value:"sidebarEnhance \u914D\u7F6E",paraId:76,tocIndex:30},{value:"\u3002",paraId:74,tocIndex:30},{value:"\u{1F195} \u652F\u6301\u9996\u9875\u5B8C\u5168\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:74,tocIndex:30},{value:"\u{1F484} \u65B0\u589E\u591A\u7EA7\u4FA7\u8FB9\u680F\u914D\u7F6E\u6587\u6863",paraId:74,tocIndex:30},{value:"\u591A\u7EA7\u4FA7\u8FB9\u680F",paraId:77,tocIndex:30},{value:"\u3002",paraId:74,tocIndex:30},{value:"\u{1F41E} \u4FEE\u590D\u9875\u9762\u951A\u70B9\u4EE5\u53CA\u641C\u7D22\u6846\u70B9\u51FB\u4E0D\u8DF3\u8F6C\u81F3\u5BF9\u4E8E\u533A\u57DF",paraId:78,tocIndex:31},{value:"#6",paraId:78,tocIndex:31},{value:"\u3002",paraId:78,tocIndex:31},{value:"\u{1F195} \u9996\u9875 banner \u533A\u57DF\u652F\u6301\u81EA\u5B9A\u4E49\u914D\u7F6E",paraId:79,tocIndex:32},{value:"#4",paraId:79,tocIndex:32},{value:"\u3002",paraId:79,tocIndex:32},{value:"\u{1F195} \u5BFC\u822A\u680F\u652F\u6301\u914D\u7F6E\u66F4\u591A\u751F\u6001\u94FE\u63A5\u3002",paraId:80,tocIndex:33},{value:"\u{1F195} \u6587\u6863\u589E\u52A0\u4E0A\u4E00\u9875\u4EE5\u53CA\u4E0B\u4E00\u9875\u64CD\u4F5C\u3002",paraId:80,tocIndex:33},{value:"\u{1F195} \u589E\u52A0\u6587\u6863\u7248\u672C\u663E\u793A\u914D\u7F6E\u3002",paraId:81,tocIndex:34},{value:"\u{1F195} \u589E\u52A0\u7D27\u51D1\u4E3B\u9898\u6A21\u5F0F\u3002",paraId:81,tocIndex:34},{value:"\u{1F195} \u9996\u9875 ",paraId:81,tocIndex:34},{value:"action",paraId:81,tocIndex:34},{value:" \u652F\u6301\u5916\u90E8\u94FE\u63A5 ",paraId:81,tocIndex:34},{value:"#2",paraId:81,tocIndex:34},{value:"\u3002",paraId:81,tocIndex:34},{value:"\u{1F195} \u4F18\u5316\u6697\u9ED1\u6A21\u5F0F\u4E0B\uFF0C\u5B57\u4F53\u989C\u8272\u3001\u56FE\u7247\u900F\u660E\u5EA6\u3001\u641C\u7D22\u6846\u4EE5\u53CA\u4EE3\u7801\u9884\u89C8\u6A21\u5757\u6837\u5F0F\u3002",paraId:81,tocIndex:34},{value:"\u{1F484} \u66F4\u65B0\u76F8\u5173\u6587\u6863\u3002",paraId:81,tocIndex:34},{value:"\u{1F195} \u4F18\u5316\u9996\u9875\u5185\u5BB9\uFF0C\u589E\u52A0\u89C6\u9891\u52A8\u753B\u6548\u679C\u3002",paraId:82,tocIndex:35},{value:"\u{1F41E} \u4FEE\u590D\u591A\u8BED\u8A00\u5207\u6362\u7B2C\u4E8C\u6B21\u70B9\u51FB\u8DEF\u7531\u65E0\u6CD5\u8DF3\u8F6C\u3002",paraId:82,tocIndex:35},{value:"\u{1F484} \u4F18\u5316\u914D\u7F6E\u9879\uFF0C\u5C06\u914D\u7F6E\u9879\u5B57\u6BB5\u79FB\u52A8\u5230 dumi \u5185\u7F6E ",paraId:82,tocIndex:35},{value:"themeConfig",paraId:82,tocIndex:35},{value:" \u5B57\u6BB5\u4E2D\u3002",paraId:82,tocIndex:35},{value:"\u{1F484} \u66F4\u65B0\u76F8\u5173\u6587\u6863\u3002",paraId:82,tocIndex:35},{value:"\u{1F195} \u8C03\u6574 api \u6587\u6863\u8868\u683C\u6837\u5F0F\u3002",paraId:83,tocIndex:36},{value:"\u{1F41E} \u5BFC\u822A\u680F\u5207\u6362\u4FDD\u7559\u6697\u9ED1\u4E3B\u9898\u53C2\u6570\u3002",paraId:83,tocIndex:36},{value:"\u2328\uFE0F \u9879\u76EE\u4F7F\u7528 ",paraId:83,tocIndex:36},{value:"@utopia",paraId:83,tocIndex:36},{value:" \u4E2D\u5185\u7F6E eslint rules \u4EE5\u53CA prettier configs\u3002",paraId:83,tocIndex:36},{value:"\u{1F195} \u6587\u6863\u9002\u914D\u82F1\u6587\u3002",paraId:84,tocIndex:37},{value:"\u{1F195} \u8BED\u8A00\u5207\u6362\u7EF4\u6301\u7CFB\u7EDF\u4E3B\u9898\u3002",paraId:84,tocIndex:37},{value:"\u{1F41E} \u9ED1\u6A21\u5F0F\u4E0B\uFF0C\u591A\u8BED\u8A00\u5207\u6362\u56FE\u6807\u5B57\u4F53\u989C\u8272\u8C03\u6574\u3002",paraId:84,tocIndex:37},{value:"\u{1F41E} \u6587\u6863\u62FC\u5199\u9519\u8BEF\u3002",paraId:84,tocIndex:37},{value:"\u{1F195} \u79FB\u52A8\u7AEF\u9002\u914D\uFF1A\u589E\u52A0\u4E8C\u7EA7\u5BFC\u822A\u680F\u3002",paraId:85,tocIndex:38},{value:"\u{1F195} \u9996\u9875\u9002\u914D\u591A\u8BED\u8A00\u5C55\u793A\u3002",paraId:85,tocIndex:38},{value:"\u{1F41E} \u4FEE\u590D\u79FB\u52A8\u7AEF\u6A21\u5F0F\u4E0B\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761\u3002",paraId:85,tocIndex:38},{value:"\u{1F41E} \u4FEE\u590D ",paraId:85,tocIndex:38},{value:"markdown",paraId:85,tocIndex:38},{value:" \u5185\u5BB9\u6807\u9898\u4E0D\u663E\u793A\u951A\u70B9\u3002",paraId:85,tocIndex:38},{value:"\u{1F195} \u9002\u914D\u79FB\u52A8\u7AEF\u3002",paraId:86,tocIndex:39},{value:"\u{1F195} \u652F\u6301\u6D45\u8272\u4E3B\u9898\u3001\u6697\u9ED1\u4E3B\u9898\u4E24\u79CD\u4E3B\u9898\u5207\u6362\u3002",paraId:86,tocIndex:39},{value:"\u{1F41E} \u4FEE\u590D\u975E\u591A\u8BED\u8A00\u60C5\u51B5\u4E0B\u51FA\u73B0\u4E0B\u62C9\u9009\u62E9\u3002",paraId:87,tocIndex:40},{value:"\u{1F6E0} \u91CD\u6784 ",paraId:88,tocIndex:41},{value:"Footer",paraId:88,tocIndex:41},{value:" \u5185\u5BB9\uFF0C\u4F7F\u7528 dumi \u5185\u7F6E ",paraId:88,tocIndex:41},{value:"footer",paraId:88,tocIndex:41},{value:" \u914D\u7F6E\u4FE1\u606F\u3002",paraId:88,tocIndex:41},{value:"\u{1F6E0} \u66F4\u65B0\u76F8\u5E94\u6587\u6863\u4ECB\u7ECD\u3002",paraId:88,tocIndex:41},{value:"\u{1F195} \u65B0\u589E 404 \u9875\u9762\u5E03\u5C40\uFF0C\u5185\u7F6E ",paraId:89,tocIndex:42},{value:"zh/en",paraId:89,tocIndex:42},{value:" \u5207\u6362\u3002",paraId:89,tocIndex:42},{value:"\u{1F41E} \u4FEE\u590D\u4F7F\u7528 ",paraId:90,tocIndex:43},{value:"@emotion/react",paraId:90,tocIndex:43},{value:"\u60C5\u51B5\u4E0B \uFF0C React ",paraId:90,tocIndex:43},{value:"<>",paraId:90,tocIndex:43},{value:" \u8282\u70B9\u7F16\u8BD1\u95EE\u9898\u3002",paraId:90,tocIndex:43},{value:"\u{1F41E} \u4FEE\u590D\u4F7F\u7528 ",paraId:91,tocIndex:44},{value:"@emotion/react",paraId:91,tocIndex:44},{value:"\u60C5\u51B5\u4E0B \uFF0C React ",paraId:91,tocIndex:44},{value:"<>",paraId:91,tocIndex:44},{value:" \u8282\u70B9\u7F16\u8BD1\u95EE\u9898\u3002",paraId:91,tocIndex:44},{value:"\u{1F195} \u65B0\u589E ",paraId:92,tocIndex:45},{value:"sidebarGroupModePath",paraId:92,tocIndex:45},{value:" \u5B57\u6BB5\u914D\u7F6E\u3002",paraId:92,tocIndex:45}]},56494:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(31390);const t=[{value:"The first version of ",paraId:0,tocIndex:0},{value:"dumi-theme-antd",paraId:0,tocIndex:0},{value:" has been developed, but it is not yet fully adapted to some features of the Antd Design 5.0 official website. This is a continuous process. If you have any questions, please contact [issues](",paraId:0,tocIndex:0},{value:"https://github",paraId:0,tocIndex:0},{value:" .com/KuangPF/dumi-theme-antd/issues) form feedback.",paraId:0,tocIndex:0},{value:"It is recommended to use ",paraId:1,tocIndex:2},{value:"pnpm",paraId:1,tocIndex:2},{value:" as a package management tool.",paraId:1,tocIndex:2},{value:"After you clone the dumi-theme-antd code and use:",paraId:2,tocIndex:2},{value:"After installing the dependencies, run the following command to start the development mode. ",paraId:3,tocIndex:2},{value:"Modify ",paraId:4,tocIndex:2},{value:"/src",paraId:4,tocIndex:2},{value:" to debug the files in the directory.",paraId:4,tocIndex:2},{value:"Thanks to the students who have contributed~",paraId:5,tocIndex:3},{value:`
  `,paraId:6,tocIndex:3},{value:`
    `,paraId:6,tocIndex:3},{value:`
  `,paraId:6,tocIndex:3}]},20597:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var d=e(57620);const t=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"dumi-theme-antd",paraId:1,tocIndex:0},{value:" is a ",paraId:1,tocIndex:0},{value:"dumi",paraId:1,tocIndex:0},{value:" theme package, the theme style refers to Antd Design 5.0 official website. Based on ",paraId:1,tocIndex:0},{value:"dumi",paraId:1,tocIndex:0},{value:" theme development function, deeply customized and developed:",paraId:1,tocIndex:0},{value:"HomePage",paraId:2,tocIndex:0},{value:"Navigation",paraId:2,tocIndex:0},{value:"Sidebar",paraId:2,tocIndex:0},{value:"Content",paraId:2,tocIndex:0},{value:"Footer",paraId:2,tocIndex:0},{value:"...",paraId:2,tocIndex:0},{value:"Install using pnpm or yarn",paraId:3,tocIndex:1},{value:"dumi-theme-antd",paraId:4,tocIndex:2},{value:" is developed based on the ",paraId:4,tocIndex:2},{value:"dumi",paraId:4,tocIndex:2},{value:" theme package convention. After installation, ",paraId:4,tocIndex:2},{value:"dumi",paraId:4,tocIndex:2},{value:" will automatically load the theme package from ",paraId:4,tocIndex:2},{value:"packge.json",paraId:4,tocIndex:2},{value:" without any other configuration. ",paraId:4,tocIndex:2},{value:"dumi-theme-antd",paraId:4,tocIndex:2},{value:" also supports some specific configuration parameters in order to better adapt to the Antd Design 5.0 official website theme style, go to ",paraId:4,tocIndex:2},{value:"Configuration",paraId:5,tocIndex:2},{value:" for details.",paraId:4,tocIndex:2}]}}]);
