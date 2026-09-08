"use server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { track } from "@vercel/analytics/server";
import { sendContactEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";
import {
  consumeNonceOnce,
  createContactFormToken,
  getClientIpFromHeaders,
  verifyContactFormToken,
  verifyTurnstileToken,
} from "@/lib/contactAntiSpam";
import {
  readContactValues,
  validateContact,
  contactLabels,
  type ContactState,
} from "./validation";
export async function submitContact(
  previous: ContactState,
  data: FormData,
): Promise<ContactState> {
  const values = readContactValues(data);
  const fail = (error: string): ContactState => ({
    status: "error",
    error,
    values,
    formToken: createContactFormToken() || "",
    attempt: previous.attempt + 1,
  });
  // Bot submissions do not create a conversion event.
  if (data.get("website")) redirect("/contact/thanks");
  const invalid = validateContact(values);
  if (invalid) return fail(invalid);
  const token = verifyContactFormToken(String(data.get("formToken") || ""));
  if (!token.ok)
    return fail(
      "Your form session expired. Your details are saved below; please try again.",
    );
  if (!token.skipped && (token.ageMs < 2500 || token.ageMs > 7200000))
    return fail(
      "Please take a moment to review your details, then submit again.",
    );
  const h = await headers();
  const ip = getClientIpFromHeaders(h) || undefined;
  if (
    ip &&
    !checkRateLimit("contact:ip:" + ip, { limit: 8, windowMs: 3600000 }).allowed
  )
    return fail(
      "Too many attempts. Please try again later or email haydn@multimedium.dev.",
    );
  if (
    !(await verifyTurnstileToken({
      token: String(data.get("cf-turnstile-response") || ""),
      remoteIp: ip,
    }))
  )
    return fail("Please complete the spam check and try again.");
  if (
    !checkRateLimit("contact:email:" + values.email.toLowerCase(), {
      limit: 3,
      windowMs: 3600000,
    }).allowed
  )
    return fail(
      "Too many attempts. Please try again later or email haydn@multimedium.dev.",
    );
  if (!token.skipped && !consumeNonceOnce(token.payload.nonce, 7200000))
    return fail(
      "This form session has already been used. Please try again with the refreshed form.",
    );
  const labels = contactLabels(values);
  try {
    await sendContactEmail({
      ...values,
      ...labels,
      package: values.package || undefined,
      meta: {
        ip,
        userAgent: h.get("user-agent")?.slice(0, 512),
        referer: h.get("referer")?.slice(0, 1024),
      },
    });
  } catch {
    console.error("Contact email delivery failed");
    return fail(
      "Your message couldn’t be sent. Your details are still here. Please retry or email haydn@multimedium.dev.",
    );
  }
  // Send only categorical data; never names, emails, URLs, or message content.
  try {
    await track(
      "contact_submit",
      {
        projectType: values.projectType,
        budgetRange: values.budgetRange,
        timeline: values.timeline,
      },
      { headers: h },
    );
  } catch {
    console.error("Contact conversion tracking unavailable");
  }
  redirect("/contact/thanks");
}
