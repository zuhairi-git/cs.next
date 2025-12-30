import React from 'react';

export default function Globe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient Glow - Subtle */}
      <div className="absolute w-40 h-40 bg-[var(--nebula-blue)]/10 rounded-full blur-3xl"></div>

      {/* Decorative Rings */}
      <div className="absolute w-[110%] h-[110%] border border-[var(--text-muted)]/10 rounded-full"></div>
      <div className="absolute w-[130%] h-[130%] border border-dashed border-[var(--text-muted)]/10 rounded-full animate-[spin_60s_linear_infinite]"></div>

      {/* Main Globe */}
      <div className="relative w-64 h-64 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-[2px] overflow-hidden shadow-lg shadow-[var(--nebula-blue)]/5">
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[var(--starlight)] fill-none stroke-[0.5]">
                <circle cx="50" cy="50" r="49.5" />
                
                {/* Meridians */}
                <ellipse cx="50" cy="50" rx="15" ry="50" />
                <ellipse cx="50" cy="50" rx="30" ry="50" />
                <line x1="50" y1="0" x2="50" y2="100" />
                
                {/* Parallels */}
                <line x1="0" y1="50" x2="100" y2="50" />
                <path d="M2,30 Q50,35 98,30" />
                <path d="M2,70 Q50,65 98,70" />
                <path d="M7,15 Q50,20 93,15" />
                <path d="M7,85 Q50,80 93,85" />
            </svg>
        </div>

        {/* Location Marker */}
        <div className="absolute top-[28%] left-[58%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col items-center gap-1 group cursor-default">
                <div className="relative">
                    <div className="w-2 h-2 bg-[var(--nebula-blue)] rounded-full relative z-10"></div>
                    <div className="w-2 h-2 bg-[var(--nebula-blue)] rounded-full absolute inset-0 animate-ping opacity-75"></div>
                    <div className="w-8 h-8 bg-[var(--nebula-blue)]/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
                </div>
                
                {/* Label - Minimal */}
                <div className="text-[10px] font-mono text-[var(--starlight)] tracking-widest opacity-80 bg-[var(--space-black)]/50 px-2 rounded backdrop-blur-sm border border-[var(--glass-border)]">
                    ESPOO
                </div>
            </div>
        </div>
        
        {/* Reflection/Shine */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--starlight)]/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
