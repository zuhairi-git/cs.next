import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "@/design-system/components/Navbar";
import Footer from "@/design-system/components/Footer";
import PageShell from "@/design-system/components/PageShell";
export default function AboutClient() {
  return (
    <PageShell>
      <Navbar active="about" />
      <main className="container">
        <header className="subpage-hero">
          <span className="micro accent">THE STUDIO / HUMAN BY DESIGN</span>
          <h1>
            A human point of view.
            <br />
            <span className="serif-accent">A wider world of possibility.</span>
          </h1>
          <p>
            CoreScene is an independent digital and AI studio in Espoo, Finland.
            We help small service businesses turn scattered tools and good
            intentions into a clearer way to work.
          </p>
        </header>
        <section className="story-grid">
          <h2>
            The tools changed.
            <br />
            Our purpose evolved.
          </h2>
          <div>
            <p>
              A website can be the start of a business relationship. What
              happens next matters just as much: the enquiry, the reply, the
              handover, and the work your team repeats every day.
            </p>
            <p>
              Our focus brings those moments together. We combine positioning
              and experience design with practical implementation, connecting
              your website, CRM, and workflows around a real business need.
            </p>
            <span className="micro">
              STRATEGY / DESIGN / CONNECTION / CONTINUOUS IMPROVEMENT
            </span>
          </div>
        </section>
        <section className="story-grid">
          <h2>
            Useful AI.
            <br />
            <span className="serif-accent">Human accountability.</span>
          </h2>
          <div>
            <p>
              AI is one of the instruments, not the entire mission. We use it
              where it makes a defined task more useful, such as summarising an
              enquiry, preparing a draft, or finding an answer in approved
              information.
            </p>
            <p>
              Every implementation needs boundaries: clear sources, appropriate
              access, a person who owns the process, and a way to handle
              uncertainty. We build those decisions into the work and help your
              team understand them.
            </p>
          </div>
        </section>
        <section className="story-grid">
          <h2>
            Small enough to care.
            <br />
            Built to connect.
          </h2>
          <div>
            <p>
              We work with service businesses whose next stage of growth depends
              on a better customer journey and less repetitive work. We start
              with your existing tools, including HubSpot, WordPress, and Wix
              Studio, and choose changes for their usefulness.
            </p>
            <p>
              You get a focused scope, visible progress, and a system your team
              can understand. Your accounts, documentation, and training are
              part of the handover. Ongoing partnership is a choice.
            </p>
          </div>
        </section>
        <section className="subpage-cta">
          <h2>
            Bring your ambition.
            <br />
            <span className="serif-accent">We’ll help find the next move.</span>
          </h2>
          <Link href="/#contact" className="primary-button">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
