(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378,381,284,12],{9076:function(e,r,n){Promise.resolve().then(n.bind(n,902)),Promise.resolve().then(n.bind(n,204)),Promise.resolve().then(n.bind(n,7580)),Promise.resolve().then(n.bind(n,9393)),Promise.resolve().then(n.bind(n,391)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,4858))},4701:function(e,r){"use strict";r.Z={BASE_URL:"https://minominolyly.github.io/azurea-absolve"}},4858:function(e,r,n){"use strict";n.d(r,{default:function(){return J}});var s=n(7437);n(845);var t=n(1412),o=n(4587),i=n(3719);function l(){return(0,s.jsx)("footer",{className:"footer",children:(0,s.jsx)(o.Z,{className:"footer-container",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(t.Z,{fontSize:"small"}),"minominolyly"]})})})}var a=n(4701),c={INDEX:"/",GALLERY:"/gallery/",QUIZ:"/quiz/",RULE:"/rule/",GUIDE:"/guide/",SURVEY:"/survey/"},d=n(6760),h=n(4330),x=n(8188),m=n(6492),j=n(922),u=n(2715),f=n(7999),Z=n(1733),p=n(9806),g=n(335),y=n(2748),v=n(1692),b=n(6917),w=n(7905),S=n(6648),E=n(7138),k=n(2265);function N(){let[e,r]=(0,k.useState)(!1);return(0,s.jsxs)("header",{className:"header",children:[(0,s.jsx)(f.Z,{sx:{flexGrow:1},children:(0,s.jsxs)(Z.Z,{sx:{position:"fixed"},component:"nav",color:"secondary",children:[(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(f.Z,{component:E.default,href:c.INDEX,children:(0,s.jsx)(S.default,{src:"".concat(a.Z.BASE_URL,"/images/logo.png"),alt:"logo",height:256,width:144,style:{height:"2.5rem",width:"auto",cursor:"pointer"}})}),(0,s.jsx)(f.Z,{sx:{flexGrow:1}}),(0,s.jsx)(g.Z,{edge:"end",style:{color:"var(--color-gray-70)"},"aria-label":"menu",sx:{mr:2},onClick:()=>{r(!e)},children:(0,s.jsx)(d.Z,{})})]}),e?(0,s.jsxs)(y.Z,{children:[(0,s.jsxs)(v.Z,{component:E.default,href:c.RULE,children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(h.Z,{fontSize:"small",color:"primary"})}),(0,s.jsx)(w.Z,{children:"ルール"})]}),(0,s.jsxs)(v.Z,{component:E.default,href:c.GUIDE,children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(x.Z,{fontSize:"small",color:"primary"})}),(0,s.jsx)(w.Z,{children:"ガイド"})]}),(0,s.jsxs)(v.Z,{component:E.default,href:c.GALLERY,children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(m.Z,{fontSize:"small",color:"primary"})}),(0,s.jsx)(w.Z,{children:"ギャラリー"})]}),(0,s.jsxs)(v.Z,{component:E.default,href:c.SURVEY,children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(j.Z,{fontSize:"small",color:"primary"})}),(0,s.jsx)(w.Z,{children:"アンケート"})]}),(0,s.jsxs)(v.Z,{component:E.default,href:c.QUIZ,children:[(0,s.jsx)(b.Z,{children:(0,s.jsx)(u.Z,{fontSize:"small",color:"primary"})}),(0,s.jsx)(w.Z,{children:"クイズ"})]})]}):(0,s.jsx)(s.Fragment,{})]})}),(0,s.jsx)(p.Z,{})]})}var U=n(7449),D=n.n(U);let L=(0,n(7350).Z)({palette:{primary:{main:"#D9CE3D"},secondary:{main:"#59533F"},error:{main:"#BF27D9"},warning:{main:"#D9AC32"},info:{main:"#5271D9"},success:{main:"#95D948"},contrastThreshold:3,tonalOffset:.2}});var P=n(5410),R=n(124),_=function(e,r){try{let n=JSON.stringify(r);return window.localStorage.setItem(e,n),!0}catch(e){return console.error(e),!1}},z=function(e){try{let r=window.localStorage.getItem(e);if(!r)return;return JSON.parse(r)}catch(e){console.error(e);return}};let C="a6s01ve",I="azurea-absolve.passcode";var A=n(2024),F=n(6230),G=n(3983),B=n(6548);function O(){let{passcode:e,errorMessages:r,authorized:n,changePasscode:t,checkPasscode:o}=function(){let e=z(I),[r,n]=(0,k.useState)(e||""),[s,t]=(0,k.useState)(e===C),[o,i]=(0,k.useState)([]);return{passcode:r,authorized:s,errorMessages:o,changePasscode:e=>{o.length>0&&i([]),n(e)},checkPasscode:()=>r!==C?(i(["パスコードが違います"]),!1):(i([]),t(!0),_(I,r),!0)}}();return(0,s.jsx)(A.Z,{open:!n,className:"modal-passcode",sx:{backdropFilter:"blur(8px)"},children:(0,s.jsxs)(f.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"100%",maxWidth:"20rem",minWidth:"20rem",padding:"1rem"},children:[r.length>0&&(0,s.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,s.jsx)(F.Z,{severity:"error",children:(0,s.jsx)("ul",{children:r.map((e,r)=>(0,s.jsx)("li",{children:e},r))})})}),(0,s.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,s.jsx)(F.Z,{severity:"info",children:"パスコードを入力してください"})}),(0,s.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,s.jsx)(G.Z,{error:r.length>0,type:"password",label:"パスコード",variant:"standard",value:e,onChange:e=>t(e.currentTarget.value)})}),(0,s.jsx)(f.Z,{sx:{padding:"1rem"},children:(0,s.jsx)(f.Z,{sx:{position:"absolute",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"auto"},children:(0,s.jsx)(B.Z,{color:"info",variant:"contained",onClick:()=>o(),children:"認証"})})})]})})}let Y={lang:"ja",keywords:[],title:"",type:"article",noindex:!1};function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,r=e.description,n=e.image?e.image:"".concat(a.Z.BASE_URL,"/images/eyecatch.png");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(D(),{children:[(0,s.jsx)("meta",{name:"keywords",content:e.keywords?e.keywords.join(", "):""}),(0,s.jsx)("meta",{property:"og:url",content:"".concat(a.Z.BASE_URL)}),(0,s.jsx)("meta",{property:"og:title",content:e.title}),(0,s.jsx)("meta",{property:"og:description",content:r}),(0,s.jsx)("meta",{property:"og:image",content:n})]}),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(P.Z,{theme:L,children:[(0,s.jsx)(R.ZP,{}),(0,s.jsx)(N,{}),(0,s.jsx)("main",{role:"main",className:"main",children:e.children}),(0,s.jsx)(l,{}),(0,s.jsx)(O,{})]})})]})}},845:function(){}},function(e){e.O(0,[177,559,623,971,23,744],function(){return e(e.s=9076)}),_N_E=e.O()}]);