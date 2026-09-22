import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "Bathroom Remodeler in Langley, BC | Ideal Bath Renovations",
      description:
        "Bathroom renovations in Langley, Surrey and Abbotsford, including walk-in showers, tub conversions, tile and vanities. Get a clear quote from our local crew.",
      path: "/",
      keywords:
        "bathroom remodeler Langley BC, bathroom renovation Langley Township, bathroom contractor Fraser Valley, walk-in shower Langley, tub-to-shower conversion Langley",
    }),
  component: Home,
});
