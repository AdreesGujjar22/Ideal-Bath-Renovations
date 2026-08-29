export interface DataInterface {
  img: string;
  title?: string;
  content: string;
  category?: string;
  details?: string;
  beforeImg?: string;
  afterImg?: string;
  location?: string;
  duration?: string;
}

const microneedlingData: DataInterface[] = [
  {
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    title: "Master Ensuite Walk-In Conversion",
    content: "Project: 1990s Fiberglass Tub to Curbless Walk-In. Location: Willoughby, Langley Twp. Specs: 24x48 Calacatta porcelain slabs, matte black thermostatic fixtures, Schluter-KERDI waterproofing.",
  },
  {
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    title: "Modern Minimalist Shower Suite",
    content: "Project: Full Master Bath Overhaul. Location: Walnut Grove, Langley. Specs: Recessed linear drain, 10mm frameless glass panel, heated bench and floor.",
  },
];

const resurfacingData: DataInterface[] = [
  {
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    title: "Custom Floating Walnut Vanity",
    content: "Scope: Custom 72-inch double vanity with solid Calacatta Gold quartz top, undermount rectangular sinks, and brushed champagne bronze Moen hardware.",
  },
  {
    img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=1000&q=80",
    title: "Freestanding Soaking Tub Sanctuary",
    content: "Scope: Acrylic double-slipper freestanding soaking tub with floor-mounted Roman tub filler and mosaic marble accent niche.",
  },
  {
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    title: "Herringbone Accent & Heated Floors",
    content: "Scope: Handcrafted artisan subway tile in vertical herringbone layout with Schluter DITRA-HEAT touch screen thermostat.",
  },
  {
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    title: "Spa Steam Shower Retreat",
    content: "Scope: Vapor-sealed frameless glass enclosure, ThermaSol steam generator, aroma oil well, and integrated chromotherapy ceiling LEDs.",
  },
  {
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    title: "Accessible Curbless Suite",
    content: "Scope: Barrier-free zero threshold shower with concealed stainless grab bars, fold-down teak bench, and comfort-height smart bidet.",
  },
];

const beforeAfterData: DataInterface[] = [
  {
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    title: "Langley Twp Master Ensuite Remodel",
    content: "Langley Master Ensuite Remodel",
    category: "Master Ensuite",
    details: "Transformed cramped 1980s brass tub into an open-concept curbless walk-in shower with matte black dual rain heads, freestanding soaking tub, and custom double vanity.",
    location: "20819 78B Ave Area, Langley Twp",
    duration: "14 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    title: "Willoughby Tub-to-Shower Transformation",
    content: "Willoughby Tub-to-Shower Conversion",
    category: "Tub-to-Shower",
    details: "Removed yellowed acrylic tub-shower combo and installed curbless walk-in shower with linear drain, large format marble porcelain tiles, and 10mm glass.",
    location: "Willoughby Heights, Langley",
    duration: "4 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    title: "Fort Langley Luxury Spa Steam Suite",
    content: "Fort Langley Spa Steam & Sauna Room",
    category: "Walk-In Shower",
    details: "Engineered vapor-sealed steam shower with aroma diffuser, heated bench, and custom anti-fog smart LED vanity mirror.",
    location: "Fort Langley, BC",
    duration: "18 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    title: "Walnut Grove Powder Room Makeover",
    content: "Walnut Grove Modern Powder Room",
    category: "Powder Room",
    details: "Replaced builder-grade pedestal sink with custom fluted wood floating vanity, quartz top, brushed brass fixtures, and hexagon floor tiles.",
    location: "Walnut Grove, Langley",
    duration: "3 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=1000&q=80",
    title: "Brookswood Aging-in-Place Renovation",
    content: "Brookswood Barrier-Free Accessible Bath",
    category: "Walk-In Shower",
    details: "Installed ADA-compliant barrier-free curbless roll-in shower, solid wood backed designer grab bars, and heated anti-slip floor.",
    location: "Brookswood, Langley Twp",
    duration: "5 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    title: "Murrayville Radiant Heated Floor & Tile Overhaul",
    content: "Murrayville Custom Tile & Vanity Suite",
    category: "Custom Vanity",
    details: "Schluter DITRA-HEAT WiFi radiant floor with 24x48 concrete-look porcelain slabs and custom quartz countertop double vanity.",
    location: "Murrayville, Langley Twp",
    duration: "4 Days",
  },
];

export { microneedlingData, resurfacingData, beforeAfterData };
