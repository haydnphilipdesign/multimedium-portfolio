"use client";

import { useMemo } from "react";
import { IconCopy, IconPrinter } from "@tabler/icons-react";

const checklistText = `Transaction Coordinator Lead Intake Checklist

Basics
- Name + best email/phone
- Business name (if applicable)
- Website / social links
- Where they found you

Transaction Details
- Property address + MLS # (if applicable)
- County / state
- Buyer / seller side
- Contract/ratification date
- Target close date
- Earnest money amount + due date + holder
- Financing type + lender info (if financed)

Parties (name + email + phone)
- Buyer(s)
- Seller(s)
- Buyer agent
- Listing agent
- Lender (if applicable)
- Title / attorney
- Home warranty (if applicable)

Documents Needed
- Executed agreement of sale
- Addenda (inspection, appraisal, etc.)
- Disclosures
- MLS sheet (optional)

Key Dates / Contingencies
- Inspection deadline + who schedules
- Appraisal deadline
- Financing contingency date
- HOA / condo docs deadline (if applicable)
- Utility / occupancy / possession terms

Communication + Expectations
- Preferred update cadence
- What you do / don’t handle
- Who is responsible for scheduling (inspections, utilities, etc.)

Red Flags / Fit Filter
- Are they clear on scope + responsibilities?
- Timeline realistic?
- Any unusual terms that require extra handling?
`;

export function ChecklistActions() {
    const canCopy = typeof navigator !== "undefined" && Boolean(navigator.clipboard);
    const text = useMemo(() => checklistText, []);

    async function handleCopy() {
        if (!canCopy) return;
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            // no-op: clipboard may be blocked
        }
    }

    function handlePrint() {
        if (typeof window === "undefined") return;
        window.print();
    }

    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <button
                type="button"
                onClick={handlePrint}
                className="btn-secondary inline-flex items-center justify-center gap-2"
            >
                <IconPrinter className="w-4 h-4" stroke={2} />
                Print / Save as PDF
            </button>
            <button
                type="button"
                onClick={handleCopy}
                className="btn-secondary inline-flex items-center justify-center gap-2"
                disabled={!canCopy}
            >
                <IconCopy className="w-4 h-4" stroke={2} />
                Copy checklist
            </button>
        </div>
    );
}

