import { createFileRoute } from "@tanstack/react-router";
import ServiceDetail from "../pages/ServiceDetail";
import { getServiceBySlug } from "../data/ServicesDetailData";
import { buildHead } from "../lib/seo";

const serviceSeoTitles: Record<string, string> = {
  "bathroom-remodeling": "Bathroom Remodeling in Langley BC | Ideal Bath Renovations",
  "bathroom-renovation": "Bathroom Renovation in Langley BC | Ideal Bath Renovations",
  "bathroom-repair": "Bathroom Repair in Langley BC | Ideal Bath Renovations",
  "bathroom-replacement": "Bathroom Replacement in Langley BC | Ideal Bath Renovations",
  "bathroom-installation": "Bathroom Installation in Langley BC | Ideal Bath Renovations",
  "bathroom-design": "Bathroom Design in Langley BC | Ideal Bath Renovations",
  "bathroom-upgrades": "Bathroom Upgrades in Langley BC | Ideal Bath Renovations",
  "bathroom-restoration": "Bathroom Restoration in Langley BC | Ideal Bath Renovations",
  "shower-remodeling": "Shower Remodeling in Langley BC | Ideal Bath Renovations",
  "bathtub-replacement": "Bathtub Replacement in Langley BC | Ideal Bath Renovations",
  "bathroom-tile-installation": "Bathroom Tile in Langley BC | Ideal Bath Renovations",
  "bathroom-vanity-installation": "Bathroom Vanity in Langley BC | Ideal Bath Renovations",
};

const serviceSeoDescriptions: Record<string, string> = {
  "bathroom-remodeling":
    "Complete bathroom remodeling in Langley with practical layouts, waterproofing, tile, fixtures and one local crew managing your project from start to finish.",
  "bathroom-renovation":
    "Bathroom renovation in Langley updates outdated spaces with new tile, vanities, fixtures and efficient layouts. Request a written quote from our local team.",
  "bathroom-repair":
    "Bathroom repair in Langley fixes shower leaks, damaged drywall, broken tile and faulty plumbing with careful work and a clear quote before repairs begin.",
  "bathroom-replacement":
    "Bathroom replacement in Langley refreshes worn tubs, showers, vanities and toilets with durable fixtures, tidy installation and a clear written estimate.",
  "bathroom-installation":
    "New bathroom installation in Langley for basement suites, primary suites and additions, with plumbing, electrical, tile and fixtures handled together. Get a quote.",
  "bathroom-design":
    "Bathroom design in Langley brings practical layouts, finish guidance and smart storage planning together before construction. Book an in-home consultation today.",
  "bathroom-upgrades":
    "Bathroom upgrades in Langley add better fixtures, lighting, storage and hardware with minimal disruption. Get a clear quote for your renovation project.",
  "bathroom-restoration":
    "Bathroom restoration in Langley repairs water damage, mold, subfloors and waterproofing with careful rebuilding. Request an assessment from our local team.",
  "shower-remodeling":
    "Shower remodeling in Langley creates walk-in showers, tub conversions, niches and frameless glass enclosures. Get a clear quote from our renovation team.",
  "bathtub-replacement":
    "Bathtub replacement in Langley delivers modern freestanding or alcove tubs with practical planning, durable installation and a clear written estimate.",
  "bathroom-tile-installation":
    "Bathroom tile in Langley includes precise porcelain installation, waterproofing, heated floors and durable finishes. View options and request a clear quote.",
  "bathroom-vanity-installation":
    "Bathroom vanities in Langley combine custom cabinetry, quartz counters, LED mirrors and smart storage. Explore options and request a clear written estimate.",
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    const name = service?.title ?? "Bathroom Services";
    return buildHead({
      title: serviceSeoTitles[params.slug] ?? `${name} in Langley BC | Ideal Bath Renovations`,
      description:
        serviceSeoDescriptions[params.slug] ??
        "Bathroom renovation services for Langley and Fraser Valley homeowners, with a clear written quote before work starts.",
      path: `/services/${params.slug}`,
      ...(service?.heroImage ? { image: service.heroImage } : {}),
      ogType: "article",
    });
  },
  component: ServiceDetail,
});
