// FAQ answers shared across pages. Wording from docs/brand/copy-deck.md;
// prices and terms from docs/brand/packages-and-sop.md.

export type Faq = { q: string; a: string };

export const mlsFaq: Faq = {
  q: "Can my website show MLS listings?",
  a: "Usually, yes. It depends on your MLS. Listing feeds (IDX) are governed by each MLS’s rules and approved data providers, so I scope them per project. I’m currently setting up SmartMLS listings for a Connecticut brokerage. Tell me which MLS you’re with and I’ll tell you what’s possible and what it costs.",
};

export const ownershipFaq: Faq = {
  q: "Do I own my website?",
  a: "Yes. Once it’s paid in full, your content, domain, and site are yours. If you ever move hosting, you get a complete copy of your site files.",
};

export const timelineFaq: Faq = {
  q: "How long does it take?",
  a: "About 2 weeks for a one-page site, 3–4 weeks for a full website, and 5–8 weeks for a custom build. The schedule starts when your questionnaire and photos are in.",
};

export const hostingFaq: Faq = {
  q: "What does hosting cost?",
  a: "$59/month after your first month, which is included. That covers hosting, security updates, monitoring, and small edits each month.",
};

export const starterPackageFaq: Faq = {
  q: "I’m just starting out. Which package should I choose?",
  a: "Usually the one-page site. It gives agents everything they need to trust you and send a file, and it can grow into a full website later without starting over.",
};

export const homeFaqs: Faq[] = [
  mlsFaq,
  ownershipFaq,
  {
    q: "What do you need from me?",
    a: "A short questionnaire, your logo and photos, any reviews you’d like to use, and time to review drafts. I handle the writing, design, and build.",
  },
  timelineFaq,
  hostingFaq,
  {
    q: "Do you work outside real estate?",
    a: "Occasionally, by referral. Most of my work, and all of my software, is for real estate professionals.",
  },
];

export const tcFaqs: Faq[] = [
  starterPackageFaq,
  {
    q: "Can you connect the intake form I already use?",
    a: "Yes. I can embed or link the tools TCs commonly use, such as Cognito Forms or Jotform, or build a simple form that emails you each submission.",
  },
  {
    q: "Do you write the copy?",
    a: "Yes. You answer a questionnaire about your services and how you work; I write the pages, and you review them.",
  },
  {
    q: "Should I publish my prices?",
    a: "Usually yes, or at least how your pricing works. Agents compare TCs quickly, and a site that answers the money question gets fewer “how much?” emails. It’s your call, and I’ll build it either way.",
  },
];

export const agentFaqs: Faq[] = [
  mlsFaq,
  {
    q: "I’m with a larger brokerage. Can I have my own site?",
    a: "Usually, yes. Most brokerages have advertising rules about how their name and your license information appear. Send me yours at kickoff and I’ll build within them.",
  },
  {
    q: "Can you use my existing reviews?",
    a: "Yes, quoted word for word and linked to where they were originally posted.",
  },
  {
    q: "Do you handle ads or social media?",
    a: "No. I build the website and set it up so search engines can read it properly. Ads and social media are best left to a specialist.",
  },
];

export const pricingFaqs: Faq[] = [
  ownershipFaq,
  timelineFaq,
  {
    q: "What counts as a revision round?",
    a: "One consolidated list of feedback, sent together. Each package includes a set number of rounds; extra rounds are billed at my hourly rate.",
  },
  {
    q: "Can I add pages later?",
    a: "Yes. Everything is built so it can grow; extra pages are $250 each.",
  },
];
