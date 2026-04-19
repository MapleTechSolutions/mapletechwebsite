# Phase 2: Infrastructure & Legal - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-19
**Phase:** 02-infrastructure-and-legal
**Areas discussed:** Legal page content, 404 page design, Error boundary fallback, Reduced-motion scope

---

## Legal Page Content

| Option | Description | Selected |
|--------|-------------|----------|
| Generate PIPEDA template | Claude fills standard PIPEDA clauses with Maple Tech details | ✓ |
| Placeholder only | "Coming soon" stub — gets links working without real content | |
| I'll provide the content | User pastes own privacy policy text | |

**User's choice:** Generate PIPEDA template (for both Privacy Policy and Terms of Service)
**Notes:** Use Maple Tech's real details: contact form collects name/email/message, sales@mapletech.solutions, Saskatchewan/Canada jurisdiction. Standard ToS with Saskatchewan governing law.

---

## 404 Page Design

| Option | Description | Selected |
|--------|-------------|----------|
| Branded — matches the site | Dark gradient, logo, PremiumButton "Back to Home" | ✓ |
| Minimal — simple centered text | Plain white page with text and link | |
| Playful — custom illustration/animation | Framer Motion animation or SVG | |

**User's choice:** Branded — matches the site

| Option | Description | Selected |
|--------|-------------|----------|
| Home only | Single CTA: "Back to Home" | ✓ |
| Home + Contact us | Two CTAs: home and Get Started | |
| Full nav links | Show all four nav links | |

**User's choice:** Home only
**Notes:** Clean single CTA — no clutter on the error page.

---

## Error Boundary Fallback

| Option | Description | Selected |
|--------|-------------|----------|
| Branded fallback | Logo + "Something went wrong" + Refresh button | ✓ |
| Minimal fallback | Plain text with no styling | |
| Branded + contact option | Branded + "Contact us" link | |

**User's choice:** Branded fallback

| Option | Description | Selected |
|--------|-------------|----------|
| Wrap route content only | ErrorBoundary wraps `<Routes>`; Navbar + Footer stay visible | ✓ |
| Wrap entire app | ErrorBoundary wraps everything in App | |

**User's choice:** Wrap route content only
**Notes:** User can navigate away without refreshing when a page crashes.

---

## Reduced-Motion Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Global backgrounds only | useReducedMotion() in GradientMeshBackground + AnimatedGridBackground | ✓ |
| All animated components | Audit every Framer Motion usage across all components | |

**User's choice:** Global backgrounds only

| Option | Description | Selected |
|--------|-------------|----------|
| Render static (no animation) | Components render but with no animate props | ✓ |
| Hide completely | Return null from both components | |

**User's choice:** Render static (no animation)
**Notes:** Background gradient still visible; only the looping motion is paused.

---

## Claude's Discretion

- Suspense fallback spinner style
- Exact copy for 404 and Error Boundary messages
- PIPEDA and ToS clause depth
- New page file names and locations

## Deferred Ideas

None — discussion stayed within phase scope.
