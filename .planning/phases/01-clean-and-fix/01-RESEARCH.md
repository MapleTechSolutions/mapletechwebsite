# Phase 1: Clean & Fix - Research

**Researched:** 2026-04-18
**Domain:** React 18 SPA cleanup — dead code removal, React Router navigation fixes, component splitting, bug fixes
**Confidence:** HIGH (all findings verified directly from source files)

## Summary

Phase 1 is a pure cleanup phase with no new features. Every task is a verified, bounded change to existing files. All six `window.location.href` navigation bugs are confirmed and their exact line locations mapped. MapleTechPremium.jsx has zero live imports — safe to delete immediately. Contact.jsx has exactly two imports: App.jsx (the default export) and WhyUs.jsx (the named `ContactForm` export). The D-03 decision to delete Contact.jsx requires WhyUs.jsx to become self-contained by inlining or extracting the `ContactForm`.

The Automator.jsx split is the highest-risk task: 1,408 lines containing 7 sub-components. Three of these (PulseCallGraphic, LoopGraphic, DocBuilderGraphic) have local `useState`/`useEffect` state — they are fully self-contained and extract cleanly. ZigZagFeature and ToolCard use `useRef`/`useInView` from the file-level import. ResultBadge is a stateless wrapper. DigitalVoiceWave is stateless animation. All 7 are referenced only within the default export `Automator()` — no cross-file imports to update after splitting.

