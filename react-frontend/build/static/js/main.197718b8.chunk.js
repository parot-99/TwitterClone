(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{18:function(e,t,a){e.exports=a(37)},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(23),a(1)),i=a(2),s=a(3),m=r.a.createContext({isAuthenticated:!1,setIsAuthenticated:function(){},CSRF:null}),u=a(10),d=function(e){var t=e.children,a=Object(u.a)(e,["children"]),c=Object(n.useContext)(m).isAuthenticated;return r.a.createElement(s.b,Object.assign({},a,{render:function(e){var a=e.location;return c?t:r.a.createElement(s.a,{to:{pathname:"/auth/login",state:{from:a}}})}}))},p=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var r=a[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t},f=(a(29),a(30),a(31),function(){var e=Object(n.useContext)(m),t=e.setIsAuthenticated,a=e.CSRF,c=Object(s.g)();return r.a.createElement("h3",{onClick:function(){fetch("/api/auth/logout/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":a},credentials:"same-origin"}).then((function(e){200===e.status&&(t(!1),c.push("/"))})).catch((function(e){return alert(e)}))},className:"nav-btn cursor clicked"},"Logout")}),h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(m).isAuthenticated,s=Object(n.useState)(!1),u=Object(l.a)(s,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){if(p(o),d){fetch("/api/profiles/current/user/",{method:"GET",headers:{accepts:"application/json"},credentials:"same-origin"}).then((function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})).then((function(e){c(e.username)})).catch((function(e){return console.log(e)}))}}),[o,d]),r.a.createElement("header",{id:"main-header"},r.a.createElement("div",{className:"container flexed"},r.a.createElement(i.b,{to:"/"},r.a.createElement("h1",null,"TwitterClone")),r.a.createElement("nav",{className:"nav-bar flexed"},o&&r.a.createElement(i.c,{to:"/home",activeClassName:"active"},r.a.createElement("h3",{className:"nav-btn"},"Home")),o&&r.a.createElement(i.c,{to:"/profiles/".concat(a),activeClassName:"active"},r.a.createElement("h3",{className:"nav-btn"},"Profile")),o&&r.a.createElement(i.c,{to:"/profiles/search",activeClassName:"active"},r.a.createElement("h3",{className:"nav-btn"},"Search")),!o&&r.a.createElement(i.c,{to:"/auth/login",activeClassName:"active"},r.a.createElement("h3",{className:"nav-btn"},"Login")),!o&&r.a.createElement(i.c,{to:"/auth/register",activeClassName:"active"},r.a.createElement("h3",{className:"nav-btn"},"Register")),o&&r.a.createElement(f,null))))},E=(a(32),function(e){var t=Object(n.useContext)(m).CSRF,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],i=c[1];return r.a.createElement("form",{onSubmit:function(a){return function(a){a.preventDefault();var n={content:o},r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":t},credentials:"same-origin",body:JSON.stringify(n)};fetch("/api/tweets/create/",r).then((function(t){if(201===t.status)return e.onTweetAdd(),t.json();if(400===t.status)throw new Error("Try a shorter tweet");throw 401===t.status?new Error("Login first to perform this action"):new Error("Something wrong happend!")})).then((function(){i("")})).catch((function(e){console.log(e)}))}(a)},action:"",method:"POST",id:"tweet-create-form",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("textarea",{name:"content",id:"id_content",cols:"50",rows:"7",placeholder:"Your tweet...",required:!0,value:o,onChange:function(e){return i(e.target.value)},autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("button",{type:"submit",className:"prim-btn cursor"},"Tweet")))}),b=function(e){var t=Object(n.useContext)(m).CSRF,a=Object(n.useState)(e.tweetLikes),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(e.isLiked),u=Object(l.a)(s,2),d=u[0],p=u[1];return r.a.createElement("button",{onClick:function(){return function(e){var a="/api/tweets/".concat(e,"/like/");fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":t},credentials:"same-origin"}).then((function(e){if(200===e.status)return e.json();throw new Error})).then((function(e){"like"===e.type?i(o+1):i(o-1),"like"===e.type?p(!0):p(!1)})).catch((function(e){alert(e)}))}(e.tweetId)},className:"prim-btn tweet-container-item cursor"},!d&&o+" likes",d&&o+" liked")},w=function(e){return r.a.createElement(i.b,{to:{pathname:"/home/retweet",state:{tweet:e.tweet}}},r.a.createElement("button",{className:"prim-btn tweet-container-item cursor"},"retweet"))},g=function(e){return r.a.createElement("article",{key:e.tweet.id,className:"retweet-container"},r.a.createElement("header",{className:"tweet-header"},r.a.createElement("div",{id:"tweet-profile-pic"},r.a.createElement("img",{src:"".concat(e.tweet.profile_pic),alt:""})),r.a.createElement(i.b,{to:"/profiles/".concat(e.tweet.username)},r.a.createElement("h3",{className:"tweet-container-item"},e.tweet.username))),r.a.createElement("p",{className:"tweet-container-item"},e.tweet.content))},v=function(e){return r.a.createElement("article",{key:e.tweet.id,className:"tweet-container"},r.a.createElement("header",{className:"tweet-header"},r.a.createElement("div",{id:"tweet-profile-pic"},r.a.createElement("img",{src:"".concat(e.tweet.profile_pic),alt:""})),r.a.createElement(i.b,{to:"/profiles/".concat(e.tweet.username)},r.a.createElement("h3",{className:"tweet-container-item"},e.tweet.username))),r.a.createElement("p",{className:"tweet-container-item"},e.tweet.content),e.tweet.is_retweet&&r.a.createElement(g,{tweet:e.tweet.retweet}),r.a.createElement(b,{tweetId:e.tweet.id,tweetLikes:e.tweet.likes,isLiked:e.tweet.isLiked}),r.a.createElement(w,{tweet:e.tweet,onTweetAdd:e.onTweetAdd}))},j=function(e){var t=Object(n.useContext)(m).CSRF,a=Object(s.h)(),c=Object(s.g)(),o=Object(n.useState)(""),i=Object(l.a)(o,2),u=i[0],d=i[1];return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var n="/api/tweets/".concat(a.state.tweet.id,"/retweet/"),r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":t},credentials:"same-origin",body:JSON.stringify({content:u})};fetch(n,r).then((function(e){if(201!==e.status)throw new Error("Something wrong happend!");c.push("/home")})).catch((function(e){return console.log(e)}))}(e)},method:"POST",id:"tweet-create-form",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("textarea",{name:"content",id:"id_content",cols:"50",rows:"7",placeholder:"Add a comment",required:!0,value:u,onChange:function(e){return d(e.target.value)},autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("button",{type:"submit",className:"prim-btn cursor"},"Retweet"))),r.a.createElement(g,{tweet:a.state.tweet}))},O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),f=p[0],h=p[1],b=Object(n.useState)(!1),w=Object(l.a)(b,2),g=w[0],O=w[1];Object(n.useEffect)((function(){fetch("/api/tweets/",{method:"GET",headers:{Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})).then((function(e){h(!0),c(e)})).catch((function(e){h(!0),u(!0),console.log(e)}))}),[g]);var N=function(){O(!g)};return r.a.createElement("main",{id:"page-container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/home"},r.a.createElement(E,{onTweetAdd:N}),!f&&r.a.createElement("div",{className:"loader"}),m&&r.a.createElement("h1",{className:"message"},"Error"),!m&&r.a.createElement("section",{id:"tweets-container"},a.map((function(e){return r.a.createElement(v,{key:e.id,tweet:e,onTweetAdd:N})})))),r.a.createElement(s.b,{exact:!0,path:"/home/retweet"},r.a.createElement(j,null)),r.a.createElement(s.b,null,r.a.createElement("h1",{className:"centered"},"Not Found"))))},N=(a(33),function(){var e=Object(n.useContext)(m),t=e.setIsAuthenticated,a=e.CSRF,c=Object(n.useState)(""),o=Object(l.a)(c,2),i=o[0],u=o[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),f=p[0],h=p[1],E=Object(s.g)(),b=function(e){e.preventDefault();var n={username:i,password:f},r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":a},credentials:"same-origin",body:JSON.stringify(n)};fetch("/api/auth/login/",r).then((function(e){if(u(""),h(""),200===e.status)return e.json();throw new Error("Try again")})).then((function(e){t(!0),E.push("/home")})).catch((function(e){return alert(e)}))};return r.a.createElement("form",{onSubmit:function(e){return b(e)},action:"",method:"POST",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("h1",{className:"main-color"},"Log In")),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_username"},"Username"),r.a.createElement("input",{type:"text",name:"username",id:"id_username",value:i,onChange:function(e){return u(e.target.value)},required:!0,autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"id_password",value:f,onChange:function(e){return h(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"submit",value:"Log In",className:"prim-btn cursor"})))}),S=function(){var e=Object(n.useContext)(m).CSRF,t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),p=d[0],f=d[1],h=Object(n.useState)(""),E=Object(l.a)(h,2),b=E[0],w=E[1],g=Object(n.useState)(""),v=Object(l.a)(g,2),j=v[0],O=v[1],N=Object(n.useState)(""),S=Object(l.a)(N,2),C=S[0],y=S[1],T=Object(s.g)(),_=function(t){t.preventDefault();var a={username:c,name:p,password:b,password2:j,email:C},n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":e},body:JSON.stringify(a)};fetch("/api/auth/register/",n).then((function(e){if(o(""),f(""),w(""),O(""),y(""),201!==e.status)return e.json();T.push("/auth/login")})).then((function(e){if(e)throw new Error(e[Object.keys(e)[0]])})).catch((function(e){return console.log(e)}))};return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return _(e)},method:"POST",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("h1",{className:"main-color"},"Register")),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_username"},"Username"),r.a.createElement("input",{type:"text",name:"username",id:"id_username",value:c,onChange:function(e){return o(e.target.value)},autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"id_name",value:p,onChange:function(e){return f(e.target.value)},autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"id_password",value:b,onChange:function(e){return w(e.target.value)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_password2"},"Confirm Password"),r.a.createElement("input",{type:"password",name:"password2",id:"id_password2",value:j,onChange:function(e){return O(e.target.value)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"id_email",value:C,onChange:function(e){return y(e.target.value)},autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"submit",value:"Register",className:"prim-btn cursor text-color"}))),r.a.createElement("div",{className:"centered"},r.a.createElement("p",null,"Already a user? ",r.a.createElement(i.b,{to:"/auth/login",className:"main-color"},"Login"))))},C=function(e){var t=e.children,a=Object(u.a)(e,["children"]),c=Object(n.useContext)(m).isAuthenticated;return r.a.createElement(s.b,Object.assign({},a,{render:function(e){var a=e.location;return c?r.a.createElement(s.a,{to:{pathname:"/home",state:{from:a}}}):t}}))},y=function(){return r.a.createElement("main",{id:"page-container"},r.a.createElement(s.d,null,r.a.createElement(C,{exact:!0,path:"/auth/login"},r.a.createElement(N,null)),r.a.createElement(C,{exact:!0,path:"/auth/register"},r.a.createElement(S,null)),r.a.createElement(s.b,null,r.a.createElement("h1",{className:"centered"},"Not Found"))))},T=function(){return r.a.createElement("main",{id:"welcome"},r.a.createElement("div",{id:"join-us"},r.a.createElement(i.b,{to:"/auth/register"},r.a.createElement("h1",null,"Join Us"))))},_=(a(34),function(e){var t=Object(n.useContext)(m).CSRF,a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],i=c[1];Object(n.useEffect)((function(){i(e.isFollowed)}),[e.isFollowed]);var s=function(){var a="/api/profiles/".concat(e.username,"/follow/");fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":t},credentials:"same-origin"}).then((function(t){if(200===t.status)return e.onFollowersChange(),t.json();throw new Error})).then((function(e){"followed"===e.message&&i(!0),"unfollowed"===e.message&&i(!1)})).catch((function(e){return console.log(e)}))};return r.a.createElement(n.Fragment,null,o&&r.a.createElement("h3",{onClick:s,className:"prim-btn-2 cursor"},"Unfollow"),!o&&r.a.createElement("h3",{onClick:s,className:"prim-btn-2 cursor"},"Follow"))}),F=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),m=Object(l.a)(o,2),u=m[0],d=m[1],p=Object(n.useState)({}),f=Object(l.a)(p,2),h=f[0],E=f[1],b=Object(n.useState)([]),w=Object(l.a)(b,2),g=w[0],j=w[1],O=Object(n.useState)(!1),N=Object(l.a)(O,2),S=N[0],C=N[1],y=Object(n.useState)(!1),T=Object(l.a)(y,2),F=T[0],x=T[1],k=Object(n.useState)(!1),A=Object(l.a)(k,2),P=A[0],R=A[1],U=Object(s.i)().username;Object(n.useEffect)((function(){var e="/api/profiles/".concat(U,"/");fetch(e,{method:"GET",headers:{Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(200===e.status)return e.json();if(404===e.status)throw c(!1),new Error("User not found")})).then((function(e){x(!0),c(!0),C(!1),d(e.user_data),E(e.profile_data),j(e.tweets_data)})).catch((function(e){x(!0),C(!0),console.log(e)}))}),[U,P]);return r.a.createElement(n.Fragment,null,!F&&r.a.createElement("div",{className:"loader"}),F&&!a&&r.a.createElement("h1",{className:"centered"},"User Not Found"),S&&a&&r.a.createElement("h1",{className:"message"},"Something wrog happend!"),!S&&F&&r.a.createElement(n.Fragment,null,r.a.createElement("section",{id:"profile-info"},r.a.createElement("header",{id:"profile-header",className:"flexed"},r.a.createElement("div",{id:"profile-pic"},r.a.createElement("img",{src:"".concat(h.profile_pic),alt:""})),r.a.createElement("h1",null,h.tweets_count," Tweets"),u.is_current_user&&r.a.createElement(i.b,{to:"/settings"},r.a.createElement("h3",{className:"prim-btn-2"},"Edit Profile")),!u.is_current_user&&r.a.createElement(_,{isFollowed:u.is_followed,username:u.username,onFollowersChange:function(){R(!P)}})),r.a.createElement("h1",{className:"bolder"},h.name),r.a.createElement("p",{className:"light-text-color"},"@",u.username),r.a.createElement("p",null,h.bio),r.a.createElement("p",{className:"light-text-color "},"Joined ",u.date_joined),h.birthday&&r.a.createElement("p",{className:"light-text-color "},"Born ",h.birthday),r.a.createElement("p",{className:"light-text-color"},r.a.createElement("span",{className:"bolder"}," ",h.following_count," ")," Following",r.a.createElement("span",{className:"bold"}," ",h.followers_count," "),"Followers")),r.a.createElement("section",{id:"tweets-container"},g.map((function(e){return r.a.createElement(v,{key:e.id,tweet:e})})))))},x=function(){var e=Object(n.useContext)(m).CSRF,t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":e},credentials:"same-origin",body:JSON.stringify({username:d})};fetch("/api/profiles/",t).then((function(e){if(200===e.status)return e.json();throw new Error})).then((function(e){o(e||[])})).catch((function(e){return console.log(e)}))}),[d,e]),r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("h1",{className:"main-color"},"Search Users")),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_username"},"Username"),r.a.createElement("input",{type:"text",name:"username",id:"id_username",required:!0,autoComplete:"off",onChange:function(e){p(e.target.value)}})),r.a.createElement("div",null)),r.a.createElement("section",{id:"settings-list"},c.map((function(e){return r.a.createElement(i.b,{key:e.id,to:"/profiles/".concat(e.username)},r.a.createElement("h2",null,e.username))}))))},k=function(){return r.a.createElement("main",{id:"page-container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/profiles/search"},r.a.createElement(x,null)),r.a.createElement(s.b,{exact:!0,path:"/profiles/:username"},r.a.createElement(F,null)),r.a.createElement(s.b,null,r.a.createElement("h1",{className:"centered"},"Not Found"))))},A=(a(35),function(){var e=Object(n.useContext)(m).CSRF,t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),h=f[0],E=f[1],b=Object(n.useState)(null),w=Object(l.a)(b,2),g=w[0],v=w[1];Object(n.useEffect)((function(){fetch("/api/settings/update/profile/",{method:"GET",headers:{Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(200===e.status)return e.json();throw new Error})).then((function(e){o(e.bio||""),d(e.birthday||""),E(e.name)})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var a=new FormData;a.append("bio",c),a.append("birthday",u),a.append("name",h),g&&a.append("profile_pic",g,g.name);fetch("/api/settings/update/profile/",{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":e},credentials:"same-origin",body:a}).then((function(e){if(200!==e.status)throw new Error;alert("updated")})).catch((function(e){console.log(e)}))}(t)},action:"POST",className:"form-container",encType:"multipart/form-data"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"id_name",value:h,onChange:function(e){return E(e.target.value)},autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_bio"},"Bio"),r.a.createElement("input",{type:"text",name:"bio",id:"id_bio",value:c,onChange:function(e){return o(e.target.value)},autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:""},"Birthday"),r.a.createElement("input",{type:"date",name:"birthday",id:"id_birthday",value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_image"},"Profile Picture:"),r.a.createElement("div",{className:"fileUpload prim-btn-2"},r.a.createElement("span",null,"Upload"),r.a.createElement("input",{type:"file",name:"profile_pic",id:"id_profile_pic",className:"upload",accept:"image/*",onChange:function(e){return v(e.target.files[0])}}))),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"submit",value:"Update",className:"prim-btn cursor text-color"})))}),P=function(){var e=Object(n.useContext)(m).CSRF,t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),h=f[0],E=f[1],b=function(t){t.preventDefault();var a={old_password:c,new_password:u,new_password2:h},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":e},credentials:"same-origin",body:JSON.stringify(a)};fetch("/api/settings/update/password/",n).then((function(e){if(o(""),d(""),E(""),200===e.status)return e.json();if(401===e.status)return e.json();if(400===e.status)return e.json();throw new Error})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))};return r.a.createElement("form",{onSubmit:function(e){return b(e)},action:"POST",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_old_password"},"Old Password"),r.a.createElement("input",{type:"password",name:"old_password",id:"id_old_password",value:c,onChange:function(e){return o(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_old_password"},"New Password"),r.a.createElement("input",{type:"password",name:"new_password",id:"id_new_password",value:u,onChange:function(e){return d(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_old_password"},"Confirm New Password"),r.a.createElement("input",{type:"password",name:"new_password2",id:"id_new_password2",value:h,onChange:function(e){return E(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"submit",value:"Update",className:"prim-btn cursor text-color"})))},R=function(){var e=Object(n.useContext)(m).CSRF,t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],d=s[1],p=function(t){t.preventDefault();var a={password:c,email:u},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":e},credentials:"same-origin",body:JSON.stringify(a)};fetch("/api/settings/update/email/",n).then((function(e){if(o(""),d(""),[200,401,400].includes(e.status))return e.json();throw new Error})).then((function(e){e.message&&alert(e.message),e.success&&alert(e.success)})).catch((function(e){console.log(e)}))};return r.a.createElement("form",{onSubmit:function(e){return p(e)},action:"POST",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_password"},"Confirm Password"),r.a.createElement("input",{type:"password",name:"password",id:"id_password",value:c,onChange:function(e){return o(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_email"},"New Email"),r.a.createElement("input",{type:"email",name:"email",id:"id_email",value:u,onChange:function(e){return d(e.target.value)},required:!0,autoComplete:"off"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"submit",value:"Update",className:"prim-btn cursor text-color"})))},U=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(m),i=o.setIsAuthenticated,u=o.CSRF,d=Object(s.g)();return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("accessToken")),Accept:"application/json","Content-Type":"application/json","X-CSRFToken":u},credentials:"same-origin",body:JSON.stringify({password:a})};fetch("/api/auth/confirmpassword/",t).then((function(e){if(c(""),[200,401,400].includes(e.status))return e.json();throw new Error})).then((function(e){e.message&&alert(e.message),e.success&&(document.getElementById("confirm-delete").style.display="block")})).catch((function(e){return console.log(e)}))}(e)},action:"POST",className:"form-container"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"id_password"},"Confirm Password To Delete Account"),r.a.createElement("input",{type:"password",name:"password",id:"id_password",value:a,onChange:function(e){return c(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"submit",value:"Confirm",className:"prim-btn cursor text-color"}))),r.a.createElement("h2",{id:"confirm-delete",className:"centered cursor",onClick:function(e){return function(e){var t={method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("accessToken")),Accept:"application/json","Content-Type":"application/json"}};fetch("/api/settings/delete/profile/",t).then((function(e){if(200!==e.status)throw new Error;localStorage.removeItem("accessToken"),i(!1),d.push("/")})).catch((function(e){return console.log(e)}))}()}},"Delete Account"))},I=(a(36),function(e){return r.a.createElement(i.b,{to:e.to},r.a.createElement("div",{id:"back"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"}))))}),L=function(){return r.a.createElement("main",{id:"page-container",className:"container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/settings"},r.a.createElement("header",{id:"settings-list"},r.a.createElement(i.b,{to:"/settings/profile"},r.a.createElement("h2",null,"Profile")),r.a.createElement(i.b,{to:"/settings/password"},r.a.createElement("h2",null,"Password")),r.a.createElement(i.b,{to:"/settings/email"},r.a.createElement("h2",null,"Email")),r.a.createElement(i.b,{to:"/settings/delete/profile"},r.a.createElement("h2",null,"Delete Account")))),r.a.createElement(s.b,{exact:!0,path:"/settings/profile"},r.a.createElement("div",{className:"settings-header"},r.a.createElement(I,{to:"/settings"}),r.a.createElement("h1",null,"Update Profile")),r.a.createElement(A,null)),r.a.createElement(s.b,{exact:!0,path:"/settings/password"},r.a.createElement("div",{className:"settings-header"},r.a.createElement(I,{to:"/settings"}),r.a.createElement("h1",null,"Update Password")),r.a.createElement(P,null)),r.a.createElement(s.b,{exact:!0,path:"/settings/email"},r.a.createElement("div",{className:"settings-header"},r.a.createElement(I,{to:"/settings"}),r.a.createElement("h1",null,"Update Email")),r.a.createElement(R,null)),r.a.createElement(s.b,{exact:!0,path:"/settings/delete/profile"},r.a.createElement("div",{className:"settings-header"},r.a.createElement(I,{to:"/settings"}),r.a.createElement("h1",null,"Delete Acccount")),r.a.createElement(U,null)),r.a.createElement(s.b,null,r.a.createElement("h1",{className:"centered"},"Not Found"))))},D=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),u=Object(l.a)(o,2),f=u[0],E=u[1],b=Object(n.useState)(!1),w=Object(l.a)(b,2),g=w[0],v=w[1],j=Object(n.useState)(!1),N=Object(l.a)(j,2),S=N[0],C=N[1];return Object(n.useEffect)((function(){E(p("csrftoken"));fetch("/api/auth/authenticated/",{method:"GET",headers:{Accept:"application/json"}}).then((function(e){200===e.status?(c(!0),E(p("csrftoken")),C(!0),v(!1)):(C(!0),v(!0))}))}),[f,a]),r.a.createElement(n.Fragment,null,!S&&r.a.createElement("div",{className:"loader"}),g&&r.a.createElement("h1",{className:"message"},"Something wrog happend!"),!g&&S&&r.a.createElement(m.Provider,{value:{isAuthenticated:a,setIsAuthenticated:c,CSRF:f}},r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(s.b,{path:"/auth"},r.a.createElement(h,null),r.a.createElement(y,null)),r.a.createElement(d,{path:"/home"},r.a.createElement(h,null),r.a.createElement(O,null)),r.a.createElement(d,{path:"/profiles"},r.a.createElement(h,null),r.a.createElement(k,null)),r.a.createElement(d,{path:"/settings"},r.a.createElement(h,null),r.a.createElement(L,null)),r.a.createElement(s.b,null,r.a.createElement("h1",{className:"centered"},"Not Found"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.197718b8.chunk.js.map