// ---------------------------------------------------------------------------
// SLIDE CONTENT — LIBERTY PASS
// Edit this array to build the deck. Each object is one slide.
// Types: title, bullets, stat, table, image, video, quote, twoColBullets, closing
// ---------------------------------------------------------------------------

const SLIDES = [
  {
    type: "title",
    brand: true,
    quoted: "HAS THIS EVER",
    year: "HAPPENED TO YOU?",
  },
  {
    type: "bullets",
    title: "America Is Shackled By Its Toilets",
    bullets: [
      "In 1965 we passed the Highway Beautification Act to make America beautiful to look at.",
      "Sixty years later you still cannot find a place to go.",
      "This is the infrastructure bill nobody had the courage to write.",
    ],
  },
  {
    type: "title",
    eyebrow: "Introducing",
    title: "Liberty Pass",
    subtitle: "Every bathroom in America. One tap. No questions asked.",
  },
  {
    type: "bullets",
    title: "The Problem",
    bullets: [
      "There are 25,000 customer-accessible bathrooms in the entire United States. There are 20,000 Starbucks.",
      "Public toilets not owned by a business effectively do not exist.",
      "So you buy a $9 latte you do not want, to access a room you can barely find.",
      "Every venue in America is sitting on an asset they give away for free — and eat the cost of.",
    ],
  },
  {
    type: "twoColBullets",
    title: "The Solution",
    left: {
      heading: "For members",
      bullets: [
        "One map. Every partner bathroom, live.",
        "Walk in, tap your phone on the reader.",
        "Door opens. No purchase. No permission.",
      ],
    },
    right: {
      heading: "For venues",
      bullets: [
        "We install the reader. Zero capex.",
        "Paid per scan on a room they already clean.",
        "Every scan walks in thirsty and buys anyway.",
      ],
    },
  },
  {
    type: "table",
    title: "Market Opportunity",
    caption: "Bottom-up, at $50 a year. Everybody goes.",
    columns: ["", "", ""],
    rows: [
      ["New York City beachhead", "$37M", "1% of 73.5M residents + visitors"],
      ["Top 10 US metros", "$370M", "where we are by year five"],
      ["Every urban adult in America", "$10.5B", "210M people"],
      ["Every urban adult on earth", "$105B", "2.1B people, no translation needed"],
      ["Data layer", "+$25B", "foot traffic + health"],
      ["Total addressable market", "$130B", ""],
    ],
  },
  {
    type: "twoColBullets",
    title: "Business Model & Pricing",
    left: {
      heading: "Revenue one: members",
      bullets: [
        "$5 per month, or $50 per year",
        "The $5 returns as credit at any partner venue",
        "Net cost to member: nothing. Churn near zero.",
      ],
    },
    right: {
      heading: "Revenue two: data",
      bullets: [
        "Verified foot traffic sold to capital markets",
        "Opt-in population health signal for CDC and NGOs",
        "Consented cohorts for pharma Phase 4 studies",
      ],
    },
  },
  {
    type: "bullets",
    title: "Go To Market",
    bullets: [
      "Win one city completely before touching a second. Density is the entire product.",
      "Sign anchor chains first — coffee and fast casual seed the map in a week.",
      "Readers are free to the venue. We are asking them to monetize a cost center, not spend.",
      "Own the tourist channel: hotels, airports, and rail bundle Liberty Pass into every visitor.",
    ],
  },
  {
    type: "table",
    title: "Projected Financials",
    caption: "Members drive revenue one. Density unlocks revenue two.",
    numCol: 2,
    columns: ["Year", "Members", "Revenue"],
    rows: [
      ["Year 1", "50K", "$2.5M"],
      ["Year 2", "250K", "$13M"],
      ["Year 3", "1M", "$65M"],
      ["Year 4", "2.5M", "$160M"],
      ["Year 5", "4M", "$300M"],
    ],
  },
  {
    type: "closing",
    title: "Liberty Pass",
    subtitle: "The freedom to go.",
  },
];
