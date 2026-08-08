// ---------------------------------------------------------------------------
// SLIDE CONTENT — THRONE PASS
// Edit this array to build the deck. Each object is one slide.
// Supported types: title, bullets, stat, image, video, quote, twoColBullets, closing
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
    title: "Throne Pass",
    subtitle: "Every bathroom in America. One tap. No questions asked.",
  },
  {
    type: "bullets",
    title: "The Problem",
    bullets: [
      "You are in a city, you need a bathroom, and every door says CUSTOMERS ONLY.",
      "So you buy a $9 latte you don't want to access a bathroom you can barely find.",
      "Meanwhile every restaurant in America is sitting on an asset they give away for free.",
    ],
  },
  {
    type: "twoColBullets",
    title: "How It Works",
    left: {
      heading: "For members",
      bullets: [
        "Open the app — every partner bathroom on one map",
        "Walk in, tap your phone on the RFID reader",
        "Door opens. No purchase. No permission. No eye contact.",
      ],
    },
    right: {
      heading: "For venues",
      bullets: [
        "We install the reader. You do nothing.",
        "Get paid per scan on a room you already clean",
        "Members walk in thirsty and buy the latte anyway",
      ],
    },
  },
  {
    type: "stat",
    title: "The Demand",
    stats: [
      { value: "65M", label: "Visitors to NYC / year" },
      { value: "6x", label: "Bathroom trips per person, per day" },
      { value: "390M", label: "Trips per year, one city" },
    ],
  },
  {
    type: "stat",
    title: "The Supply",
    stats: [
      { value: "25K", label: "Public customer-accessible bathrooms, entire US" },
      { value: "20K", label: "Starbucks locations, US" },
      { value: "0", label: "Public toilets not owned by a business" },
    ],
  },
  {
    type: "bullets",
    title: "Bathrooms Drive Business",
    bullets: [
      "America has roughly as many accessible bathrooms as it has Starbucks — because they are largely the same buildings.",
      "Every retailer already knows the bathroom is what gets you in the door. They just never learned to charge for it.",
      "2–4 million toilets sit behind those doors. We are not building supply. We are unlocking it.",
    ],
  },
  {
    type: "stat",
    title: "The Subscription",
    stats: [
      { value: "$5", label: "Per month" },
      { value: "$50", label: "Per year" },
      { value: "$0", label: "What it actually costs you" },
    ],
  },
  {
    type: "bullets",
    title: "The Subscription Pays For Itself",
    bullets: [
      "Your $5 comes back every month as $5 of credit at any venue on the network.",
      "Spend it on the coffee you were going to buy anyway.",
      "Net cost to the member: nothing. They just have to keep using it.",
    ],
  },
  {
    type: "twoColBullets",
    title: "Why The Credit Works",
    left: {
      heading: "We don't lose the $5",
      bullets: [
        "It is not a discount, it is a routed payment",
        "It lands in a partner's register, not our P&L",
        "Venues fund the credit to acquire the customer",
      ],
    },
    right: {
      heading: "The venue gets more",
      bullets: [
        "$5 credit reliably converts to a larger basket",
        "Guaranteed foot traffic on a room they already clean",
        "Our churn is their retention. Same customer.",
      ],
    },
  },
  {
    type: "bullets",
    title: "But The Subscription Is Not The Business",
    bullets: [
      "Every tap is a verified human, at a known location, at a known minute.",
      "Nobody scans in and leaves. It is the highest-intent check-in on earth.",
      "We are not a bathroom company. We are a sensor network with 40 million endpoints.",
    ],
  },
  {
    type: "twoColBullets",
    title: "Revenue Stream Two: Data",
    left: {
      heading: "Foot traffic → capital markets",
      bullets: [
        "Verified visits, not GPS guesswork",
        "Same-store traffic nowcasting, weeks before earnings",
        "The alt-data desks already buy this — worse",
      ],
    },
    right: {
      heading: "Biometrics → health",
      bullets: [
        "Opt-in analysis at the fixture level",
        "Population health signal for CDC and NGOs",
        "Longitudinal cohorts for pharma Phase 4",
      ],
    },
  },
  {
    type: "bullets",
    title: "The Phase 4 Arbitrage",
    bullets: [
      "Post-market drug surveillance costs pharma millions per study and takes years to enroll.",
      "We have a consented, longitudinal, real-world cohort that reports in daily — without a clinic visit.",
      "We sell the same signal for a fraction of the price, and our members get paid to opt in.",
    ],
  },
  {
    type: "bullets",
    title: "Why Now",
    bullets: [
      "Public restrooms are disappearing — cities cut them, businesses locked them.",
      "Phone-tap access control is now cheaper than a deadbolt.",
      "Everyone already pays subscriptions for things that used to be free.",
    ],
  },
  {
    type: "bullets",
    title: "The Moat",
    bullets: [
      "Density wins. The first network to cover a city becomes the only one worth having.",
      "Every venue we sign is a door our competitors cannot open.",
      "We become critical infrastructure — the Visa network of relief.",
    ],
  },
  {
    type: "quote",
    text: "Nobody has ever regretted this purchase. Not once. Not in the history of commerce.",
    attribution: "— Throne Pass",
  },
  {
    type: "closing",
    title: "Throne Pass",
    subtitle: "Go anywhere.",
  },
];
