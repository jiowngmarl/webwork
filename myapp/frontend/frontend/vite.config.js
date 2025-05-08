import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  server: { 
    proxy: {     //proxy서버를 거쳐서 ap.mysql.js에 /api/users로 이동
    '/api': {   // target주소 
    target:'http://localhost:3000', 
    changeOrigin: true 
    } 
  } 
}
})
