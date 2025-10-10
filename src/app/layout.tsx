import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoreScene - Premium Web Design for HubSpot, WordPress & Wix",
  description: "Empowering Your Web Presence with innovative, cutting-edge website solutions for HubSpot, WordPress & Wix.",
  icons: {
    icon: [
      { url: "/img/logo.png", type: "image/png" },
    ],
    shortcut: [
      { url: "/img/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/img/logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fontawesome.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
