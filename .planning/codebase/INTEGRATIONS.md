# External Integrations

**Analysis Date:** 2026-04-18

## APIs & External Services

**Font Delivery:**
- Google Fonts CDN - Loads Plus Jakarta Sans typeface
  - URL: `https://fonts.googleapis.com` and `https://fonts.gstatic.com`
  - Declared via `<link>` tags in `index.html`; preconnect hints present
  - No API key required

## Form Handling

**Netlify Forms:**
- Service: Netlify Forms (built into Netlify hosting platform)
- Form name: `contact` (declared via `data-netlify="true"` and `name="contact"` on the form element in `src/pages/Contact.jsx`)
- Submission: POST to `/` with `Content-Type: application/x-www-form-urlencoded`; handled by Netlify at the edge
- Spam protection: Netlify honeypot field (`netlify-honeypot="bot-field"`) plus bot-field check in client-side validation
- Notification: Email alert to `sales@mapletech.solutions` with subject `New Lead: {{name}} - {{company}} ({{industry}})` configured in `netlify.toml`
- No third-party form service (e.g., Formspree, Typeform) — Netlify Forms is the sole mechanism
- Implementation file: `src/pages/Contact.jsx` lines 106–183

**UTM / Tracking Data Collected (stored in Netlify Forms submission):**
- `utm_source`, `utm_medium`, `utm_campaign` — read from URL query params on mount
- `page_url` — `window.location.href`
- `referrer` — `document.referrer`
- No analytics platform (GA, Segment, etc.) detected in source

## Data Storage

**Databases:**
- None — this is a static marketing site with no backend database

**File Storage:**
- Local filesystem only — static assets served from `public/` and `dist/`

**Caching:**
- Netlify CDN edge caching: `Cache-Control: public, max-age=31536000, immutable` for `/assets/*` (configured in `netlify.toml`)

## Authentication & Identity

**Auth Provider:**
- None — no user authentication, login, or session management present

## Monitoring & Observability

**Error Tracking:**
- None detected — no Sentry, Datadog, or similar SDK imported

**Analytics:**
- None detected — no Google Analytics, Mixpanel, Plausible, or similar script present

**Logs:**
- Browser console only (development); no structured logging service

## CI/CD & Deployment

**Hosting:**
- Netlify — canonical URL `https://mapletech.solutions` (declared in `index.html` Open Graph meta)
- Deploy config: `netlify.toml` at project root

**Build Pipeline:**
- `npm run build` → Vite bundles to `dist/` → Netlify publishes `dist/`

**CI Pipeline:**
- Not explicitly configured (no `.github/workflows/`, `.circleci/`, or similar detected)
- Netlify likely auto-deploys on git push (standard Netlify behavior)

## Environment Configuration

**Required env vars:**
- None — no `process.env.*` or `import.meta.env.VITE_*` references found in source code

**Secrets location:**
- No `.env` files present; no secrets required at build or runtime

## Webhooks & Callbacks

**Incoming:**
- None configured outside of Netlify Forms handling (which is platform-managed)

**Outgoing:**
- None — the site does not call any external REST/GraphQL APIs at runtime

## Contact Information Exposed in Source

**Business contact details hard-coded in `src/App.jsx` (footer):**
- Email: `sales@mapletech.solutions`
- Phone: `+1 (306) 942-1617`

---

*Integration audit: 2026-04-18*
