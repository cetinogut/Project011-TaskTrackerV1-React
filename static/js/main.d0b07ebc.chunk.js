(this["webpackJsonpmy-first-react-tasker-tracker"]=this["webpackJsonpmy-first-react-tasker-tracker"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),o=n(18),r=n.n(o),s=(n(47),n(40)),i=n(17),l=n(10),j=(n(48),[{id:1,text:"Study React Pre-Class Notes",category:"School",endDate:"Feb 5th at 2:30pm",isDone:!0},{id:2,text:"Feed the Dog",category:"Home",endDate:"Feb 6th at 1:30pm",isDone:!1},{id:3,text:"Attend in-Class",category:"School",endDate:"Feb 7th at 20:00pm",isDone:!1}]),d=n(4);var u=function(e){var t=e.text,n=e.color,c=e.toggleShow;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn",style:{backgroundColor:n},onClick:c,children:t})})};var b=function(e){var t=e.title,n=void 0===t?"Task Tracker as default from parantez":t,c=e.toggleShow,a=e.isTaskBarShowed;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:n}),Object(d.jsx)(u,{color:a?"steelblue":"purple",text:a?"Hide Create a Task Bar":"Show Create a Task Bar",toggleShow:c})]})},h=n(12),O=n(11),x=function(e){var t;switch(console.log(e),e){case"Home":t=Object(d.jsx)(O.c,{});break;case"School":t=Object(d.jsx)(O.d,{});break;case"Office":case"Friends":t=Object(d.jsx)(O.a,{});break;case"General":t=Object(d.jsx)(O.b,{});break;default:console.log("Unknwon switch param: ",e)}return console.log(t),t},f=(n(50),function(e){var t,n=Object(c.useState)(!1),a=Object(l.a)(n,2),o=a[0],r=a[1];return Object(d.jsxs)("div",{className:"Tooltip-Wrapper",onMouseEnter:function(){t=setTimeout((function(){r(!0)}),e.delay||400)},onMouseLeave:function(){clearInterval(t),r(!1)},children:[e.children,o&&Object(d.jsx)("div",{className:"Tooltip-Tip ".concat(e.direction||"top"),children:e.content})]})}),m=function(e){var t=e.task,n=e.onDelete,c=e.onEdit,a=e.toggleDone;return Object(d.jsxs)("div",{className:"task ".concat(t.isDone?"done":""),onDoubleClick:function(){return a(t.id)},children:[Object(d.jsxs)("div",{className:"task-line",children:[Object(d.jsx)("h3",{children:t.text}),Object(d.jsxs)("div",{className:"edit-buttons",children:[Object(d.jsx)(f,{content:"click for deleting",direction:"top",children:Object(d.jsx)(h.a,{className:"icons icon-red",onClick:function(){return n(t.id)}})}),Object(d.jsx)(f,{content:"click for editing(TODO)",direction:"top",children:Object(d.jsx)(h.c,{className:"icons icon-green",onClick:function(){return c(t.id)}})})]})]}),Object(d.jsxs)("div",{className:"task-line",children:[Object(d.jsx)("p",{children:t.category}),Object(d.jsx)("span",{children:x(t.category)})]}),Object(d.jsx)("p",{children:t.endDate.toString()})]})};function g(e){var t=e.tasks,n=e.onDelete,c=e.onEdit,a=e.toggleDone;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(m,{task:e,onDelete:n,onEdit:c,toggleDone:a},e.id)}))})}var k=n(37),v=n.n(k),p=(n(51),n(20)),D=function(e){return function(t){return e(t.currentTarget.value)}};function S(e){var t=e.onCreate,n=Object(c.useState)(""),a=Object(l.a)(n,2),o=a[0],r=a[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],u=i[1],b=Object(c.useState)(new Date),O=Object(l.a)(b,2),x=O[0],m=O[1];console.log("formValues",{text:o,endDate:x});return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o&&x?(j||(j="Genel"),t({text:o,endDate:x,category:j,isDone:!1}),r(""),u(""),m(new Date)):alert("please fill both fields")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"task",children:"Task"}),Object(d.jsx)("input",{id:"task",name:"text",type:"text",placeholder:"Enter a task name",value:o,onChange:D(r)})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsxs)("label",{htmlFor:"category",children:["Task Category",Object(d.jsx)(f,{content:"Default will be 'Genel'!",direction:"right",children:Object(d.jsx)(h.b,{style:{color:"white",cursor:"pointer"}})})]}),Object(d.jsxs)("select",{value:j,onChange:D(u),children:[Object(d.jsx)("option",{value:"",children:"Select a Category"}),Object(d.jsx)("option",{value:"Home",children:"Home"}),Object(d.jsx)("option",{value:"School",children:"School"}),Object(d.jsx)("option",{value:"Office",children:"Office"}),Object(d.jsx)("option",{value:"Friends",children:"Friends"}),Object(d.jsx)("option",{value:"Generic",children:"Generic"})]})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"date",children:"Planned End Date(DatePicker)"}),Object(d.jsx)(v.a,{className:"datetime",id:"date",name:"date",selected:x,onChange:function(e){return m(e)},showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa",minDate:new Date,maxDate:Object(p.default)(new Date,2),showDisabledMonthNavigation:!0,calendarStartDay:1})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})}var w=function(){var e=Object(c.useState)(j),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),r=Object(l.a)(o,2),u=r[0],h=r[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{title:"Task Tracker",isTaskBarShowed:u,toggleShow:function(){return h((function(e){return!e}))}}),u&&Object(d.jsx)(S,{onCreate:function(e){var t=Date.now(),n=Object(i.a)({uniqID:t},e);console.log("newTask",n),a((function(e){return[].concat(Object(s.a)(e),[n])}))}}),n.length>0?Object(d.jsx)(g,{tasks:n,onDelete:function(e){return a(n.filter((function(t){return t.id!==e})))},onEdit:function(e){return a(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{isDone:!t.isDone}):t})))},toggleDone:function(e){a(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{isDone:!t.isDone}):t})))}}):Object(d.jsx)("p",{children:" No task to show"})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),y()},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.d0b07ebc.chunk.js.map