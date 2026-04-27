# Phase 6: ForClinics — Wellness & Aesthetics Redesign - Context

**Gathered:** 2026-04-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Full rebuild of `src/pages/ForClinics.jsx` for wellness and aesthetics clinic owners (medspas, skin clinics, lash studios, spa/wellness spaces). Delete and rebuild from scratch — same approach as Phase 5. No routing changes. No new npm dependencies.

**Two-part page architecture (user-confirmed):**

- **Part 1 — Custom CRM / Operations System:** Speaks to the daily frustrations of clinic owners with generic software. Positions Maple Tech's custom-built system as the fix. Presentation is compact (card grid). Reference: daysmart.com/salon style of "all-in-one" presentation adapted for Maple Tech's custom-build angle.

- **Part 2 — Client Growth Flywheel:** Introduces the differentiator: a branded client-facing app with loyalty rewards, rebooking, and referral mechanics that creates a compounding growth loop. This is what Maple Tech builds *beyond* the CRM. Full Phase-5-style feature sections with animated graphics. Reference: dermis.app model (branded portal + rewards points + referral engine = full flywheel).

**Framing distinction vs `/platform` page:**
- `/platform` explains HOW Maple Tech builds (tech, integrations, mechanics)
- `/for-clinics` explains WHAT IT MEANS for clinic owners (outcomes, not mechanics)
- No collision — keep all ForClinics copy outcome-first, in clinic language, never in tech language.

</domain>

<decisions>
## Implementation Decisions

### Reference Sites

- **D-01: Part 1 reference — daysmart.com/salon.** Use their "all-in-one software" presentation style as architecture inspiration for Part 1 — adapted for Maple Tech's custom-build angle (not "all-in-one configurable SaaS" but "built exactly for your clinic").
- **D-02: Part 2 reference — dermis.app.** Use as the model for the flywheel/client-app section. Full branded app concept: loyalty rewards points, branded client portal, rebooking mechanics, referral engine. This is the growth engine Maple Tech builds beyond the core CRM.

---

### Page Structure (section order)

1. **Hero** — Teal palette. Clinic-specific headline that names the frustration: generic software makes every clinic look the same. CTA → Book a discovery call.
2. **Pain/Gaps section** — What generic software misses for clinics. (Compact — the existing gaps list concept from Phase 4 is strong, upgrade visually.) Keep it clinic-specific: rebooking, branded experience, intake customization, real reporting.
3. **Part 1: Custom CRM Capabilities** — Compact 2×2 or similar card grid. daysmart.com/salon-style "here's what the system does" section. Key capabilities: custom booking/intake, branded client touchpoints, treatment-specific automations, revenue/retention reporting. Framed as outcomes, not features.
4. **Comparison table** — Generic software vs. Maple Tech (upgrade from Phase 4 output). Keep this — it's a high-resonance section for clinic owners. Do NOT name specific competitors (Vagaro, Mindbody, Jane) — keep it generic ("off-the-shelf booking software").
5. **Part 2: The Flywheel** — Full Phase-5 depth. Multiple dedicated sections:
   - **Flywheel intro** — Explain the concept: most clinics spend on new client acquisition. The flywheel flips it — your existing clients become your growth engine.
   - **Branded client-facing app** — Full-width section with animated graphic. The clinic gets its own app (not a shared platform). Branded to them. Client sees their logo.
   - **Rewards & loyalty points** — Clients earn points for visits, referrals, product purchases. They keep coming back to spend them. Animated graphic showing points accumulating.
   - **Referral engine** — How the flywheel closes: happy loyal clients refer friends → new clients enter the system → they earn rewards → they become loyal → they refer. Visual flywheel diagram.
6. **How the Build Works** — 4-step timeline (keep from Phase 4: Discovery → Intake & Design → Build → Launch). "Most clinics are live in 3–4 weeks."
7. **CTA section** — Split layout. Headline: something around "Ready to build something your clients actually feel?" CTA → /why-us#contact.

