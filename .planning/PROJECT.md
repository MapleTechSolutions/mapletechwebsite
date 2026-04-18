# Maple Tech Website 2.0

## What This Is

The marketing website for Maple Tech (mapletech.solutions) — a business that builds custom software integrations for clients. The site is a React SPA deployed on Netlify, designed to convert visitors into leads by showcasing services and driving contact form submissions. It was built without a structured architecture and is now being stabilized, cleaned up, and extended.

## Core Value

A visitor lands, understands what Maple Tech does, trusts the work, and contacts the business — every other concern is secondary to that conversion path working reliably.

## Requirements

### Validated

- ✓ Multi-page SPA with routes: `/`, `/platform`, `/automator`, `/why-us`, `/contact` — existing
- ✓ Netlify Forms contact form with email notification to sales@mapletech.solutions — existing
- ✓ Animated UI using Framer Motion (scroll-triggered sections, hero parallax, spring transitions) — existing
- ✓ Branded design system: `SharedComponents.jsx` exports `PremiumButton`, `Card3D`, `AnimatedSection`, SVGs, spring configs, animation variants — existing
- ✓ Netlify deployment with SPA redirect, security headers, and asset cache config — existing
- ✓ Responsive layout with Tailwind CSS and Plus Jakarta Sans typography — existing

### Active

- [ ] Remove orphaned `MapleTechPremium.jsx` (1,617 lines of dead code)
- [ ] Replace all `window.location.href` navigations (~8 instances) with React Router `navigate()`
- [ ] Fix missing `prairie-hero.jpeg` image (referenced but absent from `public/`)
- [ ] Fix `useState` ordering bug in component with out-of-order hook declaration
- [ ] Split `Automator.jsx` (1,408 lines) into section components matching the pages/sections pattern
- [ ] Add a 404 route (`*`) in React Router with a proper fallback page
- [ ] Add a React Error Boundary wrapping the app
- [ ] Create Privacy Policy and Terms of Service pages (dead links, PIPEDA concern)
- [ ] Add client integrations showcase section/page to display work built for clients (layout TBD)
- [ ] Fix hardcoded `2025` copyright year in Footer
- [ ] Move inline `<style>` block in `Contact.jsx` to Tailwind classes or `index.css`
- [ ] Add `prefers-reduced-motion` support to global animation loops (22 grid lines + 3 blobs)
- [ ] Add route-level code splitting via `React.lazy()` for large page components

### Out of Scope

- Blog / content section — not planned for this milestone
- Pricing page — not mentioned, defer
- Backend / server-side logic — static site, no backend planned
- Authentication / user accounts — public marketing site, no auth needed
- CMS integration — content is hardcoded, no CMS planned yet

## Context

**Codebase state:** Built organically without a structured architecture. The current pages/sections pattern is the right direction — it just needs to be applied consistently. Key issues already documented in `.planning/codebase/CONCERNS.md`.

**Architecture pattern in use:** `App.jsx` shell → `pages/` (route components) → `components/sections/` (large reusable sections) → `components/shared/SharedComponents.jsx` (design system primitives). This pattern is good and should be enforced going forward.

**Dead code:** `src/components/MapleTechPremium.jsx` is an old monolithic version of the site (~1,617 lines). It is not imported anywhere and should be deleted.

**Navigation bug:** ~8 places use `window.location.href` for SPA navigation, causing full page reloads and breaking the back button. All should use React Router's `navigate()` or `<Link>`.

**Legal gap:** Contact form collects personal data (email, phone, name) but Privacy Policy and Terms links render as dead `#` anchors — PIPEDA concern for Canadian users.

**Integrations showcase:** User wants a section (exact name and layout TBD) to showcase custom integrations built for clients. Should function as social proof to support the contact conversion goal.

## Constraints

- **Tech stack**: React 18 + Vite + Tailwind + Framer Motion — no stack changes planned
- **Deployment**: Netlify — static site only, no server-side runtime
- **No backend**: All features must work client-side or via Netlify services (Forms, etc.)
- **Brand**: Established design system in `SharedComponents.jsx` must be followed — no new design primitives without extending it there first

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Fix & clean before adding features | Orphaned code, broken navigation, and missing pages create compounding risk as more is added | — Pending |
| Keep pages/sections/shared architecture | Already partially in place; enforcing it consistently is lower cost than redesigning | — Pending |
| Static site / no backend | Netlify Forms handles contact; no user data storage needed | ✓ Good |
| Integrations showcase layout TBD | User hasn't decided on format yet — defer layout decisions to the phase where it's built | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-18 after initialization*
