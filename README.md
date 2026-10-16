# CoreScene

A Next.js 15 static website for an independent digital and AI studio. The business model, target buyer, pricing hypotheses, and validation plan are in [BUSINESS_STRATEGY.md](BUSINESS_STRATEGY.md).

## Run

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build` (exports to `out/`)

Development uses `.next/`; production uses `.next-production/`. Builds can run alongside the development server without overwriting its files. The exported website goes to `out/`.

## Epic themes

Use **Epic theme** in the navigation to select **Interstellar** or **Dune**. Appearance and light/dark mode are independent and persist locally. Fonts are hosted in `public/fonts`; the build does not fetch Google Fonts. The cinematic artwork is original SVG, with no remote image dependency.

Theme definitions: `src/design-system/epicThemes.ts`. Tokens and desktop styles: `src/app/epic.css`. Responsive styles: `src/app/responsive.css`. Shared engagement and process content: `src/design-system/business.ts`. Preview the foundations at `/design-system`.

## Contact

Without email service configuration, the form prepares a `mailto:` draft for the visitor to open and send. It does not claim the enquiry was submitted.

For direct EmailJS submission, set all three values in `.env.local` before building:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Configure the EmailJS template to include `user_name`, `user_email`, `website`, `interest`, and `message`, and restrict its allowed origins to the production and intended development domains. These browser-facing identifiers are not server secrets. No backend is required by the static export.
