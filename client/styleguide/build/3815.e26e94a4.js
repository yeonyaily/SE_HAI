"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3815],{23815:function(t,e,n){n.r(e);var i=n(4942),r=n(15671),a=n(43144),o=n(60136),c=n(31129),s=n(72791),l=n(14204),d=(n(98511),n(78983)),h=n(80184),u=function(t){(0,o.Z)(Write,t);var e=(0,c.Z)(Write);function Write(){var t;(0,r.Z)(this,Write);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={title:"",author:"",content:""},t.postWrite=function(){try{""!==t.state.content?fetch("http://localhost:3000/#/institute/introduce/write",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(t.state)}).then((function(t){alert("작성 완료"),window.location.replace("#/institute/introduce/intromain")})):alert("모든 칸을 작성해야합니다!")}catch(t){console.log(t)}},t.postReply=function(){try{""!==t.state.title&&""!==t.state.author&&""!==t.state.content?fetch("http://localhost:3000/#/introduce/intromain/write",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(t.state)}).then((function(t){alert("작성 완료"),window.location.replace("#/institute/introduce/intromain")})):alert("모든 칸을 작성해야합니다!")}catch(t){console.log(t)}},t.handleChange=function(e){var n=e.target,r=n.name,a=n.value;t.setState((0,i.Z)({},r,a))},t}return(0,a.Z)(Write,[{key:"render",value:function render(){return(0,h.jsx)(d.b7,{xs:12,children:(0,h.jsxs)(d.xH,{className:"mb-4",children:[(0,h.jsx)(d.bn,{id:"boardLabel",children:(0,h.jsx)("strong",{children:"리크루팅 글쓰기"})}),(0,h.jsx)(d.sl,{children:(0,h.jsxs)(d.lx,{children:[(0,h.jsx)(d.L8,{id:"formLabel",children:"내용"}),(0,h.jsx)("div",{className:"mb-3",children:(0,h.jsx)(l.Z,{className:"textField",id:"content",name:"content",multiline:!0,rows:15,variant:"outlined",onChange:this.handleChange})}),(0,h.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:(0,h.jsx)(d.u5,{color:"dark",onClick:this.postWrite,children:"등록"})})]})})]})})}}]),Write}(s.Component);e.default=u},98511:function(){}}]);