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
  beforeImage: string;
  afterImage: string;
  beforeAfterTitle: string;
  beforeAfterDesc: string;
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
    tagline: "Turnkey architectural bathroom transformations engineered from studs to luxury fixtures.",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "2 to 3 Weeks",
    warranty: "Lifetime Schluter® Waterproofing + 5-Yr Workmanship Guarantee",
    badge: "Most Comprehensive Solution",
    overview:
      "Our full-service bathroom remodeling service delivers complete structural, aesthetic, and functional overhauls for master ensuites, main guest baths, and basement suites across Langley and the Fraser Valley. We handle every phase in-house—from photorealistic 3D CAD blueprints and dust-contained demolition to Red Seal rough-in plumbing, radiant heated floors, custom floating quartz vanities, and frameless glass shower enclosures.",
    detailedParagraphs: [
      "Whether your existing space suffers from outdated 1990s fiberglass fixtures, inefficient layouts, water damage, or poor ventilation, our licensed remodeling team reconfigures the entire floor plan to optimize space and light.",
      "Every project is led by a dedicated site superintendent who ensures transparent daily communication, punctual scheduling, and rigorous adherence to the BC Building Code. We install advanced Schluter® KERDI-BOARD waterproofing substrates behind all wet areas to guarantee complete, lifetime leak protection.",
    ],
    keyBenefits: [
      {
        title: "Complete In-House Project Management",
        desc: "Single point of contact from 3D architectural design and city permits through final white-glove inspection.",
      },
      {
        title: "Schluter® Certified Waterproofing",
        desc: "Zero moisture penetration with bonded vapor-tight waterproofing membrane and vapor-sealed ceiling systems.",
      },
      {
        title: "Custom Luxury Cabinetry & Quartz",
        desc: "Locally crafted soft-close vanities with solid plywood construction and stain-resistant quartz countertops.",
      },
      {
        title: "High Resale ROI in Langley",
        desc: "Quality bathroom renovations yield an average 75% to 88% return on investment in the Fraser Valley housing market.",
      },
    ],
    inclusions: [
      "Complimentary In-Home Laser Measure & 3D CAD Architectural Visualization",
      "Full Tear-Out, Subfloor Inspection & Environmentally Responsible Haul-Away",
      "Red Seal Licensed Plumbing Reconfiguration & Drain Upgrades",
      "Electrical Rewiring, LED Recessed Pot Lights & Quiet Exhaust Fan (110+ CFM)",
      "Schluter® KERDI-BOARD Membrane & Shower Pan Installation",
      "Large-Format Floor & Wall Tile Installation with Epoxy Grout",
      "Custom Double or Single Floating Vanity with Quartz Countertops & Undermount Sinks",
      "10mm Heavy Tempered Frameless Glass Enclosure & Hardware",
      "Thermostatic Multi-Jet Shower System, Soaker Tub & High-Efficiency Dual-Flush Toilet",
      "Post-Project Deep Cleaning & 5-Year Comprehensive Workmanship Warranty",
    ],
    processSteps: [
      {
        number: "01",
        title: "In-Home 3D Design Consultation",
        description: "We visit your home in Langley, laser-scan the existing footprint, and build photorealistic 3D CAD options to nail your exact layout, color palette, and fixture selections.",
        duration: "Day 1 - 3",
      },
      {
        number: "02",
        title: "Dust-Contained Demolition & Prep",
        description: "We seal surrounding rooms with zip-wall barriers and commercial HEPA air scrubbers before stripping outdated drywall, tubs, and flooring down to the raw framing.",
        duration: "Day 4 - 5",
      },
      {
        number: "03",
        title: "Rough-In Plumbing & Electrical",
        description: "Licensed Red Seal plumbers and electricians relocate drains, upgrade water lines to PEX-A, install dedicated GFCI circuits, and add in-wall niche blocking.",
        duration: "Day 6 - 8",
      },
      {
        number: "04",
        title: "Schluter® Waterproofing & Tile",
        description: "Complete water-tight substrate installation followed by laser-aligned porcelain tile, radiant floor heating coils, and stain-resistant epoxy grouting.",
        duration: "Day 9 - 14",
      },
      {
        number: "05",
        title: "Vanity, Glass & Final Trim-Out",
        description: "Installing custom cabinetry, quartz tops, 10mm frameless glass, plumbing trim, smart bidet toilets, followed by a 40-point quality audit.",
        duration: "Day 15 - 18",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Willoughby Master Ensuite Overhaul",
    beforeAfterDesc: "Replaced an awkward angled fiberglass corner tub and cramped acrylic shower with a zero-threshold curbless walk-in shower, freestanding soaker tub, and 84-inch walnut double vanity.",
    materialOptions: [
      {
        title: "Large Format Porcelain Slabs",
        description: "24x48 inch rectified porcelain mimicking Italian Calacatta marble with minimal grout lines.",
        badge: "Low Maintenance",
      },
      {
        title: "Engineered Quartz Countertops",
        description: "Non-porous, stain-resistant quartz with waterfall edges and custom sink cutouts.",
        badge: "Scratch Resistant",
      },
      {
        title: "Matte Black & Brushed Brass Fixtures",
        description: "Solid brass thermostatic shower valves and dual lever faucets with PVD tarnish-proof finish.",
        badge: "Premium Quality",
      },
    ],
    faqs: [
      {
        question: "How long does a full bathroom remodel typically take in Langley?",
        answer: "A standard full bathroom remodel takes approximately 2 to 3 weeks from demolition to final walkthrough. Custom master ensuites with complex structural adjustments or steam rooms can take 3 to 4 weeks.",
      },
      {
        question: "Do you handle city permits and building inspections in Langley Township?",
        answer: "Yes, Ideal Bath Renovations handles all necessary municipal permits and coordinate directly with township inspectors for plumbing, framing, and electrical sign-offs.",
      },
      {
        question: "Can we remain living in our home during the remodel?",
        answer: "Yes! If you have a second bathroom, you can comfortably stay at home. We use heavy plastic dust containment doors and HEPA commercial scrubbers to keep dust strictly confined to the work zone.",
      },
      {
        question: "What makes Schluter® waterproofing superior to traditional green board drywall?",
        answer: "Green board is only moisture-resistant, not waterproof. Schluter® KERDI-BOARD is an uncoupling, completely waterproof membrane that guarantees moisture never reaches wood studs, preventing mold and rot permanently.",
      },
    ],
    relatedServiceSlugs: ["bathroom-renovation", "shower-remodeling", "bathroom-design", "bathroom-tile-installation"],
  },

  {
    id: "bathroom-renovation",
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    category: "Modernization",
    tagline: "Refreshing style, functionality, and fixture efficiency without altering major structural framing.",
    heroImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "7 to 12 Days",
    warranty: "5-Year Workmanship Warranty & Manufacturer Guarantees",
    badge: "Best Value Transformation",
    overview:
      "Our bathroom renovation service focuses on transforming worn, dated bathrooms into modern, high-efficiency spaces while keeping the core layout footprint intact. This approach maximizes your budget by avoiding costly structural relocations, allowing you to invest in premium tile, designer vanities, quiet ventilation, and high-efficiency water fixtures.",
    detailedParagraphs: [
      "We replace old laminate countertops, chipped tubs, peeling vinyl flooring, and noisy exhaust fans with durable, contemporary finishes. Because the existing plumbing drain locations are preserved, turnaround is rapid—getting your bathroom back in service in under two weeks.",
      "Every renovation includes subfloor structural checks, modern waterproof backer installation behind shower walls, and precision tile setting to ensure long-term durability.",
    ],
    keyBenefits: [
      {
        title: "Budget-Optimized Modernization",
        desc: "Achieve luxury aesthetics at 30% lower cost by working within existing plumbing footprints.",
      },
      {
        title: "Fast 7-12 Day Turnaround",
        desc: "Efficient project schedules minimize disruption to your family's morning routine.",
      },
      {
        title: "Eco-Friendly Water & Energy Savings",
        desc: "Save up to 40% on water usage with WaterSense certified fixtures and LED smart lighting.",
      },
      {
        title: "Premium Fixture Upgrades",
        desc: "Direct access to top brands like Moen, Kohler, Delta, and Riobel at contractor trade pricing.",
      },
    ],
    inclusions: [
      "Targeted Demolition of Outdated Tubs, Vanities, Mirrors, and Flooring",
      "Subfloor Leveling & Cementitious Underlayment Reinforcement",
      "Shower & Tub Surround Waterproof Substrate Installation",
      "New Designer Porcelain or Ceramic Tile for Floors and Wet Walls",
      "Single or Double Vanity Installation with Quartz or Solid Surface Counter",
      "Modern Under-Mount Sinks & Contemporary Single-Handle Faucets",
      "Quiet 110 CFM Panasonic WhisperCeiling Exhaust Fan",
      "Frameless LED Backlit Anti-Fog Vanity Mirror Installation",
    ],
    processSteps: [
      {
        number: "01",
        title: "Design Review & Material Selection",
        description: "We help you select coordinating tile, vanity styles, countertops, and hardware finishes from our curated local vendor partners.",
        duration: "Day 1 - 2",
      },
      {
        number: "02",
        title: "Controlled Removal",
        description: "Old vanities, toilets, tile, and flooring are carefully removed with dust shields in place, protecting adjacent flooring.",
        duration: "Day 3",
      },
      {
        number: "03",
        title: "Waterproofing & Substrate Prep",
        description: "Subfloors are leveled and waterproof backer board is secured and sealed with waterproof banding at all seams.",
        duration: "Day 4 - 5",
      },
      {
        number: "04",
        title: "Tile Setting & Grouting",
        description: "Artisanal tile installation with laser levelling and high-performance mold-resistant grout.",
        duration: "Day 6 - 8",
      },
      {
        number: "05",
        title: "Fixture Mounting & Caulking",
        description: "Vanity, sink, faucet, mirror, toilet, and accessories installed and color-matched 100% silicone caulking applied.",
        duration: "Day 9 - 10",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Walnut Grove Guest Bathroom Renovation",
    beforeAfterDesc: "Transformed an outdated yellow oak vanity and laminate tub surround into a modern Scandinavian haven with chevron tile and floating oak vanity.",
    materialOptions: [
      {
        title: "Glazed Subway & Chevron Tiles",
        description: "Classic ceramic tiles with beveled or handmade edges for timeless elegance.",
        badge: "Timeless",
      },
      {
        title: "Waterproof SPC Luxury Vinyl Plank",
        description: "100% waterproof click-lock flooring with acoustic cork backing.",
        badge: "Warm Underfoot",
      },
      {
        title: "Brushed Nickel Fixtures",
        description: "Spot-resistant brushed nickel faucets that resist water spots and fingerprints.",
        badge: "Easy Clean",
      },
    ],
    faqs: [
      {
        question: "What is the difference between bathroom remodeling and bathroom renovation?",
        answer: "A renovation generally updates the materials and fixtures within the existing layout (new tile, vanity, tub). A remodel involves structural changes, moving plumbing/electrical lines, or expanding room dimensions.",
      },
      {
        question: "Can I supply my own vanity or tiles?",
        answer: "Yes! You are welcome to supply your own materials, or leverage our trade discounts with premier tile and plumbing suppliers across Metro Vancouver.",
      },
      {
        question: "Do you offer financing options for bathroom renovations in BC?",
        answer: "Yes, we partner with trusted Canadian home improvement lenders offering flexible, low-interest monthly financing plans.",
      },
    ],
    relatedServiceSlugs: ["bathroom-remodeling", "bathroom-upgrades", "bathroom-vanity-installation", "bathtub-replacement"],
  },

  {
    id: "bathroom-repair",
    slug: "bathroom-repair",
    title: "Bathroom Repair",
    category: "Repairs & Fixes",
    tagline: "Fast, permanent repairs for leaking shower pans, cracked tiles, failing grout, and faulty plumbing.",
    heroImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "1 to 3 Days",
    warranty: "2-Year Repair Warranty on Water-Tight Seals",
    badge: "24/7 Rapid Response",
    overview:
      "Bathroom leaks and structural moisture issues can quickly lead to costly rot, mold colonies, and ceiling damage in the rooms below. Our bathroom repair team diagnoses hidden moisture using thermal imaging and moisture meters, then executes surgical, permanent repairs—from repairing cracked shower pans and failing shower valve cartridges to rebuilding rotted subfloors and regrouting.",
    detailedParagraphs: [
      "We avoid temporary patch jobs. If a shower is leaking behind the tile, we isolate the compromised membrane, replace rotted framing timber, re-waterproof to current code standards, and match existing tiles seamlessly.",
      "Ideal Bath Renovations operates 24/7 for emergency water leak assessments across Langley, Fort Langley, Surrey, and Abbotsford.",
    ],
    keyBenefits: [
      {
        title: "Thermal Leak Detection",
        desc: "Non-invasive thermal imaging to pinpoint hidden pipe leaks behind tiled walls without unnecessary demolition.",
      },
      {
        title: "Subfloor Rot Remediation",
        desc: "Sistering joists and replacing water-damaged subflooring around leaking toilet flanges and shower pans.",
      },
      {
        title: "Shower Valve & Cartridge Overhauls",
        desc: "Repairing leaking pressure-balanced valves, diverters, and dripping faucets without retiling whole walls.",
      },
      {
        title: "Tile & Epoxy Regrouting",
        desc: "Removing deteriorated cement grout and replacing with mold-proof, stain-resistant epoxy grouting.",
      },
    ],
    inclusions: [
      "Diagnostic Moisture Inspection & Thermal Camera Scan",
      "Isolation & Repair of Leaking Supply Lines or Waste Drains",
      "Shower Pan Membrane Testing & Resealing / Rebuilding",
      "Rotted Wood Subfloor & Stud Reinforcement",
      "Cracked Tile Replacement & Custom Color-Match Grouting",
      "Anti-Microbial Mold & Mildew Disinfection Treatment",
      "100% Pure Silicone Caulking at All Counter, Tub, and Shower Transitions",
    ],
    processSteps: [
      {
        number: "01",
        title: "Diagnostic Assessment",
        description: "We trace the root cause of the leak using moisture meters, dye testing, or thermal imaging.",
        duration: "Hour 1 - 2",
      },
      {
        number: "02",
        title: "Surgical Containment & Access",
        description: "Only the damaged section of tile or drywall is carefully removed, keeping surrounding areas intact.",
        duration: "Day 1",
      },
      {
        number: "03",
        title: "Structural & Plumbing Repair",
        description: "Plumbing lines are repaired and pressure tested; rotted wood framing is treated and reinforced.",
        duration: "Day 1 - 2",
      },
      {
        number: "04",
        title: "Waterproof Patch & Surface Restore",
        description: "Schluter waterproofing patches are tied in, replacement tile is set, and epoxy grout is packed into joints.",
        duration: "Day 2 - 3",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Murrayville Shower Pan Leak Restoration",
    beforeAfterDesc: "Diagnosed a leaking corner shower curb that caused ceiling stains downstairs. Removed damaged floor, installed new Schluter pan, and retiled with matching stone mosaic.",
    materialOptions: [
      {
        title: "Epoxy Waterproof Grout",
        description: "100% solid epoxy that never needs sealing and prevents water penetration completely.",
        badge: "Permanent Seal",
      },
      {
        title: "Commercial Mold Barrier Primers",
        description: "EPA-registered anti-microbial treatments preventing mold regrowth.",
        badge: "Anti-Mold",
      },
    ],
    faqs: [
      {
        question: "How do I know if my shower is leaking behind the wall?",
        answer: "Warning signs include squishy flooring around the shower, cracked grout lines, musty odors, peeling paint on adjoining walls, or water stains on the ceiling directly below the bathroom.",
      },
      {
        question: "Can you replace just a few broken tiles without redoing the entire shower?",
        answer: "Yes, if you have spare tiles or if we can source an exact match, we can carefully remove broken tiles, inspect the waterproofing behind them, and reset new tiles seamlessly.",
      },
    ],
    relatedServiceSlugs: ["bathroom-restoration", "bathroom-replacement", "shower-remodeling", "bathroom-tile-installation"],
  },

  {
    id: "bathroom-replacement",
    slug: "bathroom-replacement",
    title: "Bathroom Replacement",
    category: "Full Replacement",
    tagline: "Complete component replacement of outdated tubs, toilets, sinks, and showers.",
    heroImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "5 to 10 Days",
    warranty: "5-Year Workmanship Warranty",
    badge: "Direct Replacement",
    overview:
      "When bathroom components reach the end of their lifespan, surface refinishing is only a temporary band-aid. Our bathroom replacement service completely removes failing bathtubs, leaky shower stalls, stained porcelain sinks, and running toilets, replacing them with commercial-grade, modern fixtures built to last 20+ years.",
    detailedParagraphs: [
      "We specialize in drop-in replacement solutions that fit standard building dimensions, minimizing labor costs while giving you brand-new, hygienic acrylic, cast iron, or solid quartz surfaces.",
      "All replacements include new shut-off valves, braided stainless steel water supply lines, and updated P-traps to ensure zero leaks for decades.",
    ],
    keyBenefits: [
      {
        title: "Hygienic Non-Porous Surfaces",
        desc: "Say goodbye to stained, porous old enamel and fiberglass that traps soap scum and bacteria.",
      },
      {
        title: "Heavy-Gauge Acrylic & Cast Iron",
        desc: "High-density acrylic bathtubs and solid vitreous china toilets that resist chipping and scratching.",
      },
      {
        title: "Plumbing Valve Upgrades Included",
        desc: "All stop valves and pressure-balancing rough-ins are replaced with brand-new brass components.",
      },
    ],
    inclusions: [
      "Removal and Disposal of Old Tub, Shower, Vanity, and Toilet",
      "Inspection of Subfloor and Drain Flanges",
      "Installation of High-Grade Acrylic Bathtub or Walk-In Shower Base",
      "New Pressure-Balanced Shower Valve & Trim Kit",
      "Solid Surface Wall Panels or Waterproof Tile Surrounds",
      "High-Efficiency 4.8L Dual-Flush Toilet Installation",
    ],
    processSteps: [
      {
        number: "01",
        title: "Dimension Verification",
        description: "Precise measurement of alcove widths, plumbing centerlines, and door clearances.",
        duration: "Day 1",
      },
      {
        number: "02",
        title: "Tear-Out & Waste Removal",
        description: "Clean removal of old fixtures, safely carried out with floor runners in place.",
        duration: "Day 2",
      },
      {
        number: "03",
        title: "New Rough-in & Structural Anchor",
        description: "Plumbing valves updated, mortar bed poured under tub/base for solid zero-flex foundation.",
        duration: "Day 3 - 4",
      },
      {
        number: "04",
        title: "Surround & Fixture Commissioning",
        description: "Wall panels or tile installed, glass doors hung, water pressure balanced and tested.",
        duration: "Day 5 - 7",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Brookswood Alcove Tub & Vanity Replacement",
    beforeAfterDesc: "Swapped out a stained 1980s pink bathtub and yellow countertop for an ultra-deep soaker tub, ceramic tile surround, and clean white quartz vanity.",
    materialOptions: [
      {
        title: "Lucite® Cast Acrylic",
        description: "Colorfast, scratch-resistant acrylic with fiberglass reinforcement.",
        badge: "Durable",
      },
      {
        title: "Solid Vitreous China",
        description: "Ultra-glazed porcelain that resists staining and chemical wear.",
        badge: "Easy Cleaning",
      },
    ],
    faqs: [
      {
        question: "How long does a bathtub and shower replacement take?",
        answer: "A standard alcove bathtub or shower replacement typically takes between 3 to 5 business days from removal to final silicone cure.",
      },
      {
        question: "Do you haul away the old cast iron or acrylic tub?",
        answer: "Yes, full demolition, heavy hauling, and eco-friendly recycling disposal are included in our fixed-price quotes.",
      },
    ],
    relatedServiceSlugs: ["bathtub-replacement", "shower-remodeling", "bathroom-repair", "bathroom-vanity-installation"],
  },

  {
    id: "bathroom-installation",
    slug: "bathroom-installation",
    title: "Bathroom Installation",
    category: "New Construction & Additions",
    tagline: "Building brand-new bathrooms in basements, room additions, and secondary suites.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "2 to 3 Weeks",
    warranty: "5-Year Workmanship Warranty & Municipal Sign-Off",
    badge: "New Suite & Addition Specialists",
    overview:
      "Adding a brand-new bathroom to a basement, master bedroom addition, or secondary rental suite adds massive living comfort and immediate property appraisal value. We handle new bathroom installations from the ground up: concrete slab trenching for drain rough-ins, new plumbing stacks, dedicated 20-amp electrical circuits, framing, insulation, ventilation, and premium finishing.",
    detailedParagraphs: [
      "Installing a bathroom where none existed requires specialized engineering—especially in basement slab settings where backwater valves, sewage ejector pumps, or concrete coring may be necessary. Our Red Seal plumbers and certified electricians ensure 100% compliance with Langley Township and BC Building Codes.",
      "From compact 2-piece powder rooms under staircases to full 4-piece basement rental suite bathrooms, we deliver turnkey craftsmanship ready for immediate occupancy.",
    ],
    keyBenefits: [
      {
        title: "Concrete Trenching & Drain Rough-Ins",
        desc: "Precision slab cutting, pipe grade calculations, and concrete restoration for basement suites.",
      },
      {
        title: "Dedicated Electrical & Ventilation",
        desc: "Independent GFCI circuits, dedicated switches, and exterior core-vented exhaust fans.",
      },
      {
        title: "Rental Suite & Resale Value Boost",
        desc: "Adding a full bathroom increases home valuation by an average of $25,000 - $45,000 in Langley.",
      },
    ],
    inclusions: [
      "Architectural Blueprint & Permit Processing",
      "Framing of New Interior Partition Walls & Sound Insulation",
      "Concrete Slab Trenching, Drain Lines & Vent Stack Routing",
      "PEX-A Water Supply Line Installation from Main Header",
      "Electrical Wiring, LED Pot Lights & Wall Sconce Rough-In",
      "Drywalling, Moisture-Resistant Board & Painting",
      "Complete Fixture, Tile, Vanity, Shower & Toilet Installation",
    ],
    processSteps: [
      {
        number: "01",
        title: "Feasibility & Plumbing Layout",
        description: "We inspect your main water service, drainage stack, and electrical panel capacity to design the most cost-effective path.",
        duration: "Day 1 - 3",
      },
      {
        number: "02",
        title: "Concrete Trenching & Framing",
        description: "Slab is cut with water-cooled saws, underground ABS drains are tied in, and new wall framing is erected.",
        duration: "Day 4 - 7",
      },
      {
        number: "03",
        title: "Rough-In Plumbing & Electrical",
        description: "Supply lines, shower valves, electrical wiring, and exterior vent penetrations are completed and inspected.",
        duration: "Day 8 - 11",
      },
      {
        number: "04",
        title: "Insulation, Drywall & Waterproofing",
        description: "Roxul soundproofing insulation, mold-resistant drywall, taping, and Schluter shower substrate.",
        duration: "Day 12 - 15",
      },
      {
        number: "05",
        title: "Tile, Fixtures & Final Certification",
        description: "Tile installation, vanity mounting, toilet install, testing, and final municipal inspection.",
        duration: "Day 16 - 19",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Fort Langley Basement Suite Bathroom Addition",
    beforeAfterDesc: "Created a brand-new 3-piece bathroom in an unfinished basement, featuring slab drainage trenching, acrylic walk-in shower, and floating storage vanity.",
    materialOptions: [
      {
        title: "Saniflo & Sewage Ejector Systems",
        description: "High-performance macerator pumps for below-grade basements where gravity drain is not possible.",
        badge: "Basement Specialist",
      },
      {
        title: "Roxul Safe'n'Sound Insulation",
        description: "Acoustic stone wool insulation for maximum sound dampening between rental suites.",
        badge: "Soundproof",
      },
    ],
    faqs: [
      {
        question: "Can you add a bathroom in a basement that has no existing rough-ins?",
        answer: "Yes! We specialize in cutting into concrete basement slabs, laying proper gravity drainage lines to your main sewer line, and repouring concrete cleanly.",
      },
      {
        question: "How much electrical panel capacity do I need for a new bathroom?",
        answer: "A new bathroom requires at least one dedicated 15-amp or 20-amp GFCI circuit for outlets, plus circuits for lighting, exhaust fans, and optional in-floor heating.",
      },
    ],
    relatedServiceSlugs: ["bathroom-remodeling", "bathroom-renovation", "bathroom-design", "bathroom-upgrades"],
  },

  {
    id: "bathroom-design",
    slug: "bathroom-design",
    title: "Bathroom Design",
    category: "Planning & Architecture",
    tagline: "Photorealistic 3D CAD modeling, material selection, and ergonomic space optimization.",
    heroImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Free with Renovation / Custom CAD Package",
    typicalTimeline: "3 to 5 Days",
    warranty: "100% Design Satisfaction Guarantee",
    badge: "3D CAD Visualization",
    overview:
      "Eliminate guesswork and costly on-site change orders with our professional bathroom design service. Using state-of-the-art 3D CAD software and precise laser site scanning, our interior design team creates photorealistic renderings of your renovated bathroom before construction begins. You can see exact tile patterns, vanity proportions, shower door swings, and lighting levels.",
    detailedParagraphs: [
      "Good design is about more than just matching colors; it involves analyzing plumbing clearances, traffic flow, storage capacity, ventilation CFM requirements, and natural lighting angles. We guide you through curated material palettes, coordinating tile, countertops, hardware, and plumbing trim seamlessly.",
      "Every design package includes detailed construction drawings, electrical plans, and fixture specification schedules for seamless execution.",
    ],
    keyBenefits: [
      {
        title: "Photorealistic 3D Visualizations",
        desc: "Experience high-definition 360-degree digital walkthroughs with your exact chosen materials and finishes.",
      },
      {
        title: "Eliminate On-Site Surprises",
        desc: "Prevent costly design conflicts and fixture sizing errors before ordering materials.",
      },
      {
        title: "Curated Material & Finish Sourcing",
        desc: "Access exclusive designer trade discounts with tile, quartz, and luxury plumbing showrooms across Vancouver.",
      },
    ],
    inclusions: [
      "In-Home Laser Site Measurement & As-Built Documentation",
      "2-3 Conceptual Layout Variations for Maximum Space Utilization",
      "Photorealistic 3D Color Renders with Lighting Simulation",
      "Itemized Material & Fixture Specification Schedule with Trade Pricing",
      "Electrical, Plumbing & Framing Construction Blueprints",
      "Design Fee 100% Credited Toward Renovation Package",
    ],
    processSteps: [
      {
        number: "01",
        title: "Consultation & Style Profiling",
        description: "We discuss your aesthetic preferences (Modern Organic, Japandi, Contemporary, Classic Luxury) and functional wishlist.",
        duration: "Day 1",
      },
      {
        number: "02",
        title: "Laser Scanning & Layout Options",
        description: "We record millimeter-accurate dimensions and draft 2D layout options optimizing shower and vanity placement.",
        duration: "Day 2",
      },
      {
        number: "03",
        title: "3D Photorealistic Rendering",
        description: "We render high-resolution 3D models with your selected tile textures, cabinetry stains, and lighting effects.",
        duration: "Day 3 - 4",
      },
      {
        number: "04",
        title: "Review & Revision Session",
        description: "We review the 3D model with you, make adjustments, and generate the final fixed-price construction budget.",
        duration: "Day 5",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Willoughby 3D CAD Concept to Reality",
    beforeAfterDesc: "Rendered a custom Japanese soaking tub concept with fluted oak vanity and recessed LED light channels that was built to exact specifications.",
    materialOptions: [
      {
        title: "3D CAD Cloud Walkthroughs",
        description: "Interactive 3D viewing accessible directly on your smartphone or computer.",
        badge: "Interactive",
      },
      {
        title: "Physical Sample Boards",
        description: "Touch and feel actual tile samples, quartz swatches, and hardware metals in your home lighting.",
        badge: "Tactile",
      },
    ],
    faqs: [
      {
        question: "Is the 3D design consultation really free?",
        answer: "Yes, our initial in-home design consultation and 3D conceptual rendering are completely complimentary when you choose Ideal Bath Renovations for your remodeling project.",
      },
      {
        question: "Can I use your 3D designs if I hire another contractor?",
        answer: "We offer standalone design packages that include all construction blueprints, 3D CAD visualizations, and itemized material specification lists.",
      },
    ],
    relatedServiceSlugs: ["bathroom-remodeling", "bathroom-renovation", "bathroom-installation", "bathroom-upgrades"],
  },

  {
    id: "bathroom-upgrades",
    slug: "bathroom-upgrades",
    title: "Bathroom Upgrades",
    category: "High-Impact Enhancements",
    tagline: "Elevating your daily routine with heated floors, smart bidets, LED mirrors, and luxury fixtures.",
    heroImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "2 to 5 Days",
    warranty: "3-Year Equipment & Workmanship Warranty",
    badge: "Smart Home & Luxury Comfort",
    overview:
      "You don't always need a full tear-out to dramatically enhance your bathroom experience. Our bathroom upgrades service delivers targeted, high-impact improvements: Schluter® DITRA-HEAT radiant floor warming with WiFi smart thermostats, high-tech bidet toilet seats with heated seats and warm air drying, anti-fog LED backlit mirrors, whisper-quiet ventilation, and luxury thermostatic shower columns.",
    detailedParagraphs: [
      "Our licensed electrical and plumbing specialists install upgrades cleanly with minimal downtime. We run concealed wiring and dedicated circuits so no unsightly cords or exposed pipes are visible.",
      "Upgrading key fixtures is the most cost-effective way to modernize a bathroom in a newer townhouse or condo in Willoughby, Walnut Grove, or Clayton Heights.",
    ],
    keyBenefits: [
      {
        title: "Schluter® DITRA-HEAT In-Floor Warming",
        desc: "Wake up to warm bathroom tile floors controlled by programmable WiFi smartphone thermostats.",
      },
      {
        title: "Smart Bidet & Heated Toilets",
        desc: "Self-cleaning stainless steel nozzles, heated seats, warm water wash, and automatic lid sensors.",
      },
      {
        title: "Anti-Fog LED Vanity Mirrors",
        desc: "Integrated defogger pads and tunable color temperature (3000K-6000K) for flawless grooming.",
      },
      {
        title: "Whisper-Quiet 0.3 Sone Ventilation",
        desc: "Commercial-grade Panasonic exhaust fans with humidity sensors that prevent bathroom steam and mold.",
      },
    ],
    inclusions: [
      "Schluter® DITRA-HEAT Electric Cable & Uncoupling Membrane Installation",
      "Dedicated Electrical Circuit Pull & WiFi Smart Thermostat",
      "Smart Toilet / Electronic Bidet Seat Plumbing & Power Connection",
      "Anti-Fog LED Illuminated Mirror Mounting & Concealed Hardwiring",
      "Thermostatic Rain Shower Head & Handheld Wand Upgrade",
      "Matte Black, Brushed Gold, or Chrome Designer Towel Warmers",
    ],
    processSteps: [
      {
        number: "01",
        title: "Circuit & Plumbing Audit",
        description: "We check your electrical panel and plumbing rough-ins to verify capacity for heated floors or bidet power.",
        duration: "Day 1",
      },
      {
        number: "02",
        title: "Electrical & In-Wall Rough-In",
        description: "Concealed wiring is pulled through wall cavities for mirrors, towel warmers, and thermostats.",
        duration: "Day 2",
      },
      {
        number: "03",
        title: "Heating Mat & Tile Layering",
        description: "If heated floors are requested, DITRA membrane and heat cables are set and covered with tile.",
        duration: "Day 3 - 4",
      },
      {
        number: "04",
        title: "Fixture Mounting & WiFi Sync",
        description: "Smart toilets, shower columns, and smart mirrors are mounted, tested, and synced with your home WiFi.",
        duration: "Day 5",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Willoughby Townhome Smart Upgrade",
    beforeAfterDesc: "Added Schluter radiant in-floor heating under new marble hexagon tile, an anti-fog LED smart mirror, and a Toto Washlet bidet.",
    materialOptions: [
      {
        title: "Schluter DITRA-HEAT Touchscreen WiFi Thermostat",
        description: "Control your floor heating schedule from anywhere via iOS or Android app.",
        badge: "Smart Tech",
      },
      {
        title: "Toto Washlet & Kohler Smart Bidets",
        description: "Industry-leading bidet hygiene with instantaneous ceramic water heating.",
        badge: "Top Rated",
      },
    ],
    faqs: [
      {
        question: "Can heated floors be installed over an existing concrete or wood subfloor?",
        answer: "Yes, Schluter DITRA-HEAT is an uncoupling membrane that installs directly over plywood subfloors or concrete slabs before tile is laid.",
      },
      {
        question: "How much electricity does a heated bathroom floor use?",
        answer: "On a programmed schedule (morning and evening), a typical 50 sq.ft bathroom floor warming system uses less than $0.15 to $0.25 of electricity per day in BC.",
      },
    ],
    relatedServiceSlugs: ["bathroom-renovation", "bathroom-tile-installation", "bathroom-vanity-installation", "bathroom-design"],
  },

  {
    id: "bathroom-restoration",
    slug: "bathroom-restoration",
    title: "Bathroom Restoration",
    category: "Historical & Insurance Remediation",
    tagline: "Restoring water-damaged, aged, or historic bathrooms to pristine, structurally sound condition.",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "10 to 18 Days",
    warranty: "5-Year Workmanship Warranty & Moisture Clearance",
    badge: "Structural Remediation",
    overview:
      "Whether your bathroom has suffered extensive water damage, sewage backup, dry rot, or you wish to restore the architectural charm of a heritage home in Fort Langley or historic Fraser Valley properties, our bathroom restoration team brings specialized expertise. We remediate structural framing, eliminate mold colonies, and rebuild with modern waterproofing while honoring timeless architecture.",
    detailedParagraphs: [
      "Water damage from slow pipe leaks or failed shower pans often goes unnoticed until floor joists are compromised. We work alongside insurance adjusters when applicable, providing comprehensive documentation, moisture mapping, and transparent itemized estimates.",
      "Our restoration process completely strips contaminated building materials, applies industrial anti-microbial treatments, reinforces joists, and rebuilds the room with 100% waterproof Schluter substrates.",
    ],
    keyBenefits: [
      {
        title: "Structural Joist & Subfloor Rebuilding",
        desc: "Sistering rotted floor joists and installing structural marine-grade plywood underlayment.",
      },
      {
        title: "Anti-Microbial Mold Remediation",
        desc: "HEPA air containment and certified anti-fungal treatments to ensure safe indoor air quality.",
      },
      {
        title: "Heritage Character Preservation",
        desc: "Sourcing authentic clawfoot tubs, wainscoting, and period-accurate hex mosaic tile.",
      },
      {
        title: "Insurance Documentation Support",
        desc: "Itemized photographic reports and moisture readings to support home insurance claims.",
      },
    ],
    inclusions: [
      "Thermal Moisture Mapping & Air Quality Containment",
      "Selective Demolition of Contaminated Drywall, Subfloor & Insulation",
      "Structural Joist Reinforcement & Sistering",
      "Plumbing Supply & Drain Line Replacement to Modern Code",
      "Full Schluter Waterproofing Envelope Installation",
      "Custom Wainscoting, Beadboard, or Period-Accurate Tile Setting",
      "Restoration of Vintage Fixtures or Period-Authentic Replacements",
    ],
    processSteps: [
      {
        number: "01",
        title: "Moisture Assessment & Containment",
        description: "We deploy air scrubbers and thermal cameras to map the exact boundaries of water migration and mold.",
        duration: "Day 1 - 2",
      },
      {
        number: "02",
        title: "Remediation & Drying",
        description: "Contaminated materials are safely removed, and industrial dehumidifiers dry the structural timber to <12% moisture.",
        duration: "Day 3 - 5",
      },
      {
        number: "03",
        title: "Structural Reinforcement",
        description: "Compromised joists and wall studs are repaired, reinforced, and treated with mold-inhibiting encapsulants.",
        duration: "Day 6 - 8",
      },
      {
        number: "04",
        title: "Plumbing Rebuilding & Waterproofing",
        description: "All plumbing is replaced and pressure tested, followed by modern vapor-tight waterproofing membrane.",
        duration: "Day 9 - 12",
      },
      {
        number: "05",
        title: "Architectural Finishing",
        description: "Period-appropriate tile, trim, custom cabinetry, and fixtures installed to perfection.",
        duration: "Day 13 - 16",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Fort Langley Heritage Home Restoration",
    beforeAfterDesc: "Rebuilt rotted floor framing beneath a leaking 1920s bathroom, installing a restored cast iron clawfoot tub, heated basketweave tile, and modern concealed plumbing.",
    materialOptions: [
      {
        title: "Cast Iron Clawfoot & Pedestal Tubs",
        description: "Restored or reproduction porcelain-enameled cast iron with authentic ball-and-claw feet.",
        badge: "Heritage",
      },
      {
        title: "Period Hexagon & Subway Tile",
        description: "Matte white and black border mosaics reminiscent of classic early 20th-century design.",
        badge: "Classic",
      },
    ],
    faqs: [
      {
        question: "Can you help with insurance claims for bathroom water damage?",
        answer: "Yes, we provide detailed line-item damage estimates, photo logs, and moisture meter documentation that align directly with Canadian insurance company requirements.",
      },
      {
        question: "How do you ensure mold will not return after restoration?",
        answer: "We treat all structural lumber with botanical anti-microbial encapsulants, dry timber to industry standards, and install 100% waterproof Schluter membranes so moisture can never re-enter wall cavities.",
      },
    ],
    relatedServiceSlugs: ["bathroom-repair", "bathroom-remodeling", "bathroom-tile-installation", "shower-remodeling"],
  },

  {
    id: "shower-remodeling",
    slug: "shower-remodeling",
    title: "Shower Remodeling",
    category: "Showers & Enclosures",
    tagline: "Custom walk-in showers, curbless zero-threshold entries, 10mm frameless glass, and steam suites.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "4 to 7 Days",
    warranty: "Lifetime Schluter® Waterproofing Warranty",
    badge: "10mm Frameless Glass & Curbless",
    overview:
      "Upgrade your daily shower experience with a custom-engineered walk-in shower designed for effortless luxury and lifetime durability. Ideal Bath Renovations specializes in curbless (zero-threshold) walk-in showers, linear recessed trench drains, built-in floating benches, illuminated shampoo niches, and custom 10mm heavy tempered frameless glass enclosures.",
    detailedParagraphs: [
      "Every shower we construct is built on a 100% waterproof Schluter® KERDI shower tray system with integrated vapor barrier. We eliminate high-step tripping hazards, creating an open, spa-inspired atmosphere that makes your entire bathroom feel twice as large.",
      "From soothing rainfall showerheads and handheld body sprays to fully integrated Thermasol or Kohler steam generator suites, we customize every valve and jet to your exact preference.",
    ],
    keyBenefits: [
      {
        title: "Barrier-Free Curbless Entry",
        desc: "Seamless, flush transition from main bathroom floor into the shower with continuous large-format tile.",
      },
      {
        title: "10mm Heavy Frameless Glass",
        desc: "Custom-cut tempered architectural glass with EnduroShield® hydrophobic water-repellent coating.",
      },
      {
        title: "Custom Recessed Niches & Benches",
        desc: "Waterproof shampoo niches with mitered quartz shelves and floating quartz or teak shower seats.",
      },
      {
        title: "Thermostatic Multi-Function Valves",
        desc: "Maintain your exact preferred water temperature with independent volume controls and anti-scald protection.",
      },
    ],
    inclusions: [
      "Demolition of Old Shower Stall or Bathtub Alcove",
      "Schluter® KERDI Waterproof Membrane, Pre-Sloped Tray & Kerdi-Band Seams",
      "Linear Trench Drain or Square Point Drain in Brushed Nickel, Black, or Brass",
      "Tile Installation (Floor Mosaic, Wall Slabs & Ceiling Vapor Tile)",
      "Rough-in and Trim Installation of Pressure-Balanced Shower Valve",
      "Custom Built-in Shampoo Niche (12x24 inch or Custom Size)",
      "Custom 10mm Frameless Glass Door and Fixed Panel with Premium Handles",
    ],
    processSteps: [
      {
        number: "01",
        title: "Subfloor Lowering & Drain Placement",
        description: "For curbless showers, we recess the subfloor between floor joists to achieve a flush transition, and position the linear drain.",
        duration: "Day 1",
      },
      {
        number: "02",
        title: "Schluter® KERDI Waterproofing",
        description: "We install the pre-sloped pan, waterproof wall boards, and seam bands, followed by a 24-hour flood water test.",
        duration: "Day 2",
      },
      {
        number: "03",
        title: "Artisanal Tile & Grouting",
        description: "Floor mosaics and large-format wall tiles are set with laser alignment, and epoxy or stain-resistant grout is applied.",
        duration: "Day 3 - 4",
      },
      {
        number: "04",
        title: "Glass Laser Measure & Installation",
        description: "Precise digital laser measurement of the finished opening, custom glass fabrication, and heavy hardware mounting.",
        duration: "Day 5 - 6",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Walnut Grove Tub-to-Curbless Shower Transformation",
    beforeAfterDesc: "Replaced an awkward high-step fiberglass bathtub with an expansive curbless walk-in shower, Calacatta gold porcelain slabs, and brushed brass fixtures.",
    materialOptions: [
      {
        title: "Linear Trench Drains",
        description: "Sleek stainless steel drains with tile-insert covers that blend invisibly into the floor.",
        badge: "Modern Aesthetic",
      },
      {
        title: "EnduroShield® Glass Treatment",
        description: "Permanent nanotech coating that cuts glass cleaning time by up to 90% and repels hard water spots.",
        badge: "Easy Clean",
      },
      {
        title: "Thermasol Smart Steam Generator",
        description: "Instant steam in 45 seconds with touchscreen controls and aromatherapeutic essential oil delivery.",
        badge: "Spa Luxury",
      },
    ],
    faqs: [
      {
        question: "Can any bathroom accommodate a curbless walk-in shower in Langley?",
        answer: "Yes, by either recessing the subfloor framing between floor joists (for wood construction) or installing a low-profile ramp kit, we can build a zero-threshold curbless shower in almost any residential home.",
      },
      {
        question: "Do frameless glass shower doors leak water onto the bathroom floor?",
        answer: "When properly engineered with correct floor slope (1/4 inch per foot), strategically positioned showerheads, and bottom sweep seals, frameless glass showers keep 100% of water inside the wet zone.",
      },
    ],
    relatedServiceSlugs: ["bathtub-replacement", "bathroom-tile-installation", "bathroom-remodeling", "bathroom-repair"],
  },

  {
    id: "bathtub-replacement",
    slug: "bathtub-replacement",
    title: "Bathtub Replacement",
    category: "Bathtubs & Soakers",
    tagline: "Freestanding soaker tubs, deep alcove bathtubs, whirlpool hydrotherapy, and walk-in safety tubs.",
    heroImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "2 to 5 Days",
    warranty: "Lifetime Tub Shell Warranty + 5-Yr Workmanship Guarantee",
    badge: "Freestanding & Deep Soaker Tubs",
    overview:
      "Transform your bathing experience with a luxurious freestanding soaker tub, a deep ergonomic alcove bathtub, or an ADA-compliant walk-in safety tub. Ideal Bath Renovations removes old, scratched, stained, or hard-to-clean tubs and installs premium cast acrylic or solid surface bathtubs with floor-mounted tub fillers and integrated overflows.",
    detailedParagraphs: [
      "We inspect the drain alignment, replace aging waste-and-overflow piping with heavy-duty schedule 40 PVC, and install floor-mounted freestanding faucets with handheld wands.",
      "For homeowners seeking therapeutic relief or aging-in-place security, we install walk-in bathtubs featuring low step-in thresholds, hydrotherapy massage jets, heated backrests, and fast dual drains.",
    ],
    keyBenefits: [
      {
        title: "Ergonomic Lumbar Support & Extra Depth",
        desc: "Modern soaker tubs offer 18 to 22 inches of soaking depth compared to shallow 12-inch builder-grade tubs.",
      },
      {
        title: "Solid Surface Heat Retention",
        desc: "Mineral composite and heavy cast acrylic retain water warmth up to 60% longer than thin steel tubs.",
      },
      {
        title: "Freestanding Floor-Mounted Faucets",
        desc: "Architectural floor-mount brass tub fillers in matte black, brushed gold, and polished chrome.",
      },
      {
        title: "Walk-In Safety & Low Thresholds",
        desc: "Safe 3-inch step-in doors with ADA grab bars, anti-slip seating, and rapid water evacuation.",
      },
    ],
    inclusions: [
      "Removal and Recycling of Old Cast Iron, Steel, or Acrylic Tub",
      "Drain Reconfiguration & P-Trap Replacement to Local Code",
      "Installation of High-Grade Freestanding Soaker Tub or Alcove Tub",
      "Mortar Bed Foundation Pour (for solid zero-flex alcove tubs)",
      "Floor-Mounted or Wall-Mounted Tub Filler with Handheld Shower Wand",
      "Matching Pop-Up Drain & Cable-Driven Overflow Assembly",
    ],
    processSteps: [
      {
        number: "01",
        title: "Tub Sizing & Layout Assessment",
        description: "We measure your room clearances, doorway access widths, and drain centerlines to ensure seamless delivery and fit.",
        duration: "Day 1",
      },
      {
        number: "02",
        title: "Safe Removal & Drain Prep",
        description: "Old tub is disconnected and extracted without scratching surrounding walls or door frames.",
        duration: "Day 2",
      },
      {
        number: "03",
        title: "Plumbing Rough-In & Drop-In Box",
        description: "We install an OS&B Island Tub Drain rough-in box for leak-free, below-floor freestanding connections.",
        duration: "Day 3",
      },
      {
        number: "04",
        title: "Tub Placement & Hydrostatic Testing",
        description: "The new tub is set, leveled, secured, filled to overflow to test drainage, and sealed with 100% silicone.",
        duration: "Day 4",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Fort Langley Ensuite Soaker Tub Upgrade",
    beforeAfterDesc: "Replaced a dusty corner jetted tub with an elegant matte white freestanding egg soaker tub and floor-mounted brushed gold faucet.",
    materialOptions: [
      {
        title: "Solid Surface Stone Resin",
        description: "Velvety matte composite with incredible thermal retention and natural stone feel.",
        badge: "Luxury Favorite",
      },
      {
        title: "High-Gloss Cast Acrylic",
        description: "Non-porous, lightweight, stain-resistant, and easy to clean with mild soap.",
        badge: "Easy Clean",
      },
    ],
    faqs: [
      {
        question: "Will a freestanding bathtub fit in my standard 60-inch tub alcove?",
        answer: "Yes! Modern freestanding bathtubs come in compact 55-inch and 59-inch lengths designed specifically to fit standard 5-foot bathroom alcoves with elegant breathing room.",
      },
      {
        question: "How do you clean around a freestanding bathtub?",
        answer: "We ensure at least 3 to 4 inches of clearance from surrounding walls, and supply flexible handheld spray wands for effortless rinsing.",
      },
    ],
    relatedServiceSlugs: ["shower-remodeling", "bathroom-remodeling", "bathroom-replacement", "bathroom-upgrades"],
  },

  {
    id: "bathroom-tile-installation",
    slug: "bathroom-tile-installation",
    title: "Bathroom Tile Installation",
    category: "Tile & Flooring",
    tagline: "Precision porcelain, ceramic, natural stone, marble, and mosaic installation with laser leveling.",
    heroImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "3 to 6 Days",
    warranty: "10-Year Tile & Grout Bond Warranty",
    badge: "Schluter® Certified Tile Setters",
    overview:
      "Tile is the visual and structural cornerstone of any bathroom. At Ideal Bath Renovations, our master tile setters specialize in large-format porcelain slabs (24x48\"), chevron, herringbone, Moroccan zellige, penny round mosaics, and authentic Carrara marble. Every tile installation uses laser alignment systems, uncoupling crack-isolation membranes, and stain-proof epoxy or high-performance urethane grouts.",
    detailedParagraphs: [
      "Improper tile installation without uncoupling membranes is the #1 cause of cracked tiles and loose grout. We install Schluter® DITRA uncoupling sub-flooring to neutralize structural deflection and prevent tiles from cracking over time.",
      "We master 45-degree mitered edges on niche corners and curbs, eliminating plastic bullnose trims in favor of seamless, monolithic stone craftsmanship.",
    ],
    keyBenefits: [
      {
        title: "Schluter® DITRA Uncoupling Substrate",
        desc: "Neutralizes floor expansion and contraction, guaranteeing tiles will never crack or delaminate.",
      },
      {
        title: "Laser-Guided Leveling Systems",
        desc: "Zero lippage between tiles, ensuring a completely flat, smooth floor and wall surface.",
      },
      {
        title: "Mitered Edge Craftsmanship",
        desc: "45-degree precision diamond mitered corners on all niches and curbs for a continuous luxury aesthetic.",
      },
      {
        title: "Stain-Proof Epoxy Grout",
        desc: "Repels water, body oils, shampoo, and mold. Never requires annual sealing.",
      },
    ],
    inclusions: [
      "Subfloor Leveling, Plywood Screwing & Self-Leveling Underlayment Pour",
      "Schluter® DITRA Uncoupling Floor Membrane Installation",
      "Schluter® KERDI Waterproof Wall Backer Installation",
      "Precision Tile Cutting with Wet Diamond Blade Saws",
      "Polymer-Modified Thinset Mortar (Full 95%+ Coverage)",
      "High-Performance Mold-Resistant Grouting & Color-Matched Silicone",
    ],
    processSteps: [
      {
        number: "01",
        title: "Substrate Leveling & Crack Isolation",
        description: "Subfloor flatness is verified with digital levels and brought to within 1/8 inch across 10 feet before DITRA membrane is bonded.",
        duration: "Day 1",
      },
      {
        number: "02",
        title: "Grid Layout & Dry Run",
        description: "Tile layout is dry-fitted and centered to avoid awkward thin sliver cuts in high-visibility corners.",
        duration: "Day 2",
      },
      {
        number: "03",
        title: "Laser Setting with Lippage Clips",
        description: "Tiles are back-buttered and set with mechanical leveling clips to ensure an ultra-flat surface.",
        duration: "Day 3 - 4",
      },
      {
        number: "04",
        title: "Grouting & Sealant Application",
        description: "Joints are filled with stain-proof epoxy or ultra-color grout, washed clean, and 100% silicone perimeter seals applied.",
        duration: "Day 5",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Clayton Heights Large Format Tile Installation",
    beforeAfterDesc: "Installed 24x48 polished Calacatta porcelain wall tiles with zero lippage, recessed shampoo niche with brass Schluter Jolly trims, and hexagon heated floor tile.",
    materialOptions: [
      {
        title: "24x48 Rectified Porcelain Slabs",
        description: "Minimizes grout lines for a seamless, ultra-modern luxury stone appearance.",
        badge: "Modern Trend",
      },
      {
        title: "Handcrafted Zellige Tiles",
        description: "Artisanal Moroccan clay tiles with subtle tone variations and tactile organic reflections.",
        badge: "Artisanal",
      },
    ],
    faqs: [
      {
        question: "Why should I choose epoxy grout over traditional cement grout?",
        answer: "Epoxy grout is 100% waterproof, non-porous, and chemical-resistant. It will never absorb soap scum or grow black mold, and never requires periodic sealing.",
      },
      {
        question: "Can large format 24x48 tiles be installed on smaller bathroom floors?",
        answer: "Yes! Large format tiles with minimal grout lines actually make small bathrooms appear significantly wider and less cluttered.",
      },
    ],
    relatedServiceSlugs: ["shower-remodeling", "bathroom-remodeling", "bathroom-upgrades", "bathroom-vanity-installation"],
  },

  {
    id: "bathroom-vanity-installation",
    slug: "bathroom-vanity-installation",
    title: "Bathroom Vanity Installation",
    category: "Vanities & Cabinetry",
    tagline: "Custom floating vanities, double quartz sinks, solid wood cabinetry, and smart storage towers.",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80",
    priceRange: "Complimentary In-Home Estimate",
    typicalTimeline: "1 to 3 Days",
    warranty: "5-Year Cabinetry & Plumbing Warranty",
    badge: "Custom Solid Wood & Quartz",
    overview:
      "The vanity is the centerpiece of your bathroom's daily workflow. Our vanity installation service provides custom and semi-custom cabinetry solutions that maximize countertop workspace and concealed storage. We install sleek wall-hung floating vanities with under-cabinet LED nightlights, solid walnut and white oak furniture-style vanities, and durable engineered quartz countertops with undermount porcelain sinks.",
    detailedParagraphs: [
      "We reinforce interior wall framing with heavy solid blocking to ensure floating vanities are rock-solid and safe. Our Red Seal plumbers reconfigure hot and cold supply lines and drain rough-ins inside vanity drawers so zero interior storage space is wasted.",
      "Pair your vanity with matching linen storage towers, recessed medicine cabinets with integrated power outlets for toothbrushes and razors, and luxury faucets.",
    ],
    keyBenefits: [
      {
        title: "Wall-Hung Floating Modern Aesthetics",
        desc: "Creates an airy, spacious visual feel while making bathroom floor cleaning effortless.",
      },
      {
        title: "Solid Plywood & Soft-Close Hardware",
        desc: "Dovetail solid wood drawers with Blum® soft-close undermount slides rated for 50,000 cycles.",
      },
      {
        title: "Engineered Quartz Countertops",
        desc: "Stain, scratch, and heat-resistant quartz with seamless undermount porcelain sink bowls.",
      },
      {
        title: "Concealed Drawer Power Outlets",
        desc: "In-drawer power strips with USB ports for hair dryers, curling irons, and electric razors.",
      },
    ],
    inclusions: [
      "Removal & Disposal of Existing Vanity, Countertop, and Sink",
      "Wall Framing Reinforcement & Solid Wood Blocking for Floating Vanities",
      "Plumbing Relocation & P-Trap Reconfiguration for Custom Drawer Clearances",
      "Cabinet Leveling, Securing, and Scribing to Uneven Walls",
      "Custom Quartz / Marble Countertop Template, Fabrication & Installation",
      "Undermount Sink Mounting & Faucet / Pop-up Drain Installation",
      "Under-Cabinet LED Ambient Motion Sensor Lighting (Optional)",
    ],
    processSteps: [
      {
        number: "01",
        title: "Measurement & Plumbing Mapping",
        description: "We measure wall dimensions, plumbing stub-out heights, and mirror clearances.",
        duration: "Day 1",
      },
      {
        number: "02",
        title: "Removal & In-Wall Blocking",
        description: "Old vanity is removed and heavy 2x6 wood backing is added between wall studs to anchor the new vanity securely.",
        duration: "Day 1 - 2",
      },
      {
        number: "03",
        title: "Cabinet Mounting & Countertop Setting",
        description: "Vanity base is laser-leveled and anchored into solid blocking; quartz countertop and sinks are sealed.",
        duration: "Day 2",
      },
      {
        number: "04",
        title: "Plumbing Connection & Caulking",
        description: "Faucets, shut-off valves, and P-traps are connected, tested under water pressure, and color-matched silicone applied.",
        duration: "Day 3",
      },
    ],
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    beforeAfterTitle: "Willoughby Double Vanity Upgrade",
    beforeAfterDesc: "Replaced a cramped 48-inch single vanity with a 72-inch rift-sawn white oak double floating vanity, Calacatta quartz countertop, and matte black wall-mount faucets.",
    materialOptions: [
      {
        title: "Rift-Sawn White Oak & Walnut",
        description: "Moisture-sealed natural hardwood veneers with striking architectural grain patterns.",
        badge: "Warm Natural Wood",
      },
      {
        title: "Silestone & Caesarstone Quartz",
        description: "Premium engineered quartz with lifetime stain resistance and bacteriostatic protection.",
        badge: "Ultra Durable",
      },
    ],
    faqs: [
      {
        question: "Are floating wall-hung vanities strong enough to hold heavy quartz countertops?",
        answer: "Yes! When installed with heavy 2x6 internal wood wall blocking and heavy-duty structural lag bolts, our floating vanities support 500+ lbs with zero flex.",
      },
      {
        question: "Can I convert my single-sink vanity to a double-sink vanity?",
        answer: "Yes, our Red Seal plumbers can split and extend the supply lines and drain stack inside the wall to convert a single vanity into a dual-sink vanity.",
      },
    ],
    relatedServiceSlugs: ["bathroom-renovation", "bathroom-remodeling", "bathroom-tile-installation", "bathroom-upgrades"],
  },
];

export const getServiceBySlug = (slug: string): ServiceDetailItem | undefined => {
  const normalized = slug.toLowerCase().trim().replace(/^\/services\//, "").replace(/^\//, "");
  return servicesDetailList.find(
    (s) =>
      s.slug === normalized ||
      s.id === normalized ||
      s.title.toLowerCase().replace(/\s+/g, "-") === normalized
  );
};
