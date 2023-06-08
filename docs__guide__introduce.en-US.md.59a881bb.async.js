"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[330],{3736:function(g,r,_){_.r(r);var h=_(2143),v=_(93359),E=_(15371),c=_(67133),P=_(59973),M=_(96057),s=_(29538),D=_(36185),O=_(55816),n=_(80645),l=_(62435),e=_(47783);function i(){var f=(0,n.eL)(),t=f.texts;return(0,e.tZ)(n.dY,null,(0,e.tZ)(l.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"what-is-dumi-theme-antd"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-dumi-theme-antd"},(0,e.tZ)("span",{className:"icon icon-link"})),"What is dumi-theme-antd"),(0,e.tZ)("p",null,(0,e.tZ)("code",null,t[0].value),t[1].value,(0,e.tZ)("a",{href:"https://d.umijs.org/"},t[2].value),t[3].value,(0,e.tZ)("code",null,t[4].value),t[5].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,t[6].value),(0,e.tZ)("li",null,t[7].value),(0,e.tZ)("li",null,t[8].value),(0,e.tZ)("li",null,t[9].value),(0,e.tZ)("li",null,t[10].value),(0,e.tZ)("li",null,t[11].value)),(0,e.tZ)("h2",{id:"install"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install"},(0,e.tZ)("span",{className:"icon icon-link"})),"Install"),(0,e.tZ)("p",null,t[12].value),(0,e.tZ)(P.Z,{lang:"bash"},t[13].value),(0,e.tZ)("h2",{id:"usage"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage"},(0,e.tZ)("span",{className:"icon icon-link"})),"Usage"),(0,e.tZ)("p",null,(0,e.tZ)("code",null,t[14].value),t[15].value,(0,e.tZ)("code",null,t[16].value),t[17].value,(0,e.tZ)("code",null,t[18].value),t[19].value,(0,e.tZ)("code",null,t[20].value),t[21].value,(0,e.tZ)("code",null,t[22].value),t[23].value,(0,e.tZ)(n.rU,{to:"/config/base-en"},t[24].value),t[25].value))))}r.default=i},36185:function(g,r,_){var h=_(67333),v=_.n(h),E=_(13769),c=_.n(E),P=_(54733),M=_(47783),s=["children"],D=function(l){var e=l;return Object.keys(e).forEach(function(i){e[i]===""&&(e[i]=!0)}),e},O=function(l){var e=l.children,i=c()(l,s);return(0,M.tZ)(P.Z,v()({style:{marginBottom:16},message:e},D(i)))};r.Z=O},55816:function(g,r,_){var h=_(67333),v=_.n(h),E=_(97857),c=_.n(E),P=_(62435),M=_(94184),s=_.n(M),D=_(20668),O=_(45598),n=_(47783);function l(d){return/\bgood\b/i.test(d)}function e(d){return/\bbad\b/i.test(d)}function i(d){return/\binline\b/i.test(d)}function f(d){return d.isGood||d.isBad}function t(d){return f(d)||d.inline}var A=function(C){var T=C.children,W=C.float,B=C.pure,o=(0,O.Z)(T).filter(function(m){return m.type==="img"}),Z=o.map(function(m){var u=m.props,a=u.alt,I=u.description,R=u.src,p=u.className;return{className:p,alt:a,description:I,src:R,isGood:l(p)||void 0,isBad:e(p)||void 0,inline:i(p)}}),L=Z.map(function(m,u){var a=c()({},m);return delete a.description,delete a.isGood,delete a.isBad,(0,n.tZ)("div",{key:u},(0,n.tZ)("div",{className:"image-modal-container"},(0,n.tZ)("img",v()({},a,{src:m.src,alt:m.alt}))))}),b=o.length===2&&Z.every(t)||o.length>=2&&Z.every(f),U=b?{width:"".concat((100/o.length).toFixed(3),"%")}:{},j=o.length>1&&!b,x=s()({clearfix:!0,"preview-image-boxes":!0,"preview-image-boxes-float":W!==void 0,"preview-image-boxes-pure":B!==void 0,"preview-image-boxes-compare":b,"preview-image-boxes-with-carousel":j});return(0,n.tZ)("div",{className:x},L.map(function(m,u){if(!b&&u!==0)return null;var a=Z[u],I=s()({"preview-image-wrapper":B===void 0,good:a.isGood,bad:a.isBad});return(0,n.tZ)("div",{className:"preview-image-box",style:U,key:u},(0,n.tZ)("div",{className:I},(0,n.tZ)(D.Z,{className:a.className,src:a.src,alt:a.alt})),(0,n.tZ)("div",{className:"preview-image-title"},a.alt),(0,n.tZ)("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:a.description}}))}))};r.Z=A}}]);
