import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/activity', name: 'activity', component: () => import('@modules/activity/index.vue') },
]
export default routes
