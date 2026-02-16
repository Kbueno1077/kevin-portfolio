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
    title: "CSS Animations",
    description:
      "Master CSS animations and transitions to create dynamic and engaging user interfaces. Learn to use keyframes, timing functions, and advanced techniques to bring your designs to life.",
    link: "/documents/certifications/css-animations.pdf",
    img: "/logos/projects/midudev.svg",
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
    title: "TypeScript: Type Utilities",
    description:
      "Master TypeScript Utility Types to optimize your code and improve its maintainability. Learn to use Partial, Required, Omit, Pick, Readonly, and many more advanced utility types.",
    link: "/documents/certifications/typescript type-utilities.pdf",
    img: "/logos/projects/midudev.svg",
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
    link: "/documents/certifications/gsap certificado, midudev.pdf",
    img: "/logos/projects/midudev.svg",
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
    link: "/documents/certifications/figma.pdf",
    img: "/logos/projects/midudev.svg",
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
    title: "Modern JavaScript",
    description:
      "Don't fall behind with your JavaScript knowledge! Discover new Array methods, new logical operators, Promise methods to handle asynchrony, and how to optimize your code with the latest in JS.",
    link: "/documents/certifications/js-moderno.pdf",
    img: "/logos/projects/midudev.svg",
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
