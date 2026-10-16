import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Brand from "./Brand";
export default function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <div>
          <Brand />
          <p>
            Human ambition. A little cosmic thinking.
            <br />
            Digital systems that move you forward.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/how-it-works">Our approach</Link>
          <Link href="/about">The studio</Link>
          <a href="mailto:hello@corescene.com">
            hello@corescene.com <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-zuhairi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CoreScene</span>
        <span className="footer-location">
          <span className="status-dot" /> Espoo, Finland. Thinking beyond
          borders.
        </span>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
          <Link href="/design-system">Design system</Link>
        </div>
      </div>
    </footer>
  );
}
