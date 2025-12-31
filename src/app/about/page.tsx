import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About CoreScene - Our Mission & Values",
  description: "Learn about CoreScene, a premium web design agency in Espoo, Finland. We specialize in HubSpot, WordPress, and Wix solutions.",
  openGraph: {
    title: "About CoreScene - Our Mission & Values",
    description: "Learn about CoreScene, a premium web design agency in Espoo, Finland. We specialize in HubSpot, WordPress, and Wix solutions.",
    url: 'https://www.corescene.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
