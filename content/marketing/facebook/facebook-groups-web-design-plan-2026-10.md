# Facebook Groups: Web Design Test Plan (Oct to Dec 2026)

**Created:** 2026-10-23 · **Replaces:** `facebook-posts-group-playbook-2026-02-09.md` (predates the brief; its links and claims are out of date)
**Follows:** `docs/brand/brief.md` (voice, proof rules), `docs/brand/packages-and-sop.md` (prices)
**Log every post in:** `posting-log.md` (same folder)

---

## 1. The test in one paragraph

Six weeks, at most one web design post per week, each one leading with something useful and saying plainly that I'm the designer. The posts are a small part of it. Most of the value is (a) a profile that tells anyone who clicks my name what I do, (b) helpful replies in the no-promo groups where new TCs ask how to launch, and (c) finding the coaches who run TC training groups, since a referral partner (Jennifer) has been my best source of clients so far. Review on **Monday, Dec 7, 2026**.

**Keep going if** by Dec 7 there's at least one real conversation with someone who fits (a real estate business with a budget of $750 or more). **Stop posting if** there's none: keep the profile and the reply template, and drop the weekly posts.

---

## 2. Rules that protect UtilitySheet

1. **One web design post per week, total**, across all groups. A #BusinessWednesday comment counts as the week's post.
2. **Never in a group that got a UtilitySheet post the same week** (Mon to Sun). Check `posting-log.md` first. If there's a clash, swap with the next week's group or skip the week.
3. **Never mix the two.** No UtilitySheet mention in a web design post, no website mention in a UtilitySheet post, and never both links in one post or comment. If someone in a UtilitySheet thread asks about websites, answer the question and leave it there.
4. **No cold DMs.** Message people only when they ask, or when they reply to a post that offered something by message.
5. **Never post the same text twice.** TC groups share a lot of members, and Facebook treats repeated text as spam.
6. **Approval queues:** count the post in the week you submit it. If it's still pending after 7 days, delete it and log `withdrawn`. Don't resubmit it.
7. **If an admin declines or warns**, mark that group `no posts` in the log and only reply in threads there from then on.
8. **Be around after posting.** Post when you can answer comments for the next couple of hours. A post with replies from the author does better than one left alone.
9. **No em dashes**, plain words, and a disclosure line in every post.

---

## 3. Links

Two kinds of link, because they do different jobs:

- **Value links** (in the first comment of a post): go to the free guide or a case study and carry UTM tags. UTM reports in Vercel Web Analytics need the **Web Analytics Plus** add-on (about $10/month on Pro). Without it you'll still see `facebook.com` under Referrers, but not which group the visit came from. The tags do no harm either way.
- **Contact links** (only in DMs, when someone asks to work together): go to `/contact?source=fb-<group>`. The site already puts `source` in the inquiry email, so this works on any plan.

**Known gap:** if someone lands on the guide from Facebook and then clicks "Start a project", the site sets its own `source` (e.g. `what-every-tc-website-needs`), so the inquiry won't say it came from Facebook. A small first-touch capture would fix that (see the note at the end).

UTM pattern: `utm_source=facebook&utm_medium=group&utm_campaign=fb-groups-2026q4&utm_content=<group-slug>`

