'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--space-black)] relative z-10 overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image 
                src="/img/logo.png" 
                alt="CoreScene logo" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.25)] group-hover:scale-110 transition-transform" 
              />
              <span className="font-bold text-2xl tracking-tight text-[var(--starlight)]">CoreScene</span>
            </Link>
            <p className="text-[var(--text-muted)] leading-relaxed max-w-sm">
              High-performance web architectures for HubSpot, WordPress, and Wix. 
              We build digital gravity that pulls the world to you.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/ali-zuhairi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--starlight)] hover:border-purple-500/50 transition-all group shadow-soft"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-lg group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-sm font-bold tracking-widest text-[var(--text-muted)] mb-6 uppercase">Coordinates</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#platforms" className="text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Systems
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Trajectory
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Info Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-widest text-[var(--text-muted)] mb-6 uppercase">Protocols</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/design-system" className="text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Design Schematics
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} CoreScene Systems.</span>
            <span className="hidden md:inline text-[var(--glass-border)]">|</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Operational in Espoo, Finland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
