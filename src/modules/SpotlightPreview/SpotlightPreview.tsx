"use client";

import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";

export function SpotlightPreview() {
    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (
                document.body.scrollTop > 0 ||
                document.documentElement.scrollTop > 0
            ) {
                window.scrollTo(0, 1);
            }
        });
    }, []);

    return (
        <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="top-20 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 max-w-7xl mx-auto flex flex-col justify-center md:block relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text py-2 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Welcome <br /> to my portfolio!
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto ">
                    I&apos;m a passionate Web UI developer with a knack for
                    creating seamless and engaging user experiences. Here,
                    you&apos;ll find a showcase of my projects, skills, and the
                    journey I&apos;ve embarked on in the world of frontend
                    development. Dive in and explore how I bring ideas to life
                    through code! 🔭
                </p>
            </div>
        </div>
    );
}
