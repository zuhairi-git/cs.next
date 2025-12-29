'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--space-black)] text-[var(--starlight)] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="text-[#ffcf48] font-mono-tech text-xl tracking-widest mb-4">ERROR 404</div>
        <h1 className="text-6xl md:text-9xl font-bold mb-8 text-glow">LOST IN SPACE</h1>
        <p className="text-xl text-[var(--text-muted)] mb-12 max-w-lg mx-auto">
          The coordinates you entered do not correspond to any known system.
        </p>
        <Link href="/" className="px-8 py-4 bg-[#ffcf48] text-black font-bold tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,207,72,0.3)]">
          RETURN TO BASE
        </Link>
      </div>
    </div>
  );
}