- **D-03: Feature showcase format — Hybrid.** Part 1 (CRM capabilities) is compact card grid. Part 2 (flywheel/app) gets full Phase-5 depth — each key mechanic (portal, rewards, referral loop) gets its own dedicated full-width section with animated graphic + headline + bullets.

---

### Visual Identity

- **D-04:** Carry forward Phase 4 teal palette — Maple Tech teal-400/teal-600 as primary accent. Soft teal/warm-white base, premium and airy. High whitespace. No new accent colors required.
- **D-05: Background rhythm.** Similar to Phase 5's alternating light/dark pattern:
  ```
  Hero          → dark (slate-900)
  Pain gaps     → white
  Part 1 CRM    → slate-50
  Comparison    → white
  Part 2 intro  → dark (slate-900) — signals the shift to "something different"
  Flywheel sections → alternating white / slate-50
  How it works  → dark (slate-800 or slate-900)
  CTA           → dark gradient (slate-900 → teal-950)
  ```
- **D-06:** The shift to dark at the Part 2 intro is intentional — it signals to the reader that something new is being introduced (the flywheel), not just more features.

---

### Copy Tone

- **D-07:** Clinic-owner voice — premium but accessible. These are business owners who care about their brand and their client experience. Not jargon-heavy. Contractions are fine. Short sentences.
- **D-08: Outcome-first framing.** Never describe what the system does technically. Always describe what the clinic owner or their client *feels or gains*: "Your clients open your app, not Vagaro's." / "When a client hits 200 points, your system sends them an offer — automatically."
- **D-09: The flywheel framing.** The key copy idea for Part 2: "Most clinics spend money to get new clients. The smart ones turn existing clients into a growth engine." This is the pivot line between Part 1 and Part 2.

---

### Animations & Graphics

- **D-10:** All animation uses existing `fadeInUp`, `scaleIn`, `cinematicStagger` from SharedComponents — no new Framer Motion variants.
- **D-11:** `useLiteMotion` on all animated elements — reduced-motion support mandatory.
- **D-12:** `whileInView` with `viewport={{ once: true, margin: "-80px" }}` on all sections.
- **D-13:** Part 2 feature sections each get a dedicated animated graphic (reuse or adapt existing section components — `LoopGraphic`, `DocBuilderGraphic`, `ZigZagFeature`, `DigitalVoiceWave` are candidates). For the flywheel/referral diagram, build a simple CSS/SVG circular arrow diagram inline. No new npm packages.

---

### Things NOT in scope

- No competitor naming by name (keep comparison generic)
- No new npm packages
- No inline styles — Tailwind only
- No pricing section
- No real app screenshots (dermis.app is a reference/inspiration, not a literal screenshot asset)
- No `/platform` content duplication — keep ForClinics outcome-language only

### Claude's Discretion

- Exact capabilities listed in the Part 1 card grid (derive from daysmart.com/salon scan + current ForClinics gaps list)
- Specific animated graphic assigned to each Part 2 feature section (use best-fit existing component or build minimal inline SVG)
- Exact testimonials copy (write representative clinic-owner testimonials; no real ones available)
- Whether to include a short testimonial or social proof strip between Part 1 and Part 2
- Exact Tailwind spacing values per section
- FAQ section (optional — include if it fits after reviewing daysmart.com/salon structure)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Reference Sites
- `https://www.daysmart.com/salon` — Part 1 reference: "all-in-one" style presentation of clinic operations software. Analyze section structure, copy tone, and how they frame capabilities for salon/clinic owners.
- `https://dermis.app` — Part 2 reference: client-facing app model for aesthetics clinics (branded portal + loyalty rewards + rebooking + referral). Analyze the flywheel concept, feature sections, and visual approach.

