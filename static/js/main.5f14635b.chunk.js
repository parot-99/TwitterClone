(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(9),n(10),n(11),function(){return r.a.createElement("header",{id:"main-header"},r.a.createElement("div",{className:"container flexed"},r.a.createElement("h1",{className:"cursor clicked"},"TweetMe"),r.a.createElement("nav",{className:"nav-bar flexed"},r.a.createElement("h3",{className:"nav-btn cursor clicked"},"Home"),r.a.createElement("h3",{className:"nav-btn cursor clicked"},"Contact"))))}),s=n(1),l=(n(12),function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}),m=(n(13),function(e){return r.a.createElement("p",{className:e.propClass},e.message)}),u=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(null),u=Object(s.a)(i,2),f=u[0],d=u[1],h=l("csrftoken");return r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var n=t.target,a=new URLSearchParams(new FormData(n));fetch("http://127.0.0.1:8000/api/tweets/create/",{method:"POST",headers:{"X-CSRFToken":h},body:a}).then((function(e){if(201===e.status)return e.json();if(400===e.status)throw new Error("Try a shorter tweet");if(403===e.status)throw new Error("Login first to perform this action")})).then((function(){n.reset(),e.onFormPost()}),(function(e){n.reset(),o(!0),d(e.message)}))}(t)},method:"POST",action:"api/tweets/create",id:"tweet-create-form",className:"form-container"},r.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:h}),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_content"},"Content: "),r.a.createElement("textarea",{name:"content",id:"id_content",cols:"50",rows:"7",placeholder:"Your tweet...",required:!0})),c&&r.a.createElement("div",{className:"form-item"},r.a.createElement(m,{propClass:"failure",message:f})),r.a.createElement("div",{className:"form-item"},r.a.createElement("button",{type:"submit",className:"prim-btn cursor"},"Tweet")))},f=function(e){var t=Object(a.useState)(e.tweetLikes),n=Object(s.a)(t,2),c=n[0],o=n[1];return r.a.createElement("button",{onClick:function(){return function(e){var t="http://127.0.0.1:8000/api/tweets/".concat(e,"/like/"),n={method:"POST",headers:{"X-CSRFToken":l("csrftoken")}};fetch(t,n).then((function(e){if(200===e.status)return e.json();if(403===e.status)throw new Error("Login first to perform this action")})).then((function(e){"like"===e.type?o(c+1):o(c-1)}),(function(e){alert(e)}))}(e.tweetId)},className:"prim-btn tweet-container-item cursor"},c," likes")},d=function(){return r.a.createElement("button",{className:"prim-btn tweet-container-item cursor"},"retweet")},h=function(e){return r.a.createElement("section",{id:"tweets-container"},e.tweets.map((function(e){return r.a.createElement("article",{key:e.id,className:"tweet-container"},r.a.createElement("h3",{className:"tweet-container-item"},e.id," ","->",e.is_retweet&&e.retweet.content,!e.is_retweet&&e.content),r.a.createElement(f,{tweetId:e.id,tweetLikes:e.likes}),r.a.createElement(d,null))})))},w=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(s.a)(o,2),l=i[0],m=i[1],f=Object(a.useState)(!1),d=Object(s.a)(f,2),w=d[0],p=d[1],E=Object(a.useState)(!1),b=Object(s.a)(E,2),k=b[0],v=b[1];Object(a.useEffect)((function(){fetch("http://127.0.0.1:8000/api/tweets/",{method:"get",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(200===e.status)return e.json()})).then((function(e){p(!0),c(e)}),(function(e){p(!0),m(!0)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{onFormPost:function(){v(!k)}}),!w&&r.a.createElement("h1",{className:"message"},"Loading"),l&&r.a.createElement("h1",{className:"message"},"Error"),!l&&r.a.createElement(h,{tweets:n}))};var p=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(i,null),r.a.createElement("main",{id:"page-container"},r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.5f14635b.chunk.js.map