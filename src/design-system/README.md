# CoreScene Epic design system

Interstellar and Dune are independent visual stories under the **Epic theme** picker. Appearance (`data-epic-theme`) and mode (`data-theme`) are applied to the document before paint. Browser storage is optional: selections still work for the current session when storage is unavailable.

- `epicThemes.ts`: theme names, story, validation, and bootstrap script.
- `context/ThemeContext.tsx`: appearance and mode state.
- `components/EpicThemePicker.tsx`: keyboard-accessible listbox, arrow/Home/End navigation, Escape, outside-click dismissal, and focus restoration.
- `components/CinematicArtwork.tsx`: original orbital and desert SVG scenes.
- `components/Navbar.tsx`, `Footer.tsx`, `Brand.tsx`: shared navigation and identity.
- `business.ts`: shared engagements and process content.
- `../app/epic.css`: tokens, page styles, and component foundations.
- `../app/responsive.css`: mobile and tablet layouts and reduced-motion support.

Interstellar uses local Geist, warm starlight, precision rules, and orbital geometry. Dune changes the display face to Georgia, the palette to copper and sand, the panel geometry, and the artwork to desert contours. Each has light and dark palettes. `/design-system` previews the current tokens and shared components.

New styles should use semantic tokens instead of hardcoded accent colours. Existing legacy components remain available, with compatibility aliases for their token names.
