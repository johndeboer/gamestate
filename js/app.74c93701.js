(function(){"use strict";var e={4666:function(e,t,n){var i=n(9242),s=n(3396);function r(e,t,n,i,r,l){const o=(0,s.up)("GameState");return(0,s.wg)(),(0,s.j4)(o)}var l=n(7139);const o={id:"app"},a={class:"grid grid-rows-4 grid-cols-9 sticky top-0 border-b-4 border-slate-500 select-none"},d={class:"row-span-2"},c={class:"bg-slate-100 row-span-3 col-span-2 text-center font-mono text-5xl p-4"},p={class:""},u=(0,s._)("i",{class:"fas fa-refresh"},null,-1),h=[u],m={class:"bg-slate-100 row-span-3 col-span-2 text-center font-mono text-5xl p-4"},f={class:"row-span-2"},g={class:"row-span-2"},b={class:"row-span-2"},w={class:"text-center font-mono text-sm bg-slate-300 p-1"},y={class:"text-center font-mono text-sm bg-slate-200 p-1"},v={class:""},_={class:"text-center font-mono bg-slate-100"},k={class:""},S={class:"text-center font-mono text-sm bg-slate-200 p-1"},x={class:"text-center font-mono text-sm bg-slate-300 p-1"},O={class:"grid grid-cols-2 select-none mb-10"},P=["onClick"],T={class:""},C={class:"float-right"},z=["onClick"],R={class:""},A={class:"float-right"},V={class:"fixed bottom-0 w-full text-center"},D={class:"text-center select-none"},L={class:"rounded-none border-2 border-slate-400 m-2 p-4"},G=["onClick"],F=(0,s._)("i",{class:"fas fa-trash"},null,-1),j=[F],N={class:"float-right mr-10"},I={key:0,class:"rounded-none border-2 border-slate-500 m-2 p-4"},U=(0,s._)("i",{class:"fa fa-cancel"},null,-1),E=[U],M=(0,s._)("i",{class:"fa fa-check"},null,-1),q=[M],B={class:"mt-20"},H={class:"rounded-none border-2 border-slate-400 m-2 p-4"},K=["onClick"],Y=(0,s._)("i",{class:"fas fa-trash"},null,-1),Z=[Y],J={class:"float-right mr-10"},Q={key:2,class:"rounded-none border-2 border-slate-500 m-2 p-4"},W=(0,s._)("i",{class:"fa fa-cancel"},null,-1),X=[W],$=(0,s._)("i",{class:"fa fa-check"},null,-1),ee=[$];function te(e,t,n,r,u,F){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.wy)((0,s._)("div",null,[(0,s._)("div",a,[(0,s._)("div",d,[(0,s._)("button",{class:"bg-emerald-300 rounded-none w-full h-full",onClick:t[0]||(t[0]=e=>u.playerOneVP++)},"+")]),(0,s._)("div",c,(0,l.zw)(F.playerOneScore),1),(0,s._)("div",{class:(0,l.C_)(["text-slate-50 row-span-3 col-span-3 text-center font-mono text-4xl p-5",F.timerStyle])},[(0,s._)("div",p,[(0,s.Uk)((0,l.zw)(u.timerText)+" ",1),(0,s._)("div",{class:"float-right text-slate-200",onClick:t[1]||(t[1]=e=>F.toggleTimer())},[(0,s._)("i",{class:(0,l.C_)(["fas",F.timerIcon])},null,2)]),(0,s._)("div",{class:"float-left text-slate-200",onClick:t[2]||(t[2]=e=>F.resetTimer())},h)])],2),(0,s._)("div",m,(0,l.zw)(F.playerTwoScore),1),(0,s._)("div",f,[(0,s._)("button",{class:"rounded-none w-full h-full bg-emerald-300",onClick:t[3]||(t[3]=e=>u.playerTwoVP++)},"+")]),(0,s._)("div",g,[(0,s._)("button",{class:"rounded-none w-full h-full bg-rose-300",onClick:t[4]||(t[4]=e=>u.playerOneVP>0?u.playerOneVP--:0)},"-")]),(0,s._)("div",b,[(0,s._)("button",{class:"rounded-none w-full h-full bg-rose-300",onClick:t[5]||(t[5]=e=>u.playerTwoVP>0?u.playerTwoVP--:0)},"-")]),(0,s._)("div",w,"OP: "+(0,l.zw)(u.playerOneVP),1),(0,s._)("div",y,"SP: "+(0,l.zw)(F.playerOneSP),1),(0,s._)("div",v,[(0,s._)("button",{class:"bg-rose-300 rounded-none w-full h-full",onClick:t[6]||(t[6]=e=>u.roundNumber>1?u.roundNumber--:0)},"-")]),(0,s._)("div",_,"Round "+(0,l.zw)(u.roundNumber),1),(0,s._)("div",k,[(0,s._)("button",{class:"bg-emerald-300 rounded-none w-full h-full",onClick:t[7]||(t[7]=e=>u.roundNumber++)},"+")]),(0,s._)("div",S,"SP: "+(0,l.zw)(F.playerTwoSP),1),(0,s._)("div",x,"OP: "+(0,l.zw)(u.playerTwoVP),1)]),(0,s._)("div",O,[(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(F.playerOneList,(e=>((0,s.wg)(),(0,s.iD)("ul",{key:e.id},[(0,s._)("li",{class:(0,l.C_)(["rounded-none border-2 border-slate-400 m-2 p-4",F.shipStateClass(e)]),onClick:t=>F.cycleShipState(e)},[(0,s._)("div",T,[(0,s.Uk)((0,l.zw)(e.name)+" ",1),(0,s._)("div",C,(0,l.zw)(e.points)+"/"+(0,l.zw)(Math.floor(e.points/2)),1)])],10,P)])))),128))]),(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(F.playerTwoList,(e=>((0,s.wg)(),(0,s.iD)("ul",{key:e.id},[(0,s._)("li",{class:(0,l.C_)(["rounded-none border-2 border-slate-400 m-2 p-4",F.shipStateClass(e)]),onClick:t=>F.cycleShipState(e)},[(0,s._)("div",R,[(0,s.Uk)((0,l.zw)(e.name)+" ",1),(0,s._)("div",A,(0,l.zw)(e.points)+"/"+(0,l.zw)(Math.floor(e.points/2)),1)])],10,z)])))),128))])]),(0,s._)("div",V,[(0,s._)("div",{class:"rounded-none bg-rose-300 p-2",onClick:t[8]||(t[8]=e=>F.endGame())},"End Game")])],512),[[i.F8,u.stateGame]]),(0,s.wy)((0,s._)("div",null,[(0,s._)("div",D,[(0,s._)("h3",null,"Player One: "+(0,l.zw)(F.playerOneListPoints),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(F.playerOneList,(e=>((0,s.wg)(),(0,s.iD)("ul",{key:e.id},[(0,s._)("li",L,[(0,s.Uk)((0,l.zw)(e.name)+" ",1),(0,s._)("div",{class:"float-right",onClick:t=>F.deleteShip(e)},j,8,G),(0,s._)("div",N,(0,l.zw)(e.points),1)])])))),128)),u.stateAddingFirst?((0,s.wg)(),(0,s.iD)("div",I,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>u.ship.name=e),class:"p-3 border-2 border-slate-300 w-60",placeholder:"Pilot Name"},null,512),[[i.nr,u.ship.name]]),(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":t[10]||(t[10]=e=>u.ship.points=e),class:"p-3 border-2 border-slate-300 w-30",placeholder:"Points"},null,512),[[i.nr,u.ship.points]]),(0,s._)("button",{class:"border-2 border-red-300 bg-red-100 p-3",onClick:t[11]||(t[11]=e=>u.stateAddingFirst=!1)},E),(0,s._)("button",{class:"border-2 border-green-300 bg-green-100 p-3",onClick:t[12]||(t[12]=e=>F.addShip(1))},q)])):(0,s.kq)("",!0),u.stateAddingFirst?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",{key:1,class:"rounded-none border-2 border-green-500 bg-green-200 m-2 p-4",onClick:t[13]||(t[13]=e=>F.adding(1))},"Add Ship")),(0,s._)("h3",B,"Player Two: "+(0,l.zw)(F.playerTwoListPoints),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(F.playerTwoList,(e=>((0,s.wg)(),(0,s.iD)("ul",{key:e.id},[(0,s._)("li",H,[(0,s.Uk)((0,l.zw)(e.name)+" ",1),(0,s._)("div",{class:"float-right",onClick:t=>F.deleteShip(e)},Z,8,K),(0,s._)("div",J,(0,l.zw)(e.points),1)])])))),128)),u.stateAddingSecond?((0,s.wg)(),(0,s.iD)("div",Q,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[14]||(t[14]=e=>u.ship.name=e),class:"p-3 border-2 border-slate-300 w-60",placeholder:"Pilot Name"},null,512),[[i.nr,u.ship.name]]),(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":t[15]||(t[15]=e=>u.ship.points=e),class:"p-3 border-2 border-slate-300 w-30",placeholder:"Points"},null,512),[[i.nr,u.ship.points]]),(0,s._)("button",{class:"border-2 border-red-300 bg-red-100 p-3",onClick:t[16]||(t[16]=e=>u.stateAddingSecond=!1)},X),(0,s._)("button",{class:"border-2 border-green-300 bg-green-100 p-3",onClick:t[17]||(t[17]=e=>F.addShip(2))},ee)])):(0,s.kq)("",!0),u.stateAddingSecond?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",{key:3,class:"rounded-none border-2 border-green-500 bg-green-200 m-2 p-4",onClick:t[18]||(t[18]=e=>F.adding(2))},"Add Ship")),(0,s._)("div",{class:"rounded-none border-2 border-red-500 bg-red-200 m-2 p-4 mt-20",onClick:t[19]||(t[19]=e=>F.startGame())},"Start Game")])],512),[[i.F8,u.stateBuild]])])}var ne={setup(){},data(){return{ships:[],ship:{id:null,player:0,name:"",points:"",state:""},playerOneVP:0,playerTwoVP:0,roundNumber:1,timerRunning:!1,timerRemaining:45e5,timerEnd:null,timer:void 0,timeNow:null,timerText:"75:00",stateGame:!1,stateBuild:!0,stateAddingFirst:!1,stateAddingSecond:!1}},computed:{maxId(){let e=0;for(let t of this.ships)t.id>e&&(e=t.id);return e},playerOneScore(){return this.playerOneSP+this.playerOneVP},playerTwoScore(){return this.playerTwoSP+this.playerTwoVP},playerOneList(){return this.ships.filter((e=>1===e.player))},playerTwoList(){return this.ships.filter((e=>2===e.player))},playerOneSP(){let e=0;for(let t of this.playerTwoList)"destroyed"===t.state?e+=t.points:"half"===t.state&&(e+=Math.floor(t.points/2));return e},playerOneListPoints(){let e=0;for(let t of this.playerOneList)e+=t.points;return e},playerTwoListPoints(){let e=0;for(let t of this.playerTwoList)e+=t.points;return e},playerTwoSP(){let e=0;for(let t of this.playerOneList)"destroyed"===t.state?e+=t.points:"half"===t.state&&(e+=Math.floor(t.points/2));return e},timerIcon(){return this.timerRunning?"fa-pause":"fa-play"},timerStyle(){return this.timerRemaining>0?"bg-slate-500":"bg-red-500"}},methods:{cycleShipState(e){this.ship=Object.assign({},e),"full"===this.ship.state?this.ship.state="half":"half"===this.ship.state?this.ship.state="destroyed":this.ship.state="full";let t=this.ships.findIndex((e=>e.id===this.ship.id));this.ships.splice(t,1,this.ship)},shipStateClass(e){return"full"===e.state?"bg-slate-100":"half"===e.state?"bg-yellow-100":"bg-red-300"},deleteShip(e){if(this.ship=Object.assign({},e),confirm("Delete "+this.ship.name+"?")){let e=this.ships.findIndex((e=>e.id===this.ship.id));this.ships.splice(e,1)}},addShip(e){this.ship.id=this.maxId+1,this.ship.player=e,this.ship.state="full";let t=Object.assign({},this.ship);this.ships.push(t),this.stateAddingFirst=!1,this.stateAddingSecond=!1},adding(e){this.ship={id:null,player:0,name:"",points:"",state:""},1===e?(this.stateAddingFirst=!0,this.stateAddingSecond=!1):(this.stateAddingFirst=!1,this.stateAddingSecond=!0)},toggleTimer(){this.timerRunning=!this.timerRunning,this.timerRunning?(this.timerEnd=Date.now()+this.timerRemaining,this.timer=setInterval(this.updateTimer,500)):clearInterval(this.timer)},resetTimer(){confirm("Reset Timer?")&&(this.timerRunning=!1,clearInterval(this.timer),this.timerRemaining=45e5,this.timerText="75:00")},updateTimer(){this.timerRunning&&(this.timerRemaining=this.timerEnd-Date.now()),this.timerRemaining<=0&&(this.timerRemaining=0,this.timerRunning=!1);let e=Math.floor(this.timerRemaining/6e4),t=Math.floor((this.timerRemaining-60*e*1e3)/1e3);this.timerText=e+":"+String(t).padStart(2,"0")},endGame(){if(confirm("End Game?")){clearInterval(this.timer),this.stateGame=!1,this.stateBuild=!0,this.timerRunning&&this.toggleTimer(),this.timerRemaining=45e5,this.playerOneVP=0,this.playerTwoVP=0;for(let e of this.ships)e.state="full";this.timerText="75:00",screen.orientation.unlock()}},startGame(){this.stateGame=!0,this.stateBuild=!1,screen.orientation.lock("landscape")}}},ie=n(89);const se=(0,ie.Z)(ne,[["render",te]]);var re=se,le={name:"App",components:{GameState:re}};const oe=(0,ie.Z)(le,[["render",r]]);var ae=oe,de=n(5431);(0,de.z)("/gamestate/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,i.ri)(ae).mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,r){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],r=e[c][2];for(var o=!0,a=0;a<i.length;a++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(o=!1,r<l&&(l=r));if(o){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,l=i[0],o=i[1],a=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(a)var c=a(n)}for(t&&t(i);d<l.length;d++)r=l[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},i=self["webpackChunkxwing_gamestate"]=self["webpackChunkxwing_gamestate"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4666)}));i=n.O(i)})();
//# sourceMappingURL=app.74c93701.js.map