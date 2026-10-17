export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPostItem {
  slug: string;
  title: string;
  metaTitle: string; // <= 60 chars incl. brand
  metaDescription: string; // <= 159 chars
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  image: string;
  intro: string;
  sections: BlogSection[];
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const blogPosts: BlogPostItem[] = [
  {
    slug: "how-long-does-a-bathroom-remodel-take-in-langley-bc",
    title: "How Long Does a Bathroom Remodel Take in Langley, BC?",
    metaTitle: "Remodel Timeline in Langley, BC | Ideal Bath Renovations",
    metaDescription:
      "How long does a bathroom remodel take in Langley, BC? Typical timelines for showers, tub conversions, and full renovations, plus what can cause delays.",
    excerpt: "Typical timelines for a shower conversion, a vanity swap, and a full renovation, and what affects the schedule.",
    category: "Planning",
    date: "2026-10-05",
    readTime: "4 min read",
    image: img("photo-1552321554-5fefe8c9ef14"),
    intro:
      "Most homeowners want to know one thing before they say yes to a bathroom remodel: how long will I be without my bathroom? The answer depends on the scope, the materials, and what is behind the walls.",
    sections: [
      {
        heading: "Typical timelines by project type",
        paragraphs: [
          "A vanity, toilet, and faucet swap can usually be done in one to two days. A tub-to-shower conversion normally takes three to five working days. A full bathroom renovation with new tile, vanity, shower, and lighting generally runs two to three weeks. A remodel that moves plumbing or changes the layout takes longer.",
          "These are working-day estimates. Curing time for waterproofing and grout is built into the schedule, so rushing those steps is not a way to save time.",
        ],
      },
      {
        heading: "What most often causes delays",
        paragraphs: [
          "Material lead times cause most delays. Custom glass is typically measured after the shower is tiled, which can add days before it is installed. Special-order tile and vanities can also take weeks to arrive.",
          "Hidden problems are the other common cause. In older Langley homes we sometimes find rot around a tub, outdated drains, or an uneven subfloor. These are fixed before finishing, and they can extend the schedule.",
        ],
      },
      {
        heading: "How to keep your remodel on schedule",
        paragraphs: [
          "Choose tile, fixtures, and the vanity early so they can be ordered before demolition. Decide on glass type and hardware in advance as well. Plan to use another bathroom during the work, and keep the path to the bathroom clear for the crew.",
          "A written scope and schedule from your bathroom remodeler gives you something to measure against. If anything changes, you should see the revised date in writing.",
        ],
      },
    ],
  },
  {
    slug: "tub-to-shower-conversion-guide",
    title: "Tub-to-Shower Conversion: What Langley Homeowners Should Know",
    metaTitle: "Tub-to-Shower Conversion Langley | Ideal Bath Renovations",
    metaDescription:
      "Thinking about a tub-to-shower conversion in Langley, BC? Learn how it works, how long it takes, what it includes, and when it is the right choice for you.",
    excerpt: "How a tub-to-shower conversion works, what it includes, and when it is a smart move.",
    category: "Showers",
    date: "2026-09-28",
    readTime: "5 min read",
    image: img("photo-1584622650111-993a426fbf0a"),
    intro:
      "Replacing an old bathtub with a walk-in shower is one of the most popular bathroom projects in Langley. It improves safety, makes the room feel larger, and removes a surface that is difficult to keep clean.",
    sections: [
      {
        heading: "What a conversion includes",
        paragraphs: [
          "We remove the tub and surround, check the drain and subfloor, and build a sloped waterproof base. Walls are covered in a waterproof membrane before tile is set. The project then adds a valve, shower head, niche, glass, and trim.",
          "Most conversions take three to five working days, depending on the size of the shower and how quickly custom glass can be fitted.",
        ],
      },
      {
        heading: "Walk-in shower or a tub: how to decide",
        paragraphs: [
          "If you rarely use the tub, a walk-in shower is usually the better use of space. It is easier to enter and clean, and a clear glass panel makes small bathrooms feel more open.",
          "If you have young children, or you enjoy soaking, keep the tub. In a home with only one bathroom, many homeowners keep it for resale or family needs.",
        ],
      },
      {
        heading: "Options to consider",
        paragraphs: [
          "A curbless entry removes the step and works well for ageing in place, although it requires a floor that can be recessed. Benches, niches, and linear drains are other popular choices.",
          "Frameless glass looks open and is simple to wipe down. A shower curtain is cheaper and still works if you are on a tight budget.",
        ],
      },
    ],
  },
  {
    slug: "do-you-need-a-permit-for-a-bathroom-renovation-in-langley",
    title: "Do You Need a Permit for a Bathroom Renovation in Langley?",
    metaTitle: "Bathroom Permits in Langley, BC | Ideal Bath Renovations",
    metaDescription:
      "Do you need a permit for a bathroom renovation in Langley, BC? Learn when plumbing and electrical work needs one, and who to contact in the City or Township.",
    excerpt: "When a bathroom renovation needs a permit, and the difference between the City and Township of Langley.",
    category: "Permits",
    date: "2026-09-20",
    readTime: "4 min read",
    image: img("photo-1620626011761-996317b8d101"),
    intro:
      "Permit rules confuse many homeowners, partly because Langley has two municipalities: the City of Langley and the Township of Langley. Which one issues your permit depends on your address.",
    sections: [
      {
        heading: "When a permit is usually not needed",
        paragraphs: [
          "Replacing finishes in the same location typically does not require a permit. That includes tile, paint, a vanity swap, or a new toilet on the existing drain.",
        ],
      },
      {
        heading: "When a permit is usually needed",
        paragraphs: [
          "Moving drains or supply lines, adding a new bathroom, adding electrical circuits, or altering structural walls generally require one. Your municipality can confirm the rules for your project.",
          "Permits help make sure the work meets the BC Building Code. They also leave a record that is useful when you sell the home.",
        ],
      },
      {
        heading: "How we handle it",
        paragraphs: [
          "When a project needs a permit, we prepare the application, schedule the inspections, and keep the paperwork on file for you. Always check with the City of Langley or the Township of Langley for the most current requirements.",
        ],
      },
    ],
  },
  {
    slug: "bathroom-waterproofing-in-bc",
    title: "Why Bathroom Waterproofing Matters in BC's Wet Climate",
    metaTitle: "Bathroom Waterproofing in BC Homes | Ideal Bath Renovations",
    metaDescription:
      "Why bathroom waterproofing matters in BC. Learn how shower membranes, sloped pans, and good ventilation protect your home from leaks, mold, and damage.",
    excerpt: "How proper waterproofing and ventilation prevent leaks, mold, and rot in West Coast bathrooms.",
    category: "Waterproofing",
    date: "2026-09-12",
    readTime: "4 min read",
    image: img("photo-1507652313519-d4e9174996dd"),
    intro:
      "Tile and grout are not waterproof. In a wet climate like ours, what is behind the tile decides whether a shower lasts five years or twenty-five.",
    sections: [
      {
        heading: "What proper waterproofing includes",
        paragraphs: [
          "A good shower has a sloped base so water flows toward the drain, a continuous waterproof membrane over the floor and walls, and sealed corners and penetrations. Tile and grout are the surface, not the barrier.",
        ],
      },
      {
        heading: "Signs of a waterproofing failure",
        paragraphs: [
          "A musty smell, soft flooring, stained ceilings below the bathroom, tiles that move, or grout that keeps cracking can indicate that moisture is getting through. If you notice any of these, have it inspected early.",
        ],
      },
      {
        heading: "Ventilation matters too",
        paragraphs: [
          "Even a well-built shower needs an exhaust fan that clears humidity. Choose one sized for the room and vent it outside, not into the attic. We install and test fans as part of renovations.",
        ],
      },
    ],
  },
  {
    slug: "walk-in-shower-vs-bathtub",
    title: "Walk-In Shower vs Bathtub: How to Choose for Your Bathroom",
    metaTitle: "Walk-In Shower vs Bathtub Guide | Ideal Bath Renovations",
    metaDescription:
      "Walk-in shower or bathtub? Compare space, safety, cleaning, and resale to decide the right choice for your Langley, BC bathroom renovation.",
    excerpt: "Compare space, safety, cleaning, and resale to decide between a walk-in shower and a tub.",
    category: "Design",
    date: "2026-09-03",
    readTime: "4 min read",
    image: img("photo-1584622781564-1d987f7333c1"),
    intro:
      "If your bathroom has room for only one, the choice between a walk-in shower and a bathtub comes down to how you actually use the space.",
    sections: [
      {
        heading: "Space and layout",
        paragraphs: [
          "A walk-in shower uses less floor area and can feel more open with clear glass. A standard tub takes up about 5 feet of wall and is a better fit when you need a bath for children.",
        ],
      },
      {
        heading: "Safety and accessibility",
        paragraphs: [
          "Stepping over a tub wall is harder for older adults. A low-threshold or curbless shower with a bench and grab bars supports ageing in place.",
        ],
      },
      {
        heading: "Cleaning and resale",
        paragraphs: [
          "Tiled showers with fewer seams are easy to maintain. For resale, some buyers like to see at least one tub in the house, so consider keeping one in a second bathroom.",
        ],
      },
    ],
  },
  {
    slug: "how-to-plan-a-bathroom-remodel-budget",
    title: "How to Plan a Bathroom Remodel Budget Without Surprises",
    metaTitle: "Plan a Bathroom Remodel Budget | Ideal Bath Renovations",
    metaDescription:
      "How to plan a bathroom remodel budget in BC: decide priorities, keep your layout, set aside a contingency, and get a written quote that avoids surprises.",
    excerpt: "Practical ways to set priorities, keep costs in check, and prepare for hidden issues.",
    category: "Budgeting",
    date: "2026-08-25",
    readTime: "5 min read",
    image: img("photo-1507089947368-19c1da9775ae"),
    intro:
      "Bathroom budgets go off track when scope is vague. A little planning up front makes the final number much more predictable.",
    sections: [
      {
        heading: "Decide what matters most",
        paragraphs: [
          "List the three things you most want, such as a walk-in shower, better storage, or new tile. Put money there first, and choose simpler finishes in places you will notice less.",
        ],
      },
      {
        heading: "Keep the layout where possible",
        paragraphs: [
          "Moving the toilet, shower, or vanity means new drain runs and often subfloor work. Keeping fixtures in place keeps more of the budget for visible finishes.",
        ],
      },
      {
        heading: "Set aside a contingency",
        paragraphs: [
          "Older homes can hide rot, aged pipes, or uneven floors. A contingency fund gives you room to deal with surprises without stopping the job.",
        ],
      },
      {
        heading: "Get a written scope",
        paragraphs: [
          "Ask every contractor for a written quote that lists the work, materials, and allowances. It makes it easier to compare quotes and reduces disagreements later.",
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
