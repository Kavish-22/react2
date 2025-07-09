import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react2/', // 👈 IMPORTANT for GitHub Pages
  plugins: [react()],
})
