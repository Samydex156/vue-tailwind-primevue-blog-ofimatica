import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/descargas",
      name: "downloads",
      component: () => import("../views/DownloadsView.vue"),
    },
    {
      path: "/practicas",
      name: "practices",
      component: () => import("../views/PracticesView.vue"),
    },
  ],
});

export default router;
