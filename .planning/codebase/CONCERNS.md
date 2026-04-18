# Codebase Concerns

_Last updated: 2026-04-18_

## Tech Debt

### Critical

- **Orphaned component:** `src/components/MapleTechPremium.jsx` is 1,617 lines and appears unused — dead code consuming bundle size
- **Router bypass:** `window.location.href` used in ~8 places instead of React Router's `navigate()` — causes full page reloads in a SPA, breaks back-button behavior
- **Outdated dependency:** `framer-motion` v10 is two major versions behind current (v12)

### Minor

- Inline `<style>` block in `Contact.jsx` — styles should live in Tailwind classes or `index.css`
- `Automator.jsx` is 1,408 lines — candidate for splitting into section components
- Copyright year hardcoded as `2025` — will go stale

## Known Bugs

- **Missing image:** `prairie-hero.jpeg` referenced but file not found in `public/`
- **useState ordering issue:** `setInterestsDropdownOpen` called before its `useState` declaration in at least one component — React requires hooks to be declared before use

## Security Concerns

- **Dead legal links:** Privacy Policy and Terms of Service links render but point to `#` or non-existent pages — contact form collects personal data (PIPEDA concern for Canadian users)
- **Unsubstantiated compliance claim:** "SOC 2 Compliant" appears on the site with no backing evidence
- **No rate limiting:** Contact/Netlify form only has a honeypot field — no CAPTCHA or server-side rate limiting

## Performance Concerns

- **Unbounded animations:** 22 animated grid lines + 3 animated blobs run globally on every page with infinite loops — no pause on reduced-motion or page visibility change
- **Unthrottled mousemove:** At least one `mousemove` event listener runs without `requestAnimationFrame` or debounce
- **No code splitting:** `Automator.jsx` (1,408 lines) is bundled eagerly — should use `React.lazy()` for route-level splitting

## Fragile Areas

- **Hash routing to `#contact`:** Several CTAs link via `window.location.href = '/#contact'` — silently breaks if the anchor `id` is renamed
- **`HeroMapleLeafCluster` component:** Appears empty or near-empty but still consumes render overhead
- **No error boundary:** Any unhandled render error crashes the entire app with no fallback UI

## Missing Infrastructure

- **No 404 route:** React Router has no catch-all `*` route — unmatched URLs render blank
- **No Privacy Policy page:** Required for PIPEDA compliance and most ad/analytics platforms
- **Zero tests:** No test framework installed, no test files — zero coverage
- **No React error boundary:** No `componentDidCatch` or `<ErrorBoundary>` wrapper

## Summary

| Category | Count | Severity |
|----------|-------|----------|
| Tech debt | 5 | Medium |
| Known bugs | 2 | High |
| Security | 3 | High |
| Performance | 3 | Medium |
| Fragile areas | 3 | Medium |
| Missing infra | 4 | High |
