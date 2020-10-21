(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{18:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),i=(a(23),a(2)),s=a(4),l=a(1),u=c.a.createContext({isAuthenticated:!1,setIsAuthenticated:function(){}}),m=a(17),h=function(e){var t=e.children,a=Object(m.a)(e,["children"]);return c.a.createElement(l.b,Object.assign({},a,{render:function(e){var a=e.location;return localStorage.getItem("accessToken")?t:c.a.createElement(l.a,{to:{pathname:"/auth/login",state:{from:a}}})}}))},f=(a(29),a(30),function(){var e=Object(n.useContext)(u).setIsAuthenticated,t=Object(l.g)();return c.a.createElement("h3",{onClick:function(){return function(){var a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token  ".concat(localStorage.getItem("accessToken"))}};fetch("http://127.0.0.1:8000/api/auth/logout/",a).then((function(a){204===a.status&&(localStorage.removeItem("accessToken"),e(!1),t.push("/"))})).catch((function(e){return alert(e)}))}()},className:"nav-btn cursor clicked"},"Logout")}),d=function(){var e=Object(n.useContext)(u).isAuthenticated;return c.a.createElement("header",{id:"main-header"},c.a.createElement("div",{className:"container flexed"},c.a.createElement(s.b,{to:"/"},c.a.createElement("h1",{className:"cursor clicked"},"TwitterClone")),c.a.createElement("nav",{className:"nav-bar flexed"},c.a.createElement(s.b,{to:"/home"},c.a.createElement("h3",{className:"nav-btn cursor clicked"},"Home")),c.a.createElement(s.b,{to:"#"},c.a.createElement("h3",{className:"nav-btn cursor clicked"},"Contact")),!e&&c.a.createElement(s.b,{to:"/auth/Login"},c.a.createElement("h3",{className:"nav-btn cursor clicked"},"Login")),e&&c.a.createElement(f,null))))},E=(a(31),a(32),function(e){return c.a.createElement("p",{className:e.propClass},e.message)}),p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),u=l[0],m=l[1],h=Object(n.useState)(null),f=Object(i.a)(h,2),d=f[0],p=f[1];return c.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var a={content:r},n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(a)};fetch("http://127.0.0.1:8000/api/tweets/create/",n).then((function(t){if(201===t.status)return e.onTweetAdd(),t.json();if(400===t.status)throw new Error("Try a shorter tweet");if(401===t.status)throw new Error("Login first to perform this action")})).then((function(){o("")})).catch((function(e){o(""),m(!0),p(e.message)}))}(t)},action:"",method:"POST",id:"tweet-create-form",className:"form-container"},c.a.createElement("div",{className:"form-item"},c.a.createElement("label",{htmlFor:"id_content"},"Content: "),c.a.createElement("textarea",{name:"content",id:"id_content",cols:"50",rows:"7",placeholder:"Your tweet...",required:!0,value:r,onChange:function(e){return o(e.target.value)}})),u&&c.a.createElement("div",{className:"form-item"},c.a.createElement(E,{propClass:"failure",message:d})),c.a.createElement("div",{className:"form-item"},c.a.createElement("button",{type:"submit",className:"prim-btn cursor"},"Tweet")))},b=function(e){var t=Object(n.useState)(e.tweetLikes),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(e.isLiked),l=Object(i.a)(s,2),u=l[0],m=l[1];return c.a.createElement("button",{onClick:function(){return function(e){var t="http://127.0.0.1:8000/api/tweets/".concat(e,"/like/"),a={method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};fetch(t,a).then((function(e){if(200===e.status)return e.json();if(401===e.status)throw new Error("Login first to perform this action")})).then((function(e){"like"===e.type?o(r+1):o(r-1),"like"===e.type?m(!0):m(!1)})).catch((function(e){alert(e)}))}(e.tweetId)},className:"prim-btn tweet-container-item cursor"},!u&&r+" likes",u&&r+" liked")},g=function(e){return c.a.createElement("button",{onClick:function(){return function(e){var t="http://127.0.0.1:8000/api/tweets/".concat(e,"/retweet/"),a={method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};fetch(t,a).then((function(e){e.status})).catch((function(e){return console.log(e)}))}(e.tweetId)},className:"prim-btn tweet-container-item cursor"},"retweet")},w=function(e){return c.a.createElement("section",{id:"tweets-container"},e.tweets.map((function(e){return c.a.createElement("article",{key:e.id,className:"tweet-container"},c.a.createElement(s.b,{to:"/profile/".concat(e.user.username)},c.a.createElement("h2",{className:"tweet-container-item"},e.user.username)),c.a.createElement("h4",{className:"tweet-container-item"},e.id," ","->",e.is_retweet&&e.retweet.content,!e.is_retweet&&e.content),c.a.createElement(b,{tweetId:e.id,tweetLikes:e.likes,isLiked:e.isLiked}),c.a.createElement(g,{tweetId:e.id}))})))},v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),f=h[0],d=h[1],E=Object(n.useState)(!1),b=Object(i.a)(E,2),g=b[0],v=b[1];Object(n.useEffect)((function(){var e={method:"get",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json",Accept:"application/json",Authorization:"Token  ".concat(localStorage.getItem("accessToken"))}};fetch("http://127.0.0.1:8000/api/tweets/",e).then((function(e){if(200===e.status)return e.json()})).then((function(e){d(!0),r(e)})).catch((function(e){d(!0),u(!0),console.log(e)}))}),[g]);return c.a.createElement("main",{id:"page-container"},c.a.createElement(p,{onTweetAdd:function(){v(!g)}}),!f&&c.a.createElement("h1",{className:"message"},"Loading"),l&&c.a.createElement("h1",{className:"message"},"Error"),!l&&c.a.createElement(w,{tweets:a||[]}))},j=(a(33),function(){var e=Object(n.useContext)(u).setIsAuthenticated,t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),h=m[0],f=m[1],d=Object(l.g)();return c.a.createElement("main",{id:"page-container"},c.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var a={username:r,password:h},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch("http://127.0.0.1:8000/api/auth/login/",n).then((function(e){if(o(""),f(""),200===e.status)return e.json();if(401===e.status)throw new Error("Try again");if(400===e.status)throw new Error("Try again")})).then((function(t){localStorage.setItem("accessToken",t.token),e(!0),d.push("/home")})).catch((function(e){return alert(e)}))}(t)},action:"",method:"POST",className:"form-container"},c.a.createElement("div",{className:"form-item"},c.a.createElement("h1",null,"Log In")),c.a.createElement("div",{className:"form-item"},c.a.createElement("label",{htmlFor:"id_username"},"Username"),c.a.createElement("input",{type:"text",name:"username",id:"id_username",value:r,onChange:function(e){return o(e.target.value)}})),c.a.createElement("div",{className:"form-item"},c.a.createElement("label",{htmlFor:"id_password"},"Password"),c.a.createElement("input",{type:"password",name:"password",id:"id_password",value:h,onChange:function(e){return f(e.target.value)}})),c.a.createElement("div",{className:"form-item"},c.a.createElement("input",{type:"submit",value:"Log In",className:"prim-btn cursor"}))))}),O=function(){return c.a.createElement("main",{id:"page-container"},c.a.createElement("h1",null,"Register"))},k=function(){return c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"/auth/login"},c.a.createElement(d,null),c.a.createElement(j,null)),c.a.createElement(l.b,{path:"/auth/register"},c.a.createElement(d,null),c.a.createElement(O,null)))},S=function(){return c.a.createElement("main",{id:"welcome"},c.a.createElement("div",{id:"join-us"},c.a.createElement(s.b,{to:"/auth/login"},c.a.createElement("h1",null,"Join Us"))))},T=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],h=Object(l.h)().username;return Object(n.useEffect)((function(){var e="http://127.0.0.1:8000/api/profiles/".concat(h,"/"),t={method:"GET",headers:{Authorization:"Token ".concat(localStorage.getItem("accessToken"))}};fetch(e,t).then((function(e){if(200===e.status)return m(!0),e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[h]),c.a.createElement("main",{id:"page-container"},c.a.createElement("h1",null,u&&a.username),c.a.createElement("h1",null,u&&a.email),c.a.createElement("h1",null,u&&a.is_current_user&&"Current User"),c.a.createElement("h1",null,!u&&"User does not exist"))};var N=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],o={isAuthenticated:a,setIsAuthenticated:r};return Object(n.useEffect)((function(){var e=localStorage.getItem("accessToken");r(!!e)}),[a]),c.a.createElement(u.Provider,{value:o},c.a.createElement(s.a,null,c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/"},c.a.createElement(S,null)),c.a.createElement(l.b,{path:"/auth"},c.a.createElement(k,null)),c.a.createElement(h,{exact:!0,path:"/home",isAuthenticated:a},c.a.createElement(d,null),c.a.createElement(v,null)),c.a.createElement(h,{exact:!0,path:"/profile/:username"},c.a.createElement(d,null),c.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bb8c6bc0.chunk.js.map