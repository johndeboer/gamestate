(function(){"use strict";var e={7178:function(e,t,n){var r=n(9242),i=n(3396);function s(e,t,n,r,s,o){const l=(0,i.up)("GameState");return(0,i.wg)(),(0,i.j4)(l)}var o=n(7139);const l={id:"app",class:"bg-black h-screen"},a={class:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 text-center flex justify-center text-white",id:"my-modal"},c={class:"bg-gray-700 rounded-lg border-2 mt-14 w-5/6 min-h-min max-h-48"},u=(0,i._)("div",{class:"p-4"},[(0,i._)("input",{type:"checkbox",class:"form-checkbox rounded"}),(0,i.Uk)(" Random Timer (± 3 minutes) ")],-1),f=(0,i._)("div",{class:"p-4"},[(0,i._)("input",{type:"number",class:"text-black w-12",value:"75",min:"0",max:"120"}),(0,i.Uk)(" Timer Base Minutes ")],-1),d={class:"p-4"},m={class:"w-full h-2/6"},h={class:"w-full h-1/6 flex flex-row text-center items-center justify-center"},g=(0,i._)("i",{class:"fas fa-gear"},null,-1),p=[g],w=(0,i._)("i",{class:"fas fa-refresh"},null,-1),v=[w],b={class:"w-full h-5/6 border-8 border-black text-white flex justify-center items-center"},x={class:"text-9xl not-italic font-semibold text-center"},y={class:"w-full h-1/2 flex flex-row text-white text-center text-6xl not-italic"},_={class:"bg-red-700 w-1/2 items-center flex justify-center mr-1 relative"},k=(0,i._)("i",{class:"fas fa-angle-up absolute top-0 inset-x-0"},null,-1),T=[k],j={class:"font-semibold text-9xl"},O=(0,i._)("i",{class:"fas fa-angle-down absolute inset-x-0 bottom-0"},null,-1),R=[O],P={class:"bg-blue-700 w-1/2 items-center flex justify-center ml-1 relative"},C=(0,i._)("i",{class:"fas fa-angle-up absolute top-0 inset-x-0"},null,-1),V=[C],N={class:"font-semibold text-9xl"},S=(0,i._)("i",{class:"fas fa-angle-down absolute inset-x-0 bottom-0"},null,-1),z=[S],A={class:"w-full h-1/6 text-6xl not-italic font-semibold text-white text-center flex items-center justify-center flex-row"},I=(0,i._)("i",{class:"fas fa-minus"},null,-1),E=[I],F={class:"h-full w-4/6 flex items-center justify-center"},D=(0,i._)("i",{class:"fas fa-plus"},null,-1),M=[D];function B(e,t,n,s,g,w){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.wy)((0,i._)("div",a,[(0,i._)("div",c,[u,f,(0,i._)("div",d,[(0,i._)("button",{class:"rounded-lg bg-emerald-700 p-2 px-16",onClick:t[0]||(t[0]=e=>g.showset=!1)}," Done ")])])],512),[[r.F8,g.showset]]),(0,i._)("div",m,[(0,i._)("div",h,[(0,i._)("div",{class:"w-1/3 h-full border rounded-none border-gray-500 text-white flex items-center justify-center",onClick:t[1]||(t[1]=e=>g.showset=!0)},p),(0,i._)("div",{class:"w-1/3 h-full border rounded-none border-gray-500 text-white flex items-center justify-center",onClick:t[2]||(t[2]=e=>w.toggleTimer())},[(0,i._)("i",{class:(0,o.C_)(["fas",w.timerIcon])},null,2)]),(0,i._)("div",{class:"w-1/3 h-full border rounded-none border-gray-500 text-white flex items-center justify-center",onClick:t[3]||(t[3]=e=>w.resetTimer())},v)]),(0,i._)("div",b,[(0,i._)("div",x,(0,o.zw)(g.timerText),1)])]),(0,i._)("div",y,[(0,i._)("div",_,[(0,i._)("div",{onClick:t[4]||(t[4]=e=>g.playerOneVP<99?g.playerOneVP++:0)},T),(0,i._)("div",j,(0,o.zw)(w.playerOneScore),1),(0,i._)("div",{onClick:t[5]||(t[5]=e=>g.playerOneVP>0?g.playerOneVP--:0)},R)]),(0,i._)("div",P,[(0,i._)("div",{onClick:t[6]||(t[6]=e=>g.playerTwoVP<99?g.playerTwoVP++:0)},V),(0,i._)("div",N,(0,o.zw)(w.playerTwoScore),1),(0,i._)("div",{onClick:t[7]||(t[7]=e=>g.playerTwoVP>0?g.playerTwoVP--:0)},z)])]),(0,i._)("div",A,[(0,i._)("div",{class:"h-full w-1/6 flex items-center justify-center",onClick:t[8]||(t[8]=e=>g.roundNumber>1?g.roundNumber--:0)},E),(0,i._)("div",F," Round "+(0,o.zw)(g.roundNumber),1),(0,i._)("div",{class:"h-full w-1/6 flex items-center justify-center",onClick:t[9]||(t[9]=e=>g.roundNumber<20?g.roundNumber++:0)},M)])])}var G={setup(){},data(){return{playerOneVP:0,playerTwoVP:0,roundNumber:1,timerRunning:!1,timerRemaining:45e5,timerEnd:null,timer:void 0,timeNow:null,timerText:"75:00",stateGame:!1,stateBuild:!0,stateAddingFirst:!1,stateAddingSecond:!1,showset:!1}},computed:{maxId(){let e=0;for(let t of this.ships)t.id>e&&(e=t.id);return e},playerOneScore(){return this.playerOneVP},playerTwoScore(){return this.playerTwoVP},timerIcon(){return this.timerRunning?"fa-pause":"fa-play"},timerStyle(){return this.timerRemaining>0?"bg-slate-500":"bg-red-500"}},methods:{toggleTimer(){this.timerRunning=!this.timerRunning,this.timerRunning?(this.timerEnd=Date.now()+this.timerRemaining,this.timer=setInterval(this.updateTimer,500)):clearInterval(this.timer)},resetTimer(){confirm("Reset Timer?")&&(this.timerRunning=!1,clearInterval(this.timer),this.timerRemaining=45e5,this.timerText="75:00",this.playerOneVP=0,this.playerTwoVP=0,this.roundNumber=1)},updateTimer(){this.timerRunning&&(this.timerRemaining=this.timerEnd-Date.now()),this.timerRemaining<=0&&(this.timerRemaining=0,this.timerRunning=!1);let e=Math.floor(this.timerRemaining/6e4),t=Math.floor((this.timerRemaining-60*e*1e3)/1e3);this.timerText=e+":"+String(t).padStart(2,"0")}}},U=n(89);const Z=(0,U.Z)(G,[["render",B]]);var q=Z,H={name:"App",components:{GameState:q}};const J=(0,U.Z)(H,[["render",s]]);var K=J,L=n(5431);(0,L.z)("/gamestate/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,r.ri)(K).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],s=e[u][2];for(var l=!0,a=0;a<r.length;a++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,o=r[0],l=r[1],a=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var u=a(n)}for(t&&t(r);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunkxwing_gamestate"]=self["webpackChunkxwing_gamestate"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7178)}));r=n.O(r)})();
//# sourceMappingURL=app.8ec7350b.js.map