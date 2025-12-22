'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      {/* Nebula Background */}
      <div className="nebula-bg">
        <div className="nebula-blob nebula-blob-1"></div>
        <div className="nebula-blob nebula-blob-2"></div>
        <div className="nebula-blob nebula-blob-3"></div>
      </div>
      <div className="stars"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <i className="fa-duotone fa-planet-ringed text-white text-lg"></i>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">CoreScene</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/about" className="text-white transition-colors">About</Link>
            <Link href="/#platforms" className="hover:text-white transition-colors">Systems</Link>
            <Link href="/#process" className="hover:text-white transition-colors">Trajectory</Link>
            <Link href="/#contact" className="btn-primary text-sm">
              Initiate Sequence
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            <i className={`fa-duotone ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#050507]/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 text-lg font-medium z-50 animate-in slide-in-from-top-5">
            <Link href="/about" className="text-purple-400" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/#platforms" onClick={() => setIsMenuOpen(false)}>Systems</Link>
            <Link href="/#process" onClick={() => setIsMenuOpen(false)}>Trajectory</Link>
            <Link href="/#contact" className="text-white" onClick={() => setIsMenuOpen(false)}>Initiate Sequence</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide text-gray-300">MISSION LOGS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                The Endurance<br />
                <span className="text-gradient-blue">Initiative.</span>
              </h1>
            </div>
            <div className="flex items-end pb-2">
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl glass-card p-8 border-l-4 border-l-purple-500">
                We are a team of digital astronauts based in Espoo, Finland. Our mission is to explore the unknown and bring back the future of web design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-12 group hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <i className="fa-duotone fa-rocket-launch text-3xl text-purple-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Exploration</h3>
            <p className="text-gray-400 leading-relaxed">
              &quot;We&apos;ve always defined ourselves by the ability to overcome the impossible.&quot; We push the boundaries of what&apos;s possible in the browser, venturing into new territories of design and interaction.
            </p>
          </div>
          <div className="glass-card p-12 group hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <i className="fa-duotone fa-atom text-3xl text-blue-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Gravity</h3>
            <p className="text-gray-400 leading-relaxed">
              &quot;Gravity crosses all dimensions, including time.&quot; We create digital gravity that pulls customers in and keeps them in your orbit through compelling storytelling and immersive experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Location */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Base of <span className="text-gradient-purple">Operations</span></h2>
              <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 font-mono text-blue-400 text-xs mb-8 tracking-widest">
                COORDINATES: 60.2055° N, 24.6559° E
              </div>
              <p className="text-gray-400 mb-12 leading-relaxed text-lg max-w-md">
                Located in the tech hub of Espoo, Finland, we operate at the intersection of design and technology. Like the rangers of old, we are small, agile, and dedicated to the mission.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm font-medium text-gray-500 tracking-wide">MISSION SUCCESS</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm font-medium text-gray-500 tracking-wide">SYSTEM MONITORING</div>
                </div>
              </div>
            </div>

            <div className="glass-card aspect-video relative overflow-hidden group flex items-center justify-center">
              {/* Abstract Map Representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
              
              {/* Animated Rings */}
              <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Location Marker */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full relative shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                </div>
                <div className="text-white font-bold tracking-widest text-sm bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  ESPOO, FINLAND
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#050507] relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <i className="fa-duotone fa-planet-ringed text-white text-[10px]"></i>
            </div>
            <span className="font-bold text-gray-300">CoreScene Systems</span>
            <span className="mx-2 text-gray-700">|</span>
            <span>Est. 2025</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
