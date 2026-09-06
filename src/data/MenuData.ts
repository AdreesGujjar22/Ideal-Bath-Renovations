export interface TreatmentData {
  name: string;
  price: string;
  coursePrice?: string;
  description: string;
  duration: string;
  learnMoreLink: string;
  tag?: string;
}

const MenuRemodelingData: Array<TreatmentData> = [
  {
    name: "Full-Service Master Bathroom Remodel",
    price: "$18,500 - $35,000+",
    coursePrice: "Includes 3D CAD Design & Permits",
    description:
      "A complete top-to-bottom master bath transformation: custom dual vanity, freestanding soaker tub, curbless walk-in shower with frameless glass, heated tile floor, and ambient smart lighting.",
    duration: "2 - 3 Weeks",
    learnMoreLink: "Explore Master Baths",
    tag: "Most Popular",
  },
  {
    name: "Tub-to-Shower Conversion Package",
    price: "$7,500 - $12,500",
    coursePrice: "Schluter® 10-Yr Waterproof Warranty",
    description:
      "Remove your outdated fiberglass or cast-iron tub and install a modern, low-curb walk-in shower with tiled surround, shampoo niche, chrome/black fixtures, and 10mm tempered frameless glass.",
    duration: "3 - 5 Days",
    learnMoreLink: "View Conversion Specs",
    tag: "High ROI",
  },
  {
    name: "Walk-In & Curbless Zero-Threshold Shower",
    price: "$8,900 - $14,500",
    coursePrice: "Linear Drain & Continuous Tiling",
    description:
      "Sleek architectural barrier-free shower with flush floor transition, recessed linear trench drain, built-in teak or tiled bench, and multi-jet thermostatic rain shower system.",
    duration: "4 - 7 Days",
    learnMoreLink: "See Curbless Options",
  },
  {
    name: "Bathroom Design & 3D Space Planning",
    price: "Complimentary Consultation",
    coursePrice: "$450 for Standalone Full Blueprint",
    description:
      "Expert interior space optimization, material selection, electrical/plumbing layout planning, and photorealistic 3D rendering so you see your completed renovation before hammer meets tile.",
    duration: "3 - 5 Days",
    learnMoreLink: "Book 3D Design Session",
  },
  {
    name: "Powder Room & Guest Bath Refresh",
    price: "$4,200 - $8,500",
    coursePrice: "Fast Turnaround Guarantee",
    description:
      "Transform your ground floor powder room with statement wallpaper, floating designer vanity, new high-efficiency toilet, illuminated vanity mirror, and modern hex floor tiles.",
    duration: "3 - 5 Days",
    learnMoreLink: "View Powder Room Ideas",
  },
  {
    name: "One-Day Acrylic Liner & Fast Refinishing",
    price: "$1,890 - $3,400",
    coursePrice: "Zero Demolition Noise Option",
    description:
      "Fast, cost-effective transformation utilizing commercial-grade acrylic tub liners or professional multi-stage epoxy enamel refinishing. Ready for use in just 24 hours.",
    duration: "1 Day",
    learnMoreLink: "Request Express Quote",
  },
];

const MenuResurfacingData: Array<TreatmentData> = [
  {
    name: "Large-Format Porcelain & Marble Tile Installation",
    price: "$12 - $22 / sq.ft",
    coursePrice: "Laser-leveled with epoxy grout",
    description:
      "Precision installation of 24x48 porcelain slabs, Italian Carrara marble, Spanish handmade subway tiles, or intricate herringbone accent walls with anti-mold stainproof epoxy grouting.",
    duration: "3 - 5 Days",
    learnMoreLink: "Browse Tile Samples",
    tag: "Premium Finish",
  },
  {
    name: "Schluter® DITRA-HEAT Radiant Floor System",
    price: "$1,600 - $3,200",
    coursePrice: "WiFi Touchscreen Thermostat Included",
    description:
      "Comfortable in-floor electric heating with uncoupling waterproof membrane that prevents cracked tiles while keeping your bathroom floor blissfully warm during Canadian winters.",
    duration: "1 - 2 Days",
    learnMoreLink: "Discover Heated Floors",
  },
  {
    name: "Custom Floating Cabinetry & Quartz Vanity",
    price: "$2,200 - $6,800",
    coursePrice: "Solid Wood + Soft-Close Blum® Slides",
    description:
      "Custom-built floating or freestanding vanities tailored to your exact measurements, finished with solid quartz or quartzite countertops, undermount sinks, and LED underglow.",
    duration: "2 - 4 Days",
    learnMoreLink: "See Vanity Catalog",
  },
  {
    name: "100% Watertight Vapor Barrier & Floor Pan",
    price: "$1,400 - $2,800",
    coursePrice: "Hydrostatic 24-Hr Flood Tested",
    description:
      "Uncompromising waterproofing featuring Schluter®-KERDI membrane, prefabricated sloped shower trays, waterproof curb seals, and pipe collars to eliminate any mold risk.",
    duration: "1 - 2 Days",
    learnMoreLink: "Waterproofing Standards",
  },
];

const MenuBodyData: Array<TreatmentData> = [
  {
    name: "Steam Shower & Aromatherapy Sauna Suite",
    price: "$11,500 - $19,000",
    coursePrice: "ThermaSol / Mr. Steam Generators",
    description:
      "Full steam vapor-sealed enclosure with digital temperature touch controller, steam dispersion head with essential oil well, chromotherapy mood lighting, and built-in bench.",
    duration: "1 - 2 Weeks",
    learnMoreLink: "Explore Steam Suites",
    tag: "Ultimate Luxury",
  },
  {
    name: "Smart Toilet & Integrated Bidet Upgrades",
    price: "$1,400 - $3,800",
    coursePrice: "TOTO Washlet & Kohler Compatible",
    description:
      "Installation of luxury wall-hung or one-piece smart toilets featuring heated seats, auto lid sensor, warm air dryer, deodorizer, and dedicated GFCI electrical line.",
    duration: "1 Day",
    learnMoreLink: "Compare Smart Toilets",
  },
  {
    name: "ADA & Aging-in-Place Universal Accessibility",
    price: "$4,900 - $11,000",
    coursePrice: "BC Home Renovation Tax Credit Eligible",
    description:
      "Safe, independent living modifications including barrier-free roll-in showers, reinforced solid-wood backed designer grab bars, handheld slide bar showerheads, and ADA comfort height toilets.",
    duration: "3 - 5 Days",
    learnMoreLink: "Accessibility Guide",
  },
  {
    name: "Designer Plumbing Fixture & Valve Rough-Ins",
    price: "$950 - $2,800",
    coursePrice: "Moen, Delta, Kohler, Riobel, Grohe",
    description:
      "Pressure-balanced thermostatic rough-in valves, matte black, brushed brass, or polished nickel fixtures, freestanding tub fillers, and upgraded PEX supply lines.",
    duration: "1 - 2 Days",
    learnMoreLink: "View Fixture Packages",
  },
  {
    name: "Ultra-Quiet Ventilation & LED Mirror Package",
    price: "$850 - $1,950",
    coursePrice: "Panasonic WhisperQuiet + Anti-Fog Mirror",
    description:
      "Humidity-sensing auto exhaust fans with continuous quiet operation, anti-fog smart touch LED backlit mirrors, and recessed ceiling shower downlights.",
    duration: "1 Day",
    learnMoreLink: "Lighting & Fans",
  },
];

export { 
  MenuRemodelingData, 
  MenuResurfacingData, 
  MenuBodyData as MenuPlumbingWellnessData,
  MenuRemodelingData as MenuFacialsData,
  MenuBodyData 
};
