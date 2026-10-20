# Case Studies — Method, Client Interview & Drafts

**Status:** Draft · **Last updated:** 2026-10-20
Drafts below use only what is visible on each live site or recorded in the repo. Anything that needs the client or Haydn is marked **[CONFIRM]** or **[ASK CLIENT]**. Nothing marked that way goes live until it's answered.

---

## 1. What a case study is (and isn't)

A case study is a short, specific story that lets a prospect think, *"That's my situation, and he's handled it."* It answers four questions:

1. **Who was the client, and what were they up against?** (in plain terms, ideally in their own words)
2. **What did you build, and why that way?** (2–3 real decisions, not a feature list)
3. **What does it look like?** (annotated screenshots)
4. **What happened, or what does the client say?** (only confirmed results or an approved quote)

It is **not** a list of buzzwords ("conversion-focused, mobile-first, lightweight") or a gallery captioned "Website detail / 01". One honest sentence from the client beats three invented metrics.

**Length:** 400–700 words plus 3–5 screenshots. Prospects skim, so headings and captions should carry the story on their own.

---

## 2. Client interview (send by email or ask on a 20-minute call)

> Hi [Name], I'm putting together a short case study about your website for my portfolio. Could you answer whichever of these you're comfortable with? A sentence or two each is plenty. I'll send you the draft to approve before anything is published.
>
> 1. Before the new site, what wasn't working, or what was missing?
> 2. What made you decide it was time to do something about it?
> 3. Why did you choose to work with me?
> 4. What was the process like? Was anything easier or different than you expected?
> 5. What do agents, clients, or prospects say about the site now?
> 6. Has anything changed since launch? (e.g., more files started through the site, fewer back-and-forth emails, better inquiries, recruiting). Ballpark numbers are welcome **only if you're comfortable sharing them publicly.**
> 7. Which part of the site do you or your clients use most?
> 8. What would you tell another [TC / broker] who's considering working with me?
> 9. May I quote your answers on my website, with your name, title, and business? (Yes / Yes, first name only / No)
> 10. Is there anything on the site you'd prefer I not show (e.g., client-only pages, form details)?

**Afterwards:** send the draft for written approval. Store the approval (email) and note the date in `content/projects.ts` (`caseStudy.approval`).

---

## 3. Page template (for `app/work/[slug]/page.tsx` in Phase 2)

1. **Header:** client name · one-line outcome-free summary of what changed · tags: audience, package, year · "Visit live site ↗"
2. **Snapshot** (definition list): Client · Location · Type of business · What I did · Package · Live site
3. **The starting point:** 2–3 short paragraphs, in the client's words where possible
4. **What I built:** 3–4 annotated screenshots. Each has a heading + 1–2 sentences on *why*.
5. **Decisions worth noting:** 2–3 specific choices and their reasoning
6. **Client quote** (if approved) and/or **confirmed results** (if sourced)
7. **"A project like this"**: the matching package with price + **Start a project** (pre-filled `package` and `source`)
8. **Next case study →**

---

## 4. Drafts

### 4.1 Haven Compass Realty — brokerage · Custom build · 2026

