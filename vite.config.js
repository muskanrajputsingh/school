import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/register":"http://localhost:3000/",
      "/regdashboard":"http://localhost:3000/",
      "/logindashboard":"http://localhost:3000/"
    },
  },
  plugins: [react()],
  base:"/school/"

})
