(this["webpackJsonpnews-hawker"]=this["webpackJsonpnews-hawker"]||[]).push([[0],{41:function(e,t,c){},83:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a,n,r=c(25),i=c(73),s=c(99),l=c(100),o=c(98),j=c(72),d=c(3),b=c.n(d),h=c(65),x=c.n(h),u=(c(83),c(26)),O=c.n(u),p=c(37),m=c(28),g=(c(41),c(102)),v=c(38),f=c(101),w=(Object(f.a)(a||(a=Object(v.a)(["\n  query getUser($_id: String) {\n    me(_id: $_id) {\n      _id\n      username\n      email\n      password\n      savedArticles {\n        source\n        authors\n        title\n        description\n        url\n        image\n        publishedAt\n        content\n      }\n    }\n  }\n"]))),Object(f.a)(n||(n=Object(v.a)(["\nquery getArticle($search:String!){\n  getArticle(search:$search) {\n    title\n    description\n    content\n    url\n    image\n    publishedAt\n    authors\n  }\n}\n"])))),y=c(30),k=c(11),N=c(2);var S=function(){return Object(N.jsxs)("header",{children:[Object(N.jsx)("section",{className:"wings"}),Object(N.jsx)("h1",{children:Object(N.jsx)("i",{children:"News Hawker"})}),Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Saved Stories"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Logout"})})]})})]})};var A=function(e){return Object(N.jsxs)("main",{children:[Object(N.jsxs)("div",{className:"article-box",children:[Object(N.jsxs)("section",{className:"article-content",children:[Object(N.jsx)("h4",{className:"article-title",children:"Article Title"}),Object(N.jsx)("p",{className:"article-source",children:"Article Source"}),Object(N.jsx)("p",{className:"article-text",children:"Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text."})]}),Object(N.jsx)("img",{className:"article-image",src:"https://via.placeholder.com/120x478",alt:""})]}),Object(N.jsxs)("div",{className:"article-box",children:[Object(N.jsxs)("section",{className:"article-content",children:[Object(N.jsx)("h4",{className:"article-title saved",children:"Article Title"}),Object(N.jsx)("p",{className:"article-source",children:"Article Source"}),Object(N.jsx)("p",{className:"article-text",children:"Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text."})]}),Object(N.jsx)("img",{className:"article-image",src:"https://via.placeholder.com/200x340",alt:""})]})]})},T={height:"90px",width:"100%",borderTop:"1px solid #882200"},$={paddingTop:"3px",borderTop:"1px solid #aa0000"},C={marginTop:"5px"};var _=function(){return Object(N.jsx)("footer",{children:Object(N.jsx)("div",{style:$,children:Object(N.jsx)("section",{style:T,children:Object(N.jsxs)("h2",{style:C,children:[Object(N.jsx)("a",{href:"https://github.com/Delaalex/",children:"Alejandro"})," | ",Object(N.jsx)("a",{href:"https://github.com/JG-77",children:"Jessie"})," | ",Object(N.jsx)("a",{href:"https://github.com/maxwellstickels/",children:"Max"})," | ",Object(N.jsx)("a",{href:"https://github.com/djony88",children:"Nikola"})]})})})})};var I,E,F=function(e){return Object(N.jsxs)("main",{children:[Object(N.jsx)("div",{style:{height:"70px"}}),Object(N.jsx)("p",{style:{textAlign:"center",fontSize:"72px"},children:Object(N.jsx)("u",{children:"404"})}),Object(N.jsx)("p",{style:{textAlign:"center"},children:" The page you are looking for does not exist! Sorry!"}),Object(N.jsx)("p",{style:{textAlign:"center"},children:Object(N.jsx)(y.b,{to:"/",style:{color:"#aaaaaa",textDecoration:"none"},children:"\u2190 Go to Homepage"})}),Object(N.jsx)("div",{style:{height:"100px"}})]})},L=c(36),U=c(104),D=c(67),B=c(68),G=c(57),J=new(function(){function e(){Object(D.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return Object(G.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(G.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),M=Object(f.a)(I||(I=Object(v.a)(["\n  mutation loginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),q=Object(f.a)(E||(E=Object(v.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"])));var H=function(e){var t=Object(d.useState)({email:"",password:""}),c=Object(m.a)(t,2),a=c[0],n=c[1],i=Object(U.a)(q),s=Object(m.a)(i,1)[0],l=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:c=e.sent,n=c.data.addUser.token,J.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(e){var t=e.target,c=t.name,i=t.value;n(Object(r.a)(Object(r.a)({},a),{},Object(L.a)({},c,i)))};return Object(N.jsxs)("div",{children:[Object(N.jsx)(y.b,{to:"/login",children:"\u2190 Go to Login"}),Object(N.jsx)("h2",{children:"Signup"}),Object(N.jsxs)("form",{onSubmit:l,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(N.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:o})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(N.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:o})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(N.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:o})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(N.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:o})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var P=function(e){var t=Object(d.useState)({email:"",password:""}),c=Object(m.a)(t,2),a=c[0],n=c[1],i=Object(U.a)(M),s=Object(m.a)(i,2),l=s[0],o=s[1].error,j=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:a.email,password:a.password}});case 4:c=e.sent,n=c.data.login.token,J.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,c=t.name,i=t.value;n(Object(r.a)(Object(r.a)({},a),{},Object(L.a)({},c,i)))};return Object(N.jsxs)("div",{children:[Object(N.jsx)(y.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(N.jsx)("h2",{children:"Login"}),Object(N.jsxs)("form",{onSubmit:j,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(N.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(N.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),o?Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"The provided credentials are incorrect"})}):null,Object(N.jsx)("div",{children:Object(N.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var z=function(){var e=Object(g.a)(w),t=Object(m.a)(e,2),c=t[0],a=t[1].data;console.log(a);var n=Object(d.useState)(""),r=Object(m.a)(n,2),i=r[0],s=r[1],l=function(){var e=Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(i),c({variables:{search:i}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsx)(y.a,{children:Object(N.jsxs)("div",{className:"body-overlay",style:{backgroundImage:"url(brick.jpeg)"},children:[Object(N.jsx)(S,{}),Object(N.jsx)("div",{id:"search",children:Object(N.jsxs)("div",{style:{display:"inline-block"},children:[Object(N.jsx)("h3",{className:"search-header",children:Object(N.jsx)("b",{children:"SEARCH ARTICLE BY NAME: "})}),Object(N.jsx)("input",{id:"topic-search",onChange:function(e){var t=e.target,c=t.name,a=t.value;console.log(c),s(a)}}),Object(N.jsx)("button",{id:"topic-submit",onClick:l,children:Object(N.jsx)("i",{children:"SUBMIT"})})]})}),Object(N.jsxs)(k.c,{children:[Object(N.jsx)(k.a,{exact:!0,path:"/",component:A}),Object(N.jsx)(k.a,{exact:!0,path:"/login",component:P}),Object(N.jsx)(k.a,{exact:!0,path:"/signup",component:H}),Object(N.jsx)(k.a,{render:function(){return Object(N.jsx)(F,{})}})]}),Object(N.jsx)("div",{style:{height:"60px"}}),Object(N.jsx)(_,{})]})})},R=Object(i.a)({uri:"/graphql"}),Y=Object(j.a)((function(e,t){var c=t.headers,a=localStorage.getItem("id_token");return{headers:Object(r.a)(Object(r.a)({},c),{},{authorization:a?"Bearer ".concat(a):""})}})),K=new s.a({link:Y.concat(R),cache:new l.a});x.a.render(Object(N.jsx)(b.a.StrictMode,{children:Object(N.jsx)(o.a,{client:K,children:Object(N.jsx)(z,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.831c5e07.chunk.js.map