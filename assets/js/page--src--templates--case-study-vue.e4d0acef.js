(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1TbL":function(e,t,i){"use strict";var n=i("v1p1");i.n(n).a},"25K7":function(e,t,i){var n={"./android.svg":"ckBU","./angularjs.svg":"BH9d","./clojure.svg":"lLia","./consulting.svg":"9coF","./css.svg":"BA42","./cups.svg":"G7iD","./django.svg":"XkXs","./docker.svg":"Tevn","./elastic.svg":"M6XU","./elixir.svg":"DPdj","./express.svg":"Wy68","./fastify.svg":"vy+t","./fastlane.svg":"UCZb","./firebase.svg":"8Ydo","./go.svg":"mI/4","./hexapdf.svg":"lTQr","./html.svg":"pKOw","./imagemagick.svg":"gsLJ","./immutablejs.svg":"1MmJ","./ios.svg":"8I4H","./iot.svg":"RH/t","./istio.svg":"gbKw","./javascript.svg":"nsF7","./jenkins.svg":"Q8n+","./mongodb.svg":"p5C5","./nodejs.svg":"wk3J","./npm.svg":"O5JE","./oracle.svg":"YUOZ","./phoenix.svg":"ZVFX","./postgres.svg":"dOjW","./prawnpdf.svg":"RjG/","./python.svg":"JhfC","./rabbitmq.svg":"63+q","./rails.svg":"a7wV","./raspberrypi.svg":"oulh","./react.svg":"QQBE","./realm.svg":"5i/G","./redis.svg":"N6fv","./ruby.svg":"LGmv","./scrollmagic.svg":"M4TD","./sidekiq.svg":"6wrU","./sketch.svg":"RBCQ","./spree.svg":"dpFv","./spring.svg":"/b1P","./swift.svg":"RPCR","./trello.svg":"EWw7","./webpack.svg":"qf1I","./whiteboard.svg":"P1JX"};function s(e){var t=o(e);return i(t)}function o(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="25K7"},"9jq1":function(e,t,i){"use strict";i("TeQF"),i("oVuX"),i("mRH6");var n=i("PPrx"),s={props:["data"],computed:{technologies:function(){return this.data.technologies&&this.data.technologies.join(" / ")},theme:function(){var e={color:Object(n.b)(this.data.style)};return this.data.tileVideo||(e["background-color"]=Object(n.a)(this.data.style)),e},casestudyUrl:function(){return this.data.link?"/works/".concat(this.data.link):void 0},tileVideoUrl:function(){return i("8gm1")("./".concat(this.data.tileVideo)).src}}},o=(i("fxjL"),i("KHd+")),a={components:{ProjectTile:Object(o.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"project",style:e.theme,attrs:{href:e.casestudyUrl}},[e.data.tileVideo?i("div",{staticClass:"video"},[i("video",{attrs:{src:e.tileVideoUrl,muted:"",autoplay:"",loop:""},domProps:{muted:!0}})]):e._e(),i("h2",[e._v(e._s(e.data.heading))]),i("div",{staticClass:"desc"},[e._v(e._s(e.data.description))]),i("div",{staticClass:"footer"},[i("div",{staticClass:"services"},e._l(e.data.services,(function(t,n){return i("div",{key:n},[e._v(e._s(t))])})),0),i("div",{staticClass:"tech"},[e._v("\n      "+e._s(e.technologies)+"\n    ")]),e.casestudyUrl?i("div",{staticClass:"expand"},[e._v("\n      +\n    ")]):e._e()])])}),[],!1,null,"cd23b988",null).exports},props:["projects"],computed:{col1Tiles:function(){return this.projects.filter((function(e,t){return t%2-1}))},col2Tiles:function(){return this.projects.filter((function(e,t){return t%2}))}}},c=(i("VaU2"),Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"group"},[t("div",{staticClass:"col"},this._l(this.col1Tiles,(function(e,i){return t("div",{key:i,staticClass:"item"},[t("ProjectTile",{attrs:{data:e}})],1)})),0),t("div",{staticClass:"col right"},this._l(this.col2Tiles,(function(e,i){return t("div",{key:i,staticClass:"item"},[t("ProjectTile",{attrs:{data:e}})],1)})),0)])}),[],!1,null,"a283447c",null));t.a=c.exports},HjB6:function(e,t,i){},OlP7:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return o}));i("pNMO"),i("4Brf"),i("2B1R"),i("sMBO");function n(e){return e.map((function(e){return{heading:e.node.client.name,description:e.node.description,style:e.node.client.style,link:e.node.casestudySlug,services:e.node.services,technologies:e.node.technologies,tileVideo:e.node.tileVideo}}))}function s(e){return e.map((function(e){return{heading:e.node.name,description:e.node.description,style:e.node.style,services:e.node.services}}))}function o(e){return e.map((function(e){return{heading:e.node.name,description:e.node.description,style:e.node.style,services:e.node.qualities}}))}},VaU2:function(e,t,i){"use strict";var n=i("VuB9");i.n(n).a},VuB9:function(e,t,i){},ZvY0:function(e,t,i){},aiLm:function(e,t,i){"use strict";var n=i("HjB6");i.n(n).a},fxjL:function(e,t,i){"use strict";var n=i("zp3E");i.n(n).a},jMrV:function(e,t,i){"use strict";i("TeQF"),i("+2oP");var n=i("OlP7"),s={props:["type"],components:{TilesGroup:i("9jq1").a},computed:{projects:function(){var e=this,t=this.$static.allProjects.edges;this.type&&(t=t.filter((function(t){return t.node.type===e.type})));var i=this.$route.params.slug;return i&&(t=t.filter((function(e){return e.node.casestudySlug!==i}))),Object(n.c)(t.slice(0,4))}}},o=(i("aiLm"),i("KHd+")),a=i("Kw5r"),c=a.a.config.optionMergeStrategies.computed,r={allProjects:{edges:[{node:{type:"web",description:"Re-engineering the mechanics of music distribution with faster transcoding.",services:["_Frontend development","_Backend development","_Devops","_Design"],technologies:["Ruby","Rails","React","Storybook","AWS"],client:{name:"TuneCore",style:"black"},tileVideo:"tunecore.mp4",casestudySlug:"tunecore"}},{node:{type:"web",description:"How do you bring enterprise labelling into the collaborative age?",services:["_Frontend development","_Backend development","_Devops","_Design"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"Gaea Global",style:"red"},tileVideo:"",casestudySlug:"cls"}},{node:{type:"web",description:"Streamlining customer checkout with a Single Page Application (SPA) built on Mithril.",services:["_Fontend development","_Backend development"],technologies:["Mithril js","Ruby","Rails","Magento"],client:{name:"Caratlane",style:"blue"},tileVideo:"",casestudySlug:"caratlane"}},{node:{type:"web",description:"Delivering farm-to-fridge groceries with an innovative AI-powered platform.",services:["_Frontend development","_Backend development"],technologies:["Ruby","Rails"],client:{name:"Farmstead",style:"green"},tileVideo:"",casestudySlug:"farmstead"}},{node:{type:"web",description:"Innovative, data rich and highly customized PDFs, generated on demand based on user DNA profiles.",services:["_Frontend development","_Backend development","_Design"],technologies:["Ruby","Rails","HexaPdf"],client:{name:"Genetic Direction",style:"dark-blue"},tileVideo:"",casestudySlug:"genetic-direction"}},{node:{type:"web",description:"React-based fleet management solution, trip simulator and insurance telematics.",services:["_Frontend development","_Backend development","_Design"],technologies:["Ruby","Rails","React","Javascript"],client:{name:"Modus",style:"pink"},tileVideo:"",casestudySlug:"modus"}},{node:{type:"web",description:"Intelligent fleet management and tracking, powered by Django and Python.",services:["_Frontend development","_Backend development"],technologies:["Django","Python"],client:{name:"Glydel",style:"grey"},tileVideo:"",casestudySlug:"glydel"}},{node:{type:"web",description:"Plastic Recycling Platform discovery which helps producers to comply with Extended Producer Responsibility (EPR) norms",services:["_Discovery","_Consulting"],technologies:["Whiteboard","Sketch","Trello"],client:{name:"Social Lab",style:"yellow"},tileVideo:"",casestudySlug:"social-lab"}},{node:{type:"iot",description:"Unlocking production efficiency with RaspberryPi and NFC-driven real time tool tracking.",services:["_IOT development"],technologies:["Python","Node.js"],client:{name:"GE Digital Services",style:"green"},tileVideo:"",casestudySlug:"ge"}},{node:{type:"mobile",description:"Immersive and engaging news, minus the clickbait and clutter.",services:["_Mobile development"],technologies:["Objective C"],client:{name:"Inkl",style:"dark-blue"},tileVideo:"",casestudySlug:"inkl"}},{node:{type:"web",description:"Building an immersive landing page for the Creative Difference project.",services:["_Frontend development"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"IDEO",style:"yellow"},tileVideo:"",casestudySlug:"ideo"}},{node:{type:"web",description:"Accelerated credit profiling and risk analysis through codebase refactoring.",services:["_Backend development"],technologies:["Ruby","Rails","PostgreSQL"],client:{name:"IDExcel",style:"grey"},tileVideo:"",casestudySlug:"idexcel"}},{node:{type:"web",description:"Building immersive digital billboards and web embeds for Fankave.",services:["_Frontend development","_Backend development","_Design"],technologies:["React","Javascript","CSS","Scala"],client:{name:"Fankave",style:"black"},tileVideo:"",casestudySlug:"fankave"}},{node:{type:"web",description:"Supercharging the sales pipeline with Rails-powered enterprise automation.",services:["_Frontend development","_Backend development"],technologies:["Ruby","Rails"],client:{name:"Jiffle Now",style:"pink"},tileVideo:"",casestudySlug:"jiffle-now"}},{node:{type:"web",description:"How we helped 10i Commerce scale their Spree platform to process 100k+ orders.",services:["_Consulting","_Backend development"],technologies:["Ruby","Rails","Spree"],client:{name:"10i Commerce",style:"dark-blue"},tileVideo:"",casestudySlug:"10icommerce"}},{node:{type:"web",description:"Making a difference with the International Fund For Agricultural Development.",services:["_Consulting","_Backend development"],technologies:["Ruby","Rails"],client:{name:"IFAD",style:"yellow"},tileVideo:"",casestudySlug:"ifad"}}]}},l=function(e){var t=e.options;t.__staticData?t.__staticData.data=r:(t.__staticData=a.a.observable({data:r}),t.computed=c({$static:function(){return t.__staticData.data}},t.computed))},d=Object(o.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"projects"},[this._m(0),t("div",[t("TilesGroup",{attrs:{projects:this.projects}})],1),this._m(1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("_latest"),t("br"),this._v("projects")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"more"},[this._v("\n    /\n    "),t("a",{attrs:{href:"/projects"}},[this._v("more "),t("br"),this._v("\n      projects")])])}],!1,null,"548abc5e",null);"function"==typeof l&&l(d);t.a=d.exports},mUZY:function(e,t,i){"use strict";var n=i("ZvY0");i.n(n).a},ufJs:function(e,t,i){"use strict";i.r(t);i("TeQF"),i("QWBl"),i("sMBO"),i("FZtP");var n=i("Kw5r"),s=i("jMrV"),o=(i("oVuX"),i("2B1R"),i("rB9j"),i("EnZy"),i("SYor"),{props:["tech"],computed:{technologies:function(){return this.tech.split(",").map((function(e){return e.trim()}))},techList:function(){return this.technologies.map((function(e){return e.toUpperCase()})).join("  /  ")}}}),a=(i("mUZY"),i("KHd+")),c=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tech-used"},[this._m(0),t("div",{staticClass:"icons"},this._l(this.technologies,(function(e,n){return t("span",{key:n},[t("g-image",{attrs:{src:i("25K7")("./"+e+".svg")}})],1)})),0),t("div",{staticClass:"list"},[this._v("\n    "+this._s(this.techList)+"\n  ")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("\n  _tech"),t("br"),this._v("used\n  ")])}],!1,null,"2673e441",null).exports,r=i("eviX"),l=i("PPrx"),d={metaInfo:function(){return{title:this.client.name}},mounted:function(){this.injectTestimonials()},updated:function(){this.injectTestimonials()},components:{Projects:s.a,TechUsed:c},computed:{client:function(){var e=this,t=this.$page.clients.edges.filter((function(t){return t.node.id==e.$page.caseStudy.clientId}));return t[0].node},theme:function(){return Object(l.c)(this.client.style)}},methods:{injectTestimonials:function(){var e=this;this.$el.getElementsByClassName("testimonial-placeholder").forEach((function(t){var i=t.dataset.id;e.addTestimonialComponent(t,i)}))},addTestimonialComponent:function(e,t){var i=new(n.a.extend(r.a))({propsData:{id:t}});i.$mount(),e.appendChild(i.$el)}}},u=(i("1TbL"),null),p=Object(a.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("template",{slot:"bannerText"},[e._v("\n    "+e._s(e.$page.caseStudy.bannerText)+"\n  ")]),i("div",{staticClass:"casestudy"},[i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.$page.caseStudy.content)}})]),e.$page.caseStudy.tech?i("div",{staticClass:"tech-used"},[i("TechUsed",{attrs:{tech:e.$page.caseStudy.tech}})],1):e._e(),i("div",{staticClass:"other-projects"},[i("Projects")],1)],2)}),[],!1,null,null,null);"function"==typeof u&&u(p);t.default=p.exports},v1p1:function(e,t,i){},zp3E:function(e,t,i){}}]);