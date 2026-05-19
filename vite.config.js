import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    middleware: [
      {
        name: 'spa-fallback',
        apply: 'serve',
        handler(req, res, next) {
          // Allow files and static assets to be served normally
          if (req.url.includes('.') || req.url.startsWith('/node_modules')) {
            return next()
          }
          // For all other routes, serve index.html
          if (req.method === 'GET' && !req.url.includes('/.')) {
            req.url = '/index.html'
          }
          next()
        }
      }
    ]
  }
})