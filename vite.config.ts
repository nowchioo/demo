import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
// 获取命令行参数：npm run build -- phone → 拿到 phone
const moduleName = process.env.npm_config_module || 'main'

let routePath
if (moduleName === 'main') {
  routePath = './src/router/routes.ts'
} else {
  routePath = `./modules/${moduleName}/pages.ts`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@modules': fileURLToPath(new URL('./modules', import.meta.url)),
      '@current-routes': fileURLToPath(new URL(routePath, import.meta.url)),
    },
  },
})
