"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[1032],{55018:function(J,C,t){t.r(C),t.d(C,{default:function(){return at}});var M=t(97857),a=t.n(M),z=t(5574),S=t.n(z),d=t(70446),P=t(9361),E=t(55990),l=t(80645),u=t(62435),Q=t(53069),X=t(19632),I=t.n(X),T=t(83872),O=t(6308),Y=t(67333),j=t.n(Y),w=t(16165),e=t(19225),q=function(r){var o=u.useCallback(function(){return(0,e.tZ)("svg",j()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},r),(0,e.tZ)("g",{fillRule:"evenodd"},(0,e.tZ)("g",{fillRule:"nonzero"},(0,e.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[r]);return(0,e.tZ)(w.Z,j()({component:o},r))},_=q,tt=function(r){var o=r.value,n=o===void 0?["light"]:o,h=r.onChange;return(0,e.tZ)(T.Z.Group,{trigger:"click",icon:(0,e.tZ)(_,null)},(0,e.tZ)(T.Z,{icon:(0,e.tZ)(O.Cs,null),type:n.includes("dark")?"primary":"default",onClick:function(){n.includes("dark")?h(n.filter(function(c){return c!=="dark"})):h([].concat(I()(n),["dark"]))},tooltip:(0,e.tZ)(l._H,{id:"app.theme.switch.dark"})}),(0,e.tZ)(T.Z,{icon:(0,e.tZ)(O.dR,null),type:n.includes("compact")?"primary":"default",onClick:function(){n.includes("compact")?h(n.filter(function(c){return c!=="compact"})):h([].concat(I()(n),["compact"]))},tooltip:(0,e.tZ)(l._H,{id:"app.theme.switch.compact"})}))},R=tt,G=t(3303),et=768,k=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.map(function(o){return o==="dark"?P.Z.darkAlgorithm:o==="compact"?P.Z.compactAlgorithm:P.Z.defaultAlgorithm})},nt=function(){var r=(0,l.OI)(),o=S()(r,3),n=o[2],h=(0,u.useState)({isMobile:!1,direction:"ltr",theme:["light"]}),Z=S()(h,2),c=Z[0],m=c.theme,$=c.isMobile,B=c.direction,H=Z[1],rt=(0,l.lr)(),V=S()(rt,2),f=V[0],W=V[1],b=(0,Q.Z)(),D=b.theme,N=b.ssr,v=(0,u.useCallback)(function(i){H(function(x){return a()(a()({},x),i)});var s=f.toString(),g=f;Object.entries(i).forEach(function(x){var U=S()(x,2),F=U[0],p=U[1];F==="direction"&&(p==="rtl"?g.set("direction","rtl"):g.delete("direction")),F==="theme"&&(g=(0,l.fW)(a()(a()({},g),{},{theme:p.filter(function(lt){return lt!=="light"})})),n(p.indexOf("dark")>-1?"dark":"light"))}),g.toString()!==s&&W(g)},[f,W,n]),y=(0,u.useCallback)(function(){v({isMobile:window.innerWidth<et})},[v]);(0,u.useEffect)(function(){var i=f.getAll("theme"),s=f.get("direction");return H({theme:i,direction:s==="rtl"?"rtl":"ltr"}),y(),n(i.indexOf("dark")>-1?"dark":"light"),window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}},[f,y,n]);var K=(0,u.useMemo)(function(){return{direction:B,isMobile:$,theme:m,updateSiteConfig:v}},[$,m,B,v]),ot=u.useState(function(){return N?(0,d.createCache)():[null]}),it=S()(ot,1),L=it[0];return(0,l.vj)(function(){var i=(0,d.extractStyle)(L,!0);return(0,e.tZ)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:i}})}),N?(t.g.styleCache=L,(0,e.tZ)(d.StyleProvider,{cache:L,linters:[d.logicalPropertiesLinter,d.legacyNotSelectorLinter,d.parentSelectorLinter]},(0,e.tZ)(G.Z.Provider,{value:K},(0,e.tZ)(E.ZP,{theme:a()(a()({},D),{},{algorithm:k(m)})},(0,e.tZ)(l.j3,null),(0,e.tZ)(R,{value:m,onChange:function(s){return v({theme:s})}}))))):(0,e.tZ)(G.Z.Provider,{value:K},(0,e.tZ)(E.ZP,{theme:a()(a()({},D),{},{algorithm:k(m)})},(0,e.tZ)(l.j3,null),(0,e.tZ)(R,{value:m,onChange:function(s){return v({theme:s})}})))},at=nt},3303:function(J,C,t){var M=t(62435),a=(0,M.createContext)({isMobile:!1,direction:"ltr",theme:["light"],updateSiteConfig:function(){}});C.Z=a}}]);