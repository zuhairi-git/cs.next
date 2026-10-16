import type { ReactNode } from "react";
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell min-h-screen text-[var(--starlight)]">
      {children}
    </div>
  );
}
