import type { Metadata } from "next";
import HowItWorksClient from "./HowItWorksClient";

export const metadata: Metadata = {
  title: "How It Works - CoreScene Process",
  description: "Discover our 3-step web design process: Analysis, Synthesis, and Launch. We ensure a smooth trajectory for your digital presence.",
  openGraph: {
    title: "How It Works - CoreScene Process",
    description: "Discover our 3-step web design process: Analysis, Synthesis, and Launch. We ensure a smooth trajectory for your digital presence.",
    url: 'https://www.corescene.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
