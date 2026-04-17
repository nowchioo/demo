import type { Router, RouteLocationNormalized as t } from 'vue-router'
const installBeforeEach = (router: Router) => {
  router.beforeEach((to: t, from: t) => {
    return true
  })
}
const installAfterEach = (router: Router) => {
  router.afterEach((to: t, from: t, failure) => {
    if (!failure) {
    }
  })
}
