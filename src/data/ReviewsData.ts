/** Google Business Profile data verified against the live Google listing. */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Ideal+bath+renovations/@49.146229,-122.6451263,17z/data=!4m8!3m7!1s0x5485d100095e3151:0x30d85aa12ead439e!8m2!3d49.146229!4d-122.6451263!9m1!1b1!16s%2Fg%2F11nt_7sv23";
export const GOOGLE_BUSINESS_URL = GOOGLE_REVIEWS_URL;

export const GOOGLE_RATING: number | null = 5;
export const GOOGLE_REVIEW_COUNT: number | null = 9;

export interface ReviewItem {
  name: string;
  profileDetails: string;
  stars: number;
  date: string;
  comment: string;
  context?: {
    label: string;
    value: string;
  };
}

export const reviews: ReviewItem[] = [
  {
    name: "navjeet kaur",
    profileDetails: "7 reviews · 4 photos",
    stars: 5,
    date: "3 weeks ago",
    comment:
      "Great transformation by ideal bath renovation team. We originally contacted them to replace our bathtub but end up renovating the whole washroom as they gave us a great price. They used good quality material and got the job done in a week. Great washroom reno company in langley.",
  },
  {
    name: "Guramar Sidhu",
    profileDetails: "Local Guide · 28 reviews · 9 photos",
    stars: 5,
    date: "2 weeks ago",
    comment:
      "Ideal bath renovation is 10/10 washroom experts contractor in Fraser valley. Great communication and they use premium quality material. Highly recommend",
  },
  {
    name: "Arshiya Jabeen",
    profileDetails: "2 reviews",
    stars: 5,
    date: "2 weeks ago",
    comment:
      "Amazing experience with ideal bath renovations. They did a great washroom Reno job for me. They went above and beyond to deliver the quality and got the job done in a week. Highly recommend for best bathroom Reno’s.",
  },
  {
    name: "NAVISH ASIJA",
    profileDetails: "Local Guide · 14 reviews · 1 photo",
    stars: 5,
    date: "a week ago",
    comment:
      "Ideal bath renovation is very quick with getting our washroom renovated. They did our neighbours project while ago and they referred ideal bath renovation which turns out to be perfect decision. Highly recommend for washroom renovation in Surrey",
  },
  {
    name: "Jaskaran Bassi",
    profileDetails: "18 reviews",
    stars: 5,
    date: "6 days ago",
    comment:
      "I had a cousin that got their bathroom renovations done from here and they did a superb job! Definitely recommend getting a quote from Ideal Bath Renovations.",
    context: { label: "Price assessment", value: "Great price" },
  },
  {
    name: "Sam Sharma",
    profileDetails: "Local Guide · 137 reviews · 1,192 photos",
    stars: 5,
    date: "6 days ago",
    comment:
      "Great quality , professional communication, reasonable price and quick installation. They did our full washroom Reno with a $10000 budget within a week. Highly satisfied with the quality and transformation.",
  },
  {
    name: "Tony Jose",
    profileDetails: "8 reviews · 3 photos",
    stars: 5,
    date: "2 days ago",
    comment:
      "Awesome bathroom transformation by ideal bath renovation. They renovate three washrooms in our house in Surrey and also build a new powder washroom by using some space out of laundry, we were thinking of getting it done and finally these guys delivered what we needed at a great price.",
    context: {
      label: "Services",
      value: "Bathtub refinishing, Shower refinishing, Remodeling, Bathtub repair",
    },
  },
];
