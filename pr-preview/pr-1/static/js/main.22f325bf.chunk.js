(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),j=n(4),o=n.n(j),s=(n(9),n(3)),a=(n(10),n(0));var u=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],j=Object(c.useState)(!0),o=Object(s.a)(j,2),u=o[0],d=o[1];return Object(c.useEffect)((function(){fetch("https://dvd-backend-252.herokuapp.com/users").then((function(t){return t.json()})).then((function(t){r(t),d(!1)}))}),[]),u?Object(a.jsx)("h1",{children:"loading"}):Object(a.jsxs)("table",{children:[Object(a.jsx)("tr",{children:Object.keys(n[0]).map((function(t){return Object(a.jsx)("th",{children:t},Math.random())}))}),Object(a.jsx)("tbody",{children:n.map((function(t){return Object(a.jsx)("tr",{children:Object.values(t).map((function(t){return Object(a.jsx)("td",{children:t},Math.random())}))},Math.random())}))})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.22f325bf.chunk.js.map