(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0975d74b"],{"079a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"map-wrap"},[r("div",{staticClass:"map-header",staticStyle:{"z-index":"1"}},[r("div",{staticClass:"left-icon",on:{click:function(t){return e.$router.replace({name:"person"})}}},[r("van-icon",{attrs:{name:"arrow-left"}})],1),r("div",{staticClass:"map-header-title"},[e._v(e._s(e.$route.meta.title))])]),r("div",{staticClass:"map-content"},[r("div",{staticClass:"form-item",staticStyle:{height:"auto","margin-bottom":"15px","text-align":"center"}},[r("van-uploader",{attrs:{"max-count":1,"after-read":e.afterRead},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.forms.nickname,expression:"forms.nickname",modifiers:{trim:!0}}],attrs:{placeholder:"Please enter your nickname",maxlength:"20"},domProps:{value:e.forms.nickname},on:{input:function(t){t.target.composing||e.$set(e.forms,"nickname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-item"},[r("button",{on:{click:e.onSubmit}},[e._v("SUBMIT")])])])])},n=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("bd86")),s=(r("96cf"),r("3b8d"));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={data:function(){return{fileList:[],forms:{nickname:""}}},created:function(){var e=this.$store.getters.user;this.forms.nickname=e.nickname,e.headImage&&(this.fileList=[{url:e.headImage,status:""}])},methods:{afterRead:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.status="uploading",r=new FormData,r.append("file",t.file),e.prev=3,e.next=6,this.$http({url:this.$api.upload,method:"post",data:r});case 6:a=e.sent,n=a.data,t.status="",t.url=n.url,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](3),t.status="failed",t.url="";case 16:case"end":return e.stop()}}),e,this,[[3,12]])})));function t(t){return e.apply(this,arguments)}return t}(),onSubmit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.forms.nickname){e.next=2;break}return e.abrupt("return",this.$toast("Please enter your nickname"));case 2:if(t=this.fileList[0]?this.fileList[0].url:null,t){e.next=5;break}return e.abrupt("return",this.$toast("Please upload your head image"));case 5:return e.prev=5,this.$toast.loading({duration:0}),e.next=9,this.$http({url:this.$api.user_update,method:"post",data:{nickname:this.forms.nickname,headImage:t}});case 9:r=this.$store.getters.user,this.$store.commit("users/users",c({},r,{nickname:this.forms.nickname,headImage:t})),this.$router.replace({name:"person"});case 12:return e.prev=12,this.$toast.clear(!0),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[5,,12,15]])})));function t(){return e.apply(this,arguments)}return t}()}},l=u,m=(r("4236"),r("2877")),p=Object(m["a"])(l,a,n,!1,null,"b27982fa",null);t["default"]=p.exports},"22e7":function(e,t,r){},4236:function(e,t,r){"use strict";var a=r("22e7"),n=r.n(a);n.a}}]);