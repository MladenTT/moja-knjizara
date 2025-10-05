import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/moja-knjizara/', // obavezno ime repozitorijuma
  plugins: [react()]
})
