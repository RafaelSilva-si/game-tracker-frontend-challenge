import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.vue', '.js', '.ts'], // Adicione '.ts' se estiver usando TypeScript
  },
  plugins: [vue()],
})
