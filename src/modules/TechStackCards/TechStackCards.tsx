import { HoverEffect } from "@/components/ui/card-hover-effect";

export function TechStackCards() {
    return (
        <div className="max-w-7xl mx-auto px-8 md:flex flex-col justify-center ">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "React.js",
        img: "/tech/react-js-icon.svg",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://react.dev/",
    },
    {
        title: "Next.js",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://nextjs.org/",
        img: "/tech/nextjs-icon.svg",
    },
    {
        title: "TypeScript",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://www.typescriptlang.org/",
        img: "/tech/typescript-original.svg",
    },
    {
        title: "JavaScript",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        img: "/tech/javascript-original.svg",
    },
    {
        title: "HTML",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        img: "/tech/html5-original.svg",
        link: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
        title: "CSS",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/css3-original.svg",
        link: "https://developer.mozilla.org/es/docs/Web/CSS",
    },

    {
        title: "Taiwindcss",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/tailwind-css-icon.svg",
        link: "https://tailwindcss.com/",
        imgClassName: "h-14",
    },

    {
        title: "Redux",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/redux.svg",
        link: "https://redux.js.org/",
    },

    {
        title: "Zustand",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/zustand.svg",
        link: "https://zustand-demo.pmnd.rs/",
    },

    {
        title: "Xata",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/xata.svg",
        link: "https://xata.io/",
    },

    {
        title: "Material UI",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/material.svg",
        link: "https://mui.com/material-ui/",
    },

    {
        title: "Next UI",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/nextUI.png",
        link: "https://nextui.org/",
    },

    {
        title: "Node.js",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/nodejs-original-wordmark.svg",
        link: "https://nodejs.org/en",
        imgClassName: "bg-slate-200",
    },

    {
        title: "Git",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        img: "/tech/git.svg",
        link: "https://git-scm.com/",
    },
];
