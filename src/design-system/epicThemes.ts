export const epicThemes = [
  {
    id: "interstellar",
    name: "Interstellar",
    chapter: "01 / Beyond the familiar",
    story:
      "A leap into the unknown. Gravitational light, deep space, and the human instinct to go further.",
    design: "Orbital geometry · warm starlight · precise typography",
  },
  {
    id: "dune",
    name: "Dune",
    chapter: "02 / A different horizon",
    story:
      "A world shaped by intention. Desert horizons, monumental forms, and the patience to build something that endures.",
    design: "Desert contours · sunlit copper · editorial typography",
  },
] as const;
export type EpicTheme = (typeof epicThemes)[number]["id"];
export const isEpicTheme = (value: unknown): value is EpicTheme =>
  epicThemes.some((theme) => theme.id === value);
// Restore both preferences before paint, including when storage is unavailable.
export const themeScript = `(function(){var r=document.documentElement,t='dark',e='interstellar';try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark')t=s;var p=localStorage.getItem('cs-epic-theme');if(p==='interstellar'||p==='dune')e=p}catch(_){}r.dataset.theme=t;r.dataset.epicTheme=e})();`;
