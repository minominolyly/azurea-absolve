(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{6972:function(e,n,r){Promise.resolve().then(r.bind(r,2293)),Promise.resolve().then(r.bind(r,8718)),Promise.resolve().then(r.bind(r,5218)),Promise.resolve().then(r.bind(r,902)),Promise.resolve().then(r.bind(r,8149)),Promise.resolve().then(r.bind(r,4858))},8149:function(e,n,r){"use strict";r.d(n,{default:function(){return U}});var t=r(7437),s=r(4701),i=e=>{let n={timeout:1e4,baseURL:"https://minominolyly.github.io/azurea-absolve",responseType:"json"};return e?{...n,...e}:n},l=r(4159),a=r(2265),o=r(1222),c=r(4414),d=r(7999),h=r(9617),x=r(1847),u=r(3719),m=r(3578),j=r(8549),Z=r(6065),f=r(5843),p=r(866),g=r(3742),y=r(1692),v=r(3983),b=r(335),w=r(8433),S=r(270),E=r(4696),P=r(5349),k=r(7002),C=r(8713),I=r(6648);function U(){let{filteredQuizzes:e,types:n,typesFilter:r,questionFilter:U,answerFilter:z,setTypesFilter:A,setQuestionFilter:L,setAnswerFilter:R}=function(){let[e]=(0,l.ZP)(i({url:"data/quizzes.json"})),[n,r]=(0,a.useState)([]),[t,s]=(0,a.useState)([]),[o,c]=(0,a.useState)([]),[d,h]=(0,a.useState)(""),[x,u]=(0,a.useState)("");(0,a.useEffect)(()=>{if(e.data){r(e.data);let n=[];e.data.forEach(e=>{e.types.forEach(e=>{n.find(n=>n===e)||n.push(e)})}),s(n)}},[e]);let m=n.filter(e=>{if(o.length<=0&&!d&&!x)return!0;if(d&&!e.question.match(".*".concat(d,".*"))||x&&!e.answer.match(".*".concat(x,".*")))return!1;if(o.length>0){for(let n=0;n<o.length;n++){let r=o[n];if(e.types.find(e=>e===r))return!0}return!1}return!0});return{quizzes:n,filteredQuizzes:m,types:t,typesFilter:o,questionFilter:d,answerFilter:x,setTypesFilter:c,setQuestionFilter:h,setAnswerFilter:u}}();return(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("section",{children:(0,t.jsxs)(h.default,{style:{margin:"1rem auto"},defaultExpanded:!0,children:[(0,t.jsx)(x.default,{expandIcon:(0,t.jsx)(o.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)(u.Z,{children:"フィルター"})}),(0,t.jsxs)(m.default,{children:[(0,t.jsxs)(j.Z,{sx:{display:"block",margin:"1rem"},children:[(0,t.jsx)(Z.Z,{children:"タイプ"}),(0,t.jsx)(f.Z,{label:"タイプ",variant:"outlined",multiple:!0,fullWidth:!0,value:r,input:(0,t.jsx)(p.Z,{label:"Chip"}),onChange:e=>{"object"==typeof e.target.value&&A(e.target.value)},renderValue:e=>(0,t.jsx)(d.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map(e=>(0,t.jsx)(g.Z,{label:e,onDelete:()=>{A(r.filter(n=>n!==e))},onMouseDown:e=>{e.stopPropagation()}},e))}),children:n.map((e,n)=>(0,t.jsx)(y.Z,{value:e,children:e},n))})]}),(0,t.jsx)(j.Z,{sx:{display:"block",margin:"1rem"},children:(0,t.jsx)(v.Z,{label:"問題",variant:"outlined",fullWidth:!0,value:U,InputProps:{endAdornment:(0,t.jsx)(b.Z,{onClick:()=>{L("")},children:(0,t.jsx)(c.Z,{})})},onChange:e=>{L(e.target.value)}})}),(0,t.jsx)(j.Z,{sx:{display:"block",margin:"1rem"},children:(0,t.jsx)(v.Z,{label:"解答",variant:"outlined",fullWidth:!0,value:z,InputProps:{endAdornment:(0,t.jsx)(b.Z,{onClick:()=>{R("")},children:(0,t.jsx)(c.Z,{})})},onChange:e=>{R(e.target.value)}})})]})]})}),(0,t.jsx)("section",{children:(0,t.jsx)(w.ZP,{container:!0,spacing:2,children:e.map((e,n)=>(0,t.jsx)(w.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,t.jsxs)(S.Z,{children:[(0,t.jsx)(E.Z,{sx:{bgcolor:k.Z[100]},children:(0,t.jsxs)(w.ZP,{container:!0,children:[(0,t.jsx)(w.ZP,{item:!0,xs:2,children:(0,t.jsx)(P.Z,{sx:{bgcolor:k.Z[500]},children:"Q"})}),(0,t.jsxs)(w.ZP,{item:!0,xs:10,children:[(0,t.jsx)(u.Z,{sx:{verticalAlign:"middle"},children:e.question}),e.questionImageFilename?(0,t.jsx)("div",{children:(0,t.jsx)(I.default,{src:"".concat(s.Z.BASE_URL,"/images/quiz/").concat(e.questionImageFilename),alt:e.question,height:640,width:360,style:{height:"auto",width:"100%",border:"0"}})}):(0,t.jsx)(t.Fragment,{})]})]})}),(0,t.jsx)(E.Z,{sx:{bgcolor:C.Z[100]},children:(0,t.jsxs)(w.ZP,{container:!0,children:[(0,t.jsx)(w.ZP,{item:!0,xs:2,children:(0,t.jsx)(P.Z,{sx:{bgcolor:C.Z[500]},children:"A"})}),(0,t.jsxs)(w.ZP,{item:!0,xs:10,children:[(0,t.jsx)(u.Z,{sx:{verticalAlign:"middle"},children:e.answer}),e.answerImageFilename?(0,t.jsx)("div",{children:(0,t.jsx)(I.default,{src:"".concat(s.Z.BASE_URL,"/images/quiz/").concat(e.answerImageFilename),alt:e.answer,height:640,width:360,style:{height:"auto",width:"100%",border:"0"}})}):(0,t.jsx)(t.Fragment,{})]})]})}),(0,t.jsx)(E.Z,{children:(0,t.jsx)(w.ZP,{container:!0,children:(0,t.jsx)(w.ZP,{item:!0,xs:12,children:e.types.map(e=>(0,t.jsx)(g.Z,{label:e},e))})})})]})},n))})})]})}},4701:function(e,n){"use strict";n.Z={BASE_URL:"https://minominolyly.github.io/azurea-absolve"}},4858:function(e,n,r){"use strict";r.d(n,{default:function(){return O}});var t=r(7437);r(845);var s=r(1412),i=r(4587),l=r(3719);function a(){return(0,t.jsx)("footer",{className:"footer",children:(0,t.jsx)(i.Z,{className:"footer-container",children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{fontSize:"small"}),"minominolyly"]})})})}var o=r(4701),c={INDEX:"/",GALLERY:"/gallery/",QUIZ:"/quiz/",RULE:"/rule/",GUIDE:"/guide/",SURVEY:"/survey/"},d=r(6760),h=r(4330),x=r(8188),u=r(6492),m=r(922),j=r(2715),Z=r(7999),f=r(1733),p=r(9806),g=r(335),y=r(2748),v=r(1692),b=r(6917),w=r(7905),S=r(6648),E=r(7138),P=r(2265);function k(){let[e,n]=(0,P.useState)(!1);return(0,t.jsxs)("header",{className:"header",children:[(0,t.jsx)(Z.Z,{sx:{flexGrow:1},children:(0,t.jsxs)(f.Z,{sx:{position:"fixed"},component:"nav",color:"secondary",children:[(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(Z.Z,{component:E.default,href:c.INDEX,children:(0,t.jsx)(S.default,{src:"".concat(o.Z.BASE_URL,"/images/logo.png"),alt:"logo",height:256,width:144,style:{height:"2.5rem",width:"auto",cursor:"pointer"}})}),(0,t.jsx)(Z.Z,{sx:{flexGrow:1}}),(0,t.jsx)(g.Z,{edge:"end",style:{color:"var(--color-gray-70)"},"aria-label":"menu",sx:{mr:2},onClick:()=>{n(!e)},children:(0,t.jsx)(d.Z,{})})]}),e?(0,t.jsxs)(y.Z,{children:[(0,t.jsxs)(v.Z,{component:E.default,href:c.RULE,children:[(0,t.jsx)(b.Z,{children:(0,t.jsx)(h.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(w.Z,{children:"ルール"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.GUIDE,children:[(0,t.jsx)(b.Z,{children:(0,t.jsx)(x.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(w.Z,{children:"ガイド"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.GALLERY,children:[(0,t.jsx)(b.Z,{children:(0,t.jsx)(u.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(w.Z,{children:"ギャラリー"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.SURVEY,children:[(0,t.jsx)(b.Z,{children:(0,t.jsx)(m.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(w.Z,{children:"アンケート"})]}),(0,t.jsxs)(v.Z,{component:E.default,href:c.QUIZ,children:[(0,t.jsx)(b.Z,{children:(0,t.jsx)(j.Z,{fontSize:"small",color:"primary"})}),(0,t.jsx)(w.Z,{children:"クイズ"})]})]}):(0,t.jsx)(t.Fragment,{})]})}),(0,t.jsx)(p.Z,{})]})}var C=r(7449),I=r.n(C);let U=(0,r(7350).Z)({palette:{primary:{main:"#D9CE3D"},secondary:{main:"#59533F"},error:{main:"#BF27D9"},warning:{main:"#D9AC32"},info:{main:"#5271D9"},success:{main:"#95D948"},contrastThreshold:3,tonalOffset:.2}});var z=r(5410),A=r(124),L=function(e,n){try{let r=JSON.stringify(n);return window.localStorage.setItem(e,r),!0}catch(e){return console.error(e),!1}},R=function(e){try{let n=window.localStorage.getItem(e);if(!n)return;return JSON.parse(n)}catch(e){console.error(e);return}};let D="a6s01ve",F="azurea-absolve.passcode";var N=r(2024),_=r(6230),q=r(3983),B=r(6548);function G(){let{passcode:e,errorMessages:n,authorized:r,changePasscode:s,checkPasscode:i}=function(){let e=R(F),[n,r]=(0,P.useState)(e||""),[t,s]=(0,P.useState)(e===D),[i,l]=(0,P.useState)([]);return{passcode:n,authorized:t,errorMessages:i,changePasscode:e=>{i.length>0&&l([]),r(e)},checkPasscode:()=>n!==D?(l(["パスコードが違います"]),!1):(l([]),s(!0),L(F,n),!0)}}();return(0,t.jsx)(N.Z,{open:!r,className:"modal-passcode",sx:{backdropFilter:"blur(8px)"},children:(0,t.jsxs)(Z.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"100%",maxWidth:"20rem",minWidth:"20rem",padding:"1rem"},children:[n.length>0&&(0,t.jsx)(Z.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(_.Z,{severity:"error",children:(0,t.jsx)("ul",{children:n.map((e,n)=>(0,t.jsx)("li",{children:e},n))})})}),(0,t.jsx)(Z.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(_.Z,{severity:"info",children:"パスコードを入力してください"})}),(0,t.jsx)(Z.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(q.Z,{error:n.length>0,type:"password",label:"パスコード",variant:"standard",value:e,onChange:e=>s(e.currentTarget.value)})}),(0,t.jsx)(Z.Z,{sx:{padding:"1rem"},children:(0,t.jsx)(Z.Z,{sx:{position:"absolute",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--color-white)",width:"auto"},children:(0,t.jsx)(B.Z,{color:"info",variant:"contained",onClick:()=>i(),children:"認証"})})})]})})}let W={lang:"ja",keywords:[],title:"",type:"article",noindex:!1};function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=e.description,r=e.image?e.image:"".concat(o.Z.BASE_URL,"/images/eyecatch.png");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(I(),{children:[(0,t.jsx)("meta",{name:"keywords",content:e.keywords?e.keywords.join(", "):""}),(0,t.jsx)("meta",{property:"og:url",content:"".concat(o.Z.BASE_URL)}),(0,t.jsx)("meta",{property:"og:title",content:e.title}),(0,t.jsx)("meta",{property:"og:description",content:n}),(0,t.jsx)("meta",{property:"og:image",content:r})]}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(z.Z,{theme:U,children:[(0,t.jsx)(A.ZP,{}),(0,t.jsx)(k,{}),(0,t.jsx)("main",{role:"main",className:"main",children:e.children}),(0,t.jsx)(a,{}),(0,t.jsx)(G,{})]})})]})}},845:function(){}},function(e){e.O(0,[177,559,380,433,547,971,23,744],function(){return e(e.s=6972)}),_N_E=e.O()}]);