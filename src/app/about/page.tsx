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
        <div className="max-w-[1000px] mx-auto">
            <GlassCard className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-[var(--starlight)] mb-4">Base of Operations</h2>
                    <p className="text-[var(--text-muted)] text-lg mb-6">
                        Espoo, Finland. <br/>
                        60.2055° N, 24.6559° E
                    </p>
                </div>
                <div className="relative w-64 h-64 flex-shrink-0">
                     <Globe />
                </div>
            </GlassCard>
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}
