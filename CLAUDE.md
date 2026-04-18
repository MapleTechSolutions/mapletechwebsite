# Maple Tech Website 2.0 — Project Guide

## Project Context

Marketing website for Maple Tech (mapletech.solutions). React 18 SPA deployed on Netlify.
**Core value:** Visitor lands → understands services → trusts the work → contacts the business.

Planning docs: `.planning/`

## GSD Workflow

This project uses the Get Shit Done (GSD) structured workflow.

**Current phase:** Phase 1 — Clean & Fix
**Roadmap:** `.planning/ROADMAP.md`
**Requirements:** `.planning/REQUIREMENTS.md`
**Project context:** `.planning/PROJECT.md`

### Phase Commands

```
/gsd-discuss-phase 1   # Gather context and clarify approach for a phase
/gsd-plan-phase 1      # Create detailed execution plan
/gsd-execute-phase 1   # Execute all plans in a phase
/gsd-progress          # Check current status
```

### Workflow Mode

- **Mode:** YOLO (auto-approve)
- **Granularity:** Coarse (3 phases)
- **Research:** Enabled
- **Plan Check:** Enabled
- **Verifier:** Enabled

## Tech Stack

- React 18 + Vite + Tailwind CSS + Framer Motion
- Deployed on Netlify (static SPA)
- No backend; Netlify Forms handles contact submission

## Architecture Pattern

```
App.jsx (shell + routing)
  └─ pages/          ← route-level components
  └─ components/
       ├─ sections/  ← large reusable page sections
       └─ shared/
            └─ SharedComponents.jsx  ← design system barrel (use this for all UI primitives)
```

**Rule:** All design system primitives go in `SharedComponents.jsx`. New sections go in `components/sections/`. No inline styles — Tailwind only.

## Key Constraints

- Static site only — no server-side code
- Keep all new UI consistent with `SharedComponents.jsx` design system
- Never use `window.location.href` for internal navigation — use React Router `navigate()` or `<Link>`
- No new root-level dependencies without discussion

## Known Issues (Phase 1 targets)

- `src/components/MapleTechPremium.jsx` — 1,617 lines of dead code, delete it
- ~8 `window.location.href` navigations need replacing with React Router
- `Automator.jsx` at 1,408 lines needs splitting into section components
- Missing `prairie-hero.jpeg` in `public/`
- `useState` ordering bug in one component
