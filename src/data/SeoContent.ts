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
    overviewHeading: "Full Bathroom Remodel for Langley Homes",
    paragraphs: [
      "A bathroom remodel is more than new tile. It is a chance to fix what has bothered you for years: a cramped shower, a vanity with no storage, a fan that never clears the steam. We start by measuring the room, learning how your household uses it, and drawing a layout that fits.",
      "Once the plan is approved we demolish cleanly, rework plumbing and wiring, waterproof the wet areas, and set tile and fixtures. Our Langley bathroom contractors keep one project lead on the job so decisions do not get lost between trades.",
      "Master ensuites, family bathrooms, and basement baths are all common projects for us. Each one gets a written scope and a firm schedule before work begins.",
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
    overviewHeading: "Bathroom Renovation That Refreshes Dated Spaces",
    paragraphs: [
      "Many Langley houses still have bathrooms from the 1990s and early 2000s: almond fixtures, small tubs, builder-grade vanities. A renovation keeps the footprint you have and replaces what is tired, which is often the most sensible way to get a new-feeling room.",
      "We focus on the things you touch daily. That means a vanity with real drawers, a shower that is easy to clean, flooring that stays warm and slip-resistant, and lighting you can actually see to shave or apply makeup by.",
      "Because we are not moving walls in most renovations, the schedule is shorter and the cost is easier to predict. Where a layout tweak does help, we will show you the option and what it adds.",
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
    overviewHeading: "Bathroom Repairs That Stop Small Problems Growing",
    paragraphs: [
      "A slow drip or a soft spot near the tub rarely stays small. Water works into the subfloor and wall cavity, and what could have been an afternoon repair turns into a larger job. We look for the source first instead of patching the surface.",
      "Typical repairs include replacing cracked or loose tile, regrouting and recaulking shower walls, fixing leaking valves and drains, resetting a wobbly toilet, and repairing a damaged vanity top.",
      "If the repair uncovers a bigger problem, we explain it plainly and give you the choice between a short-term fix and a proper rebuild. No pressure to renovate when a repair will do.",
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
    overviewHeading: "Replace Worn Bathroom Fixtures the Right Way",
    paragraphs: [
      "Replacing a fixture sounds simple until the old one will not come out cleanly or the new one does not line up with the existing plumbing. We confirm sizes and rough-in dimensions before ordering, so the new piece fits on installation day.",
      "Common replacements include toilets, vanities and sinks, faucets and shower valves, bathtubs, and exhaust fans. Each one is removed carefully, the surrounding wall or floor is repaired, and the new fixture is sealed and tested.",
      "If you are replacing several items at once, we sequence the work so you are not without a working bathroom longer than necessary.",
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
    overviewHeading: "Bathroom Installation From Rough-In to Finish",
    paragraphs: [
      "Adding a bathroom in a basement, a new addition, or a rebuilt home needs more than fixtures. Drains need the right slope, venting has to meet code, and the walls behind the shower must be waterproofed before any tile goes up.",
      "We install showers, tubs, vanities, toilets, flooring, and lighting, and we coordinate the rough-in plumbing and electrical so each trade works in the right order. That order matters; a missed step is expensive to fix once drywall is closed.",
      "Our crew follows the BC Building Code and arranges inspections with the Township of Langley or the City of Langley where permits apply.",
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
    overviewHeading: "Bathroom Design and Planning Before You Build",
    paragraphs: [
      "The best bathrooms are decided on paper first. We measure your room, note where plumbing and windows sit, and sketch layouts that make the most of the space, whether that is a narrow 5-by-8 bath or a spacious ensuite.",
      "From there we build a 3D view so you can see how the vanity, shower, and storage work together. Seeing it before it is built makes it easier to decide on glass versus a curtain, a niche versus a shelf, or one sink versus two.",
      "You leave the design stage with selected finishes, a fixture list, and a written scope that feeds directly into the quote.",
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
    overviewHeading: "Smart Bathroom Upgrades With Quick Turnaround",
    paragraphs: [
      "You do not always need to start over. A few well-chosen upgrades can change how a bathroom looks and feels, often within one to three days.",
      "Popular choices include a quiet exhaust fan that actually clears moisture, an anti-fog LED mirror, a thermostatic shower valve, a comfort-height or bidet-ready toilet, dimmable wet-rated lighting, and new faucets and hardware in matte black or brushed gold.",
      "We tell you which upgrades add the most value for the money and which ones are better saved for a future renovation, so you only pay for what makes a difference.",
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
    overviewHeading: "Bathroom Restoration After Water Damage",
    paragraphs: [
      "Langley's wet climate is hard on bathrooms, especially ones with poor ventilation or old shower pans. When moisture gets behind tile or under flooring, it can soften the subfloor and lead to mold growth that returns unless the cause is fixed.",
      "Our restoration work starts with finding where the water came from. We then remove damaged drywall, backing, and subfloor, treat affected areas, and rebuild with proper waterproofing so the same problem does not return.",
      "Once the structure is sound, we finish with new tile, fixtures, and paint so the bathroom looks as good as it works.",
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
    overviewHeading: "Walk-In Showers and Tub-to-Shower Conversions",
    paragraphs: [
      "A tired fiberglass tub-shower is one of the most common reasons homeowners call us. Replacing it with a tiled walk-in shower gives you easier access, a brighter space, and a surface that is far easier to keep clean.",
      "We build the shower from the base up: sloped, waterproof pan, membrane on the walls, then tile, niche, bench if you want one, and glass. Most conversions take three to five working days.",
      "For households planning ahead, a curbless entry with a linear drain removes the step entirely. It looks modern and works well for anyone with limited mobility.",
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
    overviewHeading: "Bathtub Replacement With Clean, Leak-Free Installation",
    paragraphs: [
      "A tub that has yellowed, cracked, or started to leak is not worth another refinish. Replacing it gives you better comfort and removes a likely source of water damage.",
      "We remove the old tub, check the drain and subfloor, and set the new one on a solid, level base. Alcove tubs fit existing recesses, while freestanding tubs need a floor-mounted or wall-mounted filler and more clearance around the tub.",
      "Most tub replacements are finished in one to three days. If the surround tile needs to be removed, we rebuild it so the new tub and wall meet cleanly and stay sealed.",
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
    overviewHeading: "Bathroom Tile Installation and Waterproofing",
    paragraphs: [
      "Good tile work depends on what is under it. We flatten the floor, install an uncoupling membrane where appropriate, and waterproof shower walls and pans before the first tile is set.",
      "We install porcelain, ceramic, large-format tile, mosaics, and natural stone in straight, offset, herringbone, and other patterns. Edges are finished with trim or mitered corners so the shower looks clean.",
      "Heated floors can be added at the same time. The cable goes in before the tile, so it is a simple addition during a floor retile.",
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
    overviewHeading: "Custom Bathroom Vanities and Storage",
    paragraphs: [
      "The vanity is usually the first thing people notice and the piece they use most. We help you choose a size, depth, and storage layout that suits your room and your routine.",
      "Options include freestanding and wall-hung vanities, single or double sinks, quartz or granite tops, soft-close doors and drawers, and LED mirrors with anti-fog heating. We handle the plumbing connections and make sure the fit against the wall is tight and clean.",
      "In older Langley homes, walls are often not perfectly square. We scribe and shim the cabinet so it sits level and the backsplash meets the wall without gaps.",
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
    overviewHeading: "Bathroom Renovation in Langley Twp, BC",
    paragraphs: [
      "Our workshop is in Langley Township, so this is where we do most of our work. We know the housing here: newer Willoughby and Yorkson builds with standard builder-grade bathrooms, mid-era Walnut Grove and Murrayville homes, and the older character houses in Fort Langley.",
      "As a bathroom remodeler in Langley Twp, we handle the full scope: tub-to-shower conversions, custom vanities, tile and waterproofing, and complete ensuite renovations. We also pull permits from the Township of Langley when the work requires them.",
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
    overviewHeading: "Bathroom Renovation in Surrey, BC",
    paragraphs: [
      "Surrey has a mix of newer builds in Clayton Heights and Grandview Heights, established family homes in Fleetwood and Guildford, and townhomes and condos across the city. Each has different constraints, from tight strata rules to compact floor plans.",
      "As a bathroom remodeler in Surrey, we plan around those differences. We update builder-grade bathrooms with better tile and storage, convert tubs to walk-in showers, and install new vanities. For strata units we can help you with notice requirements and working hours.",
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
    overviewHeading: "Bathroom Renovation in Abbotsford, BC",
    paragraphs: [
      "Abbotsford homes range from new Auguston builds to established houses near Mill Lake and acreage properties on Sumas Mountain and Bradner. Larger family homes often mean larger bathrooms, which give us room for walk-in showers and double vanities.",
      "As a bathroom remodeler in Abbotsford, we plan the work so there is minimal disruption for your household. We handle demolition, plumbing, waterproofing, tile, and finishing, and we coordinate permits with the City of Abbotsford where they apply.",
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
    overviewHeading: "Bathroom Renovation Across the Fraser Valley",
    paragraphs: [
      "Beyond Langley, we take on bathroom projects in Maple Ridge, Pitt Meadows, Mission, Chilliwack, Sardis, and White Rock. Larger projects such as full ensuite renovations are a good fit for the extra travel, and we plan site visits and deliveries to keep schedules efficient.",
      "As a Fraser Valley bathroom remodeler, we bring the same process everywhere: a written scope, waterproofed showers, and one project lead. Call us and we will confirm your address is within our service range.",
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
