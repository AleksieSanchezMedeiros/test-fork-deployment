import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '91bca94d-608c-41aa-bbe6-aea6ce74227d-00-32ysfe8xgm25g.janeway.replit.dev',
      '3.147.71.164',
      'ec2-3-147-71-164.us-east-2.compute.amazonaws.com',
    ],
  },
})
