import { createFileRoute } from "@tanstack/react-router";
import ServicesHub from "../pages/ServicesHub";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildHead({
      title: "Bathroom Renovation Services | Langley BC Experts",
      description:
        "Explore bathroom remodeling, shower conversions, tile, vanities, repairs and upgrades for Langley homes, with one local crew from planning through completion.",
      path: "/services",
    }),
  component: ServicesHub,
});
