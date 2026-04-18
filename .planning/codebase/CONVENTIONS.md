# Coding Conventions

**Analysis Date:** 2026-04-18

## Naming Patterns

**Files:**
- React components use PascalCase: `MapleTechPremium.jsx`, `CloseDealsSection.jsx`, `SharedComponents.jsx`
- Page files use PascalCase: `Home.jsx`, `Platform.jsx`, `WhyUs.jsx`, `Contact.jsx`, `Automator.jsx`
- Config files use camelCase with extension: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
- All component files use `.jsx` extension (not `.tsx`) — the project is JavaScript, not TypeScript

**Components:**
- Named function declarations for page-level and major components: `function Navbar()`, `function Footer()`, `function AppContent()`
- Arrow functions with `const` for exported utility components: `export const PremiumButton = (...)`, `export const Card3D = (...)`
- Default export for page components: `export default function Platform()`
- Named exports for shared/utility components in `src/components/shared/SharedComponents.jsx`

**Variables and State:**
- camelCase for all variables and state: `scrolled`, `mobileMenu`, `setRipples`, `smoothProgress`
- Boolean state named with past tense or adjective: `scrolled`, `submitting`, `success`, `isHovered`
- Event handlers prefixed with `handle`: `handleSubmit`, `handleMouseMove`, `handleMouseLeave`
- Scroll/DOM helpers use verb prefix: `scrollToTop`, `scrollToContact`, `addRipple`

**Constants and Config Objects:**
- camelCase for exported config objects: `springConfigs`, `fadeInUp`, `fadeInLeft`, `cinematicStagger`
- Object properties are descriptive single words: `smooth`, `bouncy`, `gentle`, `snappy`, `float`

## Code Style

**Formatting:**
- No Prettier config detected — formatting is manual/editor-driven
- Single quotes for strings throughout: `import React from 'react'`
- Semicolons used consistently at end of statements
- 2-space indentation in all files
- Trailing commas in multi-line objects and arrays

**Linting:**
- ESLint 8.x configured via `.eslintrc.cjs`
- Extends: `eslint:recommended`, `plugin:react/recommended`, `plugin:react/jsx-runtime`, `plugin:react-hooks/recommended`
- `react/prop-types` is **disabled** — no PropTypes validation required or used
- `react-refresh/only-export-components` set to `warn` with `allowConstantExport: true`
- Max warnings set to 0 in lint script: `--max-warnings 0`
- ES2020 environment, `sourceType: 'module'`

**JSX Style:**
- Inline conditional className using template literals: `` `px-4 py-2 ${condition ? 'active' : 'inactive'}` ``
- Motion component props are written on new lines when 3+ props exist
- JSX comments use `{/* Comment text */}` with section banners: `{/* ========== SECTION ========== */}`
- Section banners also used as JS comments: `// ============================================`

## Import Organization

**Order (observed pattern):**
1. React core imports: `import React, { useState, useEffect } from 'react'`
2. Third-party library imports (react-router-dom, framer-motion, lucide-react)
3. Internal page imports (in `App.jsx`)
4. Internal shared component imports
5. Internal section component imports (in page files)

**No path aliases** — all internal imports use relative paths: `'../components/shared/SharedComponents'`, `'./pages/Home'`

**Named vs default:**
- Pages are default imports: `import Home from './pages/Home'`
- Shared utilities are named imports: `import { PremiumButton, springConfigs } from '../components/shared/SharedComponents'`
- Lucide icons are always named imports: `import { Menu, X, ArrowRight } from 'lucide-react'`

## Animation Conventions

**Framer Motion:**
- Spring physics configs centralized in `src/components/shared/SharedComponents.jsx` as `springConfigs`
- Custom easing curve used consistently: `ease: [0.22, 1, 0.36, 1]`
- Animation variants (e.g. `fadeInUp`, `scaleIn`, `cinematicStagger`) are exported from SharedComponents and reused across pages
- `useInView` used with `{ once: true, margin: "-100px" }` for scroll-triggered animations
- `useSpring` wraps `useTransform` values for smooth interpolation

**Tailwind CSS:**
- Utility-first, no custom CSS classes defined outside `src/index.css`
- Custom utilities defined in `src/index.css` using `@layer utilities`: `.glass`, `.glass-dark`
- Color palette: slate (primary neutral), cyan (primary brand), green (secondary brand), orange (accent)
- Brand colors defined in `tailwind.config.js` under `theme.extend.colors.brand`
- Custom font: `Plus Jakarta Sans` set as default `sans` in Tailwind config and `src/index.css`
- Responsive pattern: mobile-first, breakpoints `md:` and `lg:` used most frequently

## Error Handling

**Form Validation:**
- Client-side validation in a dedicated `validate()` function that returns boolean
- Error state held in `errors` object keyed by field name: `const [errors, setErrors] = useState({})`
- Errors rendered inline below each field with `text-red-600` class
- On submit failure, `errors.submit` key used for general submit errors
- Bot honeypot field (`bot-field`) checked as part of validation

**Async / Network:**
- `try/catch` used around `fetch` calls in `src/pages/Contact.jsx`
- Network errors set an error message in `errors.submit` state
- HTTP non-ok responses checked explicitly with `res.ok`
- No global error boundary component detected

**No `console.log` or `console.error` calls in source** — clean production code

## Comments

**Section Banners (heavy use):**
```jsx
// ============================================
// NAVBAR COMPONENT
// ============================================
```

**Inline JSX Section Markers:**
```jsx
{/* ========== LAYERED ANIMATED BACKGROUNDS ========== */}
```

**Inline clarification comments** used for non-obvious logic:
```jsx
// Close mobile menu when route changes
// If we're on a different page, navigate to Why Us and then scroll
```

**No JSDoc** — functions have no type annotations or doc comments

## Function Design

**Size:** Components range from small utility SVGs (10-30 lines) to large page components (200+ lines). No enforced size limit.

**Parameters:**
- Component props use destructuring: `({ children, onClick, variant = "primary", className = "" })`
- Default parameter values set inline in destructuring
- No explicit PropTypes — prop shapes are inferred from usage

**Return Values:**
- Components always return JSX
- Utility functions return primitives or objects (e.g. `validate()` returns boolean, `encode()` returns string)

## Module Design

**Exports:**
- `src/components/shared/SharedComponents.jsx` is the central shared module — exports SVGs, animation variants, spring configs, and reusable UI components as named exports
- Page files export a single default component
- `src/App.jsx` exports `App` as default; helper components (`Navbar`, `Footer`, `AppContent`) are module-private (not exported)

**Barrel Files:** None — no `index.js` re-export files. Imports go directly to file paths.

**Co-location:** Section components that belong to a single page feature (`CloseDealsSection`, `LeadCaptureSection`, etc.) live in `src/components/sections/` and are imported only by the relevant page.

---

*Convention analysis: 2026-04-18*
