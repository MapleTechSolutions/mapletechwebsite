# Requirements: Maple Tech Website 2.0

**Defined:** 2026-04-18
**Core Value:** A visitor lands, understands what Maple Tech does, trusts the work, and contacts the business — every other concern is secondary to that conversion path working reliably.

## v1 Requirements

### Code Cleanup

- [ ] **CLEAN-01**: Dead code `src/components/MapleTechPremium.jsx` is deleted — no orphaned 1,617-line file in the bundle
- [ ] **CLEAN-02**: All ~8 `window.location.href` navigations are replaced with React Router `navigate()` or `<Link>` — no full-page reloads in the SPA
- [ ] **CLEAN-03**: `Automator.jsx` is split into focused section components under `components/sections/` — no single file exceeds ~300 lines
- [ ] **CLEAN-04**: Inline `<style>` block in `Contact.jsx` is moved to Tailwind classes or `index.css`
- [ ] **CLEAN-05**: Footer copyright year is dynamic (uses `new Date().getFullYear()`) — never goes stale

### Bug Fixes

- [ ] **BUG-01**: Missing `prairie-hero.jpeg` is resolved — either the file is added to `public/` or the reference is removed/replaced
- [ ] **BUG-02**: `useState` ordering bug is fixed — all hooks declared before use in any component

### Infrastructure

- [ ] **INFRA-01**: A `*` catch-all route exists in React Router rendering a proper 404 page with navigation back to home
- [ ] **INFRA-02**: A React Error Boundary wraps the app — unhandled render errors show a fallback UI instead of crashing
- [ ] **INFRA-03**: Large route-level components use `React.lazy()` + `Suspense` for code splitting — initial bundle is smaller

### Legal / Compliance

- [ ] **LEGAL-01**: A `/privacy` page exists with a Privacy Policy — satisfies PIPEDA requirement for sites collecting personal data via contact form
- [ ] **LEGAL-02**: A `/terms` page exists with Terms of Service — footer links no longer point to `#`

### Performance

- [ ] **PERF-01**: Global animation loops (grid lines, blobs) respect `prefers-reduced-motion` — animations pause when the OS accessibility setting is enabled

### New Feature

- [ ] **FEAT-01**: A client integrations showcase section or page exists — displays work Maple Tech has built for clients as social proof; layout and naming to be finalized during planning

## v2 Requirements

### Future Additions

- **V2-01**: Blog or content section (articles, case studies)
- **V2-02**: Pricing / packages page
- **V2-03**: CMS integration for content management

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / server-side logic | Static site on Netlify — no server runtime planned |
| Authentication / user accounts | Public marketing site — no login needed |
| CMS integration | Content is hardcoded — no CMS planned for this milestone |
| Blog / content section | Not planned for this milestone; deferred to v2 |
| Pricing page | Not mentioned by user; deferred to v2 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CLEAN-01 | Phase 1 | Pending |
| CLEAN-02 | Phase 1 | Pending |
| CLEAN-03 | Phase 1 | Pending |
| CLEAN-04 | Phase 1 | Pending |
| CLEAN-05 | Phase 1 | Pending |
| BUG-01 | Phase 1 | Pending |
| BUG-02 | Phase 1 | Pending |
| INFRA-01 | Phase 2 | Pending |
| INFRA-02 | Phase 2 | Pending |
| INFRA-03 | Phase 2 | Pending |
| LEGAL-01 | Phase 2 | Pending |
| LEGAL-02 | Phase 2 | Pending |
| PERF-01 | Phase 2 | Pending |
| FEAT-01 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 14 total
- Mapped to phases: 14
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-18*
*Last updated: 2026-04-18 after initial definition*
