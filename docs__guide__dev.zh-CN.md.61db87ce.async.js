"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[107],{68030:function(x,o,_){_.r(o);var p=_(2143),h=_(93359),P=_(15371),a=_(70222),b=_(59973),D=_(96057),c=_(72532),Z=_(36185),f=_(55816),m=_(88270),i=_(80645),l=_(62435),e=_(47783);function M(){var O=(0,i.eL)(),n=O.texts;return(0,e.tZ)(i.dY,null,(0,e.tZ)(l.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"\u5F00\u53D1\u72B6\u6001"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F00\u53D1\u72B6\u6001"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5F00\u53D1\u72B6\u6001"),(0,e.tZ)("p",null,(0,e.tZ)("code",null,n[0].value),n[1].value,(0,e.tZ)("a",{href:"https://github.com/KuangPF/dumi-theme-antd/issues"},n[2].value),n[3].value),(0,e.tZ)("h2",{id:"\u8D21\u732E"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8D21\u732E"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u8D21\u732E"),(0,e.tZ)("h3",{id:"\u5F00\u53D1\u6D41\u7A0B"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F00\u53D1\u6D41\u7A0B"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5F00\u53D1\u6D41\u7A0B"),(0,e.tZ)("p",null,n[4].value,(0,e.tZ)("code",null,n[5].value),n[6].value,(0,e.tZ)("code",null,n[7].value),n[8].value),(0,e.tZ)("p",null,n[9].value)),(0,e.tZ)(m.Z,{npm:"$ npm install",yarn:"$ yarn"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[10].value)),(0,e.tZ)(m.Z,{npm:"$ npm run docs",yarn:"$ yarn docs"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[11].value,(0,e.tZ)("code",null,n[12].value),n[13].value),(0,e.tZ)("h3",{id:"\u6B22\u8FCE-prs"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6B22\u8FCE-prs"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u6B22\u8FCE PRS"),(0,e.tZ)("p",null,n[14].value),(0,e.tZ)("p",null,n[15].value,(0,e.tZ)("a",{href:"https://github.com/KuangPF/dumi-theme-antd/graphs/contributors"},n[16].value,(0,e.tZ)("img",{src:"https://contrib.rocks/image?repo=KuangPF/dumi-theme-antd"}),n[17].value)))))}o.default=M},36185:function(x,o,_){var p=_(67333),h=_.n(p),P=_(13769),a=_.n(P),b=_(62110),D=_(47783),c=["children"],Z=function(i){var l=i;return Object.keys(l).forEach(function(e){l[e]===""&&(l[e]=!0)}),l},f=function(i){var l=i.children,e=a()(i,c);return(0,D.tZ)(b.Z,h()({style:{marginBottom:16},message:l},Z(e)))};o.Z=f},55816:function(x,o,_){var p=_(67333),h=_.n(p),P=_(97857),a=_.n(P),b=_(62435),D=_(94184),c=_.n(D),Z=_(19642),f=_(45598),m=_(47783);function i(t){return/\bgood\b/i.test(t)}function l(t){return/\bbad\b/i.test(t)}function e(t){return/\binline\b/i.test(t)}function M(t){return t.isGood||t.isBad}function O(t){return M(t)||t.inline}var n=function(s){var u=s.children,g=s.float,I=s.pure,E=(0,f.Z)(u).filter(function(v){return v.type==="img"}),B=E.map(function(v){var r=v.props,d=r.alt,L=r.description,T=r.src,A=r.className;return{className:A,alt:d,description:L,src:T,isGood:i(A)||void 0,isBad:l(A)||void 0,inline:e(A)}}),N=B.map(function(v,r){var d=a()({},v);return delete d.description,delete d.isGood,delete d.isBad,(0,m.tZ)("div",{key:r},(0,m.tZ)("div",{className:"image-modal-container"},(0,m.tZ)("img",h()({},d,{src:v.src,alt:v.alt}))))}),C=E.length===2&&B.every(O)||E.length>=2&&B.every(M),W=C?{width:"".concat((100/E.length).toFixed(3),"%")}:{},y=E.length>1&&!C,K=c()({clearfix:!0,"preview-image-boxes":!0,"preview-image-boxes-float":g!==void 0,"preview-image-boxes-pure":I!==void 0,"preview-image-boxes-compare":C,"preview-image-boxes-with-carousel":y});return(0,m.tZ)("div",{className:K},N.map(function(v,r){if(!C&&r!==0)return null;var d=B[r],L=c()({"preview-image-wrapper":I===void 0,good:d.isGood,bad:d.isBad});return(0,m.tZ)("div",{className:"preview-image-box",style:W,key:r},(0,m.tZ)("div",{className:L},(0,m.tZ)(Z.Z,{className:d.className,src:d.src,alt:d.alt})),(0,m.tZ)("div",{className:"preview-image-title"},d.alt),(0,m.tZ)("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:d.description}}))}))};o.Z=n},88270:function(x,o,_){_.d(o,{Z:function(){return O}});var p=_(22120),h=_(59973),P=_(62435),a=_(47783),b=function(t){var s=t.className,u=t.style;return(0,a.tZ)("svg",{className:s,style:u,fill:"#E53E3E",focusable:"false",height:"1em",stroke:"#E53E3E",strokeWidth:"0",viewBox:"0 0 16 16",width:"1em"},(0,a.tZ)("path",{d:"M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"}))},D=b,c=function(t){var s=t.className,u=t.style;return(0,a.tZ)("svg",{className:s,style:u,"aria-hidden":"true",fill:"#F69220",focusable:"false",height:"1em",role:"img",stroke:"#F69220",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em"},(0,a.tZ)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"}))},Z=c,f=function(t){var s=t.className,u=t.style;return(0,a.tZ)("svg",{className:s,style:u,"aria-hidden":"true",fill:"#2C8EBB",focusable:"false",height:"1em",stroke:"#2C8EBB",strokeWidth:"0",viewBox:"0 0 496 512",width:"1em"},(0,a.tZ)("path",{d:"M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z"}))},m=f,i=(0,a.tZ)("span",{className:"snippet-label"},(0,a.tZ)(D,null),"npm"),l=(0,a.tZ)("span",{className:"snippet-label"},(0,a.tZ)(Z,null),"pnpm"),e=(0,a.tZ)("span",{className:"snippet-label"},(0,a.tZ)(m,null),"yarn"),M=function(t){var s=t.npm,u=t.yarn,g=t.pnpm,I=P.useMemo(function(){return[{key:"npm",children:s?(0,a.tZ)(h.Z,{lang:"bash"},s):null,label:i},{key:"yarn",children:u?(0,a.tZ)(h.Z,{lang:"bash"},u):null,label:e},{key:"pnpm",children:g?(0,a.tZ)(h.Z,{lang:"bash"},g):null,label:l}].filter(function(E){return E.children})},[s,u,g]);return(0,a.tZ)(p.Z,{className:"antd-site-snippet",defaultActiveKey:"npm",items:I})},O=M}}]);
