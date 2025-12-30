'use client';
import NebulaBackground from '@/design-system/components/NebulaBackground';
import PageShell from '@/design-system/components/PageShell';
import Navbar from '@/design-system/components/Navbar';
import Footer from '@/design-system/components/Footer';
import GlassCard from '@/design-system/components/GlassCard';
import PlatformIcon from '@/design-system/components/PlatformIcon';
import Globe from '@/components/Globe';

export default function About() {
  return (
    <PageShell>
      <NebulaBackground />
      <Navbar active="about" />

      {/* Hero: Minimal & Spacy */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 relative z-10 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm mb-8">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
             <span className="text-xs font-medium tracking-wide text-[var(--text-muted)]">EST. 2024</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-[var(--starlight)] mb-8 tracking-tight">
            Inspired by the <br />
            <span className="text-gradient-purple">Cosmos.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-12">
            We build digital universes that capture attention and hold it.
            <br className="hidden md:block" />
            <span className="text-[var(--starlight)] mt-4 block text-lg opacity-80">Gravity. Singularity. Event Horizons.</span>
          </p>

          <div className="flex flex-col items-center gap-4 animate-float">
            <span className="text-sm font-medium text-[var(--text-muted)] tracking-widest uppercase opacity-70">We build with these platforms</span>
            <div className="flex gap-6 justify-center">
                <PlatformIcon platform="hubspot" size="md" />
                <PlatformIcon platform="wordpress" size="md" />
                <PlatformIcon platform="wix" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform duration-500 group">
                    <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-6 text-3xl text-[var(--icon-purple)] group-hover:scale-110 transition-transform">
                        <i className="fa-duotone fa-thin fa-rocket"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--starlight)] mb-2">Exploration</h3>
                    <p className="text-[var(--text-muted)]">Pushing boundaries of what&apos;s possible in the browser.</p>
                </GlassCard>
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform duration-500 group">
                    <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-3xl text-[var(--icon-blue)] group-hover:scale-110 transition-transform">
                        <i className="fa-duotone fa-thin fa-atom"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--starlight)] mb-2">Gravity</h3>
                    <p className="text-[var(--text-muted)]">Creating experiences that pull users into your orbit.</p>
                </GlassCard>
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform duration-500 group">
                    <div className="w-16 h-16 mx-auto bg-pink-500/10 rounded-full flex items-center justify-center mb-6 text-3xl text-[var(--icon-pink)] group-hover:scale-110 transition-transform">
                        <i className="fa-duotone fa-thin fa-clock"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--starlight)] mb-2">Relativity</h3>
                    <p className="text-[var(--text-muted)]">Respecting user time with high-performance code.</p>
                </GlassCard>
            </div>
        </div>
      </section>

      {/* Location / Team - Minimal */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-2xl">
                {/* Background Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--space-black)]/50 to-[var(--nebula-purple)]/20 pointer-events-none"></div>
                
                {/* Background Stars/Dots */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-20 w-1 h-1 bg-[var(--starlight)]/20 rounded-full"></div>
                    <div className="absolute top-40 left-60 w-0.5 h-0.5 bg-[var(--starlight)]/20 rounded-full"></div>
                    <div className="absolute bottom-20 right-40 w-1 h-1 bg-[var(--starlight)]/20 rounded-full"></div>
                    <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[var(--starlight)]/20 rounded-full"></div>
                </div>

                <div className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--starlight)] mb-6 tracking-tight">Base of Operations</h2>
                        <div className="space-y-2">
                            <p className="text-[var(--text-muted)] text-xl">Espoo, Finland.</p>
                            <div className="font-mono text-[var(--text-muted)] opacity-80 text-lg">
                                <p>N: 60.188877°</p>
                                <p>E: 24.742082°</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-80 h-80 flex-shrink-0 flex items-center justify-center">
                         <Globe />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}
