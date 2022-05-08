import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),eslintPlugin()],
  resolve: {
    alias: {
      '@/': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /*
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
         */
        additionalData: ''
      }
    }
  }
})
