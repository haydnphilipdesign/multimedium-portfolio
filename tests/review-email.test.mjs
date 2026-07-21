import assert from "node:assert/strict";
import test from "node:test";

import {
  assertReviewEmailDeliverySucceeded,
  buildReviewEmailContent,
} from "../lib/email.ts";

const basePayload = {
  name: "Jane Client",
  companyOrRole: "Acme Realty",
  testimonial: "Haydn made our services much easier to understand.",
  submittedAt: "2026-07-21T16:00:00.000Z",
  meta: {
    ip: "203.0.113.10",
    referer: "https://www.multimedium.dev/review",
    userAgent: "Review test agent",
  },
};

test("builds an approved testimonial email", () => {
  const content = buildReviewEmailContent({
    ...basePayload,
    publicPermission: true,
  });

  assert.equal(content.subject, "New approved testimonial - Jane Client");
  assert.match(content.text, /Approved for public use with name and company/);
  assert.match(content.html, /Approved for public use with name and company/);
});

test("builds a private feedback email", () => {
  const content = buildReviewEmailContent({
    ...basePayload,
    publicPermission: false,
  });

  assert.equal(content.subject, "New private client feedback - Jane Client");
  assert.match(content.text, /Private feedback - do not publish/);
  assert.match(content.html, /Private feedback - do not publish/);
});

test("throws when Resend resolves with a delivery error", () => {
  assert.throws(
    () =>
      assertReviewEmailDeliverySucceeded({
        data: null,
        error: { message: "Resend rejected the request" },
      }),
    /Review email delivery failed: Resend rejected the request/,
  );
});
