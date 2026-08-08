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
    title: "The Market",
    stats: [
      { value: "$14.99", label: "Per member, per month" },
      { value: "1M+", label: "US venues with a bathroom" },
      { value: "100%", label: "Of humans, addressable" },
    ],
  },
  {
    type: "bullets",
    title: "The Business Model",
    bullets: [
      "Consumer subscription — unlimited access, $14.99/mo.",
      "Venues take a cut per scan. Pure margin on a room they already have.",
      "We own the payment rail for the most universal need on earth.",
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
