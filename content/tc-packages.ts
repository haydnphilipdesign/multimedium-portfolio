export const tcPackages = [
  {
    name: "TC Starter",
    key: "starter",
    price: "$750",
    budget: "under1k",
    description:
      "A focused one-page website that explains your services and gives agents a clear next step.",
    bestFor: "Solo TCs who need a professional first website.",
    features: [
      "One custom page",
      "Clear service messaging and visual direction",
      "Simple contact or intake form",
      "Mobile-friendly build and launch setup",
    ],
  },
  {
    name: "TC Growth",
    key: "growth",
    price: "$1,500",
    budget: "1to3k",
    description:
      "A multi-page website with room for your services, your process, and a dedicated way to start a file.",
    bestFor: "Established TCs ready for a stronger online presence.",
    features: [
      "A multi-page website tailored to your business",
      "Dedicated service content",
      "A submit-a-file or intake workflow",
      "Collaborative copy direction and launch support",
    ],
  },
  {
    name: "TC Pro",
    key: "pro",
    price: "$3,000+",
    budget: "3to5k",
    description:
      "A more involved custom website for teams, expanded services, and connected business workflows.",
    bestFor: "Growing teams and businesses with more complex needs.",
    features: [
      "A custom page plan and deeper visual direction",
      "More detailed service and team presentation",
      "Scoped integrations and workflow improvements",
      "A launch and support plan matched to the build",
    ],
  },
] as const;
