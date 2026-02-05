import crypto from "node:crypto";

export type ContactFormTokenPayload = {
    ts: number;
    nonce: string;
};

type NonceEntry = {
    expiresAt: number;
};

function base64UrlEncode(input: string | Buffer): string {
    const buf = typeof input === "string" ? Buffer.from(input, "utf8") : input;
    return buf
        .toString("base64")
        .replaceAll("+", "-")
        .replaceAll("/", "_")
        .replaceAll("=", "");
}

function base64UrlDecodeToBuffer(input: string): Buffer {
    const padLength = (4 - (input.length % 4)) % 4;
    const padded = input.replaceAll("-", "+").replaceAll("_", "/") + "=".repeat(padLength);
    return Buffer.from(padded, "base64");
}

function timingSafeEqual(a: string, b: string): boolean {
    const aBuf = Buffer.from(a);
    const bBuf = Buffer.from(b);
    if (aBuf.length !== bBuf.length) return false;
    return crypto.timingSafeEqual(aBuf, bBuf);
}

function getContactFormSecret(): string | undefined {
    return process.env.CONTACT_FORM_SECRET ?? process.env.RESEND_API_KEY ?? undefined;
}

function sign(data: string, secret: string): string {
    return base64UrlEncode(crypto.createHmac("sha256", secret).update(data).digest());
}

export function createContactFormToken(): string | null {
    const secret = getContactFormSecret();
    if (!secret) return null;

    const payload: ContactFormTokenPayload = {
        ts: Date.now(),
        nonce: crypto.randomUUID(),
    };
    const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
    const signature = sign(payloadEncoded, secret);
    return `${payloadEncoded}.${signature}`;
}

export function verifyContactFormToken(
    token: string,
):
    | { ok: true; skipped: true }
    | { ok: true; skipped: false; payload: ContactFormTokenPayload; ageMs: number }
    | { ok: false } {
    const secret = getContactFormSecret();
    if (!secret) return { ok: true, skipped: true };

    const [payloadEncoded, signature] = token.split(".");
    if (!payloadEncoded || !signature) return { ok: false };

    const expectedSig = sign(payloadEncoded, secret);
    if (!timingSafeEqual(signature, expectedSig)) return { ok: false };

    try {
        const payloadJson = base64UrlDecodeToBuffer(payloadEncoded).toString("utf8");
        const parsed = JSON.parse(payloadJson) as Partial<ContactFormTokenPayload>;
        if (typeof parsed.ts !== "number" || typeof parsed.nonce !== "string") {
            return { ok: false };
        }
        const ageMs = Date.now() - parsed.ts;
        return {
            ok: true,
            skipped: false,
            payload: { ts: parsed.ts, nonce: parsed.nonce },
            ageMs,
        };
    } catch {
        return { ok: false };
    }
}

function getNonceStore(): Map<string, NonceEntry> {
    const globalForNonces = globalThis as unknown as {
        __mm_contactNonces?: Map<string, NonceEntry>;
    };
    globalForNonces.__mm_contactNonces ??= new Map<string, NonceEntry>();
    return globalForNonces.__mm_contactNonces;
}

export function consumeNonceOnce(nonce: string, ttlMs: number): boolean {
    if (!nonce) return false;
    const store = getNonceStore();
    const now = Date.now();

    const existing = store.get(nonce);
    if (existing && existing.expiresAt > now) return false;

    store.set(nonce, { expiresAt: now + ttlMs });

    if (store.size > 2500) {
        for (const [key, entry] of store.entries()) {
            if (entry.expiresAt <= now) store.delete(key);
        }
    }

    return true;
}

export function getClientIpFromHeaders(h: { get(name: string): string | null }): string | null {
    const forwarded = h.get("x-forwarded-for");
    if (forwarded) {
        const first = forwarded.split(",")[0]?.trim();
        if (first) return first;
    }
    const realIp = h.get("x-real-ip")?.trim();
    return realIp || null;
}

export function containsUrlLikeText(input: string): boolean {
    const text = input.toLowerCase();
    return /\bhttps?:\/\/\S+/.test(text) || /\bwww\.\S+/.test(text);
}

export async function verifyTurnstileToken(params: {
    token: string;
    remoteIp?: string | null;
}): Promise<boolean> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!secret || !siteKey) return true;
    if (!params.token) return false;

    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", params.token);
    if (params.remoteIp) body.set("remoteip", params.remoteIp);

    try {
        const res = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "content-type": "application/x-www-form-urlencoded" },
                body,
                signal: AbortSignal.timeout(4000),
            },
        );
        if (!res.ok) return false;
        const data = (await res.json()) as { success?: boolean };
        return Boolean(data.success);
    } catch {
        return false;
    }
}
