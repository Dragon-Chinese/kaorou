webpackJsonp([1],{"6XcM":function(t,a){},Hl2c:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},i,!1,function(t){e("6XcM")},null,null).exports,o=e("/ocq"),l=e("t4zo"),r=e.n(l),d={name:"HelloWorld",data:function(){return{user:"",pwd:""}},methods:{login:function(){"duoyuyan"===this.user&&"666"===this.pwd?(sessionStorage.setItem("login",1),this.$router.push("/detail")):alert("账号密码错误，请联系客服")}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{placeholder:"请输入账号",type:"text"},domProps:{value:t.user},on:{input:function(a){a.target.composing||(t.user=a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{placeholder:"请输入密码",type:"text"},domProps:{value:t.pwd},on:{input:function(a){a.target.composing||(t.pwd=a.target.value)}}}),t._v(" "),e("button",{on:{click:t.login}},[t._v("登陆")])])])},staticRenderFns:[]};var u=e("VU/8")(d,c,!1,function(t){e("Hl2c")},"data-v-06466478",null).exports,v=e("bOdI"),h=e.n(v),p=e("woOf"),m=e.n(p),x=e("mvHQ"),g=e.n(x),f={name:"HelloWorld",data:function(){return{data:{chinese:[],english:[],alb:[],han:[],valueCha:""},lang:[{name:"中文"},{name:"英文"},{name:"阿文"},{name:"韩文"},{name:"显示"}],active:0}},beforeCreate:function(){sessionStorage.getItem("login")||this.$router.push("/")},methods:{into:function(){var t=JSON.parse(localStorage.getItem("ListY"));return t?(this.data=t,void alert("倒入成功")):void alert("不好意思，没找到～～～")},save:function(){return confirm("此次保存是本地存储，不要做清除缓存操作，切换浏览器后会失效，换电脑也是哦，要专一一个浏览器～～")?(localStorage.setItem("ListY",g()(this.data)),void alert("本地保存成功～～～")):void alert("不存拉倒，记得自己备份～～～")},delate:function(t,a){confirm("如果你要删除这一行请把所有语言的这一行都删除，切记！！！！！")&&("cha"===t?this.data.chinese.splice(a,1):"eng"===t?this.data.english.splice(a,1):"alb"===t?this.data.alb.splice(a,1):"han"===t&&this.data.han.splice(a,1))},exportJSON:function(){var t=this.data.chinese,a=this.data.english,e=this.data.alb,n=this.data.han,i={};t.forEach(function(t,a){var e="txt"+a;i=m()({},i,h()({},e,t.txt))});var s={};a.forEach(function(t,a){var e="txt"+a;s=m()({},s,h()({},e,t.txt))});var o={};e.forEach(function(t,a){var e="txt"+a;o=m()({},s,h()({},e,t.txt))});var l=[],d={};n.forEach(function(t,a){var e="txt"+a;d=m()({},s,h()({},e,t.txt))}),l.push({zw:i}),l.push({yw:s}),l.push({alb:o}),l.push({Han:d});var c=g()(l),u=new Blob([c],{type:""});r.a.saveAs(u,"data.json")},add:function(t){if(this.data.valueCha){var a=this.data.chinese;"cha"===t?(a=this.data.chinese,this.data.english.push({txt:""}),this.data.alb.push({txt:""}),this.data.han.push({txt:""})):"eng"===t?(a=this.data.english,this.data.chinese.push({txt:""}),this.data.alb.push({txt:""}),this.data.han.push({txt:""})):"alb"===t?(a=this.data.alb,this.data.english.push({txt:""}),this.data.chinese.push({txt:""}),this.data.han.push({txt:""})):"han"===t&&(a=this.data.han,this.data.english.push({txt:""}),this.data.chinese.push({txt:""}),this.data.alb.push({txt:""})),a.push({txt:this.data.valueCha}),this.data.valueCha="","cha"===t?this.data.chinese=a:"eng"===t?this.data.english=a:"alb"===t?this.data.alb=a:"han"===t&&(this.data.han=a)}else alert("不能不输入东西～～～")},tabLang:function(t){this.active=t}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"lang"},[e("button",{staticStyle:{background:"#000",color:"#fff"},on:{click:t.exportJSON}},[t._v("导出文件")]),t._v(" "),t._l(t.lang,function(a,n){return e("button",{key:n,class:t.active===n?"active":"",on:{click:function(a){return t.tabLang(n)}}},[t._v("\n        "+t._s(a.name)+"\n     ")])}),t._v(" "),e("button",{staticStyle:{background:"green"},on:{click:t.save}},[t._v("保存")]),t._v(" "),e("button",{staticStyle:{background:"green",width:"200px"},on:{click:t.into}},[t._v("倒入上次保存的文件")])],2),t._v(" "),t.active?t._e():e("div",{staticClass:"wrap"},[e("div",{staticClass:"body"},t._l(t.data.chinese,function(a,n){return e("li",{key:n},[e("span",[t._v("中文 "+t._s(n+1)+" : ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.chinese[n].txt,expression:"data.chinese[index].txt"}],attrs:{placeholder:"请输入中文"},domProps:{value:t.data.chinese[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.chinese[n],"txt",a.target.value)}}}),t._v(" "),e("button",{on:{click:function(a){return t.delate("cha",n)}}},[t._v("删除")])])}),0),t._v(" "),e("div",{staticClass:"option"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.valueCha,expression:"data.valueCha"}],staticStyle:{width:"500px",height:"80px"},attrs:{placeholder:"请输入中文"},domProps:{value:t.data.valueCha},on:{input:function(a){a.target.composing||t.$set(t.data,"valueCha",a.target.value)}}}),e("button",{on:{click:function(a){return t.add("cha")}}},[t._v("添加")])])]),t._v(" "),1===t.active?e("div",{staticClass:"wrap"},[e("div",{staticClass:"body"},t._l(t.data.english,function(a,n){return e("li",{key:n},[e("span",[t._v("英文 "+t._s(n+1)+" : ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.english[n].txt,expression:"data.english[index].txt"}],attrs:{placeholder:"请输入英文"},domProps:{value:t.data.english[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.english[n],"txt",a.target.value)}}}),t._v(" "),e("button",{on:{click:function(a){return t.delate("eng",n)}}},[t._v("删除")])])}),0),t._v(" "),e("div",{staticClass:"option"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.valueCha,expression:"data.valueCha"}],staticStyle:{width:"500px",height:"80px"},attrs:{placeholder:"请输入英文"},domProps:{value:t.data.valueCha},on:{input:function(a){a.target.composing||t.$set(t.data,"valueCha",a.target.value)}}}),e("button",{on:{click:function(a){return t.add("eng")}}},[t._v("添加")])])]):t._e(),t._v(" "),2===t.active?e("div",{staticClass:"wrap"},[e("div",{staticClass:"body"},t._l(t.data.alb,function(a,n){return e("li",{key:n},[e("span",[t._v("阿语 "+t._s(n+1)+" : ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.alb[n].txt,expression:"data.alb[index].txt"}],attrs:{placeholder:"请输入阿文"},domProps:{value:t.data.alb[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.alb[n],"txt",a.target.value)}}}),t._v(" "),e("button",{on:{click:function(a){return t.delate("alb",n)}}},[t._v("删除")])])}),0),t._v(" "),e("div",{staticClass:"option"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.valueCha,expression:"data.valueCha"}],staticStyle:{width:"500px",height:"80px"},attrs:{placeholder:"请输入阿文"},domProps:{value:t.data.valueCha},on:{input:function(a){a.target.composing||t.$set(t.data,"valueCha",a.target.value)}}}),e("button",{on:{click:function(a){return t.add("alb")}}},[t._v("添加")])])]):t._e(),t._v(" "),3===t.active?e("div",{staticClass:"wrap"},[e("div",{staticClass:"body"},t._l(t.data.han,function(a,n){return e("li",{key:n},[e("span",[t._v("韩语 "+t._s(n+1)+" : ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.han[n].txt,expression:"data.han[index].txt"}],attrs:{placeholder:"请输入韩文"},domProps:{value:t.data.han[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.han[n],"txt",a.target.value)}}}),t._v(" "),e("button",{on:{click:function(a){return t.delate("han",n)}}},[t._v("删除")])])}),0),t._v(" "),e("div",{staticClass:"option"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.valueCha,expression:"data.valueCha"}],staticStyle:{width:"500px",height:"80px"},attrs:{placeholder:"请输入韩文"},domProps:{value:t.data.valueCha},on:{input:function(a){a.target.composing||t.$set(t.data,"valueCha",a.target.value)}}}),e("button",{on:{click:function(a){return t.add("han")}}},[t._v("添加")])])]):t._e(),t._v(" "),4===t.active?e("div",{staticClass:"wrap"},[e("div",{staticClass:"top"},t._l(t.lang,function(a,n){return e("li",{directives:[{name:"show",rawName:"v-show",value:4!=n,expression:"index != 4"}],key:n},[e("span",[t._v(t._s(a.name))])])}),0),t._v(" "),e("div",{staticClass:"main"},[e("li",t._l(t.data.chinese,function(a,n){return e("div",{key:n},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.chinese[n].txt,expression:"data.chinese[index].txt"}],attrs:{placeholder:"请输入中文"},domProps:{value:t.data.chinese[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.chinese[n],"txt",a.target.value)}}})])}),0),t._v(" "),e("li",t._l(t.data.english,function(a,n){return e("div",{key:n},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.english[n].txt,expression:"data.english[index].txt"}],attrs:{placeholder:"请输入英文"},domProps:{value:t.data.english[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.english[n],"txt",a.target.value)}}})])}),0),t._v(" "),e("li",t._l(t.data.alb,function(a,n){return e("div",{key:n},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.alb[n].txt,expression:"data.alb[index].txt"}],attrs:{placeholder:"请输入阿文"},domProps:{value:t.data.alb[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.alb[n],"txt",a.target.value)}}})])}),0),t._v(" "),e("li",t._l(t.data.han,function(a,n){return e("div",{key:n},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.han[n].txt,expression:"data.han[index].txt"}],attrs:{placeholder:"请输入韩文"},domProps:{value:t.data.han[n].txt},on:{input:function(a){a.target.composing||t.$set(t.data.han[n],"txt",a.target.value)}}})])}),0)])]):t._e()])},staticRenderFns:[]};var b=e("VU/8")(f,_,!1,function(t){e("evny")},"data-v-e913c68c",null).exports;n.a.use(o.a);var w=new o.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/detail",name:"detail",component:b}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:w,components:{App:s},template:"<App/>"})},evny:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.9164225877b69977e901.js.map