(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad85cd3a"],{"1e75":function(t,e,n){"use strict";var a=n("c238"),s=n.n(a);s.a},"7d9e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-wrap"},[n("div",{staticClass:"map-header"},[n("div",{staticClass:"left-icon",on:{click:function(e){return t.$router.replace({name:"person"})}}},[n("van-icon",{attrs:{name:"arrow-left"}})],1),n("div",{staticClass:"map-header-title"},[t._v(t._s(t.$route.query.type))])]),n("div",{staticClass:"map-content"},["Follow"===t.$route.query.type?t._l(t.followList,(function(e){return n("Item",{key:e._id,attrs:{data:e.friend,status:e.status},on:{updateList:function(e){return t.getList()}}})})):t._l(t.fansList,(function(e){return n("Item",{key:e._id,attrs:{data:e.me,status:e.status},on:{updateList:function(e){return t.getList()}}})}))],2)])},s=[],r=(n("96cf"),n("3b8d")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-item"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:t.data.headImage,alt:""}})]),n("div",{staticClass:"right"},[n("div",{staticClass:"text"},[t._v(t._s(t.data.nickname))]),n("div",{staticClass:"user"},[0===t.status?n("span",{staticClass:"tag",on:{click:t.onFollow}},[n("van-icon",{attrs:{name:"plus"}}),t._v(" Follow\n      ")],1):t._e(),1===t.status?n("span",{staticClass:"tag",on:{click:t.onNotFollow}},[n("van-icon",{attrs:{name:"exchange"}}),t._v(" Mutual Follow\n      ")],1):t._e()])])])},o=[],c=(n("c5f6"),{props:{data:Object,status:Number},methods:{onDeleteConfirm:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$dialog.confirm({title:"Message",message:"confirm deletion?"}).then((function(){e.$emit("delete",e.data)})).catch((function(){}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onFollow:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.$toast.loading({duration:0}),e=this.$store.getters.user,t.next=5,this.$http({url:this.$api.follow,method:"post",data:{me:e._id,friend:this.data._id}});case 5:this.$emit("updateList",{});case 6:return t.prev=6,this.$toast.clear(!0),t.finish(6);case 9:case"end":return t.stop()}}),t,this,[[0,,6,9]])})));function e(){return t.apply(this,arguments)}return e}(),onNotFollow:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.$toast.loading({duration:0}),e=this.$store.getters.user,t.next=5,this.$http({url:this.$api.follow_remove,method:"post",data:{me:e._id,friend:this.data._id}});case 5:this.$emit("updateList",{});case 6:return t.prev=6,this.$toast.clear(!0),t.finish(6);case 9:case"end":return t.stop()}}),t,this,[[0,,6,9]])})));function e(){return t.apply(this,arguments)}return e}()}}),u=c,l=(n("1e75"),n("2877")),d=Object(l["a"])(u,i,o,!1,null,"f4baf7dc",null),f=d.exports,h={components:{Item:f},data:function(){return{followTotal:0,fansTotal:0,followList:[],fansList:[]}},created:function(){this.getList()},methods:{onDeleteItem:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,s,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e._id,a=e.article,t.prev=1,this.$toast.loading({duration:0}),t.next=5,this.$http({url:this.$api.comment_remove,params:{_id:n,article:a}});case 5:s=t.sent,s.data,this.getComments(),setTimeout((function(){r.$toast("delete success")}));case 9:return t.prev=9,this.$toast.clear(!0),t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,,9,12]])})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http({url:this.$api.user_fans,method:"post",data:{me:this.$store.getters.user._id}});case 2:e=t.sent,n=e.data,this.followTotal=n.followTotal,this.fansTotal=n.fansTotal,this.followList=n.followList,this.fansList=n.fansList;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},p=h,m=(n("8b99"),Object(l["a"])(p,a,s,!1,null,"7dbc7c86",null));e["default"]=m.exports},"8b99":function(t,e,n){"use strict";var a=n("c168"),s=n.n(a);s.a},c168:function(t,e,n){},c238:function(t,e,n){}}]);