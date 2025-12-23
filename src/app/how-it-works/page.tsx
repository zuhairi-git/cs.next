'use client';

import Link from 'next/link';
import NebulaBackground from '@/design-system/components/NebulaBackground';
import PageShell from '@/design-system/components/PageShell';
import Navbar from '@/design-system/components/Navbar';
import Footer from '@/design-system/components/Footer';
import GlassCard from '@/design-system/components/GlassCard';

export default function HowItWorks() {
  return (
    <PageShell>
      <NebulaBackground />
      <Navbar active="trajectory" />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide text-gray-300">OPERATIONAL PROTOCOLS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Launch<br />
                <span className="text-gradient-purple">Trajectory.</span>
              </h1>
            </div>
            <div className="flex items-end pb-2">
              <GlassCard className="p-8 border-l-4 border-l-blue-500">
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  Three phases to launch. A calculated trajectory from concept to deployment, ensuring structural integrity and maximum velocity.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-10 text-center group hover:bg-white/5 transition-colors">
            <div className="text-4xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">€2,499</div>
            <div className="text-sm font-medium text-gray-500 tracking-wide">FUEL COST</div>
            <div className="mt-3 text-sm text-gray-400 leading-relaxed">
              Starting package price for a Core launch.
            </div>
          </GlassCard>
          <GlassCard className="p-10 text-center group hover:bg-white/5 transition-colors">
            <div className="text-4xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">2-4 Weeks</div>
            <div className="text-sm font-medium text-gray-500 tracking-wide">TIME TO ORBIT</div>
            <div className="mt-3 text-sm text-gray-400 leading-relaxed">
              Typical timeline from kickoff to live deployment.
            </div>
          </GlassCard>
          <GlassCard className="p-10 text-center group hover:bg-white/5 transition-colors">
            <div className="text-4xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">100%</div>
            <div className="text-sm font-medium text-gray-500 tracking-wide">SYSTEM INTEGRITY</div>
            <div className="mt-3 text-sm text-gray-400 leading-relaxed">
              QA pass: responsive, performance, and core UX checks.
            </div>
          </GlassCard>
        </div>
      </section>

      {/* The Process (Phases) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto space-y-24">
          
          {/* Phase 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 lg:text-right order-2 lg:order-1">
              <div className="text-purple-400 text-sm font-bold tracking-widest mb-4">PHASE 01</div>
              <h3 className="text-3xl font-bold text-white mb-6">Communication & Strategy</h3>
              <p className="text-gray-400 leading-relaxed">
                We establish a secure uplink to discuss your vision. We analyze the target environment, define mission goals, and map out the most efficient trajectory for your brand.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center order-1 lg:order-2 relative">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent absolute top-0 bottom-0"></div>
              <div className="w-16 h-16 rounded-full bg-[#050507] border-2 border-purple-500 flex items-center justify-center z-10 text-white font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)]">01</div>
            </div>
            <div className="lg:col-span-5 order-3">
              <GlassCard className="p-8 transform group-hover:translate-x-2 transition-transform duration-500">
                <div className="flex justify-between items-center mb-8">
                  <i className="fa-duotone fa-thin fa-chart-line text-4xl text-purple-400"></i>
                  <span className="text-xs font-bold tracking-widest text-gray-500">ANALYZING...</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-1/3 animate-pulse"></div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 order-3 lg:order-1">
              <GlassCard className="p-8 transform group-hover:-translate-x-2 transition-transform duration-500">
                <div className="flex justify-between items-center mb-8">
                  <i className="fa-duotone fa-thin fa-gem text-4xl text-blue-400"></i>
                  <span className="text-xs font-bold tracking-widest text-gray-500">COMPILING...</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-2/3 animate-pulse"></div>
                </div>
              </GlassCard>
            </div>
            <div className="lg:col-span-2 flex justify-center order-1 lg:order-2 relative">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent absolute top-0 bottom-0"></div>
              <div className="w-16 h-16 rounded-full bg-[#050507] border-2 border-blue-500 flex items-center justify-center z-10 text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)]">02</div>
            </div>
            <div className="lg:col-span-5 order-2 lg:order-3">
              <div className="text-blue-400 text-sm font-bold tracking-widest mb-4">PHASE 02</div>
              <h3 className="text-3xl font-bold text-white mb-6">Construction & Assembly</h3>
              <p className="text-gray-400 leading-relaxed">
                Our engineers begin the build. We construct your digital vessel using high-grade code and responsive frameworks. You receive regular telemetry updates and have 2-3 revision cycles.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 lg:text-right order-2 lg:order-1">
              <div className="text-pink-400 text-sm font-bold tracking-widest mb-4">PHASE 03</div>
              <h3 className="text-3xl font-bold text-white mb-6">Launch & Deployment</h3>
              <p className="text-gray-400 leading-relaxed">
                Final system checks complete. We ignite the engines and launch your site into the public network. Post-launch support ensures your orbit remains stable.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center order-1 lg:order-2 relative">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent absolute top-0 bottom-0"></div>
              <div className="w-16 h-16 rounded-full bg-[#050507] border-2 border-pink-500 flex items-center justify-center z-10 text-white font-bold text-lg shadow-[0_0_20px_rgba(244,114,182,0.4)]">03</div>
            </div>
            <div className="lg:col-span-5 order-3">
              <GlassCard className="p-8 transform group-hover:translate-x-2 transition-transform duration-500">
                <div className="flex justify-between items-center mb-8">
                  <i className="fa-duotone fa-thin fa-rocket text-4xl text-pink-400"></i>
                  <span className="text-xs font-bold tracking-widest text-gray-500">DEPLOYED</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 w-full animate-pulse"></div>
                </div>
              </GlassCard>
            </div>
          </div>

        </div>
      </section>

      {/* Payload Manifest */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Payload Manifest</h2>
            <p className="text-gray-400 text-sm">STANDARD EQUIPMENT INCLUDED IN EVERY MISSION</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-palette', title: 'Custom Design', desc: 'Unique visual signature.' },
              { icon: 'fa-bolt', title: 'Hyper Speed', desc: 'Optimized for velocity.' },
              { icon: 'fa-users', title: 'Responsive', desc: 'Adapts to all viewports.' },
              { icon: 'fa-shield', title: 'Secure', desc: 'Hardened defenses.' }
            ].map((item, i) => (
              <GlassCard key={i} className="p-8 hover:bg-white/5 transition-colors text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 text-purple-400">
                  <i className={`fa-duotone fa-thin ${item.icon} text-xl`}></i>
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative z-10">
        <GlassCard className="max-w-4xl mx-auto text-center p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready for Lift Off?</h2>
            <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
              The window of opportunity is open. Initiate the launch sequence today.
            </p>
            <Link href="/#contact" className="btn-primary text-lg px-10 py-4 shadow-lg shadow-purple-500/20">
              Start Countdown
            </Link>
          </div>
        </GlassCard>
      </section>

      <Footer />
    </PageShell>
  );
}
