import { createRouter, createWebHistory } from "vue-router";
//import Sidebar from "../components/admin/Sidebar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/user/HomeView.vue"),
  },
  {
    path: "/manage",
    name: "manage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/ManageView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
