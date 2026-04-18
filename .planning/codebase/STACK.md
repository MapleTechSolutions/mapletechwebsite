# Technology Stack

**Analysis Date:** 2026-04-18

## Languages

**Primary:**
- JavaScript (JSX) - All source files in `src/` use `.jsx` extension; project uses ES modules (`"type": "module"` in `package.json`)

**Secondary:**
- CSS - `src/index.css` for global styles; utility classes via Tailwind

## Runtime

**Environment:**
- Node.js v24.13.0

**Package Manager:**
- npm 11.6.2
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 18.2.0 - UI component library; entry point at `src/main.jsx`, root component at `src/App.jsx`
- React Router DOM 7.10.1 - Client-side SPA routing; `BrowserRouter` wrapping in `src/App.jsx`, routes defined in `AppContent`

**Styling:**
- Tailwind CSS 3.3.5 - Utility-first CSS; config at `tailwind.config.js`, content scanned from `./src/**/*.{js,ts,jsx,tsx}`
- PostCSS 8.4.31 - CSS processing pipeline; config at `postcss.config.js`
- Autoprefixer 10.4.16 - Vendor prefix automation via PostCSS

**Animation:**
- Framer Motion 10.16.4 - Declarative animations and transitions; used throughout all pages and components via `motion.*` wrappers, `useScroll`, `useSpring`, `AnimatePresence`

**Icons:**
- Lucide React 0.294.0 - SVG icon library; imported per-icon across all components

**Build/Dev:**
- Vite 5.0.0 - Build tool and dev server; config at `vite.config.js`, dev server on port 3000, output to `dist/`
- `@vitejs/plugin-react` 4.2.0 - Vite plugin for React/JSX transform

## Key Dependencies

**Critical:**
- `react` 18.2.0 - Core UI framework; every component file depends on it
- `react-dom` 18.2.0 - DOM rendering; bootstrapped in `src/main.jsx`
- `react-router-dom` 7.10.1 - SPA navigation; routes defined in `src/App.jsx`
- `framer-motion` 10.16.4 - All page transitions, scroll effects, and micro-interactions; removing this would break the entire animated UI

**Infrastructure:**
- `tailwindcss` 3.3.5 - Custom theme extends brand colors (`brand.teal`, `brand.green`, `brand.orange`), custom font (`Plus Jakarta Sans`), and custom keyframe animations (`float`, `pulse-glow`, `blob`)

## Configuration

**Environment:**
- No `.env` files detected; no `VITE_` environment variables used in source
- Application makes no external API calls requiring runtime secrets

**Build:**
- `vite.config.js` - Dev server port 3000, `open: true`, output to `dist/`, sourcemaps enabled
- `tailwind.config.js` - Brand color palette, custom font stack, custom animations
- `postcss.config.js` - Tailwind + Autoprefixer pipeline
- `netlify.toml` - Publish directory `dist`, build command `npm run build`, SPA redirect rule (`/* → /index.html`), security headers, asset cache headers (1 year immutable)

**Linting:**
- ESLint 8.53.0 with `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- Run: `npm run lint` (checks `.js` and `.jsx`, max-warnings 0)

## Typography

**Font:**
- Plus Jakarta Sans (400, 500, 600, 700, 800 weights) loaded from Google Fonts CDN in `index.html`
- Declared as default sans-serif in `tailwind.config.js`

## Platform Requirements

**Development:**
- Node.js 24+ (current environment)
- npm 11+
- Run: `npm run dev` (starts Vite dev server at `http://localhost:3000`)

**Production:**
- Static site — outputs to `dist/`
- Deployed on Netlify (`netlify.toml` present)
- No server-side runtime required

---

*Stack analysis: 2026-04-18*
