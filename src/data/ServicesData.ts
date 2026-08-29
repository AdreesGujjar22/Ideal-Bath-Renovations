export interface ServiceItem {
  id: string;
  category: string;
  img: string;
  title: string;
  price?: string;
  duration?: string;
  about: string;
  features?: string[];
  btncontent: string;
  popular?: boolean;
}

const ServicesData: Array<ServiceItem> = [
  {
    id: "full-service",
    category: "Full Remodel",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    title: "Full-Service Bathroom Remodeling",
    price: "Custom Quote",
    duration: "2 - 3 Weeks",
    about: "Complete end-to-end bathroom transformations. From structural framing, precision plumbing, electrical, to luxury tiling and custom fixtures tailored for Langley homeowners.",
    features: [
      "Dedicated Project Manager",
      "3D Architectural Rendering",
      "Full Demolition & Haul-Away",
      "Schluter®-Certified Waterproofing",
      "Lifetime Workmanship Guarantee"
    ],
    btncontent: "Explore Full Remodels",
    popular: true,
  },
  {
    id: "design-planning",
    category: "Design",
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Design & Space Planning",
    price: "Free 3D Consultation",
    duration: "3 - 5 Days",
    about: "Maximize space efficiency, natural lighting, and luxury ergonomics with our interior design specialists using photorealistic 3D visualization.",
    features: [
      "Photorealistic 3D CAD Renders",
      "Material & Finish Selection",
      "Lighting & Plumbing Layouts",
      "Storage Optimization",
      "Fraser Valley Permit Prep"
    ],
    btncontent: "Book Design Consultation",
  },
  {
    id: "tub-to-shower",
    category: "Showers & Tubs",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    title: "Tub-to-Shower Conversions",
    price: "Starting at $7,500 CAD",
    duration: "3 - 5 Days",
    about: "Replace your outdated, high-step bathtub with a sleek, spacious walk-in shower featuring heavy frameless glass and low-maintenance porcelain slabs.",
    features: [
      "Zero-threshold or low-curb entry",
      "10mm Frameless Glass Enclosures",
      "Built-in Shampoo Niches & Benches",
      "Thermostatic Rain Showerheads",
      "Anti-Slip Designer Floor Tile"
    ],
    btncontent: "View Shower Conversions",
    popular: true,
  },
  {
    id: "walkin-curbless",
    category: "Showers & Tubs",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    title: "Walk-In & Curbless Shower Installation",
    price: "Starting at $8,900 CAD",
    duration: "4 - 7 Days",
    about: "Ultra-modern, barrier-free curbless showers with integrated linear drains, continuous floor tiling, and spa-like luxury aesthetics.",
    features: [
      "Seamless Linear Trench Drains",
      "Continuous Floor Tile Design",
      "Universal Accessibility Standard",
      "Hydro-Shield Vapor Barriers",
      "Custom Niche Accent Illumination"
    ],
    btncontent: "See Curbless Designs",
  },
  {
    id: "demolition",
    category: "Site Prep",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    title: "Demolition & Tear-Out",
    price: "Included in Projects",
    duration: "1 - 2 Days",
    about: "Safe, clean, and dust-controlled removal of old tile, drywall, plumbing, and fixtures with comprehensive site protection and eco-friendly disposal.",
    features: [
      "HEPA Air Filtration & Dust Barriers",
      "Subfloor Structural Inspection",
      "Lead & Asbestos Protocol Safe",
      "Recycling & Eco-friendly Haul"
    ],
    btncontent: "Learn Site Prep",
  },
  {
    id: "bathtub-replacement",
    category: "Showers & Tubs",
    img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=1200&q=80",
    title: "Bathtub Replacement & Refinishing",
    price: "Starting at $2,400 CAD",
    duration: "1 - 3 Days",
    about: "Install freestanding soaking tubs, deep whirlpool jacuzzis, or professionally refinish existing cast iron and acrylic tubs with durable enamel coatings.",
    features: [
      "Freestanding Acrylic & Stone Tubs",
      "Cast Iron Enamel Refinishing",
      "Integrated Overflow & Waste Kits",
      "Floor-Mounted Tub Filler Rough-Ins"
    ],
    btncontent: "Browse Bathtubs",
  },
  {
    id: "steam-sauna",
    category: "Luxury Wellness",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    title: "Steam Shower & Sauna Installation",
    price: "Starting at $11,500 CAD",
    duration: "1 - 2 Weeks",
    about: "Transform your master bathroom into a private wellness sanctuary with sealed steam generators, aroma-therapy diffusers, and cedar accents.",
    features: [
      "Commercial-grade Steam Generators",
      "Sloped Vapor-Proof Ceilings",
      "Integrated Chromotherapy Lighting",
      "Aroma & Essential Oil Injectors"
    ],
    btncontent: "Explore Steam Showers",
  },
  {
    id: "wall-floor-tiling",
    category: "Surfaces",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    title: "Wall & Floor Tiling",
    price: "Starting at $12 / sq.ft CAD",
    duration: "3 - 5 Days",
    about: "Master-level installation of large-format porcelain, Italian marble, herringbone subway tile, and mosaic accent walls with precision laser leveling.",
    features: [
      "Large-Format Slabs & Subways",
      "Stain-Proof Epoxy Grouting",
      "Laser-Leveled Flatness Guarantee",
      "Mitered Edge Profiles & Trim"
    ],
    btncontent: "View Tile Portfolios",
    popular: true,
  },
  {
    id: "countertop-installation",
    category: "Surfaces",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    title: "Countertop Installation",
    price: "Starting at $1,800 CAD",
    duration: "1 - 2 Days",
    about: "Custom-fabricated Quartz, Granite, Marble, and Porcelain vanity tops with precision sink cutouts and matching 4-inch backsplashes.",
    features: [
      "Non-Porous Quartz & Granite",
      "Undermount Sink Integration",
      "Custom Edge Profiles (Ogee, Bullnose)",
      "High Stain & Thermal Resistance"
    ],
    btncontent: "See Countertop Options",
  },
  {
    id: "custom-cabinetry",
    category: "Vanities",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    title: "Custom Cabinetry & Vanity Installation",
    price: "Starting at $2,200 CAD",
    duration: "2 - 4 Days",
    about: "Bespoke floating vanities, double-sink storage units, and linen towers built with solid wood, soft-close hardware, and moisture-resistant finishes.",
    features: [
      "Solid Wood & Marine-Grade Plywood",
      "Blum® Soft-Close Drawers & Hinges",
      "Integrated Hair Dryer Outlets",
      "Under-Vanity Ambient LED Glow"
    ],
    btncontent: "Browse Vanities",
  },
  {
    id: "plumbing-upgrades",
    category: "Plumbing & Tech",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80",
    title: "Plumbing Fixture & Pipe Upgrades",
    price: "Starting at $950 CAD",
    duration: "1 - 2 Days",
    about: "Certified Red Seal plumbing upgrades: PEX water line rerouting, thermostatic rough-ins, matte black and brushed gold designer faucets.",
    features: [
      "Licensed Red Seal Plumbers",
      "Pressure-Balanced Valves",
      "Delta, Moen, Kohler & Riobel Fixtures",
      "Lead-Free PEX-A Piping"
    ],
    btncontent: "View Plumbing Options",
  },
  {
    id: "smart-toilet-bidet",
    category: "Plumbing & Tech",
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80",
    title: "Smart Toilet & Bidet Installation",
    price: "Starting at $1,400 CAD",
    duration: "1 Day",
    about: "Upgrade to luxury smart toilets featuring heated seats, warm-water bidet cleansing, automatic open/close lids, UV sanitation, and deodorizers.",
    features: [
      "TOTO Washlet & Kohler Numi Ready",
      "Dedicated GFCI Electrical Routing",
      "Wall-Hung Concealed Tank Systems",
      "Hands-Free Motion Sensors"
    ],
    btncontent: "Explore Smart Toilets",
  },
  {
    id: "radiant-floor-heating",
    category: "Comfort",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    title: "Radiant In-Floor Heating",
    price: "Starting at $1,600 CAD",
    duration: "1 - 2 Days",
    about: "Step onto warm heated tile every morning with Schluter®-DITRA-HEAT electric cables and WiFi programmable touch-screen smart thermostats.",
    features: [
      "Schluter® DITRA-HEAT System",
      "Smartphone App & WiFi Thermostats",
      "Even Heat Distribution & Fast Warmup",
      "Uncoupling Membrane Prevents Cracked Tile"
    ],
    btncontent: "See Heated Floors",
    popular: true,
  },
  {
    id: "lighting-installation",
    category: "Electrical",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    title: "Electrical & Accent Lighting Installation",
    price: "Starting at $850 CAD",
    duration: "1 - 2 Days",
    about: "Layered lighting design including anti-fog LED backlit mirrors, waterproof shower pot lights, dimmer controls, and toe-kick night lighting.",
    features: [
      "Anti-Fog Smart Vanity Mirrors",
      "Wet-Rated LED Recessed Downlights",
      "Toe-Kick & Floating Vanity Glow",
      "Smart Dimming & Night-Mode Scenes"
    ],
    btncontent: "View Lighting Systems",
  },
  {
    id: "ventilation-upgrades",
    category: "Comfort & Air",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    title: "Ventilation & Exhaust Fan Upgrades",
    price: "Starting at $650 CAD",
    duration: "Half Day",
    about: "Prevent moisture, mildew, and mirror fogging with whisper-quiet Panasonic WhisperWarm exhaust fans and automatic humidity sensors.",
    features: [
      "Whisper-Quiet (<0.5 Sone) Fans",
      "Auto Humidity-Sensing Switches",
      "Direct Insulated Roof/Wall Venting",
      "Integrated Heating & Night Light"
    ],
    btncontent: "Learn Ventilation",
  },
  {
    id: "waterproofing-vapor",
    category: "Protection",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    title: "Waterproofing & Vapor Barrier Systems",
    price: "Included in All Wet Areas",
    duration: "1 - 2 Days",
    about: "100% watertight protection engineered with premium Schluter®-KERDI membranes and liquid hydro-barriers to safeguard your Langley home from mold.",
    features: [
      "Schluter®-KERDI Certified Install",
      "24-Hour Hydrostatic Flood Testing",
      "Vapor Retarder Behind Wet Walls",
      "10-Year Water Barrier Guarantee"
    ],
    btncontent: "See Waterproofing Details",
  },
  {
    id: "ada-accessibility",
    category: "Accessibility",
    img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=1200&q=80",
    title: "ADA Accessibility & Aging-In-Place Modifications",
    price: "Starting at $4,900 CAD",
    duration: "2 - 5 Days",
    about: "Safe, dignified, and elegant barrier-free bathrooms: roll-in showers, reinforced designer grab bars, comfort-height fixtures, and wheelchair clearances.",
    features: [
      "Zero-Threshold Roll-In Entries",
      "Structural Wall Reinforcement for Bars",
      "Fold-Down Teak & Composite Benches",
      "BC Rebate & Grant Assistance Eligible"
    ],
    btncontent: "Explore Aging-in-Place",
  },
  {
    id: "powder-room",
    category: "Powder Rooms",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    title: "Powder Room Renovations",
    price: "Starting at $4,200 CAD",
    duration: "3 - 5 Days",
    about: "Make a high-impact design statement in your guest half-bath with bold wallpaper accents, compact vessel vanities, and sculptural lighting.",
    features: [
      "Compact Space Optimization",
      "Statement Feature Accent Walls",
      "Floating Minimalist Sinks",
      "Fast 3 to 5 Day Turnaround"
    ],
    btncontent: "Transform Powder Room",
  },
  {
    id: "one-day-refinishing",
    category: "Express",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    title: "One-Day Refinishing & Liner Systems",
    price: "Starting at $1,890 CAD",
    duration: "1 Day Express",
    about: "Rapid turnaround bathroom rejuvenation for rental properties, quick sales, or budget updates with commercial acrylic liners and enamel glazing.",
    features: [
      "Completed in 24 Hours",
      "Custom-Fitted Acrylic Liners",
      "High-Gloss Durable Finish",
      "Fraction of Replacement Cost"
    ],
    btncontent: "Request 1-Day Quote",
  },
];

export default ServicesData;
