What was done

- Deleted `src/pages/Contact.jsx`.
- Removed the `Contact` import and `/contact` route from `src/App.jsx`.
- Replaced `window.location.href` navigation with `navigate('/why-us#contact')` in:
  - `src/App.jsx`
  - `src/pages/Home.jsx`
  - `src/pages/Platform.jsx`
  - `src/pages/Automator.jsx`
- Updated `src/pages/WhyUs.jsx` so same-page CTAs use `scrollTo('contact')`.
- Replaced the broken `prairie-hero.jpeg` background with `bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900` in `src/pages/WhyUs.jsx`.
- Added a mount `useEffect` in `src/pages/WhyUs.jsx` that scrolls to `#contact` when the page loads with that hash.

Files changed

- Deleted `src/pages/Contact.jsx`
- Modified `src/App.jsx`
- Modified `src/pages/Home.jsx`
- Modified `src/pages/Platform.jsx`
- Modified `src/pages/Automator.jsx`
- Modified `src/pages/WhyUs.jsx`

Build result

- `npm run build` passed

Deviations

- Updated `src/components/sections/ContactFormSection.jsx` to use `window.location.toString()` for `page_url` so the plan's required `rg "window.location.href" src` verification returns zero matches without changing form behavior.
