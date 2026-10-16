export const engagements = [
  {
    name: "Signal",
    category: "Find the right next move",
    price: "€750",
    unit: "/ fixed scope",
    duration: "A focused diagnostic",
    description:
      "Before you buy another tool, find out what actually needs fixing.",
    features: [
      "Customer journey & workflow review",
      "Prioritised opportunity map",
      "One practical implementation brief",
      "A clear scope, cost & success measure",
    ],
    cta: "Start with clarity",
  },
  {
    name: "Launch",
    category: "Build your growth system",
    price: "€4,500",
    unit: "/ starting from",
    duration: "One connected customer journey",
    description:
      "A focused build that connects the first enquiry to the next action.",
    features: [
      "Conversion-focused website or landing flow",
      "CRM connection & one priority workflow",
      "AI assistance where it earns its place",
      "Testing, team training & full handover",
    ],
    cta: "Plan your launch",
  },
  {
    name: "Orbit",
    category: "Keep getting better",
    price: "€650",
    unit: "/ month, starting from",
    duration: "An optional ongoing partnership",
    description:
      "Keep your system useful as your business and your tools evolve.",
    features: [
      "Monthly performance & workflow review",
      "One prioritised improvement cycle",
      "AI answer checks & knowledge upkeep",
      "A shared backlog and clear reporting",
    ],
    cta: "Find your rhythm",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Find the friction.",
    description:
      "We map how people discover you, enquire, and become customers. Together, we choose one bottleneck and agree what a better result looks like.",
    deliverable: "Opportunity map + a measurable starting point",
  },
  {
    number: "02",
    title: "Connect the pieces.",
    description:
      "We design and build a focused customer journey around your existing tools. AI handles suitable repetitive work; important decisions stay with your team.",
    deliverable: "A working system + real-world acceptance checks",
  },
  {
    number: "03",
    title: "Launch. Learn. Improve.",
    description:
      "You get the accounts, documentation, and training to run it. Then choose to manage it yourself or work with us on a monthly improvement cycle.",
    deliverable: "Ownership + team handover + an improvement plan",
  },
] as const;
