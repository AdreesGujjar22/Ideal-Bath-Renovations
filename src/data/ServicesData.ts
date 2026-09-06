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
    id: "bathroom-remodeling",
    category: "Full Remodel",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Remodeling",
    price: "Custom Estimate",
    duration: "2 - 3 Weeks",
    about: "Complete end-to-end bathroom transformations for Langley homeowners. Structural reframing, plumbing relocation, luxury fixtures, and certified Schluter waterproofing.",
    features: [
      "Dedicated Project Manager",
      "Photorealistic 3D Space Renders",
      "Dust-Controlled Site Protection",
      "Schluter®-KERDI Waterproofing",
      "5-Year Workmanship Guarantee"
    ],
    btncontent: "Explore Remodeling",
    popular: true,
  },
  {
    id: "bathroom-renovation",
    category: "Full Remodel",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Renovation",
    price: "Custom Quote",
    duration: "10 - 15 Days",
    about: "Modernize outdated finishes, improve moisture protection, and maximize spatial efficiency with contemporary vanities, walk-in showers, and porcelain tile.",
    features: [
      "Turnkey Design & Build Execution",
      "Smart Storage & Floating Vanities",
      "Moen & Kohler Luxury Fixtures",
      "Schluter DITRA Floor Uncoupling",
      "Langley Twp Permit Coordination"
    ],
    btncontent: "Explore Renovations",
    popular: true,
  },
  {
    id: "shower-remodeling",
    category: "Showers & Tubs",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    title: "Shower Remodeling",
    price: "Custom Estimate",
    duration: "3 - 5 Days",
    about: "Transform outdated fiberglass units into luxury walk-in showers, curbless zero-threshold suites, and spa steam rooms with heavy 10mm frameless glass.",
    features: [
      "Tub-to-Shower Conversions",
      "Zero-Threshold Barrier-Free Entry",
      "10mm Heavy Tempered Glass",
      "Built-in Shampoo Niches & Benches",
      "Thermostatic Dual Rain Showers"
    ],
    btncontent: "View Shower Options",
    popular: true,
  },
  {
    id: "bathtub-replacement",
    category: "Showers & Tubs",
    img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=1200&q=80",
    title: "Bathtub Replacement",
    price: "Custom Estimate",
    duration: "1 - 3 Days",
    about: "Replace worn tubs with deep acrylic freestanding soaking tubs, luxury whirlpool hydrotherapy systems, or modern drop-in alcove bathtubs.",
    features: [
      "Freestanding Slipper & Flat-Bottom Tubs",
      "Floor-Mounted Roman Tub Fillers",
      "Reinforced Subfloor Support",
      "Cast Iron & Acrylic Upgrades",
      "Fast 1 to 3 Day Turnaround"
    ],
    btncontent: "Browse Bathtubs",
  },
  {
    id: "bathroom-tile-installation",
    category: "Tile & Flooring",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Tile Installation",
    price: "Custom Estimate",
    duration: "3 - 5 Days",
    about: "Master tile setting with laser-leveled precision. Large-format porcelain slabs, Italian marble, herringbone subway tiles, and radiant heated floor systems.",
    features: [
      "Large-Format Slabs & Mosaic Accents",
      "Schluter® DITRA-HEAT In-Floor Warming",
      "Stain-Proof Epoxy Grouting",
      "Mitered Edge Niche Profiles",
      "Complete Subfloor Leveling"
    ],
    btncontent: "See Tile Portfolio",
    popular: true,
  },
  {
    id: "bathroom-vanity-installation",
    category: "Vanities & Cabinetry",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Vanity Installation",
    price: "Custom Estimate",
    duration: "1 - 3 Days",
    about: "Custom freestanding and wall-hung floating vanities paired with solid quartz countertops, undermount sinks, and LED backlit anti-fog mirrors.",
    features: [
      "Solid Wood & Moisture-Proof Finishes",
      "Blum® Soft-Close Hardware",
      "Fabricated Quartz & Granite Countertops",
      "Undermount Single & Double Sinks",
      "Under-Vanity Ambient Night Lighting"
    ],
    btncontent: "Browse Vanities",
  },
  {
    id: "bathroom-design",
    category: "Design & Planning",
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Design & Planning",
    price: "Free 3D Consultation",
    duration: "3 - 5 Days",
    about: "Experience your new bathroom before construction begins. Photorealistic 3D architectural renders, ergonomic space planning, and curated finish palettes.",
    features: [
      "Photorealistic 3D CAD Visualization",
      "Fixture & Material Selection Assistance",
      "Lighting & Electrical Circuit Layouts",
      "Storage & Space Optimization",
      "Itemized Fixed-Price Proposal"
    ],
    btncontent: "Book 3D Consultation",
  },
  {
    id: "bathroom-upgrades",
    category: "Repairs & Upgrades",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Upgrades",
    price: "Custom Estimate",
    duration: "1 - 3 Days",
    about: "Elevate your daily routine with smart bidets, whisper-quiet Panasonic exhaust fans, thermostatic valves, anti-fog LED mirrors, and designer hardware.",
    features: [
      "Smart Toilets & Bidet Washlet Seats",
      "Auto-Sensing Whisper Ventilation Fans",
      "Thermostatic Temperature Control Valves",
      "Brushed Gold & Matte Black Hardware",
      "Dimmable Recessed Wet-Rated Pot Lights"
    ],
    btncontent: "Explore Upgrades",
  },
  {
    id: "bathroom-repair",
    category: "Repairs & Upgrades",
    img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Repair",
    price: "Custom Estimate",
    duration: "Same Day / 1 - 2 Days",
    about: "Fast, certified repair solutions for leaking showers, damaged grout, failing subfloors, cracked tiles, and persistent plumbing fixture issues.",
    features: [
      "Shower Pan Leak Diagnostics & Fixes",
      "Epoxy Regrouting & Silicone Resealing",
      "Subfloor Rot Repair & Reinforcement",
      "Valve Replacement & Cartridge Rebuilds",
      "Licensed Red Seal Plumber Backing"
    ],
    btncontent: "Request Repair Service",
  },
  {
    id: "bathroom-replacement",
    category: "Repairs & Upgrades",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Replacement",
    price: "Custom Estimate",
    duration: "2 - 5 Days",
    about: "Replace worn, discolored, or inefficient components with modern high-performance fixtures, water-saving toilets, and sleek glass enclosures.",
    features: [
      "Complete Fixture Replacement",
      "Frameless Shower Enclosures",
      "WaterSense High-Efficiency Toilets",
      "Countertop & Faucet Replacements",
      "Eco-Friendly Disposal & Recycling"
    ],
    btncontent: "View Replacement Options",
  },
  {
    id: "bathroom-installation",
    category: "Full Remodel",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Installation",
    price: "Custom Estimate",
    duration: "2 - 4 Weeks",
    about: "New bathroom additions for basements, secondary suites, master suite extensions, and powder room additions across Langley and Fraser Valley.",
    features: [
      "New Plumbing Rough-Ins & Concrete Trenching",
      "Dedicated Electrical Sub-Panels",
      "Basement & Secondary Suite Compliance",
      "Full Framing & Soundproofing",
      "Township of Langley Permit Approvals"
    ],
    btncontent: "Plan New Addition",
  },
  {
    id: "bathroom-restoration",
    category: "Full Remodel",
    img: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1200&q=80",
    title: "Bathroom Restoration",
    price: "Custom Estimate",
    duration: "1 - 2 Weeks",
    about: "Comprehensive restoration following water damage, hidden mold remediation, and heritage home bathroom preservation with modern waterproofing.",
    features: [
      "Structural Water Damage Restoration",
      "Certified Mold Remediation Protocol",
      "Heritage Tile & Fixture Preservation",
      "Full Insurance Claim Documentation",
      "Schluter Moisture Barrier Rebuild"
    ],
    btncontent: "Learn Restoration",
  },
];

export default ServicesData;
