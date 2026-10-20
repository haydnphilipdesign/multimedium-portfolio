"use client";
import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "./actions";
import {
  budgetRanges,
  projectTypes,
  timelines,
  contactPreferences,
  type ContactState,
} from "./validation";
import { TurnstileWidget } from "./TurnstileWidget";
export function ContactForm({
  initial,
  siteKey,
}: {
  initial: ContactState;
  siteKey?: string;
}) {
  const [state, action, pending] = useActionState(submitContact, initial);
  const errorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state.status === "error") errorRef.current?.focus();
  }, [state]);
  const v = state.values;
  return (
    <form action={action} className="inquiry-form">
      <div className="form-heading">
        <h2>Project details</h2>
        <p>
          Fields marked * are required. Unsure about scope or budget? Choose
          “Not sure yet” or guidance on budget.
        </p>
      </div>
      {state.error && (
        <div ref={errorRef} tabIndex={-1} role="alert" className="form-error">
          {state.error}
        </div>
      )}
      <fieldset disabled={pending} key={state.attempt}>
        <legend className="sr-only">Project inquiry</legend>
        <input type="hidden" name="formToken" value={state.formToken} />
        <input type="hidden" name="source" value={v.source} />
        <input type="hidden" name="package" value={v.package} />
        <div aria-hidden="true" className="absolute -left-[10000px]">
          <label htmlFor="website">Leave this empty</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        {v.package && (
          <p className="selected-package">
            Interested in: <strong>{v.package}</strong> · We can adjust the
            scope together.
          </p>
        )}
        <div className="form-grid">
          <label htmlFor="name">
            Your name *
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              defaultValue={v.name}
              className="form-control"
            />
          </label>
          <label htmlFor="email">
            Email address *
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={240}
              defaultValue={v.email}
              className="form-control"
            />
          </label>
          <label htmlFor="company">
            Business name
            <input
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={160}
              defaultValue={v.company}
              className="form-control"
            />
          </label>
          <label htmlFor="currentUrl">
            Current website <span>(if you have one)</span>
            <input
              id="currentUrl"
              name="currentUrl"
              inputMode="url"
              placeholder="yourbusiness.com"
              maxLength={1000}
              defaultValue={v.currentUrl}
              className="form-control"
            />
          </label>
          <label htmlFor="projectType">
            What do you need? *
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue={v.projectType}
              className="form-control form-select"
            >
              <option value="">Choose a project type</option>
              {Object.entries(projectTypes).map(([k, l]) => (
                <option key={k} value={k}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="budgetRange">
            Project budget *
            <select
              id="budgetRange"
              name="budgetRange"
              required
              defaultValue={v.budgetRange}
              className="form-control form-select"
            >
              <option value="">Choose a budget range</option>
              {Object.entries(budgetRanges).map(([k, l]) => (
                <option key={k} value={k}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="timeline" className="form-full">
            When are you hoping to launch? <span>(optional)</span>
            <select
              id="timeline"
              name="timeline"
              defaultValue={v.timeline}
              className="form-control form-select"
            >
              <option value="">Choose a timeline</option>
              {Object.entries(timelines).map(([k, l]) => (
                <option key={k} value={k}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="message" className="form-full">
            What does your business do, and what should the website help
            with? *
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={5}
              defaultValue={v.message}
              placeholder="e.g., I’m a TC in Ohio working with about 15 agents. I want a site where agents can see my services and send me files."
              className="form-control form-textarea"
            />
          </label>
        </div>
        <details className="contact-options">
          <summary>
            Contact preferences & referral <span>(optional)</span>
          </summary>
          <div className="form-grid mt-5">
            <label htmlFor="contactPreference">
              Best way to reply
              <select
                id="contactPreference"
                name="contactPreference"
                defaultValue={v.contactPreference || "email"}
                className="form-control form-select"
              >
                {Object.entries(contactPreferences).map(([k, l]) => (
                  <option key={k} value={k}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="phone">
              Phone number
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                defaultValue={v.phone}
                className="form-control"
              />
            </label>
            <label htmlFor="referral" className="form-full">
              How did you hear about me?
              <input
                id="referral"
                name="referral"
                maxLength={240}
                defaultValue={v.referral}
                className="form-control"
              />
            </label>
          </div>
        </details>
        {siteKey && (
          <TurnstileWidget siteKey={siteKey} resetKey={state.attempt} />
        )}
        <button type="submit" className="btn-primary mt-6" disabled={pending}>
          {pending ? "Sending your inquiry…" : "Send project inquiry"}
        </button>
        <p aria-live="polite" className="form-note">
          {pending
            ? "Please wait while your message is sent."
            : "Your details are used to respond to your inquiry. No newsletter signup."}
        </p>
      </fieldset>
    </form>
  );
}
