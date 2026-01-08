import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";

export function TechStackCards() {
  return (
    <div className="max-w-7xl mx-auto px-8 flex flex-col gap-16 mb-20">
      {techGroups.map((group) => (
        <div key={group.category}>
          <h2 className="text-3xl font-bold text-center md:text-left mb-8 text-neutral-600 dark:text-neutral-300">
            {group.category}
          </h2>
          <HoverEffect items={group.items} />
          {group.footer && (
            <div className="mt-4 px-2 md:px-4">{group.footer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const techGroups = [
  {
    category: "Core Stack",
    items: [
      {
        title: "Vercel",
        description:
          "Vercel is a cloud platform for hosting and deploying modern web apps with automatic scaling and edge functions.",
        link: "https://vercel.com/",
        img: "/tech/vercel_dark.svg",
      },
      {
        title: "Next.js",
        description:
          "Next.js is a React framework for building full-stack web applications with SSR in mind.",
        link: "https://nextjs.org/",
        img: "/tech/nextjs-icon.svg",
      },
      {
        title: "Vite",
        description:
          "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
        link: "https://vitejs.dev/",
        img: "/tech/vitejs.svg",
      },
      {
        title: "React.js",
        img: "/tech/react-js-icon.svg",
        description:
          "React is an open-source, front-end JavaScript library used for building user interfaces. It’s particularly popular for single-page applications where you need a fast, interactive user experience",
        link: "https://react.dev/",
      },
      {
        title: "TypeScript",
        description:
          "TypeScript is a free and open-source high-level programming language developed by Microsoft. It adds static typing with optional type annotations to JavaScript, making it suitable for building large applications.",
        link: "https://www.typescriptlang.org/",
        img: "/tech/typescript-original.svg",
      },
      {
        title: "JavaScript",
        description:
          "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive. It enables complex animations, clickable buttons, popup menus, and more.",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        img: "/tech/javascript-original.svg",
      },
      {
        title: "HTML",
        description:
          "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
        img: "/tech/html5-original.svg",
        link: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
    ],
    footer: (
      <p className="text-neutral-500 text-justify dark:text-neutral-400 text-base md:text-lg max-w-4xl">
        To enhance performance and scalability, I integrate robust media
        solutions such as
        <LinkPreview
          url="https://cloudinary.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          Cloudinary
        </LinkPreview>
        and
        <LinkPreview
          url="https://uploadthing.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          UploadThing
        </LinkPreview>
        for optimized image and asset management.
      </p>
    ),
  },
  {
    category: "State Management",
    items: [
      {
        title: "Zustand",
        description:
          "Zustand is a small, fast, and scalable state management solution for React. It provides a comfy API based on hooks, making it easy to work with.",
        img: "/tech/zustand.svg",
        link: "https://zustand-demo.pmnd.rs/",
      },
      {
        title: "Redux",
        description:
          "Redux is a pattern and library for managing and updating application state. It’s commonly used with React, but you can also use it with other JavaScript frameworks.",
        img: "/tech/redux.svg",
        link: "https://redux.js.org/",
      },
    ],
    footer: (
      <p className="text-neutral-500 text-justify dark:text-neutral-400 text-base md:text-lg max-w-4xl">
        I carefully select state management strategies tailored to each
        project&apos;s needs—leveraging
        <LinkPreview
          url="https://recoiljs.org/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          Recoil
        </LinkPreview>
        for atomic updates,
        <LinkPreview
          url="https://tanstack.com/query/latest"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          TanStack Query
        </LinkPreview>
        for efficient server-side caching,
        <LinkPreview
          url="https://xstate.js.org/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          XState
        </LinkPreview>
        for complex logic flows, and
        <LinkPreview
          url="https://zod.dev/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          Zod
        </LinkPreview>
        for strict type-safe validation.
      </p>
    ),
  },
  {
    category: "Design & Styling",
    items: [
      {
        title: "Tailwind CSS",
        description:
          "Tailwind CSS is an open-source utility-first CSS framework that allows you to rapidly build modern websites directly in your HTML.",
        img: "/tech/tailwind-css-icon.svg",
        link: "https://tailwindcss.com/",
        imgClassName: "h-14",
      },
      {
        title: "CSS",
        description:
          "CSS (Cascading Style Sheets) is a style sheet language used to define the presentation and styling of HTML documents.",
        img: "/tech/css.svg",
        link: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
      {
        title: "Sass (SCSS)",
        description:
          "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
        link: "https://sass-lang.com/",
        img: "/tech/sass.svg",
      },
    ],
    footer: (
      <p className="text-neutral-500 text-justify dark:text-neutral-400 text-base md:text-lg max-w-4xl">
        I craft immersive, high-fidelity user experiences by combining
        <LinkPreview
          url="https://styled-components.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          CSS-in-JS
        </LinkPreview>
        solutions like
        <LinkPreview
          url="https://styled-components.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          Styled Components
        </LinkPreview>
        for modular styling with
        <LinkPreview
          url="https://www.framer.com/motion/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          Framer Motion
        </LinkPreview>
        and
        <LinkPreview
          url="https://greensock.com/gsap/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9377FF] to-violet-600 mx-2"
        >
          GSAP
        </LinkPreview>
        to drive fluid, engaging animations.
      </p>
    ),
  },
  {
    category: "Databases",
    items: [
      {
        title: "PostgreSQL",
        description:
          "PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development.",
        link: "https://www.postgresql.org/",
        img: "/tech/postgresql.svg",
      },
      {
        title: "MongoDB",
        description:
          "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        link: "https://www.mongodb.com/",
        img: "/tech/mongodb.svg",
      },
      {
        title: "Supabase",
        description:
          "Supabase is an open source Firebase alternative. It provides a dedicated Postgres database for your application.",
        img: "/tech/supabase-seeklogo.svg",
        link: "https://supabase.com/",
      },
      {
        title: "Xata",
        description:
          "Xata is a serverless data platform built on top of PostgreSQL. It provides a full-text and vector search engine, record-level file attachments, and table-level aggregations.",
        img: "/tech/xata.svg",
        link: "https://xata.io/",
      },
      {
        title: "Neon",
        description:
          "Neon is a serverless Postgres built for the cloud. It separates storage and compute to offer autoscaling, branching, and bottomless storage.",
        link: "https://neon.tech/",
        img: "/tech/neon.svg",
      },
      {
        title: "Drizzle ORM",
        description:
          "Drizzle ORM is a lightweight, type-safe, and performant TypeScript ORM with a focus on developer experience.",
        link: "https://orm.drizzle.team/",
        img: "/tech/drizzle-orm_dark.svg",
      },
    ],
  },
  {
    category: "Tools & Testing",
    items: [
      {
        title: "VS Code",
        description:
          "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
        link: "https://code.visualstudio.com/",
        img: "/tech/vscode.svg",
      },
      {
        title: "Postman",
        description:
          "Postman is an API platform for building and using APIs. It simplifies each step of the API lifecycle and streamlines collaboration.",
        link: "https://www.postman.com/",
        img: "/tech/postman.svg",
      },
      {
        title: "Jest",
        description:
          "Jest is a JavaScript testing framework designed to ensure the correctness of any JavaScript codebase.",
        img: "/tech/jest-js-icon.svg",
        link: "https://jestjs.io/",
      },
      {
        title: "Storybook",
        description:
          "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation.",
        img: "/tech/storybook.svg",
        link: "https://storybook.js.org/",
      },
      {
        title: "Git",
        description:
          "Git is a free and open-source distributed version control system designed for managing everything from small to very large projects with speed and efficiency.",
        img: "/tech/git.svg",
        link: "https://git-scm.com/",
      },
    ],
  },
  {
    category: "General Knowledge & Best Practices",
    items: [
      {
        title: "Responsive Design",
        description:
          "Ensuring web applications look and function perfectly across all device sizes, from mobile phones to large desktop screens.",
        link: "https://web.dev/responsive-web-design-basics/",
      },
      {
        title: "SEO",
        description:
          "Optimizing content and structure to improve visibility in search engine results and drive organic traffic.",
        link: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      {
        title: "Web Accessibility (a11y)",
        description:
          "Building inclusive web experiences that are usable by people with disabilities, following WCAG guidelines.",
        link: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
      },
      {
        title: "Performance Optimization",
        description:
          "Techniques to improve website speed and responsiveness, such as code splitting, lazy loading, and image optimization.",
        link: "https://web.dev/fast/",
      },
      {
        title: "Agile & Scrum",
        description:
          "Experience working in iterative development cycles, collaborating with cross-functional teams to deliver value incrementally.",
        link: "https://www.atlassian.com/agile",
      },
      {
        title: "CI/CD",
        description:
          "Continuous Integration and Continuous Deployment practices to automate testing and deployment workflows.",
        link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
      },
    ],
  },
];
