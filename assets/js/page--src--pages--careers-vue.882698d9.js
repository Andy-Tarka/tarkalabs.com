(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2kG/":function(e,t,i){"use strict";var a=i("zz6n");i.n(a).a},"4iU1":function(e,t,i){"use strict";i("R5XZ");var a=i("950E"),n=i.n(a),o={mounted:function(){var e=this;setTimeout((function(){e.setAnimationHeight(),e.initTypeWriting()}),100)},props:["text"],methods:{setAnimationHeight:function(){var e=this.$el,t=this.$el.querySelector(".placeholder");e.style.height="".concat(t.offsetHeight,"px")},initTypeWriting:function(){var e=this.$el.querySelector(".anim");new n.a(e,{strings:this.text,cursor:"_",delay:25,autoStart:!0})}}},r=(i("Y0lS"),i("KHd+")),s=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",{staticClass:"placeholder"},[this._v(this._s(this.text))]),t("h1",{staticClass:"anim"})])}),[],!1,null,"6933a3f5",null);t.a=s.exports},ReiP:function(e,t,i){},TzK6:function(e,t,i){},Xvwt:function(e,t,i){"use strict";i.r(t);var a=i("4iU1"),n=i("9jq1"),o=i("OlP7"),r=i("oWDh"),s=i("bael"),l={components:{TypingHeader:a.a,TilesGroup:n.a,Blogs:s.a,BulletBlurb:r.a},computed:{careers:function(){return Object(o.a)(this.$static.allCareers.edges)}}},c=(i("oFNR"),i("KHd+")),u=i("Kw5r"),d=u.a.config.optionMergeStrategies.computed,p={allCareers:{edges:[{node:{name:"Developer",description:"Love crafting intelligent solutions for complex technical problems? Join our agile team to build meaningful software - doesn’t matter if you’re senior or junior!",qualities:["_Full Stack","_T-Shaped Skills","_Open to explore new tech","_Worked in small agile teams","_Consultant Mindset","_Prefers flat hierarchy"],style:"black"}},{node:{name:"Mobile Developer",description:"If you’re a whiz at all things iOS or Android (brownie points for both!), we’re looking for you. Grab your coffee, let’s build something great together",qualities:["_iOS / Android Development","_Eye for design","_T-Shaped Skills","_Open to explore new tech","_Worked in small agile teams","_Consultant Mindset","_Prefers flat hierarchy"],style:"dark-blue"}},{node:{name:"Lead Quality Analyst",description:"Can you beat our clients in a race to find problems? We’re hunting for a QA Lead who can guide our team and clean up the world, one bug at a time",qualities:["_Automation","_Open to explore new testing tools","_Good communication skills","_Prefers flat hierarchy"],style:"red"}},{node:{name:"UI/UX Designer",description:"Are you adept at handcrafting immersive experiences, backed by behavioural science and a human touch? We’d love to talk to you",qualities:["_Open to learn new tools","_Great commuication skills","_Visual Language"],style:"pink"}},{node:{name:"Product Owner",description:"Join us to breathe life into meaningful products, and bring our vision alive, from ideas to MVP. If case studies on a lazy afternoon are your kinda thing, let’s talk!",qualities:["_Built product(s) before","_Worked in agile teams","_Explorer","_Great communication skills","_Understands how software gets built"],style:"yellow"}}]}},h=function(e){var t=e.options;t.__staticData?t.__staticData.data=p:(t.__staticData=u.a.observable({data:p}),t.computed=d({$static:function(){return t.__staticData.data}},t.computed))},f=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("layout",[t("div",[t("div",[t("TypingHeader",{attrs:{text:"We’re building the workplace of the future."}})],1),t("div",{staticClass:"pitch"},[this._v("\n      We believe that accountability doesn’t hinge on middlemen and managers. \n      Our work culture is remote-first and democratic by design, \n      with open communication channels that encourage holistic learning, \n      passionate discussions, and debates.\n    ")]),t("BulletBlurb",{attrs:{heading:"Life @ Tarka",type:"perks"}}),t("div",{staticClass:"openings"},[t("TilesGroup",{attrs:{projects:this.careers}})],1),t("div",{staticClass:"blurb"},[this._v("\n      We're an eclectic and tight-knit collective, so our hiring processes are less mechanical and more personal. \n      We're always happy to talk to thoughtful and passionate folks. \n      Before you reach out, here's more on "),t("b",[t("a",{attrs:{target:"_blank",href:"https://blog.tarkalabs.com/our-guide-to-hiring-great-people-f6e3438883"}},[this._v("how we hire")])]),this._v("!\n      "),t("br"),t("br"),this._v("\n      Feel free to reach out to us at "),t("b",[t("a",{attrs:{href:"mailto:hello@tarkalabs.com"}},[this._v("hello@tarkalabs.com")])])])],1),t("Blogs",{attrs:{count:"6"}})],1)}),[],!1,null,"72abb227",null);"function"==typeof h&&h(f);t.default=f.exports},Y0lS:function(e,t,i){"use strict";var a=i("TzK6");i.n(a).a},oFNR:function(e,t,i){"use strict";var a=i("ReiP");i.n(a).a},oWDh:function(e,t,i){"use strict";i("TeQF");var a={props:["heading","type"],computed:{blurbs:function(){var e=this,t=this.$static.allBlurbs.edges;return t.filter((function(t){return t.node.type===e.type}))}}},n=(i("2kG/"),i("KHd+")),o=i("Kw5r"),r=o.a.config.optionMergeStrategies.computed,s={allBlurbs:{edges:[{node:{type:"principle",heading:"Product Mindset > Project Mindset",description:"Meaningful software needs outcome-driven teams over resource management."}},{node:{type:"principle",heading:"Strategic Consulting & Planning",description:"Our big-picture strategists are adept at both business and technology."}},{node:{type:"principle",heading:"Trusted Development Partners",description:"Over the years, we’ve solved complex problems for 40+ clients across the globe."}},{node:{type:"perks",heading:"Work From Anywhere (WFA)",description:"We’re remote-first, and we mean it. From your favorite coffee shop to a shack by the beach, tune in and work from anywhere in the world."}},{node:{type:"perks",heading:"Unlimited Leave Policy",description:"Autonomy is the name of the game, so we don’t track your leaves. All we ask is that you plan your time efficiently with your project in mind."}},{node:{type:"perks",heading:"We Heart Side Projects!",description:"Learning is better when its holistic, so if you have big ideas, feel free to build on them. We operate with complete trust and transparency."}},{node:{type:"perks",heading:"Build Your Own Brand (BYOB)",description:"Tarka Labs is a catalyst for self discovery. Nurture and own your ideas, from video blogs to podcasts, with complete operational support."}}]}},l=function(e){var t=e.options;t.__staticData?t.__staticData.data=s:(t.__staticData=o.a.observable({data:s}),t.computed=r({$static:function(){return t.__staticData.data}},t.computed))},c=Object(n.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v(e._s(e.heading))]),i("div",{staticClass:"points"},e._l(e.blurbs,(function(t){return i("div",{key:t.heading},[i("h2",[e._v(e._s(t.node.heading))]),i("span",[e._v(e._s(t.node.description))])])})),0)])}),[],!1,null,"698e03f7",null);"function"==typeof l&&l(c);t.a=c.exports},zz6n:function(e,t,i){}}]);