import { createFileRoute } from "@tanstack/react-router";
import ServiceAreaDetail from "../pages/ServiceAreaDetail";
import { getServiceAreaBySlug } from "../data/ServiceAreasData";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/service-areas/$slug")({
  head: ({ params }) => {
    const area = getServiceAreaBySlug(params.slug);
    return buildHead({
      title: area?.metaTitle ?? "Bathroom Renovations Near You | Ideal Bath Renovations",
      description:
        area?.metaDescription ??
        "Find local bathroom renovations across Langley Township, Surrey, Abbotsford and the Fraser Valley from one experienced renovation crew.",
      path: `/service-areas/${params.slug}`,
      ...(area?.keywords ? { keywords: area.keywords } : {}),
    });
  },
  component: ServiceAreaDetail,
});
