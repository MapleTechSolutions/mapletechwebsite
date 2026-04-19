# Phase 2: Infrastructure & Legal - Context

**Gathered:** 2026-04-19
**Status:** Ready for planning

<domain>
## Phase Boundary

Add a catch-all 404 route, React Error Boundary, code splitting with React.lazy/Suspense, /privacy and /terms pages with generated legal content, and reduced-motion support for the two global background animation components. No new features or nav links beyond converting the footer's "#" legal links to real routes.

</domain>

<decisions>
## Implementation Decisions

### Legal Pages (LEGAL-01, LEGAL-02)
- **D-01:** Generate a PIPEDA-compliant Privacy Policy for `/privacy`. Use Maple Tech's real details: contact form collects name/email/message, contact address is sales@mapletech.solutions, jurisdiction is Saskatchewan, Canada. Content should be genuine (not a "coming soon" stub) and editable by the client later.
- **D-02:** Generate a standard marketing-site Terms of Service for `/terms`. Clauses: no warranty, limitation of liability, Saskatchewan governing law, contact via sales@mapletech.solutions. Standard template language, editable later.
- **D-03:** Footer links in `App.jsx` (currently `href="#"` for Privacy Policy and Terms of Service) are converted to `<Link to="/privacy">` and `<Link to="/terms">` using React Router.

### 404 Page (INFRA-01)
- **D-04:** The 404 page is **branded** — matches the site aesthetic. Uses the same dark gradient background as other pages (or a simplified version), displays the Maple Tech logo, shows "404" prominently, includes a short message, and has a single `PremiumButton` CTA: "Back to Home" linking to `/`.
- **D-05:** Single CTA only — "Back to Home". No additional nav links or contact options on the 404 page.
- **D-06:** The catch-all route `path="*"` is added at the end of the `<Routes>` block in `AppContent` in `App.jsx`.

### Error Boundary (INFRA-02)
- **D-07:** Branded fallback UI — shows Maple Tech logo, "Something went wrong" message, and a Refresh button (calls `window.location.reload()`). Styled with Tailwind, consistent with the site's dark/slate palette.
- **D-08:** Error Boundary wraps **the `<Routes>` block only** inside `AppContent`. Navbar and Footer remain visible when a route crashes — user can navigate away without a full refresh.
- **D-09:** Implement as a React class component `ErrorBoundary` in `src/components/shared/SharedComponents.jsx` (keeping all design system primitives together per architecture rule).

### Code Splitting (INFRA-03)
- **D-10:** All four route-level pages are converted to `React.lazy()` imports: `Home`, `Platform`, `Automator`, `WhyUs`. Wrap the `<Routes>` block in `<Suspense>` with a simple fallback (a centered loading spinner or blank — Claude's discretion on spinner style).
- **D-11:** Suspense wraps at the same level as ErrorBoundary around `<Routes>` — order: ErrorBoundary > Suspense > Routes.

### Reduced Motion (PERF-01)
- **D-12:** Scope is **global background components only** — add `useReducedMotion()` hook (from Framer Motion) inside `GradientMeshBackground` and `AnimatedGridBackground` in `SharedComponents.jsx`. No other components need changes for this phase.
- **D-13:** When `useReducedMotion()` returns true, both components **render static** (no Framer Motion `animate` props active) — the background still renders visually but does not animate. Do not return `null`; the background gradient should still be visible.
- **D-14:** The existing `@media (prefers-reduced-motion: reduce)` rule in `index.css` already handles CSS-based transitions — no changes needed there.

### Claude's Discretion
- Suspense fallback spinner style (simple Tailwind spinner or blank is fine)
- Exact copy for 404 message (e.g., "Page not found — let's get you back on track")
- Exact copy for Error Boundary message (e.g., "Something went wrong. Please refresh to try again.")
- PIPEDA and ToS clause depth (standard template language is acceptable)
- Page file locations: `src/pages/NotFound.jsx`, `src/pages/PrivacyPolicy.jsx`, `src/pages/TermsOfService.jsx`

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Architecture
- `src/App.jsx` — Router config, AppContent component, Footer with "#" legal links, Routes block; all INFRA changes happen here
- `src/components/shared/SharedComponents.jsx` — Design system barrel; ErrorBoundary class component goes here; GradientMeshBackground and AnimatedGridBackground to be updated for reduced-motion
- `src/index.css` — Already has `@media (prefers-reduced-motion: reduce)` — do not duplicate or conflict

### Project Rules
- `.planning/REQUIREMENTS.md` — Requirement IDs INFRA-01 through INFRA-03, LEGAL-01, LEGAL-02, PERF-01 with acceptance criteria
- `.planning/ROADMAP.md` — Phase 2 goal and success criteria

### No external specs — requirements fully captured in decisions above

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `PremiumButton` (SharedComponents.jsx) — Use for the 404 "Back to Home" CTA and Error Boundary "Refresh" button
- `GradientMeshBackground`, `AnimatedGridBackground` (SharedComponents.jsx) — The two Framer Motion looping animation components that need `useReducedMotion()` added
- `springConfigs` (SharedComponents.jsx) — Existing spring presets; use for any new animations
- `src/pages/` — All new pages (NotFound, PrivacyPolicy, TermsOfService) go here, matching existing pattern

### Established Patterns
- All imports in `App.jsx` use named imports; React.lazy wraps the default import
- No inline styles — Tailwind only
- Framer Motion for all animations — do not introduce CSS keyframes
- Pages are route-level components, relatively self-contained

### Integration Points
- `App.jsx` `<Routes>` block (line 227–232) — Add catch-all route `path="*"`, wrap with Suspense and ErrorBoundary
- `App.jsx` `Footer` component (lines 201–202) — Convert `href="#"` anchors to `<Link>` for /privacy and /terms
- `App.jsx` page imports (lines 7–11) — Convert to `React.lazy()` dynamic imports; remove static imports
- `SharedComponents.jsx` — Add `ErrorBoundary` class component; add `useReducedMotion()` to GradientMeshBackground and AnimatedGridBackground

</code_context>

<specifics>
## Specific Ideas

- Footer legal links are `<motion.a href="#">` currently — they need to become React Router `<Link>` (still can have motion wrapper via `motion(Link)` if desired, or just plain `<Link>`)
- The 404 page should use the existing dark slate gradient that other pages use — keep it visually on-brand without inventing new colors
- `useReducedMotion` is already available from the `framer-motion` import in SharedComponents.jsx — no new dependency needed

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-infrastructure-and-legal*
*Context gathered: 2026-04-19*
