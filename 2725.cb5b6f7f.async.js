"use strict";(self.webpackChunkdumi_theme_antd=self.webpackChunkdumi_theme_antd||[]).push([[2725,8941],{12725:function(K,S,t){t.d(S,{Z:function(){return oe}});var f=t(5574),m=t.n(f),e=t(19225),c=t(11422),D=t(42075),E=t(10932),Z=t(98829),A=t(62435),b=t(53069),k=t(88759),O=t(80333),p=t(3303),d=t(59753),l=t(67333),y=t.n(l),x=t(91978);function g(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var C={name:"1khcbj8",styles:"display:flex;flex-wrap:wrap;max-width:1208px;margin-inline:auto;box-sizing:border-box;padding-inline:2.5%;column-gap:2.5%;align-items:stretch;text-align:start"},L={name:"pe4q6k",styles:".slick-dots.slick-dots-bottom{bottom:-22px;li{width:6px;height:6px;background:#e1eeff;border-radius:50%;button{height:6px;background:#e1eeff;border-radius:50%;}&.slick-active{background:#4b9cff;button{background:#4b9cff;}}}}"},s=function(){var i=(0,O.Z)(),n=i.token;return{carousel:L,container:C,itemBase:(0,e.iv)("display:flex;flex-direction:column;align-items:stretch;text-decoration:none;background:",n.colorBgContainer,";border:",n.lineWidth,"px solid ",n.colorBorderSecondary,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationSlow,";padding-block:",n.padding,"px;padding-inline:",n.padding,"px;margin-block-end:",n.margin,"px;box-sizing:border-box;",""),cardItem:(0,e.iv)("width:30%;&:hover{box-shadow:",n.boxShadowCard,";}",""),sliderItem:(0,e.iv)("margin:0 ",n.margin,"px;text-align:start;","")}},v=function(i){var n=i.title,r=i.details,a=i.itemCss,h=s();return(0,e.tZ)("div",{css:[h.itemBase,a,"",""]},(0,e.tZ)(c.Z.Title,{level:5},n),(0,e.tZ)(c.Z.Paragraph,{type:"secondary",style:{flex:"auto"}},r))},B=function(){var i=s(),n=(0,A.useContext)(p.Z),r=n.isMobile,a=(0,k.Z)("features");return(0,e.tZ)("div",null,r?(0,e.tZ)(x.Z,{css:i.carousel},Array.isArray(a)&&(a==null?void 0:a.map(function(h,P){return(0,e.tZ)(v,y()({key:P},h,{itemCss:i.sliderItem}))}))):(0,e.tZ)("div",{css:i.container},Array.isArray(a)&&(a==null?void 0:a.map(function(h,P){return(0,e.tZ)(v,y()({key:P},h,{itemCss:i.cardItem}))}))))},I=B,F=t(97857),_=t.n(F);function M(o){var i=o.children,n=o.style,r=o.disabled,a=r?{}:{position:"relative",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(25px)",zIndex:1};return(0,e.tZ)("div",{className:"site-mask",style:_()(_()({position:"relative"},n),a)},i)}function Q(o){var i=o.id,n=o.title,r=o.titleColor,a=o.description,h=o.children,P=o.decoration,H=o.background,G=o.collapse,V=useSiteToken(),u=V.token,w=useContext(SiteContext),J=w.isMobile,$=G?{}:{maxWidth:1208,marginInline:"auto",boxSizing:"border-box",paddingInline:J?u.margin:u.marginXXL},N=___EmotionJSX(React.Fragment,null,___EmotionJSX("div",{style:{textAlign:"center"}},___EmotionJSX(Typography.Title,{id:i,level:1,style:{fontWeight:900,color:r,fontFamily:"AliPuHui, ".concat(u.fontFamily),fontSize:J?u.fontSizeHeading2:u.fontSizeHeading1}},n),___EmotionJSX(Typography.Paragraph,{style:{marginBottom:J?u.marginXXL:u.marginFarXS,color:r}},a)),___EmotionJSX("div",{style:$},h?___EmotionJSX("div",null,h):___EmotionJSX("div",{style:{borderRadius:u.borderRadiusLG,minHeight:300,background:"#e9e9e9"}})));return ___EmotionJSX("div",{style:{position:"relative",background:H,transition:"all ".concat(u.motionDurationSlow)}},___EmotionJSX("div",{style:{position:"absolute",inset:0}},P),___EmotionJSX(M,{disabled:!!H,style:{paddingBlock:u.marginFarSM}},N))}function Y(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var T={showBanner:!0,bannerMobileImgUrl:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JmlaR5oQn3MAAAAAAAAAAAAADrJ8AQ/original",bannerImgUrl:""},W={name:"eivff4",styles:"display:none"},U={name:"4zleql",styles:"display:block"},X={name:"od9oaz",styles:"position:relative;text-align:center;flex:1"},z=function(){var i=(0,O.Z)(),n=i.token,r=(0,A.useContext)(p.Z),a=r.isMobile;return{mainContent:X,bannerDisplay:U,bannerDisplayNone:W,titleBase:(0,e.iv)("h1&{font-family:AliPuHui,",n.fontFamily,";}",""),title:a?(0,e.iv)("h1&{margin-bottom:",n.margin,"px;font-weight:normal;font-size:",n.fontSizeHeading1+2,"px;line-height:",n.lineHeightHeading2,";}",""):(0,e.iv)("h1&{margin-bottom:",n.marginMD,"px;font-weight:900;font-size:68px;}","")}},R=function(){var i=z(),n=(0,O.Z)(),r=n.token,a=(0,A.useContext)(p.Z),h=a.isMobile,P=a.theme,H=(0,b.Z)(),G=H.bannerConfig,V=H.name,u=(0,k.Z)("actions"),w=(0,k.Z)("title"),J=(0,k.Z)("description"),$=(0,Z.useSearchParams)(),N=m()($,1),re=N[0],q=Object.assign(T,G),te=q.showBanner,ne=q.bannerImgUrl,se=q.bannerMobileImgUrl,de=ne?(0,e.tZ)("img",{src:ne,style:{width:"100%",maxWidth:"100%"},alt:""}):(0,e.tZ)(A.Fragment,null,(0,e.tZ)("div",{style:{backgroundImage:"url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*6d50SboraPIAAAAAAAAAAAAAARQnAQ)",flex:"auto",backgroundRepeat:"repeat-x",backgroundPosition:"100% 0",backgroundSize:"auto 100%"}}),(0,e.tZ)("video",{style:{height:"100%",objectFit:"contain"},autoPlay:!0,muted:!0,loop:!0},(0,e.tZ)("source",{src:"https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ",type:"video/webm"}),(0,e.tZ)("source",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/file/A*XYYNQJ3NbmMAAAAAAAAAAAAAARQnAQ",type:"video/mp4"})),(0,e.tZ)("div",{style:{backgroundImage:"url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*8ILtRrQlVDMAAAAAAAAAAAAAARQnAQ)",flex:"auto",backgroundRepeat:"repeat-x",backgroundPosition:"0 0",backgroundSize:"auto 100%",marginLeft:-1}}));return(0,e.tZ)("div",{css:i.mainContent},h?(0,e.tZ)("img",{src:se,style:{width:"100%",maxWidth:"100%",display:"".concat(te?"inline-block":"none"," "),opacity:"".concat(P.indexOf("dark")>-1?"0.8":1)},alt:""}):(0,e.tZ)("div",{style:{height:G?"auto":320,background:"#77C6FF",display:"".concat(te?"flex":"none"," "),flexWrap:"nowrap",justifyContent:"center",opacity:"".concat(P.indexOf("dark")>-1?"0.8":1)}},de),(0,e.tZ)("div",{style:{position:"relative"}},(0,e.tZ)(M,{style:{textAlign:"center",paddingTop:r.marginFar-16,paddingBottom:r.marginFarSM}},(0,e.tZ)("img",{style:{position:"absolute",left:h?-120:0,top:0,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg",alt:"bg"}),(0,e.tZ)("img",{style:{position:"absolute",right:h?0:120,top:0,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg",alt:"bg"}),(0,e.tZ)(c.Z.Title,{level:1,css:[i.titleBase,i.title,"",""]},w||V),(0,e.tZ)(c.Z.Paragraph,{style:{fontSize:r.fontSizeHeading5,lineHeight:r.lineHeightHeading5,marginBottom:r.marginMD*2}},(0,e.tZ)("div",null,J)),(0,e.tZ)(D.Z,{size:"middle",style:{marginBottom:r.marginFar}},u==null?void 0:u.map(function(ee){var j=ee.link,ie=ee.text,ae=ee.type;return(0,d.YW)(j)?(0,e.tZ)(E.ZP,{size:"large",type:ae,href:j,target:"_blank",key:j},ie):(0,e.tZ)(Z.Link,{to:"".concat(j).concat(j.search(/\?/)===-1?"?":"&").concat(re.toString()),key:j},(0,e.tZ)(E.ZP,{size:"large",type:ae},ie))})),(0,e.tZ)(I,null))))},oe=R},88759:function(K,S,t){t.d(S,{Z:function(){return m}});var f=t(98829);function m(e){var c,D=(0,f.useSiteData)(),E=D.themeConfig,Z=(0,f.useLocale)(),A=E,b=A[e];return(c=b==null?void 0:b[Z.id])!==null&&c!==void 0?c:b}},80333:function(K,S,t){var f=t(97857),m=t.n(f),e=t(98032),c=t(9361),D=t(31929),E=t(62435),Z=t(3303),A=c.Z.useToken,b=64,k=`
0 1px 2px -2px `.concat(new e.C("rgba(0, 0, 0, 0.16)").toRgbString(),`,
0 3px 6px 0 `).concat(new e.C("rgba(0, 0, 0, 0.12)").toRgbString(),`,
0 5px 12px 4px `).concat(new e.C("rgba(0, 0, 0, 0.09)").toRgbString(),`
`),O=function(){var d=A(),l=(0,E.useContext)(D.E_),y=l.getPrefixCls,x=l.iconPrefixCls,g=(0,E.useContext)(Z.Z),C=g.theme,L=y(),s=d.token,v=s.colorFillTertiary;return m()(m()({},d),{},{token:m()(m()({},s),{},{headerHeight:b,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:v,antCls:".".concat(L),iconCls:".".concat(x),marginFarXS:s.marginXXL/6*7,marginFarSM:s.marginXXL/3*5,marginFar:s.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:b+s.margin,boxShadowCard:k,siteTheme:C}),siteCls:"dumi-antd"})};S.Z=O},3303:function(K,S,t){var f=t(62435),m=(0,f.createContext)({isMobile:!1,direction:"ltr",theme:["light"],updateSiteConfig:function(){}});S.Z=m},59753:function(K,S,t){t.d(S,{A0:function(){return b},O1:function(){return O},YW:function(){return k},cY:function(){return A}});var f=t(97857),m=t.n(f),e=t(52677),c=t.n(e),D=t(5574),E=t.n(D),Z=t(98829);function A(p){var d=p.pathname,l=d===void 0?Z.history.location.pathname:d,y=p.current,x=p.target,g="base"in y?l.replace(y.base.replace(/\/$/,""),""):l.replace(new RegExp("".concat(y.suffix,"$")),"");return"base"in x?"".concat(x.base).concat(g).replace(/^\/\//,"/"):"".concat(g).concat(x.suffix)}var b=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return d.replace(/<\w+>.*<\/\w+>/g,"")},k=function(d){return/^(\w+:)\/\/|^(mailto|tel):/.test(d!=null?d:"")},O=function(d){var l={};return Object.entries(d).forEach(function(y){var x=E()(y,2),g=x[0],C=x[1],L=Object.keys(l);if(g.split("/").length===3){var s,v,B="/".concat(g.split("/")[1]),I=(s=C[0])===null||s===void 0||(s=s.children)===null||s===void 0?void 0:s.find(function(X){var z,R=(z=X.frontmatter)===null||z===void 0?void 0:z.nav;return c()(R)==="object"&&c()(R==null?void 0:R.second)==="object"});if(!I){var F;I=(F=C[0])===null||F===void 0?void 0:F.children[0]}var _=(v=I)===null||v===void 0||(v=v.frontmatter)===null||v===void 0?void 0:v.nav,M={order:0,title:void 0};if(typeof _!="string"){var Q,Y,T,W;M.order=(Q=_==null||(Y=_.second)===null||Y===void 0?void 0:Y.order)!==null&&Q!==void 0?Q:0,M.title=(T=_==null||(W=_.second)===null||W===void 0?void 0:W.title)!==null&&T!==void 0?T:_==null?void 0:_.second}if(L.includes(B)){var U;l[B].push({title:M.title,order:M.order,children:(U=C[0])===null||U===void 0?void 0:U.children})}else l[B]=C.map(function(X){return m()(m()({},X),{},{title:M.title,order:M.order})})}else L.includes(g)?l[g]=l[g].concat(C):l[g]=C}),l}}}]);
