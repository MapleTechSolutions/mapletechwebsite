# Phase 5: ForTrades — Contractor Redesign - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-26
**Phase:** 05-fortrades-contractor-redesign
**Areas discussed:** Reference site, feature list, visual direction, conversion architecture

---

## Reference Site

| Option | Description | Selected |
|--------|-------------|----------|
| URL (stonesystems.io) | User shared URL for Firecrawl + Chrome analysis | ✓ |
| Screenshots | Image-based analysis | |
| Not yet | Plan structural decisions without visual direction | |

**User's choice:** stonesystems.io shared via URL
**Notes:** Two-source analysis — Firecrawl scrape (content/branding data) + Claude Chrome visual walk-through (section-by-section conversion analysis + skeptical contractor inner monologue). Combined gives structural + psychological picture.

---

## Feature List (6 confirmed by user)

User explicitly provided the list of high-leverage features to showcase on the page:

1. Functional Website
2. Missed Call Text Back
3. All In One Inbox
4. Local SEO
5. Automated SMS Lead Follow-Up
6. 5-Star Magic Review Funnel

**Notes:** User said "I want to focus more on the things which are high-leveraged to make the contractors more successful." This is a curated list — not everything Stone Systems offers, but the 6 that map to Maple Tech's core services.

---

## Key Conversion Decisions (from reference analysis)

| Decision Area | Stone Systems Pattern | Maple Tech Adaptation | Source |
|---|---|---|---|
| Theme | Light base + dark sections | Same — flip current all-dark to light/dark alternating | Chrome analysis |
| Hero headline | "Cut the bullsh*t" (anti-agency) | Keep Phase 4 headline, add anti-agency sub-copy | Firecrawl |
| Feature structure | One full section per feature | Same — 6 sections, each with graphic + 4 bullets | Chrome analysis |
| Process section | Exact times (20 min / 7-10 days / 25 min) | 20-min call / 7-10 days / 30-min walkthrough | Chrome analysis |
| FAQ section | Accordion, 5 contractor objections | New section required — 4-5 questions | Chrome analysis |
| CTA count | 7+ placements | 7+ placements including inline feature CTAs | Chrome analysis |
| Testimonials | Video wall (prominent, after hero) | Text testimonials, 3-column grid | Firecrawl |
| Feature order | Website → Reviews → Missed Call | Missed Call → SMS → Reviews → Inbox → Website → SEO | Pain-point priority |
| Copy tone | Playful, direct, no jargon | Match register — contractions, short sentences, relatable humor | Chrome analysis |
| "Why Us" section | 6 value props, self-aware headline | Same pattern with Maple Tech props | Chrome analysis |

---

## Claude's Discretion

- Exact Tailwind spacing values per section
- FAQ accordion implementation details
- Testimonial card border/shadow treatment
- Whether trades-we-serve section uses text or visual grid
- Exact feature graphic matching (which animated component goes with which feature)

## Deferred Ideas

- Video testimonials (not available yet)
- Real phone/software mockup screenshots (need actual tool access)
- Brand mascot character (Stone Systems has a yellow mascot — future brand identity work)
- Press/media section (no press yet)
- Partner logo strip (only if real logos available)
- Pricing section (out of scope for Maple Tech)
