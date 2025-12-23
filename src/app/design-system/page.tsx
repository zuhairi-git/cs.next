'use client';

import Link from 'next/link';
import NebulaBackground from '@/design-system/components/NebulaBackground';
import PageShell from '@/design-system/components/PageShell';
import Navbar from '@/design-system/components/Navbar';
import Footer from '@/design-system/components/Footer';
import GlassCard from '@/design-system/components/GlassCard';
import Badge from '@/design-system/components/Badge';
import Button from '@/design-system/components/Button';

function Swatch({ name, value, className }: { name: string; value: string; className: string }) {
  return (
    <div className="glass-card p-6 flex items-center justify-between gap-6">
      <div>
        <div className="text-white font-bold">{name}</div>
        <div className="text-sm text-gray-400 font-mono">{value}</div>
      </div>
      <div className={`w-12 h-12 rounded-2xl border border-white/10 ${className}`} />
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <PageShell>
      <NebulaBackground />
      <Navbar active="home" />

      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <Badge dot="purple">DESIGN SYSTEM</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-6 leading-tight">
                CoreScene <span className="text-gradient-purple">UI Catalog</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                A visual reference of the current UI patterns, extracted carefully so we can reuse them without changing the look.
              </p>

              <div className="flex flex-wrap gap-3 mt-10">
                <Button href="#colors" variant="secondary" className="px-6 py-3">Colors</Button>
                <Button href="#typography" variant="secondary" className="px-6 py-3">Typography</Button>
                <Button href="#buttons" variant="secondary" className="px-6 py-3">Buttons</Button>
                <Button href="#cards" variant="secondary" className="px-6 py-3">Cards</Button>
                <Button href="#forms" variant="secondary" className="px-6 py-3">Forms</Button>
                <Button href="#icons" variant="secondary" className="px-6 py-3">Icons</Button>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:sticky lg:top-28">
              <GlassCard className="p-8">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-4">QUICK LINKS</div>
                <div className="flex flex-col gap-3 text-sm text-gray-300">
                  <Link className="hover:text-white transition-colors" href="#colors">Colors</Link>
                  <Link className="hover:text-white transition-colors" href="#typography">Typography</Link>
                  <Link className="hover:text-white transition-colors" href="#buttons">Buttons</Link>
                  <Link className="hover:text-white transition-colors" href="#cards">Cards</Link>
                  <Link className="hover:text-white transition-colors" href="#forms">Forms</Link>
                  <Link className="hover:text-white transition-colors" href="#icons">Icons</Link>
                </div>
                <div className="border-t border-white/10 mt-6 pt-6">
                  <div className="text-xs text-gray-500">
                    Inventory + plan lives in <span className="text-gray-300 font-mono">src/design-system/README.md</span>.
                  </div>
                </div>
              </GlassCard>
            </aside>
          </div>

          {/* Colors */}
          <section id="colors" className="pt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Swatch name="Space Black" value="--space-black" className="bg-[#050507]" />
              <Swatch name="Nebula Purple" value="--nebula-purple" className="bg-[#7c3aed]" />
              <Swatch name="Nebula Blue" value="--nebula-blue" className="bg-[#38bdf8]" />
              <Swatch name="Nebula Pink" value="--nebula-pink" className="bg-[#f472b6]" />
              <Swatch name="Glass BG" value="--glass-bg" className="bg-white/5" />
              <Swatch name="Glass Border" value="--glass-border" className="bg-white/10" />
            </div>
          </section>

          {/* Typography */}
          <section id="typography" className="pt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Typography</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">HEADINGS</div>
                <div className="space-y-4">
                  <div className="text-5xl md:text-7xl font-bold">Hero Heading</div>
                  <div className="text-4xl md:text-6xl font-bold">Section Heading</div>
                  <div className="text-2xl font-bold">Card Heading</div>
                </div>
              </GlassCard>
              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">GRADIENT TEXT</div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-gradient-purple">text-gradient-purple</div>
                  <div className="text-4xl font-bold text-gradient-blue">text-gradient-blue</div>
                  <div className="text-4xl font-bold text-gradient">text-gradient</div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Body copy uses muted gray with relaxed leading for readability on dark space backgrounds.
                  </p>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Buttons */}
          <section id="buttons" className="pt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Buttons</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">PRIMARY (.btn-primary)</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#" className="text-sm">Initiate Sequence</Button>
                  <Button href="#" className="text-base px-8 py-4">Initialize Project</Button>
                  <Button href="#" className="text-lg px-10 py-4 shadow-lg shadow-purple-500/20">Start Countdown</Button>
                </div>
              </GlassCard>
              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">SECONDARY (glass border)</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#" variant="secondary" className="px-8 py-4">Analyze Systems</Button>
                  <Button href="#" variant="secondary" className="px-6 py-3 text-sm">Secondary Small</Button>
                  <Button href="#" variant="secondary" className="px-10 py-4">Secondary Large</Button>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Cards */}
          <section id="cards" className="pt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <GlassCard className="p-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <i className="fa-duotone fa-thin fa-rocket text-3xl text-purple-200"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Glass Card</h3>
                <p className="text-gray-400 leading-relaxed">
                  Base glassmorphism card with hover lift and subtle border brightening.
                </p>
              </GlassCard>

              <GlassCard className="p-10 border-l-4 border-l-purple-500">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">ACCENTED</div>
                <h3 className="text-2xl font-bold text-white mb-4">Border Accent</h3>
                <p className="text-gray-400 leading-relaxed">
                  Same card, with a left accent border used on About/How-It-Works headers.
                </p>
              </GlassCard>

              <GlassCard className="p-10 relative overflow-hidden border-purple-500/50 shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">FEATURED</div>
                <h3 className="text-2xl font-bold text-white mb-4">Highlighted Plan</h3>
                <p className="text-gray-400 leading-relaxed">
                  Used for the middle pricing tier with stronger border + glow.
                </p>
              </GlassCard>
            </div>
          </section>

          {/* Forms */}
          <section id="forms" className="pt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Forms</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">FIELDS</div>
                <div className="space-y-6">
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold tracking-widest text-gray-500 ml-4">CALLSIGN</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                      placeholder="Name"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold tracking-widest text-gray-500 ml-4">FREQUENCY (EMAIL)</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                      placeholder="Email"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold tracking-widest text-gray-500 ml-4">TRANSMISSION DATA</label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all resize-none"
                      placeholder="Message"
                    />
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">STATUS + SUBMIT</div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border border-green-500/30 bg-green-500/10 text-green-200 text-sm">
                    Transmission received. We&apos;ll respond shortly.
                  </div>
                  <div className="p-4 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-200 text-sm">
                    Signal lost. Please retry.
                  </div>
                  <Button
                    variant="primary"
                    className="w-full justify-center text-base px-8 py-4 shadow-lg shadow-purple-500/25"
                    onClick={(e) => e.preventDefault()}
                  >
                    Send Transmission
                  </Button>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Icons */}
          <section id="icons" className="pt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Icons</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">DUOTONE THIN</div>
                <div className="flex flex-wrap items-center gap-6 text-purple-300">
                  <i className="fa-duotone fa-thin fa-rocket text-4xl"></i>
                  <i className="fa-duotone fa-thin fa-bullseye text-4xl text-blue-300"></i>
                  <i className="fa-duotone fa-thin fa-gem text-4xl text-pink-300"></i>
                  <i className="fa-duotone fa-thin fa-chart-line text-4xl"></i>
                </div>
              </GlassCard>
              <GlassCard className="p-10">
                <div className="text-xs font-bold tracking-widest text-gray-500 mb-6">BRANDS</div>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <i className="fa-brands fa-hubspot text-2xl text-white"></i>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                    <i className="fa-brands fa-wordpress text-2xl text-white"></i>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg">
                    <i className="fa-brands fa-wix text-2xl text-white"></i>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>

          <section className="pt-24">
            <GlassCard className="p-10 text-center">
              <div className="text-xs font-bold tracking-widest text-gray-500 mb-4">NEXT</div>
              <h3 className="text-2xl font-bold mb-4">Extract components gradually</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                The goal is to migrate each page from inline markup to reusable components with no visual changes.
              </p>
              <Button href="/" variant="secondary" className="px-8 py-4">Return to Home</Button>
            </GlassCard>
          </section>
        </div>
      </main>

      <Footer />
    </PageShell>
  );
}
