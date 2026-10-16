"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [scrollDistance, setScrollDistance] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const distance = window.scrollY;
      const maxDistance = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );

      setScrollDistance(distance);
      setScrollProgress(
        maxDistance > 0 ? Math.min(1, Math.max(0, distance / maxDistance)) : 0,
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    const resizeObserver = new ResizeObserver(updateScrollProgress);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  if (scrollDistance <= 300) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-[var(--accent)] text-[var(--on-accent)] rounded-sm transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[var(--starlight)] hover:text-[var(--space-black)] border border-[var(--glass-border)]"
      aria-label="Scroll to top"
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - scrollProgress}
        />
      </svg>
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}
