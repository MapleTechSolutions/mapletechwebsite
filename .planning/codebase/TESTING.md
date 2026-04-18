# Testing

_Last updated: 2026-04-18_

## Status

**No tests exist** in the main project. Testing infrastructure is absent.

## Main Project

- No test framework installed (`package.json` has no test dependencies)
- No test files found in `src/`
- No test scripts in `package.json`

## lovable-mobile-boost/ Subdirectory

- `vitest.config.ts` scaffold is present
- Zero actual test files written
- No test coverage data

## Recommended Setup (when tests are added)

- **Framework:** Vitest (compatible with Vite)
- **Component testing:** React Testing Library (`@testing-library/react`)
- **Setup file:** `src/test/setup.ts`
- **Test pattern:** `src/**/*.test.tsx` or `src/**/*.spec.tsx`

```json
// package.json additions
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
},
"devDependencies": {
  "vitest": "^1.x",
  "@testing-library/react": "^14.x",
  "@testing-library/jest-dom": "^6.x",
  "@testing-library/user-event": "^14.x"
}
```

## Coverage Targets (recommended)

- Utility functions: 80%+
- Critical UI flows: smoke tests at minimum
- API integration points: mock-based unit tests
