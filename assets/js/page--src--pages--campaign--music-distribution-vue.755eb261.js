(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2Rl7":function(t,e,s){"use strict";s.r(e);var a=s("KCR2"),i=s("ar5u"),n=s("4hs/"),o={components:{BaseLayout:a.a},data:()=>({ackText:"Thank you!",submitted:!1}),computed:{formUrl:()=>i.a},methods:{submitForm(){const t=document.getElementById("act-form"),e=new FormData(t),s={};e.forEach((t,e)=>s[e]=t),Object(n.a)(i.a,s).then(()=>{this.submitted=!0}).catch(()=>{this.submitted=!0,this.ackText="Oh no! Something went wrong. Please try again"})}}},r=(s("lKW3"),s("KHd+")),c=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("CampaignLayout",[e("template",{slot:"hero"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",[e("video",{attrs:{src:s("jTjH"),muted:"",autoplay:"",loop:""},domProps:{muted:!0}})]),e("div",[e("h4",{staticClass:"heading-size-5",staticStyle:{"margin-bottom":"0"}},[t._v("\n              Upgrade music distribution for faster market expansion.\n            ")]),e("p",{staticClass:"heading-size-8",staticStyle:{"margin-top":"24px"}},[t._v("\n              Build robust systems that save costs and hit the right notes. \n            ")]),e("a",{staticClass:"talk heading-size-9",attrs:{href:"#form"}},[t._v("Let’s talk ↓")])])])])])]),e("div",[e("div",{staticClass:"section form",attrs:{id:"form"}},[e("div",{staticClass:"heading-size-5"},[t._v("\n        Is your distribution strategy hitting the right notes?\n      ")]),e("p",{staticStyle:{"font-family":"body-jetbrains","font-size":"12px","margin-top":"32px"}},[t._v("\n        We can help.\n      ")]),e("form",{attrs:{id:"act-form",url:t.formUrl,method:"POST"}},[e("input",{attrs:{name:"name",type:"text",placeholder:"Name"}}),e("input",{attrs:{name:"email",type:"text",placeholder:"Work Email"}}),e("input",{attrs:{name:"organisation",type:"text",placeholder:"Company Name"}}),e("input",{attrs:{name:"title",type:"text",placeholder:"Job title"}}),e("input",{attrs:{type:"hidden",name:"campaign",value:"Music Distribution"}})]),e("div",{staticClass:"act talk heading-size-8"},[t.submitted?e("div",[t._v(t._s(t.ackText))]):e("div",{on:{click:t.submitForm}},[t._v("\n          Let’s talk "),e("span",{staticClass:"arrow"},[t._v("->")])])])]),e("div",{staticClass:"container first"},[e("div",{staticClass:"section"},[e("p",{staticClass:"heading-size-6"},[t._v("\n          No more one-hit wonders. Meet the professionals.\n        ")]),e("div",{staticClass:"vimeo"},[e("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/808600635?h=52896e4983&badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",title:"Transcoding Solution"}})]),e("p",{staticClass:"heading-size-7"},[t._v("\n          Modernize and refactor your distribution system 🤖\n        ")]),e("p",{staticClass:"heading-size-7"},[t._v("\n          Simplify and streamline ingestion systems 🏃‍♂️\n        ")]),e("p",{staticClass:"heading-size-7"},[t._v("\n          Improve test coverage and observability 👀\n        ")]),e("p",{staticClass:"heading-size-7"},[t._v("Optimize infrastructure/server costs 💸")])]),e("div",{staticClass:"section"},[e("p",{staticClass:"heading-size-2"},[t._v("8,000,000+")]),e("p",{staticClass:"heading-size-6"},[t._v("\n          tracks transcoded and transferred in under 3 weeks 🤯\n        ")]),e("p",[t._v("\n          Our solution standardized the catalog for simplified processing,\n          storage, and distribution. We built a bespoke rules engine to\n          capture platform-specific guidelines and automate transcoding.\n          Powered by AWS Lambda, our solution is future-proof, scalable, and\n          secure, and can handle bursts of up to 20,000 parallel requests.\n        ")]),e("video",{attrs:{src:"/tunecore/tunecore_dist_testingbefore.mp4",autoplay:"",muted:"",loop:""},domProps:{muted:!0}})]),e("div",{staticClass:"section",staticStyle:{"margin-bottom":"100px"}},[e("p",{staticClass:"heading-size-2"},[t._v("70%")]),e("p",{staticClass:"heading-size-6"},[t._v("server costs saved 💸")]),e("p",[t._v("\n          Our internal standardization and improved transcoding solution\n          drastically reduces Amazon ECS instances from 50 to 16, helping our\n          client save over 70% in server costs. Paired with Lambda’s variable\n          cost structure, this significantly optimizes transcoding expenses\n          without sacrificing speed.\n        ")])])])])],2)}),[],!1,null,"343476a6",null);e.default=c.exports},"4hs/":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s("2eJa");function a(t,e){let s=new FormData;for(var a in e)s.append(a,e[a]);return fetch(t,{method:"POST",enctype:"multipart/form-data",body:s}).then(t=>{if(200!==t.status)throw Error("Form submission failed")})}},BQsq:function(t,e,s){},ar5u:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return i}));const a="https://getform.io/f/fc24ade2-816f-4025-b6dc-cbcd206f12aa",i="https://getform.io/f/0156bf4e-da33-4ecd-96a5-b1273602419a"},jTjH:function(t,e,s){t.exports=s.p+"assets/media/wave.a3fd54b4.mp4"},lKW3:function(t,e,s){"use strict";s("BQsq")}}]);