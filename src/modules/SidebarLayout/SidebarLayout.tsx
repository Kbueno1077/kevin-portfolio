"use client";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTabler,
    IconBuildingSkyscraper,
    IconCode,
    IconLayoutDashboard,
    IconUserBolt,
} from "@tabler/icons-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function SidebarLayout({ children }: any) {
    const links = [
        {
            label: "Home",
            href: "/",
            icon: (
                <IconLayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },

        {
            label: "About Me",
            href: "/about-me",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Projects",
            href: "/projects",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },

        {
            label: "Tech stack",
            href: "/tech",
            icon: (
                <IconCode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-dvh"
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <SidebarLink
                            //@ts-ignore
                            target="_blank"
                            link={{
                                label: "Github",
                                href: "https://github.com/Kbueno1077",
                                icon: (
                                    <IconBrandGithub className="h-7 w-7 flex-shrink-0 rounded-full" />
                                ),
                            }}
                        />

                        <SidebarLink
                            //@ts-ignore
                            target="_blank"
                            link={{
                                label: "Linkedin",
                                href: "https://www.linkedin.com/in/kevin-bueno-0a8809218/",
                                icon: (
                                    <IconBrandLinkedin className="h-7 w-7 flex-shrink-0 rounded-full" />
                                ),
                            }}
                        />

                        <SidebarLink
                            link={{
                                label: "Kevin Bueno",
                                href: "#",
                                icon: (
                                    <Image
                                        src="/profile.jpg"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        quality={100}
                                        alt="Avatar"
                                        style={{ objectFit: "cover" }}
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>

            <div className="overflow-auto w-full rounded-t-3xl md:rounded-l-3xl  dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer rounded-t-3xl md:rounded-l-3xl -events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className="h-full w-full relative z-20 bg-clip-text ">
                    {children}
                </div>
            </div>
        </div>
    );
}
export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
            <IconBuildingSkyscraper className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                Portfolio
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <IconBuildingSkyscraper className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
        </Link>
    );
};
