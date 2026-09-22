import { createFileRoute } from "@tanstack/react-router";
import SitemapPage from "../pages/SitemapPage";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/sitemap")({
  head: () =>
    buildHead({
      title: "Bathroom Renovation Site Directory | Ideal Bath Renovations",
      description:
        "Find every Ideal Bath Renovations page, including bathroom services, local service areas, project photos, customer reviews and contact information.",
      path: "/sitemap",
    }),
  component: SitemapPage,
});
