import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
const defaultConfig = {
  plugins: [vue()],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode === 'development' && command !== 'build') {
    return {
      ...defaultConfig,
    }
  } else {
    return defaultConfig
  }
})