/**
 * Central SEO + on-page copy for the whole site.
 * Rules used here:
 *  - Meta title  : "<main keyword> | Ideal Bath Renovations"  (max 60 characters)
 *  - Meta desc.  : max 159 characters, includes keyword + area + business name
 *  - One H1 per page = main keyword (service/area + Langley / area, BC)
 *  - Every FAQ block is written for its own page only (no duplicated answers)
 */

export const BUSINESS_NAME = "Ideal Bath Renovations";
export const SITE_URL = "https://www.idealbathrenovations.ca";

export const buildMetaTitle = (keyword: string): string => `${keyword} | ${BUSINESS_NAME}`;

export interface SeoFaq {
  question: string;
  answer: string;
}

/* ------------------------------------------------------------------ */
/* HOME                                                                */
/* ------------------------------------------------------------------ */

export const homeSeo = {
  keyword: "Bathroom Remodeler in Langley, BC",
  metaTitle: buildMetaTitle("Bathroom Remodeler in Langley, BC"),
  metaDescription:
    "Need a bathroom remodeler in Langley, BC? Ideal Bath Renovations builds bathroom renovations, walk-in showers, tile and vanities. Request a free quote today.",
  h1: "Modern Bathroom Remodeler in Langley, BC",
  badge: "Bathroom Contractor in Langley Township, BC",
  intro:
    "Ideal Bath Renovations is a bathroom remodeler in Langley, BC. We plan and build full bathroom renovations, walk-in showers, tub-to-shower conversions, and custom vanities for homes in Langley Township, Surrey, Abbotsford, and the Fraser Valley.",
  servicesHeading: "Bathroom Renovation Services in Langley, BC",
  servicesIntro:
    "From a tired powder room to a full master ensuite, our Langley bathroom contractors handle the design, plumbing, waterproofing, tile, and finishing in one project. Pick the service closest to what you need.",
  areasHeading: "Bathroom Remodeler Serving Langley, Surrey & Abbotsford",
  areasIntro:
    "Our shop is in Langley Township, so most bathroom remodeling visits in Langley, Surrey, Abbotsford, and the wider Fraser Valley are short drives from our door.",
  faqHeading: "Bathroom Remodeler FAQs for Langley, BC Homeowners",
  faqIntro: "Quick answers about hiring a bathroom remodeler in Langley, BC.",
  faqs: [
    {
      question: "How long does a bathroom remodel take in Langley, BC?",
      answer:
        "A tub-to-shower conversion usually takes three to five working days. A full bathroom renovation with new layout, tile, and vanity runs about two to three weeks. We order tile, glass, and the vanity before demolition so the crew is not waiting on deliveries.",
    },
    {
      question: "Do I need a permit for a bathroom renovation in Langley Township?",
      answer:
        "Swapping fixtures in the same spot normally does not need one. Moving drains, adding electrical circuits, or changing walls does, and the permit comes from the Township of Langley or the City of Langley depending on your address. We handle the application and book the inspections.",
    },
    {
      question: "Can I keep my current layout to keep the remodel affordable?",
      answer:
        "Yes. Leaving the toilet, vanity, and shower in their current positions avoids new drain runs and subfloor work, so more of the budget goes into tile, glass, and fixtures you will see every day.",
    },
    {
      question: "Do you handle plumbing, electrical, and tile with one team?",
      answer:
        "We manage the whole job: demolition, licensed plumbing and electrical, waterproofing, tile setting, and the final walkthrough. You deal with one company instead of coordinating several trades.",
    },
    {
      question: "How do I book a free estimate with your Langley bathroom remodeler?",
      answer:
        "Call (672) 273-0434 or send the quote form on this page. We visit your home, measure the bathroom, talk through your ideas, and send a written estimate with no obligation.",
    },
  ] as SeoFaq[],
  ctaHeading: "Get a Free Bathroom Remodeling Quote in Langley, BC",
  ctaIntro:
    "Tell us about your bathroom and we will schedule a free in-home visit with a written estimate.",
};

/* ------------------------------------------------------------------ */
/* SERVICES  (keyed by slug)                                           */
/* ------------------------------------------------------------------ */

export interface ServiceSeo {
  /** keyword used in the <title>. Kept short enough for 60 chars with the brand. */
  titleKeyword: string;
  metaDescription: string;
  h1: string;
  intro: string;
  overviewHeading: string;
  paragraphs: string[];
  faqHeading: string;
  faqs: SeoFaq[];
}

