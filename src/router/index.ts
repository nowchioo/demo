import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
const install = (app: App, routes: RouteRecordRaw[]) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
  })
  app.use(router)
  return router
}

export { install }