### Codebase
- `src/pages/ForClinics.jsx` — Current page (Phase 4 output). **Delete and rebuild** — do not patch.
- `src/pages/ForTrades.jsx` — Phase 5 output. Study the section pattern, alternating light/dark rhythm, and feature-section structure as the implementation model.
- `src/components/sections/ForTradesFeatures.jsx` — Phase 5 feature sections component. Study and adapt pattern for ForClinics Part 2.
- `src/components/shared/SharedComponents.jsx` — Design system: `PremiumButton`, `fadeInUp`, `scaleIn`, `cinematicStagger`, `useLiteMotion`. All UI primitives from here.
- `src/components/sections/LoopGraphic.jsx` — Candidate graphic for automation/loyalty loop
- `src/components/sections/DigitalVoiceWave.jsx` — Candidate graphic for client communication features
- `src/components/sections/DocBuilderGraphic.jsx` — Candidate graphic for branded portal/app features
- `src/components/sections/ZigZagFeature.jsx` — Candidate reusable feature section component
- `CLAUDE.md` — Project constraints (no inline styles, React Router nav, SharedComponents for all UI primitives)

### Planning
- `.planning/phases/05-fortrades-contractor-redesign/05-CONTEXT.md` — Phase 5 decisions (visual rhythm, feature-section pattern, animation rules, CTA placement strategy)
- `.planning/phases/04-niche-page-redesign/04-CONTEXT.md` — Phase 4 ForClinics decisions (teal visual identity baseline, gap list concept, comparison table)
- `.planning/STATE.md` — Project architecture decisions

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `PremiumButton` — Primary CTA, teal variant already styled for ForClinics
- `fadeInUp`, `scaleIn`, `cinematicStagger` — Scroll-triggered animation variants
- `useLiteMotion` — Reduced-motion hook, mandatory on all animated elements
- `LoopGraphic`, `DigitalVoiceWave`, `DocBuilderGraphic`, `ZigZagFeature` — Animated section graphics
- `ForTradesFeatures.jsx` pattern — Model for extracting Part 2 into its own component file

### Established Patterns
- Section wrapper: `<section className="py-24 bg-X"> <div className="max-w-5xl mx-auto px-6">`
- `whileInView` scroll triggers: `viewport={{ once: true, margin: "-80px" }}`
- Internal navigation: `<Link to="/why-us#contact">` — never `window.location.href`
- Lucide React for all icons

### Integration Points
- Route: `/for-clinics` already registered in `App.jsx` — no routing change needed
- `react-helmet-async` Helmet for SEO tags — keep and update title/description
- All CTAs → `/why-us#contact`

</code_context>

<specifics>
## Specific Ideas

- **The pivot line between Part 1 and Part 2:** "Most clinics spend money to get new clients. The smart ones turn existing clients into their growth engine." This sentence is the bridge — Part 1 is about fixing operations, Part 2 is about compounding growth.
- **Flywheel visual concept:** A simple circular arrow diagram showing: Visit → Earn Points → Rebook → Refer a Friend → New Client → Earn Points → (loop). CSS/SVG inline. Teal arrows, numbered steps around the circle.
- **Branded app section framing:** "Your clients download *your* app — not Vagaro's, not Mindbody's. Your logo. Your colors. Your brand in their pocket." This is the emotional hook for clinic owners who care about brand.
- **dermis.app as inspiration, not literal copy:** Use it to understand the category and the visual approach. Maple Tech builds this as a custom implementation for each clinic — not a white-labeled shared platform.

</specifics>

<deferred>
## Deferred Ideas

- Naming competitors by name (Vagaro, Mindbody, Jane) in comparison table — deferred due to tone/legal caution; revisit if user wants more aggressive positioning
- Real clinic testimonials — write representative ones for now; swap for real quotes when available
- Real app screenshots from a client's branded portal — not available yet; pure CSS/illustration-based for now
- Video content / demo walkthrough — future phase
- Pricing or packaging information — explicitly out of scope for Maple Tech

</deferred>

---

*Phase: 06-forclinics-wellness-aesthetics-redesign*
*Context gathered: 2026-04-27*
*References: daysmart.com/salon (Part 1 architecture), dermis.app (Part 2 flywheel/client-app model)*
