// Keys for the three packages match the ids in content/packages.ts.
export const projectTypes: Record<string, string> = {
  "one-page": "One-page site",
  full: "Full website",
  custom: "Custom build",
  retainer: "Hosting or updates to an existing site",
  "referral-partnership": "Referral partnership",
  other: "Not sure yet. Help me decide.",
};
// Older links (flyer PDF, social posts) use these values.
export const legacyProjectTypes: Record<string, string> = {
  landing: "one-page",
  website: "full",
};
export const budgetRanges: Record<string, string> = {
  under1k: "$750–$1,499 · focused one-page project",
  "1to3k": "$1,500–$2,999",
  "3to5k": "$3,000–$4,999",
  "5to10k": "$5,000–$9,999",
  "10kplus": "$10,000+",
  unsure: "I’d like guidance on budget",
};
export const timelines: Record<string, string> = {
  asap: "As soon as practical",
  "1to2mo": "In the next 1–2 months",
  "3to6mo": "In 3–6 months",
  flexible: "Flexible / exploring",
};
export const contactPreferences: Record<string, string> = {
  email: "Email",
  call: "Phone call",
  sms: "Text message",
};
export type ContactValues = {
  name: string;
  email: string;
  company: string;
  message: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  currentUrl: string;
  phone: string;
  contactPreference: string;
  referral: string;
  source: string;
  package: string;
};
export const emptyContactValues: ContactValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  projectType: "",
  budgetRange: "",
  timeline: "",
  currentUrl: "",
  phone: "",
  contactPreference: "email",
  referral: "",
  source: "",
  package: "",
};
export type ContactState = {
  status: "idle" | "error";
  error?: string;
  values: ContactValues;
  formToken: string;
  attempt: number;
};
export function readContactValues(data: FormData): ContactValues {
  const result = { ...emptyContactValues };
  for (const k of Object.keys(result) as (keyof ContactValues)[]) {
    const v = data.get(k);
    result[k] =
      typeof v === "string"
        ? v
            .trim()
            .slice(0, k === "message" ? 5001 : k === "currentUrl" ? 1001 : 240)
        : "";
  }
  return result;
}
export function validateContact(v: ContactValues): string | undefined {
  if (!v.name || !v.email || !v.message)
    return "Please enter your name, email, and a short description of the project.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    return "Please enter a valid email address.";
  if (
    !Object.hasOwn(projectTypes, v.projectType) ||
    !Object.hasOwn(budgetRanges, v.budgetRange) ||
    (v.timeline !== "" && !Object.hasOwn(timelines, v.timeline))
  )
    return "Please choose a project type and budget. It’s fine to choose “Not sure yet” or guidance on budget.";
  if (v.message.length > 5000)
    return "Please keep your message under 5,000 characters.";
  if (v.currentUrl.length > 1000)
    return "Please use a shorter website address.";
  if (v.currentUrl) {
    try {
      const u = new URL(
        v.currentUrl.includes("://") ? v.currentUrl : "https://" + v.currentUrl,
      );
      if (
        !["http:", "https:"].includes(u.protocol) ||
        !u.hostname.includes(".")
      )
        return "Please enter a valid current website address.";
    } catch {
      return "Please enter a valid current website address.";
    }
  }
  if (
    (v.contactPreference === "call" || v.contactPreference === "sms") &&
    !v.phone
  )
    return "Please add a phone number for a call or text, or choose email.";
  if (
    v.phone &&
    (v.phone.replace(/\D/g, "").length < 10 ||
      v.phone.replace(/\D/g, "").length > 15)
  )
    return "Please enter a valid phone number.";
  return undefined;
}
export function contactLabels(v: ContactValues) {
  return {
    projectType: projectTypes[v.projectType],
    budgetRange: budgetRanges[v.budgetRange],
    timeline: timelines[v.timeline],
    contactPreference: contactPreferences[v.contactPreference] || "Email",
  };
}
