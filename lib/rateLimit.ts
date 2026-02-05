export interface RateLimitOptions {
    limit: number;
    windowMs: number;
}

export type RateLimitResult =
    | { allowed: true }
    | { allowed: false; retryAfterSeconds: number };

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

function getStore(): Map<string, RateLimitEntry> {
    const globalForRateLimit = globalThis as unknown as {
        __mm_rateLimitStore?: Map<string, RateLimitEntry>;
    };
    globalForRateLimit.__mm_rateLimitStore ??= new Map<string, RateLimitEntry>();
    return globalForRateLimit.__mm_rateLimitStore;
}

export function checkRateLimit(key: string, options: RateLimitOptions): RateLimitResult {
    const now = Date.now();
    const store = getStore();
    const existing = store.get(key);

    if (!existing || existing.resetAt <= now) {
        store.set(key, { count: 1, resetAt: now + options.windowMs });
        return { allowed: true };
    }

    if (existing.count >= options.limit) {
        return {
            allowed: false,
            retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
        };
    }

    existing.count += 1;
    store.set(key, existing);
    return { allowed: true };
}

