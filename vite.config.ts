import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material/Tooltip', '@emotion/styled', '@mui/material/Unstable_Grid2'],
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: process.env.VITE_API_URL,
  //       changeOrigin: true
  //     }
  //   }
  // }
})
