(function(n){function t(t){for(var l,i,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(n[l]=u[l]);a&&a(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],l=!0,c=1;c<e.length;c++){var u=e[c];0!==r[u]&&(l=!1)}l&&(o.splice(t--,1),n=i(i.s=e[0]))}return n}var l={},r={app:0},o=[];function i(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=l,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)i.d(e,l,function(t){return n[t]}.bind(null,l));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var a=u;o.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";var l=e("85ec"),r=e.n(l);r.a},"07e1":function(n,t,e){"use strict";var l=e("2acc"),r=e.n(l);r.a},"2acc":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",[n._v("第"+n._s(n.n)+"手")]),e("div",{staticClass:"chest"},[e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(0,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(1,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(2,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(3,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(4,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(5,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(6,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(7,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(8,t)}}})],1)]),e("div",[n._v(n._s(!1===n.result?"胜负未分":n.result+"胜"))])])},o=[],i=(e("d81d"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cell",on:{click:n.onClickSelf}},[n.a?[n._v(n._s(n.text))]:void 0],2)}),c=[],u={props:["n"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""===this.text&&(this.a=!0,this.text=this.n%2===0?"x":"o",this.$emit("click",this.text))}}},s=u,a=(e("07e1"),e("2877")),f=Object(a["a"])(s,i,c,!1,null,null,null),p=f.exports,d={name:"app",components:{Cell:p},data:function(){return{n:0,result:!1,map:[[null,null,null],[null,null,null],[null,null,null]]}},methods:{onClickCell:function(n,t){this.map[Math.floor(n/3)][n%3]=t,this.n=this.n+1,this.tell()},tell:function(){for(var n=this.map,t=0;t<2;t++)null!==n[t][0]&&n[t][0]===n[t][1]&&n[t][2]===n[t][1]&&(this.result=n[t][0]);for(var e=0;e<2;e++)null!==n[0][e]&&n[0][e]===n[1][e]&&n[1][e]===n[2][e]&&(this.result=n[0][e]);null!==n[0][0]&&n[0][0]===n[1][1]&&n[2][2]===n[1][1]&&(this.result=n[0][0]),null!==n[0][2]&&n[0][2]===n[1][1]&&n[2][0]===n[1][1]&&(this.result=n[0][2])}}},h=d,C=(e("034f"),Object(a["a"])(h,r,o,!1,null,null,null)),v=C.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(n){return n(v)}}).$mount("#app")},"85ec":function(n,t,e){}});
//# sourceMappingURL=app.ed500f3c.js.map