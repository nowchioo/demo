import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-expect-error 无类型声明，仅用于样式导入
import 'modern-css-reset'
import App from './App.vue'
import { install as installRouter } from './router'
// @ts-expect-error 无类型声明，仅用于路由导入
import routes from '@current-routes'
/* 自适应 rem 基准 */
const setRem = () => {
  const html = document.documentElement
  const width = html.clientWidth
  html.style.fontSize = width / 10 + 'px'
}
window.addEventListener('resize', setRem)
setRem()

const app = createApp(App)
app.use(createPinia())
installRouter(app, routes)
app.mount('#app')
