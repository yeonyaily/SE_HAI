"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9647],{39647:function(t,e,n){n.r(e);var r=n(15671),o=n(43144),c=n(60136),i=n(31129),s=n(72791),l=n(43504),u=n(78983),a=(n(8602),n(80184)),f=function(t){(0,c.Z)(PostList,t);var e=(0,i.Z)(PostList);function PostList(){var t;(0,r.Z)(this,PostList);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={boards:[]},t}return(0,o.Z)(PostList,[{key:"componentDidMount",value:function componentDidMount(){var t=this,e=window.location.href.split("/"),n=e[e.length-1];fetch("http://localhost:3001/api/get_posts/".concat(n)).then((function(t){return t.json()})).then((function(e){t.setState({boards:e.map((function(t){var e=t.date.split("T");return(0,a.jsxs)(u.T6,{children:[(0,a.jsx)(u.is,{scope:"row",children:t.num}),(0,a.jsx)(u.NN,{colSpan:"3",children:(0,a.jsx)(u.AQ,{to:"/committee/"+n+"/read/".concat(t.num),component:l.OL,id:"table-component",children:t.title})}),(0,a.jsx)(u.NN,{className:"right",children:t.writer}),(0,a.jsx)(u.NN,{className:"right",children:e[0]})]},t.num)}))})}))}},{key:"render",value:function render(){var t=window.location.href.split("/"),e=t[t.length-1],n=this.state.boards;return(0,a.jsx)(u.b7,{xs:12,children:(0,a.jsxs)(u.xH,{className:"mb-4",children:[(0,a.jsx)(u.bn,{id:"boardLabel",children:(0,a.jsxs)(u.rb,{children:[(0,a.jsx)(u.b7,{xs:6,children:(0,a.jsx)("strong",{children:"공지게시판"})}),(0,a.jsx)(u.b7,{xs:6,children:(0,a.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:(0,a.jsx)(l.rU,{to:"/committee/"+e+"/write",children:(0,a.jsx)(u.u5,{color:"primary",variant:"outline",children:"글쓰기"})})})})]})}),(0,a.jsx)(u.sl,{children:(0,a.jsx)(u.b7,{xs:12,children:(0,a.jsx)(u.xH,{className:"mb-4",children:(0,a.jsxs)(u.Sx,{children:[(0,a.jsx)(u.V,{children:(0,a.jsxs)(u.T6,{children:[(0,a.jsx)(u.is,{scope:"col",children:"번호"}),(0,a.jsx)(u.is,{scope:"col",children:"제목"}),(0,a.jsx)(u.is,{scope:"col"}),(0,a.jsx)(u.is,{scope:"col"}),(0,a.jsx)(u.is,{scope:"col",className:"right",children:"작성자"}),(0,a.jsx)(u.is,{scope:"col",className:"right",children:"날짜"})]})}),(0,a.jsx)(u.NR,{children:n.map((function(t){return t}))})]})})})})]})})}}]),PostList}(s.Component);e.default=f},8602:function(){},15671:function(t,e,n){function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return _classCallCheck}})},31129:function(t,e,n){n.d(e,{Z:function(){return _createSuper}});var r=n(61120);function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var o=n(71002),c=n(97326);function _possibleConstructorReturn(t,e){if(e&&("object"===(0,o.Z)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(t)}function _createSuper(t){var e=_isNativeReflectConstruct();return function _createSuperInternal(){var n,o=(0,r.Z)(t);if(e){var c=(0,r.Z)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}},61120:function(t,e,n){function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}n.d(e,{Z:function(){return _getPrototypeOf}})},60136:function(t,e,n){n.d(e,{Z:function(){return _inherits}});var r=n(89611);function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},71002:function(t,e,n){function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}n.d(e,{Z:function(){return _typeof}})}}]);