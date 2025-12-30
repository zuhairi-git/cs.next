import React from 'react';

export default function Globe() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Globe Sphere */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 shadow-[0_0_40px_rgba(79,70,229,0.4)] overflow-hidden backdrop-blur-sm">
        
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-indigo-300 fill-none stroke-[0.5]">
                <circle cx="50" cy="50" r="49.5" />
                <ellipse cx="50" cy="50" rx="20" ry="50" />
                <ellipse cx="50" cy="50" rx="40" ry="50" />
                <path d="M0,50 L100,50" />
                <path d="M50,0 L50,100" />
                <path d="M2,30 Q50,40 98,30" fill="none" />
                <path d="M2,70 Q50,60 98,70" fill="none" />
            </svg>
        </div>

        {/* Simplified Landmasses (Abstract) - REMOVED */}

        {/* Espoo Marker */}
        {/* Approx location on this abstract map (Europe is top-center-ish) */}
        <div className="absolute top-[25%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative flex items-center justify-center group">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-2 h-2 bg-cyan-300 rounded-full relative shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                
                {/* Label */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-200 whitespace-nowrap">
                    Espoo
                </div>
            </div>
        </div>
      </div>

      {/* Outer Rings */}
      <div className="absolute inset-[-10%] border border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute inset-[-20%] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
    </div>
  );
}
