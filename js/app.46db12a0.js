(function(t){function e(e){for(var a,r,l=e[0],s=e[1],c=e[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d5b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("44a9"),n("3a99"),n("2c238"),n("6ae4");var a=n("a593"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"main at-container row"},[n("aside",[n("vue-scroll",{ref:"vs1",attrs:{ops:t.ops,id:"vs1"},on:{"handle-scroll":t.handleScroll}},[n("at-menu",{attrs:{"active-name":t.active}},t._l(t.menu,(function(e,a){return n("at-menu-item",{key:a,attrs:{to:e.meta.fullpath,name:e.name}},[n("i",{staticClass:"icon icon-disc"}),t._v(" "+t._s(e.meta.title)+" ")])})),1)],1)],1),n("div",{staticClass:"right"},[n("vue-scroll",{ref:"vs",attrs:{ops:t.ops,id:"vs"},on:{"handle-scroll":t.handleScroll}},[n("div",{staticClass:"p_30"},[n("div",{staticClass:"wiki"},[n("div",{domProps:{innerHTML:t._s(t.content)}})])])])],1)])],1)},o=[],r=(n("425f"),n("2909")),l=n.n(r),s=n("82ae"),c=n.n(s);c.a.defaults.headers["Content-Type"]="application/json";var u=c.a.create({baseURL:"./md/"});window.Axios=c.a;var d=u,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"at-container"},[n("div",{staticClass:"row  at-row no-gutter"},[n("div",{staticClass:"col-md-18"},[n("div",{staticClass:"logo light-blue"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "+t._s(t.logo)+" ")])]),n("div",{staticClass:"col-md-6"},[n("at-menu",{attrs:{mode:"horizontal","active-name":t.active}},[t._l(t.list,(function(e,a){return[e.children&&e.children[0].children?n("at-submenu",{key:a,attrs:{name:"/website"}},[n("template",{slot:"title"},[n("i",{class:["icon",e.meta.icon]}),t._v(" "+t._s(e.meta.title)+" ")]),t._l(e.children,(function(e,a){return n("at-menu-item",{key:a,attrs:{name:"/website/pc/index",to:"/website/pc/index"}},[n("i",{class:["icon",e.meta.icon]}),t._v(" "+t._s(e.meta.title)+" ")])}))],2):n("at-menu-item",{key:a,attrs:{name:e.path,to:e.children[0].meta.fullpath}},[n("i",{class:["icon",e.meta.icon]}),t._v(" "+t._s(e.meta.title)+" ")])]}))],2)],1)])])])},p=[],h=(n("c12e"),n("48d1"),{data:function(){return{active:"",list:[],logo:""}},computed:{},created:function(){var t=this;this.active="/"+this.$route.fullPath.split("/")[1],d.get("router.json").then((function(e){t.list=e.data.nav,t.logo=e.data.logo}))},methods:{},watch:{$route:function(){this.active=this.$route.fullPath}}}),v=h,m=(n("764f"),n("5d22")),b=Object(m["a"])(v,f,p,!1,null,"6daa75ae",null),g=b.exports,w={name:"app",components:{Header:g},data:function(){return{ops:{vuescroll:{},scrollPanel:{speed:300,easing:"easeInQuad"},rail:{gutterOfSide:0},bar:{background:"#6190E8"}},content:"",active:"",menu:[]}},created:function(){this.active=this.$route.name,this.init()},mounted:function(){window.scrollPanel=this.$refs["vs"]},methods:{handleScroll:function(){},init:function(){var t=this,e=this.$route.fullPath;console.log(this.$route.meta.level),2==this.$route.meta.level&&console.log(1),console.log(e),d.get(e+".md?t="+Date.parse(new Date)).then((function(e){t.content=l()(e.data)}))}},watch:{$route:function(){this.active=this.$route.name,this.init()}}},_=w,y=(n("5c0b"),Object(m["a"])(_,i,o,!1,null,null,null)),x=y.exports,O=n("8aaf"),P=n("38bc"),j=n.n(P),C=(n("70e7"),n("ece5").nav);a["default"].use(O["a"]),j.a.configure({easing:"ease",speed:1e3});var $=new O["a"]({mode:"hash",routes:C});$.beforeEach((function(t,e,n){j.a.start(),"/"===t.fullPath?n({path:"/index/index"}):n()})),$.afterEach((function(){j.a.done()}));var k=$,S=n("1531"),E=n.n(S),M=n("7736");a["default"].use(M["a"]);var T=new M["a"].Store({modules:{}}),H=(n("7e7d"),n("1d5b"),n("d624"),n("fde2"),n("a24a"),n("66de"),n("f5ae"),n("a1c5"),n("1779")),J=n.n(H);n("a219");a["default"].config.productionTip=!1,a["default"].use(E.a),a["default"].use(J.a),new a["default"]({render:function(t){return t(x)},router:k,store:T}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("ac27")},"66de":function(t,e,n){},"764f":function(t,e,n){"use strict";n("fe84")},"7e7d":function(t,e,n){},a24a:function(t,e,n){},ac27:function(t,e,n){},d624:function(t,e,n){},ece5:function(t){t.exports=JSON.parse('{"logo":"Coolui Scroll","nav":[{"path":"/index","meta":{"key":0,"icon":"icon-compass","title":"首页","level":1},"children":[{"path":"index","name":"index","meta":{"name":"index","key":0,"title":"前言","icon":"icon-disc","path":"/index","fullpath":"/index/index","level":2}},{"path":"about","name":"about","meta":{"name":"about7","key":0,"title":"关于","icon":"icon-disc","path":"/index","fullpath":"/index/about","level":2}}]}]}')},f5ae:function(t,e,n){},fde2:function(t,e,n){},fe84:function(t,e,n){}});
//# sourceMappingURL=app.46db12a0.js.map