(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),o=a.n(l),r=(a(13),a(14),a(15),a(1)),m=a(7),s=a(4),u=function(e){var t=e.title,a=e.id,n=e.completed,l=e.changeStatus;return c.a.createElement("li",{className:n?"completed":""},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:n,onChange:function(){l(a)}}),c.a.createElement("label",null,t),c.a.createElement("button",{type:"button",className:"destroy"})),c.a.createElement("input",{type:"text",className:"edit"}))},i=function(e){var t=e.todos,a=e.changeStatusAll,n=e.changeStatus;return c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:t.every((function(e){return e.completed})),onChange:function(){a()}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(u,{key:e.id,title:e.title,id:e.id,completed:e.completed,changeStatus:n})}))))},d=function(){var e=Object(n.useState)([].concat([{title:"make things",id:1,completed:!1},{title:"do tasks",id:2,completed:!1}])),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],p=u[1];return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),t={title:d,id:+new Date,completed:!1},l([].concat(Object(m.a)(a),[t])),p("")}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:d,onChange:function(e){p(e.target.value)}}))),c.a.createElement(i,{todos:a,changeStatusAll:function(){a.some((function(e){return!e.completed}))?l(a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})}))):l(a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})})))},changeStatus:function(e){l(a.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))}}),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},a.filter((function(e){return!e.completed})).length," ","items left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:"selected"},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active"},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed"},"Completed"))),c.a.createElement("button",{type:"button",className:"clear-completed"},"Clear completed")))};o.a.render(c.a.createElement(d,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a2807324.chunk.js.map