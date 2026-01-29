export const checklistTitle = "Transaction Coordinator Lead Intake Checklist";

export interface ChecklistSection {
    title: string;
    items: string[];
}

export const checklistSections: ChecklistSection[] = [
    {
        title: "Basics",
        items: [
            "Name + best email/phone",
            "Business name (if applicable)",
            "Website / social links",
            "Where they found you",
        ],
    },
    {
        title: "Transaction details",
        items: [
            "Property address + MLS # (if applicable)",
            "County / state",
            "Buyer / seller side",
            "Contract/ratification date",
            "Target close date",
            "Earnest money amount + due date + holder",
            "Financing type + lender info (if financed)",
        ],
    },
    {
        title: "Parties (name + email + phone)",
        items: [
            "Buyer(s)",
            "Seller(s)",
            "Buyer agent",
            "Listing agent",
            "Lender (if applicable)",
            "Title / attorney",
            "Home warranty (if applicable)",
        ],
    },
    {
        title: "Documents needed",
        items: [
            "Executed agreement of sale",
            "Addenda (inspection, appraisal, etc.)",
            "Disclosures",
            "MLS sheet (optional)",
        ],
    },
    {
        title: "Key dates / contingencies",
        items: [
            "Inspection deadline + who schedules",
            "Appraisal deadline",
            "Financing contingency date",
            "HOA / condo docs deadline (if applicable)",
            "Utility / occupancy / possession terms",
        ],
    },
    {
        title: "Communication + expectations",
        items: [
            "Preferred update cadence",
            "What you do / don't handle",
            "Who is responsible for scheduling (inspections, utilities, etc.)",
        ],
    },
    {
        title: "Red flags / fit filter",
        items: [
            "Are they clear on scope + responsibilities?",
            "Timeline realistic?",
            "Any unusual terms that require extra handling?",
        ],
    },
];

export const checklistText = [
    checklistTitle,
    "",
    ...checklistSections.flatMap((section) => [
        section.title,
        ...section.items.map((item) => `- ${item}`),
        "",
    ]),
]
    .join("\n")
    .trim();
