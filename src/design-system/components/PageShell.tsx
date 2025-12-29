'use client';

import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen text-[var(--starlight)] selection:bg-purple-500 selection:text-white overflow-hidden">
      {children}
    </div>
  );
}
