(this["webpackJsonpnews-hawker"]=this["webpackJsonpnews-hawker"]||[]).push([[0],{28:function(e,t,c){},61:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var i,r,a=c(43),n=c(54),l=c(76),s=c(77),j=c(75),x=c(52),h=c(8),o=c.n(h),d=c(48),b=c.n(d),O=(c(61),c(36)),u=c.n(O),p=c(49),m=c(41),g=(c(28),c(79)),v=c(37),f=c(78),N=(Object(f.a)(i||(i=Object(v.a)(["\n  query getUser($_id: String) {\n    me(_id: $_id) {\n      _id\n      username\n      email\n      password\n      savedArticles {\n        source\n        authors\n        title\n        description\n        url\n        image\n        publishedAt\n        content\n      }\n    }\n  }\n"]))),Object(f.a)(r||(r=Object(v.a)(["\nquery getArticle($search:String!){\n  getArticle(search:$search) {\n    title\n    description\n    content\n    url\n    image\n    publishedAt\n    authors\n  }\n}\n"])))),w=c(3);var A=function(){return Object(w.jsxs)("header",{children:[Object(w.jsx)("section",{className:"wings"}),Object(w.jsx)("h1",{children:Object(w.jsx)("i",{children:"News Hawker"})}),Object(w.jsx)("nav",{children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/",children:"Saved Stories"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/",children:"Logout"})})]})})]})};var y=function(e){return Object(w.jsxs)("main",{children:[Object(w.jsxs)("div",{className:"article-box",children:[Object(w.jsxs)("section",{className:"article-content",children:[Object(w.jsx)("h4",{className:"article-title",children:"Article Title"}),Object(w.jsx)("p",{className:"article-source",children:"Article Source"}),Object(w.jsx)("p",{className:"article-text",children:"Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text."})]}),Object(w.jsx)("img",{className:"article-image",src:"https://via.placeholder.com/120x478",alt:""})]}),Object(w.jsxs)("div",{className:"article-box",children:[Object(w.jsxs)("section",{className:"article-content",children:[Object(w.jsx)("h4",{className:"article-title saved",children:"Article Title"}),Object(w.jsx)("p",{className:"article-source",children:"Article Source"}),Object(w.jsx)("p",{className:"article-text",children:"Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text."})]}),Object(w.jsx)("img",{className:"article-image",src:"https://via.placeholder.com/200x340",alt:""})]})]})},k={height:"90px",width:"100%",borderTop:"1px solid #882200"},S={paddingTop:"3px",borderTop:"1px solid #aa0000"},T={marginTop:"5px"};var _=function(){return Object(w.jsx)("footer",{children:Object(w.jsx)("div",{style:S,children:Object(w.jsx)("section",{style:k,children:Object(w.jsxs)("h2",{style:T,children:[Object(w.jsx)("a",{href:"https://github.com/Delaalex/",children:"Alejandro"})," | ",Object(w.jsx)("a",{href:"https://github.com/JG-77",children:"Jessie"})," | ",Object(w.jsx)("a",{href:"https://github.com/maxwellstickels/",children:"Max"})," | ",Object(w.jsx)("a",{href:"https://github.com/djony88",children:"Nikola"})]})})})})};var B=function(){var e=Object(g.a)(N),t=Object(m.a)(e,2),c=t[0],i=t[1].data;console.log(i);var r=Object(h.useState)(""),a=Object(m.a)(r,2),n=a[0],l=a[1],s=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),c({variables:{search:n}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"body-overlay",children:[Object(w.jsx)(A,{}),Object(w.jsx)("div",{id:"search",children:Object(w.jsxs)("div",{style:{display:"inline-block"},children:[Object(w.jsx)("h3",{children:Object(w.jsx)("b",{children:"SEARCH ARTICLE BY NAME:"})}),Object(w.jsx)("input",{id:"topic-search",onChange:function(e){var t=e.target,c=t.name,i=t.value;console.log(c),l(i)}}),Object(w.jsx)("button",{id:"topic-submit",onClick:s,children:Object(w.jsx)("i",{children:"SUBMIT"})})]})}),Object(w.jsx)(y,{}),Object(w.jsx)("div",{style:{height:"60px"}}),Object(w.jsx)(_,{})]})},C=Object(n.a)({uri:"/graphql"}),E=Object(x.a)((function(e,t){var c=t.headers,i=localStorage.getItem("id_token");return{headers:Object(a.a)(Object(a.a)({},c),{},{authorization:i?"Bearer ".concat(i):""})}})),I=new l.a({link:E.concat(C),cache:new s.a});b.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(j.a,{client:I,children:Object(w.jsx)(B,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.fb36aadd.chunk.js.map