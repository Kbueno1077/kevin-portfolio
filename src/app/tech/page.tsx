import { TechStackCards } from "@/modules/TechStackCards/TechStackCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "The tools Kevin Bueno builds with — React, Next.js, TypeScript, state management, styling, databases, AI engineering, and best practices.",
};

export default function Tech() {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold p-10 text-center md:text-left">
        Tech Stack
      </h1>
      <TechStackCards />
    </>
  );
}
