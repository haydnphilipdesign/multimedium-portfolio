import assert from "node:assert/strict";
import test from "node:test";
import {
  emptyContactValues,
  budgetRanges,
  readContactValues,
  validateContact,
  contactLabels,
} from "../app/contact/validation.ts";
import { sendContactEmail } from "../lib/email.ts";
const valid = {
  ...emptyContactValues,
  name: "Test Owner",
  email: "owner@example.com",
  message: "A custom website for my service business.",
  projectType: "full",
  budgetRange: "1to3k",
  timeline: "1to2mo",
  package: "TC Growth",
};
test("every displayed budget survives validation and email mapping", () => {
  for (const budgetRange of Object.keys(budgetRanges)) {
    const v = { ...valid, budgetRange };
    assert.equal(validateContact(v), undefined);
    assert.equal(contactLabels(v).budgetRange, budgetRanges[budgetRange]);
  }
});
test("reads package and qualification details from a submission", () => {
  const f = new FormData();
  for (const [k, v] of Object.entries(valid)) f.set(k, v);
  assert.deepEqual(readContactValues(f), valid);
});
test("rejects invalid selections and accepts guidance", () => {
  assert.ok(validateContact({ ...valid, budgetRange: "under5k" }));
  assert.ok(validateContact({ ...valid, projectType: "__proto__" }));
  assert.equal(
    validateContact({
      ...valid,
      budgetRange: "unsure",
      timeline: "flexible",
      projectType: "other",
    }),
    undefined,
  );
});
test("timeline is optional but must be a listed value when given", () => {
  assert.equal(validateContact({ ...valid, timeline: "" }), undefined);
  assert.ok(validateContact({ ...valid, timeline: "yesterday" }));
});
test("validates contact information and website URLs", () => {
  assert.ok(validateContact({ ...valid, email: "invalid" }));
  assert.ok(
    validateContact({ ...valid, contactPreference: "call", phone: "" }),
  );
  assert.ok(validateContact({ ...valid, currentUrl: "javascript:alert(1)" }));
  assert.equal(
    validateContact({ ...valid, currentUrl: "example.com" }),
    undefined,
  );
});
test("provider failures do not report success; accepted payload keeps budget and package", async () => {
  const original = globalThis.fetch;
  const key = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "re_local_test_only";
  try {
    globalThis.fetch = async () =>
      new Response(
        JSON.stringify({ message: "Rejected", name: "validation_error" }),
        { status: 422, headers: { "Content-Type": "application/json" } },
      );
    await assert.rejects(
      () => sendContactEmail({ ...valid, ...contactLabels(valid) }),
      /not accepted/,
    );
    let sent;
    globalThis.fetch = async (_url, options) => {
      sent = JSON.parse(options.body);
      return new Response(JSON.stringify({ id: "local-test-id" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    };
    await sendContactEmail({ ...valid, ...contactLabels(valid) });
    assert.match(sent.text, /Package: TC Growth/);
    assert.match(sent.text, /Budget: \$1,500/);
    assert.match(sent.html, /TC Growth/);
    assert.equal(sent.reply_to, valid.email);
  } finally {
    globalThis.fetch = original;
    if (key === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = key;
  }
});
