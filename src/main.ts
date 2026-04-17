import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-expect-error 无类型声明，仅用于样式导入
import 'modern-css-reset'
import App from './App.vue'
import { install as installRouter } from './router'
// @ts-expect-error 无类型声明，仅用于路由导入
import routes from '@current-routes'
import pxtorem from '@utils/pxtorem'
// import { install } from '@utils/debugTools'
/* 自适应 rem 基准 */
pxtorem()
const app = createApp(App)
app.use(createPinia())
installRouter(app, routes)
app.mount('#app')
