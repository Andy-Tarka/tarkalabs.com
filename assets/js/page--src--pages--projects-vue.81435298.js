(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1wfi":function(e,t,n){"use strict";n("ctW+")},"4iU1":function(e,t,n){"use strict";var i=n("950E"),o=n.n(i),r={mounted(){setTimeout(()=>{this.setAnimationHeight(),this.initTypeWriting()},100)},props:["text"],methods:{setAnimationHeight(){let e=this.$el,t=this.$el.querySelector(".placeholder");e.style.height=t.offsetHeight+"px"},initTypeWriting(){let e=this.$el.querySelector(".anim");new o.a(e,{strings:this.text,cursor:"_",delay:25,autoStart:!0})}}},a=(n("VKM1"),n("KHd+")),s=Object(a.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"container"},[e("h1",{staticClass:"placeholder"},[this._v(this._s(this.text))]),e("h1",{staticClass:"anim"})])}),[],!1,null,"46a5b38c",null);t.a=s.exports},"8/Zo":function(e,t,n){"use strict";n("e0qx")},"8oxB":function(e,t){var n,i,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&m())}function m(){if(!u){var e=s(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new g(e,t)),1!==c.length||u||s(m)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"950E":function(e,t,n){(function(t){var n;"undefined"!=typeof self&&self,n=()=>(()=>{var e={75:function(e){(function(){var n,i,o,r,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},i=t.hrtime,r=(n=function(){var e;return 1e9*(e=i())[0]+e[1]})(),s=1e9*t.uptime(),a=r-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var i=n(75),o="undefined"==typeof window?n.g:window,r=["moz","webkit"],a="AnimationFrame",s=o["request"+a],l=o["cancel"+a]||o["cancelRequest"+a],c=0;!s&&c<r.length;c++)s=o[r[c]+"Request"+a],l=o[r[c]+"Cancel"+a]||o[r[c]+"CancelRequest"+a];if(!s||!l){var u=0,d=0,p=[];s=function(e){if(0===p.length){var t=i(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return e[t].call(r.exports,r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";i.d(o,{default:()=>S});var e=i(4087),t=i.n(e);const n=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},r=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var s="TYPE_CHARACTER",l="REMOVE_CHARACTER",c="REMOVE_ALL",u="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",p="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",g="CHANGE_DELETE_SPEED",h="CHANGE_DELAY",v="CHANGE_CURSOR",f="PASTE_STRING",y="HTML_TAG";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const S=function(){function i(o,b){var T=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),k(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),k(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),k(this,"setupWrapperElement",(function(){T.state.elements.container&&(T.state.elements.wrapper.className=T.options.wrapperClassName,T.state.elements.cursor.className=T.options.cursorClassName,T.state.elements.cursor.innerHTML=T.options.cursor,T.state.elements.container.innerHTML="",T.state.elements.container.appendChild(T.state.elements.wrapper),T.state.elements.container.appendChild(T.state.elements.cursor))})),k(this,"start",(function(){return T.state.eventLoopPaused=!1,T.runEventLoop(),T})),k(this,"pause",(function(){return T.state.eventLoopPaused=!0,T})),k(this,"stop",(function(){return T.state.eventLoop&&((0,e.cancel)(T.state.eventLoop),T.state.eventLoop=null),T})),k(this,"pauseFor",(function(e){return T.addEventToQueue(d,{ms:e}),T})),k(this,"typeOutAllStrings",(function(){return"string"==typeof T.options.strings?(T.typeString(T.options.strings).pauseFor(T.options.pauseFor),T):(T.options.strings.forEach((function(e){T.typeString(e).pauseFor(T.options.pauseFor).deleteAll(T.options.deleteSpeed)})),T)})),k(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n(e))return T.typeOutHTMLString(e,t);if(e){var i=T.options||{},o=i.stringSplitter,r="function"==typeof o?o(e):e.split("");T.typeCharacters(r,t)}return T})),k(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n(e)?T.typeOutHTMLString(e,t,!0):(e&&T.addEventToQueue(f,{character:e,node:t}),T)})),k(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,i=r(e);if(i.length>0)for(var o=0;o<i.length;o++){var a=i[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",T.addEventToQueue(m,{node:a,parentNode:t}),n?T.pasteString(s,a):T.typeString(s,a)):a.textContent&&(n?T.pasteString(a.textContent,t):T.typeString(a.textContent,t))}return T})),k(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return T.addEventToQueue(c,{speed:e}),T})),k(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return T.addEventToQueue(g,{speed:e}),T})),k(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return T.addEventToQueue(h,{delay:e}),T})),k(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return T.addEventToQueue(v,{cursor:e}),T})),k(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)T.addEventToQueue(l);return T})),k(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return T.addEventToQueue(p,{cb:e,thisArg:t}),T})),k(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){T.addEventToQueue(s,{character:e,node:t})})),T})),k(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){T.addEventToQueue(l)})),T})),k(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return T.addEventToStateProperty(e,t,n,"eventQueue")})),k(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=T.options.loop;return i?T.addEventToStateProperty(e,t,n,"reverseCalledEvents"):T})),k(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return T.state[i]=n?[o].concat(_(T.state[i])):[].concat(_(T.state[i]),[o]),T})),k(this,"runEventLoop",(function(){T.state.lastFrameTime||(T.state.lastFrameTime=Date.now());var e=Date.now(),n=e-T.state.lastFrameTime;if(!T.state.eventQueue.length){if(!T.options.loop)return;T.state.eventQueue=_(T.state.calledEvents),T.state.calledEvents=[],T.options=w({},T.state.initialOptions)}if(T.state.eventLoop=t()(T.runEventLoop),!T.state.eventLoopPaused){if(T.state.pauseUntil){if(e<T.state.pauseUntil)return;T.state.pauseUntil=null}var i,o=_(T.state.eventQueue),r=o.shift();if(!(n<=(i=r.eventName===u||r.eventName===l?"natural"===T.options.deleteSpeed?a(40,80):T.options.deleteSpeed:"natural"===T.options.delay?a(120,160):T.options.delay))){var b=r.eventName,k=r.eventArgs;switch(T.logInDevMode({currentEvent:r,state:T.state,delay:i}),b){case f:case s:var S=k.character,E=k.node,C=document.createTextNode(S),D=C;T.options.onCreateTextNode&&"function"==typeof T.options.onCreateTextNode&&(D=T.options.onCreateTextNode(S,C)),D&&(E?E.appendChild(D):T.state.elements.wrapper.appendChild(D)),T.state.visibleNodes=[].concat(_(T.state.visibleNodes),[{type:"TEXT_NODE",character:S,node:D}]);break;case l:o.unshift({eventName:u,eventArgs:{removingCharacterNode:!0}});break;case d:var A=r.eventArgs.ms;T.state.pauseUntil=Date.now()+parseInt(A);break;case p:var x=r.eventArgs,F=x.cb,j=x.thisArg;F.call(j,{elements:T.state.elements});break;case m:var L=r.eventArgs,O=L.node,N=L.parentNode;N?N.appendChild(O):T.state.elements.wrapper.appendChild(O),T.state.visibleNodes=[].concat(_(T.state.visibleNodes),[{type:y,node:O,parentNode:N||T.state.elements.wrapper}]);break;case c:var R=T.state.visibleNodes,P=k.speed,M=[];P&&M.push({eventName:g,eventArgs:{speed:P,temp:!0}});for(var G=0,H=R.length;G<H;G++)M.push({eventName:u,eventArgs:{removingCharacterNode:!1}});P&&M.push({eventName:g,eventArgs:{speed:T.options.deleteSpeed,temp:!0}}),o.unshift.apply(o,M);break;case u:var I=r.eventArgs.removingCharacterNode;if(T.state.visibleNodes.length){var V=T.state.visibleNodes.pop(),W=V.type,Q=V.node,B=V.character;T.options.onRemoveNode&&"function"==typeof T.options.onRemoveNode&&T.options.onRemoveNode({node:Q,character:B}),Q&&Q.parentNode.removeChild(Q),W===y&&I&&o.unshift({eventName:u,eventArgs:{}})}break;case g:T.options.deleteSpeed=r.eventArgs.speed;break;case h:T.options.delay=r.eventArgs.delay;break;case v:T.options.cursor=r.eventArgs.cursor,T.state.elements.cursor.innerHTML=r.eventArgs.cursor}T.options.loop&&(r.eventName===u||r.eventArgs&&r.eventArgs.temp||(T.state.calledEvents=[].concat(_(T.state.calledEvents),[r]))),T.state.eventQueue=o,T.state.lastFrameTime=e}}})),o)if("string"==typeof o){var S=document.querySelector(o);if(!S)throw new Error("Could not find container element");this.state.elements.container=S}else this.state.elements.container=o;b&&(this.options=w(w({},this.options),b)),this.state.initialOptions=w({},this.options),this.init()}var o,b;return o=i,(b=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(v,{cursor:this.options.cursor},!0),this.addEventToQueue(c,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(o.prototype,b),Object.defineProperty(o,"prototype",{writable:!1}),i}()})(),o.default})(),e.exports=n()}).call(this,n("8oxB"))},Fes1:function(e,t,n){},GF4N:function(e,t,n){},IhSV:function(e,t,n){"use strict";var i=n("PPrx"),o={props:["testimonial","themed"],computed:{theme(){if(this.themed&&this.testimonial&&this.testimonial.client)return Object(i.c)(this.testimonial.client.style)}}},r=(n("Ki1S"),n("KHd+")),a=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:["testimonial",{themed:e.themed}],style:e.theme},[t("div",[t("g-image",{attrs:{src:n("GSoK")("./"+e.testimonial.profile_pic),alt:e.testimonial.profile_pic_alt,immediate:!0}})],1),t("div",{staticClass:"comment"},e._l(e.testimonial.comments,(function(n){return t("p",{key:n},[e._v("\n      "+e._s(n)+"\n    ")])})),0),t("div",{staticClass:"footer"},[t("div",{staticClass:"by"},[t("div",{staticClass:"name"},[e._v(e._s(e.testimonial.name))]),t("div",{staticClass:"entity"},[e._v("\n        "+e._s(e.testimonial.role)+"\n        "),e.testimonial.client?t("span",[e._v("\n          , "+e._s(e.testimonial.client.name)+"\n        ")]):e._e()])]),e.testimonial.casestudySlug?t("g-link",{staticClass:"project-link",style:e.theme,attrs:{to:`${"dev"==e.testimonial.type?"works":"design"}/${e.testimonial.casestudySlug}`}},[e._v("\n      View project ->\n    ")]):e._e()],1)])}),[],!1,null,"2862e407",null);t.a=a.exports},Ki1S:function(e,t,n){"use strict";n("GF4N")},VKM1:function(e,t,n){"use strict";n("Fes1")},WSJG:function(e){e.exports=JSON.parse('[{"page":"/","pageTitle":"Welcome","title":"Home · Tarka Labs · Software Consulting Company","description":"Tarka Labs is a software consulting company and collective dedicated to designing and building meaningful, high performance web and mobile applications.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/web","pageTitle":"Web Development","title":"Full Stack Enterprise Software Solutions · Tarka Labs","description":"Ideate, architect and prototype scalable enterprise software solutions that transform your business, with our full-stack team of engineers.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/mobile","pageTitle":"Mobile Development","title":"Mobile App Development · Tarka Labs","description":"Explore cutting-edge mobile app development, implement leading technologies, and take your product to market from concept to creation.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/train","pageTitle":"Train","title":"Upskill Engineers With Software Training · Tarka Labs","description":"Hire our specialists to empower your engineers with software training and grow strong engineering divisions with holistic learning models.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/design","pageTitle":"Design","title":"Thoughtful design that works · Tarka Labs","description":"We design brands, products, and interfaces that look great, work like a charm, and wow users. Get an audit or start a new project.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/projects","pageTitle":"Projects","title":"All Projects · Product Design & Full Stack Development · Tarka Labs","description":"Explore web and mobile applications and solutions we’ve designed, developed and refactored for leading international brands across domains.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/talks","pageTitle":"Talks","title":"Videos · Technology, Frameworks & Remote Working · Tarka Labs","description":"Watch our thoughts on design and tech frameworks of the future, how we approach software development, and building an efficient remote work culture.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/about","pageTitle":"About Us","title":"About Us · Our Vision, Team & Work Culture · Tarka Labs","description":"Meet the minds that make up our tight knit collective at Tarka Labs. Here are some insights on who we are, how we think, and what we’re building.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/contact","pageTitle":"Contact Us","title":"Get In Touch · Consult Software Development Experts · Tarka Labs","description":"Have an idea that you want to brainstorm and breathe life into? Or interested in joining our team? Reach out to us at hello@tarkalabs.com.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/careers","pageTitle":"Careers","title":"Job Openings · Tarka Labs","description":"We love clean code, clever designs, everyday learning, and autonomy over our roles. Join our collective. Explore our current job openings.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"}]')},"ctW+":function(e,t,n){},e0qx:function(e,t,n){},fx0o:function(e,t,n){"use strict";n.r(t);n("FNk8");var i=n("4iU1"),o=n("IhSV"),r=n("OlP7"),a=n("9jq1"),s={props:["filters","currentFilter"]},l=(n("8/Zo"),n("KHd+")),c=Object(l.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"group"},e._l(e.filters,(function(n,i){return t("div",{key:i,class:{item:!0,selected:n==e.currentFilter},on:{click:function(t){return e.$emit("toggleFilterClick",n)}}},[e._v("\n    "+e._s(n)+"\n  ")])})),0)}),[],!1,null,"6eb00d4a",null).exports,u=n("kGzD"),d={data:()=>({currentFilter:"",serviceFilters:["DevOps","Design","Development","CTO-as-a-Service"]}),components:{TypingHeader:i.a,TilesGroup:a.a,Testimonial:o.a,Filters:c},methods:{updateCurrentFilter(e){this.currentFilter==e?this.currentFilter="":this.currentFilter=e}},computed:{projectGroups(){let e=this.$static.allProjects.edges;var t=e;this.currentFilter.length&&(t=e.filter(e=>e.node.serviceGroups.includes(this.currentFilter)));let n=Object(r.c)(t),i=[];for(;n.length;)i.push(n.splice(0,4));return i},testimonials(){let e=this.$static.allTestimonials.edges.map(e=>e.node);return Object(u.c)(e)}},metaInfo:()=>Object(u.a)("/projects")},p=(n("1wfi"),n("Kw5r"));const{computed:m}=p.a.config.optionMergeStrategies,g={allProjects:{edges:[{node:{type:"web",description:"Re-engineering the mechanics of music distribution with faster transcoding.",services:["Frontend development","Backend development","Devops","Design"],serviceGroups:["Development","DevOps","Design","CTO-as-a-Service"],technologies:["Ruby","Rails","React","Storybook","AWS"],client:{name:"TuneCore",style:"black"},tileVideo:"tunecore.mp4",casestudySlug:"tunecore"}},{node:{type:"web",description:"How do you bring enterprise labelling into the collaborative age?",services:["Frontend development","Backend development","Devops","Design"],serviceGroups:["Development","DevOps","Design"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"Gaea Global",style:"red"},tileVideo:"",casestudySlug:"cls"}},{node:{type:"web",description:"Streamlining customer checkout with a Single Page Application (SPA) built on Mithril.",services:["Frontend development","Backend development"],serviceGroups:["Development","CTO-as-a-Service"],technologies:["Mithril js","Ruby","Rails","Magento"],client:{name:"Caratlane",style:"blue"},tileVideo:"",casestudySlug:"caratlane"}},{node:{type:"mobile",description:"Implementation of interactive healthcare technology in medical landscape for better information flow.",services:["Mobile development"],serviceGroups:["Development"],technologies:["Swift","AVAudioEngine"],client:{name:"Abridge",style:"orange"},tileVideo:"",casestudySlug:"abridge"}},{node:{type:"web",description:"Delivering farm-to-fridge groceries with an innovative AI-powered platform.",services:["Frontend development","Backend development"],serviceGroups:["Development"],technologies:["Ruby","Rails"],client:{name:"Farmstead",style:"green"},tileVideo:"",casestudySlug:"farmstead"}},{node:{type:"web",description:"Innovative, data rich and highly customized PDFs, generated on demand based on user DNA profiles.",services:["Frontend development","Backend development","Design"],serviceGroups:["Development","Design"],technologies:["Ruby","Rails","HexaPdf"],client:{name:"Genetic Direction",style:"dark-blue"},tileVideo:"",casestudySlug:"genetic-direction"}},{node:{type:"design",description:"A place where creators can share and monetize their daily routines.",services:["Art direction","Web & app design","Information architecture","Prototyping"],serviceGroups:["Design"],technologies:["Figma","After Effects","Illustrator","Photoshop"],client:{name:"Routinr",style:"purple-blue"},tileVideo:"",casestudySlug:"routinr"}},{node:{type:"web",description:"Plastic Recycling Platform discovery which helps producers to comply with Extended Producer Responsibility (EPR) norms",services:["Discovery","Consulting"],serviceGroups:[],technologies:["Whiteboard","Sketch","Trello"],client:{name:"Social Lab",style:"yellow"},tileVideo:"",casestudySlug:"social-lab"}},{node:{type:"web",description:"Intelligent fleet management and tracking, powered by Django and Python.",services:["Frontend development","Backend development"],serviceGroups:["Development"],technologies:["Django","Python"],client:{name:"Glydel",style:"grey"},tileVideo:"",casestudySlug:"glydel"}},{node:{type:"iot",description:"Unlocking production efficiency with RaspberryPi and NFC-driven real time tool tracking.",services:["IOT development"],serviceGroups:["Development"],technologies:["Python","Node.js"],client:{name:"GE Digital Services",style:"green"},tileVideo:"",casestudySlug:"ge"}},{node:{type:"mobile",description:"Immersive and engaging news, minus the clickbait and clutter.",services:["Mobile development"],serviceGroups:["Development"],technologies:["Objective C"],client:{name:"Inkl",style:"dark-blue"},tileVideo:"",casestudySlug:"inkl"}},{node:{type:"web",description:"Building an immersive landing page for the Creative Difference project.",services:["Frontend development"],serviceGroups:["Development"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"IDEO",style:"yellow"},tileVideo:"",casestudySlug:"ideo"}},{node:{type:"web",description:"Accelerated credit profiling and risk analysis through codebase refactoring.",services:["Backend development"],serviceGroups:["Development"],technologies:["Ruby","Rails","PostgreSQL"],client:{name:"IDExcel",style:"grey"},tileVideo:"",casestudySlug:"idexcel"}},{node:{type:"web",description:"Building immersive digital billboards and web embeds for Fankave.",services:["Frontend development","Backend development","Design"],serviceGroups:["Development","Design"],technologies:["React","Javascript","CSS","Scala"],client:{name:"Fankave",style:"black"},tileVideo:"",casestudySlug:"fankave"}},{node:{type:"web",description:"Supercharging the sales pipeline with Rails-powered enterprise automation.",services:["Frontend development","Backend development"],serviceGroups:["Development"],technologies:["Ruby","Rails"],client:{name:"Jiffle Now",style:"pink"},tileVideo:"",casestudySlug:"jiffle-now"}},{node:{type:"web",description:"How we helped 10i Commerce scale their Spree platform to process 100k+ orders.",services:["Consulting","Backend development"],serviceGroups:["Development"],technologies:["Ruby","Rails","Spree"],client:{name:"10i Commerce",style:"dark-blue"},tileVideo:"",casestudySlug:"10icommerce"}},{node:{type:"web",description:"Making a difference with the International Fund For Agricultural Development.",services:["Consulting","Backend development"],serviceGroups:["Development"],technologies:["Ruby","Rails"],client:{name:"IFAD",style:"yellow"},tileVideo:"",casestudySlug:"ifad"}},{node:{type:"web",description:"React-based fleet management solution, trip simulator and insurance telematics.",services:["Frontend development","Backend development","Design"],serviceGroups:["Development","Design"],technologies:["Ruby","Rails","React","Javascript"],client:{name:"Modus",style:"pink"},tileVideo:"",casestudySlug:"modus"}}]},allTestimonials:{edges:[{node:{id:"1",name:"Gurukeerthi Gurunathan",role:"Co-founder",comments:["Tarka Labs has thought leaders and subject matter experts. They solve complex problems and build robust well-architected systems, and our conversations are always enriching. They are passionate tech craftsmen abreast with the latest trends. They have definitely exceeded my expectations."],profile_pic:"client/guru.jpeg",profile_pic_alt:"Headshot of Gurukeerthi Gurunathan",casestudySlug:"caratlane",type:"dev",client:{name:"Caratlane",style:"blue"}}},{node:{id:"2",name:"Sasi Parthasarathy",role:"Founder",comments:["Tarka Labs has been a great discovery for Fankave. They helped us build an array of interactive social experiences. Quite impressed with the team’s technical acumen. I'd recommend Tarka Labs if you’re trying to build an MVP, scale your product or at any stage of growth."],profile_pic:"client/sasi.jpeg",profile_pic_alt:"Headshot of Sasi Parthasarathy",casestudySlug:"fankave",type:"dev",client:{name:"Fankave",style:"black"}}},{node:{id:"3",name:"Michael Sparks",role:"Direction of Technology",comments:["Tarka Labs consultants are smart, effective communicators and extremely educative. Their quality of code is highly impressive. They’ve built a robust foundation, where reusable components and systems have been our key differentiators. It’s hard to cross boundaries in technology, but they’ve built thoughtful and scalable solutions by working on multiple code repositories with ease."],profile_pic:"client/michael.jpeg",profile_pic_alt:"Headshot of Michael Sparks",casestudySlug:"genetic-direction",type:"dev",client:{name:"Genetic Direction",style:"dark-blue"}}},{node:{id:"4",name:"Sandeep Konam",role:"CTO",comments:["Tarka Labs consultants are passionate, with a flair for software craftsmanship. They were in complete synergy with our team, especially in their communication and accessibility. There’s no bureaucracy, so consultants could make decisions with very less interference."],profile_pic:"client/sandeep.jpeg",profile_pic_alt:"Headshot of Sandeep Konam",casestudySlug:"",type:"dev",client:{name:"Abridge",style:"orange"}}},{node:{id:"5",name:"Jason Mancuso",role:"Director-SCM Practice",comments:["It’s been a delight to work with Tarka Labs. Their interactions are articulate and consultants get into great development cadence quickly. They have excellent command in backend and web development, and their solutions added value to the schema of business."],profile_pic:"client/jason.jpeg",profile_pic_alt:"Headshot of Jason Mancuso",casestudySlug:"cls",type:"dev",client:{name:"Gaea Global",style:"red"}}},{node:{id:"6",name:"Rahul Juware",role:"Founder",comments:["The sheer commitment to detailing the product during the discovery phase was contagious. The quality of questions posed made us look at the idea from a different perspective. And the deliverables were completed without cutting any corners. The whole experience has been enriching!"],profile_pic:"client/rahul.jpeg",profile_pic_alt:"Headshot of Rahul Juware",casestudySlug:"social-lab",type:"dev",client:{name:"Social Lab",style:"yellow"}}},{node:{id:"7",name:"Toktam Rezaei",role:"Senior Technical Program Manager",comments:["They’re the best technology team I have ever worked with. Tarka Labs delivered a user-friendly platform that received positive feedback directly from customers. Even though it has been in use for several years, the code is still reliable and scales without any issues. The team's agile methods enabled them to promptly turn projects around while brainstorming ways to make the process more productive."],profile_pic:"client/toktam.jpg",profile_pic_alt:"Headshot of Toktam Rezaei",casestudySlug:"tunecore",type:"dev",client:{name:"TuneCore",style:"black"}}},{node:{id:"8",name:"Steve Smith",role:"Founder",comments:["I’ve worked with Tarka Labs on a platform project with a lot of moving pieces and custom features that took a deep thinking team to bring the idea to life. They are deep thinkers, analyze current solutions, ask insightful questions, and come up with solutions that really refined the ideas into a truly unique platform. They bring open thinking, disruptive ideas, and challenge conventional thinking. Be prepared!"],profile_pic:"client/steve.jpg",profile_pic_alt:"Headshot of Steve Smith",casestudySlug:"",type:"design",client:{name:"EquipmentFX",style:"yellow"}}},{node:{id:"9",name:"Eric Czarnopys",role:"CTO",comments:["Tarka truly is a World-class team of skilled thought designers.","The experience design surpassed our expectations, resulting in an elegant and intuitive product blueprint.","The offline internal collaboration within the team results in the clearest product presentation to the end client."],profile_pic:"client/eric.jpg",profile_pic_alt:"Headshot of Eric Czarnopys",casestudySlug:"beatclub",type:"design",client:{name:"Beatclub",style:"dark-grey"}}},{node:{id:"10",name:"Amy McLeod",role:"Project Manager",comments:["The team at Tarka labs have exceeded my expectations during our collaboration! Their expertise, coaching, and ability to bring our ideas to life have greatly enhanced our app prototype development and prepared us for the user testing phase of our project. Forever grateful!"],profile_pic:"client/amy.jpeg",profile_pic_alt:"Headshot of Amy McLeod",casestudySlug:"",type:"design",client:{name:"eVisitNB",style:"red"}}}]}};var h=({options:e})=>{e.__staticData?e.__staticData.data=g:(e.__staticData=p.a.observable({data:g}),e.computed=m({$static:()=>e.__staticData.data},e.computed))},v=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("Layout",[t("TypingHeader",{attrs:{text:"We build bridges between ideas and execution."}}),t("Filters",{attrs:{filters:e.serviceFilters,currentFilter:e.currentFilter},on:{toggleFilterClick:e.updateCurrentFilter}}),t("div",e._l(e.projectGroups,(function(n,i){return t("div",{key:i},[t("TilesGroup",{attrs:{projects:n}}),t("div",{staticClass:"testimonial-section"},[t("Testimonial",{key:i,attrs:{testimonial:e.testimonials[i],themed:!0}})],1)],1)})),0)],1)}),[],!1,null,"f6a1c646",null);"function"==typeof h&&h(v);t.default=v.exports},kGzD:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n("WSJG");function o(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e}function r(e){const t=(new Date).toLocaleString("en-US",{timeZone:e});return new Date(t)}function a(e){let t=s(e)||s("/");return{title:t.pageTitle,meta:[{property:"og:image",content:t.og_image},{property:"og:image:height",content:t.og_image_height},{property:"og:image:width",content:t.og_image_width},{property:"og:title",content:t.title},{property:"og:description",content:t.description}]}}function s(e){return i.filter(t=>t.page==e).pop()}}}]);