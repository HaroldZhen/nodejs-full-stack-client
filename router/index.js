import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/", name: 'walls', component: () => import("../src/pages/Walls.vue"),
  },
  {
    path: "/post", name: 'post', component: () => import("../src/pages/Post.vue"),
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
});
