import {
  customVanityImg,
  tileSchluterImg,
  modernPowderRoomImg,
  freestandingTubImg,
  bathtubReplaceImg,
  bathroomReferralImg,
  bathroomBeforeImg,
} from "../assets/images";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface MaterialOption {
  title: string;
  description: string;
  badge?: string;
}

export interface ServiceDetailItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroImage: string;
  priceRange: string;
  typicalTimeline: string;
  warranty: string;
  badge: string;
  overview: string;
  detailedParagraphs: string[];
  keyBenefits: { title: string; desc: string }[];
  inclusions: string[];
  processSteps: ProcessStep[];
  beforeImage?: string;
  afterImage?: string;
  beforeAfterTitle?: string;
  beforeAfterDesc?: string;
  materialOptions: MaterialOption[];
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
}

export const servicesDetailList: ServiceDetailItem[] = [
  {
    id: "bathroom-remodeling",
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    category: "Full Remodel",
    tagline: "Complete bathroom remodels with practical layouts and durable finishes.",
    heroImage: modernPowderRoomImg,
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "2 to 3 Weeks",
    warranty: "Lifetime Schluter® Waterproofing + 5-Yr Workmanship Guarantee",
    badge: "Most Comprehensive Solution",
    overview:
      "We manage the full bathroom remodel, from in-home design and demolition to plumbing, tile, vanities, and glass installation.",
    detailedParagraphs: [
      "We can update an outdated layout, replace worn fixtures, and improve storage or ventilation.",
      "A dedicated project manager coordinates the work, and Schluter® waterproof membranes are installed behind wet areas.",
    ],
    keyBenefits: [
      {
        title: "Strong Resale Value in Langley",
        desc: "A well-planned bathroom can improve comfort and appeal to future buyers.",
      },
      {
        title: "Schluter® Certified Waterproofing",
        desc: "Schluter® membranes provide a continuous waterproof layer in wet areas.",
      },
      {
        title: "Dedicated Project Management",
        desc: "One project manager coordinates the trades and keeps you updated through the final walkthrough.",
      },
      {
        title: "Transparent Fixed-Price Quotes",
        desc: "Itemized proposals show the expected labor, materials, and trade work before construction begins.",
      },
    ],
    inclusions: [
      "In-home design consultation, precise measurements, and detailed floor plan planning",
      "Full tear-out, drywall and subfloor inspection, and clean debris haul-away",
      "Licensed plumbing reconfiguration, drain upgrades, and shut-off valve replacements",
      "Electrical upgrades, LED lighting, and properly sized exhaust ventilation",
    ],
    processSteps: [
      {
        number: "01",
        title: "Design Consultation",
        description: "We visit your home, take measurements, and go over layout and material options.",
      },
      {
        number: "02",
        title: "Demolition & Prep",
        description: "Old fixtures, tile, and drywall are removed and the space is prepped for rebuild.",
      },
      {
        number: "03",
        title: "Plumbing & Electrical",
        description: "Licensed trades update drains, water lines, and wiring to code.",
      },
      {
        number: "04",
        title: "Waterproofing & Tile",
        description: "Schluter®-certified waterproofing goes in first, followed by tile installation.",
      },
      {
        number: "05",
        title: "Final Install & Walkthrough",
        description: "Vanity, glass, and fixtures are installed, followed by a final walkthrough with you.",
      },
    ],
    materialOptions: [
      {
        title: "Large Format Porcelain Tile",
        description: "Durable porcelain tiles with minimal grout lines for easy cleaning and a modern aesthetic.",
        badge: "Low Maintenance",
      },
      {
        title: "Solid Quartz Countertops",
        description: "Non-porous, stain-resistant quartz surfaces with undermount sinks and clean finished edges.",
        badge: "Stain Resistant",
      },
      {
        title: "Premium Metal Fixtures",
        description: "Quality thermostatic shower valves and dual-lever faucets in matte black, brushed nickel, or brass.",
        badge: "Durable Finish",
      },
    ],
    faqs: [
      {
        question: "How long does a full bathroom remodel take in Langley?",
        answer: "A standard full bathroom remodel typically takes 2 to 3 weeks once on-site work begins. We pre-order and stage all fixtures, vanities, and tiles before starting demolition to prevent downtime during construction.",
      },
      {
        question: "Do I need a permit for a bathroom remodel in Langley Township?",
        answer: "Cosmetic updates like replacing a vanity, toilet, or tile in the same location generally do not require a permit. However, if you are relocating plumbing stacks, altering structural framing, or adding new electrical circuits, Township of Langley permits are required. We handle all required municipal permit submissions and coordinate inspections on your behalf.",
      },
      {
        question: "Can you remodel a bathroom without moving plumbing?",
        answer: "Yes. Keeping your tub, shower, toilet, and vanity in their existing locations is one of the most effective ways to keep remodeling costs down and minimize turnaround time. We can completely modernize every surface, fixture, and tile without having to relocate drains or supply lines.",
      },
      {
        question: "What's included in your fixed-price bathroom remodeling quote?",
        answer: "Our written quote is comprehensive and itemized. It covers all demolition and debris haul-away, licensed plumbing and electrical trades, Schluter® waterproofing membranes, tile installation, fixture installation, and a final walkthrough and quality check. The price agreed upon is what you pay, with no surprise add-ons.",
      },
      {
        question: "Do you handle the design as well as the construction?",
        answer: "Yes, we provide an end-to-end design-build service. During our in-home consultation, we take measurements and discuss your storage needs, style preferences, and material options—including vanities, quartz countertops, tile patterns, and lighting. We then manage the entire construction build from start to finish.",
      },
    ],
    relatedServiceSlugs: ["bathroom-renovation", "shower-remodeling", "bathroom-design", "bathroom-tile-installation"],
  },

  {
    id: "bathroom-renovation",
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    category: "Full Remodel",
    tagline: "Bathroom updates planned around your layout, budget, and daily needs.",
    heroImage: bathroomReferralImg,
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "2 to 3 Weeks",
    warranty: "5-Year Workmanship Warranty + Schluter® Waterproofing Guarantee",
    badge: "Complete Renovation",
    overview:
      "We update family bathrooms, ensuites, and basement baths with durable materials, practical storage, and a layout that fits your home.",
    detailedParagraphs: [
      "We coordinate material selection, layout planning, and the trades needed for the renovation.",
      "Licensed trades handle plumbing and electrical updates, with Schluter® waterproofing behind wet walls.",
    ],
    keyBenefits: [
      {
        title: "Licensed Local Trades",
        desc: "Certified plumbers and electricians complete mechanical updates to applicable BC Building Code standards.",
      },
      {
        title: "Schluter® Waterproof Protection",
        desc: "A certified waterproofing barrier helps protect wet walls and framing from moisture.",
      },
      {
        title: "Direct Project Management",
        desc: "One project manager keeps you updated from demolition through the final walkthrough.",
      },
      {
        title: "Clear, Upfront Estimates",
        desc: "Itemized proposals show the expected costs before construction begins.",
      },
    ],
    inclusions: [
      "In-home consultation, accurate room measurements, and material guidance",
      "Careful demolition, subfloor assessment, and clean jobsite maintenance",
      "Code-compliant plumbing upgrades, PEX water lines, and new shut-off valves",
      "Quality tile setting, vanity installation, and finished fixture hookups",
    ],
    processSteps: [
      {
        number: "01",
        title: "In-Home Consultation",
        description: "We review your bathroom, discuss your goals, and outline design and material choices.",
      },
      {
        number: "02",
        title: "Prep & Demolition",
        description: "We protect surrounding floors and remove old fixtures down to the framing.",
      },
      {
        number: "03",
        title: "Plumbing & Wiring",
        description: "Licensed trades update water supply, drainage, and electrical fixtures to code.",
      },
      {
        number: "04",
        title: "Waterproofing & Tile",
        description: "We apply certified waterproofing and install your chosen floor and wall tile.",
      },
      {
        number: "05",
        title: "Fixtures & Walkthrough",
        description: "We install the vanity, toilet, and hardware, finishing with a thorough walkthrough with you.",
      },
    ],
    materialOptions: [
      {
        title: "Glazed Ceramic & Porcelain Tile",
        description: "Classic subway tiles and modern large-format tiles for easy maintenance.",
        badge: "Popular Choice",
      },
      {
        title: "Custom Plywood Vanities",
        description: "Sturdy plywood cabinet boxes with soft-close drawers and quartz countertops.",
        badge: "Solid Build",
      },
      {
        title: "WaterSense Certified Fixtures",
        description: "High-efficiency toilets and shower valves that save water without sacrificing pressure.",
        badge: "Efficient",
      },
    ],
    faqs: [
      {
        question: "What is the typical difference between a bathroom renovation and a remodel?",
        answer: "A renovation generally focuses on updating, repairing, and modernizing existing surfaces and fixtures within the current layout. A remodel often involves altering the floor plan, moving plumbing stacks, or reconfiguring walls.",
      },
      {
        question: "How long does a standard bathroom renovation take in Langley?",
        answer: "Most bathroom renovations take between 2 and 3 weeks once on-site work starts. We order all materials ahead of time so the construction process moves forward steadily without unnecessary delays.",
      },
      {
        question: "Can I keep my current bathroom layout to reduce renovation costs?",
        answer: "Yes, keeping the toilet, tub, and vanity in their existing locations is one of the most effective ways to manage costs, as it eliminates the need to reroute primary plumbing and venting lines.",
      },
      {
        question: "Do you help with selecting tiles, vanities, and fixtures?",
        answer: "Yes. During our initial consultation, we help you choose materials that work well together, fit your budget, and hold up well to everyday moisture.",
      },
      {
        question: "What warranty do you provide on renovation workmanship?",
        answer: "We stand behind our work with a 5-year workmanship warranty alongside manufacturer warranties and Schluter® waterproofing guarantees.",
      },
    ],
    relatedServiceSlugs: ["bathroom-remodeling", "bathroom-replacement", "bathroom-upgrades", "shower-remodeling"],
  },

  {
    id: "bathroom-repair",
    slug: "bathroom-repair",
    title: "Bathroom Repair",
    category: "Repairs & Upgrades",
    tagline: "Repairs for shower leaks, damaged drywall, broken tile, and faulty plumbing.",
    heroImage: bathroomBeforeImg,
    priceRange: "Free Assessment & Quote",
    typicalTimeline: "1 to 3 Days",
    warranty: "Comprehensive Workmanship Guarantee on All Repairs",
    badge: "Fast & Reliable",
    overview:
      "We diagnose and repair moisture problems, plumbing leaks, and damaged bathroom surfaces before they grow.",
    detailedParagraphs: [
      "Leaks can start behind tile, under tub drains, or around cracked grout. We look for the source before repairing the visible damage.",
      "Repairs may include subflooring, moisture barriers, replacement tile, and fixtures.",
    ],
    keyBenefits: [
      {
        title: "Accurate Problem Diagnosis",
        desc: "We look for the source of leaks and moisture before recommending a repair.",
      },
      {
        title: "Licensed Plumbing Trades",
        desc: "Plumbers repair valves, drains, and supply lines to code.",
      },
      {
        title: "Respectful & Clean Work",
        desc: "Floor protection and daily cleanup help keep the work area tidy.",
      },
      {
        title: "Honest Repair Advice",
        desc: "We explain whether repair or replacement makes more sense for the problem.",
      },
    ],
    inclusions: [
      "Subfloor and framing moisture checks behind wet areas",
      "Shower valve cartridge replacement, drain clearing, and supply line repairs",
      "Damaged drywall and backer board replacement with mold-resistant materials",
      "Precision tile patching, re-grouting, and commercial-grade silicone caulking",
    ],
    processSteps: [
      {
        number: "01",
        title: "Diagnostic Inspection",
        description: "We assess the issue, inspect for hidden moisture, and determine the exact cause.",
      },
      {
        number: "02",
        title: "Clear Repair Proposal",
        description: "We provide an upfront quote explaining the required repairs and material costs.",
      },
      {
        number: "03",
        title: "Targeted Repair",
        description: "Our trades fix plumbing, replace compromised drywall, and restore tile surfaces.",
      },
      {
        number: "04",
        title: "Testing & Quality Check",
        description: "We pressure-test plumbing lines and inspect all seals to confirm a water-tight finish.",
      },
    ],
    materialOptions: [
      {
        title: "Cementitious & Epoxy Grout",
        description: "Stain-resistant grouts that seal tight against water penetration in shower walls and floors.",
        badge: "Waterproof",
      },
      {
        title: "Mold-Resistant Backer Board",
        description: "High-density cement and foam boards that will not degrade if exposed to humidity.",
        badge: "Moisture-Safe",
      },
      {
        title: "OEM Brass Valve Cartridges",
        description: "Genuine replacement parts for Moen, Delta, Kohler, and Grohe shower valves.",
        badge: "Exact Fit",
      },
    ],
    faqs: [
      {
        question: "How do I know if a bathroom leak has damaged the subfloor underneath?",
        answer: "Signs of subfloor damage include spongy or bouncing floor tiles, a persistent musty odor, discoloration on ceilings below the bathroom, or tiles pulling away from the floor.",
      },
      {
        question: "Can individual cracked shower tiles be replaced without redoing the whole shower?",
        answer: "If the waterproofing membrane underneath is intact, we can carefully remove and replace individual cracked tiles. If moisture has penetrated behind the wall, we will advise on repairing the underlying substrate first.",
      },
      {
        question: "Do you repair shower valves that have low water pressure or temperature fluctuations?",
        answer: "Yes. Pressure fluctuations and temperature issues are commonly caused by worn balancing spools or mineral-clogged cartridges. We replace cartridges and clean valve bodies to restore normal water flow.",
      },
      {
        question: "How quickly can your team assess an active leak in Langley or Surrey?",
        answer: "We prioritize active leak calls and can typically schedule an assessment within 24 to 48 hours to help prevent secondary water damage.",
      },
      {
        question: "When is it better to replace a shower rather than repair it?",
        answer: "If water has compromised large sections of the shower pan or wood framing behind the tile, repairing individual spots often costs nearly as much as a proper rebuild. We give you honest recommendations based on our inspection.",
      },
    ],
    relatedServiceSlugs: ["bathroom-restoration", "bathroom-replacement", "bathroom-upgrades", "shower-remodeling"],
  },

  {
    id: "bathroom-replacement",
    slug: "bathroom-replacement",
    title: "Bathroom Replacement",
    category: "Full Remodel",
    tagline: "Replace worn tubs, showers, vanities, and toilets with modern fixtures.",
    heroImage: bathtubReplaceImg,
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "1 to 2 Weeks",
    warranty: "Full Workmanship Warranty + Manufacturer Coverage",
    badge: "Modern Upgrade",
    overview:
      "We replace worn, damaged, or leaking tubs, showers, vanities, and toilets with durable modern fixtures.",
    detailedParagraphs: [
      "A focused replacement can refresh a bathroom without the timeline of a full structural remodel.",
      "We check the subfloor, update plumbing where needed, and install water-efficient fixtures.",
    ],
    keyBenefits: [
      {
        title: "Thorough Stud-Level Inspection",
        desc: "We inspect framing, subfloors, and plumbing once old fixtures are removed to ensure a solid foundation.",
      },
      {
        title: "Water-Efficient Fixtures",
        desc: "We install quality toilets, faucets, and showers that reduce water consumption without sacrificing pressure.",
      },
      {
        title: "Certified Waterproofing Substrates",
        desc: "Schluter® waterproof membranes behind wet walls provide long-term protection against leaks.",
      },
      {
        title: "Predictable Project Schedule",
        desc: "Materials are ordered and staged in advance so your bathroom replacement moves ahead without delays.",
      },
    ],
    inclusions: [
      "Safe removal and responsible disposal of old bathtubs, vanities, and toilets",
      "Inspection and leveling of subflooring before new fixtures are set",
      "Updating plumbing rough-ins, PEX supply lines, and modern shut-offs",
      "Installation of new tubs or shower bases, vanities, faucets, and matching trim",
    ],
    processSteps: [
      {
        number: "01",
        title: "Consultation & Selection",
        description: "We measure your space and help you choose modern replacement fixtures.",
      },
      {
        number: "02",
        title: "Careful Removal",
        description: "We disconnect plumbing, remove old fixtures, and haul away debris.",
      },
      {
        number: "03",
        title: "Plumbing & Subfloor Prep",
        description: "We check the subfloor for level, repair framing if needed, and align plumbing lines.",
      },
      {
        number: "04",
        title: "Installation & Waterproofing",
        description: "New tubs, showers, and moisture barriers are installed to strict trade standards.",
      },
      {
        number: "05",
        title: "Final Connections & Walkthrough",
        description: "We connect fixtures, test all water lines, and review the finished installation with you.",
      },
    ],
    materialOptions: [
      {
        title: "High-Gloss Acrylic Bathtubs",
        description: "Stain-resistant, warm-to-the-touch acrylic tubs with reinforced fiberglass backing.",
        badge: "Durable",
      },
      {
        title: "Dual-Flush Comfort-Height Toilets",
        description: "Water-efficient toilets with quiet closing seats and strong flushing power.",
        badge: "WaterSense",
      },
      {
        title: "Solid Surface Vanity Tops",
        description: "Seamless quartz and cultured marble tops with integrated undermount sinks.",
        badge: "Easy Clean",
      },
    ],
    faqs: [
      {
        question: "Can I replace a one-piece fiberglass tub with an acrylic tub or tiled shower?",
        answer: "Yes. We frequently remove bulky one-piece builder units and replace them with modern deep soaker tubs or walk-in tiled showers with glass enclosures.",
      },
      {
        question: "Do you replace rotted subfloor if water damage is discovered during tear-out?",
        answer: "Yes. If we uncover rotted subfloor under an old tub or toilet, we cut back the compromised wood and install new exterior-grade plywood so your new fixtures sit level and secure.",
      },
      {
        question: "How long does a standard bathroom fixture replacement take?",
        answer: "A targeted fixture replacement (such as a new tub surround and vanity) typically takes 3 to 7 business days once on-site work begins.",
      },
      {
        question: "Can I keep my existing vanity while replacing the bathtub and tile surround?",
        answer: "Yes. We can target only the tub and shower zone while carefully protecting your existing vanity, floor tile, and other bathroom elements.",
      },
      {
        question: "Do new toilets and fixtures come with manufacturer warranties?",
        answer: "Yes. All fixtures we supply carry full manufacturer warranties, and our installation workmanship is backed by our company guarantee.",
      },
    ],
    relatedServiceSlugs: ["bathtub-replacement", "shower-remodeling", "bathroom-upgrades", "bathroom-renovation"],
  },

  {
    id: "bathroom-installation",
    slug: "bathroom-installation",
    title: "Bathroom Installation",
    category: "Full Remodel",
    tagline: "New bathrooms for basement suites, primary suites, and home additions.",
    heroImage: tileSchluterImg,
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "3 to 4 Weeks",
    warranty: "5-Year Workmanship Warranty + Code Compliance Guarantee",
    badge: "New Construction",
    overview:
      "We build new bathrooms in ensuites, unused rooms, basement suites, and home additions—from framing through fixtures.",
    detailedParagraphs: [
      "We coordinate basement drainage, venting, electrical circuits, framing, and finishes as one project.",
      "We work within local bylaws and coordinate required inspections for the new bathroom.",
    ],
    keyBenefits: [
      {
        title: "Complete New Construction",
        desc: "We handle framing, ventilation, plumbing rough-ins, and electrical circuits.",
      },
      {
        title: "Code Compliance & Permitting",
        desc: "All rough-in plumbing and wiring adhere strictly to Township of Langley and BC Building Code standards.",
      },
      {
        title: "Optimized Space Planning",
        desc: "We design functional layouts that maximize comfort, storage, and natural movement in compact spaces.",
      },
      {
        title: "Turnkey Delivery",
        desc: "From concrete breaking and rough-in plumbing to mirrors and towel bars, your new bathroom is move-in ready.",
      },
    ],
    inclusions: [
      "Initial layout planning, door placement, and framing construction",
      "Drain rough-ins, venting, supply lines, and concrete trenching if required",
      "Dedicated electrical wiring, lighting fixtures, and exterior exhaust venting",
      "Complete shower, toilet, vanity, flooring, and interior door installation",
    ],
    processSteps: [
      {
        number: "01",
        title: "Site Assessment & Plan",
        description: "We evaluate existing drain connections, measure the space, and design an efficient layout.",
      },
      {
        number: "02",
        title: "Framing & Rough-Ins",
        description: "We frame partition walls and install all new plumbing lines, vents, and wiring.",
      },
      {
        number: "03",
        title: "Insulation & Drywall",
        description: "We hang moisture-resistant drywall, sound insulation, and prepare surfaces for tile.",
      },
      {
        number: "04",
        title: "Waterproofing & Tile",
        description: "We apply certified waterproofing membranes and install durable wall and floor tile.",
      },
      {
        number: "05",
        title: "Fixture Hookup & Walkthrough",
        description: "We install vanities, glass, and fixtures, followed by testing and a final walkthrough.",
      },
    ],
    materialOptions: [
      {
        title: "Sound-Dampening Insulation",
        description: "Roxul Safe'n'Sound insulation in interior walls for acoustic privacy.",
        badge: "Quiet Comfort",
      },
      {
        title: "PEX-A Expansion Plumbing",
        description: "Reliable, flexible PEX piping that resists scale buildup and freezing damage.",
        badge: "Code Standard",
      },
      {
        title: "High-Output Quiet Ventilation",
        description: "Continuous or sensor-activated exhaust fans vented directly to the home exterior.",
        badge: "Clean Air",
      },
    ],
    faqs: [
      {
        question: "Can you add a full bathroom in an unfinished basement with a concrete slab?",
        answer: "Yes. We saw-cut and trench the concrete slab to connect new toilet and shower drains into your main sewer stack, then repour concrete and build the bathroom above.",
      },
      {
        question: "Do I need a building permit to add a new bathroom in Langley Township?",
        answer: "Yes. Adding a new bathroom with plumbing rough-ins and electrical circuits requires municipal plumbing and building permits. We prepare documentation and coordinate all inspections.",
      },
      {
        question: "What is the minimum square footage needed for a 3-piece bathroom?",
        answer: "A comfortable 3-piece bathroom (shower, toilet, vanity) can typically be built in as little as 35 to 45 square feet using an efficient floor plan.",
      },
      {
        question: "How do you vent a new bathroom that doesn't have an exterior window?",
        answer: "We install a dedicated, properly sized exhaust fan and run ductwork through the nearest exterior wall or roof cap to remove moisture effectively.",
      },
      {
        question: "How long does it take to construct a new bathroom addition from scratch?",
        answer: "A new bathroom installation typically takes 3 to 4 weeks from framing and concrete trenching to final tile and fixture installation.",
      },
    ],
    relatedServiceSlugs: ["bathroom-design", "bathroom-remodeling", "shower-remodeling", "bathroom-tile-installation"],
  },

  {
    id: "bathroom-design",
    slug: "bathroom-design",
    title: "Bathroom Design",
    category: "Design & Planning",
    tagline: "Bathroom layouts, storage planning, and material selections that fit your home.",
    heroImage: customVanityImg,
    priceRange: "Complimentary Initial In-Home Consultation",
    typicalTimeline: "1 to 2 Weeks for Design & Planning",
    warranty: "Guaranteed Alignment with Construction Budget & Code",
    badge: "Layout & Planning",
    overview:
      "We create practical bathroom layouts around your routine, storage needs, and preferred finishes.",
    detailedParagraphs: [
      "We help plan vanity sizes, shower niches, storage, and lighting for the way you use the room.",
      "Our plans account for plumbing, structure, budget, and the work required to build them.",
    ],
    keyBenefits: [
      {
        title: "Practical Everyday Functionality",
        desc: "We design layouts that make efficient use of space, improving traffic flow and daily storage.",
      },
      {
        title: "Trade-Grounded Plans",
        desc: "Because we are licensed builders, our design concepts respect plumbing stacks, venting, and structural reality.",
      },
      {
        title: "Material & Finish Guidance",
        desc: "We guide you through complementary tiles, quartz counters, cabinet finishes, and hardware.",
      },
      {
        title: "Clear Construction Handoff",
        desc: "Design plans translate directly into accurate itemized quotes and smooth build execution.",
      },
    ],
    inclusions: [
      "In-home space assessment, measurement, and lifestyle consultation",
      "Detailed floor plans exploring vanity sizes, shower footprints, and storage",
      "Coordinated material palettes for tile, countertops, paint, and plumbing hardware",
      "Complete specification schedule ready for construction and permitting",
    ],
    processSteps: [
      {
        number: "01",
        title: "In-Home Consultation",
        description: "We visit your home, measure the bathroom, and discuss what you want to improve.",
      },
      {
        number: "02",
        title: "Layout Exploration",
        description: "We develop floor plan concepts that optimize storage, shower space, and natural light.",
      },
      {
        number: "03",
        title: "Material Selection",
        description: "We help you select coordinating tiles, quartz, cabinetry colors, and plumbing fixtures.",
      },
      {
        number: "04",
        title: "Final Plan & Quote",
        description: "We present a comprehensive design plan paired with an itemized construction quote.",
      },
    ],
    materialOptions: [
      {
        title: "Custom Vanity Configurations",
        description: "Drawers with plumbing cutouts, power outlets for hair dryers, and tall linen towers.",
        badge: "Smart Storage",
      },
      {
        title: "Layered Bathroom Lighting",
        description: "Dimmable ceiling pots combined with eye-level sconces to eliminate facial shadows.",
        badge: "Flattering Light",
      },
      {
        title: "Balanced Color Palettes",
        description: "Neutral warm tones and contrasting metals that stand the test of time.",
        badge: "Timeless",
      },
    ],
    faqs: [
      {
        question: "What is the best layout for a narrow or compact bathroom?",
        answer: "For narrow bathrooms, placing the vanity, toilet, and shower along a single plumbing wall keeps movement open. Using a curbless walk-in shower with clear glass also makes the space appear wider.",
      },
      {
        question: "Do you provide drawings or floor plans before construction begins?",
        answer: "Yes. We prepare detailed layout plans showing exact vanity dimensions, shower door swings, electrical switches, and plumbing locations for your approval.",
      },
      {
        question: "How do we choose between a freestanding tub and a walk-in shower?",
        answer: "If you take baths regularly, a deep freestanding tub is a great choice. However, if space is limited and baths are rare, dedicating the footprint to a spacious walk-in shower often provides more everyday value.",
      },
      {
        question: "Can you design custom vanity storage for specific bathroom essentials?",
        answer: "Yes. We configure drawers with built-in dividers, pull-out hair tool organizers with internal outlets, and matching recessed medicine cabinets.",
      },
      {
        question: "Is there an initial consultation fee for bathroom design?",
        answer: "No. We offer complimentary in-home design consultations throughout Langley, Surrey, Abbotsford, and the Fraser Valley to review your space and discuss ideas.",
      },
    ],
    relatedServiceSlugs: ["bathroom-remodeling", "bathroom-installation", "bathroom-vanity-installation", "shower-remodeling"],
  },

  {
    id: "bathroom-upgrades",
    slug: "bathroom-upgrades",
    title: "Bathroom Upgrades",
    category: "Repairs & Upgrades",
    tagline: "Targeted updates for comfort, lighting, storage, and everyday use.",
    heroImage: modernPowderRoomImg,
    priceRange: "Free In-Home Assessment",
    typicalTimeline: "2 to 5 Days",
    warranty: "Full Workmanship & Installation Guarantee",
    badge: "Quick Turnaround",
    overview:
      "Update a bathroom without a full gut remodel with options such as a new vanity, frameless glass, lighting, or ventilation.",
    detailedParagraphs: [
      "Replacing an old vanity, exhaust fan, or shower enclosure can improve the room without a full rebuild.",
      "Targeted upgrades usually mean less disruption and a shorter on-site schedule.",
    ],
    keyBenefits: [
      {
        title: "High Impact with Low Disruption",
        desc: "Targeted upgrades update your bathroom in days rather than weeks of heavy construction.",
      },
      {
        title: "Quality Fixtures & Hardware",
        desc: "We install reliable, brand-name faucets, valves, and cabinetry built to last.",
      },
      {
        title: "Clean, Respectful Installation",
        desc: "Our trades protect your home, work efficiently, and leave the space spotless.",
      },
      {
        title: "Upfront Itemized Pricing",
        desc: "You get transparent quotes for each upgrade item so you can prioritize your budget easily.",
      },
    ],
    inclusions: [
      "Replacing outdated vanities with modern soft-close cabinetry and quartz counters",
      "Installing heavy frameless glass shower doors or modern slider enclosures",
      "Upgrading bathroom lighting to warm LED pot lights and illuminated mirrors",
      "Replacing old noisy exhaust fans with quiet, properly sized ventilation units",
    ],
    processSteps: [
      {
        number: "01",
        title: "Consultation & Selection",
        description: "We review the specific upgrades you want and verify fitting dimensions.",
      },
      {
        number: "02",
        title: "Material Staging",
        description: "We order your selected vanity, glass, or fixtures and confirm delivery before starting.",
      },
      {
        number: "03",
        title: "Skilled Installation",
        description: "Our trades carefully remove older items and install new upgrades cleanly.",
      },
      {
        number: "04",
        title: "Testing & Walkthrough",
        description: "We inspect plumbing connections, test electrical fixtures, and walk through the results with you.",
      },
    ],
    materialOptions: [
      {
        title: "LED Backlit Mirrors",
        description: "Fog-free, dimmable mirrors with integrated front-facing and halo ambient lighting.",
        badge: "Modern Tech",
      },
      {
        title: "Quiet Exhaust Fans",
        description: "Ultra-quiet fans (under 1.0 sone) with humidity sensors to prevent steam buildup.",
        badge: "Quiet Ventilation",
      },
      {
        title: "10mm Heavy Glass Doors",
        description: "Frameless glass with protective water-repellent coating for easy squeegee cleaning.",
        badge: "Easy Clean",
      },
    ],
    faqs: [
      {
        question: "Can I replace my vanity and countertop without replacing the floor tile?",
        answer: "Yes, as long as the new vanity has a matching or slightly larger footprint than the existing unit so un-tiled floor areas remain fully covered.",
      },
      {
        question: "How much difference does upgrading to a quiet exhaust fan make?",
        answer: "Older bathroom fans are often loud and inefficient. Upgrading to an ultra-quiet fan keeps the bathroom quiet and clears steam quickly, preventing mold growth on ceilings.",
      },
      {
        question: "Can you add a frameless glass door to an existing bathtub or shower base?",
        answer: "Yes. We install custom frameless glass splash panels, hinged doors, and sliding roller doors on existing bathtubs and shower curbs.",
      },
      {
        question: "How long do typical bathroom upgrades take to complete?",
        answer: "Most targeted upgrades—like replacing a vanity, toilet, and light fixture—are completed in 2 to 4 days once materials arrive.",
      },
      {
        question: "Can you install modern comfort-height or smart bidet toilets?",
        answer: "Yes. We install comfort-height dual-flush toilets as well as integrated bidet seats, including adding dedicated electrical outlets behind the toilet if required.",
      },
    ],
    relatedServiceSlugs: ["bathroom-vanity-installation", "bathroom-repair", "bathroom-renovation", "shower-remodeling"],
  },

  {
    id: "bathroom-restoration",
    slug: "bathroom-restoration",
    title: "Bathroom Restoration",
    category: "Repairs & Upgrades",
    tagline: "Restore bathrooms affected by moisture, leaks, and aging materials.",
    heroImage: bathroomBeforeImg,
    priceRange: "Complimentary Moisture & Repair Estimate",
    typicalTimeline: "1 to 2 Weeks",
    warranty: "Full Structural Workmanship & Schluter® Waterproofing Guarantee",
    badge: "Structural Restoration",
    overview:
      "We repair water-damaged framing, remove compromised materials, and rebuild bathrooms with certified waterproofing.",
    detailedParagraphs: [
      "We open affected areas to find the leak, dry the space, and replace damaged structural materials.",
      "Once the framing is sound and dry, we rebuild with Schluter® KERDI waterproofing and new finishes.",
    ],
    keyBenefits: [
      {
        title: "Safe Moisture Remediation",
        desc: "We thoroughly dry, clean, and treat framing before any new construction begins.",
      },
      {
        title: "Structural Subfloor Repair",
        desc: "Our team reinforces rotted floor joists and installs level, sturdy subflooring.",
      },
      {
        title: "Certified Waterproofing Systems",
        desc: "Schluter® KERDI waterproof membranes help protect framing from future moisture.",
      },
      {
        title: "Clear Assessment & Honest Pricing",
        desc: "We provide an honest appraisal of the damage and a fixed-price rebuild proposal.",
      },
    ],
    inclusions: [
      "Moisture testing and systematic removal of water-compromised drywall and flooring",
      "Structural repairs to deteriorated subflooring, wall studs, and joists",
      "Plumbing line inspections, drain re-piping, and valve replacements",
      "Complete rebuild with mold-resistant backer board, waterproofing, tile, and fixtures",
    ],
    processSteps: [
      {
        number: "01",
        title: "Moisture & Damage Inspection",
        description: "We assess the affected area, identify the leak source, and map the extent of damage.",
      },
      {
        number: "02",
        title: "Demolition & Drying",
        description: "We remove wet materials and ensure wood framing is fully dried and treated.",
      },
      {
        number: "03",
        title: "Structural & Plumbing Rebuild",
        description: "We repair framing, update plumbing lines, and install new subflooring.",
      },
      {
        number: "04",
        title: "Waterproofing & Finish",
        description: "We install certified waterproof membranes, set new tile, and reconnect all fixtures.",
      },
    ],
    materialOptions: [
      {
        title: "Schluter® KERDI-BOARD Substrates",
        description: "Rigid, lightweight extruded polystyrene foam panels that provide 100% waterproof protection.",
        badge: "Vapor-Tight",
      },
      {
        title: "Kiln-Dried Framing Lumber",
        description: "Structural grade Douglas fir framing for joist sistering and wall reinforcement.",
        badge: "Structural Grade",
      },
      {
        title: "Exterior Grade Tongue & Groove Subfloor",
        description: "Moisture-resistant subfloor panels glued and screwed to prevent floor squeaks.",
        badge: "Solid Foundation",
      },
    ],
    faqs: [
      {
        question: "How can you tell if a shower leak has caused rot in the floor joists?",
        answer: "Indications include a soft or sunken feeling when stepping near the shower, water stains on ceilings below, or swollen baseboards. During our inspection, we can check moisture levels in adjacent framing.",
      },
      {
        question: "What waterproofing system do you use to ensure leaks won't happen again?",
        answer: "We use the Schluter® Shower System, which forms an integrated, sealed vapor-tight envelope behind the tile. It completely prevents water from contacting studs and subfloor.",
      },
      {
        question: "Do you work with insurance claims for water damage in bathrooms?",
        answer: "Yes. We can provide detailed written scopes of work and itemized estimates suitable for submission to your home insurance adjuster.",
      },
      {
        question: "Can you restore an older character home bathroom while keeping its classic charm?",
        answer: "Yes. We frequently restore bathrooms in older Fraser Valley homes, preserving architectural details like beadboard or clawfoot tubs while completely modernizing the underlying plumbing and waterproofing.",
      },
      {
        question: "How long does a typical bathroom restoration project take?",
        answer: "Most restoration projects take 1 to 2 weeks, depending on the drying time required for framing before new subfloors and waterproofing are installed.",
      },
    ],
    relatedServiceSlugs: ["bathroom-repair", "bathroom-replacement", "bathroom-remodeling", "shower-remodeling"],
  },

  {
    id: "shower-remodeling",
    slug: "shower-remodeling",
    title: "Shower Remodeling",
    category: "Showers & Tubs",
    tagline: "Walk-in showers, curbless entries, and frameless glass enclosures.",
    heroImage: tileSchluterImg,
    priceRange: "Complimentary In-Home Consultation & Quote",
    typicalTimeline: "1 to 2 Weeks",
    warranty: "Lifetime Schluter® Waterproofing Warranty + 5-Yr Workmanship Guarantee",
    badge: "Most Requested Service",
    overview:
      "We replace outdated tubs and shower stalls with walk-in showers, curbless entries, and certified waterproofing systems.",
    detailedParagraphs: [
      "A walk-in shower can improve daily access and comfort. Options include tile niches, benches, and frameless glass.",
      "Schluter® waterproofing is installed behind the tile to help keep the shower assembly dry.",
    ],
    keyBenefits: [
      {
        title: "Schluter® Certified Waterproofing",
        desc: "Integrated waterproof membranes are installed in the shower pan and walls.",
      },
      {
        title: "Curbless & Low-Threshold Options",
        desc: "Enjoy safe, easy entry with sleek curbless designs that make bathrooms feel open and spacious.",
      },
      {
        title: "Heavy Frameless Glass",
        desc: "We install custom 10mm tempered frameless glass panels and doors with premium hardware.",
      },
      {
        title: "Built-In Niches & Benches",
        desc: "Recessed storage niches and tiled benches give your shower convenient everyday functionality.",
      },
    ],
    inclusions: [
      "Removal of existing tub or shower surround down to bare wall studs",
      "Upgraded drainage lines, PEX water lines, and pressure-balanced shower valves",
      "Installation of pre-sloped waterproof shower trays and KERDI-BOARD wall panels",
      "Custom tile installation, stain-resistant grout, and frameless glass mounting",
    ],
    processSteps: [
      {
        number: "01",
        title: "Design & Measure",
        description: "We measure your space, discuss drain locations, and choose tile and glass styles.",
      },
      {
        number: "02",
        title: "Demolition & Plumbing",
        description: "We remove the old shower, update water lines, and relocate the drain if needed.",
      },
      {
        number: "03",
        title: "Schluter® Waterproofing",
        description: "We install an integrated waterproof shower pan, curb, and wall membranes.",
      },
      {
        number: "04",
        title: "Tile Setting",
        description: "Our setters install wall and floor tile with built-in niches and clean grout lines.",
      },
      {
        number: "05",
        title: "Glass & Fixtures",
        description: "We install custom frameless glass, connect trim fixtures, and test water flow.",
      },
    ],
    materialOptions: [
      {
        title: "10mm Custom Frameless Glass",
        description: "Heavy tempered clear glass with diamond-polished edges and anti-spotting coating.",
        badge: "Showcase Look",
      },
      {
        title: "Linear Drain Systems",
        description: "Sleek stainless steel linear drains allowing large format floor tiles with a single directional slope.",
        badge: "Curbless Ready",
      },
      {
        title: "Thermostatic Dual Showerheads",
        description: "Drenching overhead rain showers paired with convenient handheld slide-bar wands.",
        badge: "Luxury Function",
      },
    ],
    faqs: [
      {
        question: "Can any standard bathtub be converted into a walk-in shower?",
        answer: "Yes. A standard 60x30 inch or 60x32 inch alcove tub footprint converts perfectly into a spacious walk-in shower with a frameless glass door or open walk-in layout.",
      },
      {
        question: "What makes a curbless walk-in shower completely waterproof?",
        answer: "We recess the subfloor slightly so the sloped shower tray sits flush with the bathroom floor, then apply bonded Schluter® KERDI waterproofing across the entire shower and bathroom transition zone.",
      },
      {
        question: "What thickness of glass do you use for shower enclosures?",
        answer: "We use heavy 10mm (3/8 inch) tempered safety glass, custom measured after tile installation to ensure a tight, rattle-free fit with minimal hardware.",
      },
      {
        question: "How long does a complete shower remodel take in Langley?",
        answer: "A standard tub-to-shower conversion or shower rebuild takes 1 to 2 weeks from demolition through glass installation.",
      },
      {
        question: "What type of tile is best for a shower floor to prevent slipping?",
        answer: "Small mosaics (2x2 inch) or textured matte porcelain tiles provide natural slip resistance through multiple grout joints and surface grip.",
      },
    ],
    relatedServiceSlugs: ["bathtub-replacement", "bathroom-remodeling", "bathroom-tile-installation", "bathroom-renovation"],
  },

  {
    id: "bathtub-replacement",
    slug: "bathtub-replacement",
    title: "Bathtub Replacement",
    category: "Showers & Tubs",
    tagline: "Replace worn tubs with freestanding soakers or durable alcove bathtubs.",
    heroImage: freestandingTubImg,
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "3 to 5 Days",
    warranty: "Full Workmanship Warranty + Manufacturer Tub Warranty",
    badge: "Popular Tub Upgrade",
    overview:
      "We replace chipped, stained, or hard-to-clean tubs with freestanding soakers or deep acrylic alcove bathtubs.",
    detailedParagraphs: [
      "We handle plumbing connections, leveling, and surrounding tile work for alcove and freestanding tubs.",
      "We inspect the subfloor and install the waste and overflow assembly before testing the finished tub.",
    ],
    keyBenefits: [
      {
        title: "Proper Subfloor Support",
        desc: "We ensure subfloors are level and reinforced so your new bathtub sits rock-solid with zero flexing.",
      },
      {
        title: "Licensed Plumbing Installation",
        desc: "Red Seal plumbers install new overflow assemblies, brass drains, and modern tub fillers.",
      },
      {
        title: "Seamless Wall Surrounds",
        desc: "Whether tile or waterproof backer board, we seal surrounds to prevent moisture damage behind the tub.",
      },
      {
        title: "Clean, Damage-Free Removal",
        desc: "We extract heavy old bathtubs carefully without damaging adjacent walls or doorways.",
      },
    ],
    inclusions: [
      "Careful extraction and disposal of existing fiberglass, acrylic, or cast iron bathtubs",
      "Subfloor inspection, leveling, and structural reinforcement if needed",
      "New brass drain assembly, waste and overflow plumbing, and supply valve upgrades",
      "Setting new alcove or freestanding bathtub with waterproof perimeter sealing",
    ],
    processSteps: [
      {
        number: "01",
        title: "In-Home Assessment",
        description: "We verify alcove dimensions, inspect access points, and help you select the right tub.",
      },
      {
        number: "02",
        title: "Safe Tub Removal",
        description: "We disconnect plumbing and carefully remove the old tub from your home.",
      },
      {
        number: "03",
        title: "Plumbing & Base Prep",
        description: "We upgrade the drain assembly, check subfloor leveling, and prepare the base.",
      },
      {
        number: "04",
        title: "Setting & Testing",
        description: "We set the new tub securely, connect plumbing lines, seal edges, and test for leaks.",
      },
    ],
    materialOptions: [
      {
        title: "Double-Walled Acrylic Soakers",
        description: "Ergonomic freestanding bathtubs that retain bathwater heat longer and resist scratching.",
        badge: "Heat Retaining",
      },
      {
        title: "Deep Alcove Tubs with Tile Flange",
        description: "Deep soaking alcove bathtubs designed with an integrated tile flange for a leak-proof wall joint.",
        badge: "Shower-Ready",
      },
      {
        title: "Floor-Mounted Tub Fillers",
        description: "Solid brass freestanding fillers with ceramic disc valves and handheld personal shower sprayers.",
        badge: "Solid Brass",
      },
    ],
    faqs: [
      {
        question: "Can a freestanding soaking tub fit in place of a standard alcove tub?",
        answer: "Yes, many modern freestanding tubs are designed in 59-inch and 67-inch lengths that fit comfortably within a standard alcove footprint once side walls are tiled.",
      },
      {
        question: "Do cast iron or stone bathtubs require extra floor reinforcement?",
        answer: "Heavy cast iron or stone resin bathtubs filled with water can exceed 700 pounds. We inspect your floor joists and add structural blocking underneath if required by building code.",
      },
      {
        question: "What is the difference between acrylic and cast iron bathtubs?",
        answer: "Acrylic tubs are warm to the touch, lightweight, and available in sleek modern shapes. Cast iron tubs are heavier and have an ultra-hard porcelain enamel finish, but feel cooler initially.",
      },
      {
        question: "How long does a bathtub replacement take?",
        answer: "A standard bathtub replacement and plumbing hookup typically takes 3 to 5 days, including any tile surround adjustments.",
      },
      {
        question: "Can you add a handheld shower sprayer with the new tub?",
        answer: "Yes. Most modern deck-mounted or floor-mounted tub fillers include an integrated handheld wand for easy rinsing and cleaning.",
      },
    ],
    relatedServiceSlugs: ["shower-remodeling", "bathroom-replacement", "bathroom-remodeling", "bathroom-tile-installation"],
  },

  {
    id: "bathroom-tile-installation",
    slug: "bathroom-tile-installation",
    title: "Bathroom Tile Installation",
    category: "Showers & Tubs",
    tagline: "Floor, wall, and shower tile installation with durable waterproof substrates.",
    heroImage: tileSchluterImg,
    priceRange: "Complimentary Measure & Estimate",
    typicalTimeline: "3 to 7 Days",
    warranty: "Schluter® System Warranty + 5-Year Workmanship Guarantee",
    badge: "Master Craftsmanship",
    overview:
      "We install porcelain, ceramic, natural stone, and mosaic tile with careful layout and certified waterproofing in wet areas.",
    detailedParagraphs: [
      "We plan layout lines, balance corner cuts, and use leveling systems for an even finish.",
      "Uncoupling membranes and waterproof substrates help protect tile and wet walls.",
    ],
    keyBenefits: [
      {
        title: "Master Tile Craftsmanship",
        desc: "Crisp cuts, clean mitered edges, and laser-aligned layout ensure balanced, attractive patterns.",
      },
      {
        title: "Schluter®-DITRA Uncoupling",
        desc: "We install uncoupling membranes beneath floor tile to prevent subfloor movement from cracking tile.",
      },
      {
        title: "Stain-Resistant Grouting",
        desc: "High-performance grout and color-matched silicone caulking keep joints easy to clean and mold-resistant.",
      },
      {
        title: "Experience with All Materials",
        desc: "From 24x48 large-format porcelain to delicate herringbone and marble mosaics, we handle all styles.",
      },
    ],
    inclusions: [
      "Subfloor leveling and Schluter-DITRA uncoupling membrane installation",
      "Waterproof KERDI-BOARD substrate installation in all shower and tub wet zones",
      "Precision cutting, layout balancing, and tile setting with leveling clip systems",
      "Grout application, haze removal, and silicone expansion joint sealing",
    ],
    processSteps: [
      {
        number: "01",
        title: "Surface Preparation",
        description: "We check surfaces for level, apply uncoupling membrane, and plan the tile layout.",
      },
      {
        number: "02",
        title: "Layout & Dry Fitting",
        description: "We lay out key sight lines and center points to avoid awkward sliver cuts.",
      },
      {
        number: "03",
        title: "Tile Setting",
        description: "Tiles are installed with premium modified mortar and leveling clips for a flat, even finish.",
      },
      {
        number: "04",
        title: "Grouting & Sealing",
        description: "We apply stain-resistant grout, clean the surface thoroughly, and seal all internal corners.",
      },
    ],
    materialOptions: [
      {
        title: "Rectified Large Format Porcelain",
        description: "Precision-cut edges that allow narrow 1/16-inch grout joints for a seamless appearance.",
        badge: "Minimal Grout",
      },
      {
        title: "Natural Stone & Marble Mosaics",
        description: "Honed Carrara marble, travertine, and pebble mosaics for shower pans and feature niches.",
        badge: "Natural Beauty",
      },
      {
        title: "Electric Radiant Floor Heating",
        description: "Schluter-DITRA-HEAT in-floor warming cables installed directly beneath floor tiles.",
        badge: "Warm Floors",
      },
    ],
    faqs: [
      {
        question: "Why is an uncoupling membrane like Schluter-DITRA necessary under floor tile?",
        answer: "Wood subfloors naturally expand and contract with temperature and seasonal humidity in the Fraser Valley. Schluter-DITRA uncouples the tile layer from the subfloor, preventing cracks and loose grout.",
      },
      {
        question: "What size tile works best in a smaller bathroom?",
        answer: "Large-format tiles (like 12x24 inch) work surprisingly well in small bathrooms because fewer grout lines reduce visual clutter, making the floor and walls feel more expansive.",
      },
      {
        question: "What kind of grout should be used in a wet shower area?",
        answer: "We recommend high-performance polymer-modified or epoxy grouts that repel moisture, resist mold, and do not require periodic chemical re-sealing.",
      },
      {
        question: "Can you install in-floor radiant electric heating under the bathroom tile?",
        answer: "Yes. We frequently install Schluter-DITRA-HEAT cables with a programmable digital thermostat, giving you comfortably warm floors during chilly winter mornings.",
      },
      {
        question: "How do you prevent tile lippage with large-format porcelain tiles?",
        answer: "We use mechanical tile leveling clips and wedges that lock adjacent tile edges flush while the thin-set mortar cures, ensuring a smooth, level finish.",
      },
    ],
    relatedServiceSlugs: ["shower-remodeling", "bathroom-remodeling", "bathtub-replacement", "bathroom-renovation"],
  },

  {
    id: "bathroom-vanity-installation",
    slug: "bathroom-vanity-installation",
    title: "Bathroom Vanity Installation",
    category: "Design & Planning",
    tagline: "Install custom or pre-built vanities, quartz countertops, sinks, and plumbing.",
    heroImage: customVanityImg,
    priceRange: "Complimentary In-Home Measure & Quote",
    typicalTimeline: "1 to 3 Days",
    warranty: "Full Workmanship & Plumbing Connection Guarantee",
    badge: "Storage & Style",
    overview:
      "We install freestanding and floating vanities with quartz countertops, undermount sinks, and modern faucets.",
    detailedParagraphs: [
      "We level and anchor the cabinet, then adapt plumbing to fit the new drawer layout.",
      "Choose a single, double, or floating vanity based on your space and storage needs.",
    ],
    keyBenefits: [
      {
        title: "Solid Anchoring & Leveling",
        desc: "We anchor cabinets securely to wall studs, with heavy-duty backing for modern floating vanities.",
      },
      {
        title: "Plumbing Adaptations",
        desc: "Our plumbers modify drain and supply lines to ensure clean fitment around deep vanity drawers.",
      },
      {
        title: "Seamless Quartz & Sink Fit",
        desc: "Countertops are carefully set and undermount sinks are sealed with commercial silicone to prevent leaks.",
      },
      {
        title: "Matching Mirrors & Hardware",
        desc: "We align mirrors, lighting, and matching cabinet hardware for a polished, cohesive look.",
      },
    ],
    inclusions: [
      "Careful removal of your existing vanity and disconnection of plumbing",
      "Supply line and drain adjustments to fit new cabinet drawer configurations",
      "Secure wall anchoring, leveling, and cabinet assembly",
      "Countertop placement, undermount sink mounting, faucet connection, and drain testing",
    ],
    processSteps: [
      {
        number: "01",
        title: "Measurement & Plumbing Check",
        description: "We measure your space and check drain locations against the new vanity's drawer layout.",
      },
      {
        number: "02",
        title: "Removal & Wall Prep",
        description: "We shut off water, remove the old vanity, and patch or prep the wall surface.",
      },
      {
        number: "03",
        title: "Cabinet Leveling & Mounting",
        description: "We shim, level, and anchor the cabinet securely to wall studs.",
      },
      {
        number: "04",
        title: "Top Installation & Plumbing",
        description: "We secure the quartz top, seal undermount sinks, hook up the faucet, and test drainage.",
      },
    ],
    materialOptions: [
      {
        title: "Engineered Quartz Slabs",
        description: "Stain-resistant, non-porous quartz surfaces with factory-polished undermount sink cutouts.",
        badge: "Durable Top",
      },
      {
        title: "Soft-Close Solid Wood Hardware",
        description: "Dovetail solid wood drawers with smooth full-extension soft-close undermount drawer slides.",
        badge: "Quiet Motion",
      },
      {
        title: "Vitreous China Undermount Sinks",
        description: "High-gloss porcelain sinks with overflow protection, sealed tight beneath the countertop.",
        badge: "Easy Clean",
      },
    ],
    faqs: [
      {
        question: "Can you convert a single-sink vanity into a double-sink vanity?",
        answer: "Yes, provided there is sufficient wall width (typically 60 inches or wider). We can split the water supply lines and install a dual-drain rough-in inside the wall.",
      },
      {
        question: "What extra support is needed for a floating wall-hung vanity?",
        answer: "Floating vanities require solid horizontal wood blocking between wall studs to carry the weight of the cabinet, stone top, and full sinks. We reinforce the framing before hanging the vanity.",
      },
      {
        question: "Can I install a new vanity without replacing the existing floor tile?",
        answer: "Yes. We verify that the new vanity has a matching or slightly wider footprint and base kick so that any un-tiled floor beneath the old vanity remains completely hidden.",
      },
      {
        question: "What countertop material is best for high-traffic bathroom vanities?",
        answer: "Engineered quartz is the top choice for bathroom vanities because it is completely non-porous, resists toothpaste and makeup stains, and never requires periodic sealing like granite or marble.",
      },
      {
        question: "Do you connect all the plumbing and faucets when installing the vanity?",
        answer: "Yes. Our licensed trades connect the faucet, drain assembly, p-trap, and shut-off valves, then run water flow tests to confirm leak-free operation before completing the job.",
      },
    ],
    relatedServiceSlugs: ["bathroom-remodeling", "bathroom-design", "bathroom-upgrades", "bathroom-tile-installation"],
  },
];

export const getServiceBySlug = (slug: string): ServiceDetailItem | undefined => {
  return servicesDetailList.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase() || item.id.toLowerCase() === slug.toLowerCase()
  );
};
