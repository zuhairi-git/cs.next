'use client';
import NebulaBackground from '@/design-system/components/NebulaBackground';
import PageShell from '@/design-system/components/PageShell';
import Navbar from '@/design-system/components/Navbar';
import Footer from '@/design-system/components/Footer';
import GlassCard from '@/design-system/components/GlassCard';

export default function About() {
  return (
    <PageShell>
      <NebulaBackground />
      <Navbar active="about" />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide text-[var(--text-muted)]">MISSION LOGS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-[var(--starlight)] mb-8 leading-tight">
                The Endurance<br />
                <span className="text-gradient-blue">Initiative.</span>
              </h1>
            </div>
            <div className="flex items-end pb-2">
              <GlassCard className="p-8 border-l-4 border-l-purple-500">
                <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
                We are a team of digital astronauts based in Espoo, Finland. Our mission is to explore the unknown and bring back the future of web design.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-12 group transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/10 border border-[var(--glass-border)] flex items-center justify-center mb-8 shadow-[0_0_30px_-12px_rgba(168,85,247,0.8)] group-hover:scale-110 transition-transform duration-500">
              <i className="fa-duotone fa-thin fa-rocket text-3xl text-[var(--icon-purple)]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[var(--starlight)] mb-4">Exploration</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              &quot;We&apos;ve always defined ourselves by the ability to overcome the impossible.&quot; We push the boundaries of what&apos;s possible in the browser, venturing into new territories of design and interaction.
            </p>
          </GlassCard>
          <GlassCard className="p-12 group transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/10 border border-[var(--glass-border)] flex items-center justify-center mb-8 shadow-[0_0_30px_-12px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-transform duration-500">
              <i className="fa-duotone fa-thin fa-bullseye text-3xl text-[var(--icon-blue)]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[var(--starlight)] mb-4">Gravity</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              &quot;Gravity crosses all dimensions, including time.&quot; We create digital gravity that pulls customers in and keeps them in your orbit through compelling storytelling and immersive experiences.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Team / Location */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--starlight)] mb-6">Base of <span className="text-gradient-purple">Operations</span></h2>
              <div className="inline-block px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] font-mono text-[var(--icon-blue)] text-xs mb-8 tracking-widest">
                COORDINATES: 60.2055° N, 24.6559° E
              </div>
              <p className="text-[var(--text-muted)] mb-12 leading-relaxed text-lg max-w-md">
                Located in the tech hub of Espoo, Finland, we operate at the intersection of design and technology. Like the rangers of old, we are small, agile, and dedicated to the mission.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-4xl font-bold text-[var(--starlight)] mb-2">100%</div>
                  <div className="text-sm font-medium text-[var(--text-muted)] tracking-wide">MISSION SUCCESS</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[var(--starlight)] mb-2">24/7</div>
                  <div className="text-sm font-medium text-[var(--text-muted)] tracking-wide">SYSTEM MONITORING</div>
                </div>
              </div>
            </div>

            <GlassCard className="aspect-video relative overflow-hidden group flex items-center justify-center">
              {/* Abstract Map Representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
              
              {/* Animated Rings */}
              <div className="absolute w-[400px] h-[400px] border border-[var(--glass-border)] rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[300px] h-[300px] border border-[var(--glass-border)] rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Location Marker */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full relative shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                </div>
                <div className="text-[var(--starlight)] font-bold tracking-widest text-sm bg-[var(--space-black)]/50 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--glass-border)]">
                  ESPOO, FINLAND
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}
