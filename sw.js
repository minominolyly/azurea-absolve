if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const u=e=>s(e,n),l={module:{uri:n},exports:c,require:u};a[n]=Promise.all(i.map((e=>l[e]||u(e)))).then((e=>(r(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/azurea-absolve/_next/app-build-manifest.json",revision:"6d6dd03013684f5a92baa38521d0c11d"},{url:"/azurea-absolve/_next/static/cY18eCALngUkJvCrSiJvM/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/azurea-absolve/_next/static/cY18eCALngUkJvCrSiJvM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/azurea-absolve/_next/static/chunks/115-9b52d5decff4a13a.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/174-6aca3f34267d997f.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/23-d7fda8a2473fb51e.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/380-0c73c0c0b6183b4d.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/433-03abb399d18962cc.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/547-1b92de4300609e40.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/642-4925af40b550c058.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/773-77f64951fde1a267.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/795-61900cf99f764bcb.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/877-224504339c3dffa5.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/_not-found/page-87b0ae4bd1900e43.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/event/page-c099f30ae33770d4.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/event/search-and-report/page-95d80a05e5f32475.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/gallery/page-b00b8769e9c40fb0.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/guide/adventure/fuun-no-kokyuu/page-edf29511005367c2.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/guide/adventure/page-b0fecc336e50b895.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/guide/page-c7211631f09f8185.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/guide/tips/page-0234711a43362b4d.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/layout-f818b3c1744f947b.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/page-ff5600512c60ff77.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/quiz/page-f63b2fc15132a4d7.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/rule/basic/page-79a8a5fc7cc3e307.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/rule/gvg/page-2c087f3c948a6ea3.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/rule/page-2accd814ea60b0f8.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/rule/shinku-yojin/page-22f49938ad068f63.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/survey/2024-06-10--guild-survey/page-964ad8492c2f4909.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/app/survey/page-32dbc7a014f26d92.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/fd9d1056-90960e0a7e77703c.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/framework-f66176bb897dc684.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/main-app-39c2a1f111f10d3c.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/main-b60824e55c99b3ec.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/azurea-absolve/_next/static/chunks/webpack-00da6befeaeed293.js",revision:"cY18eCALngUkJvCrSiJvM"},{url:"/azurea-absolve/_next/static/css/c26e3dd7b7a76588.css",revision:"c26e3dd7b7a76588"},{url:"/azurea-absolve/data/quizzes.json",revision:"60a5cf2fc43180b9fb49eadf66bf4911"},{url:"/azurea-absolve/favicon.ico",revision:"84d2b15876e7229bb78758286d66f461"},{url:"/azurea-absolve/images/event/eyecatch.png",revision:"0aefa3e8dd71ef0706709fceace96e54"},{url:"/azurea-absolve/images/event/search-and-report/eyecatch.png",revision:"f55644df56217b1c72372f926ba487cb"},{url:"/azurea-absolve/images/eyecatch.png",revision:"6f922cc544bbbe689387425fb2a9c00a"},{url:"/azurea-absolve/images/gallery/0.png",revision:"3062aa3c7a3b733b0ea5efaf6def5f47"},{url:"/azurea-absolve/images/gallery/1.png",revision:"1318821a665fd4056a6339fda00df791"},{url:"/azurea-absolve/images/gallery/10.png",revision:"c5ea7ca6ac14428459c5db87e156bef5"},{url:"/azurea-absolve/images/gallery/11.png",revision:"a97d49696fadcf0c57ecb2998ae3d1d2"},{url:"/azurea-absolve/images/gallery/12.png",revision:"3acf01a3098dbb89cea4d8aeb7b4bd94"},{url:"/azurea-absolve/images/gallery/13.png",revision:"d21a7a48cdf7bc23bd3e95ac74c7dcba"},{url:"/azurea-absolve/images/gallery/14.png",revision:"7d6612820c405d900fc0b04df62fb215"},{url:"/azurea-absolve/images/gallery/15.png",revision:"0b724b09c51ad34823880ece0a7b9b1a"},{url:"/azurea-absolve/images/gallery/16.png",revision:"7c376d012459e2f0e204388b2dbc0c5a"},{url:"/azurea-absolve/images/gallery/17.png",revision:"4b07e223454397f1fdce1a875c9ed96f"},{url:"/azurea-absolve/images/gallery/18.png",revision:"2919cb9ebff6889d0589f94dacac1146"},{url:"/azurea-absolve/images/gallery/19.png",revision:"db23c76f245af2d96d3f4ac36af0c1aa"},{url:"/azurea-absolve/images/gallery/2.png",revision:"4c4fc831832424b215ca6d97b68b1024"},{url:"/azurea-absolve/images/gallery/20.png",revision:"1b5f5a1e8cf96ddfc26c8b119a237299"},{url:"/azurea-absolve/images/gallery/21.png",revision:"61afe90d7508652883a52f46145f15cc"},{url:"/azurea-absolve/images/gallery/22.png",revision:"af81913569f0d89b96403a7c59fa4bf1"},{url:"/azurea-absolve/images/gallery/23.png",revision:"c83703a4167e92ac5b97ce9286c8dd38"},{url:"/azurea-absolve/images/gallery/24.png",revision:"17b3e4ff5b578176c1fec6c9bea0a6cc"},{url:"/azurea-absolve/images/gallery/25.png",revision:"a0471e3223411b6ab156a84f62a1a77f"},{url:"/azurea-absolve/images/gallery/26.png",revision:"454afba872a83de17348c669989f9048"},{url:"/azurea-absolve/images/gallery/27.png",revision:"633124049a85c9584356616ce64f4456"},{url:"/azurea-absolve/images/gallery/28.png",revision:"c9b33512cfbd55e915750a717722bdda"},{url:"/azurea-absolve/images/gallery/29.png",revision:"3ecd867b7a6d6067de896dee51ba5233"},{url:"/azurea-absolve/images/gallery/3.png",revision:"6ab892f494d3d1def6d53c6aa05c9e9d"},{url:"/azurea-absolve/images/gallery/30.png",revision:"affc5b8c1ceda5c4661117550bee0569"},{url:"/azurea-absolve/images/gallery/31.png",revision:"2946dff5b1568678db9c69f8bb95e672"},{url:"/azurea-absolve/images/gallery/32.png",revision:"2f180b1aa0033dcff81f3cfd616a7635"},{url:"/azurea-absolve/images/gallery/33.png",revision:"61529adccda016efbda753e244455ba8"},{url:"/azurea-absolve/images/gallery/34.png",revision:"e0d7b9d5f756a8dea60ecf9411971d5a"},{url:"/azurea-absolve/images/gallery/35.png",revision:"947aa440c7dcbd585b693ce8df14df55"},{url:"/azurea-absolve/images/gallery/36.png",revision:"320bd2867da502fe06ff5b0df927061d"},{url:"/azurea-absolve/images/gallery/37.png",revision:"99c87c7f51d0de35389be78614ff0a5c"},{url:"/azurea-absolve/images/gallery/4.jpg",revision:"88d069c2ae60998253ccdf7817b0423d"},{url:"/azurea-absolve/images/gallery/5.webp",revision:"8dca3cf5270d411e23889a92ec4bccf4"},{url:"/azurea-absolve/images/gallery/6.webp",revision:"67bfe437a502c146b9d943dce28bb97a"},{url:"/azurea-absolve/images/gallery/7.webp",revision:"9f29722dc51cc12129aba4ef48f37119"},{url:"/azurea-absolve/images/gallery/8.webp",revision:"87847c4c41c8e7835add60dc549ac074"},{url:"/azurea-absolve/images/gallery/9.png",revision:"90ac270aed8f168edf0f32df9e5c1536"},{url:"/azurea-absolve/images/guide/adventure/eyecatch.png",revision:"fb4f2a0920a1d34f7b308f9a7b0cca41"},{url:"/azurea-absolve/images/guide/adventure/fuun-no-kokyuu/rune-1.png",revision:"50d1e63ae997087ea8a8dd6006d733b6"},{url:"/azurea-absolve/images/guide/adventure/fuun-no-kokyuu/rune-2.png",revision:"7d074f57ae6f7a676bbf5ad4acd93bac"},{url:"/azurea-absolve/images/guide/adventure/fuun-no-kokyuu/rune-3.png",revision:"dc85e5b4c919d423155c3ff8f20858e0"},{url:"/azurea-absolve/images/guide/adventure/fuun-no-kokyuu/rune-4.png",revision:"9191393835c44403022599702e6504b0"},{url:"/azurea-absolve/images/guide/adventure/fuun-no-kokyuu/rune-5.png",revision:"e8429c662b17944bacc1da020977faae"},{url:"/azurea-absolve/images/guide/eyecatch.png",revision:"0fd7e37821e76980663200313eb9763d"},{url:"/azurea-absolve/images/icons/icon-128x128.png",revision:"a2dd452e60785a043e90e42456cebc4d"},{url:"/azurea-absolve/images/icons/icon-144x144.png",revision:"138595ec17b4d8904f39f1aa50bee293"},{url:"/azurea-absolve/images/icons/icon-152x152.png",revision:"8eae27a0bc473c9a18fe7520890f59e4"},{url:"/azurea-absolve/images/icons/icon-192x192.png",revision:"a0b13656e56e6d39a3af22a033faa8f4"},{url:"/azurea-absolve/images/icons/icon-384x384.png",revision:"3951133056ad65b973494a98450d300c"},{url:"/azurea-absolve/images/icons/icon-512x512.png",revision:"c2822a5cd124fff896a6e80e86b27c9b"},{url:"/azurea-absolve/images/icons/icon-72x72.png",revision:"3464d84c895fc77c3332513ffa1497fc"},{url:"/azurea-absolve/images/icons/icon-96x96.png",revision:"792b053bb0d8d9ee3d855bbf91b1c450"},{url:"/azurea-absolve/images/logo.png",revision:"e934ccaec49f740ee9642c365abb510a"},{url:"/azurea-absolve/images/quiz/3-of-numbered-musical-notation-is--answer.png",revision:"6c0504fb6fa1e998f56b07db25da84c1"},{url:"/azurea-absolve/images/quiz/unsui-idols-vocal-music-teacher-is--answer.png",revision:"b737a62dc6d35a2d027faa5f8186599b"},{url:"/azurea-absolve/images/rule/basic/eyecatch.png",revision:"fb4f2a0920a1d34f7b308f9a7b0cca41"},{url:"/azurea-absolve/images/rule/eyecatch.png",revision:"5315f600ea6525b64fd4396be7377734"},{url:"/azurea-absolve/images/rule/gvg/eyecatch.png",revision:"15fac5f54c36a4d1317f3c5609e2e20f"},{url:"/azurea-absolve/images/rule/shinku-yojin/eyecatch.png",revision:"71eb07e9c2cf5109f41eb0eb054f77f9"},{url:"/azurea-absolve/images/survey/2024-06-10--guild-survey/idol.png",revision:"20e95f6a174e4c3ebd59cd36bc0b777d"},{url:"/azurea-absolve/images/survey/2024-06-10--guild-survey/raid-admin.png",revision:"74989b8b63f99cfb6972f728fa86b34c"},{url:"/azurea-absolve/images/survey/2024-06-10--guild-survey/shinku-yojin.png",revision:"9cb071b44a34cc9f139689c6b5fe8632"},{url:"/azurea-absolve/images/survey/eyecatch.png",revision:"cf773c849f33001bda45fd279b5a239c"},{url:"/azurea-absolve/images/top-0.png",revision:"3e88eb31f3a6c5cd910824c4faa599d9"},{url:"/azurea-absolve/images/top-1.png",revision:"117b16c78a5f2b070a605ff1c83cb93a"},{url:"/azurea-absolve/images/top-2.png",revision:"efe3a79d4a533ab4ed9b17c455476e46"},{url:"/azurea-absolve/images/top-3.png",revision:"076c8608e3efc09626c97d18f1badd93"},{url:"/azurea-absolve/manifest.json",revision:"b8909457e12d7ab75923efabab1b9a60"},{url:"/azurea-absolve/robots.txt",revision:"1de257b9d536711e34c785668bb1af12"},{url:"/azurea-absolve/sitemap-0.xml",revision:"c449ac228e1b172d5f6d0efaaf5597b5"},{url:"/azurea-absolve/sitemap.xml",revision:"6fe6b7030ebf8edf0593c8e31def8651"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/azurea-absolve",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
