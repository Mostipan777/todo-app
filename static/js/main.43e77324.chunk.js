(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(9),r=a.n(c),i=(a(14),a(7)),l=a(2),o=a(3),d=a(4),h=a(6),j=a(5),m=a(0);var b=function(e){return Object(m.jsxs)("li",{className:"collection-item",children:[Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("a",{className:"custom-btn waves-effect waves-light btn-small green darken-1",onClick:function(){return e.makeImportant(e.id)},children:Object(m.jsx)("i",{className:"material-icons",children:"alarm"})})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("a",{className:"custom-btn waves-effect waves-light btn-small red darken-3",onClick:function(){return e.deleteItem(e.id)},children:Object(m.jsx)("i",{className:"material-icons",children:"delete"})})}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",checked:e.done,onChange:function(){return e.makeDone(e.id)}}),Object(m.jsx)("span",{children:e.done?Object(m.jsx)("span",{style:{textDecoration:"line-through"},children:e.label}):e.important?Object(m.jsx)("strong",{style:{color:"black"},children:e.label}):e.label})]})]})};var u=function(e){return Object(m.jsx)("ul",{className:"collection",children:e.items.map((function(t){return Object(m.jsx)(b,Object(l.a)(Object(l.a)({},t),{},{deleteItem:e.deleteItem,makeImportant:e.makeImportant,makeDone:e.makeDone}),t.id)}))})},O=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",sort:"all"},e.handleOnChange=function(t){e.setState({search:t.target.value}),e.props.onSearchChange(t.target.value)},e.handleSortChange=function(t){e.setState({sort:t.target.dataset.type}),e.props.onSortChange(t.target.dataset.type)},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"center",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"input-field col s12",children:Object(m.jsx)("input",{type:"search",className:"validate",placeholder:"Search",value:this.state.search,onChange:this.handleOnChange})})}),Object(m.jsxs)("div",{className:"sort",children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{className:"with-gap",name:"sort",type:"radio","data-type":"all",onChange:this.handleSortChange,checked:"all"===this.state.sort}),Object(m.jsx)("span",{children:"All"})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{className:"with-gap",name:"sort",type:"radio","data-type":"false",onChange:this.handleSortChange,checked:"false"===this.state.sort}),Object(m.jsx)("span",{children:"Active"})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{className:"with-gap",name:"sort",type:"radio","data-type":"true",onChange:this.handleSortChange,checked:"true"===this.state.sort}),Object(m.jsx)("span",{children:"Done"})]})]})]})}}]),a}(s.a.Component),p=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={text:""},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"center",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"input-field col s12",children:[Object(m.jsx)("input",{type:"text",className:"validate",placeholder:"What needs to be done",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})}}),Object(m.jsxs)("button",{className:"add-btn btn waves-effect waves-light",onClick:function(){return e.props.addItem(e.state.text)},children:["Add",Object(m.jsx)("i",{className:"material-icons right",children:"add_circle"})]})]})})})}}]),a}(s.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={items:[{id:1,label:"Create App",done:!1,important:!1},{id:2,label:"Create Coffe",done:!1,important:!1},{id:3,label:"Create App 2",done:!1,important:!1}],search:"",sort:"all"},e.deleteItem=function(t){e.setState({items:e.state.items.filter((function(e){return e.id!==t}))})},e.makeImportant=function(t){var a=e.state.items.findIndex((function(e){return e.id===t})),n=e.state.items[a],s=!n.important,c=Object(l.a)(Object(l.a)({},n),{},{important:s});e.setState({items:[].concat(Object(i.a)(e.state.items.slice(0,a)),[c],Object(i.a)(e.state.items.slice(a+1)))})},e.makeDone=function(t){var a=e.state.items.findIndex((function(e){return e.id===t})),n=e.state.items[a],s=!n.done,c=Object(l.a)(Object(l.a)({},n),{},{done:s});e.setState({items:[].concat(Object(i.a)(e.state.items.slice(0,a)),[c],Object(i.a)(e.state.items.slice(a+1)))})},e.searchItem=function(e,t){return t.filter((function(t){return t.label.toLowerCase().includes(e)}))},e.onSearchChange=function(t){e.setState({search:t})},e.onSortChange=function(t){e.setState({sort:t})},e.addItem=function(t){e.setState({items:[].concat(Object(i.a)(e.state.items),[e.createItem(t)])})},e}return Object(d.a)(a,[{key:"createItem",value:function(e){return{id:(new Date).valueOf(),label:e,done:!1,important:!1}}},{key:"filterVisibleItems",value:function(e,t){return"all"===t?e:"false"===t?e.filter((function(e){return!e.done})):"true"===t?e.filter((function(e){return e.done})):void 0}},{key:"render",value:function(){var e=this.filterVisibleItems(this.state.items,this.state.sort),t=this.searchItem(this.state.search,e);return Object(m.jsxs)("main",{className:"content",children:[Object(m.jsx)(O,{searchItem:this.searchItem,onSearchChange:this.onSearchChange,onSortChange:this.onSortChange}),Object(m.jsx)(u,{items:t,deleteItem:this.deleteItem,makeImportant:this.makeImportant,makeDone:this.makeDone}),Object(m.jsx)(p,{addItem:this.addItem})]})}}]),a}(s.a.Component);var x=function(){return Object(m.jsx)("nav",{children:Object(m.jsx)("div",{className:"nav-wrapper teal darken-1",children:Object(m.jsx)("a",{href:"#",className:"brand-logo center",children:"Todo App"})})})};var v=function(){return Object(m.jsx)("footer",{className:"footer-copyright teal darken-1",children:Object(m.jsx)("div",{className:"container center",children:Object(m.jsxs)("strong",{children:["\xa9 ",(new Date).getFullYear()," Copyright Text"]})})})};var g=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)(f,{}),Object(m.jsx)(v,{})]})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.43e77324.chunk.js.map