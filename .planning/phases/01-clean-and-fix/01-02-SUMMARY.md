What was done

- Created `src/components/sections/ContactFormSection.jsx` by extracting `encode` and `ContactForm` from `src/pages/Contact.jsx`.
- Updated `src/pages/WhyUs.jsx` to import `ContactForm` from `../components/sections/ContactFormSection`.

Files changed

- Created `src/components/sections/ContactFormSection.jsx`
- Modified `src/pages/WhyUs.jsx`

Imports brought over

- `React`, `useState`, `useEffect` from `react`
- `motion` from `framer-motion`
- `CheckCircle2`, `AlertCircle`, `Sparkles`, `Send`, `User`, `Mail`, `Phone`, `Building2`, `Briefcase`, `ArrowRight` from `lucide-react`
- `springConfigs` from `../shared/SharedComponents`

Build result

- `npm run build` passed

Deviations

- none
