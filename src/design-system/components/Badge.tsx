'use client';

import type { ReactNode } from 'react';

type DotColor = 'green' | 'purple' | 'blue';

const dotClass: Record<DotColor, string> = {
  green: 'bg-green-400',
  purple: 'bg-purple-400',
  blue: 'bg-blue-400',
};

export default function Badge({ dot = 'purple', children }: { dot?: DotColor; children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm">
      <span className={`w-2 h-2 rounded-full ${dotClass[dot]} animate-pulse`}></span>
      <span className="text-xs font-medium tracking-wide text-[var(--text-muted)]">{children}</span>
    </div>
  );
}
