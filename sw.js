if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let o={};const t=e=>s(e,c),r={module:{uri:c},exports:o,require:t};a[c]=Promise.all(n.map((e=>r[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/azurea-absolve/_next/static/bW0P7j0f-2X0fhBS_JZC8/_buildManifest.js",revision:"a27370f70a4610dd9f5bfec1921bccf4"},{url:"/azurea-absolve/_next/static/bW0P7j0f-2X0fhBS_JZC8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/azurea-absolve/_next/static/chunks/150-ff6dc0135dda13e9.js",revision:"ff6dc0135dda13e9"},{url:"/azurea-absolve/_next/static/chunks/804-5cf9d4084f69c008.js",revision:"5cf9d4084f69c008"},{url:"/azurea-absolve/_next/static/chunks/943-3bde6fcd8859729d.js",revision:"3bde6fcd8859729d"},{url:"/azurea-absolve/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/azurea-absolve/_next/static/chunks/main-33fa776d2483dd20.js",revision:"33fa776d2483dd20"},{url:"/azurea-absolve/_next/static/chunks/pages/_app-17bcdbe1cad2241d.js",revision:"17bcdbe1cad2241d"},{url:"/azurea-absolve/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/azurea-absolve/_next/static/chunks/pages/gallery-00cd3bbc46d67e39.js",revision:"00cd3bbc46d67e39"},{url:"/azurea-absolve/_next/static/chunks/pages/index-0171265f7936a710.js",revision:"0171265f7936a710"},{url:"/azurea-absolve/_next/static/chunks/pages/quiz-a4ceec686fe49c69.js",revision:"a4ceec686fe49c69"},{url:"/azurea-absolve/_next/static/chunks/pages/rule-00f047a3249574cb.js",revision:"00f047a3249574cb"},{url:"/azurea-absolve/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/azurea-absolve/_next/static/chunks/webpack-2c75ca7174377ecf.js",revision:"2c75ca7174377ecf"},{url:"/azurea-absolve/data/quizzes.json",revision:"376d6a63b647d5ed3e1867dfc7b41eae"},{url:"/azurea-absolve/favicon.ico",revision:"84d2b15876e7229bb78758286d66f461"},{url:"/azurea-absolve/images/eyecatch.png",revision:"6f922cc544bbbe689387425fb2a9c00a"},{url:"/azurea-absolve/images/icons/icon-128x128.png",revision:"a2dd452e60785a043e90e42456cebc4d"},{url:"/azurea-absolve/images/icons/icon-144x144.png",revision:"138595ec17b4d8904f39f1aa50bee293"},{url:"/azurea-absolve/images/icons/icon-152x152.png",revision:"8eae27a0bc473c9a18fe7520890f59e4"},{url:"/azurea-absolve/images/icons/icon-192x192.png",revision:"a0b13656e56e6d39a3af22a033faa8f4"},{url:"/azurea-absolve/images/icons/icon-384x384.png",revision:"3951133056ad65b973494a98450d300c"},{url:"/azurea-absolve/images/icons/icon-512x512.png",revision:"c2822a5cd124fff896a6e80e86b27c9b"},{url:"/azurea-absolve/images/icons/icon-72x72.png",revision:"3464d84c895fc77c3332513ffa1497fc"},{url:"/azurea-absolve/images/icons/icon-96x96.png",revision:"792b053bb0d8d9ee3d855bbf91b1c450"},{url:"/azurea-absolve/images/logo.png",revision:"e934ccaec49f740ee9642c365abb510a"},{url:"/azurea-absolve/images/quiz/3-of-numbered-musical-notation-is--answer.png",revision:"6c0504fb6fa1e998f56b07db25da84c1"},{url:"/azurea-absolve/images/ss-0.png",revision:"3062aa3c7a3b733b0ea5efaf6def5f47"},{url:"/azurea-absolve/images/ss-1.png",revision:"1318821a665fd4056a6339fda00df791"},{url:"/azurea-absolve/images/ss-2.png",revision:"4c4fc831832424b215ca6d97b68b1024"},{url:"/azurea-absolve/manifest.json",revision:"93a4e08501019dd80210740f13a5cc19"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/azurea-absolve",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
