import { createFileRoute } from "@tanstack/react-router";
import BeforeAfter from "../pages/BeforeAfter";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/before-after")({
  head: () =>
    buildHead({
      title: "Bathroom Before & After Gallery | Langley BC Renovations",
      description:
        "See real bathroom transformations across Langley and the Fraser Valley, from tub-to-shower conversions to custom tile, lighting and vanity installations.",
      path: "/before-after",
      keywords:
        "bathroom before and after, bathroom remodel photos Langley, ensuite transformations Fraser Valley BC",
    }),
  component: BeforeAfter,
});
