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
      "React is an open-source, front-end JavaScript library used for building user interfaces. It’s particularly popular for single-page applications where you need a fast, interactive user experience",
    link: "https://react.dev/",
  },
  {
    title: "Next.js",
    description:
      "Next.js is a React framework for building full-stack web applications with SSR in mind. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
    link: "https://nextjs.org/",
    img: "/tech/nextjs-icon.svg",
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
      "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive. It enables complex animations, clickable buttons, popup menus, and more. JavaScript is a core technology of the Web, alongside HTML and CSS. ",
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    img: "/tech/javascript-original.svg",
  },
  {
    title: "Zustand",
    description:
      "Zustand is a small, fast, and scalable state management solution for React. It provides a comfy API based on hooks, making it easy to work with",
    img: "/tech/zustand.svg",
    link: "https://zustand-demo.pmnd.rs/",
  },
  {
    title: "Redux",
    description:
      "Redux is a pattern and library for managing and updating application state. It’s commonly used with React, but you can also use it with other JavaScript frameworks or libraries. Instead of scattering state across various components, Redux centralizes it in a single store. ",
    img: "/tech/redux.svg",
    link: "https://redux.js.org/",
  },

  {
    title: "HTML",
    description:
      " HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. When you create a web page, you use HTML to structure its elements. ",
    img: "/tech/html5-original.svg",
    link: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) is a style sheet language used to define the presentation and styling of HTML documents. It allows you to control how HTML elements are displayed on a web page, including aspects like fonts, colors, spacing, column layouts, and animations. ",
    img: "/tech/css.svg",
    link: "https://developer.mozilla.org/es/docs/Web/CSS",
  },

  {
    title: "Taiwindcss",
    description:
      "Tailwind CSS is an open-source utility-first CSS framework that allows you to rapidly build modern websites directly in your HTML.  It’s highly customizable, scales well on large teams, and adapts to any design.",
    img: "/tech/tailwind-css-icon.svg",
    link: "https://tailwindcss.com/",
    imgClassName: "h-14",
  },
  {
    title: "Next UI",
    description:
      "NextUI is a beautiful, fast, and modern React UI library that allows you to create stunning websites and applications, regardless of your design experience.",
    img: "/tech/nextUI.png",
    link: "https://nextui.org/",
  },
  {
    title: "Material UI",
    description:
      " Material UI is an open-source React component library that implements Google’s Material Design. It offers a comprehensive collection of prebuilt components, including buttons, text fields, tables, alerts, tooltips, and more. ",
    img: "/tech/material.svg",
    link: "https://mui.com/material-ui/",
  },

  {
    title: "Xata",
    description:
      "Xata is a serverless data platform built on top of PostgreSQL. It provides a full-text and vector search engine, record-level file attachments, and table-level aggregations. With Xata, you get a single consistent REST API with SDKs",
    img: "/tech/xata.svg",
    link: "https://xata.io/",
  },
  {
    title: "Storybook",
    description:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation.",
    img: "/tech/storybook.svg",
    link: "https://next-auth.js.org/",
  },
  {
    title: "Storybook",
    description:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation.",
    img: "/tech/storybook.svg",
    link: "https://storybook.js.org/",
  },
  {
    title: "Jest",
    description:
      "Jest is a JavaScript testing framework designed to ensure the correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar, and feature-rich API that provides quick results1.",
    img: "/tech/jest-js-icon.svg",
    link: "https://jestjs.io/",
  },

  {
    title: "Git",
    description:
      "Git is a free and open-source distributed version control system designed for managing everything from small to very large projects with speed and efficiency. It’s easy to learn and has a tiny footprint, offering lightning-fast performance.",
    img: "/tech/git.svg",
    link: "https://git-scm.com/",
  },
];
