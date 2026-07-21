export type ReviewValidationError = "missing" | "name" | "company" | "message";

export type ReviewSubmissionInput = {
  name: string;
  companyOrRole: string;
  testimonial: string;
  publicPermission: boolean;
};

export type ValidatedReviewSubmission = {
  name: string;
  companyOrRole?: string;
  testimonial: string;
  publicPermission: boolean;
};

export type ReviewValidationResult =
  | { ok: true; value: ValidatedReviewSubmission }
  | { ok: false; error: ReviewValidationError };

const MAX_NAME_LENGTH = 120;
const MAX_COMPANY_LENGTH = 160;
const MAX_TESTIMONIAL_LENGTH = 4_000;

export function validateReviewSubmission(
  input: ReviewSubmissionInput,
): ReviewValidationResult {
  const name = input.name.trim();
  const companyOrRole = input.companyOrRole.trim();
  const testimonial = input.testimonial.trim();

  if (!name || !testimonial) {
    return { ok: false, error: "missing" };
  }

  if (name.length > MAX_NAME_LENGTH) {
    return { ok: false, error: "name" };
  }

  if (companyOrRole.length > MAX_COMPANY_LENGTH) {
    return { ok: false, error: "company" };
  }

  if (testimonial.length > MAX_TESTIMONIAL_LENGTH) {
    return { ok: false, error: "message" };
  }

  return {
    ok: true,
    value: {
      name,
      companyOrRole: companyOrRole || undefined,
      testimonial,
      publicPermission: input.publicPermission,
    },
  };
}
