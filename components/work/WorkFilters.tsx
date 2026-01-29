"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconFilter, IconX } from "@tabler/icons-react";
import { useState, useCallback, useTransition } from "react";

interface FilterOption {
    value: string;
    label: string;
    count: number;
}

interface WorkFiltersProps {
    categories: FilterOption[];
    industries: FilterOption[];
    currentCategory?: string;
    currentIndustry?: string;
}

const industryLabels: Record<string, string> = {
    tc: "Transaction Coordinators",
    "real-estate": "Real Estate",
    wellness: "Wellness",
};

export function WorkFilters({
    categories,
    industries,
    currentCategory,
    currentIndustry,
}: WorkFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [showFilters, setShowFilters] = useState(
        Boolean(currentCategory || currentIndustry)
    );

    const hasActiveFilters = Boolean(currentCategory || currentIndustry);

    const updateFilter = useCallback(
        (key: string, value: string | null) => {
            const params = new URLSearchParams(searchParams.toString());

            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }

            // Remove empty params
            if (!params.get("category")) params.delete("category");
            if (!params.get("industry")) params.delete("industry");

            const queryString = params.toString();
            const url = queryString ? `/work?${queryString}` : "/work";

            startTransition(() => {
                router.push(url, { scroll: false });
            });
        },
        [router, searchParams]
    );

    const clearAllFilters = useCallback(() => {
        startTransition(() => {
            router.push("/work", { scroll: false });
        });
    }, [router]);

    return (
        <div className="space-y-4">
            {/* Filter Toggle Button */}
            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 text-sm font-medium ${showFilters || hasActiveFilters
                            ? "border-glow/30 bg-glow/10 text-foreground"
                            : "border-border/50 bg-card hover:border-border text-muted-foreground hover:text-foreground"
                        }`}
                >
                    <IconFilter className="w-4 h-4" stroke={1.5} />
                    <span>Filter</span>
                    {hasActiveFilters && (
                        <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-glow text-background text-xs font-bold">
                            {(currentCategory ? 1 : 0) + (currentIndustry ? 1 : 0)}
                        </span>
                    )}
                </button>

                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <IconX className="w-3.5 h-3.5" stroke={2} />
                        Clear filters
                    </button>
                )}
            </div>

            {/* Filter Options */}
            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 space-y-4">
                            {/* Category Filter */}
                            {categories.length > 0 && (
                                <div>
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                                        Category
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <FilterPill
                                            label="All"
                                            isActive={!currentCategory}
                                            onClick={() => updateFilter("category", null)}
                                            isPending={isPending}
                                        />
                                        {categories.map((cat) => (
                                            <FilterPill
                                                key={cat.value}
                                                label={cat.label}
                                                count={cat.count}
                                                isActive={currentCategory === cat.value}
                                                onClick={() =>
                                                    updateFilter(
                                                        "category",
                                                        currentCategory === cat.value ? null : cat.value
                                                    )
                                                }
                                                isPending={isPending}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Industry Filter */}
                            {industries.length > 0 && (
                                <div>
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                                        Industry
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <FilterPill
                                            label="All"
                                            isActive={!currentIndustry}
                                            onClick={() => updateFilter("industry", null)}
                                            isPending={isPending}
                                        />
                                        {industries.map((ind) => (
                                            <FilterPill
                                                key={ind.value}
                                                label={industryLabels[ind.value] || ind.label}
                                                count={ind.count}
                                                isActive={currentIndustry === ind.value}
                                                onClick={() =>
                                                    updateFilter(
                                                        "industry",
                                                        currentIndustry === ind.value ? null : ind.value
                                                    )
                                                }
                                                isPending={isPending}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading indicator */}
            {isPending && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-4 h-4 border-2 border-glow/30 border-t-glow rounded-full animate-spin" />
                    <span>Filtering...</span>
                </div>
            )}
        </div>
    );
}

interface FilterPillProps {
    label: string;
    count?: number;
    isActive: boolean;
    onClick: () => void;
    isPending: boolean;
}

function FilterPill({ label, count, isActive, onClick, isPending }: FilterPillProps) {
    return (
        <button
            onClick={onClick}
            disabled={isPending}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-50 ${isActive
                    ? "bg-glow text-background shadow-sm shadow-glow/20"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent hover:border-border/50"
                }`}
        >
            <span>{label}</span>
            {count !== undefined && (
                <span
                    className={`text-xs ${isActive ? "text-background/70" : "text-muted-foreground/70"
                        }`}
                >
                    ({count})
                </span>
            )}
        </button>
    );
}
