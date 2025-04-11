import { createWebHistory, createRouter } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import Layout from "@/layout/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue")
  },
  {
    path: "/",
    name: "home",
    component: Layout,
    redirect: "/introduce",
    children: [
      {
        path: "introduce",
        name: "introduce",
        component: () => import("@/pages/introduce/index.vue")
      },
      {
        path: "product",
        name: "product",
        component: () => import("@/pages/product/index.vue")
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/pages/user/index.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
