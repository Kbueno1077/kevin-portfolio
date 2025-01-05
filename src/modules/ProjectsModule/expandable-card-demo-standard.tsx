"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useEffect, useId, useRef, useState } from "react";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={300}
                  height={300}
                  src={active.bigSrc}
                  alt={active.title}
                  quality={100}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 "
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${active.title}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content(active.tech)
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full px-4 md:px-0 gap-4 pb-10">
        {cards.map((card, index) => (
          <div key={card.id}>
            {card.first && (
              <h1
                className={`pb-4 ${
                  index !== 0 && "mt-10"
                } text-2xl lg:ml-[-40px] font-bold underline`}
              >
                {card.first}
              </h1>
            )}
            <li
              key={`card-${card.title}-${id}`}
              className="mb-3 md:mb-0 dark:border-white/[0.2] border-2 rounded-lg md:border-none"
            >
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className="p-4 py-6 md:py-4 flex md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col md:flex-row  ">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                      width={100}
                      height={100}
                      src={card.smallSrc}
                      alt={card.title}
                      quality={100}
                      className="h-40 w-40 md:h-20 md:w-20 rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${card.title}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                >
                  {card.ctaText2}
                </motion.button>
              </motion.div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    id: 1,
    description: "Front10 - PROS",
    title: "TravelPaas",
    first: "Front10 LLC",
    smallSrc: "/small/Pros.jpg",
    bigSrc: "/big/Pros.jpg",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://book.azoresairlines.pt/booking/",
    tech: ["React.js", "TypeScript", "JavaScript", "Sass"],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Help Airlines enhance customer experience by creating functional,
            highly customizable web applications and translating designs into
            efficient code. Streamline booking and check-in processes, implement
            responsive and accessible designs, integrate real-time flight
            information and updates, and offer personalized features and
            recommendations to improve user satisfaction and operational
            efficiency.
          </p>
          <br />
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      );
    },
  },

  {
    id: 2,
    description: "Front10",
    title: "Woxo Video Editor",
    smallSrc: "/small/woxo.png",
    bigSrc: "/big/woxo.png",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://woxo.tech/",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "MaterialUI",
      "GSAP",
      "Fabric.js",
      "Zustand",
    ],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Woxo, is an Online effortless video editor that allows you to create
            videos in a matter of seconds. The project is designed to be
            user-friendly and take advantage of the new AI capabilities in the
            market.
          </p>
          <br />{" "}
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
        </div>
      );
    },
  },

  {
    id: 4,
    title: "WorkInWeb",
    description: "Contractor  ",
    first: "WorkInWeb",
    smallSrc: "/small/workinweb_logo.jpeg",
    bigSrc: "/big/workinweb_logo.jpeg",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://weworkinweb.netlify.app",
    tech: ["Astro", "React", "TypeScript", "TailwindCSS"],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            A small business I own that specializes in creating modern,
            responsive landing pages for companies looking to establish their
            online presence. We focus on delivering clean, professional websites
            with hosting that help businesses effectively showcase their
            products and services.
          </p>
          <br />{" "}
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
        </div>
      );
    },
  },

  {
    id: 7,
    title: "Beer Warehouse",
    description: "Personal Project",
    first: "Personal Projects",

    smallSrc: "/small/beer-warehouse.png",
    bigSrc: "/big/beer-warehouse.png",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://beer-warehouse.com/",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "NextUI",
      "TailwindCSS",
      "NextAuth",
      "Cloudinary",
      "Xata.io",
      "Echarts",
      "next-intl",
      "Zustand",
    ],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Created a personal web application where I store a collection of
            different beers that I have had the pleasure of enjoying. Powered
            also with Gen AI to search and provied info of other beers as you
            browse for them on a store. Friends can check the information as
            create their owns account to store theirs.
          </p>
          <br />{" "}
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
        </div>
      );
    },
  },

  {
    id: 8,
    title: "App - Beer Warehouse",
    smallSrc: "/small/beer-mobile.png",
    bigSrc: "/big/beer-mobile.png",
    description: "Personal Project  ",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://github.com/Kbueno1077/beer-warehouse-rn",
    tech: [
      "React.js",
      "React Native",
      "Expo",
      "Zustand",
      "Cloudinary",
      "Xata.io",
    ],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            I created a mobile app for the beer warehouse. It was a personal
            project that I worked on I used React Native, Cloudinary to store
            media and Xata for data. The app was designed to be a simple and
            user-friendly interface for ordering and managing my beer
            collection, ispired by the web application and with a similar stack
            of technologies.
          </p>
          <br />{" "}
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
        </div>
      );
    },
  },

  {
    id: 9,
    title: "FormMe",
    smallSrc: "/small/formMe.png",
    bigSrc: "/big/formMe.png",
    description: "Personal Project  ",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://form-me.kbueno-studio.com/",
    tech: ["Svelte", "SvelteKit", "@skeleton.dev", "Firebase"],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Introducing FormMe, a streamlined solution for creating custom forms
            and unique URLs tailored for individual use. With FormMe, users can
            easily design bespoke forms, share a personalized link with one
            recipient. Perfect for single-respondent surveys, private feedback
            requests, or exclusive event registrations.
            <br />
            <br />
            As a web developer, I`ve been hearing a lot of buzz around Svelte, a
            relatively new front-end framework that takes a different approach
            to building user interfaces. Intrigued by its promises of
            simplicity, performance, and a compelling component model, I`ve
            decided to dive in and explore Svelte for an upcoming project.
          </p>
          <br />{" "}
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
        </div>
      );
    },
  },

  {
    id: 10,
    title: "Todo - Doing - Done",
    smallSrc: "/small/todoLogo.png",
    bigSrc: "/big/todoLogo.png",
    description: "Personal Project  ",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://todo-doing-done.kbueno-studio.com/",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Supabase",
      "DaisyUI",
    ],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            This project is a feature-rich project management board inspired by
            popular tools like Trello, Jira and Kanban. It is designed to help
            teams organize tasks, collaborate efficiently, and track progress in
            a visually intuitive manner.
          </p>
          <br />{" "}
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
        </div>
      );
    },
  },

  {
    id: 11,
    title: "GranLine Maps",
    smallSrc: "/small/maps.png",
    bigSrc: "/big/maps.png",
    description: "Personal Project  ",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://grand-line.kbueno-studio.com/",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Supabase",
      "Radix UI",
      "Radix Themes",
      "Leaflet",
    ],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            GrandLine Maps is a web-based application designed to allow users to
            create custom maps and assign locations that hold significant
            emotional or important data. This tool is perfect for individuals
            who want to visually document and share their personal journeys,
            memories, and meaningful places. The Name is inspired by the One
            Piece Franchise.
          </p>
          <br />{" "}
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
        </div>
      );
    },
  },

  {
    id: 12,
    title: "Olympus Dominoes",
    smallSrc: "/small/olympus.png",
    description: "Personal Project  ",
    bigSrc: "/big/olympus.png",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://olympus-dominoes.kbueno-studio.com/",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "MaterialUI",
      "TailwindCSS",
      "Supabase",
      "Recoil",
    ],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            I love to play dominoes, (55 pieces) so I created a web application
            keep the score in matches and keep track of history records
          </p>
          <br />
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
          <br />
          <strong>Olympus</strong>, where the gods come togheter to player
          dominoes
        </div>
      );
    },
  },
  {
    id: 13,
    title: "Weather-Cast",
    smallSrc: "/small/weather-cast.png",
    description: "Personal Project  ",
    bigSrc: "/big/weather-cast.png",
    ctaText: "Open",
    ctaText2: "Details",
    ctaLink: "https://weather-cast.kbueno-studio.com",
    tech: [
      "React.js",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Tomorrows Weather API",
      "Leaflet",
    ],
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            A weather forecast application that allows users to view current
            weather conditions and forecasts for any location in the world.
            Features include a map view, detailed weather information
          </p>
          <br />
          <div>
            {technologies.map((tech, idx) => (
              <Fragment key={tech}>
                <span className="text-colorAccent">{tech}</span>
                {idx !== technologies.length - 1 && ", "}
              </Fragment>
            ))}{" "}
          </div>
          <br />
        </div>
      );
    },
  },
];
