"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactElement, useEffect, useId, useRef, useState } from "react";
import { cards } from "./projects";

export interface Card {
  id: number | string;
  title: string;
  description: string;
  first?: string;
  imgSrc: string;
  ctaText: string;
  ctaText2: string;
  ctaLink: string | string[];
  ctaTexts?: string[];
  tech: string[];
  content: (technologies: string[]) => ReactElement;
  imageClassSmall?: string;
  imageClassBig?: string;
}

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore the scroll position
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
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
              {card.ctaTexts?.[index] || card.ctaText}
            </motion.div>
          ))}
        </div>
      );
    } else {
      return (
        <motion.div
          className="px-4 sm:px-4 py-4 sm:py-3 text-base sm:text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors cursor-pointer text-center"
          onClick={() =>
            window.open(card.ctaLink as string, "_blank", "noopener,noreferrer")
          }
        >
          {card.ctaText}
        </motion.div>
      );
    }
  };

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
                      active.imageClassBig || "object-cover object-center"
                    }`}
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
        {(() => {
          let currentCategory = "";
          let categoryCards: Card[] = [];
          const categoryGroups: { category: string; cards: Card[] }[] = [];

          // Group cards by category
          cards.forEach((card) => {
            if (card.first && card.first !== currentCategory) {
              if (categoryCards.length > 0) {
                categoryGroups.push({
                  category: currentCategory,
                  cards: categoryCards,
                });
              }
              currentCategory = card.first;
              categoryCards = [card];
            } else {
              categoryCards.push(card);
            }
          });

          if (categoryCards.length > 0) {
            categoryGroups.push({
              category: currentCategory,
              cards: categoryCards,
            });
          }

          return categoryGroups.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`${
                groupIndex !== 0 ? "mt-12 sm:mt-16 lg:mt-20" : "mt-8 sm:mt-12"
              } mb-8 sm:mb-12`}
            >
              {/* Category Header */}
              <div className="mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-2 sm:mb-3 text-center lg:text-left">
                  {group.category}
                </h1>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
                {group.cards.map((card, cardIndex) => (
                  <motion.div
                    key={card.id}
                    layoutId={`card-${card.title}-${id}`}
                    onClick={() => setActive(card)}
                    className="group bg-white dark:bg-neutral-900 rounded-lg sm:rounded-xl p-2 sm:p-4 hover:shadow-lg transition-all duration-200 cursor-pointer border border-neutral-200 dark:border-neutral-700 hover:border-green-300 dark:hover:border-green-600 overflow-hidden flex flex-col h-full"
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.15 },
                    }}
                    whileTap={{
                      scale: 0.98,
                      transition: { duration: 0.08 },
                    }}
                    transition={{
                      layout: {
                        duration: 0.2,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {/* Image */}
                    <div className="mb-1.5 sm:mb-3 overflow-hidden rounded-lg">
                      <Image
                        width={300}
                        height={200}
                        src={card.imgSrc}
                        alt={card.title}
                        quality={100}
                        className={`w-full h-48 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105 ${
                          card.imageClassBig || "object-cover object-center"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-1 sm:space-y-2 flex-1">
                      <h3 className="font-semibold text-xs sm:text-base text-neutral-800 dark:text-neutral-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-1">
                        {card.title}
                      </h3>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 sm:line-clamp-3">
                        {card.content(card.tech)}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-1.5 sm:pt-3 mt-auto">
                      {Array.isArray(card.ctaLink) ? (
                        <div className="flex flex-col gap-0.5 sm:gap-1">
                          {card.ctaLink.map((link, index) => (
                            <button
                              key={`${card.title}-link-${index}`}
                              className={`px-1.5 sm:px-3 py-1 sm:py-1.5 text-xs rounded-md font-medium transition-all duration-200 ${
                                index === 0
                                  ? "bg-green-500 text-white hover:bg-green-600"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(
                                  link,
                                  "_blank",
                                  "noopener,noreferrer"
                                );
                              }}
                            >
                              {card.ctaTexts?.[index] || card.ctaText}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <button
                          className="w-full px-1.5 sm:px-3 py-1 sm:py-1.5 text-xs rounded-md font-medium bg-green-500 text-white hover:bg-green-600 transition-all duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              card.ctaLink as string,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          {card.ctaText}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ));
        })()}
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
