import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { install as installRouter } from './router'
// @ts-expect-error 动态别名 @current-routes，TS 无法静态识别
import routes from '@current-routes'
const app = createApp(App)
app.use(createPinia())
installRouter(app, routes)
app.mount('#app')
