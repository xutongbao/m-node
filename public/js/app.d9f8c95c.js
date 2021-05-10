(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,h=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-281d371b":"fecd0356","chunk-2d0aad66":"25591ba1","chunk-2d21f83e":"4eebac13","chunk-35de1e1d":"75cae5aa","chunk-4e84c9e8":"5e92f872","chunk-992a11cc":"63903f47"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12e7":function(e,t,n){},"365c":function(e,t,n){"use strict";var r={login:"/api/login",list:"/api/list",myBooks:"/api/my_books",detail:"/api/detail/"},a=r,o={light:a},c=o,i=n("1da1"),u=n("5530"),s=(n("96cf"),n("d3b7"),n("bc3a")),l=n.n(s),d=n("a18c");l.a.interceptors.request.use((function(e){if(e.headers.token=localStorage.getItem("token")||"",!1!==e.isNeedExtraData){var t={userId:1};"get"===e.method?e.params=Object(u["a"])(Object(u["a"])({},t),e.data):e.data=Object(u["a"])(Object(u["a"])({},t),e.data)}return e}),(function(e){return Promise.reject(e)})),l.a.interceptors.response.use((function(e){return 200===e.data.code?e.data:400!==e.data.code?Promise.reject(e):void alert(e.data.message)}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误(400)";break;case 401:return d["a"].push("/login");case 403:e.message="拒绝访问(403)";break;case 404:e.message="请求出错(404)";break;case 408:e.message="请求超时(408)";break;case 500:e.message="服务器错误(500)";break;case 501:e.message="服务未实现(501)";break;case 502:e.message="网络错误(502)";break;case 503:e.message="服务不可用(503)";break;case 504:e.message="网络超时(504)";break;case 505:e.message="HTTP版本不受支持(505)";break;default:e.message="连接出错(".concat(e.response.status,")!")}else e.message="连接服务器失败!";return Promise.reject(e)}));var h=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l()(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={login:function(e){return h({url:c.light.login,data:e,method:"post"})},list:function(){return h({url:c.light.list})},myBooks:function(e,t){return h({url:c.light.myBooks,data:e,method:t})},detail:function(e){return h({url:c.light.detail+e})}},f=p,m={light:f};t["a"]=m},4360:function(e,t,n){"use strict";var r=n("5502"),a=n("5530"),o=n("1da1"),c=(n("96cf"),n("365c")),i={getLightList:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,c["a"].light.list();case 3:r=t.sent,n({type:"setLightState",key:"list",value:r.data});case 5:case"end":return t.stop()}}),t)})))()},getMyBooks:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,c["a"].light.myBooks();case 3:r=t.sent,n({type:"setLightState",key:"myBooks",value:r.data});case 5:case"end":return t.stop()}}),t)})))()},addMyBooks:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.book,n.next=4,c["a"].light.myBooks({book:a},"post");case 4:return o=n.sent,r({type:"setLightState",key:"myBooks",value:o.data}),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})))()},deleteMyBooks:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.ids,n.next=4,c["a"].light.myBooks({ids:a},"delete");case 4:return o=n.sent,r({type:"setLightState",key:"myBooks",value:o.data}),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})))()},patchMyBooks:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,c["a"].light.myBooks(Object(a["a"])({},t),"patch");case 3:return o=n.sent,r({type:"setLightState",key:"myBooks",value:o.data}),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))()},getDetail:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,c["a"].light.detail(t.id);case 3:a=n.sent,a.data.count=1,r({type:"setLightState",key:"detailBook",value:a.data});case 6:case"end":return n.stop()}}),n)})))()}},u={state:{header:"小米书城",list:[],currentId:0,isRealScroll:!0,isListDialogVisible:!1,addBook:{},myBooks:[],detailBook:{}},mutations:{setLightState:function(e,t){e[t.key]=t.value,console.log(Object(a["a"])({},e))}},actions:i};t["a"]=Object(r["a"])({modules:{light:u}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("3fd4");function o(e,t){var n=Object(r["K"])("router-view");return Object(r["D"])(),Object(r["i"])(n)}const c={};c.render=o;var i=c,u=n("a18c"),s=n("4360"),l=(n("a471"),n("7dd6"),n("3ef0")),d=n.n(l);n("12e7");Object(r["h"])(i).use(s["a"]).use(u["a"]).use(a["a"],{locale:d.a}).mount("#app")},a18c:function(e,t,n){"use strict";var r=n("2909"),a=n("6c02"),o=n("4360"),c=(n("d3b7"),n("3ca3"),n("ddb0"),[{path:"/",redirect:"/light/login"},{path:"/light/login",component:function(){return n.e("chunk-281d371b").then(n.bind(null,"ca52"))}},{path:"/light/index",component:function(){return n.e("chunk-992a11cc").then(n.bind(null,"1fc8f"))},children:[{path:"/light/index/home",component:function(){return n.e("chunk-4e84c9e8").then(n.bind(null,"dc10"))},meta:{header:"小米书城"}},{path:"/light/index/my_books",component:function(){return n.e("chunk-2d21f83e").then(n.bind(null,"d9c6"))},meta:{header:"书包"}},{path:"/light/index/me",component:function(){return n.e("chunk-2d0aad66").then(n.bind(null,"135c"))},meta:{header:"个人中心"}}]},{path:"/light/detail/:id",component:function(){return n.e("chunk-35de1e1d").then(n.bind(null,"effe"))}}]),i=Object(r["a"])(c),u=Object(a["a"])({history:Object(a["b"])("/"),routes:i});u.beforeEach((function(e,t,n){e.meta.header&&o["a"].commit({type:"setLightState",key:"header",value:e.meta.header}),n()}));t["a"]=u}});
//# sourceMappingURL=app.d9f8c95c.js.map