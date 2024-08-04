import { SidebarLayout } from "@/modules/SidebarLayout/SidebarLayout";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: { icon: "./favicon.ico" },
    title: "Kevin Bueno's Portfolio",
    keywords: [
        "Kevin",
        "Kevin Bueno",
        "Portfolio",
        "Web Developer",
        "Frontend Developer",
        "React",
        "UI/UX",
        "Projects",
    ],
    description:
        "Hi, I’m Kevin, a skilled frontend developer specializing in converting mockups into responsive, user-friendly web applications.",
};

export const viewport: Viewport = {
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    height: "device-height",
    width: "device-width",
    colorScheme: "dark",
    viewportFit: "cover",
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"dark"}>
            <body className={inter.className}>
                <SidebarLayout>{children}</SidebarLayout>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
