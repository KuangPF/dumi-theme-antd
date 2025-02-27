"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[1032],{55018:function(it,E,t){t.r(E),t.d(E,{default:function(){return _}});var N=t(97857),S=t.n(N),P=t(5574),p=t.n(P),f=t(96803),T=t(9361),V=t(10965),h=t(51299),s=t(67294),J=t(53069),D=t(19632),O=t.n(D),A=t(28996),z=t(6308),H=t(67333),j=t.n(H),b=t(16165),e=t(27248),B=function(n){var r=s.useCallback(function(){return(0,e.tZ)("svg",j()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},n),(0,e.tZ)("g",{fillRule:"evenodd"},(0,e.tZ)("g",{fillRule:"nonzero"},(0,e.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[n]);return(0,e.tZ)(b.Z,j()({component:r},n))},K=B,X=function(n){var r=n.value,a=r===void 0?["light"]:r,i=n.onChange;return(0,e.tZ)(A.Z.Group,{trigger:"click",icon:(0,e.tZ)(K,null)},(0,e.tZ)(A.Z,{icon:(0,e.tZ)(z.Cs,null),type:a.includes("dark")?"primary":"default",onClick:function(){var d=a.includes("dark")?"light":"dark";i([d].concat(O()(a.filter(function(l){return["dark","light"].indexOf(l)<0}))))},tooltip:(0,e.tZ)(h._H,{id:"app.theme.switch.dark"})}),(0,e.tZ)(A.Z,{icon:(0,e.tZ)(z.dR,null),type:a.includes("compact")?"primary":"default",onClick:function(){a.includes("compact")?i(a.filter(function(d){return d!=="compact"})):i([].concat(O()(a),["compact"]))},tooltip:(0,e.tZ)(h._H,{id:"app.theme.switch.compact"})}))},W=X,Y=t(3303),F=768,L="dumi-theme-antd-site-state",x={theme:["light"],isMobile:!1,direction:"ltr"},Q=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return n.map(function(r){return r==="dark"?T.Z.darkAlgorithm:r==="compact"?T.Z.compactAlgorithm:T.Z.defaultAlgorithm})},U=function(){if(typeof window!="undefined"){var n;return(n=window.matchMedia("(prefers-color-scheme: dark)"))===null||n===void 0?void 0:n.matches}return!1},$=function(n){var r=n,a=U(),i=(r==null?void 0:r.theme)||[],g=i.filter(function(l){return l==="auto"}).length>0;if(g){var d=i.filter(function(l){return l!=="auto"});d.push(a?"dark":"light"),r.theme=d}return Object.assign(x,r)},q=function(){var n=(0,h.OI)(),r=p()(n,3),a=r[2],i=(0,J.Z)(),g=i.theme,d=i.ssr,l=i.prefersColor,tt=(0,s.useState)(x),G=p()(tt,2),I=G[0],c=I.theme,R=I.isMobile,w=I.direction,et=G[1],v=(0,s.useCallback)(function(o){if(typeof window!="undefined")try{var u=JSON.parse(window.localStorage.getItem(L)||"{}"),M=Object.assign(u,o);window.localStorage.setItem(L,JSON.stringify(M)),et(function(y){return S()(S()({},y),o)})}catch(y){console.error(y)}},[]),C=(0,s.useCallback)(function(){typeof window!="undefined"&&v({isMobile:window.innerWidth<F})},[v]);(0,s.useEffect)(function(){if(typeof window!="undefined")try{var o,u=JSON.parse(((o=window.localStorage)===null||o===void 0?void 0:o.getItem(L))||"{}");u!=null&&u.theme||(u.theme=[l.default]);var M=$(u);v(M)}catch(y){console.error(y)}},[l,v]),(0,s.useEffect)(function(){return typeof window=="undefined"?function(){}:(C(),a((c!=null?c:[]).indexOf("dark")>-1?"dark":"light"),window.addEventListener("resize",C),function(){window.removeEventListener("resize",C)})},[c,C,a]);var nt=(0,s.useMemo)(function(){return{direction:w,isMobile:R,theme:c,updateSiteConfig:v}},[R,c,w,v]),rt=s.useState(function(){return(0,f.Df)()}),at=p()(rt,1),Z=at[0];(0,h.vj)(function(){var o=(0,f.EN)(Z,{plain:!0,types:"style"});return(0,e.tZ)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:o}})}),(0,h.vj)(function(){var o=(0,f.EN)(Z,{plain:!0,types:["cssVar","token"]});return(0,e.tZ)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:o}})});var k=(0,e.tZ)(Y.Z.Provider,{value:nt},(0,e.tZ)(V.ZP,{theme:S()(S()({},g),{},{algorithm:Q(c)})},(0,e.tZ)(h.j3,null),l.switch&&(0,e.tZ)(W,{value:c,onChange:function(u){return v({theme:u})}}))),ot=(0,e.tZ)(f.V9,{cache:Z,linters:[f.nc,f.Ke,f.rA]},k);return d?(t.g.styleCache=Z,ot):k},_=q}}]);
