import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../../public/fa-kit-60396e54cd-web/css/fontawesome.css";
import "../../public/fa-kit-60396e54cd-web/css/duotone-thin.min.css";
import "../../public/fa-kit-60396e54cd-web/css/brands.min.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/design-system/context/ThemeContext";
import { themeScript } from "@/design-system/epicThemes";
const geistSans = localFont({
  src: "../../public/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});
const description =
  "CoreScene connects websites, CRM, and useful AI into practical growth systems for small service businesses. Human strategy, thoughtful design, and connected workflows. Based in Espoo, Finland.";
export const metadata: Metadata = {
  title: {
    default: "CoreScene — Human ambition. Useful AI. Connected business.",
    template: "%s | CoreScene",
  },
  description,
  keywords: [
    "AI implementation",
    "Workflow automation",
    "CRM integration",
    "Web design",
    "HubSpot",
    "WordPress",
    "Wix Studio",
    "Espoo",
    "Finland",
  ],
  authors: [{ name: "CoreScene" }],
  creator: "CoreScene",
  publisher: "CoreScene",
  metadataBase: new URL("https://www.corescene.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "CoreScene — Small team. Cosmic potential.",
    description,
    url: "https://www.corescene.com",
    siteName: "CoreScene",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/hero.jpg",
        alt: "CoreScene — an independent digital and AI studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreScene — Small team. Cosmic potential.",
    description,
    images: ["/img/hero.jpg"],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CoreScene",
    url: "https://www.corescene.com",
    logo: "https://www.corescene.com/img/logo.png",
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Espoo",
      addressCountry: "FI",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Connected business services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Signal — business and workflow diagnostic",
        },
        {
          "@type": "OfferCatalog",
          name: "Launch — website, CRM, and workflow implementation",
        },
        { "@type": "OfferCatalog", name: "Orbit — ongoing system improvement" },
      ],
    },
  };
  return (
    <html
      lang="en"
      data-theme="dark"
      data-epic-theme="interstellar"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics GA_MEASUREMENT_ID="G-JC5HT4SX05" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
