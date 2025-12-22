'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-[#ffcf48] selection:text-black overflow-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-[#030305]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/img/logo.png" 
              alt="CoreScene Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700"
            />
            <span className="font-bold text-xl tracking-widest uppercase font-mono-tech">CoreScene</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-widest">
            <Link href="/about" className="text-[#ffcf48] transition-colors">MISSION DATA</Link>
            <Link href="/#platforms" className="text-gray-400 hover:text-[#ffcf48] transition-colors">SYSTEMS</Link>
            <Link href="/#process" className="text-gray-400 hover:text-[#ffcf48] transition-colors">TRAJECTORY</Link>
            <Link href="/#contact" className="px-5 py-2.5 border border-white/20 hover:border-[#ffcf48] hover:text-[#ffcf48] transition-all">
              INITIATE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <i className={`fa-duotone ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#030305] border-b border-white/10 p-6 flex flex-col gap-4 font-mono-tech">
            <Link href="/about" className="text-lg text-[#ffcf48]" onClick={() => setIsMenuOpen(false)}>MISSION DATA</Link>
            <Link href="/#platforms" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>SYSTEMS</Link>
            <Link href="/#process" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>TRAJECTORY</Link>
            <Link href="/#contact" className="text-lg text-[#ffcf48]" onClick={() => setIsMenuOpen(false)}>INITIATE</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-[#ffcf48]/30 bg-[#ffcf48]/10 rounded-full">
            <span className="font-mono-tech text-[#ffcf48] text-xs tracking-[0.2em]">CLASSIFIED: MISSION LOGS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">THE ENDURANCE<br />INITIATIVE.</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            We are a team of digital astronauts based in Espoo, Finland. Our mission is to explore the unknown and bring back the future of web design.
          </p>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="hud-card p-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <i className="fa-duotone fa-rocket-launch text-[#ffcf48]"></i>
              EXPLORATION
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              &quot;We&apos;ve always defined ourselves by the ability to overcome the impossible.&quot;
            </p>
            <p className="text-gray-400 leading-relaxed">
              We don&apos;t just build websites; we build worlds. We push the boundaries of what&apos;s possible in the browser, using cutting-edge technology to create immersive experiences that captivate and convert.
            </p>
          </div>
          <div className="hud-card p-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <i className="fa-duotone fa-atom text-[#ffcf48]"></i>
              GRAVITY
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              &quot;Gravity crosses all dimensions, including time.&quot;
            </p>
            <p className="text-gray-400 leading-relaxed">
              We understand the weight of your brand. We create digital gravity that pulls customers in and keeps them in your orbit. Our designs are grounded in strategy but aim for the stars.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Location */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">BASE OF OPERATIONS.</h2>
              <div className="font-mono-tech text-[#ffcf48] text-xs mb-8">COORDINATES: 60.2055° N, 24.6559° E</div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Located in the tech hub of Espoo, Finland, we operate at the intersection of design and technology. Like the rangers of old, we are small, agile, and dedicated to the mission.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-xs font-mono-tech text-gray-500">MISSION SUCCESS RATE</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-xs font-mono-tech text-gray-500">SYSTEM MONITORING</div>
                </div>
              </div>
            </div>
            <div className="hud-card p-1 aspect-video relative overflow-hidden group">
              {/* Abstract Map Representation */}
              <div className="absolute inset-0 bg-[#030305] flex items-center justify-center">
                <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffcf48] via-transparent to-transparent"></div>
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 opacity-10">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border border-[#ffcf48]"></div>
                  ))}
                </div>
                <div className="absolute text-[#ffcf48] font-mono-tech text-xs animate-pulse">
                  <i className="fa-solid fa-location-dot mr-2"></i>
                  ESPOO, FINLAND
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image 
              src="/img/logo.png" 
              alt="CoreScene Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 grayscale opacity-50 hover:opacity-100 transition-opacity"
            />
            <span className="font-bold text-lg tracking-widest font-mono-tech text-gray-500">CORESCENE</span>
          </div>
          <div className="text-gray-600 text-xs font-mono-tech">
            &copy; {new Date().getFullYear()} CORESCENE SYSTEMS. ENDURANCE.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-[#ffcf48] transition-colors"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-[#ffcf48] transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-gray-600 hover:text-[#ffcf48] transition-colors"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
