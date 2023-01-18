"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32],{616:function(dt,F,i){i.r(F),i.d(F,{default:function(){return le}});var A=i(80624),I=i.n(A),K=i(40131),D=i.n(K),U=i(19573),ut=i(12791),N=i(12248),n=i(16216),ft=i(9833),mt=i.n(ft),vt=i(60042),w=i.n(vt),R=i(26775),z=i(10690),gt=i(6117),ht=i(5515),Y=i(41762);const pt=new z.E4("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Ct=new z.E4("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),xt=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:r}=t,o=`${r}-fade`,a=e?"&":"";return[(0,Y.R)(o,pt,Ct,t.motionDurationMid,e),{[`
        ${a}${o}-enter,
        ${a}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${a}${o}-leave`]:{animationTimingFunction:"linear"}}]};var J=i(72457);const yt=t=>{const{componentCls:e,floatButtonSize:r,motionDurationSlow:o,motionEaseInOutCirc:a}=t,l=`${e}-group`,u=new z.E4("antFloatButtonMoveDownIn",{"0%":{transform:`translate3d(0, ${r}px, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),f=new z.E4("antFloatButtonMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${r}px, 0)`,transformOrigin:"0 0",opacity:0}});return[{[`${l}-wrap`]:Object.assign({},(0,Y.R)(`${l}-wrap`,u,f,o,!0))},{[`${l}-wrap`]:{[`
          &${l}-wrap-enter,
          &${l}-wrap-appear
        `]:{opacity:0,animationTimingFunction:a},[`&${l}-wrap-leave`]:{animationTimingFunction:a}}}]},St=t=>{const{componentCls:e,floatButtonSize:r,margin:o,borderRadiusLG:a}=t,l=`${e}-group`;return{[l]:Object.assign(Object.assign({},(0,J.Wf)(t)),{zIndex:99,display:"block",border:"none",position:"fixed",width:r,height:"auto",boxShadow:"none",minHeight:r,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,borderRadius:a,[`${l}-wrap`]:{zIndex:-1,display:"block",position:"relative",marginBottom:o},"&&-rtl":{direction:"rtl"},[e]:{position:"static"}}),[`${l}-circle`]:{[`${e}-circle:not(:last-child)`]:{marginBottom:t.margin,[`${e}-body`]:{width:r,height:r}}},[`${l}-square`]:{[`${e}-square`]:{borderRadius:0,padding:0,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`}},[`${l}-wrap`]:{display:"block",borderRadius:a,boxShadow:t.boxShadowSecondary,overflow:"hidden",[`${e}-square`]:{boxShadow:"none",marginTop:0,borderRadius:0,padding:t.paddingXXS,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-body`]:{width:r-t.paddingXXS*2,height:r-t.paddingXXS*2}}}},[`${l}-circle-shadow`]:{boxShadow:"none"},[`${l}-square-shadow`]:{boxShadow:t.boxShadowSecondary,[`${e}-square`]:{boxShadow:"none",padding:t.paddingXXS,[`${e}-body`]:{width:r-t.paddingXXS*2,height:r-t.paddingXXS*2}}}}},bt=t=>{const{componentCls:e,floatButtonIconSize:r,floatButtonSize:o,borderRadiusLG:a}=t;return{[e]:Object.assign(Object.assign({},(0,J.Wf)(t)),{border:"none",position:"fixed",cursor:"pointer",overflow:"hidden",zIndex:99,display:"block",justifyContent:"center",alignItems:"center",width:o,height:o,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,boxShadow:t.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${e}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${t.motionDurationMid}`,[`${e}-content`]:{overflow:"hidden",textAlign:"center",minHeight:o,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"2px 4px",[`${e}-icon`]:{textAlign:"center",margin:"auto",width:r,fontSize:r,lineHeight:1}}}}),[`${e}-circle`]:{height:o,borderRadius:"50%",[`${e}-body`]:{borderRadius:"50%"}},[`${e}-square`]:{height:"auto",minHeight:o,borderRadius:a,[`${e}-body`]:{height:"auto",borderRadius:t.borderRadiusSM}},[`${e}-default`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,[`${e}-body`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorFillContent},[`${e}-content`]:{[`${e}-icon`]:{color:t.colorText},[`${e}-description`]:{display:"flex",alignItems:"center",lineHeight:`${t.fontSizeLG}px`,color:t.colorText,fontSize:t.fontSizeSM}}}},[`${e}-primary`]:{backgroundColor:t.colorPrimary,[`${e}-body`]:{backgroundColor:t.colorPrimary,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorPrimaryHover},[`${e}-content`]:{[`${e}-icon`]:{color:t.colorTextLightSolid},[`${e}-description`]:{display:"flex",alignItems:"center",lineHeight:`${t.fontSizeLG}px`,color:t.colorTextLightSolid,fontSize:t.fontSizeSM}}}}}};var H=(0,gt.Z)("FloatButton",t=>{const{colorTextLightSolid:e,colorBgElevated:r,controlHeightLG:o,marginXXL:a,marginLG:l,fontSize:u,fontSizeIcon:f,controlItemBgHover:v}=t,s=(0,ht.TS)(t,{floatButtonBackgroundColor:r,floatButtonColor:e,floatButtonHoverBackgroundColor:v,floatButtonFontSize:u,floatButtonIconSize:f*1.5,floatButtonSize:o,floatButtonInsetBlockEnd:a,floatButtonInsetInlineEnd:l});return[St(s),bt(s),xt(t),yt(s)]}),Et=i(42202),$=i(50189),$t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},Bt=$t,Q=i(14659),k=function(e,r){return n.createElement(Q.Z,(0,$.Z)((0,$.Z)({},e),{},{ref:r,icon:Bt}))};k.displayName="FileTextOutlined";var q=n.forwardRef(k);const Ot=t=>{const{icon:e,description:r,prefixCls:o,className:a}=t,l=n.createElement("div",{className:`${o}-icon`},n.createElement(q,null));return n.createElement("div",{onClick:t.onClick,onFocus:t.onFocus,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,className:w()(a,`${o}-content`)},e||r?n.createElement(n.Fragment,null,e&&n.createElement("div",{className:`${o}-icon`},e),r&&n.createElement("div",{className:`${o}-description`},r)):l)};var wt=(0,n.memo)(Ot);const _=n.createContext(void 0),{Provider:Tt}=_;var tt=_,Pt=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(r[o[a]]=t[o[a]]);return r};const j="float-btn",It=(t,e)=>{const{prefixCls:r,className:o,type:a="default",shape:l="circle",icon:u,description:f,tooltip:v}=t,s=Pt(t,["prefixCls","className","type","shape","icon","description","tooltip"]),{getPrefixCls:x,direction:c}=(0,n.useContext)(R.E_),y=(0,n.useContext)(tt),d=x(j,r),[B,g]=H(d),p=y||l,m=w()(g,d,o,`${d}-${a}`,`${d}-${p}`,{[`${d}-rtl`]:c==="rtl"}),S=(0,n.useMemo)(()=>({prefixCls:d,description:f,icon:u,type:a}),[d,f,u,a]),E=n.createElement(Et.Z,{title:v,placement:"left"},n.createElement("div",{className:`${d}-body`},n.createElement(wt,Object.assign({},S))));return B(t.href?n.createElement("a",Object.assign({ref:e},s,{className:m}),E):n.createElement("button",Object.assign({ref:e},s,{className:m,type:"button"}),E))};var P=n.forwardRef(It),Mt=i(58693),et=i(64419),Zt=i(24391);const Ft=t=>{const{prefixCls:e,className:r,style:o,shape:a="circle",type:l="default",icon:u=n.createElement(q,null),closeIcon:f=n.createElement(Mt.Z,null),description:v,trigger:s,children:x,onOpenChange:c}=t,{direction:y,getPrefixCls:d}=(0,n.useContext)(R.E_),B=d(j,e),[g,p]=H(B),m=`${B}-group`,S=w()(m,p,r,{[`${m}-rtl`]:y==="rtl",[`${m}-${a}`]:a,[`${m}-${a}-shadow`]:!s}),E=w()(p,`${m}-wrap`),[O,T]=(0,Zt.Z)(!1,{value:t.open}),M=(0,n.useRef)(null),G=(0,n.useRef)(null),V=(0,n.useMemo)(()=>s==="hover"?{onMouseEnter(){T(!0),c==null||c(!0)},onMouseLeave(){T(!1),c==null||c(!1)}}:{},[s]),X=()=>{T(h=>(c==null||c(!h),!h))},b=(0,n.useCallback)(h=>{var Z,W;if(!((Z=M.current)===null||Z===void 0)&&Z.contains(h.target)){!((W=G.current)===null||W===void 0)&&W.contains(h.target)&&X();return}T(!1),c==null||c(!1)},[s]);return(0,n.useEffect)(()=>{if(s==="click")return document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}},[s]),g(n.createElement(Tt,{value:a},n.createElement("div",Object.assign({ref:M,className:S,style:o},V),s&&["click","hover"].includes(s)?n.createElement(n.Fragment,null,n.createElement(et.Z,{visible:O,motionName:`${m}-wrap`},h=>{let{className:Z}=h;return n.createElement("div",{className:w()(Z,E)},x)}),n.createElement(P,{ref:G,type:l,shape:a,icon:O?f:u,description:v})):x)))};var nt=(0,n.memo)(Ft),Nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},Rt=Nt,ot=function(e,r){return n.createElement(Q.Z,(0,$.Z)((0,$.Z)({},e),{},{ref:r,icon:Rt}))};ot.displayName="VerticalAlignTopOutlined";var zt=n.forwardRef(ot),jt=i(98212),Lt=i(29606),At=i(24332),Dt=i(10173),Ht=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(r[o[a]]=t[o[a]]);return r};const Gt=t=>{const{prefixCls:e,className:r="",type:o="default",shape:a="circle",visibilityHeight:l=400,icon:u=n.createElement(zt,null),target:f,onClick:v,duration:s=450}=t,x=Ht(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[c,y]=(0,n.useState)(l===0),d=(0,n.useRef)(null),B=(0,n.useRef)(null),g=()=>d.current&&d.current.ownerDocument?d.current.ownerDocument:window,p=(0,Dt.Z)(b=>{const h=(0,Lt.Z)(b.target,!0);y(h>=l)}),m=()=>{const h=(f||g)();B.current=(0,jt.Z)(h,"scroll",p),p({target:h})};(0,n.useEffect)(()=>(m(),()=>{var b;p.cancel(),(b=B.current)===null||b===void 0||b.remove()}),[f]);const S=b=>{(0,At.Z)(0,{getContainer:f||g,duration:s}),v==null||v(b)},{getPrefixCls:E}=(0,n.useContext)(R.E_),O=E(j,e),T=E(),[M]=H(O),V=(0,n.useContext)(tt)||a,X=Object.assign({prefixCls:O,icon:u,type:o,shape:V},x);return M(n.createElement(et.Z,{visible:c,motionName:`${T}-fade`},b=>{let{className:h}=b;return n.createElement(P,Object.assign({ref:d},X,{onClick:S,className:w()(r,h)}))}))};var at=(0,n.memo)(Gt),rt=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(r[o[a]]=t[o[a]]);return r};const it=t=>{var{backTop:e}=t,r=rt(t,["backTop"]);return e?n.createElement(at,Object.assign({},r,{visibilityHeight:0})):n.createElement(P,Object.assign({},r))};function Vt(t){var{className:e,items:r}=t,o=rt(t,["className","items"]);const{prefixCls:a}=o,{getPrefixCls:l}=n.useContext(R.E_),f=`${l(j,a)}-pure`;return r?n.createElement(nt,Object.assign({className:w()(e,f)},o),r.map((v,s)=>n.createElement(it,Object.assign({key:s},v)))):n.createElement(it,Object.assign({className:w()(e,f)},o))}var Xt=n.memo(Vt);P.BackTop=at,P.Group=nt,P._InternalPanelDoNotUseOrYouWillBeFired=Xt;var lt=P;function Wt(t){return n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["nanqu-token-panel-icon",t.className].filter(Boolean).join(" ")}),n.createElement("g",{id:"Dark-\u9875\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"Dark-\u9ED8\u8BA4",transform:"translate(-9.000000, -49.500000)",fill:"currentColor",fillRule:"nonzero"},n.createElement("g",{id:"Dark-\u7F16\u7EC4-17",transform:"translate(0.000000, 42.500000)"},n.createElement("g",{id:"Dark-moon",transform:"translate(9.268811, 7.500000)"},n.createElement("rect",{id:"Dark-\u77E9\u5F62",opacity:0,x:0,y:0,width:16,height:16}),n.createElement("path",{d:"M8,1.33333333 C8.14933333,1.33333333 8.29688889,1.33844444 8.44266667,1.34866666 C8.14755556,1.98422221 8,2.64577777 8,3.33333333 C8,3.96533333 8.12333333,4.56955555 8.37,5.146 C8.61666667,5.72244445 8.94822222,6.21888889 9.36466667,6.63533333 C9.78111112,7.05177777 10.2775556,7.38333332 10.854,7.63 C11.4304444,7.87666668 12.0346667,8.00000001 12.6666667,8 C13.3542222,8 14.0157778,7.85244444 14.6513333,7.55733333 C14.6615556,7.70311111 14.6666667,7.85066667 14.6666667,8 C14.6666667,8.604 14.5868889,9.19422222 14.4273333,9.77066667 C14.2677778,10.3471111 14.0446667,10.8793333 13.758,11.3673333 C13.4713333,11.8553333 13.1233333,12.3042222 12.714,12.714 C12.3046667,13.1237778 11.8557778,13.4717778 11.3673333,13.758 C10.8788889,14.0442222 10.3466667,14.2673333 9.77066667,14.4273333 C9.19466667,14.5873333 8.60444445,14.6671111 8,14.6666685 C7.39555555,14.6662222 6.80533333,14.5864444 6.22933333,14.4273333 C5.65333333,14.2682222 5.1211111,14.0451111 4.63266666,13.758 C4.14422221,13.4708889 3.69533332,13.1228889 3.28599998,12.714 C2.87666665,12.3051111 2.52866665,11.8562222 2.24199998,11.3673333 C1.95533332,10.8784444 1.73222221,10.3462222 1.57266666,9.77066667 C1.4131111,9.19511112 1.33333333,8.6048889 1.33333333,8 C1.33333333,7.3951111 1.4131111,6.80488888 1.57266666,6.22933333 C1.73222221,5.65377778 1.95533332,5.12155555 2.24199998,4.63266666 C2.52866665,4.14377776 2.87666665,3.69488887 3.28599998,3.28599998 C3.69533332,2.8771111 4.14422221,2.5291111 4.63266666,2.24199998 C5.1211111,1.95488887 5.65333333,1.73177776 6.22933333,1.57266666 C6.80533333,1.41355555 7.39555555,1.33377778 8,1.33333333 Z M6.68733333,2.828 C6.11444444,2.97377778 5.58066667,3.20977778 5.086,3.536 C4.59133333,3.86222222 4.166,4.24933333 3.81,4.69733333 C3.454,5.14533333 3.17444444,5.65488889 2.97133333,6.226 C2.76822221,6.79711111 2.66666666,7.38822222 2.66666666,7.99933333 C2.66666666,8.72155555 2.80733332,9.41155555 3.08866666,10.0693333 C3.36999999,10.7271111 3.74933332,11.2948889 4.22666666,11.7726667 C4.70399999,12.2504444 5.27177777,12.6297778 5.92999998,12.9106667 C6.5882222,13.1915556 7.2782222,13.3322222 7.99999998,13.3326667 C8.6111111,13.3326667 9.20222221,13.2311111 9.77333331,13.028 C10.3444444,12.8248889 10.854,12.5453333 11.302,12.1893333 C11.75,11.8333333 12.1371111,11.408 12.4633333,10.9133333 C12.7895555,10.4186666 13.0255555,9.88488887 13.1713333,9.31199998 C13.022,9.32577777 12.8535555,9.33266666 12.666,9.33266666 C11.8535555,9.33266666 11.0775555,9.17377777 10.338,8.85599998 C9.59844443,8.5382222 8.96044443,8.11111109 8.42399998,7.57466666 C7.88755554,7.03822222 7.46044443,6.40022222 7.14266666,5.66066666 C6.82488889,4.92111109 6.66599999,4.14511109 6.66599998,3.33266666 C6.66599998,3.1451111 6.67288888,2.97666666 6.68666666,2.82733333 L6.68733333,2.828 Z",id:"Dark-\u5F62\u72B6"}))))))}var Kt=Wt,Ut=i(73119),st=i.n(Ut),Yt=i(64649),Jt=i(96535),Qt=i(37460),L=i(7588),kt=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],ct=n.forwardRef(function(t,e){var r=t.className,o=t.component,a=t.viewBox,l=t.spin,u=t.rotate,f=t.tabIndex,v=t.onClick,s=t.children,x=(0,Jt.Z)(t,kt);(0,L.Kp)(Boolean(o||s),"Should have `component` prop or `children`."),(0,L.C3)();var c=n.useContext(Qt.Z),y=c.prefixCls,d=y===void 0?"anticon":y,B=c.rootClassName,g=w()(B,d,r),p=w()((0,Yt.Z)({},"".concat(d,"-spin"),!!l)),m=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,S=(0,$.Z)((0,$.Z)({},L.vD),{},{className:p,style:m,viewBox:a});a||delete S.viewBox;var E=function(){return o?n.createElement(o,(0,$.Z)({},S),s):s?((0,L.Kp)(Boolean(a)||n.Children.count(s)===1&&n.isValidElement(s)&&n.Children.only(s).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),n.createElement("svg",(0,$.Z)((0,$.Z)({},S),{},{viewBox:a}),s)):null},O=f;return O===void 0&&v&&(O=-1),n.createElement("span",(0,$.Z)((0,$.Z)({role:"img"},x),{},{ref:e,tabIndex:O,onClick:v,className:g}),E())});ct.displayName="AntdIcon";var qt=ct,C=i(22021),_t=function(e){var r=n.useCallback(function(){return(0,C.tZ)("svg",st()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},e),(0,C.tZ)("g",{fillRule:"evenodd"},(0,C.tZ)("g",{fillRule:"nonzero"},(0,C.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[e]);return(0,C.tZ)(qt,st()({component:r},e))},te=_t,ee=function(e){var r=e.value,o=r===void 0?["light"]:r,a=e.onChange;return(0,C.tZ)(lt.Group,{trigger:"click",icon:(0,C.tZ)(te,null)},(0,C.tZ)(lt,{icon:(0,C.tZ)(Kt,null),type:o.includes("dark")?"primary":"default",onClick:function(){o.includes("dark")?a(o.filter(function(u){return u!=="dark"})):a([].concat(mt()(o),["dark"]))},tooltip:(0,C.tZ)(N._H,{id:"app.theme.switch.dark"})}))},ne=ee,oe=i(94276),ae=768,re=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(function(r){return r==="dark"?U.Z.darkAlgorithm:U.Z.defaultAlgorithm})},ie=function(){var e=(0,N.pC)(),r=(0,n.useState)({isMobile:!1,theme:["light"]}),o=D()(r,2),a=o[0],l=a.theme,u=a.isMobile,f=o[1],v=(0,N.lr)(),s=D()(v,2),x=s[0],c=s[1],y=(0,n.useCallback)(function(g){f(function(S){return I()(I()({},S),g)});var p=x.toString(),m=x;Object.entries(g).forEach(function(S){var E=D()(S,2),O=E[0],T=E[1];O==="theme"&&(m=(0,N.fW)(I()(I()({},m),{},{theme:T.filter(function(M){return M!=="light"})})))}),m.toString()!==p&&c(m)},[x,c]),d=function(){y({isMobile:window.innerWidth<ae})};(0,n.useEffect)(function(){var g=x.getAll("theme");return(0,n.startTransition)(function(){f({theme:g}),d()}),window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}},[]);var B=(0,n.useMemo)(function(){return{isMobile:u,theme:l,updateSiteConfig:y}},[u,l,y]);return(0,C.tZ)(oe.Z.Provider,{value:B},(0,C.tZ)(ut.ZP,{theme:{algorithm:re(l)}},e,(0,C.tZ)(ne,{value:l,onChange:function(p){return y({theme:p})}})))},le=ie},94276:function(dt,F,i){var A=i(16216),I=(0,A.createContext)({isMobile:!1,theme:["light"],updateSiteConfig:function(){}});F.Z=I}}]);
