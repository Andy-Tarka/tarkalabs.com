(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"41ff":function(e,t,n){},"4iU1":function(e,t,n){"use strict";var r=n("950E"),i=n.n(r),o={mounted(){setTimeout(()=>{this.setAnimationHeight(),this.initTypeWriting()},100)},props:["text"],methods:{setAnimationHeight(){let e=this.$el,t=this.$el.querySelector(".placeholder");e.style.height=t.offsetHeight+"px"},initTypeWriting(){let e=this.$el.querySelector(".anim");new i.a(e,{strings:this.text,cursor:"_",delay:25,autoStart:!0})}}},a=(n("VKM1"),n("KHd+")),s=Object(a.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"container"},[e("h1",{staticClass:"placeholder"},[this._v(this._s(this.text))]),e("h1",{staticClass:"anim"})])}),[],!1,null,"46a5b38c",null);t.a=s.exports},"4wXL":function(e,t,n){"use strict";n("Qu6W")},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,u=[],c=!1,d=-1;function p(){c&&l&&(c=!1,l.length?u=l.concat(u):d=-1,u.length&&h())}function h(){if(!c){var e=s(p);c=!0;for(var t=u.length;t;){for(l=u,u=[];++d<t;)l&&l[d].run();d=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||c||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"950E":function(e,t,n){(function(t){var n;"undefined"!=typeof self&&self,n=()=>(()=>{var e={75:function(e){(function(){var n,r,i,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),i="undefined"==typeof window?n.g:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],l=i["cancel"+a]||i["cancelRequest"+a],u=0;!s&&u<o.length;u++)s=i[o[u]+"Request"+a],l=i[o[u]+"Cancel"+a]||i[o[u]+"CancelRequest"+a];if(!s||!l){var c=0,d=0,p=[];s=function(e){if(0===p.length){var t=r(),n=Math.max(0,16.666666666666668-(t-c));c=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){l.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";r.d(i,{default:()=>k});var e=r(4087),t=r.n(e);const n=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},o=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var s="TYPE_CHARACTER",l="REMOVE_CHARACTER",u="REMOVE_ALL",c="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",p="CALL_FUNCTION",h="ADD_HTML_TAG_ELEMENT",f="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",v="CHANGE_CURSOR",g="PASTE_STRING",b="HTML_TAG";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const k=function(){function r(i,y){var T=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),E(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),E(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),E(this,"setupWrapperElement",(function(){T.state.elements.container&&(T.state.elements.wrapper.className=T.options.wrapperClassName,T.state.elements.cursor.className=T.options.cursorClassName,T.state.elements.cursor.innerHTML=T.options.cursor,T.state.elements.container.innerHTML="",T.state.elements.container.appendChild(T.state.elements.wrapper),T.state.elements.container.appendChild(T.state.elements.cursor))})),E(this,"start",(function(){return T.state.eventLoopPaused=!1,T.runEventLoop(),T})),E(this,"pause",(function(){return T.state.eventLoopPaused=!0,T})),E(this,"stop",(function(){return T.state.eventLoop&&((0,e.cancel)(T.state.eventLoop),T.state.eventLoop=null),T})),E(this,"pauseFor",(function(e){return T.addEventToQueue(d,{ms:e}),T})),E(this,"typeOutAllStrings",(function(){return"string"==typeof T.options.strings?(T.typeString(T.options.strings).pauseFor(T.options.pauseFor),T):(T.options.strings.forEach((function(e){T.typeString(e).pauseFor(T.options.pauseFor).deleteAll(T.options.deleteSpeed)})),T)})),E(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n(e))return T.typeOutHTMLString(e,t);if(e){var r=T.options||{},i=r.stringSplitter,o="function"==typeof i?i(e):e.split("");T.typeCharacters(o,t)}return T})),E(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n(e)?T.typeOutHTMLString(e,t,!0):(e&&T.addEventToQueue(g,{character:e,node:t}),T)})),E(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=o(e);if(r.length>0)for(var i=0;i<r.length;i++){var a=r[i],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",T.addEventToQueue(h,{node:a,parentNode:t}),n?T.pasteString(s,a):T.typeString(s,a)):a.textContent&&(n?T.pasteString(a.textContent,t):T.typeString(a.textContent,t))}return T})),E(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return T.addEventToQueue(u,{speed:e}),T})),E(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return T.addEventToQueue(f,{speed:e}),T})),E(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return T.addEventToQueue(m,{delay:e}),T})),E(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return T.addEventToQueue(v,{cursor:e}),T})),E(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)T.addEventToQueue(l);return T})),E(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return T.addEventToQueue(p,{cb:e,thisArg:t}),T})),E(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){T.addEventToQueue(s,{character:e,node:t})})),T})),E(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){T.addEventToQueue(l)})),T})),E(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return T.addEventToStateProperty(e,t,n,"eventQueue")})),E(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=T.options.loop;return r?T.addEventToStateProperty(e,t,n,"reverseCalledEvents"):T})),E(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i={eventName:e,eventArgs:t||{}};return T.state[r]=n?[i].concat(_(T.state[r])):[].concat(_(T.state[r]),[i]),T})),E(this,"runEventLoop",(function(){T.state.lastFrameTime||(T.state.lastFrameTime=Date.now());var e=Date.now(),n=e-T.state.lastFrameTime;if(!T.state.eventQueue.length){if(!T.options.loop)return;T.state.eventQueue=_(T.state.calledEvents),T.state.calledEvents=[],T.options=w({},T.state.initialOptions)}if(T.state.eventLoop=t()(T.runEventLoop),!T.state.eventLoopPaused){if(T.state.pauseUntil){if(e<T.state.pauseUntil)return;T.state.pauseUntil=null}var r,i=_(T.state.eventQueue),o=i.shift();if(!(n<=(r=o.eventName===c||o.eventName===l?"natural"===T.options.deleteSpeed?a(40,80):T.options.deleteSpeed:"natural"===T.options.delay?a(120,160):T.options.delay))){var y=o.eventName,E=o.eventArgs;switch(T.logInDevMode({currentEvent:o,state:T.state,delay:r}),y){case g:case s:var k=E.character,C=E.node,A=document.createTextNode(k),S=A;T.options.onCreateTextNode&&"function"==typeof T.options.onCreateTextNode&&(S=T.options.onCreateTextNode(k,A)),S&&(C?C.appendChild(S):T.state.elements.wrapper.appendChild(S)),T.state.visibleNodes=[].concat(_(T.state.visibleNodes),[{type:"TEXT_NODE",character:k,node:S}]);break;case l:i.unshift({eventName:c,eventArgs:{removingCharacterNode:!0}});break;case d:var O=o.eventArgs.ms;T.state.pauseUntil=Date.now()+parseInt(O);break;case p:var x=o.eventArgs,L=x.cb,D=x.thisArg;L.call(D,{elements:T.state.elements});break;case h:var N=o.eventArgs,j=N.node,M=N.parentNode;M?M.appendChild(j):T.state.elements.wrapper.appendChild(j),T.state.visibleNodes=[].concat(_(T.state.visibleNodes),[{type:b,node:j,parentNode:M||T.state.elements.wrapper}]);break;case u:var P=T.state.visibleNodes,H=E.speed,R=[];H&&R.push({eventName:f,eventArgs:{speed:H,temp:!0}});for(var F=0,B=P.length;F<B;F++)R.push({eventName:c,eventArgs:{removingCharacterNode:!1}});H&&R.push({eventName:f,eventArgs:{speed:T.options.deleteSpeed,temp:!0}}),i.unshift.apply(i,R);break;case c:var W=o.eventArgs.removingCharacterNode;if(T.state.visibleNodes.length){var Q=T.state.visibleNodes.pop(),U=Q.type,G=Q.node,I=Q.character;T.options.onRemoveNode&&"function"==typeof T.options.onRemoveNode&&T.options.onRemoveNode({node:G,character:I}),G&&G.parentNode.removeChild(G),U===b&&W&&i.unshift({eventName:c,eventArgs:{}})}break;case f:T.options.deleteSpeed=o.eventArgs.speed;break;case m:T.options.delay=o.eventArgs.delay;break;case v:T.options.cursor=o.eventArgs.cursor,T.state.elements.cursor.innerHTML=o.eventArgs.cursor}T.options.loop&&(o.eventName===c||o.eventArgs&&o.eventArgs.temp||(T.state.calledEvents=[].concat(_(T.state.calledEvents),[o]))),T.state.eventQueue=i,T.state.lastFrameTime=e}}})),i)if("string"==typeof i){var k=document.querySelector(i);if(!k)throw new Error("Could not find container element");this.state.elements.container=k}else this.state.elements.container=i;y&&(this.options=w(w({},this.options),y)),this.state.initialOptions=w({},this.options),this.init()}var i,y;return i=r,(y=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(v,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(i.prototype,y),Object.defineProperty(i,"prototype",{writable:!1}),r}()})(),i.default})(),e.exports=n()}).call(this,n("8oxB"))},"9Wwj":function(e,t,n){"use strict";n("LK2n")},CMkJ:function(e,t,n){"use strict";n("41ff")},"D/73":function(e,t,n){},Fes1:function(e,t,n){},KDsz:function(e,t,n){},LK2n:function(e,t,n){},"O+9R":function(e,t,n){},Qfdy:function(e,t,n){"use strict";n("azaL")},Qu6W:function(e,t,n){},VKM1:function(e,t,n){"use strict";n("Fes1")},VeYZ:function(e,t,n){"use strict";n("KDsz")},Xt0s:function(e,t,n){"use strict";n("O+9R")},Xvwt:function(e,t,n){"use strict";n.r(t);var r=n("4iU1"),i=n("OlP7"),o=n("kGzD"),a={props:["heading","type"],computed:{blurbs(){return this.$static.allBlurbs.edges.filter(e=>e.node.type===this.type)}}},s=(n("4wXL"),n("KHd+")),l=n("Kw5r");const{computed:u}=l.a.config.optionMergeStrategies,c={allBlurbs:{edges:[{node:{type:"principle",heading:"Product Mindset > Project Mindset",description:"Meaningful software needs outcome-driven teams over resource management."}},{node:{type:"principle",heading:"Strategic Consulting & Planning",description:"Our big-picture strategists are adept at both business and technology."}},{node:{type:"principle",heading:"Trusted Development Partners",description:"Over the years, we’ve solved complex problems for 40+ clients across the globe."}},{node:{type:"perks",heading:"Work from anywhere ⛱️",description:"From your favorite coffee shop to a shack by the beach, work from anywhere in the world."}},{node:{type:"perks",heading:"Enjoy unlimited breaks 🕺",description:"Autonomy and accountability rest on every individual, so we don’t do count your days off."}},{node:{type:"perks",heading:"We ❤️ side projects!",description:"We believe that all learning is essential, and operate with complete trust and transparency."}},{node:{type:"perks",heading:"Build your own brand (BYOB) ⛄️",description:"Tarka Labs is a catalyst for self discovery. We’ll help you nurture and own your ideas and content."}}]}};var d=({options:e})=>{e.__staticData?e.__staticData.data=c:(e.__staticData=l.a.observable({data:c}),e.computed=u({$static:()=>e.__staticData.data},e.computed))},p=Object(s.a)(a,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.heading))]),e._l(e.blurbs,(function(n){return t("div",{key:n.heading},[t("h2",[e._v(e._s(n.node.heading))]),t("span",[e._v(e._s(n.node.description))])])}))],2)}),[],!1,null,"04d589ac",null);"function"==typeof d&&d(p);var h=p.exports,f=n("bael"),m=n("Y1Gp"),v=n("XeZi"),g={props:["profile"]},b=(n("9Wwj"),Object(s.a)(g,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile"},[t("div",{staticClass:"profile-left"},[t("div",{staticClass:"heading-size-6"},[e._v("\n      "+e._s(e.profile.heading)+"\n    ")]),t("div",{staticClass:"body-opensans-size-10 desc"},[e._v("\n      "+e._s(e.profile.description)+"\n    ")])]),t("div",{staticClass:"profile-right"},[t("div",{staticClass:"action-container"},[t("ul",e._l(e.profile.qualities,(function(n,r){return t("li",{key:r,staticClass:"heading-size-10 quality"},[e._v("\n          _"+e._s(n)+"\n        ")])})),0),t("div",{staticClass:"heading-size-10 opening-type"},[e._v(e._s(e.profile.type))])]),t("a",{staticClass:"heading-size-9 action-button",attrs:{href:"/career/"+e.profile.slug}},[e._v("\n      Apply now\n      "),t("span",[e._v("->")])])])])}),[],!1,null,"ece08f56",null).exports),y={components:{TypingHeader:r.a,BulletBlurb:h,Blogs:f.a,HeroVideo:m.a,Team:v.a,JobCard:b},computed:{careers(){return Object(i.a)(this.$static.allCareers.edges.filter(({node:e})=>e.enable))}},metaInfo:()=>Object(o.a)("/careers")};n("Xt0s");const{computed:w}=l.a.config.optionMergeStrategies,_={allCareers:{edges:[{node:{slug:"developer",name:"Developer",enable:!0,description:"Love crafting intelligent solutions for complex technical problems? Join our agile team to build meaningful software - doesn’t matter if you’re senior, junior or an inbetweener!",qualities:["Full Stack","T-Shaped Skills","Open to explore new tech","Worked in small agile teams","Consultant Mindset","Prefers flat hierarchy"],type:"Full-time (Remote)"}},{node:{slug:"mobile_developer",name:"Mobile Developer",enable:!1,description:"If you’re a whiz at all things iOS or Android (brownie points for both!), we’re looking for you. Grab your coffee, and let’s build something great together.",qualities:["iOS / Android Development","Eye for design","T-Shaped Skills","Open to explore new tech","Worked in small agile teams","Consultant Mindset","Prefers flat hierarchy"],type:"Full-time (Remote)"}},{node:{slug:"ui_ux_designer",name:"UI/UX Designer",enable:!0,description:"Are you adept at handcrafting immersive experiences, backed by behavioural science and a human touch? We’d love to talk to you!",qualities:["Open to learning new tools","Great communication skills","Visual Language"],type:"Full-time (Remote)"}},{node:{slug:"product_owner",name:"Product Owner",enable:!0,description:"Join us to breathe life into meaningful products, and turn our ideas to super functional MVPs. If case studies on a lazy afternoon are your kinda thing, let’s talk!",qualities:["Built product(s) before","Worked in agile teams","Explorer","Great communication skills","Understands how software gets built"],type:"Full-time (Remote)"}}]}};var T=({options:e})=>{e.__staticData?e.__staticData.data=_:(e.__staticData=l.a.observable({data:_}),e.computed=w({$static:()=>e.__staticData.data},e.computed))},E=Object(s.a)(y,(function(){var e=this._self._c;return e("layout",[e("div",[e("div",[e("TypingHeader",{attrs:{text:"We’re out to build the workplace of the future."}})],1),e("div",{staticClass:"pitch"},[this._v("\n      Our work culture is remote-first and democratic by design. We’re a\n      collective united by loosely held strong opinions, and a passion for\n      learning and lively debates.\n    ")]),e("div",{staticClass:"open-roles"},[e("a",{staticClass:"heading-size-8",attrs:{href:"#openings"}},[this._v("Open roles ↓")])]),e("BulletBlurb",{attrs:{heading:"A slice of life, @tarka",type:"perks"}}),e("div",{staticClass:"openings",attrs:{id:"openings"}},this._l(this.careers,(function(t){return e("JobCard",{key:t.slug,attrs:{profile:t}})})),1),e("div",{staticClass:"hero-video-container"},[e("HeroVideo",{attrs:{thumbnailUrl:"https://i.ytimg.com/vi/8-bm3GB8sE8/maxresdefault.jpg",url:"https://www.youtube.com/embed/8-bm3GB8sE8",title:"Meet The Tarkans | Tarka Labs Retreat 2022 | The Pondy Files"}})],1)],1),e("Blogs",{attrs:{tags:["careers"],count:"4"}}),e("Team",{attrs:{roles:["Designer","Developer"],count:"4",random:"true"}})],1)}),[],!1,null,"23acae1e",null);"function"==typeof T&&T(E);t.default=E.exports},Y1Gp:function(e,t,n){"use strict";var r={props:["thumbnailUrl","url","title"],components:{Modal:n("cUuu").a},data:()=>({modalVisible:!1}),methods:{play(){this.modalVisible=!0},close(){this.modalVisible=!1}}},i=(n("Ylut"),n("KHd+")),o=Object(i.a)(r,(function(){var e=this._self._c;return e("div",[e("div",{staticClass:"video-container",on:{click:this.play}},[e("img",{attrs:{src:this.thumbnailUrl,alt:this.title}}),this._m(0)]),e("Modal",{attrs:{show:this.modalVisible,"close-handler":this.close}},[e("iframe",{attrs:{width:"100%",height:"100%",src:this.url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"play-button heading-size-9"},[e("span",[this._v("|>")]),this._v(" Play")])}],!1,null,"2ffd2d11",null);t.a=o.exports},Ylut:function(e,t,n){"use strict";n("D/73")},"Z+J/":function(e,t,n){},azaL:function(e,t,n){},bael:function(e,t,n){"use strict";var r={props:["blog"]},i=(n("CMkJ"),n("KHd+")),o={props:["tags","count"],components:{BlogTile:Object(i.a)(r,(function(){var e=this,t=e._self._c;return t("a",{staticClass:"blog",attrs:{href:e.blog.url,target:"_blank",rel:"noopener"}},[t("div",[t("div",{staticClass:"duration"},[e._v(e._s(e.blog.duration))]),t("g-image",{attrs:{src:n("jvud")("./"+e.blog.thumbnail),alt:e.blog.thumbnail_alt}}),t("div",{staticClass:"title"},[e._v(e._s(e.blog.title))]),t("div",{staticClass:"desc"},[e._v(e._s(e.blog.description))])],1)])}),[],!1,null,"187d3000",null).exports},methods:{blogs(){let e=this.$static.allBlogs.edges;return this.tags&&this.tags.length?e.filter(e=>this.tags.includes(e.node.tag)):e}}},a=(n("VeYZ"),n("Kw5r"));const{computed:s}=a.a.config.optionMergeStrategies,l={allBlogs:{edges:[{node:{tag:"web",title:"Javascript Sandbox for your Node Project",duration:"3 min read",thumbnail:"js-sandbox.png",thumbnail_alt:"Sandbox with a pail and shovel",description:"Guide to safely run customer javascript code in your node.js environment using vm2.",url:"https://medium.com/tarkalabs/javascript-sandbox-for-your-node-project-e1085a4175f3"}},{node:{tag:"web",title:"Power of SSH Tunneling",duration:"4 min read",thumbnail:"ssh-tunnel.png",thumbnail_alt:"Silhouette of a man standing inside a glowing blue tunnel with a glowing white circle in front of him",description:"Most developers spend a considerable amount of their time ssh'd into remote machines, however, few are aware of the power of ssh tunnels.",url:"https://medium.com/tarkalabs/power-of-ssh-tunneling-cf82bc56da67"}},{node:{tag:"web",title:"Know Kubernetes - Pictorially",duration:"7 min read",thumbnail:"k8s-pictorially.png",thumbnail_alt:"Black and white sketch of a square room labelled 'MASTER' with the following items: disk pack, chest of drawers with a wifi signal-emitting device on top, and two tables",description:"Understand kubernetes and its components with easily relatable pictorial representations.",url:"https://medium.com/tarkalabs/know-kubernetes-pictorially-f6e6a0052dd0"}},{node:{tag:"mobile",title:"Why flutter",duration:"5 min read",thumbnail:"flutter.png",thumbnail_alt:"A hummingbird in flight",description:"Look beyond react native and why flutter is exciting.",url:"https://medium.com/tarkalabs/my-thoughts-on-flutter-10d0922d35da"}},{node:{tag:"mobile",title:"Debounce in Swift",duration:"5 min read",thumbnail:"debounce.png",thumbnail_alt:"A representation of a function called 'debounce' which is accepting, as input, a green circle labelled '3' and outputting an identical-looking green circle with no label",description:"All about debounce: 4 ways to achieve debounce in Swift",url:"https://medium.com/tarkalabs/all-about-debounce-4-ways-to-achieve-debounce-in-swift-e8f8ce22f544"}},{node:{tag:"careers",title:"Our Guide To Hiring Great People",duration:"5 min read",thumbnail:"hire-great-people.png",thumbnail_alt:"Colors in geometric shapes with hand-drawn sketches on them",description:"How Tarka Labs approaches hiring.",url:"https://blog.tarkalabs.com/our-guide-to-hiring-great-people-f6e3438883"}},{node:{tag:"careers",title:"Wait! Don't write code yet. Do this instead.",duration:"3 min read",thumbnail:"write-code.png",thumbnail_alt:"A challenging maze within a three-dimensional cube",description:"Relating coding problems to the real world makes it easier to discover a solution.",url:"https://blog.tarkalabs.com/wait-dont-write-code-yet-do-this-instead-33b586250b03"}},{node:{tag:"careers",title:"A writer's guide to working in a tech consultancy",duration:"4 min read",thumbnail:"writers-guide.png",thumbnail_alt:"A circular red shape surrounded by cubes",description:"A manual for writers who work with cross-functional teams or roles.",url:"https://blog.tarkalabs.com/a-writers-guide-to-working-in-a-tech-consultancy-72f13bd64fdb"}},{node:{tag:"careers",title:"How we hire engineers",duration:"3 min read",thumbnail:"hire-engg.png",thumbnail_alt:"A dark room with two empty chairs facing each other across a table",description:"How Tarka Labs hires engineers. Published in the interest of transparency.",url:"https://blog.tarkalabs.com/how-we-hire-engineers-b7bdfaddb393"}},{node:{tag:"careers",title:"All in one's mind.",duration:"4 min read",thumbnail:"mindset.png",thumbnail_alt:"A growing plant is layered over the artwork of a human brain",description:"The effectiveness of a positive mindset and the ability to self-assess.",url:"https://blog.tarkalabs.com/all-in-ones-mind-f3d682d15e8f"}}]}};var u=({options:e})=>{e.__staticData?e.__staticData.data=l:(e.__staticData=a.a.observable({data:l}),e.computed=s({$static:()=>e.__staticData.data},e.computed))},c=Object(i.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"blog-container"},[t("h3",[e._v("_blog")]),t("div",{staticClass:"blogs"},[e._l(e.blogs(),(function(n,r){return[e.count&&r<e.count?t("BlogTile",{key:r,attrs:{blog:n.node}}):e._e()]}))],2),e._m(0)])}),[function(){var e=this._self._c;return e("div",{staticClass:"more heading-size-9"},[this._v("\n    /\n    "),e("a",{attrs:{href:"https://medium.com/tarkalabs",target:"_blank",rel:"noopener"}},[this._v("more "),e("br"),this._v("\n      reads")])])}],!1,null,"79ae2bbc",null);"function"==typeof u&&u(c);t.a=c.exports},cUuu:function(e,t,n){"use strict";n("nGR4");var r=n("KHd+"),i=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"lds-ripple"},[e("div"),e("div")])}],!1,null,"53a0f396",null).exports,o={data:()=>({hover:!1}),methods:{rotateSymbol(){this.hover=!this.hover}}},a=(n("Qfdy"),{props:["show","closeHandler","vimeo"],data:()=>({visible:!0}),components:{Loading:i,CloseIcon:Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"close",on:{click:function(t){return e.$emit("closeIconClick")},mouseenter:function(t){return e.rotateSymbol()},mouseleave:function(t){return e.rotateSymbol()}}},[t("div",{staticClass:"close-border"},[t("span",{class:["symbol",{rotateCW:!e.hover,rotateCCW:e.hover}]},[t("svg",{attrs:{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z",fill:"#000005"}})])])])])}),[],!1,null,"0956bbb0",null).exports},methods:{async hide(){this.toggle(),window.setTimeout(this.closeHandler,400),window.setTimeout(this.toggle,400)},toggle(){this.visible=!this.visible}}}),s=(n("gPGZ"),Object(r.a)(a,(function(){var e=this,t=e._self._c;return e.show?t("div",{class:["backdrop",{"fade-out":!e.visible},{"fade-in":e.visible}]},[t("div",{class:["content",{"move-down":!e.visible},{"move-up":e.visible},{vimeo:e.vimeo}]},[t("div",{staticClass:"loading"},[e.vimeo?t("Loading"):e._e()],1),t("CloseIcon",{staticClass:"close",on:{closeIconClick:function(t){return e.hide()}}}),e._t("default")],2)]):e._e()}),[],!1,null,"bf45840c",null));t.a=s.exports},gPGZ:function(e,t,n){"use strict";n("Z+J/")},idBc:function(e,t,n){},jvud:function(e,t,n){var r={"./cto.svg":"LLdY","./debounce.png":"VC2E","./flutter.png":"x/7T","./hire-engg.png":"W2v4","./hire-great-people.png":"Eizc","./js-sandbox.png":"p/CE","./k8s-pictorially.png":"dnIM","./mindset.png":"Ew+2","./ssh-tunnel.png":"cCZu","./write-code.png":"i3eP","./writers-guide.png":"YvH8"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="jvud"},nGR4:function(e,t,n){"use strict";n("idBc")}}]);