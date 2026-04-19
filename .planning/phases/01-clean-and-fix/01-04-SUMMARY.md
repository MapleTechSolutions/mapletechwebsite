What was done

- Extracted these seven inline components from `src/pages/Automator.jsx` into `src/components/sections/`:
  - `DigitalVoiceWave.jsx` — 100 lines
  - `PulseCallGraphic.jsx` — 130 lines
  - `LoopGraphic.jsx` — 142 lines
  - `DocBuilderGraphic.jsx` — 145 lines
  - `ResultBadge.jsx` — 17 lines
  - `ZigZagFeature.jsx` — 145 lines
  - `ToolCard.jsx` — 51 lines
- Updated `src/pages/Automator.jsx` to import all seven extracted components and start directly at `export default function Automator()`.
- Confirmed `src/pages/Automator.jsx` no longer contains inline definitions for those seven components.

Files changed

- Created `src/components/sections/DigitalVoiceWave.jsx`
- Created `src/components/sections/PulseCallGraphic.jsx`
- Created `src/components/sections/LoopGraphic.jsx`
- Created `src/components/sections/DocBuilderGraphic.jsx`
- Created `src/components/sections/ResultBadge.jsx`
- Created `src/components/sections/ZigZagFeature.jsx`
- Created `src/components/sections/ToolCard.jsx`
- Modified `src/pages/Automator.jsx`

Import corrections made

- `PulseCallGraphic.jsx` imports `Phone` and `CheckCircle` from `lucide-react`
- `LoopGraphic.jsx` imports `FileText`, `Clock`, `MessageSquare`, and `CheckCircle` from `lucide-react`
- `DocBuilderGraphic.jsx` imports `AnimatePresence` from `framer-motion`
- `ResultBadge.jsx` imports `springConfigs` from `../shared/SharedComponents`
- `ZigZagFeature.jsx` imports `ResultBadge` from `./ResultBadge` and uses the `../shared/SharedComponents` path
- `ToolCard.jsx` imports `springConfigs` from `../shared/SharedComponents`

Build result

- `npm run build` passed

Final line count

- `src/pages/Automator.jsx` — 594 lines

Deviations

- none
