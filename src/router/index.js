import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavView from "../views/FavView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeview",
      component: HomeView,
    },
    {
      path: "/",
      name: "fav",
      component: FavView,
    },
  ],
});

export default router;
