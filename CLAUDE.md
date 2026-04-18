# Maple Tech Website 2.0 — Project Guide

## Project Context

Marketing website for Maple Tech (mapletech.solutions). React 18 SPA deployed on Netlify.
**Core value:** Visitor lands → understands services → trusts the work → contacts the business.

Planning docs: `.planning/`

## Role Split

**Claude = Planner + Auditor. Codex = Executor. Human = Smoke Tester.**

| Step | Who | Tool |
|------|-----|------|
| Write phase plan | Claude | `/gsd-plan-phase N` → `.planning/phases/phaseN/PLAN.md` |
| Execute plan | Codex | Reads PLAN.md, implements, commits |
| Verify work | Claude | Audit session — checks code against success criteria |
| Fix issues | Codex | Reads AUDIT.md, applies fixes |
| Smoke test | Human | Manual check on dev server or Netlify preview |

Status lifecycle: `PLANNED → EXECUTING → READY FOR AUDIT → READY FOR SMOKE TEST → COMPLETE`

All prompts for each role: `.planning/WORKFLOW_PROMPTS.md`

## GSD Workflow

**Current phase:** Phase 1 — Clean & Fix
**Roadmap:** `.planning/ROADMAP.md`
**Requirements:** `.planning/REQUIREMENTS.md`
**Project context:** `.planning/PROJECT.md`
**State:** `.planning/STATE.md`

### Planning Commands (Claude only)

```
/gsd-plan-phase 1      # Write PLAN.md for Phase 1 — Claude produces, Codex executes
/gsd-progress          # Check current status
```

### Workflow Mode

- **Mode:** YOLO (auto-approve)
- **Granularity:** Coarse (3 phases)
- **Executor:** Codex (reads .planning/phases/phaseN/PLAN.md)

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
