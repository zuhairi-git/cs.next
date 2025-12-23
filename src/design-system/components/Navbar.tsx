'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ActiveKey = 'home' | 'trajectory' | 'about' | 'none';

export default function Navbar({ active = 'none' }: { active?: ActiveKey }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopLink = (key: ActiveKey, label: string, href: string) => (
    <Link
      href={href}
      className={
        key !== 'none' && active === key
          ? 'text-white transition-colors'
          : 'hover:text-white transition-colors'
      }
    >
      {label}
    </Link>
  );

  const mobileLinkClass = (key: ActiveKey) => {
    const base = 'px-3 py-3 rounded-xl hover:bg-white/5 transition-colors';
    if (key !== 'none' && active === key) {
      return `${base} bg-white/5 border border-white/10 text-white`;
    }
    return base;
  };

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/img/logo.png"
            alt="CoreScene logo"
            width={56}
            height={56}
            priority
            className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.25)] group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-xl tracking-tight text-white">CoreScene</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {desktopLink('home', 'Home', '/')}
          {desktopLink('none', 'Systems', '/#platforms')}
          {desktopLink('trajectory', 'Trajectory', '/how-it-works')}
          {desktopLink('about', 'About', '/about')}
          <Link href="/#contact" className="btn-primary text-sm">
            Initiate Sequence
          </Link>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
          <i className={`fa-duotone fa-thin ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-[#050507]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-2 text-lg font-medium z-50 animate-in slide-in-from-top-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link href="/" className={mobileLinkClass('home')} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/#platforms" className={mobileLinkClass('none')} onClick={() => setIsMenuOpen(false)}>
            Systems
          </Link>
          <Link href="/how-it-works" className={mobileLinkClass('trajectory')} onClick={() => setIsMenuOpen(false)}>
            Trajectory
          </Link>
          <Link href="/about" className={mobileLinkClass('about')} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="btn-primary w-full justify-center text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Initiate Sequence
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
