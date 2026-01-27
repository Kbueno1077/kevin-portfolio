"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

export function Certifications() {
  return (
    <div className="max-w-7xl mx-auto px-8 flex flex-col gap-16 mb-20">
      <HoverEffect items={certifications} />
    </div>
  );
}

const certifications = [
  {
    title: "TypeScript: Type Utilities",
    description:
      "Master TypeScript Utility Types to optimize your code and improve its maintainability. Learn to use Partial, Required, Omit, Pick, Readonly, and many more advanced utility types.",
    link: "/cursos/typescript type-utilities.pdf",
    img: "/logos/midudev.svg",
    caption: (
      <span className="flex items-center gap-1">
        Course from{" "}
        <a
          href="https://midu.dev/"
          target="_blank"
          className="underline hover:text-blue-500 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          midu.dev
        </a>
      </span>
    ),
  },
  {
    title: "GSAP Animations",
    description:
      "Learn to use GSAP to create amazing animations on your page. In this course, we will see real examples based on Linear and Apple, and you will understand the basics to not only replicate them but improve them.",
    link: "/cursos/gsap certificado, midudev.pdf",
    img: "/logos/midudev.svg",
    caption: (
      <span className="flex items-center gap-1">
        Course from{" "}
        <a
          href="https://midu.dev/"
          target="_blank"
          className="underline hover:text-blue-500 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          midu.dev
        </a>
      </span>
    ),
  },
  {
    title: "Figma for UI/UX Design",
    description:
      "Course designed for developers, with the goal of learning Figma to the fullest and improving collaboration with design teams. Stand out as a programmer by mastering one of the most used tools in the design world.",
    link: "/cursos/figma.pdf",
    img: "/logos/midudev.svg",
    caption: (
      <span className="flex items-center gap-1">
        Course from{" "}
        <a
          href="https://midu.dev/"
          target="_blank"
          className="underline hover:text-blue-500 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          midu.dev
        </a>
      </span>
    ),
  },
];
