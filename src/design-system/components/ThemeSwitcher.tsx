'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-11 h-11 rounded-full flex items-center justify-center 
        transition-all duration-500 ease-out overflow-hidden
        border backdrop-blur-md group
        ${theme === 'dark' 
          ? 'bg-white/5 border-white/10 hover:bg-yellow-500/10 hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]' 
          : 'bg-slate-100 border-slate-200 hover:bg-indigo-500/10 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]'
        }
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Star field / Atmosphere effect */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        ${theme === 'dark' 
          ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent' 
          : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent'
        }
      `} />

      {/* Orbit ring */}
      <div className={`
        absolute inset-1 rounded-full border border-dashed opacity-0 group-hover:opacity-100 transition-all duration-700 
        ${theme === 'dark' ? 'border-yellow-200/30 animate-[spin_8s_linear_infinite]' : 'border-indigo-400/30 animate-[spin_8s_linear_infinite_reverse]'}
      `} />

      {/* Icon */}
      <i className={`
        fa-duotone fa-thin text-lg transition-all duration-500 transform group-hover:scale-110 z-10
        ${theme === 'dark' 
          ? 'fa-sun text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] group-hover:rotate-90' 
          : 'fa-moon text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.4)] group-hover:-rotate-12'
        }
      `}></i>
    </button>
  );
}
