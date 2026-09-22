import { createFileRoute } from "@tanstack/react-router";
import Reviews from "../pages/Reviews";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () =>
    buildHead({
      title: "Ideal Bath Renovations Reviews | Langley BC Homeowners",
      description:
        "Read reviews from Langley and Fraser Valley homeowners about clear quotes, tidy work areas, reliable schedules and beautifully finished bathroom renovations.",
      path: "/reviews",
    }),
  component: Reviews,
});
