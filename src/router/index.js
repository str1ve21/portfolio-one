import { createRouter, createWebHistory } from "vue-router";
import siteOne from "../router-sites/SiteOneVue.vue";
const siteTwo = () => import("../router-sites/SiteTwoVue.vue");
// const RegisterPage = () => import("../app-parts/RegisterPart.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "siteOne",
      component: siteOne,
    },
    {
      path: "/site-two/",
      name: "siteTwo",
      component: siteTwo,
    },
  ],
});

export default router;
