(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"25K7":function(e,t,s){var i={"./after effects.svg":"6n7o","./android.svg":"ckBU","./angularjs.svg":"BH9d","./aws.svg":"popf","./clojure.svg":"lLia","./consulting.svg":"9coF","./css.svg":"BA42","./cups.svg":"G7iD","./django.svg":"XkXs","./docker.svg":"Tevn","./elastic.svg":"M6XU","./elixir.svg":"DPdj","./express.svg":"Wy68","./fastify.svg":"vy+t","./fastlane.svg":"UCZb","./figma tokens.svg":"+Tw5","./figma.svg":"IOg8","./firebase.svg":"8Ydo","./go.svg":"mI/4","./hexapdf.svg":"lTQr","./html.svg":"pKOw","./illustrator.svg":"lZcB","./imagemagick.svg":"gsLJ","./immutablejs.svg":"1MmJ","./inDesign.svg":"goD5","./ios.svg":"8I4H","./iot.svg":"RH/t","./istio.svg":"gbKw","./java.svg":"2Jr8","./javascript.svg":"nsF7","./jenkins.svg":"Q8n+","./mongodb.svg":"p5C5","./nodejs.svg":"wk3J","./npm.svg":"O5JE","./oracle.svg":"YUOZ","./phoenix.svg":"ZVFX","./photoshop.svg":"OSCd","./postgres.svg":"dOjW","./prawnpdf.svg":"RjG/","./python.svg":"JhfC","./rabbitmq.svg":"63+q","./rails.svg":"a7wV","./raspberrypi.svg":"oulh","./react native.svg":"Q7cV","./react.svg":"QQBE","./realm.svg":"5i/G","./redis.svg":"N6fv","./ruby.svg":"LGmv","./scala.svg":"rInY","./scrollmagic.svg":"M4TD","./sidekiq.svg":"6wrU","./sketch.svg":"RBCQ","./spree.svg":"dpFv","./spring.svg":"/b1P","./storybook.svg":"KzeS","./swift.svg":"RPCR","./trello.svg":"EWw7","./webpack.svg":"qf1I","./whiteboard.svg":"P1JX"};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id="25K7"},"Am/R":function(e,t,s){"use strict";s.r(t);var i={props:["builtFor"],computed:{platforms(){return this.builtFor.split(",").map(e=>e.trim())}}},n=(s("dlaG"),s("KHd+")),o=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"built-for"},e._l(e.platforms,(function(i,n){return t("span",{key:n},[t("g-image",{attrs:{src:s("porI")(`./${i}.svg`)}}),e._v("\n    "+e._s(i)+"\n  ")],1)})),0)}),[],!1,null,"33f13dc7",null).exports,a=s("jMrV"),r=s("e1Lk"),c=s("WOv/"),l=s("PPrx"),d={metaInfo(){return{title:this.client.name}},components:{BuiltFor:o,Projects:a.a,TechUsed:r.a,LetsTalk:c.a},computed:{client(){return this.$page.clients.edges.filter(e=>e.node.id==this.$page.caseStudy.clientId)[0].node},theme(){return Object(l.c)(this.client.style)}}},u=(s("UeX/"),null),g=Object(n.a)(d,(function(){var e=this,t=e._self._c;return t("Layout",[t("template",{slot:"bannerText"},[e._v("\n    "+e._s(e.$page.caseStudy.bannerText)+"\n  ")]),t("div",{class:e.$page.caseStudy.type+" casestudy"},[t("div",{staticClass:"summary"},[e.client.logo?t("div",[t("g-image",{attrs:{immediate:"true",src:s("GSoK")("./"+e.client.logo)}})],1):e._e(),e.$page.caseStudy.servicesOffered?t("div",{staticClass:"services-offered"},[e._v("\n        "+e._s(e.$page.caseStudy.servicesOffered)+"\n      ")]):e._e(),e.$page.caseStudy.builtFor?t("div",{staticClass:"built-for"},[t("BuiltFor",{attrs:{builtFor:e.$page.caseStudy.builtFor}})],1):e._e(),e.$page.caseStudy.blurb?t("div",{staticClass:"blurb"},[e._v("\n        "+e._s(e.$page.caseStudy.blurb)+"\n      ")]):e._e()]),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:e._s(e.$page.caseStudy.content)}})]),e.$page.caseStudy.tech?t("div",{staticClass:"tech-used"},[t("TechUsed",{attrs:{tech:e.$page.caseStudy.tech}})],1):e._e(),t("div",{staticClass:"lets-talk"},[t("LetsTalk")],1),t("div",{staticClass:"other-projects"},[t("Projects")],1)],2)}),[],!1,null,null,null);"function"==typeof u&&u(g);t.default=g.exports},D5No:function(e,t,s){},KyFy:function(e,t,s){"use strict";s("D5No")},LGAC:function(e,t,s){e.exports=s.p+"assets/img/talk.71d1d2f3.svg"},RFVi:function(e,t,s){"use strict";s("gPAy")},T6VO:function(e,t,s){},"UeX/":function(e,t,s){"use strict";s("sVGl")},Vwbh:function(e,t,s){},"WOv/":function(e,t,s){"use strict";var i=[function(){var e=this._self._c;return e("div",{staticClass:"message"},[this._v("\n    Let’s build something\n    "),e("br"),this._v("\n    great together.\n  ")])},function(){var e=this._self._c;return e("div",{staticClass:"action-container"},[e("div",{staticClass:"action-button"},[e("div",[this._v("Get in touch")]),e("div",{staticClass:"arrow"},[this._v("->")])]),e("img",{attrs:{src:s("LGAC"),alt:"Lenny Face"}})])}],n=(s("FNk8"),{methods:{goToContact(){this.$router.push("/contact")}}}),o=(s("KyFy"),s("KHd+")),a=Object(o.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"lets-talk",on:{click:this.goToContact}},[this._m(0),this._m(1)])}),i,!1,null,"f54e9d08",null);t.a=a.exports},cIXJ:function(e,t,s){"use strict";s("T6VO")},dlaG:function(e,t,s){"use strict";s("Vwbh")},e1Lk:function(e,t,s){"use strict";var i={props:["tech"],computed:{technologies(){return this.tech.split(",").map(e=>e.trim())},techList(){return this.technologies.map(e=>e.toUpperCase()).join("  /  ")}}},n=(s("RFVi"),s("KHd+")),o=Object(n.a)(i,(function(){var e=this._self._c;return e("div",{staticClass:"tech-used"},[this._m(0),e("div",{staticClass:"icons"},this._l(this.technologies,(function(t,i){return e("span",{key:i},[e("g-image",{attrs:{src:s("25K7")(`./${t}.svg`)}})],1)})),0),e("div",{staticClass:"list"},[this._v("\n    "+this._s(this.techList)+"\n  ")])])}),[function(){var e=this._self._c;return e("h3",[this._v("_tech"),e("br"),this._v("used")])}],!1,null,"344f77c8",null);t.a=o.exports},gPAy:function(e,t,s){},jMrV:function(e,t,s){"use strict";var i=s("OlP7"),n={props:["type"],components:{TilesGroup:s("9jq1").a},computed:{projects:function(){let e=this.$static.allProjects.edges;this.type&&(e=e.filter(e=>e.node.type===this.type));let t=this.$route.params.slug;return t&&(e=e.filter(e=>e.node.casestudySlug!==t)),Object(i.c)(e.slice(0,4))}}},o=(s("cIXJ"),s("KHd+")),a=s("Kw5r");const{computed:r}=a.a.config.optionMergeStrategies,c={allProjects:{edges:[{node:{type:"web",description:"Re-engineering the mechanics of music distribution with faster transcoding.",services:["Frontend development","Backend development","Devops","Design"],technologies:["Ruby","Rails","React","Storybook","AWS"],client:{name:"TuneCore",style:"black"},tileVideo:"tunecore.mp4",casestudySlug:"tunecore"}},{node:{type:"web",description:"How do you bring enterprise labelling into the collaborative age?",services:["Frontend development","Backend development","Devops","Design"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"Gaea Global",style:"red"},tileVideo:"",casestudySlug:"cls"}},{node:{type:"web",description:"Streamlining customer checkout with a Single Page Application (SPA) built on Mithril.",services:["Frontend development","Backend development"],technologies:["Mithril js","Ruby","Rails","Magento"],client:{name:"Caratlane",style:"blue"},tileVideo:"",casestudySlug:"caratlane"}},{node:{type:"mobile",description:"Implementation of interactive healthcare technology in medical landscape for better information flow.",services:["Mobile development"],technologies:["Swift","AVAudioEngine"],client:{name:"Abridge",style:"orange"},tileVideo:"",casestudySlug:"abridge"}},{node:{type:"web",description:"Delivering farm-to-fridge groceries with an innovative AI-powered platform.",services:["Frontend development","Backend development"],technologies:["Ruby","Rails"],client:{name:"Farmstead",style:"green"},tileVideo:"",casestudySlug:"farmstead"}},{node:{type:"web",description:"Innovative, data rich and highly customized PDFs, generated on demand based on user DNA profiles.",services:["Frontend development","Backend development","Design"],technologies:["Ruby","Rails","HexaPdf"],client:{name:"Genetic Direction",style:"dark-blue"},tileVideo:"",casestudySlug:"genetic-direction"}},{node:{type:"design",description:"A place where creators can share and monetize their daily routines.",services:["Art direction","Web & app design","Information architecture","Prototyping"],technologies:["Figma","After Effects","Illustrator","Photoshop"],client:{name:"Routinr",style:"purple-blue"},tileVideo:"",casestudySlug:"routinr"}},{node:{type:"web",description:"Plastic Recycling Platform discovery which helps producers to comply with Extended Producer Responsibility (EPR) norms",services:["Discovery","Consulting"],technologies:["Whiteboard","Sketch","Trello"],client:{name:"Social Lab",style:"yellow"},tileVideo:"",casestudySlug:"social-lab"}},{node:{type:"web",description:"Intelligent fleet management and tracking, powered by Django and Python.",services:["Frontend development","Backend development"],technologies:["Django","Python"],client:{name:"Glydel",style:"grey"},tileVideo:"",casestudySlug:"glydel"}},{node:{type:"iot",description:"Unlocking production efficiency with RaspberryPi and NFC-driven real time tool tracking.",services:["IOT development"],technologies:["Python","Node.js"],client:{name:"GE Digital Services",style:"green"},tileVideo:"",casestudySlug:"ge"}},{node:{type:"mobile",description:"Immersive and engaging news, minus the clickbait and clutter.",services:["Mobile development"],technologies:["Objective C"],client:{name:"Inkl",style:"dark-blue"},tileVideo:"",casestudySlug:"inkl"}},{node:{type:"web",description:"Building an immersive landing page for the Creative Difference project.",services:["Frontend development"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"IDEO",style:"yellow"},tileVideo:"",casestudySlug:"ideo"}},{node:{type:"web",description:"Accelerated credit profiling and risk analysis through codebase refactoring.",services:["Backend development"],technologies:["Ruby","Rails","PostgreSQL"],client:{name:"IDExcel",style:"grey"},tileVideo:"",casestudySlug:"idexcel"}},{node:{type:"web",description:"Building immersive digital billboards and web embeds for Fankave.",services:["Frontend development","Backend development","Design"],technologies:["React","Javascript","CSS","Scala"],client:{name:"Fankave",style:"black"},tileVideo:"",casestudySlug:"fankave"}},{node:{type:"web",description:"Supercharging the sales pipeline with Rails-powered enterprise automation.",services:["Frontend development","Backend development"],technologies:["Ruby","Rails"],client:{name:"Jiffle Now",style:"pink"},tileVideo:"",casestudySlug:"jiffle-now"}},{node:{type:"web",description:"How we helped 10i Commerce scale their Spree platform to process 100k+ orders.",services:["Consulting","Backend development"],technologies:["Ruby","Rails","Spree"],client:{name:"10i Commerce",style:"dark-blue"},tileVideo:"",casestudySlug:"10icommerce"}},{node:{type:"web",description:"Making a difference with the International Fund For Agricultural Development.",services:["Consulting","Backend development"],technologies:["Ruby","Rails"],client:{name:"IFAD",style:"yellow"},tileVideo:"",casestudySlug:"ifad"}},{node:{type:"web",description:"React-based fleet management solution, trip simulator and insurance telematics.",services:["Frontend development","Backend development","Design"],technologies:["Ruby","Rails","React","Javascript"],client:{name:"Modus",style:"pink"},tileVideo:"",casestudySlug:"modus"}}]}};var l=({options:e})=>{e.__staticData?e.__staticData.data=c:(e.__staticData=a.a.observable({data:c}),e.computed=r({$static:()=>e.__staticData.data},e.computed))},d=Object(o.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"projects"},[this._m(0),e("div",[e("TilesGroup",{attrs:{projects:this.projects}})],1),this._m(1)])}),[function(){var e=this._self._c;return e("h3",[this._v("_case"),e("br"),this._v("studies")])},function(){var e=this._self._c;return e("div",{staticClass:"more"},[this._v("\n    /\n    "),e("a",{attrs:{href:"/projects"}},[this._v("more "),e("br"),this._v("\n      projects")])])}],!1,null,"45126307",null);"function"==typeof l&&l(d);t.a=d.exports},porI:function(e,t,s){var i={"./Desktop.svg":"QNO7","./Mobile.svg":"xeCm"};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id="porI"},sVGl:function(e,t,s){}}]);