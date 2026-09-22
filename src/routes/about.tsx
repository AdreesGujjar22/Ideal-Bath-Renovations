import { createFileRoute } from "@tanstack/react-router";
import About from "../pages/About";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "About Ideal Bath Renovations | Langley Bathroom Experts",
      description:
        "Meet Ideal Bath Renovations, a licensed Langley team delivering planning, fixed quotes, tidy job sites and durable bathroom finishes in the Fraser Valley.",
      path: "/about",
    }),
  component: About,
});
