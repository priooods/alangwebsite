import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import CursorFx from "@luxdamore/vue-cursor-fx";
import store from "./store/index.js";
import gsap from "gsap";
import VueCookies from "vue-cookies";
import axios from "axios";
import VueAxios from "vue-axios";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "boxicons/css/boxicons.min.css";
import "./style.scss";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
import "./assets/tailwind.css";
Vue.use(CursorFx);
Vue.use(VueCookies);
Vue.use(gsap);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
