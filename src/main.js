import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import CursorFx from "@luxdamore/vue-cursor-fx";
import VueScrollactive from "vue-scrollactive";
import BootstrapVue from "bootstrap-vue";
import Vuesax from "vuesax";
import store from "./store/index.js";
import gsap from "gsap";
import VueCookies from "vue-cookies";
import axios from "axios";
import VueAxios from "vue-axios";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "./style.scss";
import "vuesax/dist/vuesax.css";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
Vue.use(VueScrollactive);
Vue.use(Vuesax);
Vue.use(CursorFx);
Vue.use(VueCookies);
Vue.use(gsap);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
