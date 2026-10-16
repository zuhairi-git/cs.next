import Link from "next/link";
export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="CoreScene home">
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M28 9a15 15 0 1 0 0 22"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M25 15a8 8 0 1 0 0 10M4 20h32M30 14l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span>
        core<span className="brand-light">scene</span>
        <span className="brand-period">.</span>
      </span>
    </Link>
  );
}
