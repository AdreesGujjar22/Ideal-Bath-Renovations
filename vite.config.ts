import { defineConfig, Plugin } from 'vite'
import type { Connect } from 'vite'
import type { ServerResponse } from 'http'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const serveXmlSitemapPlugin = (): Plugin => ({
  name: 'serve-xml-sitemap',
  configureServer(server) {
    server.middlewares.use((req: Connect.IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
      const rawUrl = req.url || ''
      const pathname = rawUrl.split('?')[0]

      if (pathname === '/sitemap.xml') {
        const xmlPath = path.resolve(process.cwd(), 'public', 'sitemap.xml')
        if (fs.existsSync(xmlPath)) {
          const xml = fs.readFileSync(xmlPath, 'utf8')
          res.setHeader('Content-Type', 'text/xml; charset=utf-8')
          res.end(xml)
          return
        }
      }

      if (pathname === '/sitemap.xsl') {
        const xslPath = path.resolve(process.cwd(), 'public', 'sitemap.xsl')
        if (fs.existsSync(xslPath)) {
          const xsl = fs.readFileSync(xslPath, 'utf8')
          res.setHeader('Content-Type', 'text/xml; charset=utf-8')
          res.end(xsl)
          return
        }
      }
      next()
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), serveXmlSitemapPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
