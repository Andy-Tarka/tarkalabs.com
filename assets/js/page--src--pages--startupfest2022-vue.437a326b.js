(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+oRD":function(e,t){e.exports={type:"image",mimeType:"image/svg+xml",src:"/assets/static/heart.3dc9c04.f3087608e2a3e79c97fb42d060683e63.svg",size:{width:52,height:42},sizes:"(max-width: 52px) 100vw, 52px",srcset:["/assets/static/heart.3dc9c04.f3087608e2a3e79c97fb42d060683e63.svg 52w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 52 42' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-a84c75c1202389b72fe7b85dd18a8982'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-a84c75c1202389b72fe7b85dd18a8982)' width='52' height='42' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoElEQVRo3u2aSWgUQRSGS40mGhMFjaLggogeAiIuB08uBw%2bK6EEQL4oag0vEXVwObnGHoHFJFEFxQRDjRVQQUXLIghcRl%2bhBEZeDJk4SiRmzOPo/%2bQPNMN09meru6R76wUfIMNOv6%2b%2bu111/PaWSi7ugC/xNkTWgv0otisEbjdw3wXSlGaEADgiQlWLutZoC3ADTdAW4oynASo3cq8FrjdzXwJTeJFwKToJKcI58AH80TuIJqOCxLoBLYHJcXpki%2b8BlcJ7flb9PQUQj9ztwG5wF5WArGG4lwDEOuA00k04Q0ziJX4ZjtYAomB2XNwfU8E5rNiC/7dbI3QF%2bglbwHTwE460EOMOTTHSw3ooQs/jNnLi8UiNe2RxLN7f8XwvGGhPnkzxehQrNWy5ZFoEBYDBzj7ARwAnkTq5jTcjiuNURA4fAM9DugQBSnQ8acp8A31zOKVPpE%2btQT27VRBpJu2bBS5YWQ85GnkOXyzljvAsihpyOzTkn6oLbeRN97vqV9juhAKEAoQChAKEAoQChAKEAoQChAB69k6cL07VANI6uDBy8UQRZ6f42jPe/RyZsAZtANe2wTBRA/ID3oBRs5LhVARGjcAgNy0iGCiBeQD2YSSeqIJEnWE4TMeg1wcx3qIv3BOOjlFbyD7qobR45RG4RNThAX8E9MM5KgCUUoYzefA2t6aAK0MDtsVOkBAyzEiCLbm1ffnE/74SgCnALzOLYsnu7RzmQuzVNAakJMZPN0amp7stJpdwNvhh2WToD8KjrIFK7rupsjsotMx8c5T7dRfDI5wK85aDLec4rwBjlUPQDy3wuwBWz57sTkU9F/SzAdbvNT52QN8WiBEn/%2bKjoVYEJbgkgj8dCsAPsBOvZPJHOK/4RbAbbwV6woGfT06soSrMANSrNUeyRn2B2vHq/CuAVtekWoJDzr4Ri3DdZTTq1nG3gy9k6sI09TWmNHHZ3iJ8wiA1WjS6u7KrZYJXH5/1Q5bM4YGKoxByY893sOPPdoI2xi6%2bjzVxEtWl2eUV5rAjXJFV2y9l0xzw%2bj2X9cBw8tug6S4bnXIMcZl/PKk4130Y2V5G5vFJ72Jik824/g%2bv4PA6%2bjwpQiNv8Ock5nugzMWknqoCGXLUN4CXncgtrglVBFM%2b%2blcjcPw0mBVUAWT7P5fyt5Fx%2boKzb4V5wPd/TK7wcjFQZEuI3LrQxWcuUTTNzkEMK2GJl3YkqvcqjMlWAXNrudgKM9uqE/gE4P9eeO3XNRgAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},"1NRy":function(e,t,a){"use strict";a.r(t);var i={props:["videoid"],computed:{videoUrl(){return`https://www.youtube.com/embed/${this.videoid}?controls=1&modestbranding=1`}}},s=(a("kmyQ"),a("KHd+")),o=Object(s.a)(i,(function(){var e=this._self._c;return e("div",{staticClass:"video-container"},[e("iframe",{attrs:{id:"ytplayer",type:"text/html",src:this.videoUrl,frameborder:"0",allowfullscreen:""}})])}),[],!1,null,"5ce41990",null).exports,n={props:["data"],computed:{videoUrl(){return"https://player.vimeo.com/video/"+this.data.videoid}}},r=(a("tka7"),Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pitch"},[t("h2",{staticClass:"heading-size-6"},[e._v(e._s(e.data.heading))]),t("div",{staticClass:"vimeo-container"},[t("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:e.videoUrl,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture; control;",allowfullscreen:""}})]),t("script",{attrs:{type:"application/javascript",src:"https://player.vimeo.com/api/player.js"}}),e.data.details?t("div",{staticClass:"details"},[t("ul",{staticClass:"data-list body-jetbrains-size-9"},e._l(e.data.details,(function(a){return t("li",{key:a},[e._v(e._s(a))])})),0)]):e._e(),e.data.linkText?t("div",{staticClass:"pitch-link"},[t("a",{staticClass:"link-text heading-size-8",attrs:{href:e.data.linkDestination,target:"_blank"}},[e._v("\n      "+e._s(e.data.linkText)+"\n    ")])]):e._e()])}),[],!1,null,"85ce5c92",null).exports),l=a("pAL8"),c=a("IkGV"),g=a("kGzD"),d={mounted(){this.$children[0].overrideTheme="purple"},components:{YoutubeEmbed:o,Pitch:r,SocialLinks:l.a,Logo:c.a},data:()=>({audit:[{heading:"Design Audit",details:["Usability evaluation","User flow & bottlenecks","Performance & scalability","Quick wins & opportunities"],videoid:"728894481?h=a2c9b6e177",linkText:"Sign up for an audit",linkDestination:"https://docs.google.com/forms/d/e/1FAIpQLSc5LNfaRzzY7_VgX-gkYCFJ1meZ8Bqwdph0vDYl2aaT3oIoQw/viewform"},{heading:"Tech Audit",details:["Application architecture","Planning & delivery","DevOps & infrastructure","Technical code review"],videoid:"728757567?h=4465b624c8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",linkText:"Sign up for an audit",linkDestination:"https://docs.google.com/forms/d/e/1FAIpQLSc5LNfaRzzY7_VgX-gkYCFJ1meZ8Bqwdph0vDYl2aaT3oIoQw/viewform"}],faqs:[{q:"How do I know if my product is eligible?",a:"All you need is a functioning product and a vision to make it better. Here’s a hack — we love detailed responses in an application!"},{q:"How long will applications stay open?",a:"Applications have to be shared on or before July 21st, 2022."},{q:"When will I know if I’ve been shortlisted?",a:"We’ll announce the final winners on July 25th, 2022. Our team will reach out to you!"},{q:"Can I apply for both audits together?",a:"Yes. The world belongs to those who dare, so why not!"},{q:"How long will the audit take?",a:"Our team will schedule a 3-day workshop, and share recommendations at the end of the cycle. We’ll share these details soon as you’re shortlisted."},{q:"Can I see an example tech audit?",a:"Sure! ",linkText:"Here's a sample.",linkDestination:"https://gist.github.com/vagmi/48d39764dbafb19c1a0fbbb46297da9d"},{q:"Can I see an example design audit?",a:"No."},{q:"Why not?",a:"Design audits are in video format, so we can’t really redact them.  We’ll do a good job though!"}],about:[{title:"Product Design",description:"Design that looks great and works like a charm. Systems that let you pivot, scale, test, and even do backflips—all in a day’s work."},{title:"Product Development",description:"Cutting-edge web and mobile applications that solve real-world problems. Built without shortcuts, from the bottom up."},{title:"CTO-As-A-Service (CaaS)",description:"No-nonsense technology consultations and audits that pack a punch. Walk the build-buy tightrope, architect future-proof products, and mentor in-house leaders."}]}),metaInfo:()=>Object(g.a)("/startupfest2022")},p=(a("pS4D"),Object(s.a)(d,(function(){var e=this,t=e._self._c;return t("Layout",[t("template",{slot:"banner"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"startupfest-hero heading-size-5"},[e._v("\n        Hello Startup Fest '22\n      ")])])]),t("div",{staticClass:"container"},[t("div",{staticClass:"moonshot"},[t("p",{staticClass:"meaning body-jetbrains-size-6"},[e._v("\n        Go from moonshots to MVPs. Bring your ideas to life or scale systems\n        seamlessly. We can help!\n      ")])]),t("div",{staticClass:"what_we_do"},[t("div",{staticClass:"section-title"},[e._v("who we are")]),t("div",{staticClass:"section-header"},[e._v("\n        We’re makers on a mission to add meaning.\n      ")]),t("p",{staticClass:"section-body"},[e._v("\n        Our collective of passionate hackers, designers, and product managers\n        are adept at:\n      ")])]),t("div",{staticClass:"about"},e._l(e.about,(function(a,i){return t("div",{key:i,staticClass:"sub-section"},[t("h3",[e._v(e._s(a.title))]),t("p",{staticClass:"body-opensans-size-9"},[e._v(e._s(a.description))])])})),0),t("div",{staticClass:"offer"},[t("div",{staticClass:"section-title"},[e._v("offer")]),t("div",{staticClass:"section-header"},[e._v("Let’s future-proof your product.")]),t("div",{staticClass:"partner"},[t("div",{staticClass:"section-body"},[e._v("\n          We’re partnering with\n          "),t("a",{attrs:{href:"https://www.planethatch.com/",target:"_blank"}},[e._v("Planet Hatch")]),e._v("\n          to offer a free Tech or Design Audit worth $10,000. Here’s why you\n          need one.\n        ")]),t("div",{staticClass:"image-flex"},[t("Logo"),t("g-image",{attrs:{src:a("+oRD")}}),t("a",{attrs:{href:"https://www.planethatch.com/",target:"_blank"}},[t("g-image",{attrs:{src:a("x/5k")}})],1)],1)])]),t("div",{class:["design_audit","videocard"]},[t("Pitch",{attrs:{data:e.audit[0]}})],1),t("div",{class:["tech_audit","videocard"]},[t("Pitch",{attrs:{data:e.audit[1]}})],1),t("div",{staticClass:"faqs"},[t("div",[t("div",{staticClass:"section-title"},[e._v("faqs")]),t("div",{staticClass:"section-header"},[e._v("What's the deal?")])]),e._l(e.faqs,(function(a,i){return t("div",{key:i,staticClass:"sub-section"},[t("h3",[e._v(e._s(a.q))]),t("p",{staticClass:"body-opensans-size-9"},[e._v("\n          "+e._s(a.a)+"\n          "),a.linkText?t("a",{attrs:{href:a.linkDestination,target:"_blank"}},[e._v(e._s(a.linkText)+"\n          ")]):e._e()])])}))],2),t("div",{staticClass:"thats_it"},[t("div",{staticClass:"section-title"},[e._v("that's it")]),t("div",{staticClass:"section-header"},[e._v("Stay tuned for more updates.")]),t("div",{staticClass:"social-links heading-size-8"},[t("a",{attrs:{href:"https://in.linkedin.com/company/tarka-labs",target:"_blank"}},[e._v("\n          LinkedIn\n        ")]),t("a",{attrs:{href:"https://twitter.com/tarkalabs",target:"_blank"}},[e._v("Twitter ")])])])])],2)}),[],!1,null,"36ab0521",null));t.default=p.exports},"8r//":function(e,t,a){},F9sc:function(e,t,a){},WSJG:function(e){e.exports=JSON.parse('[{"page":"/","pageTitle":"Welcome","title":"Home · Tarka Labs · Software Consulting Company","description":"Tarka Labs is a software consulting company and collective dedicated to designing and building meaningful, high performance web and mobile applications.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/web","pageTitle":"Web Development","title":"Full Stack Enterprise Software Solutions · Tarka Labs","description":"Ideate, architect and prototype scalable enterprise software solutions that transform your business, with our full-stack team of engineers.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/develop/mobile","pageTitle":"Mobile Development","title":"Mobile App Development · Tarka Labs","description":"Explore cutting-edge mobile app development, implement leading technologies, and take your product to market from concept to creation.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/train","pageTitle":"Train","title":"Upskill Engineers With Software Training · Tarka Labs","description":"Hire our specialists to empower your engineers with software training and grow strong engineering divisions with holistic learning models.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/design","pageTitle":"Design","title":"Thoughtful design that works · Tarka Labs","description":"We design brands, products, and interfaces that look great, work like a charm, and wow users. Get an audit or start a new project.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/projects","pageTitle":"Projects","title":"All Projects · Product Design & Full Stack Development · Tarka Labs","description":"Explore web and mobile applications and solutions we’ve designed, developed and refactored for leading international brands across domains.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/talks","pageTitle":"Talks","title":"Videos · Technology, Frameworks & Remote Working · Tarka Labs","description":"Watch our thoughts on design and tech frameworks of the future, how we approach software development, and building an efficient remote work culture.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/about","pageTitle":"About Us","title":"About Us · Our Vision, Team & Work Culture · Tarka Labs","description":"Meet the minds that make up our tight knit collective at Tarka Labs. Here are some insights on who we are, how we think, and what we’re building.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/contact","pageTitle":"Contact Us","title":"Get In Touch · Consult Software Development Experts · Tarka Labs","description":"Have an idea that you want to brainstorm and breathe life into? Or interested in joining our team? Reach out to us at hello@tarkalabs.com.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"},{"page":"/careers","pageTitle":"Careers","title":"Job Openings · Tarka Labs","description":"We love clean code, clever designs, everyday learning, and autonomy over our roles. Join our collective. Explore our current job openings.","og_image":"https://tarkalabs.com/images/og_image_1200x627.png","og_image_height":"627","og_image_width":"1200"}]')},kGzD:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}));var i=a("WSJG");function s(e){for(var t,a,i=e.length;0!==i;)a=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[a],e[a]=t;return e}function o(e){const t=(new Date).toLocaleString("en-US",{timeZone:e});return new Date(t)}function n(e){let t=r(e)||r("/");return{title:t.pageTitle,meta:[{property:"og:image",content:t.og_image},{property:"og:image:height",content:t.og_image_height},{property:"og:image:width",content:t.og_image_width},{property:"og:title",content:t.title},{property:"og:description",content:t.description}]}}function r(e){return i.filter(t=>t.page==e).pop()}},kmyQ:function(e,t,a){"use strict";a("wect")},pS4D:function(e,t,a){"use strict";a("F9sc")},tka7:function(e,t,a){"use strict";a("8r//")},wect:function(e,t,a){},"x/5k":function(e,t){e.exports={type:"image",mimeType:"image/svg+xml",src:"/assets/static/ph-logo-trans%201.dc72452.de54d0a195c7f266771e6e3e45085efc.svg",size:{width:240,height:36},sizes:"(max-width: 240px) 100vw, 240px",srcset:["/assets/static/ph-logo-trans%201.dc72452.de54d0a195c7f266771e6e3e45085efc.svg 240w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 240 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-3c2f7edd784b189ff552027076756b1d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-3c2f7edd784b189ff552027076756b1d)' width='240' height='36' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAKCAYAAAAEqljUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFdUlEQVRIx41WfWwUVRC/vQpWWi6ltHxYqOe1tGCP9m4/bt9CKYiKikXQKMYUQoJRJBqJIgomggmgkoixiESRECSkkYQvS6MC0SofEm0NIB%2bpJCqGUuhxvbsW0UJL19/szvaWwz/cZPLmzbyZN%2b/3Zuatx4OvQxZqUjG2dqrGX6BroN1xRdzr4e/z4lIvjY8NGSp50r4P/UVeh58J/VO5ebes2Rwo8abLVo/23yJL/8bePoh8SfPyhvf7nJ8/TPqvvf/vt6Kg8GabTsVY261NNPv0SrNLnWDi8DeuRzCPVBK//UBR0W207tA95QNoBFBzID8GakooYq7lQzVWJlVjthX04CzpbFC%2bA/NPIP8x4QISsjchO41xAc1jsijB/FtQC9bNism6H/xPTBtozQ9lIWtf6Gtgt4L9fIT5VFtu1GDtcchWsW4V5s2gn%2bOKYUTlSD74A6D98B/geD/FBZdHZT3fYxqT6aC9oG5QzzUcngDgeR8c7iSjI2UVA20AxAbIjyKAeRj/vhjW8zB%2bgXVv9YOqGmspAD7wZT7AbPAXIZuPsSum6KUIsAp8Ej7nXJb1kveG%2b71J2zaOACsZ%2bIF8sNWg/ez/LPRPtsv6CMpayF/CeAF7PNMuiwLwbaBtGVKGBF0j6DPMN9PFsf0fWPtgXBZFNOm9ohmmKSaZpm7d%2bq9JVdRjgydguMWcOMXE4sf7b1ER65E1a9hRCw5RSc6xdpkLgH24GSc7LhDS8LkMfB3LKDNmxFUhKJPcGdmhismkJ35xwSipcdx4zjyxPOmyR3wPw34K%2bBM2QKIW%2bo9ZfwCZWsP8bwC3tC0cyYN%2bH8uOI%2b7wpQrV5%2bHb7wLVJ1QxD4G9CGT09nBkNKFLwMCw3gUA3dBhbLgI45XWcCQH%2bu1pAOzAfDdnScclmdaIJeB3sb6ZDtChCBX8JegWIiNCpMOhZlGAxAd9WW4AlkJ%2bKq7qj1ImwX4a1urgo%2bDJpgl7OhdzCAAsZB424n7im4OhgSw7hrXvd6pisYfqH87rYorQML6LhljFKbfW1CeZVzWrL7QcD4YyOZC3GbD9lCXscC82XOoCoI4OBmqkMjkvaz7YvdbJ5cQAPAIAQuCvU80DrKcZgJkOAPLgbOlwf%2b8Rr0D%2bD6iB%2bhRsp8KHRjwA/ArjVcS8kv0fRJYuYP401t13U9%2bze0QL6AhNekBWCeAQ2%2bKKPg0GDxHKdPhuux%2b0nAyGM10lsD7N4R5s/rpr3oASeIH5VtTqUM6AHSxrogxI2CVwwu0LAFQ7tTp5SI50MAXACso0l/10rKXyO8UlsBHxr3MASKYAOAOwtHMhLQs%2bFrHsFwIvWqHnem7Ydd9DAGD8BnSOe0FPFxDvs/mGVAkYBMAm4lvKlUHssB7yN1wA7AUAS5hva5cjDgA700rAoABrsvO9jWPtVMehZjgZoPgGS9%2blSoAA2JOqYTEdAE6ky%2bGM3QqqdQHwvKvhzaSeAz7BspOUFch2Pxmu4cN/SQp%2bFW704uAEhGlUUROcnXrKxDroNxJ/plzO5M03kQ1q6ujcnCESxl0I%2bFUHgKii56ZlQDOCr0bZjbPt7A5uvRZ2CVgZUD00V2oK2s8g7JfT/4lTwwlqgooFwBnWb0EcH7D%2b%2b07uAZA9R30IFENMzzplAfspeBYLPfxEPRCXdarHo1wfV/ntRHMTm2nNO4UB6wcE7%2brIqKwVEL/eH7B%2bKtrCWn5C0SegfLQlhXdL5BhNNM/%2bydLHfl1alnER81jY3hD64nMh1Vc7OuAFXwHbKpTJSNKdD2u%2by3KkmPhIVrb08og7rX3hbxgy6S72Wdwa1rJ/r9AGwb6EfY6CfiTHGLgQ0nKdS0ODLUa2jemfy5Exf6IkjpSNH/AveMpH8Z%2bQylQAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}]);