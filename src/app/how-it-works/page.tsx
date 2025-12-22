'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorks() {
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
            <Link href="/about" className="text-gray-400 hover:text-[#ffcf48] transition-colors">MISSION DATA</Link>
            <Link href="/#platforms" className="text-gray-400 hover:text-[#ffcf48] transition-colors">SYSTEMS</Link>
            <Link href="/how-it-works" className="text-[#ffcf48] transition-colors">TRAJECTORY</Link>
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
            <Link href="/about" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>MISSION DATA</Link>
            <Link href="/#platforms" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>SYSTEMS</Link>
            <Link href="/how-it-works" className="text-lg text-[#ffcf48]" onClick={() => setIsMenuOpen(false)}>TRAJECTORY</Link>
            <Link href="/#contact" className="text-lg text-[#ffcf48]" onClick={() => setIsMenuOpen(false)}>INITIATE</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-[#ffcf48]/30 bg-[#ffcf48]/10 rounded-full">
            <span className="font-mono-tech text-[#ffcf48] text-xs tracking-[0.2em]">OPERATIONAL PROTOCOLS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">MISSION<br />PARAMETERS.</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Three phases to launch. A calculated trajectory from concept to deployment, ensuring structural integrity and maximum velocity.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="hud-card p-8 text-center group hover:border-[#ffcf48]/50 transition-colors">
            <div className="text-4xl font-bold mb-2 text-white group-hover:text-[#ffcf48] transition-colors">€1400+</div>
            <div className="text-xs font-mono-tech text-gray-500 tracking-widest">FUEL COST</div>
          </div>
          <div className="hud-card p-8 text-center group hover:border-[#3b82f6]/50 transition-colors">
            <div className="text-4xl font-bold mb-2 text-white group-hover:text-[#3b82f6] transition-colors">1-2 WEEKS</div>
            <div className="text-xs font-mono-tech text-gray-500 tracking-widest">TIME TO ORBIT</div>
          </div>
          <div className="hud-card p-8 text-center group hover:border-[#ec4899]/50 transition-colors">
            <div className="text-4xl font-bold mb-2 text-white group-hover:text-[#ec4899] transition-colors">100%</div>
            <div className="text-xs font-mono-tech text-gray-500 tracking-widest">SYSTEM INTEGRITY</div>
          </div>
        </div>
      </section>

      {/* The Process (Phases) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-24 relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

          {/* Phase 1 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:text-right order-2 md:order-1">
              <div className="text-[#ffcf48] font-mono-tech text-xs tracking-widest mb-2">PHASE 01</div>
              <h3 className="text-3xl font-bold mb-4">COMMUNICATION & STRATEGY</h3>
              <p className="text-gray-400 leading-relaxed">
                We establish a secure uplink to discuss your vision. We analyze the target environment, define mission goals, and map out the most efficient trajectory for your brand.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#030305] border border-[#ffcf48] rounded-full flex items-center justify-center z-10 text-[#ffcf48] font-bold">1</div>
              <div className="hud-card p-8 border-[#ffcf48]/30">
                <i className="fa-duotone fa-radar text-5xl text-[#ffcf48] mb-6"></i>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ffcf48] w-1/3"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs font-mono-tech text-gray-500">
                  <span>ANALYZING...</span>
                  <span>33%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-1">
              <div className="absolute left-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#030305] border border-[#3b82f6] rounded-full flex items-center justify-center z-10 text-[#3b82f6] font-bold">2</div>
              <div className="hud-card p-8 border-[#3b82f6]/30">
                <i className="fa-duotone fa-microchip text-5xl text-[#3b82f6] mb-6"></i>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3b82f6] w-2/3"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs font-mono-tech text-gray-500">
                  <span>COMPILING...</span>
                  <span>66%</span>
                </div>
              </div>
            </div>
            <div className="order-2">
              <div className="text-[#3b82f6] font-mono-tech text-xs tracking-widest mb-2">PHASE 02</div>
              <h3 className="text-3xl font-bold mb-4">CONSTRUCTION & ASSEMBLY</h3>
              <p className="text-gray-400 leading-relaxed">
                Our engineers begin the build. We construct your digital vessel using high-grade code and responsive frameworks. You receive regular telemetry updates and have 2-3 revision cycles to fine-tune the systems.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:text-right order-2 md:order-1">
              <div className="text-[#ec4899] font-mono-tech text-xs tracking-widest mb-2">PHASE 03</div>
              <h3 className="text-3xl font-bold mb-4">LAUNCH & DEPLOYMENT</h3>
              <p className="text-gray-400 leading-relaxed">
                Final system checks complete. We ignite the engines and launch your site into the public network. Post-launch support ensures your orbit remains stable.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#030305] border border-[#ec4899] rounded-full flex items-center justify-center z-10 text-[#ec4899] font-bold">3</div>
              <div className="hud-card p-8 border-[#ec4899]/30">
                <i className="fa-duotone fa-rocket-launch text-5xl text-[#ec4899] mb-6"></i>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ec4899] w-full"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs font-mono-tech text-gray-500">
                  <span>DEPLOYED</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payload Manifest (What You Get) */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">PAYLOAD MANIFEST.</h2>
            <p className="text-gray-400">Standard equipment included in every mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-fingerprint', title: 'CUSTOM DESIGN', desc: 'Unique visual signature.' },
              { icon: 'fa-bolt', title: 'HYPER SPEED', desc: 'Optimized for velocity.' },
              { icon: 'fa-mobile-screen', title: 'RESPONSIVE', desc: 'Adapts to all viewports.' },
              { icon: 'fa-shield-check', title: 'SECURE', desc: 'Hardened defenses.' }
            ].map((item, i) => (
              <div key={i} className="hud-card p-6 hover:bg-white/5 transition-colors">
                <i className={`fa-duotone ${item.icon} text-3xl text-white mb-4`}></i>
                <h4 className="font-bold text-sm tracking-wide mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 font-mono-tech">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center hud-card p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffcf48]/10 via-transparent to-[#3b82f6]/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">READY FOR LIFT OFF?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              The window of opportunity is open. Initiate the launch sequence today.
            </p>
            <Link href="/#contact" className="inline-block px-10 py-4 bg-[#ffcf48] text-black font-bold tracking-widest hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,207,72,0.3)]">
              START COUNTDOWN
            </Link>
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
    </div>
  );
}
