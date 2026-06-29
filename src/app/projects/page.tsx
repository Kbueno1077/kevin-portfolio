import ExpandableCardDemo from "@/modules/ProjectsModule/expandable-card-demo-standard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Kevin Bueno — client products, founder projects at WorkInWeb, and AI/personal builds across React, Next.js, and TypeScript.",
};

export default function Projects() {
  return (
    <>
      <header className="px-6 pt-10 pb-2 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-center md:text-left text-neutral-400 text-sm md:text-base">
          A mix of professional client work, products I&apos;ve founded, and
          personal builds where I explore new tech. Tap any card for details and
          links.
        </p>
      </header>
      <div className="overflow-auto w-full flex flex-col justify-center items-center pb-5 md:pb-0">
        <ExpandableCardDemo />
      </div>
    </>
  );
}
