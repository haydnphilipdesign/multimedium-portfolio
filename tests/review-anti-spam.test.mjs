import assert from "node:assert/strict";
import crypto from "node:crypto";
import test from "node:test";

import {
  createContactFormToken,
  verifyContactFormToken,
} from "../lib/contactAntiSpam.ts";

const TEST_SECRET = "review-anti-spam-test-secret";

function withContactFormSecret(run) {
  const previousSecret = process.env.CONTACT_FORM_SECRET;
  process.env.CONTACT_FORM_SECRET = TEST_SECRET;

  try {
    run();
  } finally {
    if (previousSecret === undefined) {
      delete process.env.CONTACT_FORM_SECRET;
    } else {
      process.env.CONTACT_FORM_SECRET = previousSecret;
    }
  }
}

test("standard contact form tokens round-trip without a purpose", () => {
  withContactFormSecret(() => {
    const token = createContactFormToken();
    assert.ok(token);

    const result = verifyContactFormToken(token);
    assert.equal(result.ok, true);
    assert.equal(result.skipped, false);
    assert.equal(result.payload.purpose, undefined);
  });
});

test("review retry tokens round-trip with their signed purpose", () => {
  withContactFormSecret(() => {
    const token = createContactFormToken({ purpose: "review-retry" });
    assert.ok(token);

    const result = verifyContactFormToken(token);
    assert.equal(result.ok, true);
    assert.equal(result.skipped, false);
    assert.equal(result.payload.purpose, "review-retry");
  });
});

test("tokens with a signed unsupported purpose are rejected", () => {
  withContactFormSecret(() => {
    const payload = Buffer.from(
      JSON.stringify({
        ts: Date.now(),
        nonce: "unsupported-purpose-test",
        purpose: "contact",
      }),
      "utf8",
    ).toString("base64url");
    const signature = crypto
      .createHmac("sha256", TEST_SECRET)
      .update(payload)
      .digest("base64url");

    assert.deepEqual(
      verifyContactFormToken(`${payload}.${signature}`),
      { ok: false },
    );
  });
});
