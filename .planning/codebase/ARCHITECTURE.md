# Architecture

**Analysis Date:** 2026-04-18

## Pattern Overview

**Overall:** Single-Page Application (SPA) with client-side routing

**Key Characteristics:**
- React 18 component tree rooted at `src/main.jsx`, mounted to `#root` in `index.html`
- React Router DOM v7 handles all navigation with a catch-all redirect to `index.html` (Netlify SPA config)
- No server-side rendering; all logic runs in the browser
- No global state manager — local `useState`/`useEffect` per component; scroll progress passed as props
- Netlify Forms handles contact form submission with no custom backend

## Layers

**Application Shell (`src/App.jsx`):**
- Purpose: Wraps the entire app in `BrowserRouter`, renders persistent layout (Navbar, Footer, animated backgrounds), and declares all routes
- Location: `src/App.jsx`
- Contains: `Navbar`, `Footer`, `AppContent`, `App` components; route declarations; global scroll progress spring
- Depends on: `SharedComponents`, all page components
- Used by: `src/main.jsx`

**Pages Layer (`src/pages/`):**
- Purpose: Route-level components; each maps 1:1 to a URL path
- Location: `src/pages/`
- Contains: Full-page layouts assembled from section and shared components
- Depends on: `src/components/shared/SharedComponents.jsx`, section components
- Used by: `App.jsx` route declarations

**Section Components (`src/components/sections/`):**
- Purpose: Large, self-contained page sections extracted from the `Platform` and `WhyUs` pages for reuse and maintainability
- Location: `src/components/sections/`
- Contains: Feature showcase sections; no props-heavy APIs — sections are mostly self-contained with hardcoded content
- Depends on: No shared component imports observed in `LeadCaptureSection` (uses plain React + Tailwind); some sections may use `SharedComponents`
- Used by: `src/pages/Platform.jsx`, `src/pages/WhyUs.jsx`

