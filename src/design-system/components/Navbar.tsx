"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Brand from "./Brand";
import EpicThemePicker from "./EpicThemePicker";
import ThemeSwitcher from "./ThemeSwitcher";
type ActiveKey = "home" | "trajectory" | "about" | "none";
const links = [
  { label: "What we do", href: "/#systems", key: "home" },
  { label: "Our approach", href: "/how-it-works", key: "trajectory" },
  { label: "The studio", href: "/about", key: "about" },
];
export default function Navbar({ active = "none" }: { active?: ActiveKey }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Brand />
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={active === link.key ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <EpicThemePicker />
          <ThemeSwitcher />
          <Link className="nav-cta" href="/#contact">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)}>
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
}
