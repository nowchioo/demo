import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
const moduleName = process.env.npm_config_module || 'main'

let routePath = './src/router/routes.ts'

if (moduleName !== 'main') {
  routePath = `./modules/${moduleName}/pages.ts`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@modules': fileURLToPath(new URL('./modules', import.meta.url)),
      '@current-routes': fileURLToPath(new URL(routePath, import.meta.url)),
    },
  },
})
