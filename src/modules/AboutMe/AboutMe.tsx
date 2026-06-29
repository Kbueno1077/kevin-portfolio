"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "next-view-transitions";

const now = [
  {
    tag: "Building",
    line: "Frontend at scale for a white-label airline booking engine.",
    place: "Front10",
  },
  {
    tag: "Running",
    line: "WorkInWeb — landing pages and full SaaS for real businesses.",
    place: "Founder",
  },
  {
    tag: "Exploring",
    line: "AI product engineering: streaming, tool calling, structured outputs.",
    place: "Vercel AI SDK",
  },
];

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function AboutMe() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 md:px-10 pb-20">
      {/* Intro: portrait + editorial statement */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
        <motion.div
          variants={fade}
          custom={0}
          initial="hidden"
          animate="show"
          className="relative mx-auto md:mx-0"
        >
          <div className="relative h-48 w-48 md:h-56 md:w-56">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#9377FF]/30 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 grayscale transition-all duration-500 hover:grayscale-0">
              <Image
                src="/images/profile.jpg"
                alt="Kevin Bueno"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-full border border-white/10 bg-black px-3 py-1 text-xs font-medium text-neutral-300">
              Miami, USA
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            variants={fade}
            custom={1}
            initial="hidden"
            animate="show"
            className="text-xs uppercase tracking-[0.35em] text-[#9377FF] font-semibold"
          >
            Hello, I&apos;m Kevin
          </motion.p>

          <motion.h2
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-4 text-2xl md:text-4xl font-bold leading-tight text-balance"
          >
            I turn fuzzy ideas into interfaces people actually{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9377FF] to-violet-400">
              enjoy using
            </span>
            .
          </motion.h2>

          <motion.div
            variants={fade}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-6 space-y-4 text-neutral-400 leading-relaxed md:text-lg"
          >
            <p>
              I&apos;m a software developer focused on the frontend. I went from
              writing my first components as a freelancer to leading frontend
              work on a booking engine used by airlines around the world — and
              somewhere along the way I started{" "}
              <span className="text-neutral-200">WorkInWeb</span> to ship my own
              products and client sites.
            </p>
            <p>
              These days I&apos;m equal parts pixel-perfectionist and AI tinkerer:
              I care about clean type, motion that means something, and
              shipping things that feel fast and obvious to use.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right now — a numbered rail that echoes the experience timeline */}
      <div className="mt-20">
        <motion.div
          variants={fade}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4"
        >
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold whitespace-nowrap">
            Right now
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
        </motion.div>

        <div className="mt-8 space-y-0">
          {now.map((item, i) => (
            <motion.div
              key={item.tag}
              variants={fade}
              custom={i + 1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="group grid grid-cols-[auto_1fr] gap-5 border-b border-neutral-800/80 py-5 transition-colors hover:border-[#9377FF]/40"
            >
              <span className="font-mono text-sm text-[#9377FF] pt-1 tabular-nums">
                0{i + 1}
              </span>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <p className="text-neutral-200 md:text-lg">
                  <span className="font-semibold text-white">{item.tag}</span>
                  {" — "}
                  {item.line}
                </p>
                <span className="text-sm text-neutral-500 whitespace-nowrap md:pl-6">
                  {item.place}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Off the clock — a bit of personality, not a stat grid */}
      <motion.div
        variants={fade}
        custom={1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8"
      >
        <p className="text-neutral-400 leading-relaxed md:text-lg">
          <span className="text-neutral-200 font-medium">Off the clock,</span>{" "}
          I&apos;m usually playing dominoes (yes, the 55-piece kind — I even
          built an app to keep score), getting a workout in, or starting one
          more side project than I have time for. I love{" "}
          <span className="text-neutral-200">tech</span> and stay up to date
          with it, and I&apos;m always down for a good{" "}
          <span className="text-neutral-200">movie, series, or anime</span>. I
          speak <span className="text-neutral-200">English</span> and{" "}
          <span className="text-neutral-200">Spanish</span>.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fade}
        custom={2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 flex flex-col sm:flex-row gap-3"
      >
        <Link
          href="/projects"
          className="rounded-full bg-[#9377FF] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#7e65d8]"
        >
          See what I&apos;ve built
        </Link>
        <Link
          href="/contact-me"
          className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-white/10"
        >
          Say hello
        </Link>
      </motion.div>
    </div>
  );
}
