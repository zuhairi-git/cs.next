'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

type ActiveKey = 'home' | 'trajectory' | 'about' | 'none';

export default function Navbar({ active = 'none' }: { active?: ActiveKey }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const desktopLink = (key: ActiveKey, label: string, href: string) => (
    <Link
      href={href}
      className={
        key !== 'none' && active === key
          ? 'text-[var(--starlight)] transition-colors'
          : 'text-[var(--text-muted)] hover:text-[var(--starlight)] transition-colors'
      }
    >
      {label}
    </Link>
  );

  const mobileLinkClass = (key: ActiveKey) => {
    const base = 'text-3xl font-bold tracking-tight transition-all duration-300 hover:text-[var(--starlight)] hover:scale-105';
    if (key !== 'none' && active === key) {
      return `${base} text-[var(--starlight)] text-gradient-purple`;
    }
    return `${base} text-[var(--text-muted)]`;
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isMenuOpen ? 'bg-[var(--nav-bg)]' : 'bg-[var(--nav-bg)]/80 backdrop-blur-md border-b border-[var(--nav-border)]'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/img/logo.png"
            alt="CoreScene logo"
            width={56}
            height={56}
            priority
            className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.25)] group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-xl tracking-tight text-[var(--starlight)]">CoreScene</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {desktopLink('home', 'Home', '/')}
          {desktopLink('none', 'Systems', '/#platforms')}
          {desktopLink('trajectory', 'Trajectory', '/how-it-works')}
          {desktopLink('about', 'About', '/about')}
          <ThemeSwitcher />
          <Link href="/#contact" className="btn-primary text-sm">
            Initiate Sequence
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-[var(--starlight)] p-2 relative z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-end gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-[var(--space-black)]/95 backdrop-blur-2xl z-40 transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <div className="flex flex-col items-center gap-8 text-center relative z-10">
          <Link 
            href="/" 
            className={mobileLinkClass('home')} 
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: '100ms' }}
          >
            Home
          </Link>
          <Link 
            href="/#platforms" 
            className={mobileLinkClass('none')} 
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: '150ms' }}
          >
            Systems
          </Link>
          <Link 
            href="/how-it-works" 
            className={mobileLinkClass('trajectory')} 
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: '200ms' }}
          >
            Trajectory
          </Link>
          <Link 
            href="/about" 
            className={mobileLinkClass('about')} 
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: '250ms' }}
          >
            About
          </Link>
          
          <div className="pt-8" style={{ transitionDelay: '300ms' }}>
            <Link
              href="/#contact"
              className="btn-primary text-lg px-10 py-4 shadow-lg shadow-purple-500/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Initiate Sequence
            </Link>
          </div>
        </div>

        {/* Footer Info in Menu */}
        <div className="absolute bottom-10 text-[var(--text-muted)] text-sm">
          <p>© 2025 CoreScene</p>
        </div>
      </div>
    </nav>
  );
}