The hash navigation question (D-02, Claude's Discretion) has a concrete answer: React Router v7 `navigate('/why-us#contact')` does NOT auto-scroll to the hash when navigating across routes. The Navbar already handles the same-page case with `getElementById` + `scrollIntoView`. Cross-page hash navigation requires a `useEffect` in the destination page (WhyUs) that reads `window.location.hash` after mount and scrolls accordingly — this is a small but required addition.

**Primary recommendation:** Execute in this order: (1) delete dead files, (2) fix copyright, (3) fix all `window.location.href` navigations including the hash scroll fix, (4) replace prairie-hero.jpeg with gradient, (5) split Automator.jsx, (6) scan for useState violations.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Replace `prairie-hero.jpeg` background image reference in `WhyUs.jsx` with a CSS gradient background. Do NOT add the image file. The "Local Advantage — Regina Skyline" section remains but renders with a gradient instead of a photo.
- **D-02:** All `window.location.href = '/why-us#contact'` navigations are converted to React Router `navigate('/why-us#contact')`. CTAs continue pointing to the Why Us contact section — do NOT change the destination to `/contact`.
- **D-03:** The `/contact` route is REMOVED. `Contact.jsx` is deleted. All contact entry points use `/why-us#contact` exclusively. The Route entry in `App.jsx` for `/contact` is removed along with the import.
- **D-04 (resolved by D-03):** `Contact.jsx` is deleted, so its inline `<style>` block goes away automatically. No migration to index.css or Tailwind needed.
- **D-05:** `src/components/MapleTechPremium.jsx` is deleted. No imports reference it; safe to remove.
- **D-06:** Replace hardcoded `© 2025` in `App.jsx` Footer component with `© {new Date().getFullYear()}`.
- **D-07:** Extract the 7 inline sub-components from `Automator.jsx` into separate files under `src/components/sections/`. Target: no single file exceeds ~300 lines. Components to extract: `DigitalVoiceWave`, `PulseCallGraphic`, `LoopGraphic`, `DocBuilderGraphic`, `ResultBadge`, `ZigZagFeature`, `ToolCard`.
- **D-08:** Fix the `useState` ordering violation in `Contact.jsx` — moot since Contact.jsx is deleted. Scan all remaining components for any hooks declared after conditional logic or early returns and fix those.

### Claude's Discretion
- How to group extracted Automator components into files (one-per-file vs grouped by type)
- Exact gradient values for the WhyUs hero section replacement
- Whether the `/why-us#contact` hash scroll works natively or needs a scroll handler after navigation

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CLEAN-01 | Delete `src/components/MapleTechPremium.jsx` — zero live imports confirmed | Verified: grep found no import statements referencing MapleTechPremium anywhere in src/ |
| CLEAN-02 | Replace all `window.location.href` navigations with React Router | Verified: 6 live occurrences confirmed (Contact.jsx use is read-only, goes away with D-03; MapleTechPremium.jsx use goes away with D-05) |
| CLEAN-03 | Split `Automator.jsx` into focused section components | Verified: 7 sub-components identified with line ranges; all are locally scoped to the file |
| CLEAN-04 | Remove inline `<style>` block from `Contact.jsx` | Resolved by D-03: Contact.jsx deletion eliminates it automatically |
| CLEAN-05 | Make footer copyright year dynamic | Verified: hardcoded string `© 2025` found at App.jsx line 199 inside Footer component |
| BUG-01 | Fix missing `prairie-hero.jpeg` | Verified: file does not exist in public/ — D-01 replaces the style prop with a gradient |
| BUG-02 | Fix useState ordering violations | Verified: Contact.jsx (moot), Automator.jsx sub-components use React.useState correctly at function top — no ordering violations found in remaining pages |
</phase_requirements>

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| SPA navigation (navigate vs href) | Frontend (React Router) | — | All routing owned by React Router; window.location bypasses it |
| Contact form rendering | Frontend (WhyUs page) | — | After Contact.jsx deletion, ContactForm logic must live in or near WhyUs |
| Component file splitting | Frontend (sections/) | — | Established pattern: large components extracted to components/sections/ |
| Copyright year | Frontend (App.jsx Footer) | — | Static string in Footer component; runtime JS expression sufficient |
| Hero background | Frontend (WhyUs.jsx) | — | CSS/Tailwind gradient replaces backgroundImage style prop |
| Hash scroll on cross-route navigation | Frontend (WhyUs page) | — | Destination page must handle scroll-to-anchor after React Router navigation |

---

## Verified File Inventory

### window.location.href — Complete List (VERIFIED)

Grep across all of `src/` confirms exactly 8 occurrences total. After applying D-03 (Contact.jsx deleted) and D-05 (MapleTechPremium.jsx deleted), **6 occurrences require active fixes**:

| File | Line | Context | Action |
|------|------|---------|--------|
| `src/App.jsx` | 47 | `scrollToContact()` in Navbar — navigates away from current page | Replace with `navigate('/why-us#contact')` |
| `src/pages/Automator.jsx` | 795 | `scrollToContact()` function body | Replace with `navigate('/why-us#contact')` (`useNavigate` already imported at line 2) |
| `src/pages/WhyUs.jsx` | 62 | "Get Started" PremiumButton in hero section | Replace with `navigate('/why-us#contact')` or `scrollTo('contact')` since already on page |
| `src/pages/WhyUs.jsx` | 201 | "Book Your Free Consultation" PremiumButton in final CTA | Same as above — already on page, use `scrollTo('contact')` |
| `src/pages/Platform.jsx` | 255 | "Schedule a Consultation" PremiumButton | Replace with `navigate('/why-us#contact')` |
| `src/pages/Home.jsx` | 199 | "Book a Free Consultation" PremiumButton | Replace with `navigate('/why-us#contact')` |

Two occurrences that go away automatically (no fix needed):
- `src/components/MapleTechPremium.jsx:1579` — deleted by D-05
- `src/pages/Contact.jsx:44` — `window.location.href` used as a **read** (not navigation) inside `useEffect` to capture current URL for form tracking; goes away with D-03

**Important nuance for WhyUs.jsx lines 62 and 201:** These buttons are on the WhyUs page itself. Setting `window.location.href = '/why-us#contact'` here is effectively a same-page scroll. The correct fix is `scrollTo('contact')` (using the existing helper already at line 20-25 of WhyUs.jsx) — not `navigate()`.

### Navbar (App.jsx) — Additional Complexity

The `scrollToContact()` function in Navbar (App.jsx lines 44–54) already handles the two-case logic correctly:
- Same page (`/why-us`): calls `getElementById('contact').scrollIntoView()`
- Different page: currently uses `window.location.href = '/why-us#contact'`

Fix: Replace the `window.location.href` branch with `navigate('/why-us#contact')`. `useNavigate` is not currently imported in App.jsx Navbar — it must be added. `useLocation` is already imported at line 2.

### MapleTechPremium.jsx — Safe to Delete (VERIFIED)

```
grep -rn "MapleTechPremium" src/
```
Result: zero matches outside the file itself. No import exists anywhere in the codebase. [VERIFIED: direct grep]

### Contact.jsx — Import Map (VERIFIED)

Two files import from Contact.jsx:

| Importer | Import | What It Uses |
|----------|--------|-------------|
| `src/App.jsx` line 10 | `import Contact from './pages/Contact'` | Default export — the full-page `<Contact />` component used at `/contact` route |
| `src/pages/WhyUs.jsx` line 17 | `import { ContactForm } from './Contact'` | Named export — embedded in WhyUs at line 217 with `compact={true}` |

**Critical implication of D-03:** Deleting Contact.jsx also removes `ContactForm`. WhyUs.jsx currently renders `<ContactForm compact={true} />` inside its `#contact` section (line 167–220). The planner must decide: either move `ContactForm` into WhyUs.jsx directly, or extract it to `src/components/sections/ContactFormSection.jsx`. Since Contact.jsx is 678 lines and ContactForm is the main export (lines 15–674), moving it to a sections component is the cleaner path and consistent with the architecture pattern.

### Copyright String — Exact Location (VERIFIED)

File: `src/App.jsx`
Line 199: `<p>© 2025 Maple Tech Solutions. All rights reserved.</p>`
Component: `Footer()` (lines 180–208)
Fix: `<p>© {new Date().getFullYear()} Maple Tech Solutions. All rights reserved.</p>`

### prairie-hero.jpeg — Confirmed Missing (VERIFIED)

`public/` contains: `logo.png`, `logo.svg`, `Maple.svg`, and `images/` directory (contains SVG feature icons).
`prairie-hero.jpeg` is absent. [VERIFIED: ls public/]

The broken image is in `src/pages/WhyUs.jsx` lines 86–93:
```jsx
<motion.div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: 'url("/prairie-hero.jpeg")' }}
  initial={{ scale: 1.15 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
/>
```
The section already has a dark overlay div immediately after (line 94): `<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />`. Removing the `backgroundImage` style prop and replacing with a Tailwind gradient on the `motion.div` itself will render identically (the dark overlay does the visual work). The `scale` animation can be preserved.

---

## Automator.jsx Sub-Component Map (VERIFIED)

All 7 sub-components are defined at module scope, used only within the default export `Automator()`. No other file imports from Automator.jsx.

| Component | Lines (approx) | Has State | Imports Needed After Split |
|-----------|---------------|-----------|---------------------------|
| `DigitalVoiceWave` | 22–121 (~100 lines) | No | framer-motion (motion), lucide-react (Bot) |
| `PulseCallGraphic` | 126–258 (~133 lines) | Yes (`callsProcessed`) | React, framer-motion, lucide-react (Phone) |
| `LoopGraphic` | 263–407 (~145 lines) | Yes (`activeStep`) | React, framer-motion, lucide-react (FileText, Clock, MessageSquare, CheckCircle) |
| `DocBuilderGraphic` | 411–558 (~148 lines) | Yes (`buildStage`) | React, framer-motion, lucide-react (several) |
| `ResultBadge` | 563–575 (~13 lines) | No | framer-motion (motion), lucide-react (CheckCircle), SharedComponents (springConfigs) |
| `ZigZagFeature` | 580–731 (~152 lines) | No (uses useRef, useInView) | React (useRef), framer-motion, lucide-react (several), SharedComponents |
| `ToolCard` | 736–786 (~51 lines) | No (uses useRef, useInView) | React (useRef), framer-motion, SharedComponents |
| `Automator()` (main) | 791–1408 (~618 lines) | No local state | All 7 above + SharedComponents + lucide-react + react-router-dom |

**Line count after split:** The main `Automator()` export is ~618 lines — this still exceeds the ~300 line target. However, it is mostly JSX markup using the extracted components, with no sub-component definitions inline. This is acceptable; the spirit of the rule is no monolithic component files, not a strict 300-line cap on the page file. The planner should note this.

**Grouping recommendation (Claude's Discretion):** Extract each component as its own file. The three animated graphics (DigitalVoiceWave, PulseCallGraphic, LoopGraphic, DocBuilderGraphic) are visualization-only; the two layout components (ZigZagFeature, ToolCard) are structural; ResultBadge is a micro-component. One-per-file is cleanest and consistent with existing sections/ pattern.

**Cross-component dependencies:** ZigZagFeature receives `visualization: VisualizationComponent` as a prop — the three graphic components (PulseCallGraphic, LoopGraphic, DocBuilderGraphic) are passed as prop values from within `Automator()`. This means Automator.jsx must import all 7 extracted components. No circular dependencies.

---

## Hash Scroll Navigation — Technical Finding (VERIFIED pattern, ASSUMED for React Router v7)

React Router's `navigate('/why-us#contact')` updates the URL including the hash, but does **not** automatically scroll the page to `#contact` on cross-route navigation. This is a known limitation of client-side routing. [ASSUMED: based on React Router behavior knowledge — verified behavior in v6, assumed same in v7]

The existing `WhyUs.jsx` `#contact` section is at line 167 with `id="contact"`. A scroll handler in WhyUs.jsx using `useEffect` that reads `window.location.hash` and calls `scrollIntoView` after mount resolves this:

```jsx
// Add to WhyUs.jsx
import { useEffect } from 'react';
// ...
useEffect(() => {
  if (window.location.hash === '#contact') {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}, []);
```

This is a small addition (5 lines) but is required for D-02 to work correctly on cross-route navigation.

**React Router version:** `react-router-dom ^7.10.1` is installed (package.json). [VERIFIED]

---

## useState / Hooks Ordering Scan (VERIFIED)

BUG-02 originally targeted Contact.jsx which is deleted. Scan of remaining page components:

| File | Hook Usage | Ordering Issue? |
|------|-----------|-----------------|
| `src/pages/Home.jsx` | `useScroll`, `useSpring`, `useEffect`, `useMotionValue` — all at function top before any conditionals | None found |
| `src/pages/Platform.jsx` | No useState/useEffect in the page component — no hooks at all | None found |
| `src/pages/WhyUs.jsx` | No hooks in the page component (uses `scrollTo` helper only) | None found |
| `src/pages/Automator.jsx` main | Only `useNavigate()` at line 792 — no conditionals before it | None found |
| `src/components/sections/*` | No useState/useEffect in any of the 8 existing section files | None found |
| Automator sub-components | All 3 stateful components (PulseCallGraphic, LoopGraphic, DocBuilderGraphic) declare state at function top before any JSX return | None found |

**Finding:** No useState ordering violations exist in the codebase after Contact.jsx is deleted. BUG-02 as a code fix requirement is resolved entirely by D-03. The scan step should still be documented as completed (confirming zero violations) so the success criterion can be checked off.

---

## Architecture Patterns

### Recommended Project Structure After Phase 1

```
src/
├── App.jsx                          # Shell: Navbar, Footer, Routes (Contact route removed)
├── pages/
│   ├── Home.jsx
│   ├── Platform.jsx
│   ├── WhyUs.jsx                    # Now self-contained (ContactForm moved in or extracted)
│   └── Automator.jsx                # Imports 7 extracted section components
└── components/
    ├── sections/
    │   ├── CloseDealsSection.jsx        (existing)
    │   ├── ComparisonTableSection.jsx   (existing)
    │   ├── ContactFormSection.jsx       (NEW — extracted from Contact.jsx)
    │   ├── DigitalVoiceWave.jsx         (NEW — from Automator.jsx)
    │   ├── DocBuilderGraphic.jsx        (NEW — from Automator.jsx)
    │   ├── LeadCaptureSection.jsx       (existing)
    │   ├── LocalSupportSection.jsx      (existing)
    │   ├── LoopGraphic.jsx              (NEW — from Automator.jsx)
    │   ├── MarketingAutomationSection.jsx (existing)
    │   ├── NurtureLeadsSection.jsx      (existing)
    │   ├── PulseCallGraphic.jsx         (NEW — from Automator.jsx)
    │   ├── ResultBadge.jsx              (NEW — from Automator.jsx)
    │   ├── ScaleBusinessSection.jsx     (existing)
    │   ├── SmartSocialPlannerSection.jsx (existing)
    │   ├── ToolCard.jsx                 (NEW — from Automator.jsx)
    │   └── ZigZagFeature.jsx            (NEW — from Automator.jsx)
    └── shared/
        └── SharedComponents.jsx
```

### Pattern: Extracting Automator Sub-Components

Each extracted file follows the existing sections/ pattern:

```jsx
// src/components/sections/PulseCallGraphic.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const PulseCallGraphic = () => {
  const [callsProcessed, setCallsProcessed] = React.useState(0);
  // ... component body
};

export default PulseCallGraphic;
```

Then in Automator.jsx:
```jsx
import PulseCallGraphic from '../components/sections/PulseCallGraphic';
import LoopGraphic from '../components/sections/LoopGraphic';
// ... etc
```

### Pattern: ContactForm Extraction

```jsx
// src/components/sections/ContactFormSection.jsx
// Move the entire ContactForm function and encode helper here
// Export as named: export function ContactForm({ compact = false }) { ... }
// WhyUs.jsx import changes to:
import { ContactForm } from '../components/sections/ContactFormSection';
```

### Pattern: Navigate with Hash

```jsx
// In components that need to navigate to /why-us#contact from other pages:
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
// Replace: window.location.href = '/why-us#contact'
// With:
navigate('/why-us#contact');
```

App.jsx Navbar needs `useNavigate` added to its import. Currently only `useLocation` is imported from react-router-dom in the Navbar function scope — both hooks are available since Navbar renders inside `<Router>`.

### Pattern: Gradient Replacing Prairie Hero

```jsx
// In WhyUs.jsx, replace the broken backgroundImage motion.div:
// BEFORE:
<motion.div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: 'url("/prairie-hero.jpeg")' }}
  initial={{ scale: 1.15 }}
  whileInView={{ scale: 1 }}
  ...
/>

// AFTER (keep the scale animation, use Tailwind gradient):
<motion.div
  className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
  initial={{ scale: 1.15 }}
  whileInView={{ scale: 1 }}
  ...
/>
// The existing overlay div below remains unchanged
```

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Hash-based scroll after navigation | Custom scroll event system | `useEffect` + `getElementById` + `scrollIntoView` | Native DOM API — already used throughout the codebase |
| Component file splitting | Build-time code splitting | Manual file extraction + import updates | This is a code organization task, not a bundling task |
| Dynamic copyright year | Date formatting library | `new Date().getFullYear()` | Built-in JS — no library needed |

---

## Common Pitfalls

### Pitfall 1: Deleting Contact.jsx Without Migrating ContactForm

**What goes wrong:** WhyUs.jsx imports `{ ContactForm }` from `./Contact`. Deleting Contact.jsx without moving `ContactForm` causes a build error.
**Why it happens:** D-03 says "delete Contact.jsx" but the named export is live.
**How to avoid:** Move `ContactForm` and `encode` helper to `ContactFormSection.jsx` first, update the import in WhyUs.jsx, then delete Contact.jsx.
**Warning signs:** Build fails with "Cannot resolve module './Contact'" in WhyUs.jsx.

### Pitfall 2: navigate('/why-us#contact') Without Hash Scroll Handler

**What goes wrong:** CTAs navigate to the URL correctly but the page renders at the top; user never sees the contact form.
**Why it happens:** React Router does not auto-scroll to hash anchors on cross-route navigation.
**How to avoid:** Add `useEffect` hash-scroll handler to WhyUs.jsx as part of the same task as D-02.
**Warning signs:** Clicking "Get Started" from Home/Platform/Automator takes user to top of WhyUs page.

### Pitfall 3: Adding useNavigate to Navbar Without Checking Router Context

**What goes wrong:** `useNavigate()` throws "You should call navigate() in a React.useEffect()" or context error if called outside a Router.
**Why it happens:** Navbar is defined in App.jsx before the Router wraps AppContent — but Navbar renders *inside* AppContent which is inside Router. No issue here.
**How to avoid:** Confirm Navbar renders inside `<Router>` before using `useNavigate`. In this codebase, AppContent (which contains Navbar) renders inside `<Router>` in the `App` component — safe.

### Pitfall 4: WhyUs.jsx Same-Page Navigation Uses navigate() Instead of scrollTo()

**What goes wrong:** WhyUs lines 62 and 201 currently do `window.location.href = '/why-us#contact'`. A naive fix replaces with `navigate('/why-us#contact')` — but this causes a full React Router navigation to the same page, resetting scroll position.
**How to avoid:** On WhyUs.jsx, use the existing `scrollTo('contact')` helper instead of navigate(). Only use navigate() when crossing from a different route.

### Pitfall 5: Automator Sub-Component Missing SharedComponents Imports

**What goes wrong:** ZigZagFeature and ToolCard use `springConfigs`, `fadeInUp`, `scaleIn`, `cinematicStagger` from SharedComponents. These are currently imported once at the top of Automator.jsx. When extracted, each file needs its own import.
**How to avoid:** Copy the relevant SharedComponents imports into each extracted file. Check what each component actually uses before writing the import line.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | React Router v7 `navigate('/path#hash')` does not auto-scroll to hash | Hash Scroll section | If v7 added auto-scroll, the useEffect workaround is unnecessary (harmless) |

---

## Open Questions

1. **ContactForm grouping decision**
   - What we know: ContactForm must move out of Contact.jsx (which is being deleted)
   - What's unclear: Whether it goes into a sections/ file or stays in WhyUs.jsx inline
   - Recommendation: Extract to `ContactFormSection.jsx` for future reusability; import in WhyUs.jsx

2. **Automator.jsx main export still ~618 lines after split**
   - What we know: The 7 sub-components account for ~740 lines; the remaining export is ~618 lines of JSX composition
   - What's unclear: Whether the success criterion "no single file exceeds ~300 lines" applies to page-level route components
   - Recommendation: Document in the plan that the ~300 line target applies to sub-components, not to the orchestrating page file itself

---

## Environment Availability

Step 2.6: SKIPPED — this phase is purely code/config changes with no external tool dependencies. Node.js, npm, and Vite are assumed present (project is already runnable). No new runtime dependencies are introduced.

---

## Validation Architecture

No automated test framework is configured in this project (no jest.config, no vitest.config, no test/ directory, no test scripts in package.json). [VERIFIED: ls src/, package.json]

Phase 1 is cleanup-only — all validation is manual smoke testing per the CLAUDE.md workflow:

| Req ID | Behavior | Validation Method |
|--------|----------|-------------------|
| CLEAN-01 | MapleTechPremium.jsx absent from repo | `ls src/components/MapleTechPremium.jsx` returns not-found; `npm run build` succeeds |
| CLEAN-02 | No window.location.href in src/ | `grep -r "window.location.href" src/` returns zero navigation usages |
| CLEAN-03 | No Automator sub-components inline | File count in components/sections/ increases by 7; Automator.jsx has no inline const components |
| CLEAN-04 | No inline style block | Resolved by Contact.jsx deletion; `grep -r "<style>" src/` returns zero matches |
| CLEAN-05 | Footer shows current year | Visual check on running app; `grep "2025" src/App.jsx` returns zero matches |
| BUG-01 | No broken image on WhyUs | Dev server shows no 404 for prairie-hero.jpeg; WhyUs local-advantage section renders |
| BUG-02 | No useState ordering violations | `grep -n "useState\|useEffect" src/pages/*.jsx` manual review passes |

**Wave 0 gaps:** None — no test infrastructure needed for this phase.

---

## Security Domain

ASVS enforcement not applicable to Phase 1 (no new auth, session, or data handling paths introduced). The ContactForm being moved from Contact.jsx to ContactFormSection.jsx is a file reorganization — no security-sensitive logic changes. Netlify Forms integration remains unchanged.

---

## Sources

### Primary (HIGH confidence)
- `src/App.jsx` — Navbar, Footer, route definitions (direct file read)
- `src/pages/Automator.jsx` — Sub-component structure, line ranges (direct file read + grep)
- `src/pages/WhyUs.jsx` — backgroundImage location, ContactForm import, window.location.href locations (direct file read)
- `src/pages/Contact.jsx` — ContactForm named export structure, inline style location (direct file read)
- `src/pages/Home.jsx`, `src/pages/Platform.jsx` — window.location.href locations (direct file read)
- `src/components/MapleTechPremium.jsx` — import absence confirmed (grep)
- `package.json` — react-router-dom v7.10.1 confirmed
- `public/` — prairie-hero.jpeg absence confirmed (ls)

### Tertiary (LOW confidence — assumed)
- React Router v7 hash navigation behavior (A1 in Assumptions Log)

---

## Metadata

**Confidence breakdown:**
- File inventory (what to delete, where the bugs are): HIGH — all verified from source
- Automator split structure: HIGH — line ranges confirmed from grep
- Hash scroll behavior: MEDIUM — React Router v6 behavior known; v7 assumed same
- useState violations: HIGH — grep + manual scan complete

**Research date:** 2026-04-18
**Valid until:** 2026-05-18 (stable codebase, no external dependencies)
