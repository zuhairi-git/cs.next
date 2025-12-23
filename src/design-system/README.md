# CoreScene Design System

This folder tracks the UI patterns currently used across the app and the plan to extract them into reusable components **without changing visuals**.

## Goals

- Preserve the current look-and-feel (glassmorphism, nebula background, gradients, spacing).
- Extract components incrementally (page-by-page, zero visual diffs).
- Provide a single demo page at `/design-system` to visually validate all variants.

## Component Inventory (Current App)

> **Legend**
> - **Inline**: implemented directly in pages today
> - **Shared**: implemented in `src/components/`
> - **Planned**: will be extracted to `src/design-system/components/`

| Component / Pattern | Current status | Where it exists now | Key variants to support (must match current UI) | Planned extracted component |
|---|---|---|---|---|
| Nebula background (blobs + stars) | Inline | `src/app/*/page.tsx` + `src/app/globals.css` | 3 blobs, starfield, fixed behind content | `NebulaBackground` |
| Page shell (root wrapper) | Inline | `src/app/*/page.tsx` | `min-h-screen`, selection styles, `overflow-hidden` | `PageShell` |
| Navigation (fixed top, desktop + mobile) | Inline | `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/how-it-works/page.tsx` | Active link state, mobile menu open/closed | `Navbar` |
| Footer | Inline | same pages as above | compact vs spaced; external links | `Footer` |
| Primary CTA button | CSS utility class | `src/app/globals.css` (`.btn-primary`) | sizes: `text-sm`, `text-base`, `text-lg` | `Button` (primary) |
| Secondary / ghost button | Inline | `src/app/page.tsx` (hero secondary) and other links | bordered glass button | `Button` (secondary) |
| Glass card | CSS utility class | `.glass-card` in `src/app/globals.css` | padding sizes, hover behavior, accented borders | `GlassCard` |
| Gradient text | CSS utility class | `src/app/globals.css` | `text-gradient`, `text-gradient-purple`, `text-gradient-blue` | `GradientText` (optional) |
| Badge / pill label | Inline | all pages (header badges) | dot color: green/blue/purple; copy text | `Badge` |
| Icon pattern (FA duotone/thin & brands) | Inline | all pages | duotone thin icons + brand icons | `Icon` (wrap existing pattern) |
| Scroll-to-top | Shared | `src/components/ScrollToTopButton.tsx` | visible after scroll, yellow button | keep in `src/components/` |
| Platform card grid | Inline | `src/app/page.tsx` | 3-col responsive grid, list with check icons | `PlatformCard` |
| Pricing card | Inline | `src/app/page.tsx` | featured middle card variant | `PricingCard` |
| Timeline / phase step | Inline | `src/app/how-it-works/page.tsx` | 3 phases with colored line/border | `PhaseStep` |
| Form fields | Inline | `src/app/page.tsx` | label + input/textarea + states | `TextField`, `TextArea`, `FormStatus` |

## Extraction Plan (Do One-by-One)

1. **Foundations**: `NebulaBackground`, `PageShell`, `GlassCard`, `Button`, `Badge`.
2. **Layout**: `Navbar`, `Footer` (ensure mobile menu behavior matches existing pages).
3. **Content cards**: `PlatformCard`, `PricingCard`, `PhaseStep`.
4. **Forms**: `TextField`, `TextArea`, `FormStatus`, `SubmitButton` (loading + success/error).
5. **Clean-up**: replace inline markup in each page with extracted components, verifying no layout shifts.

## Demo

- Visit `/design-system` to see all primitives and patterns in one place.
