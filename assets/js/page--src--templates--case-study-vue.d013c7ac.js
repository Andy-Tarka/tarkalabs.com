(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0pEg":function(e,t,i){"use strict";i("3akO")},"25K7":function(e,t,i){var s={"./after effects.svg":"6n7o","./android.svg":"ckBU","./angularjs.svg":"BH9d","./aws.svg":"popf","./clojure.svg":"lLia","./consulting.svg":"9coF","./css.svg":"BA42","./cups.svg":"G7iD","./django.svg":"XkXs","./docker.svg":"Tevn","./elastic.svg":"M6XU","./elixir.svg":"DPdj","./express.svg":"Wy68","./fastify.svg":"vy+t","./fastlane.svg":"UCZb","./figma tokens.svg":"+Tw5","./figma.svg":"IOg8","./firebase.svg":"8Ydo","./go.svg":"mI/4","./hexapdf.svg":"lTQr","./html.svg":"pKOw","./illustrator.svg":"lZcB","./imagemagick.svg":"gsLJ","./immutablejs.svg":"1MmJ","./inDesign.svg":"goD5","./ios.svg":"8I4H","./iot.svg":"RH/t","./istio.svg":"gbKw","./java.svg":"2Jr8","./javascript.svg":"nsF7","./jenkins.svg":"Q8n+","./mongodb.svg":"p5C5","./nodejs.svg":"wk3J","./npm.svg":"O5JE","./oracle.svg":"YUOZ","./phoenix.svg":"ZVFX","./photoshop.svg":"OSCd","./postgres.svg":"dOjW","./prawnpdf.svg":"RjG/","./python.svg":"JhfC","./rabbitmq.svg":"63+q","./rails.svg":"a7wV","./raspberrypi.svg":"oulh","./react native.svg":"Q7cV","./react.svg":"QQBE","./realm.svg":"5i/G","./redis.svg":"N6fv","./ruby.svg":"LGmv","./scala.svg":"rInY","./scrollmagic.svg":"M4TD","./sidekiq.svg":"6wrU","./sketch.svg":"RBCQ","./spree.svg":"dpFv","./spring.svg":"/b1P","./storybook.svg":"KzeS","./swift.svg":"RPCR","./trello.svg":"EWw7","./webpack.svg":"qf1I","./whiteboard.svg":"P1JX"};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id="25K7"},"3akO":function(e,t,i){},"9oAm":function(e,t,i){"use strict";i("c/CA")},G1RS:function(e,t,i){"use strict";i("PzEj")},GFyj:function(e,t,i){"use strict";i("eT0q")},IhSV:function(e,t,i){"use strict";var s=i("PPrx"),n={props:["testimonial","themed"],computed:{theme(){if(this.themed&&this.testimonial&&this.testimonial.client)return Object(s.c)(this.testimonial.client.style)}}},a=(i("9oAm"),i("KHd+")),o=Object(a.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:["testimonial",{themed:e.themed}],style:e.theme},[t("div",[t("g-image",{attrs:{src:i("GSoK")("./"+e.testimonial.profile_pic),alt:e.testimonial.profile_pic_alt,immediate:!0}})],1),t("div",{staticClass:"comment"},e._l(e.testimonial.comments,(function(i){return t("p",{key:i},[e._v("\n      "+e._s(i)+"\n    ")])})),0),t("div",{staticClass:"footer"},[t("div",{staticClass:"by"},[t("div",{staticClass:"name"},[e._v(e._s(e.testimonial.name))]),t("div",{staticClass:"entity"},[e._v("\n        "+e._s(e.testimonial.role)+"\n        "),e.testimonial.client?t("span",[e._v("\n          , "+e._s(e.testimonial.client.name)+"\n        ")]):e._e()])]),e.testimonial.casestudySlug?t("g-link",{staticClass:"project-link",style:e.theme,attrs:{to:`${"dev"==e.testimonial.type?"works":"design"}/${e.testimonial.casestudySlug}`}},[e._v("\n      View project ->\n    ")]):e._e()],1)])}),[],!1,null,"52698544",null);t.a=o.exports},LGAC:function(e,t,i){e.exports=i.p+"assets/img/talk.71d1d2f3.svg"},PzEj:function(e,t,i){},VC69:function(e,t,i){"use strict";i("cD6d")},"WOv/":function(e,t,i){"use strict";i("FNk8");var s=i("950E"),n=i.n(s),a={mounted(){let e=this.$el.querySelector(".talk");this.typewriter=new n.a(e,{cursor:"_",autoStart:!1})},data:()=>({animationTriggered:!1,showEmoticon:!1,intersectionOptions:{root:null,rootMargin:"0px",threshold:[.25]}}),methods:{onWaypoint({going:e,direction:t}){e!==this.$waypointMap.GOING_IN||t!==this.$waypointMap.DIRECTION_TOP&&void 0!==t||this.animationTriggered||(this.typewriter.deleteAll(),this.typewriter.typeString("Let's talk"),this.typewriter.start(),this.animationTriggered=!0,setTimeout(()=>{this.showEmoticon=!0},3e3))},goToContact(){this.$router.push("/contact")}}},o=(i("GFyj"),i("KHd+")),r=Object(o.a)(a,(function(){var e=this._self._c;return e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:this.onWaypoint,options:this.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"lets-talk",on:{click:this.goToContact}},[e("div",{staticClass:"talk"},[this._v("Let's talk")]),e("img",{style:{visibility:this.showEmoticon?"visible":"hidden"},attrs:{src:i("LGAC"),alt:"Lenny Face"}})])}),[],!1,null,"62c5af52",null);t.a=r.exports},"c/CA":function(e,t,i){},cD6d:function(e,t,i){},e1Lk:function(e,t,i){"use strict";var s={props:["tech"],computed:{technologies(){return this.tech.split(",").map(e=>e.trim())},techList(){return this.technologies.map(e=>e.toUpperCase()).join("  /  ")}}},n=(i("0pEg"),i("KHd+")),a=Object(n.a)(s,(function(){var e=this._self._c;return e("div",{staticClass:"tech-used"},[this._m(0),e("div",{staticClass:"icons"},this._l(this.technologies,(function(t,s){return e("span",{key:s},[e("g-image",{attrs:{src:i("25K7")(`./${t}.svg`)}})],1)})),0),e("div",{staticClass:"list"},[this._v("\n    "+this._s(this.techList)+"\n  ")])])}),[function(){var e=this._self._c;return e("h3",[this._v("\n  _tech"),e("br"),this._v("used\n  ")])}],!1,null,"34d281d0",null);t.a=a.exports},eT0q:function(e,t,i){},jMrV:function(e,t,i){"use strict";var s=i("OlP7"),n={props:["type"],components:{TilesGroup:i("9jq1").a},computed:{projects:function(){let e=this.$static.allProjects.edges;this.type&&(e=e.filter(e=>e.node.type===this.type));let t=this.$route.params.slug;return t&&(e=e.filter(e=>e.node.casestudySlug!==t)),Object(s.c)(e.slice(0,4))}}},a=(i("VC69"),i("KHd+")),o=i("Kw5r");const{computed:r}=o.a.config.optionMergeStrategies,l={allProjects:{edges:[{node:{type:"web",description:"Re-engineering the mechanics of music distribution with faster transcoding.",services:["Frontend development","Backend development","Devops","Design"],technologies:["Ruby","Rails","React","Storybook","AWS"],client:{name:"TuneCore",style:"black"},tileVideo:"tunecore.mp4",casestudySlug:"tunecore"}},{node:{type:"web",description:"How do you bring enterprise labelling into the collaborative age?",services:["Frontend development","Backend development","Devops","Design"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"Gaea Global",style:"red"},tileVideo:"",casestudySlug:"cls"}},{node:{type:"web",description:"Streamlining customer checkout with a Single Page Application (SPA) built on Mithril.",services:["Frontend development","Backend development"],technologies:["Mithril js","Ruby","Rails","Magento"],client:{name:"Caratlane",style:"blue"},tileVideo:"",casestudySlug:"caratlane"}},{node:{type:"mobile",description:"Implementation of interactive healthcare technology in medical landscape for better information flow.",services:["Mobile development"],technologies:["Swift","AVAudioEngine"],client:{name:"Abridge",style:"orange"},tileVideo:"",casestudySlug:"abridge"}},{node:{type:"web",description:"Delivering farm-to-fridge groceries with an innovative AI-powered platform.",services:["Frontend development","Backend development"],technologies:["Ruby","Rails"],client:{name:"Farmstead",style:"green"},tileVideo:"",casestudySlug:"farmstead"}},{node:{type:"web",description:"Innovative, data rich and highly customized PDFs, generated on demand based on user DNA profiles.",services:["Frontend development","Backend development","Design"],technologies:["Ruby","Rails","HexaPdf"],client:{name:"Genetic Direction",style:"dark-blue"},tileVideo:"",casestudySlug:"genetic-direction"}},{node:{type:"design",description:"A place where creators can share and monetize their daily routines.",services:["Art direction","Web & app design","Information architecture","Prototyping"],technologies:["Figma","After Effects","Illustrator","Photoshop"],client:{name:"Routinr",style:"purple-blue"},tileVideo:"",casestudySlug:"routinr"}},{node:{type:"web",description:"Plastic Recycling Platform discovery which helps producers to comply with Extended Producer Responsibility (EPR) norms",services:["Discovery","Consulting"],technologies:["Whiteboard","Sketch","Trello"],client:{name:"Social Lab",style:"yellow"},tileVideo:"",casestudySlug:"social-lab"}},{node:{type:"web",description:"Intelligent fleet management and tracking, powered by Django and Python.",services:["Frontend development","Backend development"],technologies:["Django","Python"],client:{name:"Glydel",style:"grey"},tileVideo:"",casestudySlug:"glydel"}},{node:{type:"iot",description:"Unlocking production efficiency with RaspberryPi and NFC-driven real time tool tracking.",services:["IOT development"],technologies:["Python","Node.js"],client:{name:"GE Digital Services",style:"green"},tileVideo:"",casestudySlug:"ge"}},{node:{type:"mobile",description:"Immersive and engaging news, minus the clickbait and clutter.",services:["Mobile development"],technologies:["Objective C"],client:{name:"Inkl",style:"dark-blue"},tileVideo:"",casestudySlug:"inkl"}},{node:{type:"web",description:"Building an immersive landing page for the Creative Difference project.",services:["Frontend development"],technologies:["Javascript","Scrollmagic","CSS"],client:{name:"IDEO",style:"yellow"},tileVideo:"",casestudySlug:"ideo"}},{node:{type:"web",description:"Accelerated credit profiling and risk analysis through codebase refactoring.",services:["Backend development"],technologies:["Ruby","Rails","PostgreSQL"],client:{name:"IDExcel",style:"grey"},tileVideo:"",casestudySlug:"idexcel"}},{node:{type:"web",description:"Building immersive digital billboards and web embeds for Fankave.",services:["Frontend development","Backend development","Design"],technologies:["React","Javascript","CSS","Scala"],client:{name:"Fankave",style:"black"},tileVideo:"",casestudySlug:"fankave"}},{node:{type:"web",description:"Supercharging the sales pipeline with Rails-powered enterprise automation.",services:["Frontend development","Backend development"],technologies:["Ruby","Rails"],client:{name:"Jiffle Now",style:"pink"},tileVideo:"",casestudySlug:"jiffle-now"}},{node:{type:"web",description:"How we helped 10i Commerce scale their Spree platform to process 100k+ orders.",services:["Consulting","Backend development"],technologies:["Ruby","Rails","Spree"],client:{name:"10i Commerce",style:"dark-blue"},tileVideo:"",casestudySlug:"10icommerce"}},{node:{type:"web",description:"Making a difference with the International Fund For Agricultural Development.",services:["Consulting","Backend development"],technologies:["Ruby","Rails"],client:{name:"IFAD",style:"yellow"},tileVideo:"",casestudySlug:"ifad"}},{node:{type:"web",description:"React-based fleet management solution, trip simulator and insurance telematics.",services:["Frontend development","Backend development","Design"],technologies:["Ruby","Rails","React","Javascript"],client:{name:"Modus",style:"pink"},tileVideo:"",casestudySlug:"modus"}}]}};var c=({options:e})=>{e.__staticData?e.__staticData.data=l:(e.__staticData=o.a.observable({data:l}),e.computed=r({$static:()=>e.__staticData.data},e.computed))},d=Object(a.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"projects"},[this._m(0),e("div",[e("TilesGroup",{attrs:{projects:this.projects}})],1),this._m(1)])}),[function(){var e=this._self._c;return e("h3",[this._v("_latest"),e("br"),this._v("projects")])},function(){var e=this._self._c;return e("div",{staticClass:"more"},[this._v("\n    /\n    "),e("a",{attrs:{href:"/projects"}},[this._v("more "),e("br"),this._v("\n      projects")])])}],!1,null,"cd14b172",null);"function"==typeof c&&c(d);t.a=d.exports},ufJs:function(e,t,i){"use strict";i.r(t);var s=i("Kw5r"),n=i("jMrV"),a=i("e1Lk"),o=i("IhSV"),r=i("WOv/"),l=i("PPrx"),c={metaInfo(){return{title:this.client.name}},mounted(){this.injectTestimonials()},updated(){this.injectTestimonials()},components:{Projects:n.a,TechUsed:a.a,LetsTalk:r.a},computed:{client(){return this.$page.clients.edges.filter(e=>e.node.id==this.$page.caseStudy.clientId)[0].node},theme(){return Object(l.c)(this.client.style)}},methods:{injectTestimonials(){this.$el.getElementsByClassName("testimonial-placeholder").forEach(e=>{let t=e.dataset.id;this.addTestimonialComponent(e,t)})},addTestimonialComponent(e,t){let i=new(s.a.extend(o.a))({propsData:{testimonial:this.getTestimonialData(t),themed:!0}});i.$mount(),e.appendChild(i.$el)},getTestimonialData(e){return this.$static.testimonials.edges.filter(t=>t.node.id===e)[0].node}}},d=(i("G1RS"),i("KHd+")),p=null;const{computed:u}=s.a.config.optionMergeStrategies,m={testimonials:{edges:[{node:{id:"1",name:"Gurukeerthi Gurunathan",role:"Co-founder",comments:["Tarka Labs has thought leaders and subject matter experts. They solve complex problems and build robust well-architected systems, and our conversations are always enriching. They are passionate tech craftsmen abreast with the latest trends. They have definitely exceeded my expectations."],profile_pic:"client/guru.jpeg",profile_pic_alt:"Headshot of Gurukeerthi Gurunathan",type:"dev",client:{name:"Caratlane",style:"blue"}}},{node:{id:"2",name:"Sasi Parthasarathy",role:"Founder",comments:["Tarka Labs has been a great discovery for Fankave. They helped us build an array of interactive social experiences. Quite impressed with the team’s technical acumen. I'd recommend Tarka Labs if you’re trying to build an MVP, scale your product or at any stage of growth."],profile_pic:"client/sasi.jpeg",profile_pic_alt:"Headshot of Sasi Parthasarathy",type:"dev",client:{name:"Fankave",style:"black"}}},{node:{id:"3",name:"Michael Sparks",role:"Direction of Technology",comments:["Tarka Labs consultants are smart, effective communicators and extremely educative. Their quality of code is highly impressive. They’ve built a robust foundation, where reusable components and systems have been our key differentiators. It’s hard to cross boundaries in technology, but they’ve built thoughtful and scalable solutions by working on multiple code repositories with ease."],profile_pic:"client/michael.jpeg",profile_pic_alt:"Headshot of Michael Sparks",type:"dev",client:{name:"Genetic Direction",style:"dark-blue"}}},{node:{id:"4",name:"Sandeep Konam",role:"CTO",comments:["Tarka Labs consultants are passionate, with a flair for software craftsmanship. They were in complete synergy with our team, especially in their communication and accessibility. There’s no bureaucracy, so consultants could make decisions with very less interference."],profile_pic:"client/sandeep.jpeg",profile_pic_alt:"Headshot of Sandeep Konam",type:"dev",client:{name:"Abridge",style:"orange"}}},{node:{id:"5",name:"Jason Mancuso",role:"Director-SCM Practice",comments:["It’s been a delight to work with Tarka Labs. Their interactions are articulate and consultants get into great development cadence quickly. They have excellent command in backend and web development, and their solutions added value to the schema of business."],profile_pic:"client/jason.jpeg",profile_pic_alt:"Headshot of Jason Mancuso",type:"dev",client:{name:"Gaea Global",style:"red"}}},{node:{id:"6",name:"Rahul Juware",role:"Founder",comments:["The sheer commitment to detailing the product during the discovery phase was contagious. The quality of questions posed made us look at the idea from a different perspective. And the deliverables were completed without cutting any corners. The whole experience has been enriching!"],profile_pic:"client/rahul.jpeg",profile_pic_alt:"Headshot of Rahul Juware",type:"dev",client:{name:"Social Lab",style:"yellow"}}},{node:{id:"7",name:"Toktam Rezaei",role:"Senior Technical Program Manager",comments:["They’re the best technology team I have ever worked with. Tarka Labs delivered a user-friendly platform that received positive feedback directly from customers. Even though it has been in use for several years, the code is still reliable and scales without any issues. The team's agile methods enabled them to promptly turn projects around while brainstorming ways to make the process more productive."],profile_pic:"client/toktam.jpg",profile_pic_alt:"Headshot of Toktam Rezaei",type:"dev",client:{name:"TuneCore",style:"black"}}},{node:{id:"8",name:"Steve Smith",role:"Founder",comments:["I’ve worked with Tarka Labs on a platform project with a lot of moving pieces and custom features that took a deep thinking team to bring the idea to life. They are deep thinkers, analyze current solutions, ask insightful questions, and come up with solutions that really refined the ideas into a truly unique platform. They bring open thinking, disruptive ideas, and challenge conventional thinking. Be prepared!"],profile_pic:"client/steve.jpg",profile_pic_alt:"Headshot of Steve Smith",type:"design",client:{name:"EquipmentFX",style:"yellow"}}},{node:{id:"9",name:"Eric Czarnopys",role:"CTO",comments:["Tarka truly is a World-class team of skilled thought designers.","The experience design surpassed our expectations, resulting in an elegant and intuitive product blueprint.","The offline internal collaboration within the team results in the clearest product presentation to the end client."],profile_pic:"client/eric.jpg",profile_pic_alt:"Headshot of Eric Czarnopys",type:"design",client:{name:"Beatclub",style:"dark-grey"}}},{node:{id:"10",name:"Amy McLeod",role:"Project Manager",comments:["The team at Tarka labs have exceeded my expectations during our collaboration! Their expertise, coaching, and ability to bring our ideas to life have greatly enhanced our app prototype development and prepared us for the user testing phase of our project. Forever grateful!"],profile_pic:"client/amy.jpeg",profile_pic_alt:"Headshot of Amy McLeod",type:"design",client:{name:"eVisitNB",style:"red"}}}]}};var h=({options:e})=>{e.__staticData?e.__staticData.data=m:(e.__staticData=s.a.observable({data:m}),e.computed=u({$static:()=>e.__staticData.data},e.computed))},g=Object(d.a)(c,(function(){var e=this._self._c;return e("Layout",[e("template",{slot:"bannerText"},[this._v("\n    "+this._s(this.$page.caseStudy.bannerText)+"\n  ")]),e("div",{staticClass:"casestudy"},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.caseStudy.content)}})]),this.$page.caseStudy.tech?e("div",{staticClass:"tech-used"},[e("TechUsed",{attrs:{tech:this.$page.caseStudy.tech}})],1):this._e(),e("div",{staticClass:"lets-talk"},[e("LetsTalk")],1),e("div",{staticClass:"other-projects"},[e("Projects")],1)],2)}),[],!1,null,null,null);"function"==typeof p&&p(g),"function"==typeof h&&h(g);t.default=g.exports}}]);