(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),u=t(3),a=t.n(u),s=(t(12),t(4)),o=t(5),i=t(7),h=t(6),l=(t(13),t(14),t(15),t(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"egwunu",src:"https://robohash.org/".concat(e.egwunu.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:e.egwunu.name}),Object(l.jsx)("p",{children:e.egwunu.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.egwunu.map((function(e){return Object(l.jsx)(d,{egwunu:e},e.id)}))})},g=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=function(e){Object(i.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={egwunu:[],searchField:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({egwunu:n})}))}},{key:"render",value:function(){var e=this.state,n=e.egwunu,t=e.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Egwunu Rolodex"}),Object(l.jsx)(g,{placeholder:"search egwunu",handleChange:this.handleChange}),Object(l.jsx)(j,{egwunu:c})]})}}]),t}(c.Component),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),u(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.4c1669a4.chunk.js.map