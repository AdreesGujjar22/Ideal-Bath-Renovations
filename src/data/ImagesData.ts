import {
  customVanityImg,
  tileSchluterImg,
  bathtubReplaceImg,
  modernPowderRoomImg,
  freestandingTubImg,
  bathroomReferralImg,
  bathroomBeforeImg,
} from "../assets/images";

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

const beforeAfterData: DataInterface[] = [
  {
    img: bathroomReferralImg,
    beforeImg: bathroomBeforeImg,
    afterImg: bathroomReferralImg,
    title: "Langley Twp Master Ensuite Remodel",
    content: "Langley Master Ensuite Remodel",
    category: "Master Ensuite",
    details: "Transformed a cramped 1980s brass alcove into an expansive master ensuite with dual quartz vanity, undermount sinks, and frameless glass shower.",
    location: "Willoughby Heights, Langley",
    duration: "14 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    beforeImg: bathroomBeforeImg,
    afterImg: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    title: "Willoughby Tub-to-Curbless Shower",
    content: "Willoughby Tub-to-Shower Conversion",
    category: "Tub-to-Shower",
    details: "Removed yellowed acrylic tub-shower combo and built a zero-threshold curbless shower with Schluter-KERDI waterproofing, linear drain, and 10mm glass.",
    location: "Willoughby, Langley Twp",
    duration: "5 Days",
  },
  {
    img: freestandingTubImg,
    beforeImg: bathroomBeforeImg,
    afterImg: freestandingTubImg,
    title: "Fort Langley Freestanding Soaker Tub Oasis",
    content: "Fort Langley Freestanding Soaker Tub Suite",
    category: "Master Ensuite",
    details: "Replaced an outdated corner acrylic tub with an ergonomic matte white freestanding soaker tub and floor-mounted brushed gold faucet.",
    location: "Fort Langley, BC",
    duration: "10 Days",
  },
  {
    img: modernPowderRoomImg,
    beforeImg: bathroomBeforeImg,
    afterImg: modernPowderRoomImg,
    title: "Walnut Grove Modern Powder Room",
    content: "Walnut Grove Modern Powder Room",
    category: "Powder Room",
    details: "Removed builder-grade pedestal sink and replaced with custom fluted wood vanity, quartz top, round backlit LED mirror, and designer faucet.",
    location: "Walnut Grove, Langley",
    duration: "3 Days",
  },
  {
    img: customVanityImg,
    beforeImg: bathroomBeforeImg,
    afterImg: customVanityImg,
    title: "Brookswood Custom Double Quartz Vanity",
    content: "Brookswood Custom Double Vanity",
    category: "Custom Vanity",
    details: "Installed a 72-inch rift-sawn white oak floating vanity with Calacatta quartz countertops, undermount sinks, and Blum soft-close hardware.",
    location: "Brookswood, Langley Twp",
    duration: "3 Days",
  },
  {
    img: tileSchluterImg,
    beforeImg: bathroomBeforeImg,
    afterImg: tileSchluterImg,
    title: "Murrayville Curbless Walk-In Steam Shower",
    content: "Murrayville Curbless Walk-In Shower",
    category: "Walk-In Shower",
    details: "Vapor-tight Schluter shower with recessed ceiling rain head, handheld wand, illuminated shampoo niche, and 10mm architectural glass door.",
    location: "Murrayville, Langley",
    duration: "7 Days",
  },
  {
    img: bathtubReplaceImg,
    beforeImg: bathroomBeforeImg,
    afterImg: bathtubReplaceImg,
    title: "Clayton Heights Luxury Bathtub & Tile Surround",
    content: "Clayton Heights Soaking Bathtub Replacement",
    category: "Bathtub & Tile",
    details: "Replaced an aged fiberglass tub with a deep soaking alcove bathtub, custom textured subway tile surround, recessed niche, and brushed nickel fixtures.",
    location: "Clayton Heights, Surrey",
    duration: "4 Days",
  },
  {
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    beforeImg: bathroomBeforeImg,
    afterImg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    title: "Aldergrove Master Ensuite Renovation",
    content: "Aldergrove Luxury Ensuite Remodel",
    category: "Master Ensuite",
    details: "Complete floor-to-ceiling transformation with large format wall tiles, low-profile linear drain shower, and custom cabinetry.",
    location: "Aldergrove, Langley Twp",
    duration: "12 Days",
  },
];

export { beforeAfterData };
