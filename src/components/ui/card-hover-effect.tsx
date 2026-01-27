"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BackgroundGradient } from "./background-gradient";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        img?: string;
        imgClassName?: string;
        caption?: React.ReactNode;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    target="_blank"
                    href={item?.link}
                    key={item?.link}
                    className="relative group min-w-[280px] block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.div
                                className="absolute inset-0 h-full w-full bg-white dark:bg-zinc-900 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <BackgroundGradient className="h-full rounded-[22px] p-4 sm:p-8 bg-white dark:bg-zinc-900">
                        {item.img && (
                            <Image
                                priority
                                width={300}
                                height={300}
                                src={item.img}
                                alt={item.title}
                                quality={100}
                                className={cn(
                                    "w-full h-16 sm:h-20 sm:rounded-lg object-contain",
                                    item.imgClassName
                                )}
                            />
                        )}

                        <CardTitle className={cn("text-xl", item.img ? "mt-4" : "mt-0")}>
                            {item.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                            {item.description}
                        </CardDescription>
                        {item.caption && (
                            <div className="mt-4 text-xs text-neutral-500 font-medium">
                                {item.caption}
                            </div>
                        )}
                    </BackgroundGradient>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-gauge-500 border border-transparent dark:border-white/[0.2]  relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
