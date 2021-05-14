import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Learn from "../views/Learn.vue";
import Contact from "../views/Contact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    props: true,
    component: About,
  },
  {
    path: "/learn",
    name: "Learn",
    props: true,
    component: Learn,
  },
  {
    path: "/contact",
    name: "Contact",
    props: true,
    component: Contact,
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
