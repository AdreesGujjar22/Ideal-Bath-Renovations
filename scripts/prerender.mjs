import { createServer } from 'node:http'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const dist = join(root, 'dist')
const routes = [
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

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

if (process.platform !== 'linux' && !process.env.CHROME_PATH) {
  console.warn('Skipping prerender: set CHROME_PATH to run it on non-Linux systems.')
  process.exit(0)
}

const server = createServer((request, response) => {
  const requestPath = decodeURIComponent((request.url || '/').split('?')[0])
  const relativePath = normalize(requestPath).replace(/^([.][.][/\\])+/, '')
  const requestedFile = join(dist, relativePath)
  const filePath = existsSync(requestedFile) && extname(requestedFile) ? requestedFile : join(dist, 'index.html')

  if (!existsSync(filePath)) {
    response.writeHead(404)
    response.end()
    return
  }

  response.setHeader('Content-Type', contentTypes[extname(filePath)] || 'text/html; charset=utf-8')
  response.end(readFileSync(filePath))
})

const port = 4174
server.listen(port, '127.0.0.1')

const browser = await puppeteer.launch({
  args: process.platform === 'linux' ? chromium.args : ['--no-sandbox'],
  defaultViewport: chromium.defaultViewport,
  executablePath: process.env.CHROME_PATH || (await chromium.executablePath()),
  headless: true,
})

try {
  const page = await browser.newPage()
  for (const route of routes) {
    await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'networkidle2' })
    await new Promise((resolvePage) => setTimeout(resolvePage, 1500))

    const outputDirectory = join(dist, route === '/' ? '' : route.slice(1))
    mkdirSync(outputDirectory, { recursive: true })
    writeFileSync(join(outputDirectory, 'index.html'), await page.content())
    console.log(`Prerendered ${route}`)
  }
} finally {
  await browser.close()
  server.close()
}
