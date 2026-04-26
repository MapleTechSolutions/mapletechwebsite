# Phase 5: ForTrades — Contractor Redesign - Context

**Gathered:** 2026-04-26
**Status:** Ready for planning

<domain>
## Phase Boundary

Full rebuild of `src/pages/ForTrades.jsx` using stonesystems.io as the approved reference site.

The current page (Phase 4 output) is the starting point for deletion — this is a from-scratch rebuild, not a patch. No routing changes. No new npm dependencies. The output is a single-file page component that speaks directly to Saskatchewan contractors (roofers, plumbers, HVAC, electricians, handymen) and converts them to a "Book a free call" action.

**The 6 features Maple Tech wants to showcase on this page (user-confirmed):**
1. Functional Website
2. Missed Call Text Back
3. All In One Inbox
4. Local SEO
5. Automated SMS Lead Follow-Up
6. 5-Star Magic Review Funnel

</domain>

<decisions>
## Implementation Decisions

### Reference Site
- **D-01:** `stonesystems.io` is the approved reference. The entire page structure, conversion architecture, copy tone, and visual rhythm are modeled on it — adapted for Maple Tech's brand (not copied).

---

### Visual Identity

- **D-02: Theme — Light base with dark accent sections.** Stone Systems uses: white/light-gray for feature sections, dark navy for hero + closing CTA sections. This is a full departure from the current all-dark-slate page. The pattern: dark hero → light testimonials → light feature sections → dark "why us" → light FAQ → dark final CTA.

- **D-03: Color.** Keep Maple Tech's orange-400 (`#fb923c`) as the primary accent — it maps directly to Stone Systems' amber `#E8A743`. Orange CTAs on both dark and white backgrounds. No purple, no teal on this page.

- **D-04: Typography.** Large, bold, heavyweight headings (font-black, text-4xl to text-6xl). Body text on white bg in slate-700. Headlines on dark sections in white. The visual weight should feel like a trade truck wrap — heavy, confident, not techy.

- **D-05: Background rhythm.** Alternate light/dark sections for visual contrast and natural scroll momentum:
  ```
  Hero          → dark (slate-900)
  Trust strip   → dark (slate-900, border-b)
  Testimonials  → light (slate-50 / white)
  Features      → alternating white / slate-50 (one section each)
  How It Works  → dark (slate-900)
  Why Us        → dark (slate-800)
  FAQ           → light (white)
  Final CTA     → dark (slate-900)
  ```

---

### Page Structure (section order)

Stone Systems' section order is the architecture. Adapted for Maple Tech:

1. **Hero** — dark, full-width, blunt headline, sub-copy, orange CTA, trust badges (Google/Facebook ratings or "Saskatchewan-based" trust signals)
2. **Stats strip** — 3 stats in dark bar (keep from Phase 4: `< 60 sec` / `2 weeks` / `0 training`)
3. **Testimonials wall** — light bg, 3-column grid of text testimonials (no video — text + name + trade type)
4. **Feature showcase** — 6 features, each as its own section with alternating layout (graphic left / text right, then text left / graphic right). Each section: animated graphic + bold feature name + 4 bullet points + inline CTA link.
5. **Trades we serve** — grid of trade types Maple Tech works with (visual confirmation of relevance)
6. **How It Works** — dark bg, 3-step process with exact times: "20-min call" / "7–10 business days" / "Launch walkthrough"
7. **Why Maple Tech** — dark bg, 6-card grid (Simple / Affordable / No Lock-In / No BS / Saskatchewan-based / We Answer)
8. **FAQ** — light bg, accordion, 4–5 contractor objection questions
9. **Final CTA** — dark bg, "Ready to stop losing jobs to voicemail?" + orange button

- **D-06:** Each feature section follows the same repeating visual pattern (Stone Systems principle): graphic side | headline + 4 bullets | "Learn more" or inline CTA. The pattern trains the eye and reduces cognitive load.

---

### Copy Tone

- **D-07: Anti-agency honesty register.** Stone Systems' biggest conversion driver is radical transparency ("No agency has the miracle solution"). Maple Tech's equivalent: lean into being local, not a faceless agency, and honest about what automation does and doesn't do. Copy voice: direct, conversational, contractor-friendly. No jargon. Contractions everywhere. Short sentences.

- **D-08: Hero headline.** Keep the Phase 4 hero headline as the starting point — "You're losing jobs you don't even know about" tested well and survives into this redesign. Sub-copy gets rewritten to be shorter and more direct.

- **D-09: Feature copy tone.** Match Stone Systems' playful-but-direct style for each feature. Examples:
  - Missed Call Text Back: "Everyone misses calls, but not everyone texts back. Be the one who does."
  - 5-Star Review Funnel: "You can't make everyone happy, but the system sure can."
  - All In One Inbox: "Leads from 6 different places — one screen. No missed DMs, no forgotten texts."
  - SMS Follow-Up: "Most contractors follow up once. Their leads wait 3 days. Yours get a text in 10 minutes."

- **D-10: Process section copy.** Use EXACT times like Stone Systems: "20-min call (it's actually a sales call, we just didn't want to scare you)" / "7–10 business days to build" / "30-min walkthrough — you really only need to know two things." The specificity is the trust signal.

