import "babel-polyfill";
import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store/index";
import request from "@/utils/request";
import "@/use";
// import "@/utils/fastclick";
import * as api from "@/api/index";
import * as util from "@/utils/utils";
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'
import "@/filter"
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$http = request;
Vue.prototype.$util = util;
//¹È¸èÉêÇëµÄkey
window.MAPKEY = 'AIzaSyB3bEc0lmQ6WNX_Cl98IRfu1E5DRLiG2pE'
Vue.use(VueGoogleMaps, {
  load: {
    apiKey: window.MAPKEY,
    libraries: ['places'],
    useBetaRenderer: false,
  },
})
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
