import { createFileRoute, redirect, notFound } from "@tanstack/react-router";

const ALIASES: Record<string, string> = {
  "before&after": "/before-after",
  testimonials: "/reviews",
  "sitemap.html": "/sitemap",
  "bathroom-renovations-langley": "/service-areas/langley-twp",
  "service-areas/langley-township": "/service-areas/langley-twp",
  "service-areas/langley": "/service-areas/langley-twp",
  "service-areas/surrey-bc": "/service-areas/surrey",
  "service-areas/abbotsford-bc": "/service-areas/abbotsford",
  "tub-to-shower-conversion": "/services/shower-remodeling",
  "walk-in-showers": "/services/shower-remodeling",
  "custom-vanities": "/services/bathroom-vanity-installation",
  treatments: "/services",
  rfMicroNeedling: "/services/shower-remodeling",
  resurfacingTreatment: "/services/bathtub-replacement",
  nanoneedling: "/services/bathroom-upgrades",
};

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const key = decodeURIComponent(params._splat ?? "").replace(/^\/+|\/+$/g, "");
    const target = ALIASES[key];
    if (target) {
      throw redirect({ to: target as any, replace: true });
    }
    throw notFound();
  },
  component: () => null,
});
