import Vue from "vue";
import VueRouter from "vue-router";
import { Dialog } from "vant";

Vue.use(Dialog);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue")
  },
  {
    path: "/My",
    name: "My",
    component: () => import("../views/My.vue")
  },
  {
    path: "/xuanKe",
    name: "xuanKe",
    component: () => import("../views/xuanKe.vue")
  },
  {
    path: "/TiKu",
    name: "TiKu",
    component: () => import("../views/TiKu.vue")
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
