(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var c=o(0),s=o(1),n=o.n(s),a=o(7),l=o.n(a),i=(o(15),o(3)),d=(o(16),o(9)),r=o(8),u=o.n(r),j=function(t){var e=t.setInputText,o=t.inputText,s=t.todos,n=t.setTodos,a=t.setStatus;return Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"input-form",children:[Object(c.jsx)("input",{value:o,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input",placeholder:"add your todo"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),n([].concat(Object(d.a)(s),[{text:o,completed:!1,id:u()()}])),e("")},className:"todo-button",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(c.jsxs)("div",{className:"select",children:[Object(c.jsx)("p",{className:"select_title",children:"Filter your todos:"}),Object(c.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"completed",children:"Completed"}),Object(c.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]})]})},b=o(6),f=function(t){var e=t.text,o=t.todo,s=t.todos,n=t.setTodos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(c.jsx)("button",{onClick:function(){n(s.map((function(t){return t.id===o.id?Object(b.a)(Object(b.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{onClick:function(){n(s.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},m=function(t){var e=t.todos,o=t.setTodos,s=t.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:s.map((function(t){return Object(c.jsx)(f,{text:t.text,todo:t,todos:e,setTodos:o},t.id)}))})})};var O=function(){var t=Object(s.useState)(""),e=Object(i.a)(t,2),o=e[0],n=e[1],a=Object(s.useState)([]),l=Object(i.a)(a,2),d=l[0],r=l[1],u=Object(s.useState)("all"),b=Object(i.a)(u,2),f=b[0],O=b[1],p=Object(s.useState)([]),x=Object(i.a)(p,2),h=x[0],v=x[1];Object(s.useEffect)((function(){S()}),[]),Object(s.useEffect)((function(){N(),g()}),[d,f]);var N=function(){switch(f){case"completed":v(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(d.filter((function(t){return!1===t.completed})));break;default:v(d)}},g=function(){localStorage.setItem("todos",JSON.stringify(d))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));r(t)}};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Your Todo List"})}),Object(c.jsx)(j,{todos:d,setTodos:r,inputText:o,setInputText:n,setStatus:O}),Object(c.jsx)(m,{todos:d,setTodos:r,filteredTodos:h})]})},p=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(e){var o=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;o(t),c(t),s(t),n(t),a(t)}))};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.22c9d48d.chunk.js.map