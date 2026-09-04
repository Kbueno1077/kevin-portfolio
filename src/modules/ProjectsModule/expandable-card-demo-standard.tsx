"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { projectSlug } from "@/modules/ProjectsModule/featured";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactElement, useEffect, useId, useRef, useState } from "react";
import { cards } from "./projects";

export type ProjectCategory =
  | "Client / Professional"
  | "Founder / WorkInWeb"
  | "Personal / Demos";

export interface Card {
  id: number | string;
  title: string;
  description: string;
  summary?: string;
  first?: string;
  category: ProjectCategory;
  imgSrc: string;
  ctaText: string;
  ctaText2: string;
  ctaLink: string | string[];
  ctaTexts?: string[];
  tech: string[];
  content: (technologies: string[]) => ReactElement;
  imageClassSmall?: string;
  imageClassBig?: string;
  imageWellClass?: string;
  featured?: boolean;
}

const CATEGORY_ORDER: ProjectCategory[] = [
  "Client / Professional",
  "Founder / WorkInWeb",
  "Personal / Demos",
];

type Filter = "All" | ProjectCategory;

function categoryLabel(category: ProjectCategory): string {
  switch (category) {
    case "Client / Professional":
      return "Client work";
    case "Founder / WorkInWeb":
      return "Studio";
    case "Personal / Demos":
      return "Independent";
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

function categoryBlurb(category: ProjectCategory): string {
  switch (category) {
    case "Client / Professional":
      return "Production systems for airlines, video, and product teams.";
    case "Founder / WorkInWeb":
      return "SaaS, client sites, and tools from WorkInWeb.";
    case "Personal / Demos":
      return "Web and mobile products designed and shipped independently.";
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

function cardCopy(card: Card): string {
  return card.summary || card.description;
}

function ProjectCard({
  card,
  layoutId,
  featured = false,
  onOpen,
}: {
  card: Card;
  layoutId: string;
  featured?: boolean;
  onOpen: () => void;
}) {
  const techPreview = card.tech.slice(0, featured ? 5 : 3);
  const extraTech = card.tech.length - techPreview.length;

  return (
    <motion.div
      id={`project-${projectSlug(String(card.id))}`}
      layoutId={layoutId}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 text-left outline-none transition-colors hover:border-[#9377FF]/80 focus-visible:ring-2 focus-visible:ring-[#9377FF] ${
        featured ? "" : "flex h-full flex-col"
      }`}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.99, transition: { duration: 0.08 } }}
    >
      <div
        className={
          featured
            ? "grid min-h-[220px] grid-cols-1 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
            : "flex h-full flex-col"
        }
      >
        <div
          className={`relative overflow-hidden ${card.imageWellClass || "bg-black"} ${
            featured
              ? "h-56 sm:h-full sm:min-h-[260px]"
              : "h-40 sm:h-44"
          }`}
        >
          <Image
            width={featured ? 640 : 420}
            height={featured ? 420 : 280}
            src={card.imgSrc}
            alt={card.title}
            quality={100}
            sizes={
              featured
                ? "(max-width: 640px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            className={`h-full w-full ${
              card.imageClassBig || "object-cover object-center"
            }`}
          />
        </div>

        <div
          className={`flex flex-1 flex-col ${
            featured ? "p-5 sm:p-6 lg:p-7" : "p-4 sm:p-5"
          }`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
            {featured
              ? `${categoryLabel(card.category)} · Web + mobile`
              : categoryLabel(card.category)}
          </p>
          <h3
            className={`mt-2 font-semibold text-white transition-colors group-hover:text-[#c4b5ff] ${
              featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`mt-2 text-sm leading-relaxed text-neutral-400 ${
              featured ? "line-clamp-4" : "line-clamp-2"
            }`}
          >
            {cardCopy(card)}
          </p>

          {techPreview.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {techPreview.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-neutral-300"
                >
                  {tech}
                </span>
              ))}
              {extraTech > 0 && (
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-neutral-500">
                  +{extraTech}
                </span>
              )}
            </div>
          )}

          <span
            className={`mt-auto pt-4 text-sm font-medium text-neutral-200 group-hover:text-[#c4b5ff] ${
              featured ? "" : "text-xs sm:text-sm"
            }`}
          >
            View project →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExpandableCardDemo({
  initialProject,
}: {
  initialProject?: string;
}) {
  const [active, setActive] = useState<Card | boolean | null>(null);
  const [filter, setFilter] = useState<Filter>(() => {
    if (!initialProject) {
      return "All";
    }
    const match = cards.find(
      (item) => projectSlug(String(item.id)) === initialProject
    );
    return match?.category ?? "All";
  });
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!initialProject) {
      return;
    }

    const card = cards.find(
      (item) => projectSlug(String(item.id)) === initialProject
    );
    if (!card) {
      return;
    }

    setFilter(card.category);

    let cancelled = false;
    let attempts = 0;

    const findAndOpen = () => {
      if (cancelled) {
        return;
      }

      const target = document.getElementById(`project-${initialProject}`);
      if (!target) {
        attempts += 1;
        if (attempts < 20) {
          window.setTimeout(findAndOpen, 50);
        }
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => {
        if (!cancelled) {
          setActive(card);
        }
      }, 280);
    };

    const timeout = window.setTimeout(findAndOpen, 80);
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [initialProject]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const renderCTALinks = (card: Card) => {
    if (Array.isArray(card.ctaLink)) {
      return (
        <div className="flex flex-col sm:flex-row w-full gap-3">
          {card.ctaLink.map((link, index) => (
            <motion.div
              key={`${card.title}-link-${index}`}
              className={`px-4 sm:px-4 w-full py-4 sm:py-3 text-base sm:text-sm rounded-full font-bold transition-colors cursor-pointer text-center ${
                index === 0
                  ? "bg-[#9377FF] text-white hover:bg-[#7e65d8]"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
              {card.ctaTexts?.[index] || card.ctaText}
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <motion.div
        className="px-4 sm:px-4 py-4 sm:py-3 text-base sm:text-sm rounded-full font-bold bg-[#9377FF] text-white hover:bg-[#7e65d8] transition-colors cursor-pointer text-center"
        onClick={() =>
          window.open(card.ctaLink as string, "_blank", "noopener,noreferrer")
        }
      >
        {card.ctaText}
      </motion.div>
    );
  };

  const visibleGroups = CATEGORY_ORDER.filter(
    (category) => filter === "All" || filter === category
  )
    .map((category) => ({
      category,
      featured: cards.filter(
        (card) => card.category === category && card.featured
      ),
      rest: cards.filter(
        (card) => card.category === category && !card.featured
      ),
    }))
    .filter((group) => group.featured.length + group.rest.length > 0);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/60 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-0 sm:p-4 overflow-hidden">
            <motion.div
              key="close-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex absolute top-2 right-2 sm:top-4 sm:right-4 lg:hidden items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-12 w-12 sm:h-12 sm:w-12 cursor-pointer z-20 shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.div>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                layout: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
              className="w-full h-full sm:max-w-[500px] sm:h-fit sm:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <div
                ref={ref}
                className="flex flex-col h-full max-h-full overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1.05 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="overflow-hidden flex-shrink-0"
                >
                  <Image
                    priority
                    width={300}
                    height={300}
                    src={active.imgSrc}
                    alt={active.title}
                    quality={100}
                    className={`w-full h-48 sm:h-56 lg:h-64 rounded-t-xl sm:rounded-t-3xl ${
                      active.imageWellClass || "bg-black"
                    } ${active.imageClassBig || "object-cover object-center"}`}
                  />
                </motion.div>

                <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                  <div className="p-4 sm:p-6 flex-shrink-0">
                    <div className="mb-4 sm:mb-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="font-bold text-2xl sm:text-xl md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-200 mb-3 sm:mb-4"
                      >
                        {active.title}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.15,
                          ease: "easeOut",
                        }}
                        className="text-lg sm:text-base md:text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      >
                        {active.description}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      className="w-full mt-4 sm:mt-6"
                    >
                      {renderCTALinks(active)}
                    </motion.div>
                  </div>

                  <div className="px-4 sm:px-6 pb-4 sm:pb-8 flex-1 min-h-0">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.25,
                        ease: "easeOut",
                      }}
                      className="h-full max-h-full overflow-y-auto text-neutral-600 text-lg sm:text-sm dark:text-neutral-400 leading-relaxed"
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#cbd5e1 #f8fafc",
                      }}
                    >
                      <div className="flex flex-col items-start gap-4 sm:gap-6 pb-4 sm:pb-8 pr-2">
                        {typeof active.content === "function"
                          ? active.content(active.tech)
                          : active.content}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <motion.div
        animate={{
          opacity: active && typeof active === "object" ? 0.3 : 1,
          scale: active && typeof active === "object" ? 0.98 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-8 pb-6 sm:pb-10"
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
          {(["All", ...CATEGORY_ORDER] as Filter[]).map((option) => {
            const count =
              option === "All"
                ? cards.length
                : cards.filter((card) => card.category === option).length;
            const isActive = filter === option;
            return (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#9377FF] text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                }`}
              >
                {option === "All" ? "All" : categoryLabel(option)}
                <span className="ml-1.5 opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {visibleGroups.map((group, groupIndex) => (
          <section
            key={group.category}
            className={`${
              groupIndex !== 0 ? "mt-12 sm:mt-16 lg:mt-20" : "mt-8 sm:mt-12"
            } mb-8 sm:mb-12`}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-100 text-center lg:text-left">
                {categoryLabel(group.category)}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-400 text-center lg:text-left">
                {categoryBlurb(group.category)}
              </p>
              <div className="mt-3 w-12 h-0.5 bg-[#9377FF] rounded-full mx-auto lg:mx-0" />
            </div>

            {group.featured.length > 0 && (
              <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {group.featured.map((card) => (
                  <ProjectCard
                    key={card.id}
                    card={card}
                    featured
                    layoutId={`card-${card.title}-${id}`}
                    onOpen={() => setActive(card)}
                  />
                ))}
              </div>
            )}

            {group.rest.length > 0 && (
              <div className="grid grid-cols-1 min-[520px]:grid-cols-2 xl:grid-cols-3 gap-4">
                {group.rest.map((card) => (
                  <ProjectCard
                    key={card.id}
                    card={card}
                    layoutId={`card-${card.title}-${id}`}
                    onOpen={() => setActive(card)}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </motion.div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
