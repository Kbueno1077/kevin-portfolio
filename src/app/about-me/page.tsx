import { AboutMe } from "@/modules/AboutMe/AboutMe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Get to know Kevin Bueno — a Miami-based frontend developer and UI/UX specialist building web and AI products with React, Next.js, and TypeScript.",
};

export default function AboutMePage() {
  return (
    <>
      <header className="px-6 pt-10 pb-2 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          About Me
        </h1>
      </header>
      <div className="overflow-auto w-full flex flex-col justify-center items-center pb-5">
        <AboutMe />
      </div>
    </>
  );
}
