(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"20Yq":function(e,t,n){},"4iU1":function(e,t,n){"use strict";var r=n("950E"),a=n.n(r),o={mounted(){setTimeout(()=>{this.setAnimationHeight(),this.initTypeWriting()},100)},props:["text"],methods:{setAnimationHeight(){let e=this.$el,t=this.$el.querySelector(".placeholder");e.style.height=t.offsetHeight+"px"},initTypeWriting(){let e=this.$el.querySelector(".anim");new a.a(e,{strings:this.text,cursor:"_",delay:25,autoStart:!0})}}},s=(n("VKM1"),n("KHd+")),i=Object(s.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"container"},[e("h1",{staticClass:"placeholder"},[this._v(this._s(this.text))]),e("h1",{staticClass:"anim"})])}),[],!1,null,"46a5b38c",null);t.a=i.exports},"4z6w":function(e,t,n){},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,c=[],u=!1,p=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):p=-1,c.length&&h())}function h(){if(!u){var e=i(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++p<t;)l&&l[p].run();p=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"950E":function(e,t,n){(function(t){var n;"undefined"!=typeof self&&self,n=()=>(()=>{var e={75:function(e){(function(){var n,r,a,o,s,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-s)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),i=1e9*t.uptime(),s=o-i):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),a="undefined"==typeof window?n.g:window,o=["moz","webkit"],s="AnimationFrame",i=a["request"+s],l=a["cancel"+s]||a["cancelRequest"+s],c=0;!i&&c<o.length;c++)i=a[o[c]+"Request"+s],l=a[o[c]+"Cancel"+s]||a[o[c]+"CancelRequest"+s];if(!i||!l){var u=0,p=0,d=[];i=function(e){if(0===d.length){var t=r(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},l=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return i.call(a,e)},e.exports.cancel=function(){l.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=i,e.cancelAnimationFrame=l}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{"use strict";r.d(a,{default:()=>_});var e=r(4087),t=r.n(e);const n=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},o=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var i="TYPE_CHARACTER",l="REMOVE_CHARACTER",c="REMOVE_ALL",u="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",d="CALL_FUNCTION",h="ADD_HTML_TAG_ELEMENT",m="CHANGE_DELETE_SPEED",g="CHANGE_DELAY",f="CHANGE_CURSOR",v="PASTE_STRING",b="HTML_TAG";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=function(){function r(a,y){var k=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),T(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),T(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),T(this,"setupWrapperElement",(function(){k.state.elements.container&&(k.state.elements.wrapper.className=k.options.wrapperClassName,k.state.elements.cursor.className=k.options.cursorClassName,k.state.elements.cursor.innerHTML=k.options.cursor,k.state.elements.container.innerHTML="",k.state.elements.container.appendChild(k.state.elements.wrapper),k.state.elements.container.appendChild(k.state.elements.cursor))})),T(this,"start",(function(){return k.state.eventLoopPaused=!1,k.runEventLoop(),k})),T(this,"pause",(function(){return k.state.eventLoopPaused=!0,k})),T(this,"stop",(function(){return k.state.eventLoop&&((0,e.cancel)(k.state.eventLoop),k.state.eventLoop=null),k})),T(this,"pauseFor",(function(e){return k.addEventToQueue(p,{ms:e}),k})),T(this,"typeOutAllStrings",(function(){return"string"==typeof k.options.strings?(k.typeString(k.options.strings).pauseFor(k.options.pauseFor),k):(k.options.strings.forEach((function(e){k.typeString(e).pauseFor(k.options.pauseFor).deleteAll(k.options.deleteSpeed)})),k)})),T(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n(e))return k.typeOutHTMLString(e,t);if(e){var r=k.options||{},a=r.stringSplitter,o="function"==typeof a?a(e):e.split("");k.typeCharacters(o,t)}return k})),T(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n(e)?k.typeOutHTMLString(e,t,!0):(e&&k.addEventToQueue(v,{character:e,node:t}),k)})),T(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=o(e);if(r.length>0)for(var a=0;a<r.length;a++){var s=r[a],i=s.innerHTML;s&&3!==s.nodeType?(s.innerHTML="",k.addEventToQueue(h,{node:s,parentNode:t}),n?k.pasteString(i,s):k.typeString(i,s)):s.textContent&&(n?k.pasteString(s.textContent,t):k.typeString(s.textContent,t))}return k})),T(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return k.addEventToQueue(c,{speed:e}),k})),T(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return k.addEventToQueue(m,{speed:e}),k})),T(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return k.addEventToQueue(g,{delay:e}),k})),T(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return k.addEventToQueue(f,{cursor:e}),k})),T(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)k.addEventToQueue(l);return k})),T(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return k.addEventToQueue(d,{cb:e,thisArg:t}),k})),T(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){k.addEventToQueue(i,{character:e,node:t})})),k})),T(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){k.addEventToQueue(l)})),k})),T(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return k.addEventToStateProperty(e,t,n,"eventQueue")})),T(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=k.options.loop;return r?k.addEventToStateProperty(e,t,n,"reverseCalledEvents"):k})),T(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,a={eventName:e,eventArgs:t||{}};return k.state[r]=n?[a].concat(j(k.state[r])):[].concat(j(k.state[r]),[a]),k})),T(this,"runEventLoop",(function(){k.state.lastFrameTime||(k.state.lastFrameTime=Date.now());var e=Date.now(),n=e-k.state.lastFrameTime;if(!k.state.eventQueue.length){if(!k.options.loop)return;k.state.eventQueue=j(k.state.calledEvents),k.state.calledEvents=[],k.options=w({},k.state.initialOptions)}if(k.state.eventLoop=t()(k.runEventLoop),!k.state.eventLoopPaused){if(k.state.pauseUntil){if(e<k.state.pauseUntil)return;k.state.pauseUntil=null}var r,a=j(k.state.eventQueue),o=a.shift();if(!(n<=(r=o.eventName===u||o.eventName===l?"natural"===k.options.deleteSpeed?s(40,80):k.options.deleteSpeed:"natural"===k.options.delay?s(120,160):k.options.delay))){var y=o.eventName,T=o.eventArgs;switch(k.logInDevMode({currentEvent:o,state:k.state,delay:r}),y){case v:case i:var _=T.character,E=T.node,C=document.createTextNode(_),x=C;k.options.onCreateTextNode&&"function"==typeof k.options.onCreateTextNode&&(x=k.options.onCreateTextNode(_,C)),x&&(E?E.appendChild(x):k.state.elements.wrapper.appendChild(x)),k.state.visibleNodes=[].concat(j(k.state.visibleNodes),[{type:"TEXT_NODE",character:_,node:x}]);break;case l:a.unshift({eventName:u,eventArgs:{removingCharacterNode:!0}});break;case p:var O=o.eventArgs.ms;k.state.pauseUntil=Date.now()+parseInt(O);break;case d:var S=o.eventArgs,A=S.cb,L=S.thisArg;A.call(L,{elements:k.state.elements});break;case h:var D=o.eventArgs,N=D.node,M=D.parentNode;M?M.appendChild(N):k.state.elements.wrapper.appendChild(N),k.state.visibleNodes=[].concat(j(k.state.visibleNodes),[{type:b,node:N,parentNode:M||k.state.elements.wrapper}]);break;case c:var P=k.state.visibleNodes,z=T.speed,R=[];z&&R.push({eventName:m,eventArgs:{speed:z,temp:!0}});for(var U=0,I=P.length;U<I;U++)R.push({eventName:u,eventArgs:{removingCharacterNode:!1}});z&&R.push({eventName:m,eventArgs:{speed:k.options.deleteSpeed,temp:!0}}),a.unshift.apply(a,R);break;case u:var Q=o.eventArgs.removingCharacterNode;if(k.state.visibleNodes.length){var H=k.state.visibleNodes.pop(),F=H.type,V=H.node,W=H.character;k.options.onRemoveNode&&"function"==typeof k.options.onRemoveNode&&k.options.onRemoveNode({node:V,character:W}),V&&V.parentNode.removeChild(V),F===b&&Q&&a.unshift({eventName:u,eventArgs:{}})}break;case m:k.options.deleteSpeed=o.eventArgs.speed;break;case g:k.options.delay=o.eventArgs.delay;break;case f:k.options.cursor=o.eventArgs.cursor,k.state.elements.cursor.innerHTML=o.eventArgs.cursor}k.options.loop&&(o.eventName===u||o.eventArgs&&o.eventArgs.temp||(k.state.calledEvents=[].concat(j(k.state.calledEvents),[o]))),k.state.eventQueue=a,k.state.lastFrameTime=e}}})),a)if("string"==typeof a){var _=document.querySelector(a);if(!_)throw new Error("Could not find container element");this.state.elements.container=_}else this.state.elements.container=a;y&&(this.options=w(w({},this.options),y)),this.state.initialOptions=w({},this.options),this.init()}var a,y;return a=r,(y=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(f,{cursor:this.options.cursor},!0),this.addEventToQueue(c,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a.prototype,y),Object.defineProperty(a,"prototype",{writable:!1}),r}()})(),a.default})(),e.exports=n()}).call(this,n("8oxB"))},Fes1:function(e,t,n){},NIYt:function(e,t,n){"use strict";n("20Yq")},Qfdy:function(e,t,n){"use strict";n("azaL")},RerK:function(e,t,n){"use strict";n.r(t);var r=n("4iU1"),a=n("bpPO"),o=n("kGzD"),s={components:{TypingHeader:r.a,Talks:a.a},metaInfo:()=>Object(o.a)("/talks")},i=n("KHd+"),l=Object(i.a)(s,(function(){var e=this._self._c;return e("Layout",[e("div",[e("TypingHeader",{attrs:{text:"Empower your engineers with experiential learning."}}),e("Talks",{attrs:{all:!0}})],1)])}),[],!1,null,null,null);t.default=l.exports},RnhZ:function(e,t,n){var r={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="RnhZ"},VKM1:function(e,t,n){"use strict";n("Fes1")},WSJG:function(e){e.exports=JSON.parse('[{"page":"/","pageTitle":"Welcome","title":"Home · Tarka Labs · Software Consulting Company","description":"Tarka Labs is a software consulting company and collective dedicated to designing and building meaningful, high performance web and mobile applications.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/web","pageTitle":"Web Development","title":"Full Stack Enterprise Software Solutions · Tarka Labs","description":"Ideate, architect and prototype scalable enterprise software solutions that transform your business, with our full-stack team of engineers.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/mobile","pageTitle":"Mobile Development","title":"Mobile App Development · Tarka Labs","description":"Explore cutting-edge mobile app development, implement leading technologies, and take your product to market from concept to creation.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/train","pageTitle":"Train","title":"Upskill Engineers With Software Training · Tarka Labs","description":"Hire our specialists to empower your engineers with software training and grow strong engineering divisions with holistic learning models.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/design","pageTitle":"Design","title":"Thoughtful design that works · Tarka Labs","description":"We design brands, products, and interfaces that look great, work like a charm, and wow users. Get an audit or start a new project.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/projects","pageTitle":"Projects","title":"All Projects · Product Design & Full Stack Development · Tarka Labs","description":"Explore web and mobile applications and solutions we’ve designed, developed and refactored for leading international brands across domains.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/talks","pageTitle":"Talks","title":"Videos · Technology, Frameworks & Remote Working · Tarka Labs","description":"Watch our thoughts on design and tech frameworks of the future, how we approach software development, and building an efficient remote work culture.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/about","pageTitle":"About Us","title":"About Us · Our Vision, Team & Work Culture · Tarka Labs","description":"Meet the minds that make up our tight knit collective at Tarka Labs. Here are some insights on who we are, how we think, and what we’re building.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/contact","pageTitle":"Contact Us","title":"Get In Touch · Consult Software Development Experts · Tarka Labs","description":"Have an idea that you want to brainstorm and breathe life into? Or interested in joining our team? Reach out to us at hello@tarkalabs.com.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/careers","pageTitle":"Careers","title":"Job Openings · Tarka Labs","description":"We love clean code, clever designs, everyday learning, and autonomy over our roles. Join our collective. Explore our current job openings.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"}]')},"Z+J/":function(e,t,n){},avmV:function(e,t,n){"use strict";n("4z6w")},azaL:function(e,t,n){},bpPO:function(e,t,n){"use strict";var r=n("cUuu"),a={props:["talk"],computed:{thumbnailUrl(){return this.talk.thumbnails.maxres?this.talk.thumbnails.maxres.url:this.talk.thumbnails.high.url}}},o=(n("avmV"),n("KHd+")),s=Object(o.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"talk"},[t("img",{attrs:{src:e.thumbnailUrl,alt:e.talk.title}}),t("div",{staticClass:"talk-details"},[t("span",{staticClass:"icon"},[e._v("|>")]),t("span",{staticClass:"title"},[t("div",[e._v(e._s(e.talk.title))]),t("div",{staticClass:"duration"},[e._v(e._s(e.talk.duration)+" video")])])])])}),[],!1,null,"76ad22b6",null).exports;n("2eJa");const i="AIzaSyCqkncovRFIZFoq-FXh7UtOlTr-fnAw7Vs",l=n("wd/R");async function c(){const e=new URL("https://youtube.googleapis.com/youtube/v3/playlistItems");e.searchParams.set("part","snippet"),e.searchParams.set("maxResults","25"),e.searchParams.set("playlistId","UUsp2ByME3L8blhODZFpSGSA"),e.searchParams.set("key",i);try{const t=await fetch(e);if(!t.ok)throw new Error("HTTP error: "+t.status);const n=await t.json(),{items:r}=n,a=r.map(e=>e.snippet.resourceId.videoId),o=await async function(e){const t=new URL("https://youtube.googleapis.com/youtube/v3/videos");t.searchParams.set("part","contentDetails"),t.searchParams.set("id",e),t.searchParams.set("key",i);try{const e=await fetch(t);if(!e.ok)throw new Error("HTTP error: "+e.status);const n=await e.json(),{items:r}=n;return Object.fromEntries(r.map(e=>[e.id,e.contentDetails]))}catch(e){console.error("Could not get video details: "+e)}}(a);return r.map(e=>{let t=e.snippet.resourceId.videoId;return{id:e.id,position:e.snippet.position,videoId:t,title:e.title,publishedAt:e.snippet.publishedAt,title:e.snippet.title,description:e.snippet.description,videoUrl:"https://youtu.be/".concat(t),videoEmbedUrl:"https://www.youtube.com/embed/".concat(t),thumbnails:e.snippet.thumbnails,duration:l.duration(o[t].duration).humanize()}})}catch(e){console.error("Could not get talks: "+e)}}var u={props:["all"],components:{Modal:r.a,TalkTile:s},data:()=>({allTalks:[],modalVisible:!1,talkUrl:""}),async mounted(){try{const e=await c();this.allTalks=e}catch(e){console.log(e)}},computed:{col1Tiles(){return this.talks().filter((e,t)=>t%2-1)},col2Tiles(){return this.talks().filter((e,t)=>t%2)}},methods:{talks(){return this.all?this.allTalks:this.allTalks.slice(0,4)},showTalk(e){this.talkUrl=e,this.modalVisible=!0},hideTalk(){this.modalVisible=!1}}},p=(n("NIYt"),Object(o.a)(u,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"talks"},[e.all?e._e():t("h3",[e._v("_media")]),t("div",{staticClass:"talks-group"},[t("div",{staticClass:"col-left"},e._l(e.col1Tiles,(function(n,r){return t("div",{key:r,staticClass:"item",on:{click:function(t){return e.showTalk(n.videoEmbedUrl)}}},[t("TalkTile",{attrs:{talk:n}})],1)})),0),t("div",{staticClass:"col right"},e._l(e.col2Tiles,(function(n,r){return t("div",{key:r,staticClass:"item",on:{click:function(t){return e.showTalk(n.videoEmbedUrl)}}},[t("TalkTile",{attrs:{talk:n}})],1)})),0)]),e.all?e._e():t("div",{staticClass:"more"},[e._v("\n    /\n    "),e._m(0)]),t("Modal",{attrs:{show:e.modalVisible,"close-handler":e.hideTalk}},[t("iframe",{attrs:{width:"100%",height:"100%",src:e.talkUrl,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)}),[function(){var e=this._self._c;return e("a",{attrs:{href:"/talks"}},[this._v("all "),e("br"),this._v("\n      talks")])}],!1,null,"2765c3ba",null));t.a=p.exports},cUuu:function(e,t,n){"use strict";n("nGR4");var r=n("KHd+"),a=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"lds-ripple"},[e("div"),e("div")])}],!1,null,"53a0f396",null).exports,o={data:()=>({hover:!1}),methods:{rotateSymbol(){this.hover=!this.hover}}},s=(n("Qfdy"),{props:["show","closeHandler","vimeo"],data:()=>({visible:!0}),components:{Loading:a,CloseIcon:Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"close",on:{click:function(t){return e.$emit("closeIconClick")},mouseenter:function(t){return e.rotateSymbol()},mouseleave:function(t){return e.rotateSymbol()}}},[t("div",{staticClass:"close-border"},[t("span",{class:["symbol",{rotateCW:!e.hover,rotateCCW:e.hover}]},[t("svg",{attrs:{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z",fill:"#000005"}})])])])])}),[],!1,null,"0956bbb0",null).exports},methods:{async hide(){this.toggle(),window.setTimeout(this.closeHandler,400),window.setTimeout(this.toggle,400)},toggle(){this.visible=!this.visible}}}),i=(n("gPGZ"),Object(r.a)(s,(function(){var e=this,t=e._self._c;return e.show?t("div",{class:["backdrop",{"fade-out":!e.visible},{"fade-in":e.visible}]},[t("div",{class:["content",{"move-down":!e.visible},{"move-up":e.visible},{vimeo:e.vimeo}]},[t("div",{staticClass:"loading"},[e.vimeo?t("Loading"):e._e()],1),t("CloseIcon",{staticClass:"close",on:{closeIconClick:function(t){return e.hide()}}}),e._t("default")],2)]):e._e()}),[],!1,null,"bf45840c",null));t.a=i.exports},gPGZ:function(e,t,n){"use strict";n("Z+J/")},idBc:function(e,t,n){},kGzD:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n("WSJG");function a(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}function o(e){const t=(new Date).toLocaleString("en-US",{timeZone:e});return new Date(t)}function s(e){let t=i(e)||i("/");return{title:t.pageTitle,meta:[{property:"og:image",content:t.og_image},{property:"og:image:height",content:t.og_image_height},{property:"og:image:width",content:t.og_image_width},{property:"og:title",content:t.title},{property:"og:description",content:t.description}]}}function i(e){return r.filter(t=>t.page==e).pop()}},nGR4:function(e,t,n){"use strict";n("idBc")}}]);