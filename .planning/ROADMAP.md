# Roadmap: Maple Tech Website 2.0

## Overview

The codebase is functional but was built organically — dead code, broken navigation, missing legal pages, and no error handling create compounding risk. This roadmap delivers in three phases: clean and fix the existing code first, add the missing infrastructure and legal pages second, then build the integrations showcase that strengthens the visitor-to-lead conversion path.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Clean & Fix** - Remove dead code, fix navigation bugs, split oversized files, fix the broken image and hook ordering bug
- [x] **Phase 2: Infrastructure & Legal** - Add 404 route, error boundary, code splitting, privacy policy, terms of service, and reduced-motion support
- [x] **Phase 3: Niche Positioning & Site Architecture** - Clean up hero, add "Who We Work With" section, build three niche pages for Trades, Wellness & Aesthetics, and Construction Operations
- [x] **Phase 4: Niche Page Redesign** - Rebuild all three niche pages with visual depth, personality, and conversion-focused design — each page gets its own visual identity, a "how it works" flow, and a stronger CTA section
- [x] **Phase 5: ForTrades Page — Contractor Redesign** - Rebuild /for-trades from scratch with a contractor-specific visual system, custom feature simulations, Saskatchewan trust positioning, and a conversion-focused CTA path

## Phase Details

### Phase 1: Clean & Fix
**Goal**: The codebase is free of dead code, broken SPA navigation, oversized files, and known runtime bugs
**Depends on**: Nothing (first phase)
**Requirements**: CLEAN-01, CLEAN-02, CLEAN-03, CLEAN-04, CLEAN-05, BUG-01, BUG-02
**Success Criteria** (what must be TRUE):
  1. No `window.location.href` navigations exist — all internal links use React Router `navigate()` or `<Link>`, and the back button works correctly throughout the site
  2. `MapleTechPremium.jsx` is gone from the repo — no orphaned 1,617-line file in the bundle
  3. `Automator.jsx` is split into focused section components — no single component file exceeds ~300 lines
  4. The missing hero image no longer causes a broken image placeholder — either the file is present or the reference is removed
  5. The footer copyright year updates automatically — it reads the current year, not a hardcoded value
**Plans**: 4 plans

Plans:
- [ ] 01-01-PLAN.md — Delete MapleTechPremium.jsx + dynamic footer copyright
- [ ] 01-02-PLAN.md — Extract ContactForm to ContactFormSection.jsx (prerequisite for Contact.jsx deletion)
- [ ] 01-03-PLAN.md — Delete Contact.jsx, remove /contact route, fix all navigation bugs, gradient hero, hash scroll
- [ ] 01-04-PLAN.md — Split Automator.jsx into 7 extracted section components

### Phase 2: Site Quality — Infrastructure, SEO, Design & Copy
**Goal**: The site is production-ready: errors handled gracefully, legal pages exist, Google can index it correctly, the codebase has no dead code or fragile patterns, accessibility passes basic checks, design is consistent, and copy is professional
**Depends on**: Phase 1
**Requirements**: INFRA-01, INFRA-02, INFRA-03, LEGAL-01, LEGAL-02, PERF-01, SEO-01, SEO-02, SEO-03, A11Y-01, A11Y-02, DESIGN-01, DESIGN-02, CODE-01, CODE-02, COPY-01
**Success Criteria** (what must be TRUE):
  1. Navigating to `/xyz` renders a branded 404 page with a "Back to Home" link — no blank screen
  2. An unhandled render error shows a branded fallback UI — app does not crash entirely
  3. `/privacy` and `/terms` pages exist with real content — footer links no longer point to `#`
  4. Visitors with reduced-motion OS setting see static backgrounds — no looping blob or grid animations
  5. Every page has a unique `<title>` and meta description visible in the browser tab and in Google search results
  6. `public/sitemap.xml`, `public/robots.txt`, and `public/_redirects` exist — Google can crawl and Netlify routes correctly
  7. `index.html` meta description accurately describes what Maple Tech does (no "Replace 12+ subscriptions" copy)
  8. `<nav>` has `aria-label`, mobile menu button has `aria-label` + `aria-expanded`, page content is wrapped in `<main>`
  9. Dead code (`HeroMapleLeafCluster`) is removed, scroll listener is passive, WhyUs hash scroll uses `useLocation().hash`
  10. Home.jsx "Why Maple Tech?" card uses site palette (no purple/pink), AI Employee section has no gimmick lock animation
  11. Hero subtext and AI Employee section copy is specific, professional, and benefit-driven
**Plans**: 5 plans across 2 waves
**UI hint**: yes

