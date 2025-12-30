'use client';

import NebulaBackground from '@/design-system/components/NebulaBackground';
import PageShell from '@/design-system/components/PageShell';
import Navbar from '@/design-system/components/Navbar';
import Footer from '@/design-system/components/Footer';
import GlassCard from '@/design-system/components/GlassCard';

export default function TermsOfService() {
  return (
    <PageShell>
      <NebulaBackground />
      <Navbar />

      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--starlight)] mb-6">Terms of Service</h1>
            <p className="text-[var(--text-muted)]">Last updated: December 23, 2025</p>
          </div>

          <GlassCard className="p-8 md:p-12 space-y-8 text-[var(--text-muted)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">2. Services</h2>
              <p>
                CoreScene provides web design and development services. The specific deliverables and timelines for any project will be outlined in a separate agreement or proposal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">3. Intellectual Property</h2>
              <p>
                Unless otherwise stated, the code, design, and content created by CoreScene for a client project become the property of the client upon full payment. CoreScene retains the right to display the work in our portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">4. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, CoreScene shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
              <p className="mt-4">
                We are not responsible for performance issues, including delays or slowdowns, caused by server limitations or third-party, pre-built components used within the platform. We utilize available infrastructure and integrations in accordance with industry best practices and make reasonable efforts to ensure reliable performance, but we cannot guarantee uninterrupted or optimal speed at all times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--starlight)] mb-4">5. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Finland, without regard to its conflict of law provisions.
              </p>
            </section>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </PageShell>
  );
}
