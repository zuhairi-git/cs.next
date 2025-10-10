# CoreScene Next.js Project - AI Coding Agent Instructions

## Project Overview
CoreScene is a marketing website for a web design agency specializing in HubSpot, WordPress, and Wix solutions. Built with Next.js 15 (App Router) and configured for **static export deployment** (`output: 'export'`).

## Critical Architecture Decisions

### Static Export Configuration
- **All pages must be static-exportable** - no server-side features (API routes, middleware, dynamic rendering)
- Images use `unoptimized: true` in `next.config.ts` for static export compatibility
- Build output goes to `out/` directory via `npm run build`
- Use Turbopack for development: `npm run dev --turbopack`

### Routing & Navigation
- App Router structure: pages in `src/app/[route]/page.tsx`
- Client-side navigation only (no dynamic routes, ISR, or SSR)
- All page components use `'use client'` directive for interactivity
- Anchor links use `#` fragments (e.g., `/#contact`, `/#pricing`) for same-page navigation

## Design System & Styling

### Brand Colors (CSS Variables)
```css
--primary: #6366f1 (indigo)
--primary-dark: #4f46e5
--accent: #ec4899 (pink)
--accent-light: #f472b6
```

### Custom CSS Classes (globals.css)
- `.text-gradient` - Signature indigo→pink gradient text effect
- `.gradient-border` - Gradient border with mask composite technique
- `.animate-gradient` - 8s background position animation
- `.animate-float` - 6s vertical floating animation
- `.animate-pulse-glow` - 3s glowing shadow pulse for CTAs

### Component Patterns
- **Navigation**: Fixed top navbar with mobile hamburger menu, duplicated across all pages
- **Hero Sections**: Full-width with gradient backgrounds, large typography, absolute positioned blur circles
- **Cards**: White bg, rounded-3xl, shadow-lg, hover:shadow-2xl, hover:-translate-y-2/3
- **CTAs**: Gradient buttons (from-[#6366f1] to-[#ec4899]), rounded-full, bold text, hover:scale-105
- **Icons**: FontAwesome webfonts (duotone + thin styles) - webfonts located in `public/webfonts/`
  - Use `fa-duotone-thin-100.woff2` for thin duotone icons
  - Apply classes: `fa-duotone`, `fa-thin` with specific icon names
  - Alternative: react-icons library (FaRocket, FaBolt, etc.) with gradient backgrounds in rounded squares/circles

## Tech Stack Specifics

### Dependencies
- **Next.js 15.5.4** with App Router and Turbopack
- **React 19.1.0** (latest)
- **Tailwind CSS 4** - configured via `@tailwindcss/postcss`
- **EmailJS** (`@emailjs/browser`) - contact form integration
- **TypeScript 5** - strict mode enabled

### Path Aliases
- `@/*` → `./src/*` (configured in tsconfig.json)

### Font System
- Geist Sans & Geist Mono loaded via `next/font/google` in layout.tsx
- Applied as CSS variables: `var(--font-geist-sans)`, `var(--font-geist-mono)`
- **FontAwesome Icons**: Webfont files in `public/webfonts/` directory
  - Primary styles: **duotone** (`fa-duotone`) and **thin** (`fa-thin`)
  - Available weights: thin-100, light-300, regular-400, solid-900
  - Sharp variants also available for more geometric designs
  - Import FontAwesome CSS in `globals.css` if not already included

## Email Integration

### EmailJS Setup
- Legacy component in `src/Email.js` (React, not used in current pages)
- Active implementation in `src/app/page.tsx` home page contact form
- Uses refs (`formRef = useRef<HTMLFormElement>()`) and `emailjs.sendForm()`
- **TODO**: Replace placeholder credentials in page.tsx:
  ```typescript
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
  ```
- Form fields: `user_name`, `user_email`, `message` (match EmailJS template variables)

## Component Architecture

### Shared Components
- **ScrollToTopButton** (`src/components/ScrollToTopButton.tsx`): Fixed bottom-right button, appears after 300px scroll, smooth scroll behavior

### Page Structure Pattern
All pages follow this structure:
1. `'use client'` directive (required for interactivity in static export)
2. Navigation component (inline, duplicated - consider extracting to shared component)
3. Multiple sections with semantic IDs for anchor navigation
4. Footer component (inline, duplicated)
5. Mobile menu state with hamburger toggle

### Current Pages
- `/` - Home (page.tsx): Full landing page with hero, platforms, pricing, contact form
- `/about` - About (about/page.tsx): Team, values, mission, location info (Espoo, Finland)
- `/how-it-works` - Process (how-it-works/page.tsx): 3-step workflow, deliverables

## Development Workflow

### Commands
```bash
npm run dev          # Dev server with Turbopack
npm run build        # Static export to out/
npm start            # Serve production build
npm run lint         # ESLint (Next.js config + TypeScript)
```

### Build Process
1. Next.js compiles all pages
2. Static HTML/CSS/JS exported to `out/` directory
3. Images copied unoptimized (no Next.js Image Optimization API)
4. Deploy `out/` folder to any static host (Vercel, Netlify, S3, etc.)

### ESLint Configuration
- Extends `next/core-web-vitals` and `next/typescript`
- Ignores: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`

## Common Tasks & Patterns

### Adding a New Page
1. Create `src/app/[route]/page.tsx`
2. Add `'use client'` at top (required for useState, useRef, etc.)
3. Copy navigation and footer from existing page
4. Update navigation links to highlight current page
5. Follow existing section structure (pt-32 pb-20 for spacing after fixed nav)

### Adding a New Section
- Use semantic HTML5 tags: `<section id="section-name">`
- Apply gradient backgrounds: `bg-gradient-to-br from-[color] to-[color]`
- Maintain vertical rhythm: `py-20` for sections, `mb-16` for headings
- Use grid layouts: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

### Image Handling
- Place images in `public/img/` directory
- Reference as `/img/filename.png` (absolute from public root)
- Use Next.js `<Image>` component with `priority` flag for above-fold images
- Logo location: `/img/logo.png` (referenced in all navigation bars)

### Typography Scale
- Hero headings: `text-5xl md:text-7xl lg:text-8xl font-bold`
- Section headings: `text-4xl md:text-5xl font-bold`
- Body text: `text-lg md:text-xl text-gray-600`
- Apply `.text-gradient` class for brand-colored text

## Known Issues & TODOs
1. **Navigation/Footer Duplication**: Consider extracting to shared components (breaking change due to 'use client')
2. **EmailJS Credentials**: Update placeholder values in `src/app/page.tsx` contact form
3. **Legacy Email Component**: `src/Email.js` not currently used, evaluate for removal
4. **Mobile Responsiveness**: Test all pages on mobile devices, some text scales may be aggressive

## Deployment Notes
- This is a **static site** - no backend, no API routes, no dynamic rendering
- Deployed `out/` folder content must be served with proper MIME types
- Ensure hosting supports client-side routing (fallback to index.html for SPA behavior)
- Meta tags in `layout.tsx` - update title/description when adding pages

## Conventions & Patterns
- **File naming**: kebab-case for routes, PascalCase for components
- **Component exports**: Use default exports for page components
- **State management**: Local useState only (no global state library)
- **Styling**: Tailwind utility classes inline (no separate CSS modules)
- **Type safety**: TypeScript strict mode - avoid `any`, use proper interfaces
- **Animations**: Prefer Tailwind animation utilities + custom CSS keyframes in globals.css
- **No Emojis**: Never use emoji characters in code, comments, or UI text - use react-icons instead
