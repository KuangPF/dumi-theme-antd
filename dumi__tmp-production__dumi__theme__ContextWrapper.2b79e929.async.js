"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[1923],{3580:function(E,n,t){t.r(n),t.d(n,{default:function(){return h}});var d=t(5574),l=t.n(d),e=t(62435),i=t(98829),u=t(64236),s=t(57952),m=t(73467),c=t(19225),p={};function h(){var g=(0,i.useOutlet)(),_=(0,e.useState)(!1),o=l()(_,2),f=o[0],b=o[1],a=(0,e.useRef)(i.history.location.pathname);return(0,e.useEffect)(function(){return i.history.listen(function(r){r.location.pathname!==a.current&&(a.current=r.location.pathname,document.documentElement.scrollTo(0,0))})},[]),(0,c.tZ)(u.D.Provider,{value:{pkg:{repository:{type:"git",url:"https://github.com/KuangPF/dumi-theme-antd",directory:"example"}},historyType:"browser",entryExports:p,demos:s.DE,components:s.wx,locales:m.k,loading:f,setLoading:b,hostname:void 0,themeConfig:{footer:'Made with<span style="color: rgb(255, 255, 255);">\u2764</span>by <span>KuangPF | Copyright \xA9 2022-present</span>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"dumi-theme-antd",nav:{"zh-CN":[{title:"\u6307\u5357",link:"/guide/introduce"},{title:"\u914D\u7F6E",link:"/config/base"},{title:"\u793A\u4F8B",link:"/demo/secondary-sidebar-colors"}],"en-US":[{title:"Guide",link:"/guide/introduce-en"},{title:"Config",link:"/config/base-en"},{title:"Demo",link:"/demo/secondary-sidebar-colors-en"}]},github:"https://github.com/KuangPF/dumi-theme-antd",localesEnhance:[{id:"zh-CN",switchPrefix:"\u4E2D"},{id:"en-US",switchPrefix:"en"}],sidebarGroupModePath:["/config","/guide"],title:"Dumi Theme Ant Design",description:{"zh-CN":"Ant Design 5.0 \u5B98\u7F51\u98CE\u683C\u7C7B\u4F3C\u7684 dumi2 \u4E3B\u9898\u63D2\u4EF6","en-US":"dumi2 theme similar to antd v5 website"},actions:{"zh-CN":[{type:"primary",text:"\u5F00\u59CB\u4F7F\u7528",link:"/guide/introduce"},{text:"\u914D\u7F6E",link:"/config/base"}],"en-US":[{type:"primary",text:"Start",link:"/guide/introduce-en"},{text:"Config",link:"/config/base-en"}]},features:{"zh-CN":[{title:"\u5185\u7F6E\u5168\u6587\u641C\u7D22",details:"\u4E0D\u9700\u8981\u63A5\u5165\u4EFB\u4F55\u4E09\u65B9\u670D\u52A1\uFF0C\u6807\u9898\u3001\u6B63\u6587\u3001demo \u7B49\u5185\u5BB9\u5747\u53EF\u88AB\u641C\u7D22\uFF0C\u652F\u6301\u591A\u5173\u952E\u8BCD\u641C\u7D22\uFF0C\u4E14\u4E0D\u4F1A\u5E26\u6765\u4EA7\u7269\u4F53\u79EF\u7684\u589E\u52A0\u3002"},{title:"\u66F4\u597D\u7684\u7F16\u8BD1\u6027\u80FD",details:"\u901A\u8FC7\u7ED3\u5408\u4F7F\u7528 Umi 4 MFSU\u3001esbuild\u3001SWC\u3001\u6301\u4E45\u7F13\u5B58\u7B49\u65B9\u6848\uFF0C\u5E26\u6765\u6BD4 dumi 1.x \u66F4\u5FEB\u7684\u7F16\u8BD1\u901F\u5EA6\u3002"},{title:"SSR",details:"\u5168\u9762\u652F\u6301 SSR\uFF0C\u8BA9\u6587\u6863\u5177\u6709\u66F4\u597D\u7684\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u3001\u66F4\u597D\u7684SEO\u6548\u679C\u3001\u66F4\u5FEB\u7684\u5185\u5BB9\u5230\u8FBE\u7387\u3002"},{title:"\u6837\u5F0F\u98CE\u683C\u7EDF\u4E00",details:"\u57FA\u4E8E antd 5.0 CSS-in-JS \u6837\u5F0F\u52A0\u6301\uFF0C\u5168\u9762\u7EDF\u4E00 dumi \u5185\u7F6E\u6837\u5F0F\uFF0C\u540C\u65F6\u652F\u6301\u81EA\u5B9A\u4E49\u4E3B\u9898\u52A0\u8F7D\u3002"},{title:"\u529F\u80FD\u589E\u5F3A",details:"\u5728 dumi \u5185\u7F6E markdown \u589E\u5F3A\u57FA\u7840\u4E0A\u65B0\u589E\u7279\u6709 FrontMatter \u914D\u7F6E\uFF0C\u5E76\u4E14\u5185\u7F6E\u591A\u79CD\u7EC4\u4EF6\uFF0C\u4F7F\u6587\u6863\u5C55\u793A\u6548\u679C\u5F97\u4EE5\u63D0\u5347\u3002"},{title:"\u5F00\u7BB1\u5373\u7528",details:"\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design \u98CE\u683C\uFF0C\u5185\u7F6E\u4E3B\u9898\u5207\u6362\uFF0C\u7D27\u51D1\u6A21\u5F0F\u7B49\u529F\u80FD\u3002"}],"en-US":[{title:"Built-in Full-Text search",details:"There is no need to access any third-party services, and the contents such as title, text, demo, etc. can be searched, which supports multi-keyword search and will not increase the product volume."},{title:"Better Compilation Performance",details:"By combining Umi 4 MFSU, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than dumi1.x."},{title:"SSR",details:"Fully supports SSR, allowing documents to have better first-screen loading speed, better SEO effect, and faster content arrival rate."},{title:"Uniform style",details:"Based on antd 5.0 CSS-in-JS style support, it fully unifies dumi's built-in styles and supports custom theme loading."},{title:"Function enhancement",details:"Based on dumi's built-in markdown enhancement, a unique FrontMatter configuration is added, and a variety of built-in components improve the document display effect."},{title:"Simple Use",details:"Easy access, installation and use, fully integrated into Ant Design style, built-in theme switching, compact mode and other functions."}]},loading:{skeleton:["/guide","/config","/demo"]},docVersions:{"0.3.13":""},footerLinks:[{title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"dumi",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://d.umijs.org",openExternal:!0},{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Umi",description:"React \u5E94\u7528\u5F00\u53D1\u6846\u67B6",url:"https://umijs.org",openExternal:!0},{title:"Ant Motion",description:"\u8BBE\u8BA1\u52A8\u6548",url:"https://motion.ant.design",openExternal:!0}]},{title:"\u5E2E\u52A9",items:[{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png",title:"GitHub",url:"https://github.com/KuangPF/dumi-theme-antd",openExternal:!0},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181710-8e63ee99-ed71-4ee6-8507-d5ffac02ca51.png",title:"\u66F4\u65B0\u65E5\u5FD7",url:"/dumi-theme-antd/guide/changelog"},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181704-d443821a-38a2-490a-9aba-4955ceb8d89b.png",title:"\u5E38\u89C1\u95EE\u9898",url:"/dumi-theme-antd/config/faq"},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png",title:"\u62A5\u544A Bug",url:"https://github.com/KuangPF/dumi-theme-antd/issues/new",openExternal:!0},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png",title:"\u8BAE\u9898",url:"https://github.com/KuangPF/dumi-theme-antd/issues",openExternal:!0}]},{title:"\u66F4\u591A\u4EA7\u54C1",icon:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",items:[{icon:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",title:"\u8BED\u96C0",url:"https://yuque.com",description:"\u6784\u5EFA\u4F60\u7684\u6570\u5B57\u82B1\u56ED",openExternal:!0},{icon:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",title:"AntV",url:"https://antv.vision",description:"\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",openExternal:!0},{icon:"https://www.eggjs.org/logo.svg",title:"Egg",url:"https://eggjs.org",description:"\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6",openExternal:!0},{icon:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",title:"Kitchen",description:"Sketch \u5DE5\u5177\u96C6",url:"https://kitchen.alipay.com",openExternal:!0},{icon:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",title:"\u8682\u8681\u4F53\u9A8C\u79D1\u6280",url:"https://xtech.antfin.com/",openExternal:!0}]}],moreLinks:[{text:"Dumi",link:"https://d.umijs.org/"},{text:"Ant Design",link:"https://ant.design/"}],editLink:"https://github.com/KuangPF/dumi-theme-antd/edit/HEAD/example/{filename}",ssr:{}},_2_level_nav_available:!1}},g)}}}]);
