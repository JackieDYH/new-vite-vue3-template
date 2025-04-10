import { createWebHistory, createRouter } from "vue-router"
import type {  RouteRecordRaw } from "vue-router"
import ModelView from "@/pages/home/index.vue"


import Layout from "@/layout/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: ModelView
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
