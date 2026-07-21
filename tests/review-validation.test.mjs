import assert from "node:assert/strict";
import test from "node:test";

import { validateReviewSubmission } from "../app/review/validation.ts";

test("normalizes whitespace and preserves public permission", () => {
  assert.deepEqual(
    validateReviewSubmission({
      name: "  Ada Lovelace  ",
      companyOrRole: "  Analytical Engines  ",
      testimonial: "  A thoughtful and reliable collaborator.  ",
      publicPermission: true,
    }),
    {
      ok: true,
      value: {
        name: "Ada Lovelace",
        companyOrRole: "Analytical Engines",
        testimonial: "A thoughtful and reliable collaborator.",
        publicPermission: true,
      },
    },
  );
});

test("keeps unchecked permission false and omits a blank company", () => {
  assert.deepEqual(
    validateReviewSubmission({
      name: "Grace Hopper",
      companyOrRole: "   ",
      testimonial: "Excellent work.",
      publicPermission: false,
    }),
    {
      ok: true,
      value: {
        name: "Grace Hopper",
        companyOrRole: undefined,
        testimonial: "Excellent work.",
        publicPermission: false,
      },
    },
  );
});

test("rejects a missing name or testimonial", () => {
  assert.deepEqual(
    validateReviewSubmission({
      name: "   ",
      companyOrRole: "Company",
      testimonial: "A testimonial",
      publicPermission: false,
    }),
    { ok: false, error: "missing" },
  );

  assert.deepEqual(
    validateReviewSubmission({
      name: "Client Name",
      companyOrRole: "Company",
      testimonial: "   ",
      publicPermission: false,
    }),
    { ok: false, error: "missing" },
  );

  assert.deepEqual(
    validateReviewSubmission({
      name: "   ",
      companyOrRole: "c".repeat(161),
      testimonial: "A testimonial",
      publicPermission: false,
    }),
    { ok: false, error: "missing" },
  );
});

test("enforces the name, company, and testimonial length limits", () => {
  const exactBoundaryResult = validateReviewSubmission({
    name: "n".repeat(120),
    companyOrRole: "c".repeat(160),
    testimonial: "t".repeat(4000),
    publicPermission: false,
  });

  assert.equal(exactBoundaryResult.ok, true);

  assert.deepEqual(
    validateReviewSubmission({
      name: "n".repeat(121),
      companyOrRole: "Company",
      testimonial: "A testimonial",
      publicPermission: false,
    }),
    { ok: false, error: "name" },
  );

  assert.deepEqual(
    validateReviewSubmission({
      name: "Client Name",
      companyOrRole: "c".repeat(161),
      testimonial: "A testimonial",
      publicPermission: false,
    }),
    { ok: false, error: "company" },
  );

  assert.deepEqual(
    validateReviewSubmission({
      name: "Client Name",
      companyOrRole: "Company",
      testimonial: "t".repeat(4001),
      publicPermission: false,
    }),
    { ok: false, error: "message" },
  );
});
