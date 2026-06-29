import { Certifications as CertificationsList } from "@/modules/Certifications/Certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Courses and certifications completed by Kevin Bueno across CSS, TypeScript, GSAP animations, Figma, and modern JavaScript.",
};

export default function Certifications() {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold p-10 text-center md:text-left">
        Certifications
      </h1>
      <CertificationsList />
    </>
  );
}
