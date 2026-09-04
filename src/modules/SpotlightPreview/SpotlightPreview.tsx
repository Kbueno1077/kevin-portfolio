"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { featuredProjects, projectSlug } from "@/modules/ProjectsModule/featured";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <div className="min-h-[calc(100dvh-42px)] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden py-12">
      <Spotlight className="top-20 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="p-4 max-w-5xl mx-auto flex flex-col items-center relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-[#9377FF] font-semibold"
        >
          Kevin Bueno
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 text-4xl md:text-7xl font-bold text-center bg-clip-text py-2 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          <motion.span
            initial={{ color: "#ffffff" }}
            animate={{ color: ["#ffffff", "#9377FF", "#ffffff"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Web Developer
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-2xl text-center mx-auto"
        >
          I build high-performance web, mobile, and AI products with React,
          Next.js, and TypeScript — from a white-label airline booking engine to
          independent apps at my studio,{" "}
          <span className="text-[#9377FF] font-semibold">WorkInWeb</span>. Based
          in Miami, USA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mt-8"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-[#9377FF] text-white font-medium hover:bg-[#7e65d8] transition-colors text-center"
          >
            View Projects
          </Link>
          <Link
            href="/contact-me"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors text-center"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 w-full max-w-5xl px-4 mt-12"
      >
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-semibold">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={`/projects?project=${projectSlug(project.title)}`}
              className="group overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 transition-colors hover:border-white/25"
            >
              <div
                className={`relative h-20 sm:h-24 overflow-hidden ${project.wellClass}`}
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className={project.imageClass}
                />
              </div>
              <div className="px-3 py-2.5 sm:px-3.5 sm:py-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                  {project.label}
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-100 group-hover:text-white">
                  {project.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400 line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
