(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2aGX":function(t,e,a){"use strict";a.r(e);a("DQNa"),a("R5XZ");var i=a("kGzD"),n={created:function(){var t=this;setInterval((function(){t.$forceUpdate()}),9e5)},props:["data"],computed:{isPast:function(){var t=new Date(this.data.day),e=Object(i.b)("Asia/Kolkata");return t.getDate()<e.getDate()&&t.getMonth()===e.getMonth()&&t.getYear()===e.getYear()},isToday:function(){var t=new Date(this.data.day),e=Object(i.b)("Asia/Kolkata");return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getYear()===e.getYear()}},methods:{getActivityHeight:function(t){return t?"".concat(50*t.duration,"px"):"0"},getNowLineHeight:function(){console.log("inside now line height");var t=Object(i.b)("Asia/Kolkata"),e=new Date(t),a=this.isPast?18:e.getHours()+e.getMinutes()/60-6;return console.log("Now line height hours: ",a),"".concat(50*a,"px")}}},o=(a("ThZC"),a("KHd+")),r={mounted:function(){var t=this;setTimeout((function(){for(var e=Object(i.b)("Asia/Kolkata").getTime(),a=0;a<t.plan.length;a++){if(e<new Date(t.plan[a].day).getTime())break}var n=t.$refs.planElem.children[0].offsetWidth;a!=t.plan.length&&(t.$refs.planElem.scrollLeft=n*(a-1))}),100)},props:["plan"],components:{DayView:Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day"},[a("div",{staticClass:"date"},[t._v(t._s(this.data.day))]),a("div",{staticClass:"timeline"},[t.isPast||t.isToday?a("div",{staticClass:"now-line",style:{height:t.getNowLineHeight()}}):t._e(),t._l(this.data.schedule,(function(e){return a("div",{key:e.time,staticClass:"row"},[a("div",{staticClass:"time"},[t._v(t._s(e.time))]),a("div",{staticClass:"desc",style:{height:t.getActivityHeight(e)}},[t._v("\n        "+t._s(e.details)+"\n      ")])])}))],2)])}),[],!1,null,"1c6a336e",null).exports}},s=(a("BDel"),{components:{Planner:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"planElem",staticClass:"plan"},this._l(this.plan,(function(t){return e("div",{key:t.node.day},[e("DayView",{attrs:{data:t.node}})],1)})),0)}),[],!1,null,"8baa2460",null).exports},computed:{planData:function(){return this.$static.allRetreatSchedule.edges}},metaInfo:function(){return Object(i.a)("/retreat")}}),l=(a("R0mt"),a("Kw5r")),c=l.a.config.optionMergeStrategies.computed,g={allRetreatSchedule:{edges:[{node:{day:"2022/03/25",schedule:[{time:"6 AM",duration:6,details:"Loading retreat..."},{time:"12 PM",duration:1,details:"Tarkans, Assemble!"},{time:"1 PM",duration:1,details:"Lunch along with blah blah"},{time:"2 PM",duration:1.5,details:"Indoor games, swimming? in the pool"},{time:"3:30 PM",duration:1,details:"Coffee / Tea break"},{time:"4:30 PM",duration:3.5,details:"Outdoor games and activities"},{time:"8 PM",duration:2,details:"Dinner, Camp fire with deep thought discussions"}]}},{node:{day:"2022/03/26",schedule:[{time:"6 AM",duration:2,details:"Trekking"},{time:"8 AM",duration:2,details:"Breakfast for the nerds. No food after 10:30 AM. Resort rules!"},{time:"10 AM",duration:3,details:"Tech chit chats (talks). Let us get together and learn"},{time:"1 PM",duration:3,details:"Lunch and learn"},{time:"4 PM",duration:6,details:"Local sight seeing + shopping"}]}},{node:{day:"2022/03/27",schedule:[{time:"6 AM",duration:2,details:"Rainforest walk"},{time:"8 AM",duration:2,details:"Breakfast for the nerds : Reloaded"},{time:"10 AM",duration:2,details:"Tech chit chats continued"},{time:"12 PM",duration:1,details:"Lets build something fun..."},{time:"1 PM",duration:2,details:"along with lunch"},{time:"3 PM",duration:1,details:"Tarka Labs : To infinity and beyond"},{time:"4 PM",duration:4,details:"Kayaking, ATV bike ride & Sunset boat ride"},{time:"8 PM",duration:2,details:"Dinner with camp fire with / without deep thought"}]}},{node:{day:"2022/03/28",schedule:[{time:"6 AM",duration:2,details:"Zzzzz"},{time:"8 AM",duration:2,details:"Breakfast for the nerds : Revolutions"},{time:"10 AM",duration:4,details:"Start checkout"}]}}]}},u=function(t){var e=t.options;e.__staticData?e.__staticData.data=g:(e.__staticData=l.a.observable({data:g}),e.computed=c({$static:function(){return e.__staticData.data}},e.computed))},d=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"retreat"},[e("h2",[this._v("Tarka Retreat 2022")]),e("p",[this._v("\n      Every year, We gather and take a step back to look at our journey so far\n      as individuals and as a group. This is an opportunity to not think about\n      everyday work but rather, to reflect on self and learn from each other.\n    ")]),e("h3",[this._v("Location")]),e("p",[e("a",{staticClass:"external",attrs:{href:"https://g.page/Riverroostresorts?share",target:"_blank",rel:"noopener"}},[this._v("River Roost, Mangalore")])]),e("h3",[this._v("Schedule")]),e("div",{staticClass:"plan-container"},[e("Planner",{attrs:{plan:this.planData}})],1)])])}),[],!1,null,"6367881c",null);"function"==typeof u&&u(d);e.default=d.exports},"4Brf":function(t,e,a){"use strict";var i=a("I+eb"),n=a("g6v/"),o=a("2oRo"),r=a("UTVS"),s=a("hh1v"),l=a("m/L8").f,c=a("6JNq"),g=o.Symbol;if(n&&"function"==typeof g&&(!("description"in g.prototype)||void 0!==g().description)){var u={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new g(t):void 0===t?g():g(t);return""===t&&(u[e]=!0),e};c(d,g);var p=d.prototype=g.prototype;p.constructor=d;var h=p.toString,f="Symbol(test)"==String(g("test")),m=/^Symbol\((.*)\)[^)]+$/;l(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(r(u,t))return"";var a=f?e.slice(7,-1):e.replace(m,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:d})}},"4XjB":function(t,e,a){},"5Tg+":function(t,e,a){var i=a("tiKp");e.f=i},BDel:function(t,e,a){"use strict";var i=a("4XjB");a.n(i).a},"BX/b":function(t,e,a){var i=a("/GqU"),n=a("JBy8").f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return r&&"[object Window]"==o.call(t)?function(t){try{return n(t)}catch(t){return r.slice()}}(t):n(i(t))}},DQNa:function(t,e,a){var i=a("busE"),n=Date.prototype,o=n.toString,r=n.getTime;new Date(NaN)+""!="Invalid Date"&&i(n,"toString",(function(){var t=r.call(this);return t==t?o.call(this):"Invalid Date"}))},R0mt:function(t,e,a){"use strict";var i=a("pNd9");a.n(i).a},ThZC:function(t,e,a){"use strict";var i=a("vQm4");a.n(i).a},WSJG:function(t){t.exports=JSON.parse('[{"page":"/","pageTitle":"Welcome","title":"Home · Tarka Labs · Software Consulting Company","description":"Tarka Labs is a software consulting company and collective dedicated to designing and building meaningful, high performance web and mobile applications.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/web","pageTitle":"Web Development","title":"Full Stack Enterprise Software Solutions · Tarka Labs","description":"Ideate, architect and prototype scalable enterprise software solutions that transform your business, with our full-stack team of engineers.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/mobile","pageTitle":"Mobile Development","title":"Mobile App Development · Tarka Labs","description":"Explore cutting-edge mobile app development, implement leading technologies, and take your product to market from concept to creation.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/train","pageTitle":"Train","title":"Upskill Engineers With Software Training · Tarka Labs","description":"Hire our specialists to empower your engineers with software training and grow strong engineering divisions with holistic learning models.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/design","pageTitle":"Design","title":"Thoughtful design that works · Tarka Labs","description":"We design brands, products, and interfaces that look great, work like a charm, and wow users. Get an audit or start a new project.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/projects","pageTitle":"Projects","title":"All Projects · Product Design & Full Stack Development · Tarka Labs","description":"Explore web and mobile applications and solutions we’ve designed, developed and refactored for leading international brands across domains.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/talks","pageTitle":"Talks","title":"Videos · Technology, Frameworks & Remote Working · Tarka Labs","description":"Watch our thoughts on design and tech frameworks of the future, how we approach software development, and building an efficient remote work culture.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/about","pageTitle":"About Us","title":"About Us · Our Vision, Team & Work Culture · Tarka Labs","description":"Meet the minds that make up our tight knit collective at Tarka Labs. Here are some insights on who we are, how we think, and what we’re building.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/contact","pageTitle":"Contact Us","title":"Get In Touch · Consult Software Development Experts · Tarka Labs","description":"Have an idea that you want to brainstorm and breathe life into? Or interested in joining our team? Reach out to us at hello@tarkalabs.com.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/careers","pageTitle":"Careers","title":"Job Openings · Tarka Labs","description":"We love clean code, clever designs, everyday learning, and autonomy over our roles. Join our collective. Explore our current job openings.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"}]')},"dG/n":function(t,e,a){var i=a("Qo9l"),n=a("UTVS"),o=a("5Tg+"),r=a("m/L8").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||r(e,t,{value:o.f(t)})}},kGzD:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return r}));a("pNMO"),a("4Brf"),a("TeQF"),a("DQNa");var i=a("WSJG");function n(t){for(var e,a,i=t.length;0!==i;)a=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[a],t[a]=e;return t}function o(t){var e=(new Date).toLocaleString("en-US",{timeZone:t});return new Date(e)}function r(t){var e=s(t)||s("/");return{title:e.pageTitle,meta:[{property:"og:image",content:e.og_image},{property:"og:image:height",content:e.og_image_height},{property:"og:image:width",content:e.og_image_width},{property:"og:title",content:e.title},{property:"og:description",content:e.description}]}}function s(t){return i.filter((function(e){return e.page==t})).pop()}},pNMO:function(t,e,a){"use strict";var i=a("I+eb"),n=a("2oRo"),o=a("0GbY"),r=a("xDBR"),s=a("g6v/"),l=a("STAE"),c=a("/b8u"),g=a("0Dky"),u=a("UTVS"),d=a("6LWA"),p=a("hh1v"),h=a("glrk"),f=a("ewvW"),m=a("/GqU"),b=a("wE6v"),v=a("XGwC"),y=a("fHMY"),_=a("33Wh"),w=a("JBy8"),k=a("BX/b"),T=a("dBg+"),S=a("Bs8V"),D=a("m/L8"),M=a("0eef"),O=a("kRJp"),P=a("busE"),L=a("VpIT"),j=a("93I0"),A=a("0BK2"),x=a("kOOl"),C=a("tiKp"),E=a("5Tg+"),N=a("dG/n"),R=a("1E5z"),B=a("afO8"),W=a("tycR").forEach,G=j("hidden"),J=C("toPrimitive"),I=B.set,H=B.getterFor("Symbol"),U=Object.prototype,K=n.Symbol,V=o("JSON","stringify"),$=S.f,Q=D.f,z=k.f,X=M.f,F=L("symbols"),Y=L("op-symbols"),Z=L("string-to-symbol-registry"),q=L("symbol-to-string-registry"),tt=L("wks"),et=n.QObject,at=!et||!et.prototype||!et.prototype.findChild,it=s&&g((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,a){var i=$(U,e);i&&delete U[e],Q(t,e,a),i&&t!==U&&Q(U,e,i)}:Q,nt=function(t,e){var a=F[t]=y(K.prototype);return I(a,{type:"Symbol",tag:t,description:e}),s||(a.description=e),a},ot=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},rt=function(t,e,a){t===U&&rt(Y,e,a),h(t);var i=b(e,!0);return h(a),u(F,i)?(a.enumerable?(u(t,G)&&t[G][i]&&(t[G][i]=!1),a=y(a,{enumerable:v(0,!1)})):(u(t,G)||Q(t,G,v(1,{})),t[G][i]=!0),it(t,i,a)):Q(t,i,a)},st=function(t,e){h(t);var a=m(e),i=_(a).concat(ut(a));return W(i,(function(e){s&&!lt.call(a,e)||rt(t,e,a[e])})),t},lt=function(t){var e=b(t,!0),a=X.call(this,e);return!(this===U&&u(F,e)&&!u(Y,e))&&(!(a||!u(this,e)||!u(F,e)||u(this,G)&&this[G][e])||a)},ct=function(t,e){var a=m(t),i=b(e,!0);if(a!==U||!u(F,i)||u(Y,i)){var n=$(a,i);return!n||!u(F,i)||u(a,G)&&a[G][i]||(n.enumerable=!0),n}},gt=function(t){var e=z(m(t)),a=[];return W(e,(function(t){u(F,t)||u(A,t)||a.push(t)})),a},ut=function(t){var e=t===U,a=z(e?Y:m(t)),i=[];return W(a,(function(t){!u(F,t)||e&&!u(U,t)||i.push(F[t])})),i};(l||(P((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=x(t),a=function(t){this===U&&a.call(Y,t),u(this,G)&&u(this[G],e)&&(this[G][e]=!1),it(this,e,v(1,t))};return s&&at&&it(U,e,{configurable:!0,set:a}),nt(e,t)}).prototype,"toString",(function(){return H(this).tag})),P(K,"withoutSetter",(function(t){return nt(x(t),t)})),M.f=lt,D.f=rt,S.f=ct,w.f=k.f=gt,T.f=ut,E.f=function(t){return nt(C(t),t)},s&&(Q(K.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),r||P(U,"propertyIsEnumerable",lt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:K}),W(_(tt),(function(t){N(t)})),i({target:"Symbol",stat:!0,forced:!l},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var a=K(e);return Z[e]=a,q[a]=e,a},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(u(q,t))return q[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!s},{create:function(t,e){return void 0===e?y(t):st(y(t),e)},defineProperty:rt,defineProperties:st,getOwnPropertyDescriptor:ct}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:gt,getOwnPropertySymbols:ut}),i({target:"Object",stat:!0,forced:g((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(f(t))}}),V)&&i({target:"JSON",stat:!0,forced:!l||g((function(){var t=K();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}))},{stringify:function(t,e,a){for(var i,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(i=e,(p(e)||void 0!==t)&&!ot(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),n[1]=e,V.apply(null,n)}});K.prototype[J]||O(K.prototype,J,K.prototype.valueOf),R(K,"Symbol"),A[G]=!0},pNd9:function(t,e,a){},vQm4:function(t,e,a){}}]);