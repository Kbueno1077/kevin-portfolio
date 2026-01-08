import { SidebarLayout } from "@/modules/SidebarLayout/SidebarLayout";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/favicon.ico" },
  title: {
    default: "Kevin Bueno - Frontend Developer & UI/UX Specialist",
    template: "%s | Kevin Bueno",
  },
  keywords: [
    "Kevin Bueno",
    "Frontend Developer",
    "UI/UX Specialist",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Creative Developer",
    "Software Engineer",
    "Miami",
  ],
  description:
    "Kevin Bueno is a Frontend Developer & UI/UX Specialist based in Miami, crafting immersive, high-performance web experiences with React, Next.js, and modern design principles.",
  applicationName: "Kevin Bueno Portfolio",
  authors: [{ name: "Kevin Bueno", url: siteUrl }],
  creator: "Kevin Bueno",
  publisher: "Kevin Bueno",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kevin Bueno - Frontend Developer & UI/UX Specialist",
    description:
      "Crafting immersive, high-performance web experiences with React, Next.js, and modern design principles.",
    siteName: "Kevin Bueno Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/openGraph-image.png",
        width: 1200,
        height: 630,
        alt: "Kevin Bueno - Frontend Developer & UI/UX Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kbueno1077",
    creator: "@kbueno1077",
    title: "Kevin Bueno - Frontend Developer & UI/UX Specialist",
    description:
      "Crafting immersive, high-performance web experiences with React, Next.js, and modern design principles.",
    images: ["/openGraph-image.png"],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={"dark"}>
        <body className={inter.className}>
          <SidebarLayout>{children}</SidebarLayout>

          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
