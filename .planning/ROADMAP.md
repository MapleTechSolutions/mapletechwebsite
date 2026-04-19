# Roadmap: Maple Tech Website 2.0

## Overview

The codebase is functional but was built organically — dead code, broken navigation, missing legal pages, and no error handling create compounding risk. This roadmap delivers in three phases: clean and fix the existing code first, add the missing infrastructure and legal pages second, then build the integrations showcase that strengthens the visitor-to-lead conversion path.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Clean & Fix** - Remove dead code, fix navigation bugs, split oversized files, fix the broken image and hook ordering bug
- [ ] **Phase 2: Infrastructure & Legal** - Add 404 route, error boundary, code splitting, privacy policy, terms of service, and reduced-motion support
- [ ] **Phase 3: Integrations Showcase** - Build the client integrations showcase section as social proof to strengthen the conversion path

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

### Phase 2: Infrastructure & Legal
**Goal**: The site handles errors gracefully, unknown URLs show a proper 404 page, legal links point to real pages, and accessibility animations respect OS preferences
**Depends on**: Phase 1
**Requirements**: INFRA-01, INFRA-02, INFRA-03, LEGAL-01, LEGAL-02, PERF-01
**Success Criteria** (what must be TRUE):
  1. Navigating to an unknown URL (e.g., `/xyz`) renders a 404 page with a link back to home — no blank screen
  2. An unhandled render error in any component shows a fallback UI instead of crashing the entire app
  3. The Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages exist and are reachable — footer links no longer point to `#`
  4. Visitors with OS-level reduced-motion enabled see no looping animations (grid lines, blobs) — the site respects the accessibility preference
**Plans**: TBD
**UI hint**: yes

### Phase 3: Integrations Showcase
**Goal**: Visitors can see real client integration work Maple Tech has built, giving them evidence of capability before contacting the business
**Depends on**: Phase 2
**Requirements**: FEAT-01
**Success Criteria** (what must be TRUE):
  1. A showcase section or page exists on the live site displaying client integrations — it is reachable from the main navigation or a prominent CTA
  2. Each integration entry communicates what was built and for what purpose — visitors understand the scope of work without needing to ask
  3. The showcase follows the existing design system (`SharedComponents.jsx`) — it is visually consistent with the rest of the site
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Clean & Fix | 4/4 | COMPLETE | 2026-04-18 |
| 2. Infrastructure & Legal | 0/TBD | Not started | - |
| 3. Integrations Showcase | 0/TBD | Not started | - |
