"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
    const [active, setActive] = useState<
        (typeof cards)[number] | boolean | null
    >(null);
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
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                            >
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
                                            layoutId={`description-${active.description}-${id}`}
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
            <ul className="max-w-2xl mx-auto w-full px-4 md:px-0 gap-4">
                {cards.map((card, index) => (
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
                                <motion.div
                                    layoutId={`image-${card.title}-${id}`}
                                >
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
                                        layoutId={`description-${card.description}-${id}`}
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
        description: "Front10 - PROS",
        title: "TravelPaas",
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
                        Help Airlines enhance customer experience by creating
                        functional, highly customizable web applications and
                        translating designs into efficient code. Streamline
                        booking and check-in processes, implement responsive and
                        accessible designs, integrate real-time flight
                        information and updates, and offer personalized features
                        and recommendations to improve user satisfaction and
                        operational efficiency.
                    </p>
                    <br />
                    <div>
                        {technologies.map((tech, idx) => (
                            <>
                                <span className="text-colorAccent" key={idx}>
                                    {tech}
                                </span>
                                {idx !== technologies.length - 1 && ", "}
                            </>
                        ))}
                    </div>
                </div>
            );
        },
    },
    {
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
                        Woxo, is an Online effortless video editor that allows
                        you to create videos in a matter of seconds. The project
                        is designed to be user-friendly and take avantage of the
                        new AI capabilities in the market.
                    </p>
                    <br />{" "}
                    <div>
                        {technologies.map((tech, idx) => (
                            <>
                                <span className="text-colorAccent" key={idx}>
                                    {tech}
                                </span>
                                {idx !== technologies.length - 1 && ", "}
                            </>
                        ))}{" "}
                    </div>
                </div>
            );
        },
    },

    {
        title: "Evan Home Care",
        description: "Contractor  ",
        smallSrc: "/small/evan.png",
        bigSrc: "/big/evan.png",
        ctaText: "Open",
        ctaText2: "Details",
        ctaLink: "https://evanhomecare.vercel.app/",
        tech: [
            "React.js",
            "Next.js",
            "TypeScript",
            "NextUI",
            "TailwindCSS",
            "AspyrPdf",
            "Resend",
        ],
        content: (technologies: string[]) => {
            return (
                <div>
                    <p>
                        Created a presentational web site for a healthcare
                        business and also a space where can request and apply
                        for jobs in that enterprise
                    </p>
                    <br />{" "}
                    <div>
                        {technologies.map((tech, idx) => (
                            <>
                                <span className="text-colorAccent" key={idx}>
                                    {tech}
                                </span>
                                {idx !== technologies.length - 1 && ", "}
                            </>
                        ))}{" "}
                    </div>
                </div>
            );
        },
    },

    {
        description: "Contractor",
        title: "Secret Store",
        smallSrc: "/small/storeFront.png",
        bigSrc: "/big/storeFront.png",
        ctaText: "Open",
        ctaText2: "Details",
        ctaLink: "https://store-front-swart.vercel.app/",
        tech: [
            "React.js",
            "Next.js",
            "JavaScript",
            "MaterialUI",
            "Style-Components",
            "Redux",
        ],
        content: (technologies: string[]) => {
            return (
                <div>
                    <p>
                        As part of a demo I created a prototype Ui for a Online
                        Store heavely inspired in Amazon and Aeroenvio with and
                        interactive UX Technologies used: React.js, Next.js,
                        JavaScript, MaterialUI, Style-Components, Redux,
                    </p>
                    <br />{" "}
                    <div>
                        {technologies.map((tech, idx) => (
                            <>
                                <span className="text-colorAccent" key={idx}>
                                    {tech}
                                </span>
                                {idx !== technologies.length - 1 && ", "}
                            </>
                        ))}{" "}
                    </div>
                </div>
            );
        },
    },

    {
        title: "Beer Warehouse",
        description: "Personal Project",
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
                        Created a personal web application where I store a
                        collection of different beers that I have had the
                        pleasure of enjoying. Friends can check the information
                        as create their owns account to store theirs.
                    </p>
                    <br />{" "}
                    <div>
                        {technologies.map((tech, idx) => (
                            <>
                                <span className="text-colorAccent" key={idx}>
                                    {tech}
                                </span>
                                {idx !== technologies.length - 1 && ", "}
                            </>
                        ))}{" "}
                    </div>
                </div>
            );
        },
    },

    {
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
                        I created a mobile app for the beer warehouse. It was a
                        personal project that I worked on I used React Native,
                        Cloudinary to store media and Xata for data. The app was
                        designed to be a simple and user-friendly interface for
                        ordering and managing my beer collection, ispired by the
                        web application and with a similar stack of
                        technologies.
                    </p>
                    <br />{" "}
                    <div>
                        {technologies.map((tech, idx) => (
                            <>
                                <span className="text-colorAccent" key={idx}>
                                    {tech}
                                </span>
                                {idx !== technologies.length - 1 && ", "}
                            </>
                        ))}{" "}
                    </div>
                </div>
            );
        },
    },

    {
        title: "Olympus Dominoes",
        smallSrc: "/small/olympus.png",
        description: "Personal Project  ",
        bigSrc: "/big/olympus.png",
        ctaText: "Open",
        ctaText2: "Details",
        ctaLink: "https://olympus-dominoes.vercel.app/",
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
                        I love to play dominoes, (55 pieces) so I created a web
                        application keep the score in matches and keep track of
                        history records
                    </p>
                    <br />
                    <div>
                        {technologies.map((tech, idx) => (
                            <>
                                <span className="text-colorAccent" key={idx}>
                                    {tech}
                                </span>
                                {idx !== technologies.length - 1 && ", "}
                            </>
                        ))}{" "}
                    </div>
                    <br />
                    <strong>Olympus</strong>, where the gods come togheter to
                    player dominoes
                </div>
            );
        },
    },
];
