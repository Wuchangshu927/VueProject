(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,c=1;c<s.length;c++){var i=s[c];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("4de4"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o={watch:{"$route.name":function(e){console.log(e)}}},c=o,i=(s("5c0b"),s("2877")),l=Object(i["a"])(c,a,r,!1,null,null,null),f=l.exports,d=s("8c4f"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-app-bar",{attrs:{height:"50",app:""}},[s("v-btn",{attrs:{fab:"",elevation:"0",small:""},on:{click:function(t){e.drawer=!e.drawer}}},[s("v-icon",[e._v("mdi-menu")])],1),s("v-toolbar-title",[e._v(e._s(e.$route.name))]),s("v-spacer"),s("v-toolbar-title",{class:["mdi",e.$store.state.connected?"mdi-lan-connect":"mdi-lan-disconnect"]},[s("v-icon")],1),s("v-avatar",[e._v(e._s(e.$store.state.username))]),s("v-icon",{attrs:{title:"注销"},on:{click:e.logout}},[e._v("mdi-logout")])],1),s("v-navigation-drawer",{attrs:{width:"200","mobile-break-point":"640",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),s("v-content",[s("view12")],1),s("v-footer",{staticClass:"text-right"},[e._v("1")])],1)},m=[],b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"ma-2 px-1 "},[s("v-btn",{on:{click:e.test}},[e._v("连接到服务器")]),s("v-btn",{on:{click:e.close}},[e._v("关闭连接")]),s("v-card-text",[e._v(e._s(e.$store.commit("getLogin")))]),e._l(e.msg,(function(t,n){return s("v-card-text",{key:n,staticClass:"  d-inline-flex ma-0 py-0 px-2"},[s("p",[e._v(e._s(t.username+": "))]),s("p",[e._v(e._s(t.msgContent))]),s("v-spacer"),s("p",[e._v(" "+e._s(t.sendTime))])],1)})),s("v-footer",{},[s("v-text-field",{staticClass:"mx-2",model:{value:e.msgContent,callback:function(t){e.msgContent=t},expression:"msgContent"}}),s("v-btn",{on:{click:e.send}},[e._v("发送")])],1)],2)},j=[],p=s("c1df"),v=s.n(p),h={name:"View",data:function(){return{msg:[],username:this.$store.state.username,msgContent:"",ws:!1}},methods:{test:function(){var e=this,t=io("ws://127.0.0.1:3000");console.log(t),this.ws=t,t.on("receiveMsg",(function(t){console.log(t),e.msg.push(t.msg)})),t.on("connect",(function(s){console.log("连接服务器成功"),t.emit("login",{userid:e.username}),e.$store.commit("setConnected",!0),console.log(t)}))},getMsg:function(){console.log(this.msg)},send:function(){var e=this;if(e.ws){var t="";"wcs"==e.username&&(t="wcc"),"wcc"==e.username&&(t="wcs");var s=Date.now(),n=(v()(s).format("YYYY年MM月DD日 HH:mm:ss"),{username:this.username,sendTime:s,msgContent:this.msgContent});e.msg.push(n),e.ws.emit("sendMsg",{from:this.username,to:t,msg:n}),this.msgContent=""}},close:function(){this.$store.commit("setConnected",!1)}}},g=h,w=s("6544"),k=s.n(w),y=s("8336"),_=s("b0af"),x=s("99d9"),V=s("553a"),C=s("2fa4"),z=s("8654"),O=Object(i["a"])(g,b,j,!1,null,"1a827332",null),$=O.exports;k()(O,{VBtn:y["a"],VCard:_["a"],VCardText:x["a"],VFooter:V["a"],VSpacer:C["a"],VTextField:z["a"]});var D={name:"Home",data:function(){return{drawer:!0}},watch:{"$route.name":function(e){console.log(e)}},methods:{logout:function(){this.$router.push("/login")}},components:{View12:$}},T=D,M=s("7496"),S=s("40dc"),Y=s("8212"),F=s("a75b"),H=s("132d"),P=s("f774"),E=s("2a7f"),L=Object(i["a"])(T,u,m,!1,null,null,null),A=L.exports;k()(L,{VApp:M["a"],VAppBar:S["a"],VAvatar:Y["a"],VBtn:y["a"],VContent:F["a"],VFooter:V["a"],VIcon:H["a"],VNavigationDrawer:P["a"],VSpacer:C["a"],VToolbarTitle:E["a"]});var B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-app-bar",{attrs:{app:""}},[s("v-toolbar-title",[e._v("登录页")])],1),s("v-content",{staticClass:"text-center"},[s("v-card",{staticClass:"col-sm-4 text-center ",staticStyle:{left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[s("v-card-title",[e._v("用户登录")]),s("v-divider"),s("v-card-text",[s("v-form",[s("v-text-field",{attrs:{label:"用户名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}}),s("v-text-field",{attrs:{label:"密码",type:"password"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),s("v-card-text",{staticClass:"d-inline-block"},[s("v-btn",{staticClass:"col-2",on:{click:e.login}},[e._v("登录")]),s("v-btn",[e._v("注册")])],1)],1)],1)],1)],1)],1)},U=[],N={name:"Login",data:function(){return{formData:{username:"wcs",password:"123"}}},methods:{login:function(){this.formData.username&&(this.$store.commit("setUsername",this.formData.username),this.$router.push("/home"))}}},q=N,G=s("ce7e"),J=s("4bd4"),I=Object(i["a"])(q,B,U,!1,null,"fa290036",null),K=I.exports;k()(I,{VApp:M["a"],VAppBar:S["a"],VBtn:y["a"],VCard:_["a"],VCardText:x["a"],VCardTitle:x["b"],VContent:F["a"],VDivider:G["a"],VForm:J["a"],VTextField:z["a"],VToolbarTitle:E["a"]}),n["a"].use(d["a"]);var Q=[{path:"/",redirect:"/login"},{path:"/home",name:"Home",component:A,children:[{path:"index",name:"index",componet:$}]},{path:"/login",name:"Home",component:K}],R=new d["a"]({routes:Q}),W=R,X=s("2f62");n["a"].use(X["a"]);var Z=new X["a"].Store({state:{isLogin:!0,username:"wcs",connected:!1},mutations:{getLogin:function(e){return e.isLogin},getConnected:function(e){return e.connected},setConnected:function(e,t){return e.connected=t},getUsername:function(e){return e.username},setUsername:function(e,t){e.username=t}},actions:{},modules:{}}),ee=(s("5363"),s("f309"));n["a"].use(ee["a"]);const te={icons:{iconfont:"mdi"}};var se=new ee["a"](te);n["a"].config.productionTip=!1,n["a"].filter("dateF",(function(e){return v()().format("YYYY-MM-DD HH:mm:ss")})),new n["a"]({router:W,store:Z,vuetify:se,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("7694"),a=s.n(n);a.a},7694:function(e,t,s){}});
//# sourceMappingURL=app.8590f4ac.js.map