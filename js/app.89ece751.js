(function(){"use strict";var e={3033:function(e,t,i){var l=i(9242),r=i(3396);function o(e,t,i,l,o,n){const s=(0,r.up)("GameState");return(0,r.wg)(),(0,r.j4)(s)}var n=i(7139);const s={id:"app",class:"bg-black h-screen select-none"},a={class:"w-full flex flex-col items-center justify-center h-screen"},c={class:"fixed inset-0 bg-gray-600 bg-opacity-90 overflow-y-auto h-full w-full z-50 text-center flex justify-center text-white",id:"my-modal"},d={key:0,class:"bg-black rounded-b-lg w-full h-5/6 pt-10 md:w-[48rem] relative overflow-y-auto"},u={class:"p-2"},m=(0,r._)("label",{for:"timerRandom"}," Random Timer (± 3 minutes)",-1),f={class:"p-2"},p=(0,r._)("label",{for:"timerMinutes"}," Timer Base Minutes",-1),h=(0,r._)("p",{class:"p-2"},"Randomized timer will count down from the minimum possible game time, then count up until full time has been reached",-1),b=(0,r._)("p",{class:"p-2 text-lg"},"Changing settings will not reset the timer!",-1),w=(0,r._)("p",null,"Score Mode",-1),y={class:"flex flex-row justify-center"},v=(0,r._)("p",null,"Timer Mode",-1),x={class:"flex flex-row justify-center"},g={class:"p-2 pt-6 mb-12"},_=(0,r._)("p",null,"Made by John DeBoer.",-1),S=(0,r._)("p",null,"Email johndb@gmail.com with feedback or bug reports.",-1),k={class:"absolute bottom-0 inset-x-0"},T={class:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 text-center flex justify-center text-white",id:"my-modal"},P={key:0,class:"bg-black rounded-b-lg pt-10 w-full md:w-[48rem] h-1/5 relative"},C=(0,r._)("div",{class:"mt-2 p-4"},"Reset Game?",-1),O={class:"flex flex-row justify-center absolute bottom-0 inset-x-0"},M={class:"w-full md:w-[48rem] h-2/6"},R={class:"w-full h-1/6 flex flex-row text-center items-center justify-center"},j=(0,r._)("i",{class:"fal fa-cog"},null,-1),V=[j],z=(0,r._)("i",{class:"fal fa-sync"},null,-1),I=[z],N={class:"text-9xl text-center"},E={class:"text-9xl text-center"},D=(0,r._)("i",{class:"fal fa-times"},null,-1),F=[D],q={class:"w-full md:w-[48rem] h-1/2 flex flex-row text-white text-center text-6xl not-italic"},B={key:0,class:"bg-red-700 w-1/2 items-center flex justify-center mr-1 relative"},$=(0,r._)("i",{class:"fal fa-angle-up absolute top-0 inset-x-0"},null,-1),A=[$],W={class:"font-semibold text-9xl"},G=(0,r._)("i",{class:"fal fa-angle-down absolute inset-x-0 bottom-0"},null,-1),H=[G],J={key:1,class:"bg-red-700 w-1/2 items-center flex justify-center mr-1 relative"},U=(0,r._)("i",{class:"fal fa-angle-up absolute top-0 right-0 pr-4"},null,-1),Z=[U],Y=(0,r._)("i",{class:"fal fa-angle-up absolute top-0 left-0 pl-4"},null,-1),K=[Y],L={class:"font-semibold text-9xl"},Q={class:"font-semibold text-xl absolute right-0 pr-4 opacity-50"},X={class:"font-semibold text-xl absolute left-0 pl-4 opacity-50"},ee=(0,r._)("div",{class:"font-semibold text-xl absolute right-0 bottom-0 opacity-25 pb-12 pr-2"},"SHIP",-1),te=(0,r._)("div",{class:"font-semibold text-xl absolute left-0 bottom-0 opacity-25 pb-12 pl-2"},"OBJ",-1),ie=(0,r._)("i",{class:"fal fa-angle-down absolute bottom-0 right-0 pr-4"},null,-1),le=[ie],re=(0,r._)("i",{class:"fal fa-angle-down absolute bottom-0 left-0 pl-4"},null,-1),oe=[re],ne={key:2,class:"bg-blue-700 w-1/2 items-center flex justify-center ml-1 relative"},se=(0,r._)("i",{class:"fal fa-angle-up absolute top-0 inset-x-0"},null,-1),ae=[se],ce={class:"font-semibold text-9xl"},de=(0,r._)("i",{class:"fal fa-angle-down absolute inset-x-0 bottom-0"},null,-1),ue=[de],me={key:3,class:"bg-blue-700 w-1/2 items-center flex justify-center ml-1 relative"},fe=(0,r._)("i",{class:"fal fa-angle-up absolute top-0 right-0 pr-4"},null,-1),pe=[fe],he=(0,r._)("i",{class:"fal fa-angle-up absolute top-0 left-0 pl-4"},null,-1),be=[he],we={class:"font-semibold text-9xl"},ye={class:"font-semibold text-xl absolute right-0 pr-4 opacity-50"},ve={class:"font-semibold text-xl absolute left-0 pl-4 opacity-50"},xe=(0,r._)("div",{class:"font-semibold text-xl absolute right-0 bottom-0 opacity-25 pb-12 pr-2"},"SHIP",-1),ge=(0,r._)("div",{class:"font-semibold text-xl absolute left-0 bottom-0 opacity-25 pb-12 pl-2"},"OBJ",-1),_e=(0,r._)("i",{class:"fal fa-angle-down absolute right-0 pr-4 bottom-0"},null,-1),Se=[_e],ke=(0,r._)("i",{class:"fal fa-angle-down absolute left-0 pl-4 bottom-0"},null,-1),Te=[ke],Pe={class:"w-full md:w-[48rem] h-1/6 text-6xl not-italic font-semibold text-white text-center flex items-center justify-center flex-row"},Ce=(0,r._)("i",{class:"fal fa-minus"},null,-1),Oe=[Ce],Me={class:"h-full w-4/6 flex items-center justify-center"},Re=(0,r._)("i",{class:"fal fa-plus"},null,-1),je=[Re];function Ve(e,t,i,o,j,z){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",a,[(0,r.Wm)(l.uT,{mode:"out-in","leave-active-class":"duration-300","enter-active-class":"duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("div",c,[(0,r.Wm)(l.uT,{mode:"out-in","enter-from-class":"-translate-y-full","enter-active-class":"ease-in-out duration-300","enter-to-class":"translate-y-0","leave-from-class":"translate-y-0","leave-active-class":"ease-in-out duration-300","leave-to-class":"-translate-y-full"},{default:(0,r.w5)((()=>[j.showset?((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",u,[(0,r.wy)((0,r._)("input",{type:"checkbox",id:"timerRandom",class:"form-checkbox rounded","onUpdate:modelValue":t[0]||(t[0]=e=>j.timerRandom=e)},null,512),[[l.e8,j.timerRandom]]),m]),(0,r._)("div",f,[(0,r.wy)((0,r._)("input",{type:"number",class:"text-white bg-black border border-blue-400 w-16 p-1 rounded-md font-bold",inputmode:"numeric",min:"0",max:"120","onUpdate:modelValue":t[1]||(t[1]=e=>j.timerMinutes=e),id:"timerMinutes"},null,512),[[l.nr,j.timerMinutes]]),p,h,b]),(0,r._)("div",null,[w,(0,r._)("div",y,[(0,r._)("div",{class:(0,n.C_)(["border-2 px-4 border-blue-400 w-1/3",z.scoreStyle("single")]),onClick:t[2]||(t[2]=e=>j.scoreSplit=!1)},"Single",2),(0,r._)("div",{class:(0,n.C_)(["border-2 px-4 border-blue-400 w-1/3",z.scoreStyle("split")]),onClick:t[3]||(t[3]=e=>j.scoreSplit=!0)},"Split",2)])]),(0,r._)("div",null,[v,(0,r._)("div",x,[(0,r._)("div",{class:(0,n.C_)(["border-2 px-4 border-blue-400 w-1/4",z.timerModeStyle("on")]),onClick:t[4]||(t[4]=e=>j.timerMode="on")},"On",2),(0,r._)("div",{class:(0,n.C_)(["border-2 px-4 border-blue-400 w-1/4",z.timerModeStyle("hidden")]),onClick:t[5]||(t[5]=e=>j.timerMode="hidden")},"Hidden",2),(0,r._)("div",{class:(0,n.C_)(["border-2 px-4 border-blue-400 w-1/4",z.timerModeStyle("off")]),onClick:t[6]||(t[6]=e=>j.timerMode="off")},"Off",2)])]),(0,r._)("div",g,[_,S,(0,r._)("p",null,"v"+(0,n.zw)(j.appVersion),1)]),(0,r._)("div",k,[(0,r._)("button",{class:"rounded-b-lg bg-blue-800 p-2 w-full",onClick:t[7]||(t[7]=e=>{j.showset=!1})}," Close ")])])):(0,r.kq)("",!0)])),_:1})],512),[[l.F8,j.showset]])])),_:1}),(0,r.Wm)(l.uT,{mode:"out-in","leave-active-class":"duration-300","enter-active-class":"duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("div",T,[(0,r.Wm)(l.uT,{mode:"out-in","enter-from-class":"-translate-y-full","enter-active-class":"ease-out duration-300","enter-to-class":"translate-y-0","leave-from-class":"translate-y-0","leave-active-class":"ease-in duration-300","leave-to-class":"-translate-y-full"},{default:(0,r.w5)((()=>[j.showreset?((0,r.wg)(),(0,r.iD)("div",P,[C,(0,r._)("div",O,[(0,r._)("div",{class:"border-2 rounded-lg m-2 p-2 w-1/3 border-blue-600 bg-blue-600 text-white",onClick:t[8]||(t[8]=e=>j.showreset=!1)},"No"),(0,r._)("div",{class:"border-2 rounded-lg m-2 p-2 w-1/3 border-red-800 bg-red-800 text-white",onClick:t[9]||(t[9]=e=>{z.resetTimer(!0),j.showreset=!1})},"Yes")])])):(0,r.kq)("",!0)])),_:1})],512),[[l.F8,j.showreset]])])),_:1}),(0,r._)("div",M,[(0,r._)("div",R,[(0,r._)("div",{class:"w-1/3 h-full border rounded-none border-gray-500 text-white flex items-center justify-center",onClick:t[10]||(t[10]=e=>j.showset=!0)},V),(0,r._)("div",{class:"w-1/3 h-full border rounded-none border-gray-500 text-white flex items-center justify-center",onClick:t[11]||(t[11]=e=>z.toggleTimer())},[(0,r._)("i",{class:(0,n.C_)(["fal",z.timerIcon])},null,2)]),(0,r._)("div",{class:"w-1/3 h-full border rounded-none border-gray-500 text-white flex items-center justify-center",onClick:t[12]||(t[12]=e=>j.showreset=!0)},I)]),(0,r._)("div",{class:(0,n.C_)(["w-full h-5/6 border-8 flex justify-center items-center",z.timerStyle])},[(0,r.wy)((0,r._)("div",{class:"text-9xl not-italic font-semibold text-center"},(0,n.zw)(j.timerText),513),[[l.F8,"on"===j.timerMode||"expired"===j.timerState]]),(0,r.wy)((0,r._)("div",N,[(0,r._)("i",{class:(0,n.C_)(["fal fa-spinner",{"fa-pulse":j.timerRunning}])},null,2)],512),[[l.F8,"hidden"===j.timerMode&&"expired"!==j.timerState]]),(0,r.wy)((0,r._)("div",E,F,512),[[l.F8,"off"===j.timerMode]])],2)]),(0,r._)("div",q,[j.scoreSplit?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",B,[(0,r._)("div",{onClick:t[13]||(t[13]=e=>j.playerOneVP<99?j.playerOneVP++:0)},A),(0,r._)("div",W,(0,n.zw)(z.playerOneScore),1),(0,r._)("div",{onClick:t[14]||(t[14]=e=>j.playerOneVP>0?j.playerOneVP--:0)},H)])),j.scoreSplit?((0,r.wg)(),(0,r.iD)("div",J,[(0,r._)("div",{onClick:t[15]||(t[15]=e=>z.playerOneScore<99?j.playerOneVP++:0)},Z),(0,r._)("div",{onClick:t[16]||(t[16]=e=>z.playerOneScore<99?j.playerOneSP++:0)},K),(0,r._)("div",L,(0,n.zw)(z.playerOneScore),1),(0,r._)("div",Q,(0,n.zw)(j.playerOneVP),1),(0,r._)("div",X,(0,n.zw)(j.playerOneSP),1),ee,te,(0,r._)("div",{onClick:t[17]||(t[17]=e=>j.playerOneVP>0?j.playerOneVP--:0)},le),(0,r._)("div",{onClick:t[18]||(t[18]=e=>j.playerOneSP>0?j.playerOneSP--:0)},oe)])):(0,r.kq)("",!0),j.scoreSplit?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",ne,[(0,r._)("div",{onClick:t[19]||(t[19]=e=>j.playerTwoVP<99?j.playerTwoVP++:0)},ae),(0,r._)("div",ce,(0,n.zw)(z.playerTwoScore),1),(0,r._)("div",{onClick:t[20]||(t[20]=e=>j.playerTwoVP>0?j.playerTwoVP--:0)},ue)])),j.scoreSplit?((0,r.wg)(),(0,r.iD)("div",me,[(0,r._)("div",{onClick:t[21]||(t[21]=e=>z.playerTwoScore<99?j.playerTwoVP++:0)},pe),(0,r._)("div",{onClick:t[22]||(t[22]=e=>z.playerTwoScore<99?j.playerTwoSP++:0)},be),(0,r._)("div",we,(0,n.zw)(z.playerTwoScore),1),(0,r._)("div",ye,(0,n.zw)(j.playerTwoVP),1),(0,r._)("div",ve,(0,n.zw)(j.playerTwoSP),1),xe,ge,(0,r._)("div",{onClick:t[23]||(t[23]=e=>j.playerTwoVP>0?j.playerTwoVP--:0)},Se),(0,r._)("div",{onClick:t[24]||(t[24]=e=>j.playerTwoSP>0?j.playerTwoSP--:0)},Te)])):(0,r.kq)("",!0)]),(0,r._)("div",Pe,[(0,r._)("div",{class:"h-full w-1/6 flex items-center justify-center",onClick:t[25]||(t[25]=e=>j.roundNumber>1?j.roundNumber--:0)},Oe),(0,r._)("div",Me," Round "+(0,n.zw)(j.roundNumber),1),(0,r._)("div",{class:"h-full w-1/6 flex items-center justify-center",onClick:t[26]||(t[26]=e=>j.roundNumber<20?j.roundNumber++:0)},je)])])])}var ze={mounted(){this.resetTimer(!0)},data(){return{appVersion:"1.0.3",playerOneVP:0,playerOneSP:0,playerTwoVP:0,playerTwoSP:0,roundNumber:1,timerRunning:!1,timerState:"normal",timerMinutes:75,timerRandom:!0,timerRemaining:45e5,timerExtra:0,timerEnd:null,timer:void 0,timeNow:null,timerText:"75:00",showset:!1,showreset:!1,scoreSplit:!1,timerMode:"on"}},computed:{maxId(){let e=0;for(let t of this.ships)t.id>e&&(e=t.id);return e},playerOneScore(){return this.playerOneVP+(this.scoreSplit?this.playerOneSP:0)},playerTwoScore(){return this.playerTwoVP+(this.scoreSplit?this.playerTwoSP:0)},timerIcon(){return"off"===this.timerMode?"fa-times":this.timerRunning?"fa-pause":"fa-play"},timerStyle(){return"extra"===this.timerState&&"on"===this.timerMode?"border-yellow-400 text-yellow-400":"expired"===this.timerState?"border-red-400 text-red-400":"border-black text-white"}},methods:{toggleTimer(){this.timerRunning=!this.timerRunning,"off"===this.timerMode&&(this.timerRunning=!1),this.timerRunning?(this.timerEnd=Date.now()+this.timerRemaining,this.timer=setInterval(this.updateTimer,500)):clearInterval(this.timer)},resetTimer(e=!1){(e||confirm("Reset Timer and Scores?"))&&(this.timerRunning=!1,clearInterval(this.timer),this.timerState="normal",this.timerRandom?(this.randomizeTimer(),this.timerRemaining=6e4*(this.timerMinutes-3),this.timerText=this.timerMinutes-3+":00"):(this.timerRemaining=6e4*this.timerMinutes,this.timerText=`${this.timerMinutes}:00`),this.playerOneVP=0,this.playerOneSP=0,this.playerTwoVP=0,this.playerTwoSP=0,this.roundNumber=1)},updateTimer(){if("off"===this.timerMode)return this.toggleTimer();if(this.timerRunning&&(this.timerRemaining=this.timerEnd-Date.now()),"normal"===this.timerState){this.timerRemaining<=0&&(this.timerRandom?this.timerState="extra":this.timerState="expired");let e=Math.floor(this.timerRemaining/6e4),t=Math.floor((this.timerRemaining-60*e*1e3)/1e3);this.timerText=`${e}:${String(t).padStart(2,"0")}`}if("extra"===this.timerState){let e=-1*this.timerRemaining;e>=6e4*this.timerExtra&&(this.timerState="expired");let t=Math.floor(e/6e4),i=Math.floor((e-60*t*1e3)/1e3);this.timerText=`+${t}:${String(i).padStart(2,"0")}`}"expired"===this.timerState&&(this.timerRunning=!1,clearInterval(this.timer),this.timerText="TIME!")},randomizeTimer(){this.timerExtra=3;let e=1;1===this.getRandomInt(2)&&(e=-1);for(let t=0;t<3;t++)this.getRandomInt(8)>=3&&(this.timerExtra+=e)},getRandomInt(e){return Math.floor(Math.random()*e)},scoreStyle(e){return!this.scoreSplit&&"single"===e||this.scoreSplit&&"split"===e?"bg-blue-400 text-black":""},timerModeStyle(e){return this.timerMode===e?"bg-blue-400 text-black":""}}},Ie=i(89);const Ne=(0,Ie.Z)(ze,[["render",Ve]]);var Ee=Ne,De={name:"App",components:{GameState:Ee}};const Fe=(0,Ie.Z)(De,[["render",o]]);var qe=Fe,Be=i(5431);(0,Be.z)("/gamestate/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,l.ri)(qe).mount("#app")}},t={};function i(l){var r=t[l];if(void 0!==r)return r.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,l,r,o){if(!l){var n=1/0;for(d=0;d<e.length;d++){l=e[d][0],r=e[d][1],o=e[d][2];for(var s=!0,a=0;a<l.length;a++)(!1&o||n>=o)&&Object.keys(i.O).every((function(e){return i.O[e](l[a])}))?l.splice(a--,1):(s=!1,o<n&&(n=o));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,r,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var l in t)i.o(t,l)&&!i.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,o,n=l[0],s=l[1],a=l[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(a)var d=a(i)}for(t&&t(l);c<n.length;c++)o=n[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},l=self["webpackChunkxwing_gamestate"]=self["webpackChunkxwing_gamestate"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=i.O(void 0,[998],(function(){return i(3033)}));l=i.O(l)})();
//# sourceMappingURL=app.89ece751.js.map