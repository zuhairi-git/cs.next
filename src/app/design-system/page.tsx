import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "@/design-system/components/Navbar";
import Footer from "@/design-system/components/Footer";
import PageShell from "@/design-system/components/PageShell";
import { ThemeMark } from "@/design-system/components/EpicThemePicker";
import { epicThemes } from "@/design-system/epicThemes";
export const metadata: Metadata = {
  title: "Epic design system",
  alternates: { canonical: "/design-system" },
};
export default function DesignSystemPage() {
  return (
    <PageShell>
      <Navbar />
      <main className="container">
        <header className="subpage-hero">
          <span className="micro accent">CORESCENE / DESIGN FOUNDATIONS</span>
          <h1>
            Two worlds.
            <br />
            <span className="serif-accent">One Epic design system.</span>
          </h1>
          <p>
            Choose your world in the navigation. Epic themes change the
            typography, palette, artwork, and geometry across the site. Light
            and dark modes work independently.
          </p>
        </header>
        <section className="story-grid">
          <h2>The Epic themes.</h2>
          <div className="catalogue-themes">
            {epicThemes.map((theme) => (
              <article key={theme.id}>
                <ThemeMark dune={theme.id === "dune"} />
                <h3>{theme.name}</h3>
                <p>{theme.story}</p>
                <span className="micro">{theme.design}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="story-grid">
          <h2>A considered palette.</h2>
          <div className="catalogue-swatches">
            {[
              { name: "Canvas", token: "--space-black" },
              { name: "Surface", token: "--surface-2" },
              { name: "Ink", token: "--starlight" },
              { name: "Muted ink", token: "--text-muted" },
              { name: "Accent", token: "--accent" },
              { name: "Rule", token: "--line-strong" },
            ].map((swatch) => (
              <div key={swatch.token}>
                <span style={{ background: `var(${swatch.token})` }} />
                <strong>{swatch.name}</strong>
                <code>{swatch.token}</code>
              </div>
            ))}
          </div>
        </section>
        <section className="story-grid">
          <h2>
            A human voice.
            <br />
            <span className="serif-accent">A cosmic perspective.</span>
          </h2>
          <div>
            <h2>Small team. Cosmic potential.</h2>
            <p>
              Display typography follows the selected world. Body text uses
              locally hosted Geist; instrumentation uses Geist Mono. Editorial
              accents use Georgia.
            </p>
            <span className="micro">CHAPTER 01 / A NEW TRAJECTORY</span>
          </div>
        </section>
        <section className="story-grid">
          <h2>Clear next steps.</h2>
          <div className="catalogue-actions">
            <Link href="/#contact" className="primary-button">
              Start a conversation <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/#systems" className="outline-button">
              Explore the systems <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/about" className="text-link">
              Meet the studio <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className="subpage-cta">
          <h2>
            See the system
            <br />
            <span className="serif-accent">in its natural orbit.</span>
          </h2>
          <Link href="/" className="primary-button">
            Return home <FiArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