| Group | Slug | Value link (first comment) | Contact link (DM only) |
|---|---|---|---|
| Transaction Coordinator Referral Group | `tc-referral-group` | https://www.multimedium.dev/resources/what-every-tc-website-needs?utm_source=facebook&utm_medium=group&utm_campaign=fb-groups-2026q4&utm_content=tc-referral-group | https://www.multimedium.dev/contact?source=fb-tc-referral-group |
| Leaders in Real Estate | `leaders-in-re` | https://www.multimedium.dev/work/haven-compass-realty?utm_source=facebook&utm_medium=group&utm_campaign=fb-groups-2026q4&utm_content=leaders-in-re | https://www.multimedium.dev/contact?source=fb-leaders-in-re |
| Real Estate Virtual TC Job and Social Group | `vtc-job-social` | (no link in the post; notes go in comments or DMs) | https://www.multimedium.dev/contact?source=fb-vtc-job-social |
| Real Estate Agent / Lender Referrals | `agent-lender-referrals` | https://www.multimedium.dev/agents-and-brokerages?utm_source=facebook&utm_medium=group&utm_campaign=fb-groups-2026q4&utm_content=agent-lender-referrals | https://www.multimedium.dev/contact?source=fb-agent-lender-referrals |
| Real Estate Agent Referral Network (#BusinessWednesday) | `re-agent-referral-network` | https://www.multimedium.dev/?utm_source=facebook&utm_medium=group&utm_campaign=fb-groups-2026q4&utm_content=re-agent-referral-network | https://www.multimedium.dev/contact?source=fb-re-agent-referral-network |
| Transactions Coordinators Group | `tcs-group` | (no link in the post) | https://www.multimedium.dev/contact?source=fb-tcs-group |
| No-promo groups (replies only) | `fb-reply` | Only if someone asks for it, by DM: https://www.multimedium.dev/resources/what-every-tc-website-needs?utm_source=facebook&utm_medium=reply&utm_campaign=fb-groups-2026q4 | https://www.multimedium.dev/contact?source=fb-reply |
| Profile | `fb-profile` | Use the clean URL on the profile: https://www.multimedium.dev | https://www.multimedium.dev/contact?source=fb-profile |

---

## 4. Profile copy

People who like a helpful reply click your name. Right now that path should end at multimedium.dev, not a dead end.

**Bio** (Facebook allows 101 characters; this is 92):

> Websites for TCs, agents & brokerages at multimedium.dev. I also build UtilitySheet for TCs.

Shorter alternative (84): `I design and build websites for transaction coordinators and agents. multimedium.dev`

**Intro details**

- Work: **Designer & developer at Multimedium**
- Work: **Founder at UtilitySheet**
- Lives in: Poconos, Pennsylvania
- Contact info, Websites: `https://www.multimedium.dev` and `https://utilitysheet.com` (keep these clean, no tags)

**Featured** (three photos with captions; caption URLs aren't clickable, but they're easy to type)

1. *Photo of you* (`public/haydn.webp` or the new photo when it's ready)
   > Hi, I'm Haydn. I design, write, and build websites for transaction coordinators, agents, and brokerages. My mom has been a TC since 2013, and her business is one of my clients. That's where I learned what agents need from a TC's website. One-page sites from $750, full websites from $1,500. multimedium.dev

2. *Structured Closings homepage or Submit a File page, in a browser frame*
   > Structured Closings, a transaction coordination company. I designed and built the site. Agents start a file from one page: pick the service, see the price, and upload the contract. multimedium.dev/work/structured-closings

3. *Haven Compass Realty homepage, in a browser frame*
   > Haven Compass Realty, a new brokerage in Connecticut. I designed and built the site and wrote it with the founder, Chelsea Daley. Her seller packages and fees are right on the site, with a side-by-side comparison. multimedium.dev/work/haven-compass-realty

Use the same screenshots as the case studies so everything shown is real client work. Both clients are approved to feature (brief §6).

---

## 5. Posts

Each post goes to one group. Post the text as written, then put the value link (if there is one) in the first comment yourself. Replace nothing in brackets without checking it's true.

### P1. Five things agents check on a TC's website
**Group:** Transaction Coordinator Referral Group (8K, needs approval) · **Link:** guide, in first comment

> Before an agent sends a new TC their first file, they usually look the TC up. Here are the five things I'd check first if I were that agent:
>
> 1. What you actually handle. "Transaction coordination" isn't enough. Listing side, contract to close, compliance review, investor deals? Say it the way agents say it.
> 2. How to start a file. One form or one clear step. A form that asks for the contract, the parties, and the key dates saves a lot of back and forth.
> 3. What it costs, or at least how your pricing works. If an agent has to ask, some won't.
> 4. Who you are. Your name, a real photo, and the states or markets you cover. A logo on its own reads like nobody's home.
> 5. That it works on a phone. Agents look you up between showings.
>
> None of this needs a fancy site. One page can cover all five.
>
> Full disclosure: I'm a web designer and I build sites for TCs (my mom has been a TC since 2013, and I built hers). I wrote a longer version with the common mistakes. It's free with no email signup, and the link's in the comments if you want it.

**First comment:** `Here's the longer version: [value link]`

### P2. Free website review for TCs
**Group:** Real Estate Virtual TC Job and Social Group (2.8K) · **Link:** none in the post

> If you're a TC with a website, or a half-finished one, I'll do a free review for the first 5 people who ask this week.
>
> Comment or message me your link and I'll send back three specific notes: what an agent understands in the first few seconds, what's missing, and the one change I'd make first. If you'd rather keep it private, message me and I will.
>
> I won't follow up with a sales pitch. The notes are yours to use, including on a DIY site.
>
> Disclosure: I'm a web designer and I build sites for TCs and agents, so yes, this is partly how people find me.

**Before posting:** change "5" to however many you can actually do well that week. Then keep the promise: notes only, no pitch unless they ask what it would cost.

**Variant for week 6** (Transactions Coordinators Group, after an admin says it's OK). Same offer, different opening so it isn't duplicate text:

> TCs who are setting up or fixing their website: I have time this week to look at 5 sites and send you three honest notes on each. What an agent sees first, what's missing, and what I'd change first. Comment or message me your link.
>
> I build websites for TCs, so I'm biased toward having one. The notes work just as well on a site you build yourself, and there's no pitch attached.

### P3. The earnest money page (for agents)
**Group:** Leaders in Real Estate (28.8K, member links allowed) · **Link:** Haven Compass case study, in first comment

> A page I think every agent's website should have: earnest money instructions.
>
> Your buyers are going to look this up anyway, usually the night before the deposit is due. A short page that covers:
>
> - who holds the deposit
> - how it's usually sent and when it's due
> - a plain warning that you will never email new wiring instructions, and that they should call a number they already know before sending money
>
> gives them something to check against when a fake "updated wiring instructions" email shows up. Have your broker check the wording for your state.
>
> I built one for a new brokerage in Connecticut this year, and it's one of the most practical pages on the site.
>
> Disclosure: I'm a web designer and I work with agents and TCs. Happy to answer questions about what to put on yours, whether or not you hire anyone.

**First comment:** `Here's the site I mentioned, with screenshots: [value link]`

### P4. Introducing myself (agents and lenders)
**Group:** Real Estate Agent / Lender Referrals (41.7K, "introduce your services" allowed, original posts only) · **Link:** agents page, in first comment

> Introducing myself, since this group welcomes it. I'm Haydn. I design, write, and build websites for real estate agents, small brokerages, and transaction coordinators. I'm based in the Poconos, PA and work with clients across the US.
>
> One opinion from doing this work: the best agent sites answer the questions clients are too polite to ask. How do you get paid? What happens after I sign? What do you actually do for a seller?
>
> A Connecticut brokerage I built for this year puts its seller packages and fees right on the site, with a side-by-side comparison, so sellers know what they're getting before the first call.
>
> If you're working on your own site and want a second opinion, comment or message me and I'll tell you the first thing I'd fix. And if you're a lender or TC who gets asked "do you know anyone who does websites?", I'd be glad to be that name.
>
> (I'm the designer, so this is a services post, per the group rules.)

**First comment:** `More about what I build for agents: [value link]`

### P5. #BusinessWednesday comment
**Group:** Real Estate Agent Referral Network (395K) · **Where:** a comment on that week's #BusinessWednesday post only

> Haydn, Multimedium. I design, write, and build websites for transaction coordinators, agents, and small brokerages. One-page sites from $750. If you'd like a second opinion on your current site, reply here and I'll give you one specific fix. [value link]

---

## 6. Reply templates for no-promo groups

For TCs and Virtual Assistants for Real Estate, Elite TC Training's TC group, SOLO TCS UNLEASHED, TC Training for Beginners, and Real Estate Agents Group. **No links, no "DM me".** The goal is a useful answer and a disclosure. People who want more will click your name, which is why the profile matters.

### R1. "I'm launching my TC business, do I need a website?"

> Congrats on launching! For the website, you don't need much at first. One page that says what you handle (listing side, contract to close, compliance), how an agent starts a file with you, how your pricing works, and who you are, with a real photo. That covers most of what an agent checks before sending a first file.
>
> Two things worth doing before the site is even finished: get your own domain with a matching email address (it reads better than a Gmail when you're emailing agents), and set up a simple intake form. Google Forms, Jotform, or Cognito all work.
>
> Full disclosure, I build websites for TCs, so I'm not neutral on this. All of the above works fine on a DIY site too.

### R2. Someone asks for website recommendations

Only where the rules allow answering a direct request. If unsure, use R1 and let them come to you.

> I build websites for TCs, so take this with that in mind. Whoever you go with, ask to see a TC or agent site they've built and check it on your phone. Make sure the price includes the writing, since that's the part most people get stuck on. Happy to share examples of mine if you message me.

When they message, send the matching contact link with `source=fb-reply`.

### Finding partners in these groups

The coaches who run TC training groups are the people most likely to send me clients the way Jennifer does through My TC Academy. Note who they are in the log. Don't pitch in their groups. When you have something to offer (the free templates for their students, or the same referral terms in `packages-and-sop.md` Part C), message them directly and ask.

---

## 7. Schedule

Weeks run Monday to Sunday. Before each post, check `posting-log.md` for a UtilitySheet post in that group the same week.

| Week of | Post | Group | Notes |
|---|---|---|---|
| Oct 26 | P1 | Transaction Coordinator Referral Group | Goes to approval. Consider messaging an admin first to ask if a free checklist post is OK. |
| Nov 2 | P3 | Leaders in Real Estate | Links allowed, no queue. |
| Nov 9 | P2 | Real Estate Virtual TC Job and Social Group | Block out time for the reviews. |
| Nov 16 | P4 | Real Estate Agent / Lender Referrals | Original text only, never a share. |
| Nov 23 | P5 | Real Estate Agent Referral Network | Thanksgiving week; a comment on Wed Nov 25 is enough. |
| Nov 30 | P2 variant | Transactions Coordinators Group | Ask an admin first (the group is for referrals and jobs). Skip if no answer. |
| Dec 7 | Review | | Fill in the review section of the log and decide (section 1). |

Replies (R1, R2) aren't limited by the weekly cap, but keep the UtilitySheet rule in mind: don't reply with a web design disclosure in a thread where you've just posted about UtilitySheet.

---

## Note: closing the attribution gap (optional code change)

To see which group an inquiry came from even when the visitor browses first, the site could store the first `utm_*`/`source` it sees in a short-lived cookie and add it to the contact email as "First touch". It's about four files (`app/contact/ContactForm.tsx`, `app/contact/validation.ts`, `lib/email.ts`, and a small client component in `app/layout.tsx`). Not built yet.
