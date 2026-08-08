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
    graphic: "toilet-flag",
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
    caption: "Bottom-up at $50 a year, 100% capture. Everybody goes.",
    columns: ["", "", ""],
    rows: [
      ["New York City", "$3.7B", "73.5M residents + visitors"],
      ["Top 10 US metros", "$18B", "360M people"],
      ["Every urban adult in America", "$10.5B", "210M people"],
      ["Every urban adult on earth", "$105B", "2.1B people, no translation needed"],
      ["Data layer", "+$25B", "three streams, next slide"],
      ["Total addressable market", "$130B", ""],
    ],
  },
  {
    type: "bullets",
    title: "Business Model & Pricing",
    bullets: [
      "$5 per month, or $50 per year. Unlimited access to the entire network.",
      "The $5 comes back as credit at any partner venue — net cost to the member is nothing.",
      "Venues are paid per scan on a room they already clean. Zero capex, pure margin.",
      "And every scan produces something far more valuable than the $5.",
    ],
  },
  {
    type: "table",
    title: "Three Data Streams",
    caption: "The subscription buys the network. The network is the product.",
    numCol: 0,
    columns: ["Stream", "Buyer", "What we sell"],
    rows: [
      ["Foot traffic", "Hedge funds, banks", "Verified visits — same-store traffic weeks before earnings"],
      ["Public health", "Government, NGOs", "Population-level stool and urinary analysis — outbreak detection in real time"],
      ["Biomarkers", "Pharma", "Phase 4 post-market outcomes at a fraction of clinical trial cost"],
    ],
  },
  {
    type: "bullets",
    title: "Go To Market",
    bullets: [
      "The bathroom finder app is free. The door unlock is the paywall — the cheapest CAC in consumer.",
      "Streak-based rewards. Refer three friends and unlock Liberty Elite: priority access at high-traffic locations and a gold QR badge.",
      "Win one city completely before touching a second. Density is the entire product.",
      "Readers are free to the venue. We are asking them to monetize a cost center, not spend on one.",
      "Own the tourist channel: hotels, airports, and rail bundle Liberty Pass into every visitor.",
    ],
  },
  {
    type: "bullets",
    title: "Content Strategy",
    bullets: [
      "City Gut Reports — an annual ranked list of the best and worst bathroom cities in America.",
      "Every mayor in the country will fight us about their ranking, in public, for free.",
      "America's Gut Index — the nation's stool, pooled. The only health index nobody can look away from.",
      "The content is the top of the funnel. The data is the bottom line.",
    ],
  },
  {
    type: "table",
    title: "Projected Financials",
    caption: "Membership funds the build. Data compounds on top of it.",
    numCol: 2,
    columns: ["Year", "Members", "Revenue"],
    rows: [
      ["Year 1", "1M", "$200M"],
      ["Year 2", "15M", "$3B"],
      ["Year 3", "90M", "$14B"],
      ["Year 4", "350M", "$50B"],
      ["Year 5", "700M", "$98B"],
    ],
  },
  {
    type: "team",
    title: "The Team",
    photo: "assets/team.jpg",
    photoAlt: "The Liberty Pass founding team",
    members: [
      { role: "CEO", name: "Cliff Weitzman", note: "Founder of Speechify — 60M users" },
      { role: "CSO", name: "Ankit", note: "Founder of Anthrogen — AI-native bio" },
      { role: "CFO", name: "Mike Anagnos" },
      { role: "CRO", name: "Anna Yu" },
      { role: "CPO", name: "Rowan Daiksel" },
      { role: "CMO", name: "Edgar Sze" },
    ],
  },
  {
    type: "closing",
    title: "Liberty Pass",
    subtitle: "The freedom to go.",
    graphic: "flag",
  },
];
