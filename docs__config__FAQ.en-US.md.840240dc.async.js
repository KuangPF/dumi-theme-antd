"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[797],{71984:function(L,u,e){e.r(u);var P=e(2143),o=e(93359),M=e(15371),t=e(70222),b=e(59973),p=e(96057),c=e(72532),f=e(36185),D=e(55816),a=e(88270),i=e(80645),s=e(62435),n=e(47783);function O(){var I=(0,i.eL)(),h=I.texts;return(0,n.tZ)(i.dY,null,(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,h[0].value),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,h[1].value)))))}u.default=O},36185:function(L,u,e){var P=e(67333),o=e.n(P),M=e(13769),t=e.n(M),b=e(62110),p=e(47783),c=["children"],f=function(i){var s=i;return Object.keys(s).forEach(function(n){s[n]===""&&(s[n]=!0)}),s},D=function(i){var s=i.children,n=t()(i,c);return(0,p.tZ)(b.Z,o()({style:{marginBottom:16},message:s},f(n)))};u.Z=D},55816:function(L,u,e){var P=e(67333),o=e.n(P),M=e(97857),t=e.n(M),b=e(62435),p=e(94184),c=e.n(p),f=e(19642),D=e(45598),a=e(47783);function i(_){return/\bgood\b/i.test(_)}function s(_){return/\bbad\b/i.test(_)}function n(_){return/\binline\b/i.test(_)}function O(_){return _.isGood||_.isBad}function I(_){return O(_)||_.inline}var h=function(d){var l=d.children,C=d.float,B=d.pure,E=(0,D.Z)(l).filter(function(v){return v.type==="img"}),g=E.map(function(v){var r=v.props,m=r.alt,W=r.description,R=r.src,A=r.className;return{className:A,alt:m,description:W,src:R,isGood:i(A)||void 0,isBad:s(A)||void 0,inline:n(A)}}),T=g.map(function(v,r){var m=t()({},v);return delete m.description,delete m.isGood,delete m.isBad,(0,a.tZ)("div",{key:r},(0,a.tZ)("div",{className:"image-modal-container"},(0,a.tZ)("img",o()({},m,{src:v.src,alt:v.alt}))))}),Z=E.length===2&&g.every(I)||E.length>=2&&g.every(O),x=Z?{width:"".concat((100/E.length).toFixed(3),"%")}:{},y=E.length>1&&!Z,K=c()({clearfix:!0,"preview-image-boxes":!0,"preview-image-boxes-float":C!==void 0,"preview-image-boxes-pure":B!==void 0,"preview-image-boxes-compare":Z,"preview-image-boxes-with-carousel":y});return(0,a.tZ)("div",{className:K},T.map(function(v,r){if(!Z&&r!==0)return null;var m=g[r],W=c()({"preview-image-wrapper":B===void 0,good:m.isGood,bad:m.isBad});return(0,a.tZ)("div",{className:"preview-image-box",style:x,key:r},(0,a.tZ)("div",{className:W},(0,a.tZ)(f.Z,{className:m.className,src:m.src,alt:m.alt})),(0,a.tZ)("div",{className:"preview-image-title"},m.alt),(0,a.tZ)("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:m.description}}))}))};u.Z=h},88270:function(L,u,e){e.d(u,{Z:function(){return I}});var P=e(22120),o=e(59973),M=e(62435),t=e(47783),b=function(_){var d=_.className,l=_.style;return(0,t.tZ)("svg",{className:d,style:l,fill:"#E53E3E",focusable:"false",height:"1em",stroke:"#E53E3E",strokeWidth:"0",viewBox:"0 0 16 16",width:"1em"},(0,t.tZ)("path",{d:"M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"}))},p=b,c=function(_){var d=_.className,l=_.style;return(0,t.tZ)("svg",{className:d,style:l,"aria-hidden":"true",fill:"#F69220",focusable:"false",height:"1em",role:"img",stroke:"#F69220",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em"},(0,t.tZ)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"}))},f=c,D=function(_){var d=_.className,l=_.style;return(0,t.tZ)("svg",{className:d,style:l,"aria-hidden":"true",fill:"#2C8EBB",focusable:"false",height:"1em",stroke:"#2C8EBB",strokeWidth:"0",viewBox:"0 0 496 512",width:"1em"},(0,t.tZ)("path",{d:"M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z"}))},a=D,i=(0,t.tZ)("span",{className:"snippet-label"},(0,t.tZ)(p,null),"npm"),s=(0,t.tZ)("span",{className:"snippet-label"},(0,t.tZ)(f,null),"pnpm"),n=(0,t.tZ)("span",{className:"snippet-label"},(0,t.tZ)(a,null),"yarn"),O=function(_){var d=_.npm,l=_.yarn,C=_.pnpm,B=M.useMemo(function(){return[{key:"npm",children:d?(0,t.tZ)(o.Z,{lang:"bash"},d):null,label:i},{key:"yarn",children:l?(0,t.tZ)(o.Z,{lang:"bash"},l):null,label:n},{key:"pnpm",children:C?(0,t.tZ)(o.Z,{lang:"bash"},C):null,label:s}].filter(function(E){return E.children})},[d,l,C]);return(0,t.tZ)(P.Z,{className:"antd-site-snippet",defaultActiveKey:"npm",items:B})},I=O}}]);
