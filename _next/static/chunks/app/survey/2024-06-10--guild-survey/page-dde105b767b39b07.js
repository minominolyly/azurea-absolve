(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{6838:function(e,r,n){Promise.resolve().then(n.bind(n,2293)),Promise.resolve().then(n.bind(n,8718)),Promise.resolve().then(n.bind(n,5218)),Promise.resolve().then(n.bind(n,902)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.bind(n,4858))},2293:function(e,r,n){"use strict";var t=n(9018),s=n(7437);r.default=(0,t.Z)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info")},8718:function(e,r,n){"use strict";n.r(r),n.d(r,{alertClasses:function(){return s.Z},default:function(){return t.Z},getAlertUtilityClass:function(){return s.t}});var t=n(6230),s=n(7221)},5218:function(e,r,n){"use strict";n.r(r),n.d(r,{boxClasses:function(){return s.Z},default:function(){return t.Z}});var t=n(7999),s=n(7126)},4701:function(e,r){"use strict";r.Z={BASE_URL:"https://minominolyly.github.io/azurea-absolve"}},4858:function(e,r,n){"use strict";n.d(r,{default:function(){return V}});var t=n(7437);n(845);var s=n(1412),o=n(4587),i=n(511);function l(){return(0,t.jsx)("footer",{className:"footer",children:(0,t.jsx)(o.Z,{className:"footer-container",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{fontSize:"small"}),"minominolyly"]})})})}var a=n(4701),c={INDEX:"/",GALLERY:"/gallery/",QUIZ:"/quiz/",RULE:"/rule/",GUIDE:"/guide/",SURVEY:"/survey/"},d=n(6760),h=n(4330),u=n(8188),x=n(6492),m=n(922),j=n(2715),f=n(7999),Z=n(1733),p=n(9806),g=n(335),y=n(2748),v=n(1692),S=n(6917),b=n(7905),w=n(6648),E=n(7138),k=n(2265);function C(){let[e,r]=(0,k.useState)(!1);return(0,t.jsxs)("header",{className:"header",children:[(0,t.jsx)(f.Z,{sx:{flexGrow:1},children:(0,t.jsxs)(Z.Z,{sx:{position:"fixed"},component:"nav",color:"secondary",children:[(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(f.Z,{component:E.default,href:c.INDEX,children:(0,t.jsx)(w.default,{src:"".concat(a.Z.BASE_URL,"/images/logo.png"),alt:"logo",height:256,width:144,style:{height:"2.5rem",width:"auto",cursor:"pointer"}})}),(0,t.jsx)(f.Z,{sx:{flexGrow:1}}),(0,t.jsx)(g.Z,{edge:"end",style:{color:"var(--color-gray-70)"},"aria-label":"menu",sx:{mr:2},onClick:()=>{r(!e)},children:(0,t.jsx)(d.Z,{})})]}),e?(0,t.jsxs)(y.Z,{children:[(0,t.jsxs)(v.Z,{component:E.default,href:c.RULE,children:[(0,t.jsx)(S.Z,{children:(0,t.jsx)(h.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(b.Z,{children:"ルール"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.GUIDE,children:[(0,t.jsx)(S.Z,{children:(0,t.jsx)(u.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(b.Z,{children:"ガイド"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.GALLERY,children:[(0,t.jsx)(S.Z,{children:(0,t.jsx)(x.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(b.Z,{children:"ギャラリー"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.SURVEY,children:[(0,t.jsx)(S.Z,{children:(0,t.jsx)(m.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(b.Z,{children:"アンケート"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.QUIZ,children:[(0,t.jsx)(S.Z,{children:(0,t.jsx)(j.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(b.Z,{children:"クイズ"})]})]}):(0,t.jsx)(t.Fragment,{})]})}),(0,t.jsx)(p.Z,{})]})}var U=n(7449),N=n.n(U);let z=(0,n(7350).Z)({palette:{primary:{main:"#D9CE3D"},secondary:{main:"#59533F"},error:{main:"#BF27D9"},warning:{main:"#D9AC32"},info:{main:"#5271D9"},success:{main:"#95D948"},contrastThreshold:3,tonalOffset:.2}});var D=n(5410),L=n(124),R=function(e,r){try{let n=JSON.stringify(r);return window.localStorage.setItem(e,n),!0}catch(e){return console.error(e),!1}},_=function(e){try{let r=window.localStorage.getItem(e);if(!r)return;return JSON.parse(r)}catch(e){console.error(e);return}};let I="a6s01ve",P="azurea-absolve.passcode";var A=n(8020),F=n(6230),G=n(3983),B=n(6548);function O(){let{passcode:e,errorMessages:r,authorized:n,changePasscode:s,checkPasscode:o}=function(){let e=_(P),[r,n]=(0,k.useState)(e||""),[t,s]=(0,k.useState)(e===I),[o,i]=(0,k.useState)([]);return{passcode:r,authorized:t,errorMessages:o,changePasscode:e=>{o.length>0&&i([]),n(e)},checkPasscode:()=>r!==I?(i(["パスコードが違います"]),!1):(i([]),s(!0),R(P,r),!0)}}();return(0,t.jsx)(A.Z,{open:!n,className:"modal-passcode",sx:{backdropFilter:"blur(8px)"},children:(0,t.jsxs)(f.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"100%",maxWidth:"20rem",minWidth:"20rem",padding:"1rem"},children:[r.length>0&&(0,t.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(F.Z,{severity:"error",children:(0,t.jsx)("ul",{children:r.map((e,r)=>(0,t.jsx)("li",{children:e},r))})})}),(0,t.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(F.Z,{severity:"info",children:"パスコードを入力してください"})}),(0,t.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(G.Z,{error:r.length>0,type:"password",label:"パスコード",variant:"standard",value:e,onChange:e=>s(e.currentTarget.value)})}),(0,t.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(f.Z,{sx:{position:"absolute",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"auto"},children:(0,t.jsx)(B.Z,{color:"info",variant:"contained",onClick:()=>o(),children:"認証"})})})]})})}let Y={lang:"ja",keywords:[],title:"",type:"article",noindex:!1};function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,r=e.description,n=e.image?e.image:"".concat(a.Z.BASE_URL,"/images/eyecatch.png");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N(),{children:[(0,t.jsx)("meta",{name:"keywords",content:e.keywords?e.keywords.join(", "):""}),(0,t.jsx)("meta",{property:"og:url",content:"".concat(a.Z.BASE_URL)}),(0,t.jsx)("meta",{property:"og:title",content:e.title}),(0,t.jsx)("meta",{property:"og:description",content:r}),(0,t.jsx)("meta",{property:"og:image",content:n})]}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(D.Z,{theme:z,children:[(0,t.jsx)(L.ZP,{}),(0,t.jsx)(C,{}),(0,t.jsx)("main",{role:"main",className:"main",children:e.children}),(0,t.jsx)(l,{}),(0,t.jsx)(O,{})]})})]})}},845:function(){}},function(e){e.O(0,[177,559,971,23,744],function(){return e(e.s=6838)}),_N_E=e.O()}]);