**Shared Components (`src/components/shared/SharedComponents.jsx`):**
- Purpose: Central export barrel for reusable UI primitives, animation variants, spring configs, branded SVGs, and background decorations
- Location: `src/components/shared/SharedComponents.jsx`
- Contains: `PremiumButton`, `Card3D`, `ExpandingFeatureCard`, `AnimatedSection`, `SectionDivider`, `GradientMeshBackground`, `AnimatedGridBackground`, `MapleLeafOutline`, `MapleLeafFilled`, `MapleLeafSimple`, `springConfigs`, `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `cinematicStagger`
- Depends on: `framer-motion`, `lucide-react`
- Used by: All pages and App.jsx

**Legacy/Monolith Component (`src/components/MapleTechPremium.jsx`):**
- Purpose: Appears to be an earlier monolithic version of the site that has been superseded by the current pages/sections architecture; imports all section components
- Location: `src/components/MapleTechPremium.jsx`
- Contains: Full site assembled in one file; duplicates maple leaf SVG code already in `SharedComponents`
- Depends on: All section components, lucide-react, framer-motion
- Used by: Not imported anywhere in the active routing (`App.jsx`) — effectively unused

## Data Flow

**Page Render Flow:**
1. Browser loads `index.html`, which mounts `src/main.jsx`
2. `main.jsx` renders `<App>` wrapped in `React.StrictMode`
3. `App` renders `<Router>` → `<AppContent>` which places persistent `GradientMeshBackground`, `AnimatedGridBackground`, `Navbar`, `<Routes>`, and `Footer`
4. React Router matches the URL path and renders the corresponding page component inside `<Routes>`
5. Page components compose section components and `SharedComponents` primitives into the full page layout

**Scroll Animation Flow:**
1. `AppContent` derives `scrollYProgress` via `useScroll()` and wraps it in a `useSpring` for smooth interpolation
2. The resulting `smoothProgress` motion value is passed as a prop to `GradientMeshBackground` and `AnimatedGridBackground`
3. Individual pages also call `useScroll()` independently for page-level parallax (e.g., `Home.jsx` hero parallax)
4. Section-level animations use `useInView` with `once: true` to trigger on scroll into viewport

**Contact Form Submission:**
1. `ContactForm` (exported from `src/pages/Contact.jsx`) is rendered on both `/contact` and embedded in `WhyUs.jsx`
2. Form captures UTM params and referrer via `useEffect` on mount
3. On submit, data is `fetch`-POSTed to `"/"` with `Content-Type: application/x-www-form-urlencoded` and a `form-name: "contact"` field
4. Netlify intercepts the POST, processes the form, and sends email to `sales@mapletech.solutions`
5. On success, `ContactForm` shows a success state; no redirect occurs

**State Management:**
- No global store; all state is local to its component
- `Navbar` owns `scrolled` (boolean) and `mobileMenu` (boolean) state
- `ContactForm` owns the full form field state, validation errors, submitting flag, and success flag
- `Card3D` and `ExpandingFeatureCard` own their hover/rotation state locally

## Key Abstractions

**`SharedComponents.jsx` barrel:**
- Purpose: Single import source for all design-system primitives and Framer Motion presets
- Examples: `src/components/shared/SharedComponents.jsx`
- Pattern: Named exports; consuming files destructure what they need: `import { PremiumButton, fadeInUp, springConfigs } from '../components/shared/SharedComponents'`

**`AnimatedSection` wrapper:**
- Purpose: Wraps any `<section>` with a fade-in-on-scroll trigger using `useInView`
- Examples: Used in `src/pages/Home.jsx`, `src/pages/Platform.jsx`, `src/pages/Automator.jsx`, `src/pages/WhyUs.jsx`
- Pattern: `<AnimatedSection id="section-id" className="...">...</AnimatedSection>`

**`springConfigs` presets:**
- Purpose: Named Framer Motion spring physics objects (`smooth`, `bouncy`, `gentle`, `snappy`, `float`) applied via `transition={{ type: "spring", ...springConfigs.snappy }}`
- Examples: `src/components/shared/SharedComponents.jsx` lines 73–79; consumed in every page and component

**`PremiumButton`:**
- Purpose: Branded CTA button with ripple effect, shimmer animation, and two variants (`primary` cyan gradient, `secondary` white/glass)
- Examples: Navbar "Get Started", hero CTAs, section CTAs across all pages
- Pattern: `<PremiumButton onClick={handler} variant="primary|secondary">{label}</PremiumButton>`

## Entry Points

**HTML Shell:**
- Location: `index.html`
- Triggers: Browser request; loads Google Fonts, defines `<div id="root">`, references `/src/main.jsx`
- Responsibilities: Meta/SEO tags, Open Graph tags, font preconnects, SPA mount point

**JS Entry:**
- Location: `src/main.jsx`
- Triggers: Vite module resolution from `index.html`
- Responsibilities: Creates React root on `#root`, wraps tree in `React.StrictMode`, imports global CSS

**Route Entry:**
- Location: `src/App.jsx`
- Triggers: Rendered by `main.jsx`
- Responsibilities: Declares all 5 routes (`/`, `/platform`, `/automator`, `/why-us`, `/contact`), renders persistent shell (Navbar, Footer, animated backgrounds), computes global scroll progress spring

## Error Handling

**Strategy:** Minimal — no React Error Boundaries detected; form errors are local validation only

**Patterns:**
- `ContactForm` validates fields client-side and sets `errors` state to show inline messages
- No `try/catch` around the Netlify form `fetch` call observed in the first 60 lines; error state handling may exist further in the file
- No 404 route defined in React Router; Netlify's catch-all redirect sends all unknown paths to `index.html`, which silently renders no route match

## Cross-Cutting Concerns

**Logging:** None — no logging library or `console.*` calls observed beyond development
**Validation:** Client-side only, within `ContactForm` (`src/pages/Contact.jsx`)
**Authentication:** None — fully public marketing site
**SEO:** Static meta/OG tags in `index.html`; no dynamic head management library (e.g., React Helmet)
**Deployment:** Netlify; SPA redirects and form handling configured in `netlify.toml`; security headers set globally

---

*Architecture analysis: 2026-04-18*
