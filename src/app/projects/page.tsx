import ExpandableCardDemo from "@/modules/ProjectsModule/expandable-card-demo-standard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Kevin Bueno — client products, founder projects at WorkInWeb, and independent web and mobile apps across React, Next.js, and TypeScript.",
};

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;

  return (
    <>
      <header className="px-6 pt-10 pb-2 md:px-10">
        <p className="text-center md:text-left text-xs font-semibold uppercase tracking-[0.22em] text-[#a994ff]">
          Selected work
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold text-center md:text-left">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-center md:text-left text-neutral-400 text-sm md:text-base leading-relaxed">
          Client products first, then studio work and independent apps. Open a
          card for the story, stack, and links.
        </p>
      </header>
      <div className="overflow-auto w-full flex flex-col justify-center items-center pb-5 md:pb-0">
        <ExpandableCardDemo initialProject={project} />
      </div>
    </>
  );
}
