(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/rBs":function(e,t,n){},"2dsF":function(e,t,n){},"3zM5":function(e,t){e.exports={type:"file",mimeType:"video/mp4",src:"/assets/files/brand-experience.28c7ee047eadf7e112860ad585dc9f8d.mp4"}},"4iU1":function(e,t,n){"use strict";n("R5XZ");var a=n("950E"),r=n.n(a),i={mounted:function(){var e=this;setTimeout((function(){e.setAnimationHeight(),e.initTypeWriting()}),100)},props:["text"],methods:{setAnimationHeight:function(){var e=this.$el,t=this.$el.querySelector(".placeholder");e.style.height="".concat(t.offsetHeight,"px")},initTypeWriting:function(){var e=this.$el.querySelector(".anim");new r.a(e,{strings:this.text,cursor:"_",delay:25,autoStart:!0})}}},o=(n("Y0lS"),n("KHd+")),s=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",{staticClass:"placeholder"},[this._v(this._s(this.text))]),t("h1",{staticClass:"anim"})])}),[],!1,null,"6933a3f5",null);t.a=s.exports},"7MVl":function(e,t,n){},"8gm1":function(e,t,n){var a={"./404dude.mp4":"mnf5","./about.mp4":"cZOH","./brand-experience.mp4":"3zM5","./tunecore.mp4":"EdKZ","./user-experience.mp4":"QUpP"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="8gm1"},"950E":function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,function(e,t,n){(function(t){for(var a=n(11),r="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",s=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],c=0;!s&&c<i.length;c++)s=r[i[c]+"Request"+o],l=r[i[c]+"Cancel"+o]||r[i[c]+"CancelRequest"+o];if(!s||!l){var u=0,d=0,p=[];s=function(e){if(0===p.length){var t=a(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}).call(this,n(4))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(1),r=n.n(a),i=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},o=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},l="TYPE_CHARACTER",c="REMOVE_CHARACTER",u="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",h="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",v="CHANGE_DELETE_SPEED",f="CHANGE_DELAY",g="CHANGE_CURSOR",b="PASTE_STRING",y="HTML_TAG";function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(){function e(t,n){var _=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),C(this,"options",{strings:null,cursor:"|",delay:"natural",deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null}),C(this,"setupWrapperElement",(function(){_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor)})),C(this,"start",(function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_})),C(this,"pause",(function(){return _.state.eventLoopPaused=!0,_})),C(this,"stop",(function(){return _.state.eventLoop&&(Object(a.cancel)(_.state.eventLoop),_.state.eventLoop=null),_})),C(this,"pauseFor",(function(e){return _.addEventToQueue(p,{ms:e}),_})),C(this,"typeOutAllStrings",(function(){return"string"==typeof _.options.strings?(_.typeString(_.options.strings).pauseFor(1500),_):(_.options.strings.forEach((function(e){_.typeString(e).pauseFor(1500).deleteAll(_.options.deleteSpeed)})),_)})),C(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(i(e))return _.typeOutHTMLString(e,t);if(e){var n=_.options||{},a=n.stringSplitter,r="function"==typeof a?a(e):e.split("");_.typeCharacters(r,t)}return _})),C(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i(e)?_.typeOutHTMLString(e,t,!0):(e&&_.addEventToQueue(b,{character:e,node:t}),_)})),C(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,a=o(e);if(a.length>0)for(var r=0;r<a.length;r++){var i=a[r],s=i.innerHTML;i&&3!==i.nodeType?(i.innerHTML="",_.addEventToQueue(m,{node:i,parentNode:t}),n?_.pasteString(s,i):_.typeString(s,i)):i.textContent&&(n?_.pasteString(i.textContent,t):_.typeString(i.textContent,t))}return _})),C(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return _.addEventToQueue(u,{speed:e}),_})),C(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return _.addEventToQueue(v,{speed:e}),_})),C(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return _.addEventToQueue(f,{delay:e}),_})),C(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return _.addEventToQueue(g,{cursor:e}),_})),C(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)_.addEventToQueue(c);return _})),C(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return _.addEventToQueue(h,{cb:e,thisArg:t}),_})),C(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){_.addEventToQueue(l,{character:e,node:t})})),_})),C(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){_.addEventToQueue(c)})),_})),C(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.addEventToStateProperty(e,t,n,"eventQueue")})),C(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=_.options.loop;return a?_.addEventToStateProperty(e,t,n,"reverseCalledEvents"):_})),C(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0,r={eventName:e,eventArgs:t||{}};return _.state[a]=n?[r].concat(T(_.state[a])):[].concat(T(_.state[a]),[r]),_})),C(this,"runEventLoop",(function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var e=Date.now(),t=e-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=T(_.state.calledEvents),_.state.calledEvents=[],_.options=w({},_.state.initialOptions)}if(_.state.eventLoop=r()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(e<_.state.pauseUntil)return;_.state.pauseUntil=null}var n,a=T(_.state.eventQueue),i=a.shift();if(!(t<=(n=i.eventName===d||i.eventName===c?"natural"===_.options.deleteSpeed?s(40,80):_.options.deleteSpeed:"natural"===_.options.delay?s(120,160):_.options.delay))){var o=i.eventName,k=i.eventArgs;switch(_.logInDevMode({currentEvent:i,state:_.state,delay:n}),o){case b:case l:var C=k.character,j=k.node,E=document.createTextNode(C);j?j.appendChild(E):_.state.elements.wrapper.appendChild(E),_.state.visibleNodes=[].concat(T(_.state.visibleNodes),[{type:"TEXT_NODE",node:E}]);break;case c:a.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case p:var S=i.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(S);break;case h:var x=i.eventArgs,A=x.cb,O=x.thisArg;A.call(O,{elements:_.state.elements});break;case m:var D=i.eventArgs,N=D.node,M=D.parentNode;M?M.appendChild(N):_.state.elements.wrapper.appendChild(N),_.state.visibleNodes=[].concat(T(_.state.visibleNodes),[{type:y,node:N,parentNode:M||_.state.elements.wrapper}]);break;case u:var P=_.state.visibleNodes,H=k.speed,L=[];H&&L.push({eventName:v,eventArgs:{speed:H,temp:!0}});for(var R=0,Q=P.length;R<Q;R++)L.push({eventName:d,eventArgs:{removingCharacterNode:!1}});H&&L.push({eventName:v,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),a.unshift.apply(a,L);break;case d:var U=i.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var F=_.state.visibleNodes.pop(),I=F.type,V=F.node;V.parentNode.removeChild(V),I===y&&U&&a.unshift({eventName:d,eventArgs:{}})}break;case v:_.options.deleteSpeed=i.eventArgs.speed;break;case f:_.options.delay=i.eventArgs.delay;break;case g:_.options.cursor=i.eventArgs.cursor,_.state.elements.cursor.innerHTML=i.eventArgs.cursor}_.options.loop&&(i.eventName===d||i.eventArgs&&i.eventArgs.temp||(_.state.calledEvents=[].concat(T(_.state.calledEvents),[i]))),_.state.eventQueue=a,_.state.lastFrameTime=e}}})),!t)throw new Error("No container element was provided");if("string"==typeof t){var k=document.querySelector(t);if(!k)throw new Error("Could not find container element");this.state.elements.container=k}else this.state.elements.container=t;n&&(this.options=w({},this.options,{},n)),this.state.initialOptions=w({},this.options),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(g,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&k(t.prototype,n),e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,function(e,t,n){(function(t){(function(){var n,a,r,i,o,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},a=t.hrtime,i=(n=function(){var e;return 1e9*(e=a())[0]+e[1]})(),s=1e9*t.uptime(),o=i-s):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,n(12))},function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&h())}function h(){if(!u){var e=s(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||s(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]).default},"9jq1":function(e,t,n){"use strict";n("TeQF"),n("oVuX"),n("mRH6");var a=n("PPrx"),r={props:["data"],computed:{technologies:function(){return this.data.technologies&&this.data.technologies.join(" / ")},theme:function(){var e={color:Object(a.b)(this.data.style)};return this.data.tileVideo||(e["background-color"]=Object(a.a)(this.data.style)),e},casestudyUrl:function(){return this.data.link?"/works/".concat(this.data.link):void 0},tileVideoUrl:function(){return n("8gm1")("./".concat(this.data.tileVideo)).src}}},i=(n("mUJe"),n("KHd+")),o={components:{ProjectTile:Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"project",style:e.theme,attrs:{href:e.casestudyUrl}},[e.data.tileVideo?n("div",{staticClass:"video"},[n("video",{attrs:{src:e.tileVideoUrl,muted:"",autoplay:"",loop:""},domProps:{muted:!0}})]):e._e(),n("h2",[e._v(e._s(e.data.heading))]),n("div",{staticClass:"desc"},[e._v(e._s(e.data.description))]),n("div",{staticClass:"footer"},[n("div",{staticClass:"services"},e._l(e.data.services,(function(t){return n("div",[e._v(e._s(t))])})),0),n("div",{staticClass:"tech"},[e._v("\n      "+e._s(e.technologies)+"\n    ")]),e.casestudyUrl?n("div",{staticClass:"expand"},[e._v("\n      +\n    ")]):e._e()])])}),[],!1,null,"8ca38fe2",null).exports},props:["projects"],computed:{col1Tiles:function(){return this.projects.filter((function(e,t){return t%2-1}))},col2Tiles:function(){return this.projects.filter((function(e,t){return t%2}))}}},s=(n("VaU2"),Object(i.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group"},[t("div",{staticClass:"col"},this._l(this.col1Tiles,(function(e,n){return t("div",{key:n,staticClass:"item"},[t("ProjectTile",{attrs:{data:e}})],1)})),0),t("div",{staticClass:"col right"},this._l(this.col2Tiles,(function(e,n){return t("div",{key:n,staticClass:"item"},[t("ProjectTile",{attrs:{data:e}})],1)})),0)])}),[],!1,null,"a283447c",null));t.a=s.exports},E1YN:function(e,t,n){"use strict";var a=n("7MVl");n.n(a).a},EdKZ:function(e,t){e.exports={type:"file",mimeType:"video/mp4",src:"/assets/files/tunecore.e8fdde1d12ece295df7050593ee7e590.mp4"}},EiDc:function(e,t,n){},FkIj:function(e,t,n){"use strict";var a=n("xSbY");n.n(a).a},IZ3B:function(e,t,n){"use strict";var a={data:function(){return{offices:[{name:"San Jose (US)",address:["440 N. Wolfe Rd,","Sunnyvale, CA 94085"],map:"https://goo.gl/maps/ZRSeqqBQanysTg8J9"},{name:"Chennai (IN)",address:["# A1/1, 49th Street,","7th Avenue, Ashok Nagar,","Chennai, TN 600083"],map:"https://goo.gl/maps/JzQU5f5vnk62"},{name:"Fredericton (CA)",phone:"",address:["50 Crowther Lane, Suite 140","Fredericton, NB, E3C 0J1"],map:"https://goo.gl/maps/anCXPpZajM73cv159"},{name:"Bengaluru (IN)",phone:"",address:["# 579, 9th A Main road,","1st Stage Indira Nagar,","Bangalore, KA 560038"],map:"https://goo.gl/maps/THnTwcXgS9m"}]}}},r=(n("FkIj"),n("KHd+")),i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"offices"},[e._m(0),n("div",{staticClass:"addresses"},e._l(e.offices,(function(t){return n("div",{staticClass:"address"},[n("h2",{staticClass:"name"},[e._v(e._s(t.name))]),n("h3",[e._v(e._s(t.phone))]),n("div",e._l(t.address,(function(t){return n("div",[e._v(e._s(t))])})),0),n("div",[n("a",{attrs:{target:"_blank",rel:"noopener",href:t.map}},[e._v("open map")])])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("\n    _our"),t("br"),this._v("\n    offices\n  ")])}],!1,null,"0083a51b",null);t.a=i.exports},JTJg:function(e,t,n){"use strict";var a=n("I+eb"),r=n("WjRb"),i=n("HYAF");a({target:"String",proto:!0,forced:!n("qxPZ")("includes")},{includes:function(e){return!!~String(i(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},Jqtt:function(e,t,n){"use strict";var a=n("/rBs");n.n(a).a},MfuP:function(e,t,n){},OlP7:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));n("pNMO"),n("4Brf"),n("2B1R"),n("sMBO");function a(e){return e.map((function(e){return{heading:e.node.client.name,description:e.node.description,style:e.node.client.style,link:e.node.casestudySlug,services:e.node.services,technologies:e.node.technologies,tileVideo:e.node.tileVideo}}))}function r(e){return e.map((function(e){return{heading:e.node.name,description:e.node.description,style:e.node.style,services:e.node.services}}))}function i(e){return e.map((function(e){return{heading:e.node.name,description:e.node.description,style:e.node.style,services:e.node.qualities}}))}},PObY:function(e,t,n){},QUpP:function(e,t){e.exports={type:"file",mimeType:"video/mp4",src:"/assets/files/user-experience.1c6044822086fcca63f3d862d32534ad.mp4"}},Qboc:function(e,t,n){e.exports=n.p+"assets/media/about.54659de1.mp4"},RFu4:function(e,t,n){var a={"./ajith.png":"j5ki","./andy.jpg":"g4sl","./arvindh.jpg":"Xpch","./caleb.png":"61TL","./daniel.jpg":"ma/K","./daniel.min.jpg":"tdal","./deepak.jpg":"CKOz","./dhruva.jpg":"yltp","./ganesh.jpg":"kbSj","./gaurav.jpg":"+din","./harman.jpg":"2cCs","./jahangir.jpg":"7ILV","./jenifa.jpg":"kaek","./kalpesh.png":"YBjj","./kiran.png":"IU+F","./madhava.jpg":"yk1p","./nanda.png":"Tz8P","./naren.jpg":"RxWs","./pavan.jpg":"LBq0","./placeholder2.jpg":"VHgC","./puneetha.jpg":"bin3","./rahul.png":"CWuw","./raja.jpg":"QzOs","./rajiv.jpg":"6GaP","./samuel.jpeg":"IANz","./saravana.jpg":"5s8l","./sreedev.jpg":"tNZr","./sudhakar.jpg":"a8WE","./tyler.jpg":"qY7R","./vab.png":"PFPd","./vagmi.jpg":"x814"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="RFu4"},TRuN:function(e,t,n){"use strict";var a=n("PObY");n.n(a).a},TzK6:function(e,t,n){},VJeb:function(e,t,n){"use strict";var a=n("EiDc");n.n(a).a},VaU2:function(e,t,n){"use strict";var a=n("VuB9");n.n(a).a},VuB9:function(e,t,n){},XeZi:function(e,t,n){"use strict";n("TeQF"),n("yq1k"),n("pDQq"),n("JTJg");var a={props:["tarkan"]},r=(n("E1YN"),n("KHd+")),i={components:{Tarkan:Object(r.a)(a,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarkan"},[a("g-image",{attrs:{src:n("RFu4")("./"+e.tarkan.node.image)}}),a("div",{staticClass:"contents"},[a("div",{staticClass:"name"},[e._v(e._s(e.tarkan.node.name))]),a("div",{staticClass:"role"},[e._v(e._s(e.tarkan.node.role))]),a("div",{staticClass:"caption"},[e._v("\n      \x3c!-- "+e._s(e.tarkan.node.caption||"???")+" --\x3e\n    ")])])],1)}),[],!1,null,"219c6f66",null).exports},props:["roles","type"],computed:{filtered:function(){var e=this,t=this.roles?this.$static.allTarkans.edges.filter((function(t){return e.roles.includes(t.node.role)})):this.$static.allTarkans.edges;if(this.roles&&this.roles.includes("Social Marketer"))for(var n=0;n<t.length;++n){if("Social Marketer"===t[n].node.role){t.push(t.splice(n,1)[0]);break}}return t},firstColumn:function(){return this.filtered.filter((function(e,t){return!(t%2)}))},secondColumn:function(){return this.filtered.filter((function(e,t){return t%2}))},rightColumnMargin:function(){return this.type&&this.type["big-offset"]?this.type["big-offset"]:60}}},o=(n("rpq/"),n("Kw5r")),s=o.a.config.optionMergeStrategies.computed,l={allTarkans:{edges:[{node:{name:"Vagmi Mudumbai",short_name:"vagmi",role:"Developer",caption:"Let's talk chess",blurb:"He is still thiking what to write about him",image:"vagmi.jpg",text_style:""}},{node:{name:"Dhruva Sagar",short_name:"dhruva",role:"Developer",caption:"Did someone say unix?",blurb:"He is still thiking what to write about him",image:"dhruva.jpg",text_style:""}},{node:{name:"Deepak Prasanna",short_name:"deepak",role:"Developer",caption:"GraphQL is a feeling",blurb:"He is still thiking what to write about him",image:"deepak.jpg",text_style:""}},{node:{name:"Sudhakar Rayavaram",short_name:"sudocker",role:"Developer",caption:"Doodle all the way",blurb:"Programming is overrated. I mean, there is more to solving a real world problem than writing code",image:"sudhakar.jpg",text_style:""}},{node:{name:"Kalpesh Patel",short_name:"kalpesh",role:"Android Developer",caption:"Android Android Android!",blurb:"He is still thiking what to write about him",image:"kalpesh.png",text_style:""}},{node:{name:"Pavan Kumar C",short_name:"pavan",role:"iOS Developer",caption:"Kalpesh is wrong! It is iOS",blurb:"He is still thiking what to write about him",image:"pavan.jpg",text_style:""}},{node:{name:"Rajiv Manivannan",short_name:"rajiv",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"rajiv.jpg",text_style:""}},{node:{name:"Raja Jawahar",short_name:"raja",role:"Mobile Developer",caption:"",blurb:"He is still thiking what to write about him",image:"raja.jpg",text_style:""}},{node:{name:"Arvindh Sukumar",short_name:"arvindh",role:"Developer",caption:"Accounting uncharted territory",blurb:"He is still thiking what to write about him",image:"arvindh.jpg",text_style:""}},{node:{name:"Jahangir Anwari",short_name:"jahangir",role:"Developer",caption:"Do you have docker?",blurb:"He is still thiking what to write about him",image:"jahangir.jpg",text_style:""}},{node:{name:"Harman Sohanpal",short_name:"harman",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"harman.jpg",text_style:""}},{node:{name:"Naren Krishna",short_name:"naren",role:"iOS Developer",caption:"",blurb:"He is still thiking what to write about him",image:"naren.jpg",text_style:""}},{node:{name:"Kiran Mampilly",short_name:"kiran",role:"Sales",caption:"",blurb:"He is still thiking what to write about him",image:"kiran.png",text_style:""}},{node:{name:"Tyler MacEachern",short_name:"tyler",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"tyler.jpg",text_style:""}},{node:{name:"Nandagopal Ravichandran",short_name:"nanda",role:"Mobile Developer",caption:"",blurb:"He is still thiking what to write about him",image:"nanda.png",text_style:""}},{node:{name:"Rahul Nitin Padalkar",short_name:"rahul",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"rahul.png",text_style:""}},{node:{name:"Sreedev Kodichath",short_name:"sreedev",role:"Senior Software Engineer",caption:"Coding weird applications",blurb:"Linux is the best!",image:"sreedev.jpg",text_style:""}},{node:{name:"Caleb Reath",short_name:"caleb",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"caleb.png",text_style:""}},{node:{name:"Ajith Kumar",short_name:"ajith",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"ajith.png",text_style:""}},{node:{name:"Ganesh Chandrashekar",short_name:"ganesh",role:"Social Marketer",caption:"",blurb:"He is still thiking what to write about him",image:"ganesh.jpg",text_style:""}},{node:{name:"Daniel Wasiluk",short_name:"daniel",role:"UX Designer",caption:"WYSIWYG",blurb:"He is still thiking what to write about him",image:"daniel.jpg",text_style:""}},{node:{name:"Jenifa Newlin",short_name:"jenifa",role:"People Champion",caption:"Talk to me, your problems will be solved!",blurb:"She is still thiking what to write about him",image:"jenifa.jpg",text_style:""}},{node:{name:"Gaurav Singh",short_name:"Gaurav",role:"UX Designer",caption:"Picture is worth 4k words",blurb:"He is still thiking what to write about him",image:"gaurav.jpg",text_style:""}},{node:{name:"Madhava Reddy SV",short_name:"Madhav",role:"DevOps",caption:"Living & Breathing in Clouds(^~^~^)",blurb:"He is still thiking what to write about him",image:"madhava.jpg",text_style:""}},{node:{name:"Andy Reed",short_name:"Andy",role:"UX Designer",caption:"Life in 8px increments",blurb:"He is still thiking what to write about him",image:"andy.jpg",text_style:""}},{node:{name:"Samuel Beaulieu",short_name:"Samuel",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"samuel.jpeg",text_style:""}},{node:{name:"Saravana Moorthy",short_name:"Saravana",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"saravana.jpg",text_style:""}},{node:{name:"Vaibhav Kapoor",short_name:"Vab",role:"Developer",caption:"",blurb:"He is still thiking what to write about him",image:"vab.png",text_style:""}},{node:{name:"Puneetha Jagannathan",short_name:"Puneetha",role:"Brand Communications Specialist",caption:"Communications and Chocolate",blurb:"She is still thiking what to write about her",image:"puneetha.jpg",text_style:"dark"}}]}},c=function(e){var t=e.options;t.__staticData?t.__staticData.data=l:(t.__staticData=o.a.observable({data:l}),t.computed=s({$static:function(){return t.__staticData.data}},t.computed))},u=Object(r.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"team"},[t("div",{staticClass:"col-1"},this._l(this.firstColumn,(function(e){return t("Tarkan",{key:e.node.name,attrs:{tarkan:e}})})),1),t("div",{staticClass:"col-2",style:"--rightColumnMargin: "+this.rightColumnMargin+"px"},this._l(this.secondColumn,(function(e){return t("Tarkan",{key:e.node.name,attrs:{tarkan:e}})})),1)])}),[],!1,null,"6ece7c64",null);"function"==typeof c&&c(u);t.a=u.exports},Y0lS:function(e,t,n){"use strict";var a=n("TzK6");n.n(a).a},cZOH:function(e,t){e.exports={type:"file",mimeType:"video/mp4",src:"/assets/files/about.54659de11cf8ec1671084580d104c7b6.mp4"}},mUJe:function(e,t,n){"use strict";var a=n("2dsF");n.n(a).a},mnf5:function(e,t){e.exports={type:"file",mimeType:"video/mp4",src:"/assets/files/404dude.4cb0a229328959a15ab411adc14e53e5.mp4"}},odGf:function(e,t,n){"use strict";n.r(t);var a=n("4iU1"),r=n("9jq1"),i=n("OlP7"),o=(n("TRuN"),n("KHd+")),s=Object(o.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("_in"),n("br"),e._v("numbers")]),n("div",{staticClass:"numbers"},[n("div",[e._v("\n      offices\n      "),n("div",{staticClass:"num"},[e._v("04")])]),n("div",[e._v("\n      years\n      "),n("div",{staticClass:"num"},[e._v("06")])]),n("div",[e._v("\n      people\n      "),n("div",{staticClass:"num"},[e._v("27")])]),n("div",[e._v("\n      answer\n      "),n("div",{staticClass:"num"},[e._v("42")])])])])}],!1,null,"7805c1f2",null).exports,l=n("IZ3B"),c=(n("Jqtt"),Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h3",[this._v("_people")]),t("h1",[this._v("Who we are")]),t("div",{staticClass:"video"},[t("h2",[this._v("Creators, coders and craftsmen.")]),t("div",{staticClass:"blurb"},[this._v("\n      Meet our makers and seekers - a collective of driven, diverse, and fiercely \n      independent Tarkans, \n      united by a mutual love for building great products with real-world impact.\n    ")]),t("video",{attrs:{src:n("Qboc"),autoplay:"",muted:"",loop:""},domProps:{muted:!0}})]),t("h4",[this._v("We’re building the workplace of the future.")]),t("div",{staticClass:"blurb"},[this._v("\n    We believe that accountability doesn’t hinge on middlemen and managers. \n    Our work culture is remote-first and democratic by design, \n    with open communication channels that encourage holistic learning, \n    passionate discussions, and debates.\n  ")]),t("div",{staticClass:"grp-pics"},[t("g-image",{attrs:{src:n("mL52")}}),t("g-image",{staticClass:"second",attrs:{src:n("qtKe")}})],1),t("h4",[this._v("We shape our buildings; thereafter they shape us.")])])}),[],!1,null,"9b0dd19a",null).exports),u=n("XeZi"),d={mounted:function(){this.$children[0].overrideTheme="tarkaRed"},components:{TypingHeader:a.a,TilesGroup:r.a,Offices:l.a,Numbers:s,Who:c,Team:u.a},computed:{services:function(){return Object(i.b)(this.$static.allServices.edges)}}},p=(n("VJeb"),n("Kw5r")),h=p.a.config.optionMergeStrategies.computed,m={allServices:{edges:[{node:{name:"Product Engineering",description:"Build robust web and mobile applications that solve problems and deliver value in an agile, seamless and data-driven approach.",services:["_Technical Discovery","_Technical Architecture","_Full-Stack Development","_CMS Implementation","_Quality Assurance","_Interactive Prototyping"],style:"grey"}},{node:{name:"Consulting",description:"Audit your products for peerless performance, leverage strategic research, and gather insights to build world-class digital solutions.",services:["_Codebase Analysis","_Code Quality Metrics","_Product Architecture Review","_Competitive Research","_Research Metrics & Reports"],style:"dark-blue"}},{node:{name:"Coaching",description:"Grow rich engineering teams with holistic, test-driven learning models and specialised emphasis on frameworks and processes.",services:["_Team Enablement","_Dev Bootcamp","_Language Focussed Hands On Training","_Being agile workshop"],style:"green"}},{node:{name:"User Experience",description:"Delight your users with highly intuitive experience design and immersive interfaces that educate, inspire and engage.",services:["_Art Direction","_Brand Identity","_Brand Guidelines","_Visual Language","_UI / UX","_Copywriting"],style:"pink"}}]}},v=function(e){var t=e.options;t.__staticData?t.__staticData.data=m:(t.__staticData=p.a.observable({data:m}),t.computed=h({$static:function(){return t.__staticData.data}},t.computed))},f=Object(o.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("template",{slot:"bannerText"},[e._v("\n    We're a collective of thinkers & dreamers out to reimagine\n    how software is built.\n  ")]),a("div",{staticClass:"section"},[a("h3",[e._v("_company")]),a("h1",[e._v("What we do")]),a("p",{staticClass:"meaning"},[a("span",[e._v("Tarka")]),e._v(" Sastra is a science of dialectics, logic and reasoning, and art of debate that \n      analyzes the nature and source of knowledge and its validity.\n    ")]),a("div",{staticClass:"wiki"},[e._v("- Wikipedia")])]),a("div",{staticClass:"unknown"},[a("g-image",{attrs:{src:n("8tZO")}})],1),a("div",[a("TypingHeader",{attrs:{text:"Decode the unknown with human-centered solutions."}})],1),a("div",{staticClass:"pitch"},[e._v("\n    Troubleshoot business challenges with tailored solutions, \n    and create world-class software, built to scale. \n    Our sustainable workflow infuses branding, design and development \n    with a human touch to create products that engage.\n  ")]),a("div",{staticClass:"services"},[a("TilesGroup",{attrs:{projects:e.services}})],1),a("div",{staticClass:"section"},[a("Numbers")],1),a("div",{staticClass:"section"},[a("Offices")],1),a("div",{staticClass:"section"},[a("Who"),a("Team")],1)],2)}),[],!1,null,"37242823",null);"function"==typeof v&&v(f);t.default=f.exports},pDQq:function(e,t,n){"use strict";var a=n("I+eb"),r=n("I8vh"),i=n("ppGB"),o=n("UMSQ"),s=n("ewvW"),l=n("ZfDv"),c=n("hBjN"),u=n("Hd5f"),d=n("rkAj"),p=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,v=Math.min;a({target:"Array",proto:!0,forced:!p||!h},{splice:function(e,t){var n,a,u,d,p,h,f=s(this),g=o(f.length),b=r(e,g),y=arguments.length;if(0===y?n=a=0:1===y?(n=0,a=g-b):(n=y-2,a=v(m(i(t),0),g-b)),g+n-a>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=l(f,a),d=0;d<a;d++)(p=b+d)in f&&c(u,d,f[p]);if(u.length=a,n<a){for(d=b;d<g-a;d++)h=d+n,(p=d+a)in f?f[h]=f[p]:delete f[h];for(d=g;d>g-a+n;d--)delete f[d-1]}else if(n>a)for(d=g-a;d>b;d--)h=d+n-1,(p=d+a-1)in f?f[h]=f[p]:delete f[h];for(d=0;d<n;d++)f[d+b]=arguments[d+2];return f.length=g-a+n,u}})},"rpq/":function(e,t,n){"use strict";var a=n("MfuP");n.n(a).a},xSbY:function(e,t,n){},yq1k:function(e,t,n){"use strict";var a=n("I+eb"),r=n("TWQb").includes,i=n("RNIs");a({target:"Array",proto:!0,forced:!n("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);