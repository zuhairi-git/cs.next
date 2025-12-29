'use client';

import NebulaBackground from '@/design-system/components/NebulaBackground';
import PageShell from '@/design-system/components/PageShell';
import Navbar from '@/design-system/components/Navbar';
import Footer from '@/design-system/components/Footer';
import GlassCard from '@/design-system/components/GlassCard';

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <NebulaBackground />
      <Navbar />

      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--starlight)] mb-6">Privacy Policy</h1>
            <p className="text-[var(--text-muted)]">Last updated: December 23, 2025</p>
          </div>

          <GlassCard className="p-8 md:p-12 space-y-8 text-[var(--text-muted)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">1. Introduction</h2>
              <p>
                CoreScene (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by CoreScene.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">2. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out our contact form, request a quote, or communicate with us. This may include your name, email address, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Communicate with you about services, offers, and events.</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">4. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at hello@corescene.com.
              </p>
            </section>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}
