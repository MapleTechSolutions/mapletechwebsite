# Phase 1: Clean & Fix - Context

**Gathered:** 2026-04-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Remove dead code, fix broken SPA navigation (window.location.href → React Router), split the oversized Automator.jsx into focused section components, fix the missing hero image, make the footer copyright year dynamic, and fix the useState ordering bug. No new features or routes added (except removing /contact).

</domain>

<decisions>
## Implementation Decisions

### Hero Image (BUG-01)
- **D-01:** Replace `prairie-hero.jpeg` background image reference in `WhyUs.jsx` with a CSS gradient background. Do NOT add the image file. The "Local Advantage — Regina Skyline" section remains but renders with a gradient instead of a photo.

### CTA Navigation (CLEAN-02)
- **D-02:** All `window.location.href = '/why-us#contact'` navigations are converted to React Router `navigate('/why-us#contact')`. CTAs continue pointing to the Why Us contact section — do NOT change the destination to `/contact`.
- **D-03:** The `/contact` route is REMOVED. `Contact.jsx` is deleted. All contact entry points use `/why-us#contact` exclusively. The Route entry in `App.jsx` for `/contact` is removed along with the import.

### Inline Styles (CLEAN-04)
- **D-04 (resolved by D-03):** `Contact.jsx` is deleted, so its inline `<style>` block goes away automatically. No migration to index.css or Tailwind needed.

### Dead Code (CLEAN-01)
- **D-05:** `src/components/MapleTechPremium.jsx` is deleted. No imports reference it; safe to remove.

### Footer Copyright (CLEAN-05)
- **D-06:** Replace hardcoded `© 2025` in `App.jsx` Footer component with `© {new Date().getFullYear()}`.

### Automator Split (CLEAN-03)
- **D-07:** Extract the 7 inline sub-components from `Automator.jsx` into separate files under `src/components/sections/`. Target: no single file exceeds ~300 lines. Components to extract: `DigitalVoiceWave`, `PulseCallGraphic`, `LoopGraphic`, `DocBuilderGraphic`, `ResultBadge`, `ZigZagFeature`, `ToolCard`.

### useState Bug (BUG-02)
- **D-08:** Fix the `useState` ordering violation in `Contact.jsx` — moot since Contact.jsx is deleted. Scan all remaining components for any hooks declared after conditional logic or early returns and fix those.

### Claude's Discretion
- How to group extracted Automator components into files (one-per-file vs grouped by type)
- Exact gradient values for the WhyUs hero section replacement
- Whether the `/why-us#contact` hash scroll works natively or needs a scroll handler after navigation

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project
- `.planning/REQUIREMENTS.md` — All requirement IDs and acceptance criteria for Phase 1
- `.planning/ROADMAP.md` — Phase 1 success criteria and goal

### Architecture
- `src/components/shared/SharedComponents.jsx` — Design system barrel; all UI primitives live here
- `src/App.jsx` — Router config, Navbar, Footer, route definitions
- `src/pages/Automator.jsx` — File to be split; read before planning the split
- `src/components/sections/` — Existing section components; new extractions go here

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/sections/` — 8 section components already exist (CloseDealsSection, ComparisonTableSection, LeadCaptureSection, LocalSupportSection, MarketingAutomationSection, NurtureLeadsSection, ScaleBusinessSection, SmartSocialPlannerSection). New extractions from Automator.jsx join this directory.
- `src/components/shared/SharedComponents.jsx` — PremiumButton, GradientMeshBackground, AnimatedGridBackground, springConfigs, and more.

### Established Patterns
- Navigation: React Router `<Link>` and `useNavigate()` — already imported in App.jsx
- Styling: Tailwind only — no inline styles, no CSS Modules
- Animation: Framer Motion throughout — follow existing motion patterns

### Integration Points
- All `window.location.href` navigations are in: `src/App.jsx:47`, `src/pages/Automator.jsx:795`, `src/pages/WhyUs.jsx:62`, `src/pages/WhyUs.jsx:201`, `src/pages/Platform.jsx:255`, `src/pages/Home.jsx:199`
- `Contact.jsx` read use (`window.location.href` for form data at line 44) goes away with deletion
- MapleTechPremium.jsx has one `window.location.href` at line 1579 — goes away with deletion

</code_context>

<specifics>
## Specific Ideas

- The WhyUs "Local Advantage" section (line 84) uses `backgroundImage: 'url("/prairie-hero.jpeg")'` — replace the `style` prop value with a Tailwind gradient or remove the backgroundImage entirely and rely on the existing overlay gradient already present in the section.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-clean-and-fix*
*Context gathered: 2026-04-18*
