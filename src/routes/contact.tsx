import { createFileRoute } from "@tanstack/react-router";
import Contact from "../pages/Contact";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "Contact Ideal Bath Renovations | Free Langley Estimate",
      description:
        "Tell us about your bathroom project and get an in-home consultation, measurements and a clear written quote from our Langley renovation team.",
      path: "/contact",
      keywords:
        "contact Ideal Bath Renovations, bathroom remodel quote Langley, bathroom estimate Fraser Valley BC",
    }),
  component: Contact,
});
