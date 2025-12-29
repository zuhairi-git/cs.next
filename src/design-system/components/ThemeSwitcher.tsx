'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <i className={`fa-duotone fa-thin ${theme === 'dark' ? 'fa-sun-bright' : 'fa-moon'} text-lg`}></i>
    </button>
  );
}
