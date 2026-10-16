import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "@/design-system/components/Navbar";
import Footer from "@/design-system/components/Footer";
import PageShell from "@/design-system/components/PageShell";
import { processSteps } from "@/design-system/business";
export default function HowItWorksClient() {
  const details = [
    "We review your customer journey, tools, and repeated work with your team. You receive a prioritised opportunity map and a brief for the most useful next project. The diagnostic stands on its own; a build is a separate decision.",
    "The build proposal defines the customer journey, integrations, responsibilities, timeline, and acceptance criteria. We test with representative cases, including missing information and failed handoffs. You review the work before it goes live.",
    "We hand over access, operating notes, and training. Together, we compare the agreed measure with the starting point. If you choose Orbit, the next improvement comes from a shared backlog and a defined monthly scope.",
  ];
  return (
    <PageShell>
      <Navbar active="trajectory" />
      <main className="container">
        <header className="subpage-hero">
          <span className="micro accent">
            OUR APPROACH / A CLEAR TRAJECTORY
          </span>
          <h1>
            A little cosmic thinking.
            <br />
            <span className="serif-accent">A very practical process.</span>
          </h1>
          <p>
            We start with a business problem and work towards a useful, testable
            outcome. Every stage has a clear purpose, a concrete deliverable,
            and a decision you can understand.
          </p>
        </header>
        {processSteps.map((step, index) => (
          <section className="detail-step" key={step.number}>
            <span className="detail-number">{step.number}</span>
            <div>
              <h2>{step.title}</h2>
              <span className="micro">{step.deliverable}</span>
            </div>
            <div>
              <p>{step.description}</p>
              <p>{details[index]}</p>
            </div>
          </section>
        ))}
        <section className="story-grid">
          <h2>
            Know what you’re
            <br />
            <span className="serif-accent">signing up for.</span>
          </h2>
          <div>
            <p>
              Each proposal sets out what is included, how we will check it
              works, what we need from you, and what it costs. Platform
              subscriptions, model usage, and other third-party fees are
              identified separately.
            </p>
            <p>
              We use your business information with agreed sources and access.
              AI assistance gets review points and a fallback. Important
              decisions stay with your team. We measure progress without
              promising a particular revenue result.
            </p>
            <Link href="/#pricing" className="text-link">
              Explore the engagements <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className="subpage-cta">
          <h2>
            One useful next step.
            <br />
            <span className="serif-accent">That’s where we start.</span>
          </h2>
          <Link href="/#contact" className="primary-button">
            Find your next move <FiArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
