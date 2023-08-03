"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[7492],{69952:function(L,h,_){_.r(h);var p=_(2143),v=_(93359),f=_(15371),t=_(70222),D=_(59973),O=_(96057),E=_(72532),s=_(36185),b=_(12725),a=_(55816),o=_(88270),d=_(80645),r=_(62435),n=_(47783);function Z(){var P=(0,d.eL)(),e=P.texts;return(0,n.tZ)(d.dY,null,(0,n.tZ)(r.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value,(0,n.tZ)("code",null,e[1].value),e[2].value,(0,n.tZ)("a",{href:"https://ant.design/components/alert-cn"},e[3].value),e[4].value,(0,n.tZ)("code",null,e[5].value),e[6].value,(0,n.tZ)("code",null,e[7].value),e[8].value,(0,n.tZ)("code",null,e[9].value),e[10].value),(0,n.tZ)(D.Z,{lang:"markdown"},e[11].value)),(0,n.tZ)(s.Z,null,e[12].value),(0,n.tZ)(s.Z,{type:"success",showIcon:"",showicon:""},e[13].value),(0,n.tZ)(s.Z,{type:"info"},e[14].value),(0,n.tZ)(s.Z,{type:"warning"},e[15].value),(0,n.tZ)(s.Z,{type:"error",closable:""},e[16].value)))}h.default=Z},36185:function(L,h,_){var p=_(67333),v=_.n(p),f=_(13769),t=_.n(f),D=_(61875),O=_(47783),E=["children"],s=function(o){var d=o;return Object.keys(d).forEach(function(r){d[r]===""&&(d[r]=!0)}),d},b=function(o){var d=o.children,r=t()(o,E);return(0,O.tZ)(D.Z,v()({style:{marginBottom:16},message:d},s(r)))};h.Z=b},55816:function(L,h,_){var p=_(67333),v=_.n(p),f=_(97857),t=_.n(f),D=_(62435),O=_(94184),E=_.n(O),s=_(99902),b=_(45598),a=_(47783);function o(e){return/\bgood\b/i.test(e)}function d(e){return/\bbad\b/i.test(e)}function r(e){return/\binline\b/i.test(e)}function n(e){return e.isGood||e.isBad}function Z(e){return n(e)||e.inline}var P=function(l){var i=l.children,I=l.float,g=l.pure,M=(0,b.Z)(i).filter(function(c){return c.type==="img"}),B=M.map(function(c){var u=c.props,m=u.alt,W=u.description,R=u.src,A=u.className;return{className:A,alt:m,description:W,src:R,isGood:o(A)||void 0,isBad:d(A)||void 0,inline:r(A)}}),x=B.map(function(c,u){var m=t()({},c);return delete m.description,delete m.isGood,delete m.isBad,(0,a.tZ)("div",{key:u},(0,a.tZ)("div",{className:"image-modal-container"},(0,a.tZ)("img",v()({},m,{src:c.src,alt:c.alt}))))}),C=M.length===2&&B.every(Z)||M.length>=2&&B.every(n),y=C?{width:"".concat((100/M.length).toFixed(3),"%")}:{},T=M.length>1&&!C,K=E()({clearfix:!0,"preview-image-boxes":!0,"preview-image-boxes-float":I!==void 0,"preview-image-boxes-pure":g!==void 0,"preview-image-boxes-compare":C,"preview-image-boxes-with-carousel":T});return(0,a.tZ)("div",{className:K},x.map(function(c,u){if(!C&&u!==0)return null;var m=B[u],W=E()({"preview-image-wrapper":g===void 0,good:m.isGood,bad:m.isBad});return(0,a.tZ)("div",{className:"preview-image-box",style:y,key:u},(0,a.tZ)("div",{className:W},(0,a.tZ)(s.Z,{className:m.className,src:m.src,alt:m.alt})),(0,a.tZ)("div",{className:"preview-image-title"},m.alt),(0,a.tZ)("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:m.description}}))}))};h.Z=P},88270:function(L,h,_){_.d(h,{Z:function(){return Z}});var p=_(580),v=_(59973),f=_(62435),t=_(47783),D=function(e){var l=e.className,i=e.style;return(0,t.tZ)("svg",{className:l,style:i,fill:"#E53E3E",focusable:"false",height:"1em",stroke:"#E53E3E",strokeWidth:"0",viewBox:"0 0 16 16",width:"1em"},(0,t.tZ)("path",{d:"M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"}))},O=D,E=function(e){var l=e.className,i=e.style;return(0,t.tZ)("svg",{className:l,style:i,"aria-hidden":"true",fill:"#F69220",focusable:"false",height:"1em",role:"img",stroke:"#F69220",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em"},(0,t.tZ)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"}))},s=E,b=function(e){var l=e.className,i=e.style;return(0,t.tZ)("svg",{className:l,style:i,"aria-hidden":"true",fill:"#2C8EBB",focusable:"false",height:"1em",stroke:"#2C8EBB",strokeWidth:"0",viewBox:"0 0 496 512",width:"1em"},(0,t.tZ)("path",{d:"M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z"}))},a=b,o=(0,t.tZ)("span",{className:"snippet-label"},(0,t.tZ)(O,null),"npm"),d=(0,t.tZ)("span",{className:"snippet-label"},(0,t.tZ)(s,null),"pnpm"),r=(0,t.tZ)("span",{className:"snippet-label"},(0,t.tZ)(a,null),"yarn"),n=function(e){var l=e.npm,i=e.yarn,I=e.pnpm,g=f.useMemo(function(){return[{key:"npm",children:l?(0,t.tZ)(v.Z,{lang:"bash"},l):null,label:o},{key:"yarn",children:i?(0,t.tZ)(v.Z,{lang:"bash"},i):null,label:r},{key:"pnpm",children:I?(0,t.tZ)(v.Z,{lang:"bash"},I):null,label:d}].filter(function(M){return M.children})},[l,i,I]);return(0,t.tZ)(p.Z,{className:"antd-site-snippet",defaultActiveKey:"npm",items:g})},Z=n}}]);
