"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
export function SpotlightPreview() {
  return (
    <div className="h-[calc(100dvh-42px)] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="top-20 left-0 md:left-60 md:-top-20" fill="white" />
      <div className=" p-4 max-w-7xl mx-auto flex flex-col justify-center md:block relative z-10  w-full  ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text py-2 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Welcome to the{" "}
          <motion.span
            initial={{ color: "#ffffff" }}
            animate={{ color: ["#ffffff", "#9377FF", "#ffffff"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <br /> Studio! 🎨
          </motion.span>{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto "
        >
          Hi, I&apos;m Kevin Bueno a software developer specialized on frontend
          web development. Based in{" "}
          <motion.span
            initial={{ color: "#9377FF" }}
            animate={{ color: ["#9377FF", "#b4a0ff", "#9377FF"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#9377FF] font-bold"
          >
            Miami, USA.
          </motion.span>{" "}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all cursor-pointer"
            onClick={() => (window.location.href = "/contact-me")}
          >
            Get in Touch
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
