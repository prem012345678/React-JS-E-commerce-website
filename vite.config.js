import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/React-JS-E-commerce-website/",
  plugins: [react()],
})
