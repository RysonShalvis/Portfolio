(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(20),l=c.n(i),r=(c(27),c(28),c(4)),o=c(5),j=c(14),m=c(7),b=c(6),d=c(11),h=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={opened:!1,close:"closed"},s.menuClicked=s.menuClicked.bind(Object(j.a)(s)),s.animationEnd=s.animationEnd.bind(Object(j.a)(s)),s}return Object(o.a)(c,[{key:"onProjects",value:function(){document.querySelector("#projects").scrollIntoView({behavior:"smooth",block:"start"})}},{key:"onContact",value:function(){document.querySelector("#contact").scrollIntoView({behavior:"smooth",block:"start"})}},{key:"menuClicked",value:function(){this.setState({opened:!this.state.opened,close:"closing"})}},{key:"animationEnd",value:function(e){"closing"===e.target.classList[0]&&this.setState({close:"closed"})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"header-ctn-mobile mobile",children:[Object(s.jsx)("h1",{children:"Ryson Shalvis"}),Object(s.jsxs)("div",{onClick:this.menuClicked,className:"hamburger-icon-ctn",children:[Object(s.jsx)("div",{className:"".concat(this.state.opened?"hamburger-open":"hamburger-closed"," hamburger-icon")}),Object(s.jsx)("div",{className:"".concat(this.state.opened?"hamburger-open":"hamburger-closed"," hamburger-icon")}),Object(s.jsx)("div",{className:"".concat(this.state.opened?"hamburger-open":"hamburger-closed"," hamburger-icon")})]}),Object(s.jsxs)("div",{onAnimationEnd:this.animationEnd,className:"".concat(this.state.opened?"opened":this.state.close," nav-link-ctn-mobile"),children:[Object(s.jsx)("a",{href:"./",children:Object(s.jsx)("h2",{className:"nav-link-mobile",children:"Home"})}),Object(s.jsx)(d.b,{to:"/",children:Object(s.jsx)("h2",{onClick:this.onProjects,className:"nav-link-mobile",children:"Projects"})}),Object(s.jsx)("h2",{onClick:this.onContact,className:"nav-link-mobile",children:"Contact"})]})]}),Object(s.jsxs)("div",{className:"header-ctn desktop",children:[Object(s.jsx)("h1",{className:"header-name",children:"Ryson Shalvis"}),Object(s.jsx)("p",{children:"This is a work in progress, not all features will be available!"}),Object(s.jsxs)("div",{className:"nav-link-ctn",children:[Object(s.jsx)("a",{href:"./",children:Object(s.jsx)("h2",{className:"nav-link",children:"Home"})}),Object(s.jsx)(d.b,{to:"/",children:Object(s.jsx)("h2",{onClick:this.onProjects,className:"nav-link",children:"Projects"})}),Object(s.jsx)("h2",{onClick:this.onContact,className:"nav-link",children:"Contact"})]})]})]})}}]),c}(a.Component),O=c.p+"static/media/My Picture.418ca98f.jpg",p=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"onClick",value:function(){document.querySelector("#projects").scrollIntoView({behavior:"smooth",block:"start"})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"homepage",children:[Object(s.jsxs)("div",{className:"home-ctn-mobile mobile",children:[Object(s.jsxs)("div",{className:"intro-ctn-mobile",children:[Object(s.jsx)("h1",{children:"Hey, I'm Ryson."}),Object(s.jsx)("div",{className:"intro-summary-mobile",children:"A Web Developer from Salt Lake City, Utah. I code websites as a passion of mine."}),Object(s.jsx)("button",{style:{margin:"20px"},onClick:this.onClick,className:"project-btn btn",children:"My Projects"})]}),Object(s.jsx)("div",{className:"picture-ctn-mobile",children:Object(s.jsx)("img",{src:O,alt:"Ryson Shalvis",className:"profile-picture-mobile"})})]}),Object(s.jsxs)("div",{className:"home-ctn desktop",children:[Object(s.jsxs)("div",{className:"intro-ctn",children:[Object(s.jsx)("h1",{className:"intro-name",children:"Hey, I'm Ryson."}),Object(s.jsx)("h2",{className:"intro-summary",children:"A Web Developer from Salt Lake City, Utah. I code websites as a passion of mine."}),Object(s.jsx)("button",{onClick:this.onClick,className:"project-btn btn",children:"My Projects"})]}),Object(s.jsx)("div",{className:"picture-ctn",children:Object(s.jsx)("img",{src:O,alt:"Ryson Shalvis",className:"profile-picture"})})]}),Object(s.jsx)("div",{className:"diagonal"})]})}}]),c}(a.Component),u=c.p+"static/media/Trick-screen-1.aeb23c44.png",x=c.p+"static/media/Trick-screen-4.0b3b3d3d.png",v=c.p+"static/media/yelp-api-screenshot.6446c90c.png",N=c.p+"static/media/lightbulb.a5f2c203.png",f=c.p+"static/media/invision-clone-screentshot.32eeb8ae.png",g=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"projects",className:"featured-projects-ctn-ctn",children:[Object(s.jsx)("p",{className:"featured-project-title",children:"FEATURED PROJECTS"}),Object(s.jsx)("div",{className:"under-line"}),Object(s.jsx)("h1",{className:"featured-project-name mobile-title",children:"Yelp API"}),Object(s.jsxs)("div",{className:"featured-project-ctn",children:[Object(s.jsx)("div",{className:"img-ctn",children:Object(s.jsx)("img",{src:v,alt:"The Trick Creator Website",className:"trick-creator"})}),Object(s.jsxs)("div",{className:"featured-project-summary-ctn",children:[Object(s.jsx)("h1",{className:"featured-project-name title-right-desktop",children:"Yelp API"}),Object(s.jsx)("h2",{className:"featured-project-summary yelp-summary",children:"Search for different businesses in any location with reviews/ratings using an API from the Yelp Servers."}),Object(s.jsxs)("div",{className:"lightbulb-ctn",children:[Object(s.jsx)("img",{src:N,alt:"",className:"lightbulb"}),Object(s.jsx)("h2",{className:"more-info",children:"FULLY FUNCTIONAL"})]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"})}),"API AND SERVERS"]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"})}),"REACT.JS, CSS, AND JSX"]}),Object(s.jsx)(d.b,{to:"/portfolio/yelp-api",children:Object(s.jsx)("button",{className:"project-details btn",children:"View Details"})})]})]}),Object(s.jsx)("div",{className:"under-line underlines"}),Object(s.jsx)("h1",{className:"featured-project-name mobile-title",children:"Invision Clone"}),Object(s.jsxs)("div",{className:"featured-project-ctn",children:[Object(s.jsxs)("div",{className:"featured-project-summary-ctn desktop",children:[Object(s.jsx)("h1",{className:"featured-project-name title-left-desktop",children:"Invision Clone"}),Object(s.jsx)("h2",{className:"featured-project-summary",children:"A perfect clone of Invision App's home website."}),Object(s.jsxs)("div",{className:"lightbulb-ctn",children:[Object(s.jsx)("img",{src:N,alt:"",className:"lightbulb"}),Object(s.jsx)("h2",{className:"more-info",children:"EXACT REPLICA"})]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"})}),"BUILT FROM SCRATCH"]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"})})," JAVASCRIPT, CSS, AND HTML"]}),Object(s.jsx)(d.b,{to:"/portfolio/invision-clone",children:Object(s.jsx)("button",{className:"project-details btn",children:"View Details"})})]}),Object(s.jsx)("div",{className:"img-ctn",children:Object(s.jsx)("img",{src:f,alt:"The Trick Creator Website",className:"trick-creator"})}),Object(s.jsxs)("div",{className:"featured-project-summary-ctn invision-summary mobile",children:[Object(s.jsx)("h1",{className:"featured-project-name title-left-desktop",children:"Invision Clone"}),Object(s.jsx)("h2",{className:"featured-project-summary",children:"A perfect clone of Invision App's home website."}),Object(s.jsxs)("div",{className:"lightbulb-ctn",children:[Object(s.jsx)("img",{src:N,alt:"",className:"lightbulb"}),Object(s.jsx)("h2",{className:"more-info",children:"EXACT REPLICA"})]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"})}),"BUILT FROM SCRATCH"]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"})})," JAVASCRIPT, CSS, AND HTML"]}),Object(s.jsx)(d.b,{to:"/portfolio/invision-clone",children:Object(s.jsx)("button",{className:"project-details btn",children:"View Details"})})]})]}),Object(s.jsx)("div",{className:"third-underline under-line underlines"}),Object(s.jsx)("h1",{className:"featured-project-name mobile-title",children:"Trick Creator"}),Object(s.jsxs)("div",{className:"featured-project-ctn",children:[Object(s.jsxs)("div",{className:"img-ctn",children:[Object(s.jsx)("img",{src:u,alt:"The Trick Creator Website",className:"trick-creator"}),Object(s.jsx)("img",{src:x,alt:"The Trick Creator Website",className:"trick-creator"})]}),Object(s.jsxs)("div",{className:"featured-project-summary-ctn",children:[Object(s.jsx)("h1",{className:"featured-project-name title-right-desktop",children:"Trick Creator"}),Object(s.jsx)("h2",{className:"featured-project-summary trick-creator-summary",children:"A simple game that allows you to combine tricks to make more and more complex tricks."}),Object(s.jsxs)("div",{className:"lightbulb-ctn",children:[Object(s.jsx)("img",{src:N,alt:"",className:"lightbulb"}),Object(s.jsx)("h2",{className:"more-info",children:"OWN CONCEPT"})]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"})}),"BUILT FROM SCRATCH"]}),Object(s.jsxs)("h2",{className:"more-info",children:[Object(s.jsx)("svg",{className:"computer-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(s.jsx)("path",{d:"M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"})}),"REACT, JAVASCRIPT, CSS, AND JSX"]}),Object(s.jsx)(d.b,{to:"/portfolio/trick-creator",children:Object(s.jsx)("button",{className:"project-details btn",children:"View Details"})})]})]})]})}}]),c}(a.Component),C=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{}),Object(s.jsx)(g,{})]})}}]),c}(a.Component),k=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"contact",className:"contact-ctn",children:[Object(s.jsx)("div",{className:"left-diagonal"}),Object(s.jsxs)("div",{className:"contact-wrapper",children:[Object(s.jsx)("h1",{className:"contact-me",children:"Contact Me"}),Object(s.jsx)("h2",{className:"cont-info",children:"RYSONSHALVIS@GMAIL.COM"}),Object(s.jsx)("h2",{className:"cont-info",children:"LINKEDIN.COM/IN/RYSONSHALVIS"}),Object(s.jsx)("h2",{className:"cont-info",children:"GITHUB.COM/RYSONSHALVIS"}),Object(s.jsx)("a",{href:"www.google.com",children:Object(s.jsx)("h2",{className:"cont-info",children:"801-831-9170"})})]})]})}}]),c}(a.Component),y=c(2),w=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"test",children:[Object(s.jsx)("div",{className:"redirect",id:"projects"}),Object(s.jsx)("h1",{children:"Sorry this feature is not available yet."})]})}}]),c}(a.Component),S=c.p+"static/media/Full-page-yelp.56a7fb10.png",A=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"full-page-yelp-ctn",children:[Object(s.jsx)("div",{className:"yelp-intro",children:"Yelp API"}),Object(s.jsx)("div",{className:"diagonal"}),Object(s.jsxs)("div",{className:"test",children:[Object(s.jsx)("div",{className:"redirect",id:"projects"}),Object(s.jsx)("img",{className:"full-page-yelp",src:S,alt:""})]})]})}}]),c}(a.Component),I=c.p+"static/media/full-page-invision.299805b4.png",T=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"full-page-yelp-ctn",children:[Object(s.jsx)("div",{className:"yelp-intro",children:"Invison Clone"}),Object(s.jsx)("div",{className:"diagonal"}),Object(s.jsxs)("div",{className:"test",children:[Object(s.jsx)("div",{className:"redirect",id:"projects"}),Object(s.jsx)("img",{className:"full-page-yelp",src:I,alt:"yelp api website"})]})]})}}]),c}(a.Component);var L=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(d.a,{basename:"/",children:[Object(s.jsx)(h,{}),Object(s.jsx)(y.a,{exact:!0,path:"/",component:C}),Object(s.jsx)(y.a,{exact:!0,path:"/portfolio/yelp-api",component:A}),Object(s.jsx)(y.a,{exact:!0,path:"/portfolio/invision-clone",component:T}),Object(s.jsx)(y.a,{exact:!0,path:"/portfolio/trick-creator",component:w}),Object(s.jsx)(k,{})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),M()}},[[34,1,2]]]);
//# sourceMappingURL=main.683997e6.chunk.js.map