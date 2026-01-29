"use client";

import { useMemo } from "react";
import { IconCopy, IconPrinter } from "@tabler/icons-react";
import { checklistText } from "@/lib/resources/tc-intake-checklist";

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
