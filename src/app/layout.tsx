import { SidebarLayout } from "@/modules/SidebarLayout/SidebarLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"dark"}>
            <body className={inter.className}>
                <SidebarLayout>{children}</SidebarLayout>
            </body>
        </html>
    );
}
