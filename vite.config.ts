import { defineConfig, Plugin } from 'vite'
import type { Connect } from 'vite'
import type { ServerResponse } from 'http'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import fs from 'fs'
import path from 'path'

const prerenderRoutes = [
  '/',
  '/about',
  '/services',
  '/services/bathroom-remodeling',
  '/services/bathroom-renovation',
  '/services/bathroom-repair',
  '/services/bathroom-replacement',
  '/services/bathroom-installation',
  '/services/bathroom-design',
  '/services/bathroom-upgrades',
  '/services/bathroom-restoration',
  '/services/shower-remodeling',
  '/services/bathtub-replacement',
  '/services/bathroom-tile-installation',
  '/services/bathroom-vanity-installation',
  '/service-areas',
  '/service-areas/langley-twp',
  '/service-areas/surrey',
  '/service-areas/abbotsford',
  '/service-areas/fraser-valley',
  '/before-after',
  '/reviews',
  '/contact',
  '/sitemap',
  '/sitemap.html',
]

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
          res.setHeader('Content-Type', 'application/xml; charset=utf-8')
          res.end(xml)
          return
        }
      }

      if (pathname === '/sitemap.xsl') {
        const xslPath = path.resolve(process.cwd(), 'public', 'sitemap.xsl')
        if (fs.existsSync(xslPath)) {
          const xsl = fs.readFileSync(xslPath, 'utf8')
          res.setHeader('Content-Type', 'application/xml; charset=utf-8')
          res.end(xsl)
          return
        }
      }
      next()
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    serveXmlSitemapPlugin(),
    ...(mode === 'production'
      ? [
          prerender({
            routes: prerenderRoutes,
            renderer: new PuppeteerRenderer({
              renderAfterTime: 1500,
            }),
          }),
        ]
      : []),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
}))
