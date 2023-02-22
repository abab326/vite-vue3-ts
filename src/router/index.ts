import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routeModules = import.meta.glob<any>("./modules/*.ts", { eager: true });
const routeList: RouteRecordRaw[] = [];
for (const key in routeModules) {
  if (Object.prototype.hasOwnProperty.call(routeModules, key)) {
    routeList.push(...routeModules[key].default);
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Home.vue"),
    },
    ...routeList,
  ],
});

export default router;
