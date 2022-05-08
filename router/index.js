import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/", component: () => import("../src/pages/Walls.vue"),
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
});
