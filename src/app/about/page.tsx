import type { Metadata } from "next";
import AboutClient from "./AboutClient";
const description =
  "An independent digital and AI studio in Espoo, Finland. Human strategy, considered design, and connected systems for small service businesses.";
export const metadata: Metadata = {
  title: "The studio",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "The studio | CoreScene",
    description,
    url: "https://www.corescene.com/about",
  },
};
export default function AboutPage() {
  return <AboutClient />;
}
