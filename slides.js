// ---------------------------------------------------------------------------
// SLIDE CONTENT
// Edit this array to build the deck. Each object is one slide.
// Supported types: title, bullets, stat, image, video, quote, twoColBullets, closing
// ---------------------------------------------------------------------------

const SLIDES = [
  {
    type: "title",
    brand: true,
    quoted: "STARTUP PITCH",
    year: "WATER MILL CUP 2026",
  },
  {
    type: "title",
    eyebrow: "Pitch Competition",
    title: "Your Idea Goes Here",
    subtitle: "One killer sentence that hooks the room.",
  },
  {
    type: "bullets",
    title: "The Problem",
    bullets: [
      "What's broken today?",
      "Who feels the pain, and how often?",
      "Why hasn't anyone fixed this already?",
    ],
  },
  {
    type: "bullets",
    title: "The Idea",
    bullets: [
      "What are we building?",
      "Why is now the moment for this?",
      "What's the unfair advantage?",
    ],
  },
  {
    type: "stat",
    title: "Why It Matters",
    stats: [
      { value: "$0B", label: "Market size" },
      { value: "0%", label: "Growth rate" },
      { value: "0M", label: "People affected" },
    ],
  },
  {
    type: "twoColBullets",
    title: "How It Works",
    left: {
      heading: "For the user",
      bullets: ["Step one", "Step two", "Step three"],
    },
    right: {
      heading: "Under the hood",
      bullets: ["Data / model", "Distribution", "Moat"],
    },
  },
  {
    type: "quote",
    text: "Insert a killer soundbite, judge quote, or customer line here.",
    attribution: "— Source",
  },
  {
    type: "closing",
    title: "Thank You",
    subtitle: "Questions?",
  },
];
