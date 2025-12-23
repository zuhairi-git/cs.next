'use client';

import type { HTMLAttributes } from 'react';

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export default function GlassCard({ className = '', ...props }: GlassCardProps) {
  return <div className={`glass-card ${className}`.trim()} {...props} />;
}
