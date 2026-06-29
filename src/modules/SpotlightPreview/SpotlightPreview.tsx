"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { featuredProjects } from "@/modules/ProjectsModule/featured";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <div className="min-h-[calc(100dvh-42px)] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden py-16">
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
          I build immersive, high-performance web and AI products with React,
          Next.js, and TypeScript — from a white-label airline booking engine to
          full-stack SaaS at my studio,{" "}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full max-w-5xl px-4 mt-16"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400 font-semibold">
            Featured work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-[#9377FF] hover:text-[#b4a0ff] transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden transition-colors hover:border-[#9377FF]"
            >
              <div className="h-32 overflow-hidden bg-black">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={400}
                  height={200}
                  quality={100}
                  className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${project.imageClass}`}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-100 group-hover:text-[#9377FF] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400 line-clamp-2">
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
