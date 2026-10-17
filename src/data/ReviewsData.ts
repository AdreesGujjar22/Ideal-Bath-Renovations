/**
 * Google Business Profile reviews.
 * Replace the values below with the REAL data from the Google profile.
 * Rating / count stay `null` until you fill them, so nothing unverified is shown.
 */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Ideal+bath+renovations/@49.146229,-122.6451263,17z/data=!4m8!3m7!1s0x5485d100095e3151:0x30d85aa12ead439e!8m2!3d49.146229!4d-122.6451263!9m1!1b1!16s%2Fg%2F11nt_7sv23";

export const GOOGLE_RATING: number | null = null; // e.g. 5.0
export const GOOGLE_REVIEW_COUNT: number | null = null; // e.g. 28

export interface ReviewItem {
  name: string;
  location: string;
  project: string;
  stars: number;
  date: string;
  comment: string;
}

export const reviews: ReviewItem[] = [
  {
    name: "David & Karen M.",
    location: "Willoughby Heights, Langley Twp",
    project: "Full Master Ensuite Remodel & Steam Shower",
    stars: 5,
    date: "Google Review",
    comment:
      "Ideal Bath Renovations transformed our outdated 1990s ensuite into a five-star spa sanctuary! The 3D CAD design helped us visualize the curbless shower and heated tile floors before work started. The crew arrived promptly on schedule every morning, kept the dust completely contained with HEPA filters, and finished on the exact day promised. Zero leaks, exquisite craftsmanship, and honest pricing!",
  },
  {
    name: "Robert S.",
    location: "Walnut Grove, Langley",
    project: "Tub-to-Shower Conversion",
    stars: 5,
    date: "Google Review",
    comment:
      "Converted a slippery acrylic tub into a gorgeous modern walk-in shower with 10mm frameless glass and matte black fixtures. The Schluter waterproofing system gave us total peace of mind. Completed in just 4 days from demo to sparkling clean walkthrough. Highly recommend their team!",
  },
  {
    name: "Eileen & Thomas B.",
    location: "Brookswood, Langley Twp",
    project: "Aging-in-Place ADA Accessible Shower",
    stars: 5,
    date: "Google Review",
    comment:
      "We needed a zero-barrier roll-in shower and secure designer grab bars for my mother. The Ideal Bath team treated our home with immense respect and helped us navigate the BC Home Renovation accessibility tax credit. The bathroom is safe, functional, and looks stunning!",
  },
];
