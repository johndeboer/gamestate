if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=e=>t(e,r),a={module:{uri:r},exports:o,require:c};s[r]=Promise.all(i.map((e=>a[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"xwing-gamestate"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/gamestate/css/app.db2e273e.css",revision:null},{url:"/gamestate/index.html",revision:"986806a3c318ea323ea5c2e8601ccb09"},{url:"/gamestate/js/app.74c93701.js",revision:null},{url:"/gamestate/js/chunk-vendors.e5b308c7.js",revision:null},{url:"/gamestate/manifest.json",revision:"450a7fda76c5eeed3e9fc3bb86702470"},{url:"/gamestate/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
