import { createFileRoute } from "@tanstack/react-router";
import { servicesDetailList } from "../data/ServicesDetailData";
import { serviceAreasData } from "../data/ServiceAreasData";
import { SITE_URL } from "../lib/seo";

type Entry = { path: string; changefreq: string; priority: string };

function buildEntries(): Entry[] {
  const staticPages: Entry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "weekly", priority: "0.95" },
    { path: "/service-areas", changefreq: "monthly", priority: "0.90" },
    { path: "/before-after", changefreq: "weekly", priority: "0.85" },
    { path: "/about", changefreq: "monthly", priority: "0.85" },
    { path: "/reviews", changefreq: "weekly", priority: "0.80" },
    { path: "/contact", changefreq: "monthly", priority: "0.90" },
    { path: "/sitemap", changefreq: "monthly", priority: "0.30" },
  ];

  const services: Entry[] = servicesDetailList.map((s) => ({
    path: `/services/${s.slug}`,
    changefreq: "monthly",
    priority: "0.80",
  }));

  const areas: Entry[] = serviceAreasData.map((a) => ({
    path: `/service-areas/${a.slug}`,
    changefreq: "monthly",
    priority: "0.80",
  }));

  return [...staticPages, ...services, ...areas];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          buildEntries()
            .map(
              (e) =>
                `  <url>\n` +
                `    <loc>${SITE_URL}${e.path === "/" ? "/" : e.path}</loc>\n` +
                `    <lastmod>${lastmod}</lastmod>\n` +
                `    <changefreq>${e.changefreq}</changefreq>\n` +
                `    <priority>${e.priority}</priority>\n` +
                `  </url>`,
            )
            .join("\n") +
          `\n</urlset>\n`;

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
