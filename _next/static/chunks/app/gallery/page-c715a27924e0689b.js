(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{8936:function(e,t,r){Promise.resolve().then(r.bind(r,2293)),Promise.resolve().then(r.bind(r,8718)),Promise.resolve().then(r.bind(r,5218)),Promise.resolve().then(r.bind(r,902)),Promise.resolve().then(r.bind(r,9718)),Promise.resolve().then(r.bind(r,4858))},2293:function(e,t,r){"use strict";var n=r(9018),o=r(7437);t.default=(0,n.Z)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info")},8718:function(e,t,r){"use strict";r.r(t),r.d(t,{alertClasses:function(){return o.Z},default:function(){return n.Z},getAlertUtilityClass:function(){return o.t}});var n=r(6230),o=r(7221)},5218:function(e,t,r){"use strict";r.r(t),r.d(t,{boxClasses:function(){return o.Z},default:function(){return n.Z}});var n=r(7999),o=r(7126)},9718:function(e,t,r){"use strict";r.d(t,{default:function(){return L}});var n=r(7437),o=r(7999),s=r(2945),i=r(2182),a=r(6259),l=r(4839),c=r(2265),d=r(8024),u=r(9281),m=r(4535),h=r(7542);function x(e){return(0,h.ZP)("MuiImageList",e)}(0,m.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);let f=c.createContext({}),g=["children","className","cols","component","rowHeight","gap","style","variant"],Z=e=>{let{classes:t,variant:r}=e;return(0,a.Z)({root:["root",r]},x,t)},p=(0,d.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant]]}})(e=>{let{ownerState:t}=e;return(0,i.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})}),j=c.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiImageList"}),{children:o,className:a,cols:d=2,component:m="ul",rowHeight:h="auto",gap:x=4,style:j,variant:v="standard"}=r,y=(0,s.Z)(r,g),w=c.useMemo(()=>({rowHeight:h,gap:x,variant:v}),[h,x,v]);c.useEffect(()=>{},[]);let b="masonry"===v?(0,i.Z)({columnCount:d,columnGap:x},j):(0,i.Z)({gridTemplateColumns:"repeat(".concat(d,", 1fr)"),gap:x},j),S=(0,i.Z)({},r,{component:m,gap:x,rowHeight:h,variant:v}),E=Z(S);return(0,n.jsx)(p,(0,i.Z)({as:m,className:(0,l.Z)(E.root,E[v],a),ref:t,style:b,ownerState:S},y,{children:(0,n.jsx)(f.Provider,{value:w,children:o})}))});r(1945);var v=r(9633);function y(e){return(0,h.ZP)("MuiImageListItem",e)}let w=(0,m.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),b=["children","className","cols","component","rows","style"],S=e=>{let{classes:t,variant:r}=e;return(0,a.Z)({root:["root",r],img:["img"]},y,t)},E=(0,d.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{["& .".concat(w.img)]:t.img},t.root,t[r.variant]]}})(e=>{let{ownerState:t}=e;return(0,i.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(w.img)]:(0,i.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})})}),I=c.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiImageListItem"}),{children:o,className:a,cols:d=1,component:m="li",rows:h=1,style:x}=r,g=(0,s.Z)(r,b),{rowHeight:Z="auto",gap:p,variant:j}=c.useContext(f),y="auto";"woven"===j?y=void 0:"auto"!==Z&&(y=Z*h+p*(h-1));let w=(0,i.Z)({},r,{cols:d,component:m,gap:p,rowHeight:Z,rows:h,variant:j}),I=S(w);return(0,n.jsx)(E,(0,i.Z)({as:m,className:(0,l.Z)(I.root,I[j],a),ref:t,style:(0,i.Z)({height:y,gridColumnEnd:"masonry"!==j?"span ".concat(d):void 0,gridRowEnd:"masonry"!==j?"span ".concat(h):void 0,marginBottom:"masonry"===j?p:void 0,breakInside:"masonry"===j?"avoid":void 0},x),ownerState:w},g,{children:c.Children.map(o,e=>c.isValidElement(e)?"img"===e.type||(0,v.Z)(e,["Image"])?c.cloneElement(e,{className:(0,l.Z)(I.img,e.props.className)}):e:null)}))});var C=r(8020),k=r(6648);function L(e){let[t,r]=(0,c.useState)("");return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(j,{variant:"masonry",cols:3,gap:8,children:e.images.map((e,t)=>(0,n.jsx)(I,{children:(0,n.jsx)(k.default,{src:e.image,alt:e.alt?e.alt:"ss-".concat(t),height:720,width:1280,style:{height:"auto",width:"100%"},loading:"lazy",onClick:()=>{r(e.image)}})},"ss-".concat(t)))}),(0,n.jsx)(C.Z,{open:""!==t,onClose:()=>{r("")},children:(0,n.jsx)(o.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"auto",width:"100%",maxWidth:"1200px",padding:"0.5rem",margin:"0 auto",border:"0"},children:(0,n.jsx)(k.default,{src:t,alt:"image",height:720,width:1280,style:{height:"auto",width:"100%",border:"0"},loading:"lazy"})})})]})}},4701:function(e,t){"use strict";t.Z={BASE_URL:"https://minominolyly.github.io/azurea-absolve"}},4858:function(e,t,r){"use strict";r.d(t,{default:function(){return Y}});var n=r(7437);r(845);var o=r(1412),s=r(4587),i=r(511);function a(){return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsx)(s.Z,{className:"footer-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(o.Z,{fontSize:"small"}),"minominolyly"]})})})}var l=r(4701),c={INDEX:"/",GALLERY:"/gallery/",QUIZ:"/quiz/",RULE:"/rule/",GUIDE:"/guide/",SURVEY:"/survey/"},d=r(6760),u=r(4330),m=r(8188),h=r(6492),x=r(922),f=r(2715),g=r(7999),Z=r(1733),p=r(9806),j=r(335),v=r(2748),y=r(1692),w=r(6917),b=r(7905),S=r(6648),E=r(7138),I=r(2265);function C(){let[e,t]=(0,I.useState)(!1);return(0,n.jsxs)("header",{className:"header",children:[(0,n.jsx)(g.Z,{sx:{flexGrow:1},children:(0,n.jsxs)(Z.Z,{sx:{position:"fixed"},component:"nav",color:"secondary",children:[(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(g.Z,{component:E.default,href:c.INDEX,children:(0,n.jsx)(S.default,{src:"".concat(l.Z.BASE_URL,"/images/logo.png"),alt:"logo",height:256,width:144,style:{height:"2.5rem",width:"auto",cursor:"pointer"}})}),(0,n.jsx)(g.Z,{sx:{flexGrow:1}}),(0,n.jsx)(j.Z,{edge:"end",style:{color:"var(--color-gray-70)"},"aria-label":"menu",sx:{mr:2},onClick:()=>{t(!e)},children:(0,n.jsx)(d.Z,{})})]}),e?(0,n.jsxs)(v.Z,{children:[(0,n.jsxs)(y.Z,{component:E.default,href:c.RULE,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(u.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(b.Z,{children:"ルール"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.GUIDE,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(m.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(b.Z,{children:"ガイド"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.GALLERY,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(h.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(b.Z,{children:"ギャラリー"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.SURVEY,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(x.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(b.Z,{children:"アンケート"})]}),(0,n.jsxs)(y.Z,{component:E.default,href:c.QUIZ,children:[(0,n.jsx)(w.Z,{children:(0,n.jsx)(f.Z,{fontSize:"small",color:"primary"})}),(0,n.jsx)(b.Z,{children:"クイズ"})]})]}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)(p.Z,{})]})}var k=r(7449),L=r.n(k);let N=(0,r(7350).Z)({palette:{primary:{main:"#D9CE3D"},secondary:{main:"#59533F"},error:{main:"#BF27D9"},warning:{main:"#D9AC32"},info:{main:"#5271D9"},success:{main:"#95D948"},contrastThreshold:3,tonalOffset:.2}});var R=r(5410),P=r(124),z=function(e,t){try{let r=JSON.stringify(t);return window.localStorage.setItem(e,r),!0}catch(e){return console.error(e),!1}},U=function(e){try{let t=window.localStorage.getItem(e);if(!t)return;return JSON.parse(t)}catch(e){console.error(e);return}};let D="a6s01ve",M="azurea-absolve.passcode";var _=r(8020),A=r(6230),G=r(3983),F=r(6548);function B(){let{passcode:e,errorMessages:t,authorized:r,changePasscode:o,checkPasscode:s}=function(){let e=U(M),[t,r]=(0,I.useState)(e||""),[n,o]=(0,I.useState)(e===D),[s,i]=(0,I.useState)([]);return{passcode:t,authorized:n,errorMessages:s,changePasscode:e=>{s.length>0&&i([]),r(e)},checkPasscode:()=>t!==D?(i(["パスコードが違います"]),!1):(i([]),o(!0),z(M,t),!0)}}();return(0,n.jsx)(_.Z,{open:!r,className:"modal-passcode",sx:{backdropFilter:"blur(8px)"},children:(0,n.jsxs)(g.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"100%",maxWidth:"20rem",minWidth:"20rem",padding:"1rem"},children:[t.length>0&&(0,n.jsx)(g.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(A.Z,{severity:"error",children:(0,n.jsx)("ul",{children:t.map((e,t)=>(0,n.jsx)("li",{children:e},t))})})}),(0,n.jsx)(g.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(A.Z,{severity:"info",children:"パスコードを入力してください"})}),(0,n.jsx)(g.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(G.Z,{error:t.length>0,type:"password",label:"パスコード",variant:"standard",value:e,onChange:e=>o(e.currentTarget.value)})}),(0,n.jsx)(g.Z,{sx:{padding:"1rem"},children:(0,n.jsx)(g.Z,{sx:{position:"absolute",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"auto"},children:(0,n.jsx)(F.Z,{color:"info",variant:"contained",onClick:()=>s(),children:"認証"})})})]})})}let O={lang:"ja",keywords:[],title:"",type:"article",noindex:!1};function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=e.description,r=e.image?e.image:"".concat(l.Z.BASE_URL,"/images/eyecatch.png");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(L(),{children:[(0,n.jsx)("meta",{name:"keywords",content:e.keywords?e.keywords.join(", "):""}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(l.Z.BASE_URL)}),(0,n.jsx)("meta",{property:"og:title",content:e.title}),(0,n.jsx)("meta",{property:"og:description",content:t}),(0,n.jsx)("meta",{property:"og:image",content:r})]}),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(R.Z,{theme:N,children:[(0,n.jsx)(P.ZP,{}),(0,n.jsx)(C,{}),(0,n.jsx)("main",{role:"main",className:"main",children:e.children}),(0,n.jsx)(a,{}),(0,n.jsx)(B,{})]})})]})}},845:function(){}},function(e){e.O(0,[177,559,971,23,744],function(){return e(e.s=8936)}),_N_E=e.O()}]);