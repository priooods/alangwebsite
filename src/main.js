import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "vuesax/dist/vuesax.css";
import CursorFx from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
import { BootstrapVue } from "bootstrap-vue";
import Vuesax from "vuesax";
import gsap from "gsap";
Vue.use(Vuesax);
Vue.use(CursorFx);
Vue.use(gsap);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
