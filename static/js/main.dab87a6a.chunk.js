(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(33)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=(n(22),n(2)),s=n(7),l=n(1),u=(n(23),n(24),function(){return r.a.createElement("h3",{onClick:function(){localStorage.removeItem("token")},className:"nav-btn cursor clicked"},"Logout")}),m=function(e){return r.a.createElement("header",{id:"main-header"},r.a.createElement("div",{className:"container flexed"},r.a.createElement(s.b,{to:"/"},r.a.createElement("h1",{className:"cursor clicked"},"TwitterClone")),r.a.createElement("nav",{className:"nav-bar flexed"},r.a.createElement(s.b,{to:"/home"},r.a.createElement("h3",{className:"nav-btn cursor clicked"},"Home")),r.a.createElement(s.b,{to:"#"},r.a.createElement("h3",{className:"nav-btn cursor clicked"},"Contact")),!e.isAuthenticated&&r.a.createElement(s.b,{to:"/Login"},r.a.createElement("h3",{className:"nav-btn cursor clicked"},"Login")),e.isAuthenticated&&r.a.createElement(u,null))))},f=(n(30),n(31),function(e){return r.a.createElement("p",{className:e.propClass},e.message)}),h=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),u=l[0],m=l[1],h=Object(a.useState)(null),d=Object(i.a)(h,2),E=d[0],p=d[1];return r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var n={content:c},a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(n)};fetch("http://127.0.0.1:8000/api/tweets/create/",a).then((function(t){if(201===t.status)return e.onTweetAdd(),t.json();if(400===t.status)throw new Error("Try a shorter tweet");if(401===t.status)throw new Error("Login first to perform this action")})).then((function(){o("")})).catch((function(e){o(""),m(!0),p(e.message)}))}(t)},action:"",method:"POST",id:"tweet-create-form",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_content"},"Content: "),r.a.createElement("textarea",{name:"content",id:"id_content",cols:"50",rows:"7",placeholder:"Your tweet...",required:!0,value:c,onChange:function(e){return o(e.target.value)}})),u&&r.a.createElement("div",{className:"form-item"},r.a.createElement(f,{propClass:"failure",message:E})),r.a.createElement("div",{className:"form-item"},r.a.createElement("button",{type:"submit",className:"prim-btn cursor"},"Tweet")))},d=function(e){var t=Object(a.useState)(e.tweetLikes),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(e.isLiked),l=Object(i.a)(s,2),u=l[0],m=l[1];return r.a.createElement("button",{onClick:function(){return function(e){var t="http://127.0.0.1:8000/api/tweets/".concat(e,"/like/"),n={method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch(t,n).then((function(e){if(200===e.status)return e.json();if(401===e.status)throw new Error("Login first to perform this action")})).then((function(e){"like"===e.type?o(c+1):o(c-1),"like"===e.type?m(!0):m(!1)})).catch((function(e){alert(e)}))}(e.tweetId)},className:"prim-btn tweet-container-item cursor"},!u&&c+" likes",u&&c+" liked")},E=function(e){return r.a.createElement("button",{onClick:function(){return function(e){var t="http://127.0.0.1:8000/api/tweets/".concat(e,"/retweet/"),n={method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch(t,n).then((function(e){e.status})).catch((function(e){return console.log(e)}))}(e.tweetId)},className:"prim-btn tweet-container-item cursor"},"retweet")},p=function(e){return r.a.createElement("section",{id:"tweets-container"},e.tweets.map((function(e){return r.a.createElement("article",{key:e.id,className:"tweet-container"},r.a.createElement("h3",{className:"tweet-container-item"},e.id," ","->",e.is_retweet&&e.retweet.content,!e.is_retweet&&e.content),r.a.createElement(d,{tweetId:e.id,tweetLikes:e.likes,isLiked:e.isLiked}),r.a.createElement(E,{tweetId:e.id}))})))},b=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1],m=Object(a.useState)(!1),f=Object(i.a)(m,2),d=f[0],E=f[1],b=Object(a.useState)(!1),g=Object(i.a)(b,2),w=g[0],v=g[1];Object(a.useEffect)((function(){var e={method:"get",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("http://127.0.0.1:8000/api/tweets/",e).then((function(e){if(200===e.status)return e.json()})).then((function(e){E(!0),c(e)})).catch((function(e){E(!0),u(!0),console.log(e)}))}),[w]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{onTweetAdd:function(){v(!w)}}),!d&&r.a.createElement("h1",{className:"message"},"Loading"),l&&r.a.createElement("h1",{className:"message"},"Error"),!l&&r.a.createElement(p,{tweets:n}))},g=(n(32),function(){return r.a.createElement("main",{id:"welcome"},r.a.createElement("div",{id:"join-us"},r.a.createElement(s.b,{to:"/login"},r.a.createElement("h1",null,"Join Us"))))}),w=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),l=s[0],u=s[1];return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={username:n,password:l},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("http://127.0.0.1:8000/api/profiles/token/",a).then((function(e){if(200===e.status)return e.json();if(400===e.status)throw new Error("")})).then((function(e){localStorage.setItem("token",e.access)})).catch((function(e){return console.log(e)}))}(e)},action:"",method:"POST",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("h1",null,"Log In")),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_username"},"Username"),r.a.createElement("input",{type:"text",name:"username",id:"id_username",value:n,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"id_password",value:l,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"submit",value:"Log In",className:"prim-btn cursor"})))},v=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(l.f)().id;return Object(a.useEffect)((function(){var e="http://127.0.0.1:8000/api/profiles/".concat(o,"/"),t={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch(e,t).then((function(e){if(200===e.status)return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[o]),r.a.createElement("h1",null,n.username)};var j=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("token"),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})};fetch("http://127.0.0.1:8000/api/profiles/token/verify/",t).then((function(e){401===e.status&&localStorage.removeItem("token")})),e&&c(!0)}),[]),r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(l.a,{exact:!0,path:"/login"},r.a.createElement(m,{isAuthenticated:n}),r.a.createElement("main",{id:"page-container"},r.a.createElement(w,null))),r.a.createElement(l.a,{exact:!0,path:"/home"},r.a.createElement(m,{isAuthenticated:n}),r.a.createElement("main",{id:"page-container"},r.a.createElement(b,null))),r.a.createElement(l.a,{exact:!0,path:"/profile/:id"},r.a.createElement(m,{isAuthenticated:n}),r.a.createElement("main",{id:"page-container"},r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.dab87a6a.chunk.js.map