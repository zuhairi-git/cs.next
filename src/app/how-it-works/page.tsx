import type { Metadata } from "next";
import HowItWorksClient from "./HowItWorksClient";
const description =
  "Find the friction, connect the pieces, and keep improving. See how CoreScene turns a business problem into a practical website, CRM, and AI workflow.";
export const metadata: Metadata = {
  title: "Our approach",
  description,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "Our approach | CoreScene",
    description,
    url: "https://www.corescene.com/how-it-works",
  },
};
export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
