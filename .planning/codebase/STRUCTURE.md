# Directory Structure

_Last updated: 2026-04-18_

## Top-Level Layout

```
maple-tech-website-2.0/
├── src/                    # Application source code
│   ├── main.jsx            # Entry point — mounts React app
│   ├── App.jsx             # Root component, router setup
│   ├── index.css           # Global styles (Tailwind base + custom)
│   ├── pages/              # Route-level page components
│   └── components/         # Reusable and section components
│       ├── sections/       # Page-section-level components
│       └── shared/         # Shared UI primitives
├── public/                 # Static assets served as-is
├── dist/                   # Build output (gitignored)
├── lovable-mobile-boost/   # Separate sub-project (untracked)
├── index.html              # Vite HTML entry
├── vite.config.js          # Vite build config
├── tailwind.config.js      # Tailwind theme config
├── postcss.config.js       # PostCSS plugins
├── netlify.toml            # Netlify deployment config
└── .eslintrc.cjs           # ESLint rules
```

## Source Details

### `src/pages/` — Route Pages

| File | Route | Description |
|------|-------|-------------|
| `Home.jsx` | `/` | Landing page |
| `Platform.jsx` | `/platform` | Product/platform overview |
| `Automator.jsx` | `/automator` | Marketing automation feature page (1,408 lines) |
| `WhyUs.jsx` | `/why-us` | Differentiation / about page |
| `Contact.jsx` | `/contact` | Contact form page |

### `src/components/sections/` — Page Sections

Reusable content sections composed into pages:

- `CloseDealsSection.jsx`
- `ComparisonTableSection.jsx`
- `LeadCaptureSection.jsx`
- `LocalSupportSection.jsx`
- `MarketingAutomationSection.jsx`
- `NurtureLeadsSection.jsx`
- `ScaleBusinessSection.jsx`
- `SmartSocialPlannerSection.jsx`

### `src/components/shared/`

- `SharedComponents.jsx` — Common UI primitives (buttons, cards, etc.)

### `src/components/`

- `MapleTechPremium.jsx` — Large file (1,617 lines), appears orphaned/unused

## Naming Conventions

- **Files:** PascalCase for components (`Home.jsx`, `SharedComponents.jsx`)
- **Extensions:** `.jsx` for all React components
- **Pages:** Named after the route they represent
- **Sections:** Suffixed with `Section` (`LeadCaptureSection.jsx`)

## Where to Add New Code

| What | Where |
|------|-------|
| New page/route | `src/pages/NewPage.jsx` + add route in `App.jsx` |
| New section | `src/components/sections/NewSection.jsx` |
| Shared UI primitive | `src/components/shared/SharedComponents.jsx` or new file |
| Global styles | `src/index.css` |
| Static assets | `public/` |
