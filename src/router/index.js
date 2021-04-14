import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Learn from "../views/Learn.vue";
import Contact from "../views/Contact.vue";
import BaseWeb from "../views/BaseWeb.vue";
import Biodata from "../views/users/Biodata.vue";
import Login from "../views/users/Login.vue";
import BaseAdmin from "../views/users/BaseAdmin.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "/",
        component: BaseWeb,
        children: [
          {
            path: "/",
            name: "Home",
            component: Home,
          },
          {
            path: "/about",
            name: "About",
            component: About,
          },
          {
            path: "/learn",
            name: "Learn",
            component: Learn,
          },
          {
            path: "/contact",
            name: "Contact",
            component: Contact,
          },
        ],
      },
      {
        path: "/admin",
        component: BaseAdmin,
        children: [
          {
            path: "/",
            name: "Biodata",
            component: Biodata,
          },
          {
            path: "/login",
            name: "Login",
            component: Login,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
