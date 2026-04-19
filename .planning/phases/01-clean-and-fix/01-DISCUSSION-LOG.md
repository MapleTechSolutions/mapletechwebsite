# Phase 1: Clean & Fix - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-18
**Phase:** 01-clean-and-fix
**Areas discussed:** Hero image, CTA navigation target, Contact.jsx styles approach

---

## Hero Image

| Option | Description | Selected |
|--------|-------------|----------|
| I have the file — add it | Add prairie-hero.jpeg to public/. Section stays as designed. | |
| Replace with gradient | Remove image reference, use CSS gradient background instead. | ✓ |
| Use a different image | Swap in a different local or public-domain photo. | |

**User's choice:** Replace with gradient
**Notes:** User does not have the prairie-hero.jpeg file. The section will render with a CSS gradient instead.

---

## CTA Navigation Target

| Option | Description | Selected |
|--------|-------------|----------|
| Keep /why-us#contact | Convert window.location.href to navigate(). CTAs stay pointing at Why Us contact section. | ✓ |
| Point CTAs to /contact | All Get Started buttons navigate to /contact instead. | |

**User's choice:** Keep /why-us#contact
**Notes:** Visitors land on Why Us with business context before seeing the contact form. Preferred UX.

### Follow-up: /contact route

| Option | Description | Selected |
|--------|-------------|----------|
| Keep /contact as standalone | Both routes exist. /contact stays as its own page. | |
| Remove /contact, use /why-us#contact only | Delete Contact.jsx and the route. One contact form. | ✓ |

**User's choice:** Remove /contact
**Notes:** This also resolves CLEAN-04 automatically — Contact.jsx deletion removes its inline style block.

---

## Contact.jsx Styles Approach

*This area was resolved by the CTA navigation decision: Contact.jsx is being deleted, so the inline `<style>` block is removed along with it. No migration needed.*

---

## Claude's Discretion

- How to group extracted Automator sub-components into files (one-per-file vs grouped)
- Exact gradient values for the WhyUs hero section replacement
- Whether /why-us#contact hash scroll needs a custom scroll handler after navigation

## Deferred Ideas

None.
