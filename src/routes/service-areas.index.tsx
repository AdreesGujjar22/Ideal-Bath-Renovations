import { createFileRoute } from "@tanstack/react-router";
import ServiceAreasHub from "../pages/ServiceAreasHub";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/service-areas/")({
  head: () =>
    buildHead({
      title: "Bathroom Renovation Areas | Langley & Fraser Valley",
      description:
        "Ideal Bath Renovations serves Langley Township, Surrey, Abbotsford and the Fraser Valley with local bathroom remodeling, shower and tile expertise.",
      path: "/service-areas",
    }),
  component: ServiceAreasHub,
});
