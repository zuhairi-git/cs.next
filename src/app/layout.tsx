import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/fontawesome.css";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { ThemeProvider } from "@/design-system/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CoreScene - Premium Web Design for HubSpot, WordPress & Wix",
    template: "%s | CoreScene"
  },
  description: "Empowering Your Web Presence with innovative, cutting-edge website solutions for HubSpot, WordPress & Wix. Based in Espoo, Finland.",
  keywords: ["Web Design", "HubSpot", "WordPress", "Wix", "Web Development", "Digital Agency", "Espoo", "Finland", "SEO", "Next.js"],
  authors: [{ name: "CoreScene Team" }],
  creator: "CoreScene",
  publisher: "CoreScene",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.corescene.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CoreScene - Premium Web Design Agency",
    description: "Specializing in high-performance websites using HubSpot, WordPress, and Wix.",
    url: 'https://www.corescene.com',
    siteName: 'CoreScene',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/img/og-image.jpg', // Ensure this image exists or update path
        width: 1200,
        height: 630,
        alt: 'CoreScene Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CoreScene - Premium Web Design",
    description: "Innovative web solutions for HubSpot, WordPress & Wix.",
    images: ['/img/og-image.jpg'], // Ensure this image exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CoreScene",
    "url": "https://www.corescene.com",
    "logo": "https://www.corescene.com/img/logo.png",
    "image": "https://www.corescene.com/img/og-image.jpg",
    "description": "Premium Web Design Agency specializing in HubSpot, WordPress, and Wix solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Espoo",
      "addressCountry": "FI"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "60.2055",
      "longitude": "24.6559"
    },
    "priceRange": "€1499-€10000+",
    "offers": [
      {
        "@type": "Offer",
        "name": "Core Plan",
        "price": "1499",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Velocity Plan",
        "price": "4999",
        "priceCurrency": "EUR"
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