export const serviceSeo: Record<string, ServiceSeo> = {
  "bathroom-remodeling": {
    titleKeyword: "Bathroom Remodeling in Langley, BC",
    metaDescription:
      "Bathroom remodeling in Langley, BC from Ideal Bath Renovations: new layouts, showers, tile, and vanities built by one team. Book your free in-home estimate.",
    h1: "Bathroom Remodeling in Langley, BC",
    intro:
      "Full bathroom remodeling in Langley, BC, from the first layout sketch to the last coat of caulk, handled by a single local crew.",
    overviewHeading: "Bathroom Remodeling in Langley, BC: Renovation, Repair & Replacement",
    paragraphs: [
      "Ideal Bath Renovations provides bathroom remodeling in Langley, BC for homeowners who want more than a cosmetic refresh. A full remodel brings together layout changes, bathroom renovation work, fixture replacement, and new installation under one plan, so the shower, vanity, tile, and lighting all work as a set.",
      "Many projects begin as a single problem, such as a leaking tub, damaged flooring, or a vanity that no longer fits. Once we open the walls, bathroom repair and replacement often become part of a larger remodel, and we price that scope clearly before demolition starts.",
      "Our Langley bathroom contractors handle master ensuites, family bathrooms, and basement baths. We plan the layout, install plumbing and electrical, waterproof the wet areas, and finish with tile and fixtures, with one project lead keeping the schedule on track.",
    ],
    faqHeading: "Bathroom Remodeling Questions in Langley",
    faqs: [
      {
        question: "What does a full bathroom remodel include?",
        answer:
          "It covers demolition, any plumbing or electrical changes, waterproofing, new tile, a vanity and sink, toilet, shower or tub, lighting, and paint. Your written scope lists every item so nothing is assumed.",
      },
      {
        question: "Can you remodel a bathroom while we live in the house?",
        answer:
          "Most families do. We seal off the work area, protect the floors on the path to the bathroom, and clean up at the end of each day. Plan on using another bathroom for about two to three weeks.",
      },
      {
        question: "Who picks the tile and fixtures?",
        answer:
          "You do, with guidance from us. We help narrow the choices for your budget and confirm that everything fits the layout before we order it.",
      },
    ],
  },

  "bathroom-renovation": {
    titleKeyword: "Bathroom Renovation in Langley, BC",
    metaDescription:
      "Bathroom renovation in Langley, BC by Ideal Bath Renovations. Update old tile, tubs, vanities, and fixtures with careful workmanship. Call for a free estimate.",
    h1: "Bathroom Renovation in Langley, BC",
    intro:
      "Bathroom renovation in Langley, BC for homes with worn finishes, awkward layouts, or fixtures that have simply reached the end of their life.",
    overviewHeading: "Bathroom Renovation in Langley, BC: Update Tile, Tubs & Vanities",
    paragraphs: [
      "If your bathroom still has worn tile, a chipped tub, or an outdated vanity, bathroom renovation in Langley, BC is a practical way to bring it up to date without moving walls. We renovate within your existing footprint, then add bathroom upgrades where they matter most.",
      "A typical renovation includes new tile and flooring, a replacement vanity and sink, a new toilet, updated lighting and ventilation, and a refreshed shower or bathtub installation. Where a layout change would improve the room, we show it as an option so you can compare remodel and renovation costs.",
      "Ideal Bath Renovations coordinates every trade for you, from demolition to final cleanup. You get a written scope, a realistic timeline, and a finished bathroom that suits how your household uses the space.",
    ],
    faqHeading: "Bathroom Renovation Questions in Langley",
    faqs: [
      {
        question: "What is the difference between a bathroom renovation and a remodel?",
        answer:
          "A renovation usually updates finishes and fixtures in the existing layout. A remodel changes the layout itself, such as moving a shower or enlarging the vanity wall. Many projects fall somewhere in between and we price them that way.",
      },
      {
        question: "How soon can a renovation start after I approve the quote?",
        answer:
          "Start dates depend on how fast tile, vanity, and glass arrive. We confirm lead times when you sign so you know the real date instead of a guess.",
      },
      {
        question: "Will my older Langley home have surprises behind the walls?",
        answer:
          "Sometimes, such as rot around a tub or outdated drain pipe. We inspect what we can before quoting and explain any hidden repair in writing before it is added to the job.",
      },
    ],
  },

  "bathroom-repair": {
    titleKeyword: "Bathroom Repair in Langley, BC",
    metaDescription:
      "Bathroom repair in Langley, BC from Ideal Bath Renovations. We fix leaks, cracked tile, failed grout, and loose fixtures. Request a repair visit today.",
    h1: "Bathroom Repair in Langley, BC",
    intro:
      "Fast, tidy bathroom repair in Langley, BC for leaks, cracked tile, failing grout, and fixtures that no longer work the way they should.",
    overviewHeading: "Bathroom Repair in Langley, BC: Leaks, Tile, Grout & Fixtures",
    paragraphs: [
      "Ideal Bath Renovations offers bathroom repair in Langley, BC for the problems that tend to get worse when ignored: dripping valves, leaking drains, cracked tile, failed grout, and loose toilets. Fixing the real source early often avoids bathroom restoration later.",
      "We start by finding where the water is going, then repair the tile, caulking, valve, or drain that is responsible. If a fixture is too far gone, we can handle bathroom replacement and installation of a new one in the same visit.",
      "For damage that has spread behind the wall or under the floor, we explain whether a repair is enough or whether a renovation is the better long-term choice. You decide with clear information, not pressure.",
    ],
    faqHeading: "Bathroom Repair Questions in Langley",
    faqs: [
      {
        question: "How do I know if a leak is coming from the shower or the plumbing?",
        answer:
          "Staining below the bathroom, a musty smell, or soft flooring beside the tub are common signs. We test the valve, drain, and tile joints separately to find which one is responsible before we repair anything.",
      },
      {
        question: "Can cracked bathroom tile be replaced without redoing the whole wall?",
        answer:
          "Often yes. We lift the damaged pieces, check the backing, and set matching tile. If the tile is discontinued we look for the closest match or suggest an accent border.",
      },
      {
        question: "Is regrouting worth it or should I replace the tile?",
        answer:
          "If the tile is sound and only the grout is stained or crumbling, regrouting and sealing is a low-cost way to refresh the shower. We will tell you honestly if the tile itself has failed.",
      },
    ],
  },

  "bathroom-replacement": {
    titleKeyword: "Bathroom Replacement in Langley, BC",
    metaDescription:
      "Bathroom replacement in Langley, BC by Ideal Bath Renovations. Swap old tubs, toilets, vanities, and fixtures with clean installs. Request a free estimate.",
    h1: "Bathroom Replacement in Langley, BC",
    intro:
      "Bathroom replacement in Langley, BC for tubs, toilets, vanities, and fixtures that are worn out, leaking, or simply out of style.",
    overviewHeading: "Bathroom Replacement in Langley, BC: Toilets, Tubs, Vanities & Faucets",
    paragraphs: [
      "Bathroom replacement in Langley, BC covers the fixtures that wear out first: toilets, vanities, sinks, faucets, shower valves, and bathtubs. Ideal Bath Renovations removes the old piece, repairs the surrounding surface, and completes the new installation so everything seals and drains properly.",
      "Replacing an item is often cheaper than a full bathroom remodel, and it fixes recurring issues that a bathroom repair cannot, such as a cracked tub or a corroded shower valve. If you decide to go further, the work can lead straight into a renovation or upgrade.",
      "We confirm sizes, rough-in measurements, and finishes before ordering, so the new fixture fits the first time and matches the rest of the room.",
    ],
    faqHeading: "Bathroom Replacement Questions in Langley",
    faqs: [
      {
        question: "Can I replace just one fixture, such as the vanity or the toilet?",
        answer:
          "Yes. Single-item replacements are common. We make sure the new piece matches your plumbing and that the floor or wall around it is repaired when the old one comes out.",
      },
      {
        question: "Should I replace my old shower valve at the same time as the faucet?",
        answer:
          "If the wall is open or the valve is original and corroded, it is a good time to replace it. Doing so later means opening finished tile again.",
      },
      {
        question: "Do you remove and dispose of the old fixtures?",
        answer:
          "Yes. Removal and disposal are part of the job, and we leave the bathroom swept and ready to use.",
      },
    ],
  },

  "bathroom-installation": {
    titleKeyword: "Bathroom Installation Langley, BC",
    metaDescription:
      "Bathroom installation in Langley, BC from Ideal Bath Renovations: new showers, tubs, vanities, and tile set to plan. Contact us for a free installation quote.",
    h1: "Bathroom Installation in Langley, BC",
    intro:
      "Bathroom installation in Langley, BC for new builds, basement bathrooms, additions, and finished rooms that need fixtures set correctly.",
    overviewHeading: "Bathroom Installation in Langley, BC: New Baths, Showers & Fixtures",
    paragraphs: [
      "Ideal Bath Renovations handles bathroom installation in Langley, BC for basement bathrooms, additions, and rooms that need new fixtures set to code. We coordinate rough-in plumbing, venting, wiring, waterproofing, and the final fixture installation in the right order.",
      "Installation work often overlaps with other services. A new shower installation may follow tile work, a vanity installation may come with bathroom replacement of the old cabinet, and a full new bathroom is effectively a custom remodel built from scratch.",
      "We follow the BC Building Code and arrange permits and inspections with the Township of Langley or the City of Langley when required, so the finished bathroom is safe and documented.",
    ],
    faqHeading: "Bathroom Installation Questions in Langley",
    faqs: [
      {
        question: "Can you add a new bathroom in a basement in Langley?",
        answer:
          "Often, yes. The main question is where the drain line is relative to the new fixtures. We check that during the site visit and tell you if a pump or extra work is needed.",
      },
      {
        question: "What is the difference between rough-in and finish installation?",
        answer:
          "Rough-in is the hidden work: drain, supply lines, venting, and wiring. Finish installation is everything visible, such as the toilet, vanity, faucets, and lighting.",
      },
      {
        question: "Will the work be inspected?",
        answer:
          "New plumbing and electrical work normally is. We pull the permits and schedule the inspections so you have documentation if you sell the home.",
      },
    ],
  },

  "bathroom-design": {
    titleKeyword: "Bathroom Design in Langley, BC",
    metaDescription:
      "Bathroom design in Langley, BC with Ideal Bath Renovations. Get a 3D layout, finish selections, and storage planning before work begins. Book a consultation.",
    h1: "Bathroom Design in Langley, BC",
    intro:
      "Bathroom design in Langley, BC that gives you a clear layout, finish selections, and a fixed scope before demolition begins.",
    overviewHeading: "Bathroom Design in Langley, BC: Layout, 3D Plans & Finish Selection",
    paragraphs: [
      "Bathroom design in Langley, BC from Ideal Bath Renovations gives you a clear plan before any demolition begins. We measure the space, discuss how you use it, and draw layouts that make sense for bathroom remodeling or a smaller bathroom renovation.",
      "Our 3D visuals show how the vanity, shower, tub, and storage fit together, which makes decisions about glass, tile, lighting, and installation easier. You can compare options such as a walk-in shower versus a tub, or a single versus a double vanity.",
      "The result is a finish schedule, fixture list, and written scope that feed directly into your quote. That means fewer changes mid-project and a more accurate price.",
    ],
    faqHeading: "Bathroom Design Questions in Langley",
    faqs: [
      {
        question: "Do I have to hire you to build the bathroom if you design it?",
        answer:
          "Our design service is built to lead into the renovation, but we will talk through your options if you want to take the drawings elsewhere.",
      },
      {
        question: "How do you make a small bathroom feel larger?",
        answer:
          "Clear glass, a wall-hung or slim vanity, light-coloured large-format tile, and good lighting do most of the work. We test these ideas in the 3D layout first.",
      },
      {
        question: "What do I need to bring to the first design meeting?",
        answer:
          "Photos of bathrooms you like, a list of what frustrates you about the current one, and a rough budget. Measurements are something we take ourselves.",
      },
    ],
  },

  "bathroom-upgrades": {
    titleKeyword: "Bathroom Upgrades in Langley, BC",
    metaDescription:
      "Bathroom upgrades in Langley, BC by Ideal Bath Renovations. Add LED mirrors, quiet fans, new fixtures, and hardware without a full remodel. Get a free quote.",
    h1: "Bathroom Upgrades in Langley, BC",
    intro:
      "Bathroom upgrades in Langley, BC that improve comfort and style without the cost or disruption of a complete remodel.",
    overviewHeading: "Bathroom Upgrades in Langley, BC: Fixtures, Lighting & Ventilation",
    paragraphs: [
      "Bathroom upgrades in Langley, BC are a smart option when your layout works but the room feels dated. Ideal Bath Renovations installs LED mirrors, quiet exhaust fans, new faucets, thermostatic shower valves, wet-rated lighting, and modern hardware, usually within one to three days.",
      "Many upgrades are really small bathroom replacement and installation jobs, so they cost far less than a full bathroom remodeling project while still changing how the room looks and feels.",
      "We will tell you which upgrades give the best return and which ones are better saved for a future renovation, so you spend on what you will notice every day.",
    ],
    faqHeading: "Bathroom Upgrades Questions in Langley",
    faqs: [
      {
        question: "Which bathroom upgrade makes the biggest difference?",
        answer:
          "Lighting and ventilation are the most noticeable. A quiet fan prevents mildew and a good mirror with even lighting changes the room immediately.",
      },
      {
        question: "Can upgrades be done in a single day?",
        answer:
          "Many can, including mirrors, lighting, faucets, and fans. Larger items like a new shower valve may need a second day.",
      },
      {
        question: "Will new fixtures match my existing tile and finishes?",
        answer:
          "We recommend finishes that work with what you already have and show samples before ordering.",
      },
    ],
  },

  "bathroom-restoration": {
    titleKeyword: "Bathroom Restoration in Langley, BC",
    metaDescription:
      "Bathroom restoration in Langley, BC by Ideal Bath Renovations. We repair water damage, mold, soft subfloors, and failed waterproofing. Request an assessment.",
    h1: "Bathroom Restoration in Langley, BC",
    intro:
      "Bathroom restoration in Langley, BC for rooms damaged by leaks, moisture, mold, or failed waterproofing.",
    overviewHeading: "Bathroom Restoration in Langley, BC: Water Damage, Mold & Subfloor Repair",
    paragraphs: [
      "Bathroom restoration in Langley, BC addresses damage that bathroom repair alone cannot fix: soft subfloors, moldy drywall, failed shower pans, and moisture trapped behind tile. Ideal Bath Renovations finds the cause first so the problem does not come back.",
      "We remove damaged material, treat the area, and rebuild with proper waterproofing. Once the structure is sound, we move into renovation, replacement, and installation of tile, fixtures, and finishes.",
      "If you are dealing with an insurance claim, we provide a written description of the damage and the work required, so your provider has the detail it needs.",
    ],
    faqHeading: "Bathroom Restoration Questions in Langley",
    faqs: [
      {
        question: "What are the signs I need bathroom restoration rather than a repair?",
        answer:
          "Spongy flooring, tile that moves, persistent musty odour, or dark staining on walls and ceilings below the bathroom suggest moisture has spread past the surface.",
      },
      {
        question: "Do you deal with insurance claims?",
        answer:
          "We provide a written description of the damage and the scope of repair, which you can submit to your insurer. The claim itself stays between you and your provider.",
      },
      {
        question: "How do you stop mold from coming back?",
        answer:
          "By removing the damaged material, fixing the leak or ventilation problem, and rebuilding with a continuous waterproof layer. Cleaning the surface alone does not last.",
      },
    ],
  },

  "shower-remodeling": {
    titleKeyword: "Shower Remodeling in Langley, BC",
    metaDescription:
      "Shower remodeling in Langley, BC from Ideal Bath Renovations. Walk-in showers, tub-to-shower conversions, and curbless designs. Request your free quote today.",
    h1: "Shower Remodeling in Langley, BC",
    intro:
      "Shower remodeling in Langley, BC, including walk-in showers, tub-to-shower conversions, and curbless entries with frameless glass.",
    overviewHeading: "Shower Remodeling in Langley, BC: Walk-In Showers & Tub Conversions",
    paragraphs: [
      "Ideal Bath Renovations provides shower remodeling in Langley, BC, including walk-in showers, tub-to-shower conversions, and curbless entries. If your fiberglass unit leaks, stains, or is hard to step into, shower replacement is often the best upgrade in the house.",
      "Each shower installation is built from the base up with a sloped waterproof pan, wall membrane, tile, niche, and glass. Most conversions take three to five working days and can be part of a larger bathroom remodeling or renovation project.",
      "We also handle shower repair, regrouting, and valve replacement when a full rebuild is not needed, so you get the right level of work for your budget.",
    ],
    faqHeading: "Shower Remodeling Questions in Langley",
    faqs: [
      {
        question: "How long does a tub-to-shower conversion take?",
        answer:
          "Three to five working days is typical, including demolition, waterproofing, tile, and glass installation. Custom glass can add lead time before the final fitting.",
      },
      {
        question: "Is a curbless shower possible in my home?",
        answer:
          "It depends on the floor structure and drain location. We check the joists during the visit and tell you whether the floor needs to be lowered.",
      },
      {
        question: "Frameless glass or a shower curtain?",
        answer:
          "Frameless glass looks open and is easy to wipe down, but costs more. A curtain suits a tighter budget. We can quote both side by side.",
      },
    ],
  },

  "bathtub-replacement": {
    titleKeyword: "Bathtub Replacement in Langley, BC",
    metaDescription:
      "Bathtub replacement in Langley, BC by Ideal Bath Renovations. Alcove, freestanding, and soaker tubs installed with new plumbing. Get a free estimate today.",
    h1: "Bathtub Replacement in Langley, BC",
    intro:
      "Bathtub replacement in Langley, BC for cracked, stained, or outdated tubs, with alcove, drop-in, and freestanding options.",
    overviewHeading: "Bathtub Replacement in Langley, BC: Tub Installation & Tub-to-Shower Options",
    paragraphs: [
      "Bathtub replacement in Langley, BC from Ideal Bath Renovations removes cracked, stained, or leaking tubs and installs a new alcove, drop-in, or freestanding bathtub with updated plumbing. Most tub installation jobs take one to three days.",
      "If the tub surround is damaged, we include tile repair or replacement, and if you rarely use the tub, we can discuss a tub-to-shower conversion as part of your bathroom renovation.",
      "Every tub is installed on a level, supported base with sealed joints and tested drains, which helps prevent the leaks that lead to bathroom restoration later.",
    ],
    faqHeading: "Bathtub Replacement Questions in Langley",
    faqs: [
      {
        question: "Can the new tub be larger than the old one?",
        answer:
          "Only if the alcove or the room has space. We measure the recess and floor structure before recommending a size.",
      },
      {
        question: "Do I need to replace the tile around the tub?",
        answer:
          "Sometimes. Removing the old tub can damage the surrounding tile, and a new tub rarely matches the old dimensions exactly. We discuss this before starting.",
      },
      {
        question: "Is a freestanding tub heavy for my floor?",
        answer:
          "Filled with water and a bather, it can be. We check the framing and reinforce it if needed.",
      },
    ],
  },

  "bathroom-tile-installation": {
    titleKeyword: "Bathroom Tile Installation Langley",
    metaDescription:
      "Bathroom tile installation in Langley, BC by Ideal Bath Renovations. Porcelain walls, floors, and showers set over proper waterproofing. Request a free quote.",
    h1: "Bathroom Tile Installation in Langley, BC",
    intro:
      "Bathroom tile installation in Langley, BC for floors, shower walls, and feature walls, set over proper waterproofing for a long-lasting finish.",
    overviewHeading: "Bathroom Tile Installation in Langley, BC: Floors, Showers & Waterproofing",
    paragraphs: [
      "Bathroom tile installation in Langley, BC from Ideal Bath Renovations covers floor tile, shower walls, niches, and feature walls. We prepare the surface, apply waterproofing, and set porcelain, ceramic, or natural stone in the pattern you choose.",
      "Tile work is part of nearly every bathroom renovation and remodel, but we also handle standalone jobs such as shower tile replacement, floor retiling, and tile repair after a leak. Heated floors can be added during installation.",
      "Careful prep and clean trim details are what make a tiled bathroom last. We level floors, protect corners, and finish with grout and sealant matched to the tile.",
    ],
    faqHeading: "Bathroom Tile Questions in Langley",
    faqs: [
      {
        question: "What size tile is best for a small bathroom floor?",
        answer:
          "Large tiles mean fewer grout lines, which makes small rooms feel bigger, but they need a very flat floor. For shower floors, smaller tile or mosaics follow the slope better.",
      },
      {
        question: "Can you add heated floors during a retile?",
        answer:
          "Yes. The heating mat or cable is installed under the new tile, with a thermostat on the wall.",
      },
      {
        question: "How long should I wait before using a newly tiled shower?",
        answer:
          "Thinset and grout need time to cure. We tell you when it is safe to use, which is typically within a day or two depending on the products used.",
      },
    ],
  },

  "bathroom-vanity-installation": {
    titleKeyword: "Vanity Installation in Langley, BC",
    metaDescription:
      "Bathroom vanity installation in Langley, BC by Ideal Bath Renovations. Single and double vanities, quartz tops, and LED mirrors. Contact us for a free quote.",
    h1: "Bathroom Vanity Installation in Langley, BC",
    intro:
      "Bathroom vanity installation in Langley, BC with custom cabinetry, quartz countertops, undermount sinks, and mirrors that suit your space.",
    overviewHeading: "Bathroom Vanity Installation in Langley, BC: Cabinets, Countertops & Sinks",
    paragraphs: [
      "Bathroom vanity installation in Langley, BC from Ideal Bath Renovations covers single and double vanities, wall-hung cabinets, quartz and granite countertops, undermount sinks, faucets, and mirrors. We help you choose a size and storage layout that fits your room.",
      "A vanity replacement is one of the fastest ways to refresh a bathroom, and it can be done alone or as part of a bathroom remodel or renovation. We handle plumbing connections and make sure the cabinet sits level against the wall.",
      "In older Langley homes, walls and floors are rarely perfectly straight. We scribe and shim the cabinet so the countertop, backsplash, and sink look clean and function well.",
    ],
    faqHeading: "Bathroom Vanity Questions in Langley",
    faqs: [
      {
        question: "How much space do I need for a double vanity?",
        answer:
          "Generally 60 inches of wall width or more, so each person has room at the sink. We measure first and tell you if a single wide sink is a better fit.",
      },
      {
        question: "Quartz or granite for a bathroom countertop?",
        answer:
          "Quartz is non-porous and does not need sealing, so most customers pick it for bathrooms. Granite is a good natural-stone option but needs periodic sealing.",
      },
      {
        question: "Can you install a vanity I bought elsewhere?",
        answer:
          "Yes. We check the dimensions against your plumbing first so there are no surprises on installation day.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* SERVICE AREAS (keyed by slug)                                       */
/* ------------------------------------------------------------------ */

export interface AreaSeo {
  titleKeyword: string;
  metaDescription: string;
  h1: string;
  intro: string;
  overviewHeading: string;
  paragraphs: string[];
  neighborhoodsHeading: string;
  faqHeading: string;
  faqs: SeoFaq[];
}

export const areaSeo: Record<string, AreaSeo> = {
  "langley-twp": {
    titleKeyword: "Bathroom Remodeler Langley Twp, BC",
    metaDescription:
      "Bathroom remodeler in Langley Twp, BC. Ideal Bath Renovations offers bathroom renovations, shower conversions, and custom vanities. Call for a free estimate.",
    h1: "Bathroom Remodeler in Langley Twp, BC",
    intro:
      "Ideal Bath Renovations is a bathroom remodeler in Langley Twp, BC, working on bathrooms from Willoughby to Fort Langley and Aldergrove.",
    overviewHeading: "Bathroom Remodeler in Langley Twp, BC: Renovation, Showers & Vanities",
    paragraphs: [
      "Ideal Bath Renovations is a bathroom remodeler in Langley Twp, BC, working in Willoughby, Walnut Grove, Fort Langley, Murrayville, Brookswood, and Aldergrove. Because our shop is in the township, estimates and site visits are quick to arrange.",
      "We handle bathroom renovation, shower remodeling, tub-to-shower conversions, bathroom tile installation, vanity installation, and complete ensuite remodels. Newer homes often need better storage and finishes, while older homes may need bathroom repair or restoration along the way.",
      "When your project requires a permit, we apply through the Township of Langley and book the inspections, so you get a finished bathroom that is built to code.",
    ],
    neighborhoodsHeading: "Langley Twp Neighborhoods We Serve",
    faqHeading: "Langley Twp Bathroom Remodeling FAQs",
    faqs: [
      {
        question: "How quickly can you visit for an estimate in Langley Twp?",
        answer:
          "Because our shop is in the township, estimate visits can usually be arranged within a few days of your call.",
      },
      {
        question: "Do you pull permits from the Township of Langley?",
        answer:
          "Yes, when the work calls for it. Moving plumbing or adding circuits requires a permit, and we book the inspections.",
      },
      {
        question: "Do you work in Fort Langley and Aldergrove as well?",
        answer:
          "Yes. We work throughout the township, including Fort Langley, Aldergrove, Brookswood, and Murrayville.",
      },
    ],
  },

  surrey: {
    titleKeyword: "Bathroom Remodeler in Surrey, BC",
    metaDescription:
      "Bathroom remodeler in Surrey, BC. Ideal Bath Renovations builds new showers, tile, and vanities for Surrey homes and condos. Request a free quote today.",
    h1: "Bathroom Remodeler in Surrey, BC",
    intro:
      "Ideal Bath Renovations is a bathroom remodeler in Surrey, BC, serving Clayton Heights, Fleetwood, Cloverdale, South Surrey, and nearby communities.",
    overviewHeading: "Bathroom Remodeler in Surrey, BC: Renovation, Showers & Tile",
    paragraphs: [
      "Ideal Bath Renovations is a bathroom remodeler in Surrey, BC, serving Clayton Heights, Fleetwood, Cloverdale, South Surrey, Guildford, and Newton. From our Langley base, Surrey projects are within regular driving distance.",
      "Surrey homes range from townhomes and condos to large family houses. We update builder-grade bathrooms with bathroom renovation, replacement of tubs and vanities, shower remodeling, and tile installation, and we plan around strata rules when needed.",
      "Each project begins with a free in-home estimate. You receive a written scope, a clear schedule, and a single contact for the whole job.",
    ],
    neighborhoodsHeading: "Surrey Neighborhoods We Serve",
    faqHeading: "Surrey Bathroom Remodeling FAQs",
    faqs: [
      {
        question: "Do you remodel bathrooms in Surrey townhomes and condos?",
        answer:
          "Yes. We work with strata approvals and schedule noisy work within the building's permitted hours.",
      },
      {
        question: "Which Surrey permits might my bathroom project need?",
        answer:
          "The City of Surrey requires a plumbing permit for most drain or supply changes. We tell you what applies after we review your plan.",
      },
      {
        question: "How far do you travel from Langley to reach South Surrey?",
        answer:
          "South Surrey is part of our regular service range. Travel time does not change the quoted price of the project.",
      },
    ],
  },

  abbotsford: {
    titleKeyword: "Bathroom Remodeler Abbotsford, BC",
    metaDescription:
      "Bathroom remodeler in Abbotsford, BC from Ideal Bath Renovations. Shower upgrades, custom vanities, and tile for Abbotsford homes. Get a free estimate today.",
    h1: "Bathroom Remodeler in Abbotsford, BC",
    intro:
      "Ideal Bath Renovations is a bathroom remodeler in Abbotsford, BC, helping homeowners in Auguston, Clearbrook, Matsqui, and Mill Lake.",
    overviewHeading: "Bathroom Remodeler in Abbotsford, BC: Renovation, Showers & Vanities",
    paragraphs: [
      "Ideal Bath Renovations is a bathroom remodeler in Abbotsford, BC, helping homeowners in Auguston, Clearbrook, Matsqui, Mill Lake, and Sumas Mountain. We offer bathroom remodeling, renovation, and repair, plus shower and vanity installation.",
      "Many Abbotsford homes have space for a larger walk-in shower or a double vanity, and we design around that. For rural properties, we confirm the plumbing setup before planning any change.",
      "We coordinate permits with the City of Abbotsford where required and keep the project organized from the first visit to the final walkthrough.",
    ],
    neighborhoodsHeading: "Abbotsford Neighborhoods We Serve",
    faqHeading: "Abbotsford Bathroom Remodeling FAQs",
    faqs: [
      {
        question: "Will you travel to Abbotsford for a smaller bathroom job?",
        answer:
          "Yes. Smaller jobs such as vanity replacement or regrouting are scheduled in the same service run as larger projects.",
      },
      {
        question: "Can you update a bathroom on a rural Abbotsford property?",
        answer:
          "We can. On properties with a septic system or well, we confirm the plumbing setup before planning any layout changes.",
      },
      {
        question: "Are Abbotsford permit requirements different?",
        answer:
          "Each municipality has its own process. We follow the City of Abbotsford's requirements and manage the paperwork for you.",
      },
    ],
  },

  "fraser-valley": {
    titleKeyword: "Bathroom Remodeler Fraser Valley BC",
    metaDescription:
      "Bathroom remodeler in Fraser Valley, BC. Ideal Bath Renovations covers Mission, Chilliwack, Maple Ridge and more with showers, tile, and vanities. Call us.",
    h1: "Bathroom Remodeler in Fraser Valley, BC",
    intro:
      "Ideal Bath Renovations is a bathroom remodeler in Fraser Valley, BC, serving Maple Ridge, Mission, Chilliwack, White Rock, and surrounding towns.",
    overviewHeading: "Bathroom Remodeler in Fraser Valley, BC: Renovation, Showers & Tile",
    paragraphs: [
      "Ideal Bath Renovations is a bathroom remodeler in Fraser Valley, BC, taking on projects in Maple Ridge, Pitt Meadows, Mission, Chilliwack, Sardis, and White Rock. We offer bathroom renovation, shower remodeling, tile, and vanity installation.",
      "Larger projects such as ensuite remodels and tub-to-shower conversions suit our Fraser Valley schedule well, because deliveries and site visits can be planned efficiently.",
      "Call us to confirm your address is in our service range and to book a free in-home estimate.",
    ],
    neighborhoodsHeading: "Fraser Valley Communities We Serve",
    faqHeading: "Fraser Valley Bathroom Remodeling FAQs",
    faqs: [
      {
        question: "How far east do you take bathroom renovation jobs?",
        answer:
          "We serve communities from White Rock and Maple Ridge through Mission and out to Chilliwack. Call to confirm if you are farther out.",
      },
      {
        question: "Do you charge more for work outside Langley?",
        answer:
          "Your written quote shows all costs. Any travel or delivery considerations are part of the quote and nothing is added later.",
      },
      {
        question: "Can I get a quote without a site visit?",
        answer:
          "We can give a rough range from photos and measurements, but a final fixed quote needs a visit to check plumbing and framing.",
      },
    ],
  },
};
