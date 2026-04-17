import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/phone', name: 'phone', component: () => import('@modules/phone/index.vue') },
]
export default routes
