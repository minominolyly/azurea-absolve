(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1458:function(e,t,r){Promise.resolve().then(r.bind(r,2293)),Promise.resolve().then(r.bind(r,8718)),Promise.resolve().then(r.bind(r,8145)),Promise.resolve().then(r.bind(r,5218)),Promise.resolve().then(r.bind(r,902)),Promise.resolve().then(r.bind(r,4433)),Promise.resolve().then(r.bind(r,9896)),Promise.resolve().then(r.bind(r,4858))},2293:function(e,t,r){"use strict";var n=r(9018),s=r(7437);t.default=(0,n.Z)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info")},8718:function(e,t,r){"use strict";r.r(t),r.d(t,{alertClasses:function(){return s.Z},default:function(){return n.Z},getAlertUtilityClass:function(){return s.t}});var n=r(6230),s=r(7221)},8145:function(e,t,r){"use strict";r.r(t),r.d(t,{alertTitleClasses:function(){return m},default:function(){return v},getAlertTitleUtilityClass:function(){return f}});var n=r(2182),s=r(2945),o=r(2265),i=r(4839),a=r(6259),l=r(4166),c=r(8024),d=r(511),u=r(4535),h=r(7542);function f(e){return(0,h.ZP)("MuiAlertTitle",e)}var m=(0,u.Z)("MuiAlertTitle",["root"]),x=r(7437);let j=["className"],p=(0,l.U)("MuiAlertTitle"),Z=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},f,t)},g=(0,c.ZP)(d.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(e=>{let{theme:t}=e;return{fontWeight:t.typography.fontWeightMedium,marginTop:-2}});var v=o.forwardRef(function(e,t){let r=p({props:e,name:"MuiAlertTitle"}),{className:o}=r,a=(0,s.Z)(r,j),l=Z(r);return(0,x.jsx)(g,(0,n.Z)({gutterBottom:!0,component:"div",ownerState:r,ref:t,className:(0,i.Z)(l.root,o)},a))})},5218:function(e,t,r){"use strict";r.r(t),r.d(t,{boxClasses:function(){return s.Z},default:function(){return n.Z}});var n=r(7999),s=r(7126)},4433:function(e,t,r){"use strict";r.d(t,{default:function(){return c}});var n=r(7437),s=r(4701),o=r(7999),i=r(5635),a=r(2265),l=r(6648);function c(){let[e,t]=(0,a.useState)(0),r=["".concat(s.Z.BASE_URL,"/images/top-0.png"),"".concat(s.Z.BASE_URL,"/images/top-1.png"),"".concat(s.Z.BASE_URL,"/images/top-2.png")];return(0,a.useEffect)(()=>{let n=setInterval(()=>{e===r.length-1?t(0):t(e+1)},5e3);return()=>{clearInterval(n)}},[r.length,e]),(0,n.jsx)(o.Z,{sx:{position:"relative",height:"auto",width:"100%",aspectRatio:16/9},children:r.map((t,r)=>(0,n.jsx)(i.Z,{in:r===e,children:(0,n.jsx)(l.default,{src:t,alt:"top ".concat(r),height:720,width:1280,style:{position:"absolute",height:"auto",width:"100%"},loading:"lazy"})},r))})}},9896:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(7437),s=r(4053);function o(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{className:"twitter-timeline","data-theme":"dark","data-height":"600",href:"https://twitter.com/Azurea_sorauta?ref_src=twsrc%5Etfw",children:"Tweets by Azurea_sorauta"}),(0,n.jsx)(s.Z,{})]})}},4053:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7437),s=r(1169),o=r(1877),i=r(2265);function a(){let e=(0,s.usePathname)();return(0,i.useEffect)(()=>{"object"==typeof window.twttr&&window.twttr.widgets.load()},[e]),(0,n.jsx)(o.default,{src:"https://platform.twitter.com/widgets.js",strategy:"lazyOnload"})}},4701:function(e,t){"use strict";t.Z={BASE_URL:"https://minominolyly.github.io/azurea-absolve"}},4858:function(e,t,r){"use strict";r.d(t,{default:function(){return O}});var n=r(7437);r(845);var s=r(1412),o=r(4587),i=r(511);function a(){return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsx)(o.Z,{className:"footer-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.Z,{fontSize:"small"}),"minominolyly"]})})})}var l=r(4701),c={INDEX:"/",GALLERY:"/gallery/",QUIZ:"/quiz/",RULE:"/rule/",GUIDE:"/guide/",SURVEY:"/survey/"},d=r(6760),u=r(4330),h=r(8188),f=r(6492),m=r(922),x=r(2715),j=r(7999),p=r(1733),Z=r(9806),g=r(335),v=r(2748),y=r(1692),w=r(6917),S=r(7905),b=r(6648),E=r(7138),A=r(2265);function U(){let[e,t]=(0,A.useState)(!1);return(0,n.jsxs)("header",{className:"header",children:[(0,n.jsx)(j.Z,{sx:{flexGrow:1},children:(0,n.jsxs)(p.Z,{sx:{position:"fixed"},component:"nav",color:"secondary",children:[(0,n.jsxs)(Z.Z,{children:[(0,n.jsx)(j.Z,{component:E.default,href:c.INDEX,children:(0,n.jsx)(b.default,{src:"".concat(l.Z.BASE_URL,"/images/logo.png"),alt:"logo",height:256,width:144,style:{height:"2.5rem",width:"auto",cursor:"pointer"}})}),(0,n.jsx)(j.Z,{sx:{flexGrow:1}}),(0,n.jsx)(g.Z,{edge:"end",style:{color:"var(--color-gray-70)"},"aria-label":"menu",sx:{mr:2},onClick:()=>{t(!e)},children:(0,n.jsx)(d.Z,{})})]}),e?(0,n.jsxs)(v.Z,{children:[(0,n.jsxs)(y.Z,{component:E.default,href:c.RULE,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(u.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(S.Z,{children:"ルール"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.GUIDE,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(h.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(S.Z,{children:"ガイド"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.GALLERY,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(f.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(S.Z,{children:"ギャラリー"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.SURVEY,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(m.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(S.Z,{children:"アンケート"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.QUIZ,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(x.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(S.Z,{children:"クイズ"})]})]}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)(Z.Z,{})]})}var R=r(7449),_=r.n(R);let k=(0,r(7350).Z)({palette:{primary:{main:"#D9CE3D"},secondary:{main:"#59533F"},error:{main:"#BF27D9"},warning:{main:"#D9AC32"},info:{main:"#5271D9"},success:{main:"#95D948"},contrastThreshold:3,tonalOffset:.2}});var z=r(5410),C=r(124),N=function(e,t){try{let r=JSON.stringify(t);return window.localStorage.setItem(e,r),!0}catch(e){return console.error(e),!1}},P=function(e){try{let t=window.localStorage.getItem(e);if(!t)return;return JSON.parse(t)}catch(e){console.error(e);return}};let L="a6s01ve",I="azurea-absolve.passcode";var T=r(8020),D=r(6230),B=r(3983),M=r(6548);function F(){let{passcode:e,errorMessages:t,authorized:r,changePasscode:s,checkPasscode:o}=function(){let e=P(I),[t,r]=(0,A.useState)(e||""),[n,s]=(0,A.useState)(e===L),[o,i]=(0,A.useState)([]);return{passcode:t,authorized:n,errorMessages:o,changePasscode:e=>{o.length>0&&i([]),r(e)},checkPasscode:()=>t!==L?(i(["パスコードが違います"]),!1):(i([]),s(!0),N(I,t),!0)}}();return(0,n.jsx)(T.Z,{open:!r,className:"modal-passcode",sx:{backdropFilter:"blur(8px)"},children:(0,n.jsxs)(j.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"100%",maxWidth:"20rem",minWidth:"20rem",padding:"1rem"},children:[t.length>0&&(0,n.jsx)(j.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(D.Z,{severity:"error",children:(0,n.jsx)("ul",{children:t.map((e,t)=>(0,n.jsx)("li",{children:e},t))})})}),(0,n.jsx)(j.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(D.Z,{severity:"info",children:"パスコードを入力してください"})}),(0,n.jsx)(j.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(B.Z,{error:t.length>0,type:"password",label:"パスコード",variant:"standard",value:e,onChange:e=>s(e.currentTarget.value)})}),(0,n.jsx)(j.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(j.Z,{sx:{position:"absolute",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"auto"},children:(0,n.jsx)(M.Z,{color:"info",variant:"contained",onClick:()=>o(),children:"認証"})})})]})})}let G={lang:"ja",keywords:[],title:"",type:"article",noindex:!1};function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=e.description,r=e.image?e.image:"".concat(l.Z.BASE_URL,"/images/eyecatch.png");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(_(),{children:[(0,n.jsx)("meta",{name:"keywords",content:e.keywords?e.keywords.join(", "):""}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(l.Z.BASE_URL)}),(0,n.jsx)("meta",{property:"og:title",content:e.title}),(0,n.jsx)("meta",{property:"og:description",content:t}),(0,n.jsx)("meta",{property:"og:image",content:r})]}),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(z.Z,{theme:k,children:[(0,n.jsx)(C.ZP,{}),(0,n.jsx)(U,{}),(0,n.jsx)("main",{role:"main",className:"main",children:e.children}),(0,n.jsx)(a,{}),(0,n.jsx)(F,{})]})})]})}},845:function(){}},function(e){e.O(0,[177,559,877,971,23,744],function(){return e(e.s=1458)}),_N_E=e.O()}]);