"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCrosshair,
  FiGitMerge,
  FiGlobe,
  FiLayers,
  FiMessageSquare,
  FiPlus,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { SiHubspot, SiWordpress, SiWix } from "react-icons/si";
import Navbar from "@/design-system/components/Navbar";
import Footer from "@/design-system/components/Footer";
import PageShell from "@/design-system/components/PageShell";
import CinematicArtwork from "@/design-system/components/CinematicArtwork";
import ContactForm from "@/components/ContactForm";
import { engagements, processSteps } from "@/design-system/business";

const workflows = [
  {
    label: "Enquiries go quiet",
    title: "From a first hello to a clear next step.",
    text: "A better enquiry form captures what matters. Your CRM keeps the context. A useful reply and a clear task help your team follow through.",
    steps: [
      {
        icon: FiGlobe,
        title: "A visitor enquires",
        detail: "Website captures need & context",
      },
      {
        icon: FiLayers,
        title: "Your CRM connects",
        detail: "Contact, source & interest in one place",
      },
      {
        icon: FiMessageSquare,
        title: "Your team follows up",
        detail: "A useful draft, reviewed by a person",
      },
    ],
    outcome: "Measure: response time & qualified enquiries",
  },
  {
    label: "Too much busywork",
    title: "Make repeat work a smaller part of your day.",
    text: "Turn a repeated intake or onboarding task into a reliable workflow. AI can summarise the details; your team approves the next action.",
    steps: [
      {
        icon: FiLayers,
        title: "An intake arrives",
        detail: "The right information, collected once",
      },
      {
        icon: FiZap,
        title: "AI prepares the brief",
        detail: "Summarises against your instructions",
      },
      {
        icon: FiCheck,
        title: "A person approves",
        detail: "Checks the details before it moves on",
      },
    ],
    outcome: "Measure: handling time & corrections needed",
  },
  {
    label: "Tools don’t connect",
    title: "Give your tools a shared direction.",
    text: "Connect the systems you already use. Define where the source of truth lives, reduce duplicate entry, and make failures visible to your team.",
    steps: [
      {
        icon: FiGlobe,
        title: "One starting point",
        detail: "A form, booking, or customer update",
      },
      {
        icon: FiGitMerge,
        title: "Information flows",
        detail: "Mapped fields & checked connections",
      },
      {
        icon: FiCrosshair,
        title: "One clearer picture",
        detail: "A shared record your team can use",
      },
    ],
    outcome: "Measure: duplicate work & failed handoffs",
  },
];
const faqs = [
  [
    "Can’t I just use an AI website builder?",
    "Absolutely. If you need a simple brochure site, that may be the right move. We help when the challenge extends beyond a page: deciding what to build, connecting your tools, testing a real customer journey, and helping your team run it.",
  ],
  [
    "Do we need to replace our website or CRM?",
    "Usually, we start with what you have. The diagnostic identifies what to keep, improve, or connect. A rebuild only belongs in the scope when there is a clear reason for it.",
  ],
  [
    "What will AI actually do?",
    "Only a defined job with a useful result: summarising an enquiry, drafting a reply from approved information, or helping a customer find an answer. We agree the sources, review points, failure handling, and test cases before launch.",
  ],
  [
    "What do we own, and what costs extra?",
    "Your accounts, project deliverables, and documentation are handed over under the project agreement. Platform subscriptions, hosting, model usage, and other third-party charges are separate and identified in the proposal. Orbit is optional.",
  ],
  [
    "How do we know it’s working?",
    "We agree one main measure before building, such as enquiry response time, qualified enquiries, or time spent on a repeated task. We record a starting point and review it after launch. Results depend on your traffic, offer, and team adoption; we don’t promise a revenue figure.",
  ],
];