- **D-11: "Why Us" section.** Self-aware headline: something like "Why we're different... (you've heard that before, right?)" — mirrors Stone's "totally unique... just like everyone else, right?" The 6 value props map directly:
  - Simple To Use (no tech skills needed)
  - Affordable (designed to keep you, not lock you in)
  - No Lock-In (cancel anytime, no contracts)
  - No BS (we tell you what we'll build and we build it)
  - Saskatchewan-Based (you're not a ticket number to us)
  - We Answer (call us when you need us)

---

### Feature Sections (6 features, individual sections)

- **D-12:** Each of the 6 features gets its own dedicated section — not a card grid, not a list. A full-width section with graphic + bullets. This is the Stone Systems feature showcase pattern.

- **D-13: Feature graphics.** Use our existing animated section components where they fit (DigitalVoiceWave for Missed Call / PulseCallGraphic / LoopGraphic, etc.). For features without an existing graphic, build a simple CSS/SVG diagram inline. No new npm dependencies. No placeholder boxes.

- **D-14: Feature order** (optimized for contractor pain-point priority):
  1. Missed Call Text Back (highest pain — they feel this daily)
  2. Automated SMS Lead Follow-Up (closes the loop on #1)
  3. 5-Star Magic Review Funnel (second most felt pain — reviews anxiety)
  4. All In One Inbox (efficiency unlock — appeals after they trust the first 3)
  5. Functional Website (credibility/foundation — they may already have one)
  6. Local SEO (long-game — positioned last with honest "this takes time" framing)

- **D-15: Feature bullet format.** 4 bullets per feature, each 1–2 sentences. First bullet = outcome (what it does for them). Second = how it works (briefly). Third = the thing that would have embarrassed them without it. Fourth = the quiet win (24/7 / you own it / no monthly software bill). Gold/orange check icon prefix.

---

### Social Proof

- **D-16: Testimonials.** No video testimonials available. Use text testimonials with: first name + trade type + location (e.g., "— Mike, HVAC | Regina"). 3-column grid on light bg. Include at least one that voices the "I was skeptical" objection (Stone Systems' single strongest trust element).

- **D-17: Stats strip.** Keep the Phase 4 stats bar: `< 60 sec` text-back / `2 weeks` go-live / `0 training needed`. These survive because they're specific and directionally true.

- **D-18: Partner/tool logos.** Optional trust strip: show logos of the tools that power the system (Twilio, Google My Business, GoHighLevel or equivalent). No logo = no section — only include if we have real partner logos to show.

---

### How It Works (Process)

- **D-19:** 3-step process with parenthetical time estimates. Stone Systems' exact pattern — borrow it directly:
  - Step 1: "Free 20-min call" — "(It's actually a sales call, we just didn't want to scare you. We'll hear about your business, show you the system live, and tell you exactly what we'd build.)"
  - Step 2: "We build your system" — "(7–10 business days. You fill out one simple form. We do the rest.)"
  - Step 3: "You're live" — "(30-min walkthrough. You'll need to know two things: how to check your inbox, and how to request a review. That's it.)"

---

### FAQ

- **D-20: FAQ section is required** — Stone Systems' analysis shows this is a high-conversion element. 4–5 questions:
  1. "When will I start seeing results?" — set realistic expectations, emphasize commitment
  2. "Why do I need this if word of mouth is working?" — ROI framing (2 extra jobs/month pays it off)
  3. "Is there a long-term contract?" — No. Cancel anytime.
  4. "What happens if I miss a call and the system texts them — is it weird?" — reassure on tone/customization
  5. "What if I'm not tech-savvy?" — "You press two buttons. We set everything else up."

- **D-21: FAQ visual treatment.** Accordion on light/white bg. Orange left-border or orange expand icon. Clean, readable. Not a wall of text.

---

### CTAs

- **D-22: CTA placement** — Stone Systems places 7+ CTAs. We match this: header (sticky), hero, after testimonials, after each feature section (inline link, not a full button), after How It Works, after Why Us, and the final CTA section. All link to `/why-us#contact`.

- **D-23: CTA copy variation.** Not all "Book a free 20-min call" — vary: "Book a free 20-min call" / "See how it works — no pressure" / "Let's talk — 20 minutes" / "Stop losing jobs to voicemail →".

- **D-24: Final CTA section.** Mirrors Stone Systems' last CTA: split copy (you can learn to do it yourself OR let us do it) + single orange button. Headline: "Ready to stop losing jobs to your voicemail?" This existed in Phase 4 and stays.

---

### Animations & Interactions

- **D-25:** All animation uses existing `fadeInUp`, `scaleIn` from SharedComponents — no new Framer Motion variants.
- **D-26:** `whileInView` with `viewport={{ once: true, margin: "-80px" }}` on all sections.
- **D-27:** `useLiteMotion` hook for reduced-motion respect (already in SharedComponents).
- **D-28:** Feature section graphics animate on scroll-into-view. No auto-playing loops that never stop — respect motion preference.

---

### Things NOT in scope

- No pricing section (Maple Tech doesn't list prices)
- No competitor naming (keep it generic — "generic booking software" not "GoHighLevel")
- No new npm packages
- No inline styles — Tailwind only
- No images required (pure CSS/SVG/Lucide icons + existing animated components)

### Claude's Discretion

- Exact Tailwind spacing values (py-24 vs py-20 per section)
- FAQ accordion implementation (CSS details or lightweight toggle with useState)
- Testimonial card design (card border style, padding, shadow depth)
- Whether the trades-we-serve section uses a simple text grid or a visual grid (no photos available)
- Exact feature graphic assignment to each feature (use best-fit existing component or create minimal inline SVG)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Reference Site
- `https://stonesystems.io` — Approved reference. Full section structure, tone, conversion architecture analyzed via Firecrawl + browser walk-through. Key patterns: anti-agency honesty, feature-per-section showcase, exact process timelines, FAQ objection handling, 7+ CTAs, light/dark alternating sections.

### Codebase
- `src/pages/ForTrades.jsx` — Current page (Phase 4 output). **Delete and rebuild** — do not patch.
- `src/components/shared/SharedComponents.jsx` — Design system barrel: `PremiumButton`, `fadeInUp`, `scaleIn`, `cinematicStagger`, `useLiteMotion`. All UI primitives come from here.
- `src/components/sections/DigitalVoiceWave.jsx` — Candidate graphic for Missed Call / SMS features
- `src/components/sections/PulseCallGraphic.jsx` — Candidate graphic for call-related features
- `src/components/sections/LoopGraphic.jsx` — Candidate graphic for automation/follow-up features
- `src/components/sections/DocBuilderGraphic.jsx` — Candidate graphic for website/inbox features
- `CLAUDE.md` — Project constraints (no inline styles, React Router nav only, SharedComponents for all UI primitives)

### Planning
- `.planning/STATE.md` — Project decisions and architecture constraints
- `.planning/phases/04-niche-page-redesign/04-CONTEXT.md` — Prior phase decisions (visual identity baseline, shared constraints, animation rules)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `PremiumButton` (variant="orange") — Primary CTA, already styled, already imported across pages
- `fadeInUp`, `scaleIn`, `cinematicStagger` — Animation variants for scroll-triggered reveals
- `useLiteMotion` — Respects `prefers-reduced-motion`, must be used on all animated elements
- `DigitalVoiceWave`, `PulseCallGraphic`, `LoopGraphic`, `DocBuilderGraphic`, `ZigZagFeature` — Animated section graphics available as imports

### Established Patterns
- `whileInView` scroll triggers: `viewport={{ once: true, margin: "-80px" }}` — consistent across all pages
- Section structure: `<section className="py-24 bg-X"> <div className="max-w-5xl mx-auto px-6">` — standard wrapper
- All internal navigation: `<Link to="/why-us#contact">` or `navigate()` — never `window.location.href`
- Lucide React for all icons — already installed

### Integration Points
- Route: `/for-trades` already registered in `App.jsx` — no routing change needed
- `react-helmet-async` for `<Helmet>` SEO tags — already on the page, keep it
- All CTAs link to `/why-us#contact` — consistent with site-wide CTA strategy

</code_context>

<specifics>
## Specific Ideas

- **Stone Systems' single strongest trust element** (Chrome analysis): A testimonial that voices "I thought it was a scam" and proves it wrong. If we have a real client who was skeptical, that quote goes first in the testimonials section.
- **The "2-button" process framing** (Stone Systems): The walkthrough call says "you only need to know two things." Maple Tech equivalent: "You'll need to know one thing — how to check your new inbox. We handle everything else."
- **Anti-agency opener** (Stone Systems): Their hero sub-copy validates skepticism before selling. Maple Tech's version: something like "We've heard the stories. Agency promises the moon, charges $3k, delivers 4 leads. That's not us. We show you the system before you spend a dollar."
- **Exact timelines in process** (Stone Systems insight from Chrome): "20-min call / 7–10 days build / 30-min walkthrough." The specificity is the trust signal — vague timelines feel like the agency is hiding something.
- **Feature ordering by pain-point priority** (Chrome analysis): Missed calls is the #1 contractor pain. Lead it. Stone Systems leads with their website product — but for trades, the phone problem is more visceral. Lead with Missed Call Text Back.

</specifics>

<deferred>
## Deferred Ideas

- Video testimonials — not available yet; plan for future when client records some
- Real phone mockup screenshots — would require actual GoHighLevel/tool screenshots; not available, not needed for Phase 5
- A brand mascot/character element (Stone Systems uses this heavily) — could be explored for brand identity work, but not scoped to Phase 5
- Pricing section — explicitly out of scope for Maple Tech
- Press/media section — Maple Tech has no press yet; deferred to when it exists
- Partner logo strip — only add if we have real verified partner logos to show; placeholder logos are worse than no section

</deferred>

---

*Phase: 05-fortrades-contractor-redesign*
*Context gathered: 2026-04-26*
*Reference: stonesystems.io (Firecrawl scrape + Chrome visual analysis)*
