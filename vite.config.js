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
  // GitHub Pages 배포를 위한 base 설정
  // 저장소 이름이 'mycareer'라면 '/mycareer/'로 설정
  // username.github.io 저장소라면 '/'로 설정
  base: '/mycareer/',
})
