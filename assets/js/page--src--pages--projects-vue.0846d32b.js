(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/m/M":function(e,t,n){},"4iU1":function(e,t,n){"use strict";n("R5XZ");var r=n("950E"),i=n.n(r),o={mounted:function(){var e=this;setTimeout((function(){e.setAnimationHeight(),e.initTypeWriting()}),100)},props:["text"],methods:{setAnimationHeight:function(){var e=this.$el,t=this.$el.querySelector(".placeholder");e.style.height="".concat(t.offsetHeight,"px")},initTypeWriting:function(){var e=this.$el.querySelector(".anim");new i.a(e,{strings:this.text,cursor:"_",delay:25,autoStart:!0})}}},a=(n("Y0lS"),n("KHd+")),s=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",{staticClass:"placeholder"},[this._v(this._s(this.text))]),t("h1",{staticClass:"anim"})])}),[],!1,null,"6933a3f5",null);t.a=s.exports},"950E":function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,function(e,t,n){(function(t){for(var r=n(11),i="undefined"==typeof window?t:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],c=i["cancel"+a]||i["cancelRequest"+a],l=0;!s&&l<o.length;l++)s=i[o[l]+"Request"+a],c=i[o[l]+"Cancel"+a]||i[o[l]+"CancelRequest"+a];if(!s||!c){var u=0,d=0,p=[];s=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++d,callback:e,cancelled:!1}),d},c=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}}).call(this,n(4))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(1),i=n.n(r),o=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},a=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},c="TYPE_CHARACTER",l="REMOVE_CHARACTER",u="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",f="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",g="CHANGE_CURSOR",y="PASTE_STRING",b="HTML_TAG";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(){function e(t,n){var w=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),_(this,"options",{strings:null,cursor:"|",delay:"natural",deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null}),_(this,"setupWrapperElement",(function(){w.state.elements.wrapper.className=w.options.wrapperClassName,w.state.elements.cursor.className=w.options.cursorClassName,w.state.elements.cursor.innerHTML=w.options.cursor,w.state.elements.container.innerHTML="",w.state.elements.container.appendChild(w.state.elements.wrapper),w.state.elements.container.appendChild(w.state.elements.cursor)})),_(this,"start",(function(){return w.state.eventLoopPaused=!1,w.runEventLoop(),w})),_(this,"pause",(function(){return w.state.eventLoopPaused=!0,w})),_(this,"stop",(function(){return w.state.eventLoop&&(Object(r.cancel)(w.state.eventLoop),w.state.eventLoop=null),w})),_(this,"pauseFor",(function(e){return w.addEventToQueue(p,{ms:e}),w})),_(this,"typeOutAllStrings",(function(){return"string"==typeof w.options.strings?(w.typeString(w.options.strings).pauseFor(1500),w):(w.options.strings.forEach((function(e){w.typeString(e).pauseFor(1500).deleteAll(w.options.deleteSpeed)})),w)})),_(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(o(e))return w.typeOutHTMLString(e,t);if(e){var n=w.options||{},r=n.stringSplitter,i="function"==typeof r?r(e):e.split("");w.typeCharacters(i,t)}return w})),_(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o(e)?w.typeOutHTMLString(e,t,!0):(e&&w.addEventToQueue(y,{character:e,node:t}),w)})),_(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=a(e);if(r.length>0)for(var i=0;i<r.length;i++){var o=r[i],s=o.innerHTML;o&&3!==o.nodeType?(o.innerHTML="",w.addEventToQueue(v,{node:o,parentNode:t}),n?w.pasteString(s,o):w.typeString(s,o)):o.textContent&&(n?w.pasteString(o.textContent,t):w.typeString(o.textContent,t))}return w})),_(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return w.addEventToQueue(u,{speed:e}),w})),_(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return w.addEventToQueue(h,{speed:e}),w})),_(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return w.addEventToQueue(m,{delay:e}),w})),_(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return w.addEventToQueue(g,{cursor:e}),w})),_(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)w.addEventToQueue(l);return w})),_(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return w.addEventToQueue(f,{cb:e,thisArg:t}),w})),_(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){w.addEventToQueue(c,{character:e,node:t})})),w})),_(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){w.addEventToQueue(l)})),w})),_(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.addEventToStateProperty(e,t,n,"eventQueue")})),_(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=w.options.loop;return r?w.addEventToStateProperty(e,t,n,"reverseCalledEvents"):w})),_(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i={eventName:e,eventArgs:t||{}};return w.state[r]=n?[i].concat(E(w.state[r])):[].concat(E(w.state[r]),[i]),w})),_(this,"runEventLoop",(function(){w.state.lastFrameTime||(w.state.lastFrameTime=Date.now());var e=Date.now(),t=e-w.state.lastFrameTime;if(!w.state.eventQueue.length){if(!w.options.loop)return;w.state.eventQueue=E(w.state.calledEvents),w.state.calledEvents=[],w.options=T({},w.state.initialOptions)}if(w.state.eventLoop=i()(w.runEventLoop),!w.state.eventLoopPaused){if(w.state.pauseUntil){if(e<w.state.pauseUntil)return;w.state.pauseUntil=null}var n,r=E(w.state.eventQueue),o=r.shift();if(!(t<=(n=o.eventName===d||o.eventName===l?"natural"===w.options.deleteSpeed?s(40,80):w.options.deleteSpeed:"natural"===w.options.delay?s(120,160):w.options.delay))){var a=o.eventName,S=o.eventArgs;switch(w.logInDevMode({currentEvent:o,state:w.state,delay:n}),a){case y:case c:var _=S.character,C=S.node,k=document.createTextNode(_);C?C.appendChild(k):w.state.elements.wrapper.appendChild(k),w.state.visibleNodes=[].concat(E(w.state.visibleNodes),[{type:"TEXT_NODE",node:k}]);break;case l:r.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case p:var A=o.eventArgs.ms;w.state.pauseUntil=Date.now()+parseInt(A);break;case f:var D=o.eventArgs,O=D.cb,j=D.thisArg;O.call(j,{elements:w.state.elements});break;case v:var R=o.eventArgs,N=R.node,P=R.parentNode;P?P.appendChild(N):w.state.elements.wrapper.appendChild(N),w.state.visibleNodes=[].concat(E(w.state.visibleNodes),[{type:b,node:N,parentNode:P||w.state.elements.wrapper}]);break;case u:var M=w.state.visibleNodes,x=S.speed,L=[];x&&L.push({eventName:h,eventArgs:{speed:x,temp:!0}});for(var F=0,V=M.length;F<V;F++)L.push({eventName:d,eventArgs:{removingCharacterNode:!1}});x&&L.push({eventName:h,eventArgs:{speed:w.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,L);break;case d:var H=o.eventArgs.removingCharacterNode;if(w.state.visibleNodes.length){var I=w.state.visibleNodes.pop(),Q=I.type,B=I.node;B.parentNode.removeChild(B),Q===b&&H&&r.unshift({eventName:d,eventArgs:{}})}break;case h:w.options.deleteSpeed=o.eventArgs.speed;break;case m:w.options.delay=o.eventArgs.delay;break;case g:w.options.cursor=o.eventArgs.cursor,w.state.elements.cursor.innerHTML=o.eventArgs.cursor}w.options.loop&&(o.eventName===d||o.eventArgs&&o.eventArgs.temp||(w.state.calledEvents=[].concat(E(w.state.calledEvents),[o]))),w.state.eventQueue=r,w.state.lastFrameTime=e}}})),!t)throw new Error("No container element was provided");if("string"==typeof t){var S=document.querySelector(t);if(!S)throw new Error("Could not find container element");this.state.elements.container=S}else this.state.elements.container=t;n&&(this.options=T({},this.options,{},n)),this.state.initialOptions=T({},this.options),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(g,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&S(t.prototype,n),e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,function(e,t,n){(function(t){(function(){var n,r,i,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n(12))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=s(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new v(e,t)),1!==l.length||u||s(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}]).default},"9jq1":function(e,t,n){"use strict";n("TeQF"),n("oVuX"),n("mRH6");var r=n("PPrx"),i={props:["data"],computed:{technologies:function(){return this.data.technologies&&this.data.technologies.join(" / ")},theme:function(){var e={color:Object(r.b)(this.data.style)};return this.data.tileVideo||(e["background-color"]=Object(r.a)(this.data.style)),e},casestudyUrl:function(){return this.data.link?"/works/".concat(this.data.link):void 0},tileVideoUrl:function(){return n("8gm1")("./".concat(this.data.tileVideo)).src}}},o=(n("VIf4"),n("KHd+")),a={components:{ProjectTile:Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"project",style:e.theme,attrs:{href:e.casestudyUrl}},[e.data.tileVideo?n("div",{staticClass:"video"},[n("video",{attrs:{src:e.tileVideoUrl,muted:"",autoplay:"",loop:""},domProps:{muted:!0}})]):e._e(),n("h2",[e._v(e._s(e.data.heading))]),n("div",{staticClass:"desc"},[e._v(e._s(e.data.description))]),n("div",{staticClass:"footer"},[n("ul",{staticClass:"services underscore"},e._l(e.data.services,(function(t,r){return n("li",{key:r},[e._v(e._s(t))])})),0),n("div",{staticClass:"tech"},[e._v("\n      "+e._s(e.technologies)+"\n    ")]),e.casestudyUrl?n("div",{staticClass:"expand"},[e._v("\n      +\n    ")]):e._e()])])}),[],!1,null,"069992f2",null).exports},props:["projects"],computed:{col1Tiles:function(){return this.projects.filter((function(e,t){return t%2-1}))},col2Tiles:function(){return this.projects.filter((function(e,t){return t%2}))}}},s=(n("VaU2"),Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group"},[t("div",{staticClass:"col"},this._l(this.col1Tiles,(function(e,n){return t("div",{key:n,staticClass:"item"},[t("ProjectTile",{attrs:{data:e}})],1)})),0),t("div",{staticClass:"col right"},this._l(this.col2Tiles,(function(e,n){return t("div",{key:n,staticClass:"item"},[t("ProjectTile",{attrs:{data:e}})],1)})),0)])}),[],!1,null,"a283447c",null));t.a=s.exports},DQNa:function(e,t,n){var r=n("busE"),i=Date.prototype,o=i.toString,a=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},OlP7:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));n("pNMO"),n("4Brf"),n("2B1R"),n("sMBO");function r(e){return e.map((function(e){return{heading:e.node.client.name,description:e.node.description,style:e.node.client.style,link:e.node.casestudySlug,services:e.node.services,technologies:e.node.technologies,tileVideo:e.node.tileVideo}}))}function i(e){return e.map((function(e){return{heading:e.node.name,description:e.node.description,style:e.node.style,services:e.node.services}}))}function o(e){return e.map((function(e){return{heading:e.node.name,description:e.node.description,style:e.node.style,services:e.node.qualities}}))}},RCb4:function(e,t,n){},TzK6:function(e,t,n){},VIf4:function(e,t,n){"use strict";var r=n("/m/M");n.n(r).a},VaU2:function(e,t,n){"use strict";var r=n("VuB9");n.n(r).a},VuB9:function(e,t,n){},Y0lS:function(e,t,n){"use strict";var r=n("TzK6");n.n(r).a},bBpK:function(e,t,n){"use strict";var r=n("RCb4");n.n(r).a},fx0o:function(e,t,n){"use strict";n.r(t);n("2B1R"),n("pDQq");var r=n("4iU1"),i=n("eviX"),o=n("OlP7"),a=n("9jq1"),s=n("kGzD"),c={components:{TypingHeader:r.a,TilesGroup:a.a,Testimonials:i.a},computed:{projectGroups:function(){for(var e=Object(o.c)(this.$static.allProjects.edges),t=[];e.length;)t.push(e.splice(0,4));return t},testimonialIds:function(){var e=this.$static.allTestimonials.edges.map((function(e){return e.node.id}));return Object(s.b)(e)}}},l=(n("bBpK"),n("KHd+")),u=n("Kw5r"),d=u.a.config.optionMergeStrategies.computed,p={allProjects:{edges:[{node:{type:"web",description:"Re-engineering the mechanics of music distribution with faster transcoding.",services:["Frontend development","Backend development","Devops","Design"],technologies:["Ruby","Rails","React","Storybook","AWS"],client:{name:"TuneCore",style:"black"},tileVideo:"tunecore.mp4",casestudySlug:"tunecore"}},{node:{type:"web",description:"How do you bring enterprise labelling into the collaborative age?",services:["Frontend development","Backend development","Devops","Design"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"Gaea Global",style:"red"},tileVideo:"",casestudySlug:"cls"}},{node:{type:"web",description:"Streamlining customer checkout with a Single Page Application (SPA) built on Mithril.",services:["Frontend development","Backend development"],technologies:["Mithril js","Ruby","Rails","Magento"],client:{name:"Caratlane",style:"blue"},tileVideo:"",casestudySlug:"caratlane"}},{node:{type:"web",description:"Delivering farm-to-fridge groceries with an innovative AI-powered platform.",services:["Frontend development","Backend development"],technologies:["Ruby","Rails"],client:{name:"Farmstead",style:"green"},tileVideo:"",casestudySlug:"farmstead"}},{node:{type:"web",description:"Innovative, data rich and highly customized PDFs, generated on demand based on user DNA profiles.",services:["Frontend development","Backend development","Design"],technologies:["Ruby","Rails","HexaPdf"],client:{name:"Genetic Direction",style:"dark-blue"},tileVideo:"",casestudySlug:"genetic-direction"}},{node:{type:"web",description:"React-based fleet management solution, trip simulator and insurance telematics.",services:["Frontend development","Backend development","Design"],technologies:["Ruby","Rails","React","Javascript"],client:{name:"Modus",style:"pink"},tileVideo:"",casestudySlug:"modus"}},{node:{type:"web",description:"Intelligent fleet management and tracking, powered by Django and Python.",services:["Frontend development","Backend development"],technologies:["Django","Python"],client:{name:"Glydel",style:"grey"},tileVideo:"",casestudySlug:"glydel"}},{node:{type:"web",description:"Plastic Recycling Platform discovery which helps producers to comply with Extended Producer Responsibility (EPR) norms",services:["Discovery","Consulting"],technologies:["Whiteboard","Sketch","Trello"],client:{name:"Social Lab",style:"yellow"},tileVideo:"",casestudySlug:"social-lab"}},{node:{type:"iot",description:"Unlocking production efficiency with RaspberryPi and NFC-driven real time tool tracking.",services:["IOT development"],technologies:["Python","Node.js"],client:{name:"GE Digital Services",style:"green"},tileVideo:"",casestudySlug:"ge"}},{node:{type:"mobile",description:"Immersive and engaging news, minus the clickbait and clutter.",services:["Mobile development"],technologies:["Objective C"],client:{name:"Inkl",style:"dark-blue"},tileVideo:"",casestudySlug:"inkl"}},{node:{type:"web",description:"Building an immersive landing page for the Creative Difference project.",services:["Frontend development"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"IDEO",style:"yellow"},tileVideo:"",casestudySlug:"ideo"}},{node:{type:"web",description:"Accelerated credit profiling and risk analysis through codebase refactoring.",services:["Backend development"],technologies:["Ruby","Rails","PostgreSQL"],client:{name:"IDExcel",style:"grey"},tileVideo:"",casestudySlug:"idexcel"}},{node:{type:"web",description:"Building immersive digital billboards and web embeds for Fankave.",services:["Frontend development","Backend development","Design"],technologies:["React","Javascript","CSS","Scala"],client:{name:"Fankave",style:"black"},tileVideo:"",casestudySlug:"fankave"}},{node:{type:"web",description:"Supercharging the sales pipeline with Rails-powered enterprise automation.",services:["Frontend development","Backend development"],technologies:["Ruby","Rails"],client:{name:"Jiffle Now",style:"pink"},tileVideo:"",casestudySlug:"jiffle-now"}},{node:{type:"web",description:"How we helped 10i Commerce scale their Spree platform to process 100k+ orders.",services:["Consulting","Backend development"],technologies:["Ruby","Rails","Spree"],client:{name:"10i Commerce",style:"dark-blue"},tileVideo:"",casestudySlug:"10icommerce"}},{node:{type:"web",description:"Making a difference with the International Fund For Agricultural Development.",services:["Consulting","Backend development"],technologies:["Ruby","Rails"],client:{name:"IFAD",style:"yellow"},tileVideo:"",casestudySlug:"ifad"}}]},allTestimonials:{edges:[{node:{id:"1"}},{node:{id:"2"}},{node:{id:"3"}},{node:{id:"4"}},{node:{id:"5"}},{node:{id:"6"}},{node:{id:"7"}},{node:{id:"8"}},{node:{id:"9"}},{node:{id:"10"}},{node:{id:"11"}}]}},f=function(e){var t=e.options;t.__staticData?t.__staticData.data=p:(t.__staticData=u.a.observable({data:p}),t.computed=d({$static:function(){return t.__staticData.data}},t.computed))},v=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("TypingHeader",{attrs:{text:"We build bridges between ideas and execution."}}),n("div",e._l(e.projectGroups,(function(t,r){return n("div",{key:r},[n("TilesGroup",{attrs:{projects:t}}),n("div",{staticClass:"testimonial-section"},[n("Testimonials",{attrs:{id:e.testimonialIds[r],themed:!0,"project-link":!0}})],1)],1)})),0)],1)}),[],!1,null,"3933daea",null);"function"==typeof f&&f(v);t.default=v.exports},kGzD:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));n("DQNa");function r(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}function i(e){var t=(new Date).toLocaleString("en-US",{timeZone:e});return new Date(t)}},pDQq:function(e,t,n){"use strict";var r=n("I+eb"),i=n("I8vh"),o=n("ppGB"),a=n("UMSQ"),s=n("ewvW"),c=n("ZfDv"),l=n("hBjN"),u=n("Hd5f"),d=n("rkAj"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min;r({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var n,r,u,d,p,f,m=s(this),g=a(m.length),y=i(e,g),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=g-y):(n=b-2,r=h(v(o(t),0),g-y)),g+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=c(m,r),d=0;d<r;d++)(p=y+d)in m&&l(u,d,m[p]);if(u.length=r,n<r){for(d=y;d<g-r;d++)f=d+n,(p=d+r)in m?m[f]=m[p]:delete m[f];for(d=g;d>g-r+n;d--)delete m[d-1]}else if(n>r)for(d=g-r;d>y;d--)f=d+n-1,(p=d+r-1)in m?m[f]=m[p]:delete m[f];for(d=0;d<n;d++)m[d+y]=arguments[d+2];return m.length=g-r+n,u}})}}]);