### Phase 3: Niche Positioning & Site Architecture
**Goal**: The site speaks directly to Maple Tech's three target audiences — each visitor self-identifies, clicks into their niche, and follows a clear path to "Why Us" and contact
**Depends on**: Phase 2
**Requirements**: FEAT-01, COPY-02
**Success Criteria** (what must be TRUE):
  1. Home page hero is clean — animated titles remain, excess text/pills removed, right-side card has no generic "Layer X" labels
  2. A "Who We Work With" section on the home page shows 3 niche cards linking to dedicated pages
  3. `/for-trades` exists: speaks directly to contractors/trades in plain language, outcome-first, no jargon
  4. `/for-clinics` exists: speaks to wellness & aesthetics businesses, positions custom CRM + client experience over generic software
  5. `/for-construction` exists: minimal page showing Maple Tech as integration hub (ServiceTitan, Vista, Sage 300), single CTA to contact
  6. All three niche pages funnel to Why Us page and the contact form
  7. App.jsx routes registered for all three new pages
**Plans**: 5 plans
**UI hint**: yes

### Phase 5: ForTrades Page — Contractor Redesign
**Goal**: Rebuild /for-trades from scratch with a new visual identity based on a reference site the client approved — every section speaks to the daily painpoints of individual contractors, with conversion-focused layout and design
**Depends on**: Phase 4
**Requirements**: FEAT-02
**Success Criteria** (what must be TRUE):
  1. /for-trades renders a fully redesigned page matching the approved reference site direction
  2. Every section directly addresses a real contractor painpoint (missed calls, chasing quotes, slow follow-up)
  3. Page funnels to Why Us and contact form
  4. No inline styles — Tailwind only
  5. npm run build exits 0 with no console errors
**Plans**: 2 plans + 1 approved creative refinement summary

Plans:
- [x] 05-01-PLAN.md — Delete old ForTrades.jsx + rebuild page skeleton (Hero, Stats Strip, Testimonials, Trades We Serve, How It Works, Why Maple Tech, FAQ, Final CTA)
- [x] 05-02-PLAN.md — Build 6 feature showcase sections with animated graphics (extracted to ForTradesFeatures.jsx)
- [x] 05-03-GEMINI-REFINEMENT-SUMMARY.md — Final approved creative pass: custom Google search simulator, phone/laptop mockups, Saskatchewan trust row, local trade imagery, stability guardrails

### Phase 6: ForClinics Page — Wellness & Aesthetics Redesign
**Goal**: Rebuild /for-clinics from scratch with a new visual identity — speaks directly to wellness and aesthetics clinic owners, positions custom CRM and client experience as the differentiator
**Depends on**: Phase 5
**Requirements**: FEAT-03
**Success Criteria** (what must be TRUE):
  1. /for-clinics renders a fully redesigned page matching an approved reference direction
  2. Copy and sections speak to clinic-specific painpoints (rebooking, client experience, branded touchpoints)
  3. Page funnels to Why Us and contact form
  4. No inline styles — Tailwind only
  5. npm run build exits 0 with no console errors
**Plans**: 2 plans

Plans:
- [ ] 06-01-PLAN.md — Delete Phase 4 ForClinics.jsx + rebuild page shell (Hero, Pain/Gaps, CRM grid, Comparison table, Social proof strip, Part 2 pivot intro, How it works, Final CTA) with ForClinicsFeatures stub
- [ ] 06-02-PLAN.md — Build ForClinicsFeatures.jsx with three flywheel sections (Branded App, Rewards & Loyalty, Referral Engine) and inline flywheel SVG

### Phase 7: ForConstruction Page — Construction Operations Redesign
**Goal**: Rebuild /for-construction from scratch — minimal, concept-focused page positioning Maple Tech as the integration hub for construction operations (ServiceTitan, Vista, Sage 300), single CTA to contact
**Depends on**: Phase 6
**Requirements**: FEAT-04
**Success Criteria** (what must be TRUE):
  1. /for-construction renders a redesigned page matching an approved reference direction
  2. Page is minimal by design — shows the integration hub concept without fake feature lists
  3. Single clear CTA to contact
  4. No inline styles — Tailwind only
  5. npm run build exits 0 with no console errors
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Clean & Fix | 4/4 | COMPLETE | 2026-04-18 |
| 2. Infrastructure & Legal | 5/5 | COMPLETE | 2026-04-25 |
| 3. Niche Positioning & Site Architecture | 5/5 | COMPLETE | 2026-04-25 |
| 4. Niche Page Redesign | 3/3 | COMPLETE (overridden by 5/6/7) | 2026-04-26 |
| 5. ForTrades — Contractor Redesign | 2/2 + refinement | COMPLETE | 2026-04-27 |
| 6. ForClinics — Wellness & Aesthetics Redesign | 0/2 | Planned | - |
| 7. ForConstruction — Construction Operations Redesign | 0/TBD | Planned | - |
