(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),s=c.n(n),r=c(12),a=c.n(r),o=c(9),l=c(3),d=c(49),j=c(48),b=c(5),h=c(11);c(19),c(33);var u=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(b.a)(r,2),l=a[0],d=a[1],j=Object(n.useRef)();function u(e){try{j.current.splide.go("<")}catch(t){console.log(t)}}function p(e){try{j.current.splide.go(">")}catch(t){console.log(t)}}function O(e){try{j.current.splide.go("+{2}")}catch(t){console.log(t)}}return Object(n.useEffect)((function(){d(!0),fetch("https://sarah-ryder-backend.herokuapp.com/api/v2/pages/?type=portfolio.Project&fields=client,card_image,card_description").then((function(e){return e.json()})).then((function(e){return s(e.items)})),d(!1)}),[]),l?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{id:"projects-slider-flex-container",children:[Object(i.jsxs)("div",{id:"buttons-top-container",children:[Object(i.jsx)("div",{id:"slider-button-top-left",onClick:u}),Object(i.jsx)("div",{id:"slider-button-top-right",onClick:p})]}),Object(i.jsx)("div",{className:"projects-slider-container",children:Object(i.jsx)(h.Splide,{options:{rewind:!0,perMove:0,gap:"3vw",type:"loop",autoWidth:!0,pagination:!1,arrows:!1,focus:"center",trimspace:!1},ref:j,children:c.map((function(e,t){return Object(i.jsx)(h.SplideSlide,{children:Object(i.jsx)(o.b,{to:"/"+e.meta.slug,onClick:O(),className:"nav-link",children:Object(i.jsxs)("div",{className:"projects-slider-card-container",children:[Object(i.jsx)("div",{className:"projects-slider-card-image-container",children:Object(i.jsx)("img",{src:"https://sarah-ryder-backend.s3-us-west-2.amazonaws.com/original_images/"+e.card_image.title,alt:e.card_description})}),Object(i.jsxs)("div",{className:"projects-slider-card-text-container",children:[Object(i.jsx)("p",{className:"projects-slider-client-name",children:e.client}),Object(i.jsx)("p",{className:"projects-slider-card-description",children:e.card_description})]})]})})},t)}))})}),Object(i.jsxs)("div",{id:"buttons-bottom-container",children:[Object(i.jsx)("div",{id:"slider-button-bottom-left",onClick:u}),Object(i.jsx)("div",{id:"slider-button-bottom-right",onClick:p})]})]})};c(39);var p=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://sarah-ryder-backend.herokuapp.com/api/v2/pages/?type=home.HomePage&fields=bio,clients,email,linkedin,instagram").then((function(e){return e.json()})).then((function(e){return s(e.items[0])}))}),[]),Object(i.jsxs)("div",{className:"info-page-flex-container",children:[Object(i.jsx)("div",{className:"info-container",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"bio-container",children:Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:c.bio},id:"bio"})}),Object(i.jsx)("div",{id:"info-lists",children:Object(i.jsxs)("div",{id:"info-lists-flex-container",children:[Object(i.jsxs)("div",{id:"selected-clients",children:[Object(i.jsx)("p",{children:"Selected Clients"}),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:c.clients}})]}),Object(i.jsxs)("div",{id:"contact",children:[Object(i.jsx)("p",{children:"Contact"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"mailto: "+c.email,children:"email"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:c.linkedin,children:"linkedin"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:c.instagram,children:"instagram"})})]})]})]})})]})}),Object(i.jsx)("div",{className:"copyright-container",id:"info-copyright",children:Object(i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()]})})]})},O=(c(40),c(22)),f=c.n(O),m=(c(42),Object(n.forwardRef)((function(e,t){var c=Object(n.useState)(null),s=Object(b.a)(c,2),r=s[0],a=s[1],o=Object(n.useRef)();return Object(n.useEffect)((function(){fetch("https://sarah-ryder-backend.herokuapp.com/api/v2/images/?limit=1000").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(n.useImperativeHandle)(t,(function(){return{handleRightClick:function(e){try{o.current.splide.go(">")}catch(t){console.log(t)}},handleLeftClick:function(e){try{o.current.splide.go("<")}catch(t){console.log(t)}},handleSplideReset:function(e){try{o.current.splide.go("0")}catch(t){console.log(t)}}}})),e.mediaGallery&&r?Object(i.jsx)(h.Splide,{options:{type:"fade",rewind:!0,perPage:1,autoWidth:!0,pagination:!1,arrows:!1,easing:"steps(0, start)"},ref:o,className:"project-detail-slider",children:e.mediaGallery.map((function(e,t){if("image"===e.type){var c=r.items.find((function(t){return t.id===e.value}));return Object(i.jsx)(h.SplideSlide,{children:Object(i.jsx)("div",{className:"project-detail-slide",children:Object(i.jsx)("img",{src:"https://sarah-ryder-backend.s3-us-west-2.amazonaws.com/original_images/"+c.title,alt:c.title})})},t)}return"video"===e.type?Object(i.jsx)(h.SplideSlide,{className:"video-slide",children:Object(i.jsx)("iframe",{src:e.value,width:"3840",height:"2160",frameBorder:"0",allow:"autoplay; fullscreen",title:"project",className:"project-video"})},t):Object(i.jsx)("div",{})}))}):Object(i.jsx)("div",{})})));c(43);var x=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),s=c[0],r=(c[1],Object(n.useState)(null)),a=Object(b.a)(r,2),l=a[0],d=(a[1],Object(n.useState)(!0)),j=Object(b.a)(d,2),h=j[0];return j[1],Object(n.useEffect)((function(){return function(){!1}}),[e]),!h&&l?Object(i.jsx)("div",{className:"card-holder",children:l.map((function(e,t){if(e.id!==s)return Object(i.jsxs)(o.b,{to:"/"+e.meta.slug,className:"project-card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:"https://sarah-ryder-backend.s3-us-west-2.amazonaws.com/original_images/"+e.card_image.title,alt:e.card_description})}),Object(i.jsxs)("div",{className:"card-text",children:[Object(i.jsx)("p",{className:"detail-page-card-client",children:e.client}),Object(i.jsx)("p",{className:"detail-page-card-description",children:e.card_description})]})]},t)}))}):Object(i.jsx)("div",{})};var v=function(e){var t=e.match,c=(e.location,t.params.project),s=Object(l.g)(),r=Object(n.useState)([]),a=Object(b.a)(r,2),o=a[0],d=a[1],j=Object(n.useState)(!0),h=Object(b.a)(j,2),u=h[0],p=h[1],O=Object(n.useRef)();return Object(n.useEffect)((function(){p(!0),function(){var e=[];fetch("https://sarah-ryder-backend.herokuapp.com/api/v2/pages/?slug=".concat(c)).then((function(e){return e.json()})).then((function(t){e=t.items[0].id,fetch("https://sarah-ryder-backend.herokuapp.com/api/v2/pages/".concat(e)).then((function(e){return e.json()})).then((function(e){return d(e)}))})).catch((function(){console.log("Error: Failed to fetch data from API"),s.push("/")}))}(),window.pageYOffset&&window.scrollTo({top:0,left:0,behavior:"smooth"}),p(!1)}),[c]),u?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"project-detail",children:[Object(i.jsx)("div",{className:"project-detail-left",onClick:function(e){try{O.current.handleLeftClick(e)}catch(t){console.log(t)}}}),Object(i.jsx)("div",{className:"project-detail-right",onClick:function(e){try{O.current.handleRightClick(e)}catch(t){console.log(t)}}}),Object(i.jsxs)("div",{className:"project-detail-flex-container",children:[Object(i.jsxs)("div",{className:"project-detail-image-and-description-container",children:[Object(i.jsx)("div",{className:"project-slider-flex-container",children:Object(i.jsx)("div",{className:"project-slider-container",children:Object(i.jsx)("div",{children:Object(i.jsx)(m,{mediaGallery:o.media_gallery,ref:O})})})}),Object(i.jsx)("div",{className:"project-info",children:Object(i.jsx)(f.a,{children:o.full_description})})]}),Object(i.jsx)("div",{className:"project-credits",children:Object(i.jsx)("span",{dangerouslySetInnerHTML:{__html:o.project_credits}})})]}),Object(i.jsx)("div",{className:"other-work-container",children:Object(i.jsx)("div",{children:Object(i.jsx)(x,{project:c,isLoading:u,setIsLoading:p})})}),Object(i.jsx)("div",{className:"copyright-container",children:Object(i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()]})})]})};c(44);var g=function(){return Object(i.jsxs)("div",{className:"app-container",children:[Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)(o.c,{to:"/",children:Object(i.jsx)("div",{id:"logo"})}),Object(i.jsx)("h1",{children:Object(i.jsx)(o.c,{to:"/info",children:"Info"})})]}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)(l.b,{render:function(e){var t=e.location;return Object(i.jsx)(d.a,{id:"transition-group",children:Object(i.jsx)(j.a,{timeout:500,classNames:"page fade",children:Object(i.jsx)("div",{id:"routes-container",children:Object(i.jsxs)(l.d,{location:t,children:[Object(i.jsx)(l.b,{exact:!0,path:"/",component:u}),Object(i.jsx)(l.b,{exact:!0,path:"/info",component:p}),Object(i.jsx)(l.b,{path:"/:project",component:v}),Object(i.jsx)(l.a,{to:"/"})]})})},t.key)})}})})]})};c(45);a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(g,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.b72a635e.chunk.js.map