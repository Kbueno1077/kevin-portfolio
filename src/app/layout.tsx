import { SidebarLayout } from "@/modules/SidebarLayout/SidebarLayout";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: { icon: "./favicon.ico" },
  title: "Kevin Bueno's Portfolio - Frontend Developer & UI/UX Specialist",
  keywords: [
    "Kevin Bueno",
    "Kevin Studio",
    "Portfolio",
    "Web Developer",
    "Web Applications ",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "React Developer",
    "Next.js Developer",
    "Svelte Developer",
    "SvelteKit Developer",
    "UI/UX Designer",
    "Frontend Projects ",

    "Responsive Design",
  ],
  description:
    "Welcome to Kevin Bueno's portfolio. Kevin is a skilled frontend developer specializing in converting mockups into responsive, user-friendly web applications using React, Next.js, and modern web technologies.",
  openGraph: {
    type: "website",
    url: "kbueno-studio.com",
    title: "Kevin Bueno's Portfolio - Frontend Developer & UI/UX Specialist",
    description:
      "Explore Kevin Bueno's portfolio showcasing projects and skills in frontend development, UI/UX design, and modern web technologies.",
    images: [
      {
        url: "kbueno-studio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kevin Bueno's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kbueno1077",
    creator: "@kbueno1077",
    title: "Kevin Bueno's Portfolio - Frontend Developer & UI/UX Specialist",
    description:
      "Discover the projects and skills of Kevin Bueno, a frontend developer specializing in React, Next.js, and UI/UX design.",
    images: [
      {
        url: "kbueno-studio.com/twitter-image.jpg",
        alt: "Kevin Bueno's Portfolio",
      },
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  height: "device-height",
  width: "device-width",
  colorScheme: "dark",
  viewportFit: "cover",
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
