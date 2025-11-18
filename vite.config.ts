import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(() => {
  const base = process.env.BUILD_BASE ?? '/portofolio/'
  return {
    plugins: [vue()],
    base,
  }
})