export default function Home() {
  const [workflow, setWorkflow] = useState(0);
  const [interest, setInterest] = useState("Not sure yet");
  const example = workflows[workflow];
  return (
    <PageShell>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar active="home" />
      <main id="main">
        <section className="hero container">
          <div className="hero-meta micro">
            <span>
              <span className="tiny-cross">✳</span> INDEPENDENT DIGITAL & AI
              STUDIO
            </span>
            <span>
              ESPOO, FI <span className="muted">/</span> THINKING BEYOND
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="short-line" /> A NEW CHAPTER FOR YOUR BUSINESS
              </div>
              <h1>
                Small team.
                <br />
                <span className="hero-emphasis">Cosmic</span>
                <br />
                potential<span className="accent">.</span>
              </h1>
              <p className="hero-description">
                AI changed what’s possible.
                <br />
                Let’s make it work for <em>your business.</em>
              </p>
              <p className="hero-support">
                We connect your website, CRM, and everyday workflows into a
                system that helps your business move forward.
              </p>
              <div className="hero-buttons">
                <Link href="#contact" className="primary-button">
                  Find your next move <FiArrowUpRight aria-hidden="true" />
                </Link>
                <Link href="#systems" className="quiet-button">
                  Explore the possibilities <FiArrowDown aria-hidden="true" />
                </Link>
              </div>
              <div className="hero-footnote micro">
                <span className="status-dot" /> HUMAN STRATEGY. USEFUL AI.
                REAL-WORLD SYSTEMS.
              </div>
            </div>
            <div className="hero-visual">
              <CinematicArtwork />
              <div className="visual-caption">
                <span className="micro">THE MISSION</span>
                <p>
                  More possibility.
                  <br />
                  Less business as usual.
                </p>
                <span className="caption-index">01 — ∞</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom micro">
            <span>DESIGNED FOR THE WAY YOU WORK NEXT</span>
            <a href="#shift">
              SCROLL TO EXPLORE <FiArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="platform-strip">
          <div className="container platform-inner">
            <p>
              New possibilities.
              <br />
              <strong>Familiar foundations.</strong>
            </p>
            <div className="platform-logos">
              <span>
                <SiHubspot aria-hidden="true" />
                HubSpot
              </span>
              <span>
                <SiWordpress aria-hidden="true" />
                WordPress
              </span>
              <span>
                <SiWix aria-hidden="true" />
                Wix Studio
              </span>
              <span className="custom-stack">
                <FiGitMerge aria-hidden="true" />
                Your tools. Connected.
              </span>
            </div>
          </div>
        </div>

        <section id="shift" className="section container shift-section">
          <div className="section-kicker">
            <span className="micro">01 / A DIFFERENT KIND OF PARTNER</span>
            <span className="tiny-cross">✳</span>
          </div>
          <div className="shift-grid">
            <h2>
              A website is
              <br />
              the beginning.
              <br />
              <span className="muted">Not the whole story.</span>
            </h2>
            <div className="shift-copy">
              <p className="large-copy">
                Building a page has never been easier.
                <br />
                Building a business that works better?
                <br />
                That still takes a human point of view.
              </p>
              <p>
                For small service businesses with big ambitions, we bring the
                strategy, design, and connections that turn individual tools
                into a useful whole. From the first enquiry to the work behind
                the scenes.
              </p>
              <Link href="/about" className="text-link">
                Meet your next chapter <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="principle-strip">
            <span>
              <FiCrosshair aria-hidden="true" /> Outcomes before tools
            </span>
            <span>
              <FiShield aria-hidden="true" /> People stay in control
            </span>
            <span>
              <FiLayers aria-hidden="true" /> Built around your business
            </span>
          </div>
        </section>

        <section id="systems" className="section systems-section">
          <div className="container">
            <div className="section-kicker">
              <span className="micro">02 / THE CONNECTED BUSINESS</span>
              <span className="micro muted">LESS FRICTION. MORE FORWARD.</span>
            </div>
            <div className="section-heading">
              <h2>
                Give your business
                <br />
                <span className="serif-accent">a little more gravity.</span>
              </h2>
              <p>
                Better experiences on the outside.
                <br />
                Smarter systems on the inside.
                <br />A clear direction connecting them.
              </p>
            </div>
            <div className="capabilities-grid">
              {[
                {
                  n: "01",
                  icon: FiGlobe,
                  title: "A presence that performs.",
                  text: "Clear positioning, considered design, and a customer journey that makes the next step feel obvious.",
                  tags: "WEBSITES / CUSTOMER EXPERIENCE",
                },
                {
                  n: "02",
                  icon: FiGitMerge,
                  title: "Tools that work together.",
                  text: "Connect your website, CRM, forms, and follow-up. Keep the context. Close the gaps between systems.",
                  tags: "CRM / CONNECTED WORKFLOWS",
                },
                {
                  n: "03",
                  icon: FiZap,
                  title: "AI with a purpose.",
                  text: "Useful assistance for repeated tasks, grounded in your information, with clear limits and human review.",
                  tags: "AI ASSISTANCE / AUTOMATION",
                },
              ].map((item) => (
                <article key={item.n} className="capability">
                  <div className="capability-top">
                    <item.icon aria-hidden="true" />
                    <span className="micro">{item.n}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="micro capability-tags">{item.tags}</span>
                </article>
              ))}
            </div>
            <div className="workflow-example">
              <div className="workflow-intro">
                <span className="micro accent">WHAT’S SLOWING YOU DOWN?</span>
                <div
                  role="tablist"
                  aria-label="Explore business workflows"
                  className="workflow-tabs"
                >
                  {workflows.map((item, index) => (
                    <button
                      type="button"
                      role="tab"
                      id={`workflow-tab-${index}`}
                      aria-controls="workflow-panel"
                      aria-selected={workflow === index}
                      tabIndex={workflow === index ? 0 : -1}
                      key={item.label}
                      onClick={() => setWorkflow(index)}
                      onKeyDown={(event) => {
                        if (
                          ["ArrowRight", "ArrowLeft", "Home", "End"].includes(
                            event.key,
                          )
                        ) {
                          event.preventDefault();
                          const next =
                            event.key === "Home"
                              ? 0
                              : event.key === "End"
                                ? workflows.length - 1
                                : (workflow +
                                    (event.key === "ArrowRight" ? 1 : -1) +
                                    workflows.length) %
                                  workflows.length;
                          setWorkflow(next);
                          document
                            .getElementById(`workflow-tab-${next}`)
                            ?.focus();
                        }
                      }}
                    >
                      {item.label}
                      <FiArrowUpRight aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
              <div
                className="workflow-panel"
                role="tabpanel"
                id="workflow-panel"
                aria-labelledby={`workflow-tab-${workflow}`}
                tabIndex={0}
              >
                <span className="micro muted">
                  AN EXAMPLE OF WHAT WE COULD BUILD TOGETHER
                </span>
                <h3>{example.title}</h3>
                <p>{example.text}</p>
                <div className="workflow-nodes">
                  {example.steps.map((step, index) => (
                    <div className="workflow-node" key={step.title}>
                      <div className="node-icon">
                        <step.icon aria-hidden="true" />
                      </div>
                      <span className="node-index micro">0{index + 1}</span>
                      <strong>{step.title}</strong>
                      <small>{step.detail}</small>
                      {index < 2 && (
                        <FiArrowRight
                          className="node-arrow"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="workflow-measure micro">
                  <span className="status-dot" />
                  {example.outcome}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section container">
          <div className="section-kicker">
            <span className="micro">03 / A CLEAR TRAJECTORY</span>
            <Link href="/how-it-works" className="text-link small-link">
              Our full approach <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="section-heading">
            <h2>
              Ambition, meet
              <br />
              <span className="serif-accent">a plan of action.</span>
            </h2>
            <p>
              Start with the right question.
              <br />
              Build something useful.
              <br />
              Keep making it better.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <div className="process-number">
                  {step.number}
                  <span>↗</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="process-deliverable micro">
                  {step.deliverable}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section engagement-section">
          <div className="container">
            <div className="section-kicker">
              <span className="micro">04 / YOUR NEXT MOVE</span>
              <span className="micro muted">START SMALL. GO SOMEWHERE.</span>
            </div>
            <div className="section-heading">
              <h2>
                Choose your
                <br />
                <span className="serif-accent">point of departure.</span>
              </h2>
              <p>
                No page-count packages.
                <br />A clear scope. A useful outcome.
                <br />A partnership at your pace.
              </p>
            </div>
            <div className="engagement-grid">
              {engagements.map((plan, index) => (
                <article
                  className={`engagement-card ${index === 1 ? "featured" : ""}`}
                  key={plan.name}
                >
                  <div className="plan-heading">
                    <span className="micro">
                      0{index + 1} / {plan.duration}
                    </span>
                    {index === 1 && (
                      <span className="plan-badge">BUILD MOMENTUM</span>
                    )}
                  </div>
                  <h3>
                    {plan.name}
                    <span className="accent">.</span>
                  </h3>
                  <p className="plan-category">{plan.category}</p>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-price">
                    {plan.price}
                    <span>{plan.unit}</span>
                  </div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <FiCheck aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={
                      index === 1 ? "primary-button" : "outline-button"
                    }
                    href="#contact"
                    onClick={() =>
                      setInterest(
                        `${plan.name} — ${index === 0 ? "diagnostic" : index === 1 ? "system build" : "ongoing improvement"}`,
                      )
                    }
                  >
                    {plan.cta}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              Indicative EUR pricing, excluding applicable VAT and third-party
              subscriptions or usage. We agree the scope and final quote before
              work begins. Ongoing support is optional.
            </p>
          </div>
        </section>

        <section className="section container faq-section">
          <div>
            <span className="micro">05 / A FEW HUMAN QUESTIONS</span>
            <h2>
              Good questions.
              <br />
              <span className="serif-accent">Clear answers.</span>
            </h2>
            <p>
              Curious about something else?
              <br />
              <a href="mailto:hello@corescene.com" className="text-link">
                Just ask us <FiArrowUpRight aria-hidden="true" />
              </a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <FiPlus aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="micro accent">06 / FIRST CONTACT</span>
              <h2>
                Your next chapter
                <br />
                starts with
                <br />
                <span className="serif-accent">a conversation.</span>
              </h2>
              <p>
                Tell us what you’re building, what’s slowing you down, or where
                you’d like to go. We’ll help you find a sensible next step.
              </p>
              <a href="mailto:hello@corescene.com" className="contact-email">
                hello@corescene.com <FiArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-coordinate micro">
                <span className="status-dot" /> ESPOO, FINLAND / OPEN TO
                POSSIBILITY
              </div>
            </div>
            <ContactForm interest={interest} onInterestChange={setInterest} />
          </div>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
