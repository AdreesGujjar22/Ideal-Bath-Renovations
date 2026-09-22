import { customVanityImg, tileSchluterImg, bathtubReplaceImg } from "../assets/images";

export interface LocalProject {
  title: string;
  neighborhood: string;
  description: string;
  scope: string;
  image: string;
}

export interface ServiceAreaItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  mapQuery: string;
  mapEmbedUrl: string;
  googleMapsLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  addressDisplay: string;
  hqNote?: string;
  populationServed?: string;
  description: string;
  overviewText: string;
  neighborhoods: string[];
  localHighlights: {
    title: string;
    desc: string;
  }[];
  localProjects: LocalProject[];
  localFaqs: {
    question: string;
    answer: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    neighborhood: string;
    rating: number;
    projectType: string;
  };
}

export const serviceAreasData: ServiceAreaItem[] = [
  {
    id: "langley-twp",
    slug: "langley-twp",
    name: "Langley Twp, BC",
    shortName: "Langley Twp",
    badge: "Home Base HQ",
    headline: "Premier Bathroom Remodeling in Langley Twp, BC",
    subheadline:
      "Your Trusted Local Contractor for Tub-to-Shower Conversions, Curbless Walk-In Showers, Custom Vanities & Full Master Ensuites",
    metaTitle: "Bathroom Remodeler in Langley Twp, BC | Ideal Bath",
    metaDescription:
      "Langley's trusted bathroom remodeler. Tub-to-shower conversions, curbless walk-in showers, custom vanities & tile. Free quotes — call today!",
    keywords:
      "bathroom remodeling Langley, bathroom renovation Langley Twp, tub-to-shower conversion BC, curbless walk-in shower, bathroom contractor Fraser Valley, Willoughby Heights bathroom remodel",
    mapQuery: "20819+78B+Avenue,+Langley+Twp,+BC+V2Y+0A1",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=20819%2078B%20Ave,%20Langley%20Twp,%20BC%20V2Y%200A1,%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/AyGKysqniA1hfoGJA",
    coordinates: {
      lat: 49.1458,
      lng: -122.6586,
    },
    addressDisplay: "Based at 20819 78B Avenue, Langley Township, BC",
    hqNote: "Based at 20819 78B Avenue, Langley Township, BC",
    populationServed: "140,000+ residents across Langley Township & City",
    description:
      "Our Langley team handles bathroom remodels, shower conversions, tile, and vanities across Langley Township, Surrey, Abbotsford, and the Fraser Valley.",
    overviewText:
      "Our Langley team can replace an old tub, plan a curbless shower, or install a double vanity. We coordinate the renovation from permits and plumbing through waterproofing and finishes.",
    neighborhoods: [
      "Willoughby Heights",
      "Walnut Grove",
      "Fort Langley",
      "Murrayville",
      "Brookswood",
      "Aldergrove",
      "Milner",
      "Langley City",
      "Yorkson",
      "Routledge",
    ],
    localHighlights: [
      {
        title: "Fast Local Response Times",
        desc: "Our Langley base makes in-home estimates and local project coordination straightforward.",
      },
      {
        title: "Schluter® Certified Waterproofing",
        desc: "Shower projects use Schluter-KERDI membranes and a 24-hour flood test before tile installation.",
      },
      {
        title: "Transparent, Fixed-Price Quotes",
        desc: "Itemized written contracts outline fixtures, tile allowances, and project milestones.",
      },
      {
        title: "Comprehensive Workmanship Warranty",
        desc: "Warranty coverage applies to the plumbing, waterproofing, and tile work described in your agreement.",
      },
    ],
    localProjects: [
      {
        title: "Willoughby Heights Master Ensuite Remodel",
        neighborhood: "Willoughby Heights, Langley Twp",
        description:
          "Converted a dated fiberglass tub/shower combo into a spa-inspired walk-in shower with 10mm frameless glass, dual showerheads, and custom white oak double vanity.",
        scope: "Full Gut, Schluter Waterproofing, Custom Vanity, Heated Floor",
        image:
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Walnut Grove Curbless Shower & Aging-in-Place Upgrade",
        neighborhood: "Walnut Grove, Langley Twp",
        description:
          "Engineered a zero-threshold curbless shower with linear trench drainage, built-in quartz bench, concealed grab bars, and comfort-height vanity.",
        scope: "Curbless Shower, Linear Drain, Safety Blocking, Slip-Resistant Tile",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Fort Langley Freestanding Tub & Porcelain Tile Suite",
        neighborhood: "Fort Langley, Langley Twp",
        description:
          "Installed an elegant oval acrylic freestanding soaking tub with floor-mounted brass faucet and 24x48 large-format Italian porcelain wall tiles.",
        scope: "Freestanding Tub, Floor Warming, Large Format Tile, Custom Lighting",
        image: bathtubReplaceImg,
      },
    ],
    localFaqs: [
      {
        question: "How quickly can you start a bathroom remodel in Langley Twp?",
        answer:
          "We typically conduct in-home consultations within 48–72 hours of your initial request. Once materials are finalized and ordered, project work can usually begin within 2 to 3 weeks.",
      },
      {
        question: "Do you pull Township of Langley plumbing and electrical permits?",
        answer:
          "Yes. Our licensed red-seal plumbers and certified electricians pull all necessary municipal permits and arrange inspections to ensure 100% BC Building Code compliance.",
      },
      {
        question: "Can I view samples or visit previous projects in Langley?",
        answer:
          "Yes! We bring tile, quartz, and fixture sample boards directly to your in-home consultation, and we can share photo galleries from recent projects in Willoughby, Walnut Grove, and Fort Langley.",
      },
    ],
    testimonial: {
      quote:
        "Ideal Bath Renovations transformed our cramped 1990s master bathroom in Walnut Grove into a bright, modern retreat. The curbless shower and heated floors are incredible, and they finished exactly on schedule!",
      author: "David & Sarah M.",
      neighborhood: "Walnut Grove, Langley Twp",
      rating: 5,
      projectType: "Full Master Ensuite Renovation",
    },
  },
  {
    id: "surrey",
    slug: "surrey",
    name: "Surrey, BC",
    shortName: "Surrey",
    badge: "Neighboring Community",
    headline: "Expert Bathroom Renovation Services in Surrey, BC",
    subheadline:
      "Transforming Homes Across South Surrey, Fleetwood, Clayton Heights, Cloverdale & Morgan Creek",
    metaTitle: "Bathroom Remodeling in Surrey, BC | Ideal Bath Renovations",
    metaDescription:
      "Top-rated bathroom remodeling in Surrey, BC. Full renovations, tub-to-shower conversions, heated floors, and custom vanities. Get your free estimate today!",
    keywords:
      "bathroom remodeling Surrey BC, bathroom renovation South Surrey, tub-to-shower conversion Surrey, walk-in shower Clayton Heights, bathroom contractor Cloverdale",
    mapQuery: "Surrey,+BC,+Canada",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Surrey,%20BC,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/AyGKysqniA1hfoGJA",
    coordinates: {
      lat: 49.1913,
      lng: -122.849,
    },
    addressDisplay: "Based at 20819 78B Avenue, Langley Township, BC — Serving Surrey & Fraser Valley",
    hqNote: "Dispatched from our Langley Township HQ to Surrey Communities",
    populationServed: "Over 600,000 residents across South Surrey, Clayton & Fleetwood",
    description:
      "From our Langley Township base, we renovate bathrooms across Surrey, including South Surrey, Fleetwood, Clayton Heights, and Cloverdale.",
    overviewText:
      "We update builder-grade bathrooms, improve accessibility, and plan layouts for Surrey homes, townhomes, and condos.",
    neighborhoods: [
      "South Surrey",
      "Clayton Heights",
      "Fleetwood",
      "Cloverdale",
      "Morgan Creek",
      "Grandview Heights",
      "Guildford",
      "Newton",
      "Fraser Heights",
      "Ocean Park",
    ],
    localHighlights: [
      {
        title: "Seamless Project Coordination",
        desc: "We coordinate materials and work requirements for Surrey homes, townhomes, and strata properties.",
      },
      {
        title: "Strata-Compliant Renovation Protocols",
        desc: "We can provide the documentation and work-hour coordination required by strata properties.",
      },
      {
        title: "High-End Tile & Custom Cabinetry",
        desc: "Choose from large-format porcelain, mosaics, quartz countertops, and moisture-resistant vanities.",
      },
      {
        title: "Dedicated Project Manager",
        desc: "One point of contact keeps you updated as the project moves forward.",
      },
    ],
    localProjects: [
      {
        title: "South Surrey Spa Ensuite Transformation",
        neighborhood: "South Surrey, BC",
        description:
          "Designed and built an open-concept ensuite featuring a standalone soaker tub, floor-to-ceiling porcelain slab walls, and dual rain showerheads.",
        scope: "Master Remodel, Porcelain Slab Tiling, Custom Quartz Vanity",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Clayton Heights Tub-to-Shower Conversion",
        neighborhood: "Clayton Heights, Surrey, BC",
        description:
          "Removed an awkward alcove tub and installed a sleek walk-in shower with matte black hardware, linear drain, and illuminated shampoo niche.",
        scope: "Tub-to-Shower, Schluter Waterproofing, Matte Black Fixtures",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Morgan Creek Custom Vanity & Heated Tile Floor",
        neighborhood: "Morgan Creek, Surrey, BC",
        description:
          "Installed a 72-inch floating walnut vanity with dual undermount sinks, LED backlit mirrors, and Schluter DITRA-HEAT heated floor system.",
        scope: "Custom Millwork, Wi-Fi Thermostat Floor Warming, Electrical Upgrades",
        image: customVanityImg,
      },
    ],
    localFaqs: [
      {
        question: "Do you handle renovations in Surrey strata townhomes and condos?",
        answer:
          "Yes. We are experienced with strata requirements, including noise bylaws, elevator bookings, contractor insurance certificates, and floor protection in common areas.",
      },
      {
        question: "What is the typical cost of a bathroom renovation in Surrey?",
        answer:
          "Costs vary based on size and finish level. Standard tub-to-shower conversions typically range from $8,500 to $15,000, while full master ensuite renovations average $18,000 to $35,000+. We provide exact written quotes.",
      },
    ],
    testimonial: {
      quote:
        "The team at Ideal Bath did an outstanding job converting our tub into a walk-in shower in South Surrey. Clean, polite, punctual, and the tile work is flawless.",
      author: "Elena & Marcus T.",
      neighborhood: "South Surrey, BC",
      rating: 5,
      projectType: "Tub-to-Shower Conversion",
    },
  },
  {
    id: "abbotsford",
    slug: "abbotsford",
    name: "Abbotsford, BC",
    shortName: "Abbotsford",
    badge: "East Fraser Valley",
    headline: "Quality Bathroom Remodeling in Abbotsford, BC",
    subheadline:
      "Reliable, Licensed Contractors for Modern Bathrooms, Walk-In Showers & Tile Waterproofing",
    metaTitle: "Bathroom Remodeler in Abbotsford, BC | Ideal Bath Renovations",
    metaDescription:
      "Looking for trusted bathroom remodelers in Abbotsford, BC? Ideal Bath specializes in full renovations, walk-in showers, custom tile & heated floors. Free quote!",
    keywords:
      "bathroom remodeling Abbotsford BC, bathroom renovation Abbotsford, walk in shower Abbotsford, bathroom contractor East Fraser Valley, tile installation Abbotsford",
    mapQuery: "Abbotsford,+BC,+Canada",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Abbotsford,%20BC,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/AyGKysqniA1hfoGJA",
    coordinates: {
      lat: 49.0504,
      lng: -122.3045,
    },
    addressDisplay: "Based at 20819 78B Avenue, Langley Township, BC — Serving Abbotsford & Fraser Valley",
    hqNote: "Mobile Renovation Units Dispatched from Langley Township HQ",
    populationServed: "160,000+ residents throughout Abbotsford & Sumas Prairie",
    description:
      "From our Langley Township base, we provide bathroom renovations, tile work, and waterproofing for homes across Abbotsford and the Fraser Valley.",
    overviewText:
      "We update older and newer homes with layout planning, plumbing, moisture repairs, tile, and final fixture installation.",
    neighborhoods: [
      "East Abbotsford",
      "Auguston",
      "Matsqui",
      "Clearbrook",
      "Sumas Mountain",
      "Mill Lake",
      "Townline Hill",
      "Aberdeen",
      "Bradner",
      "Mount Lehman",
    ],
    localHighlights: [],
    localProjects: [
      {
        title: "East Abbotsford Family Bathroom Modernization",
        neighborhood: "East Abbotsford, BC",
        description:
          "Replaced an old acrylic drop-in tub with a deep porcelain alcove bathtub, subway tile surround with herringbone accent niche, and new quartz vanity.",
        scope: "Bathtub Replacement, Custom Tile Surround, Vanity & Fixture Package",
        image: tileSchluterImg,
      },
      {
        title: "Sumas Mountain Luxury Ensuite with Steam Shower",
        neighborhood: "Sumas Mountain, Abbotsford, BC",
        description:
          "Created a custom steam shower with frameless vapor-sealed glass door, bench seat, body sprays, and dual undermount vanity.",
        scope: "Steam Suite, Custom Glass, Heated Porcelain Flooring",
        image:
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      },
    ],
    localFaqs: [
      {
        question: "Do you travel to rural areas in Abbotsford and Bradner?",
        answer:
          "Yes, we regularly service properties throughout rural Abbotsford, Matsqui, Bradner, and Mount Lehman with fully stocked mobile units.",
      },
      {
        question: "Can you assist with low-pressure well water systems in Abbotsford?",
        answer:
          "Our licensed plumbers assess your home's water supply and recommend pressure-balancing valves and thermostatic shower systems optimized for your pressure.",
      },
    ],
    testimonial: {
      quote:
        "We had two bathrooms remodeled simultaneously by Ideal Bath in East Abbotsford. The crew was courteous, tidy, and finished right on the promised timeline.",
      author: "Robert & Karen L.",
      neighborhood: "East Abbotsford, BC",
      rating: 5,
      projectType: "Dual Bathroom Renovation",
    },
  },
  {
    id: "fraser-valley",
    slug: "fraser-valley",
    name: "Fraser Valley, BC",
    shortName: "Fraser Valley",
    badge: "Regional Coverage",
    headline: "Full-Service Bathroom Renovations Across the Fraser Valley",
    subheadline:
      "Serving Langley Twp, Surrey, Abbotsford, and the Wider Fraser Valley",
    metaTitle: "Bathroom Remodeling Contractor Fraser Valley, BC | Ideal Bath",
    metaDescription:
      "Complete bathroom renovation services throughout the Fraser Valley. Serving White Rock, Maple Ridge, Mission, Chilliwack & Langley. Free in-home estimates!",
    keywords:
      "bathroom remodeling Fraser Valley BC, bathroom renovation White Rock, walk in shower Maple Ridge, bathroom contractor Mission BC, Chilliwack bathroom remodeler",
    mapQuery: "Fraser+Valley,+BC,+Canada",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Fraser%20Valley,%20BC,%20Canada&t=&z=11&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/AyGKysqniA1hfoGJA",
    coordinates: {
      lat: 49.1666,
      lng: -122.3,
    },
    addressDisplay: "Based at 20819 78B Avenue, Langley Township, BC — Serving Fraser Valley",
    hqNote: "Based at 20819 78B Avenue, Langley Township, BC",
    populationServed: "Over 350,000 homeowners across the Fraser Valley region",
    description:
      "We provide bathroom renovations across Langley Township, Surrey, Abbotsford, and the wider Fraser Valley.",
    overviewText:
      "We coordinate design, demolition, rough-ins, waterproofing, tile, and fixtures as one renovation project.",
    neighborhoods: [
      "White Rock",
      "Maple Ridge",
      "Mission",
      "Chilliwack",
      "Aldergrove",
      "Pitt Meadows",
      "Silverdale",
      "Sardis",
      "Vedder Crossing",
      "Yarrow",
    ],
    localHighlights: [
      {
        title: "Regional Expertise & Reliability",
        desc: "We work across the local municipalities and coordinate the requirements for each project.",
      },
      {
        title: "Turnkey Project Management",
        desc: "We coordinate trades, inspections, waste removal, and material deliveries for the project.",
      },
      {
        title: "Premium Materials & Warranties",
        desc: "We help you select plumbing and tile materials that suit the project and your budget.",
      },
      {
        title: "Free In-Home Estimates Across the Valley",
        desc: "We bring planning tools and material samples to the in-home estimate.",
      },
    ],
    localProjects: [
      {
        title: "White Rock Coastal Walk-In Shower Remodel",
        neighborhood: "White Rock, BC",
        description:
          "Created a coastal-inspired walk-in shower with sea glass mosaic niches, polished nickel fixtures, and curbless entry tile.",
        scope: "Curbless Shower, Custom Glass, Moisture-Resistant Lighting",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Maple Ridge Master Bathroom Gut & Redesign",
        neighborhood: "Maple Ridge, BC",
        description:
          "Full tear-out and reconfiguration including freestanding tub, custom vanity with quartz top, and heated porcelain flooring.",
        scope: "Full Renovation, Plumbing Relocation, In-Floor Heating",
        image:
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      },
    ],
    localFaqs: [
      {
        question: "Do you charge extra travel fees for Chilliwack or Mission projects?",
        answer:
          "No. Our in-home consultations and quotes are 100% free with transparent, fixed pricing regardless of where your home is located in the Fraser Valley.",
      },
      {
        question: "How do you handle debris disposal during renovations?",
        answer:
          "We handle all demolition waste removal daily using clean, enclosed disposal trailers and protect your driveway and landscaping.",
      },
    ],
    testimonial: {
      quote:
        "Ideal Bath renovated our master bathroom in White Rock and we couldn't be happier. Professional, attentive to every detail, and the results exceeded our expectations.",
      author: "Catherine & Paul H.",
      neighborhood: "White Rock, BC",
      rating: 5,
      projectType: "Full Master Bathroom Remodel",
    },
  },
];

export const getServiceAreaBySlug = (slug: string): ServiceAreaItem | undefined => {
  const normalized = slug.toLowerCase().trim();
  if (normalized === "langley" || normalized === "langley-township" || normalized === "langley-twp") {
    return serviceAreasData.find((a) => a.slug === "langley-twp");
  }
  return serviceAreasData.find((a) => a.slug === normalized);
};