**Slug:** `/work/haven-compass-realty` · **Live:** https://www.havencompassrealty.com · **Approved to feature:** ✅ (2026-10-20)
**Role:** Design, development, and site copy (written with Chelsea). Logo: the client's own.
**Internal (don't publish):** referred by Jennifer Cortes. Billed $1,500 in 2026, before the current packages. This scope (9 pages, package comparison, reviews, client pages) is now a Custom build.

**Title:** Haven Compass Realty
**Summary:** A launch website for a new Connecticut brokerage, built to earn trust from day one with transparent seller packages, real client reviews, and clear paths for buyers and sellers.

**The starting point** [ASK CLIENT to confirm or reword]
Chelsea Daley was launching Haven Compass Realty, a new brokerage in Connecticut. A new brokerage has a specific problem: the agent has a track record, but the brand doesn't. The site had to introduce a new name and make it feel established, explain how Chelsea's services and fees work before anyone picked up the phone, and give buyers and sellers each a clear next step.

**What I built**
- **Three seller packages, priced in plain sight.** Strategic (1.5% + $1,250 deposit), Full-Service (3%), and Concierge (4%), each with a "best for" line and a side-by-side comparison table that shows exactly what's included, enhanced, or not included. Sellers can compare without a sales call. *Caption: "Seller packages with a full comparison table: what's included at each level is visible before the first conversation."*
- **Reviews that carry over Chelsea's track record honestly.** Six Google reviews from her past clients, each labeled with its context (e.g., "Buyer — VA home loan", "Seller — condominium"), the original date, and a link to the original on Google. The brand is new; the proof is real and verifiable. *Caption: "Real reviews, labeled and dated, linked to the originals."*
- **Separate, step-by-step paths for buyers and sellers.** A four-step selling process and a five-step buying process, including first-time, move-up, and relocation situations.
- **A listings page that tells the truth before MLS integration.** Instead of an empty search, it explains that Chelsea searches the full Connecticut market on the buyer's behalf, including coming-soon homes. MLS listings through SmartMLS are the next phase.
- **An earnest money page with a wire-fraud warning**, a practical page for clients under contract that most agent sites don't have.

**Decisions worth noting**
- Fees appear on the site, along with a disclaimer that commissions are negotiable and cover the seller's side only. Transparency is the brand's promise, so the site keeps it.
- No fake "featured listings" while the MLS feed isn't live. A page that admits what's coming beats one that pretends.

**Client quote:** [ASK CLIENT]
**Results:** [ASK CLIENT, only if Chelsea is comfortable sharing]
**Matching package:** Custom build, from $3,000
**Next phase (internal):** IDX via SmartMLS. Add it to the case study once it ships.

---

### 4.2 Structured Closings — TC company · Full website · 2026

**Slug:** `/work/structured-closings` · **Live:** https://www.structuredclosings.com · **Approved to feature:** ✅ (2026-10-20)
**Role:** Design and development. Copy supplied by Structured Closings; logo is the client's own (minor tweaks). [CONFIRM: did Haydn embed/configure the Cognito form, or did the client supply it?]
**Disclosure:** Jennifer Cortes is also a paid referral partner. If her quote is used, add the brief §5.6 line under it.

**Title:** Structured Closings
**Summary:** A website for a growing transaction coordination company that explains every service, including investor and luxury deals, and turns "start a file" into one guided form.

**The starting point** [ASK CLIENT]
Structured Closings coordinates transactions for agents and investors, including creative-finance deals like Subject-To, seller financing, and novations, plus luxury listings. Jennifer needed agents to understand that range quickly, to have one dependable way to send a file, and room to grow the team.

**What I built**
- **A Submit a File page that does the intake work.** Agents choose the service they need and see its price, then enter client details, preferred communication (including Spanish-language service), lockbox information, and upload the contract and agreements, all in one form (Cognito Forms). The deposit policy and SMS consent are built in. *Caption: "One form to start a file: service selection with pricing, client details, and document uploads."*
- **Services organized the way agents shop for them:** listing coordination, transaction coordination, compliance support, creative and investor deal types, and luxury coordination, each with what's included.
- **A careers page** for recruiting as the company grows.
- **A Share Feedback page that asks for permission** to publish a testimonial and how the client's name should appear, so the reviews on the homepage are collected properly.

**Decisions worth noting**
- Pricing for each service lives inside the intake form, at the moment the agent commits, instead of a separate pricing page.
- Testimonial consent is collected with the testimonial, not chased afterward.

**Client quote:** [ASK CLIENT]
**Results:** [ASK CLIENT, e.g., share of new files that arrive through the form]
**Matching package:** Full website, $1,500

---

### 4.3 PA Real Estate Support Services — TC business · Full website · 2024

**Slug:** `/work/pa-real-estate-support` (keep) · **Live:** https://www.poconotc.com · **Relationship:** Haydn's mom's business (disclose)
**Role:** Design and development, including the agent intake form, which creates transactions in Norma

**Title:** PA Real Estate Support Services
**Summary:** A redesign for a Pocono-area transaction coordination business, built around one question agents ask: "How do I send you a file?"

**The starting point**
This is my mom's business. Debbie O'Brien has worked in real estate for more than 30 years and has been a transaction coordinator since 2013, serving agents across the Pocono market. Her old do-it-yourself site didn't make it clear which services were covered or how to start, so requests arrived by email and text and had to be sorted by hand. [CONFIRM wording with Debbie]

**What I built**
- **A clear headline and a single "Start Transaction" action** in the navigation on every page
- **Services broken into scannable groups** so agents can see what's covered before they call
- **An agent intake that goes straight into her workspace.** Agents fill out a start-transaction form whenever a file goes under contract, and the details arrive in Norma, the TC software I build, as a new transaction, ready for Debbie to work. No retyping from emails.
- **Call, email, and form options** on the Work With Me page, with business hours and response expectations

**Why it matters for this portfolio:** it's the closest look at what agents need from a TC's website, from someone who coordinates files every day. [CONFIRM Haydn is comfortable with this framing]
**Client quote:** [ASK Debbie, labeled as "Debbie O'Brien, Owner — PA Real Estate Support Services (my mom)"]
**Results:** none (earlier figures were unsourced and have been removed)
**Matching package:** Full website, $1,500

---

### 4.4 Transaction Authority Group (TAG) — TC infrastructure company · One-page site · 2026

**Client:** run by Jennifer Cortes (also Structured Closings; paid referral partner, so the disclosure rule applies to any quote).

**Slug:** `/work/tag-landing-page` (keep) · **Live:** https://www.transactionauthority.com · **Approval:** recorded in `projects.ts`
**Role:** Landing page strategy, copy, design, development

**Summary:** A single-page site that tells established transaction coordinators what TAG is, who it's for, and who it isn't for, and then asks for one thing: book a discovery call.

**What I built** (from existing project data; captions from `process[]`)
- Credibility-led opening with an immediate call to action
- A "For / Not for" section so unqualified prospects filter themselves out before booking
- Discovery-call expectations, so the call feels low-risk
- A booking section on a page that keeps one action in view throughout

**Client quote:** [ASK CLIENT]
**Matching package:** One-page site, $750

---

### 4.5 Past work (shown without quotes or metrics)

- **Three Penn Properties** (2023): property services site with separate tenant and investor paths and TenantCloud onboarding. No client contact in years, so show it as-is. No new claims.
- **Blissful Existence Healing Acres** (2024, "Other work"): website for an equine-assisted gestalt therapy farm. Shown last to demonstrate range. No quotes or metrics.
