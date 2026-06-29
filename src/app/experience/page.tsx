import VerticalTimelineDemo from "@/modules/VerticalTimeline/VerticalTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Kevin Bueno's career timeline — from a Computer Science degree to Lead Frontend Developer at Front10 and founder of WorkInWeb.",
};

export default function Experience() {
  return (
    <>
      <header className="px-6 pt-10 pb-2 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          Experience
        </h1>
        <p className="mt-3 max-w-2xl text-center md:text-left text-neutral-400 text-sm md:text-base">
          My path from Computer Science fundamentals to leading frontend work on
          airline-scale products and founding my own studio.
        </p>
      </header>
      <div className="overflow-auto w-full flex flex-col justify-center items-center pb-5">
        <VerticalTimelineDemo />
      </div>
    </>
  );
}
