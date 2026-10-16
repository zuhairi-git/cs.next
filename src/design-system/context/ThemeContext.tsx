"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { isEpicTheme, type EpicTheme } from "../epicThemes";
type Theme = "dark" | "light";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  epicTheme: EpicTheme;
  setEpicTheme: (theme: EpicTheme) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [epicTheme, setEpicThemeState] = useState<EpicTheme>("interstellar");
  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.dataset.theme === "light" ? "light" : "dark");
    if (isEpicTheme(root.dataset.epicTheme))
      setEpicThemeState(root.dataset.epicTheme);
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Session-only preference. */
    }
  };
  const setEpicTheme = (next: EpicTheme) => {
    setEpicThemeState(next);
    document.documentElement.dataset.epicTheme = next;
    try {
      localStorage.setItem("cs-epic-theme", next);
    } catch {
      /* Session-only preference. */
    }
  };
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, epicTheme, setEpicTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
