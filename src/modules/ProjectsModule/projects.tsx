import { Fragment } from "react";
import { Card } from "./expandable-card-demo-standard";

export const cards: Card[] = [
  {
    id: "Front10",
    description: "Front10",
    title: "Front10",
    first: "Front10 LLC",
    imgSrc: "/logos/front10.png",
    ctaText: "Go to Website",
    ctaText2: "Details",
    ctaLink: "https://www.front10.com/",
    tech: [],
    imageClassBig: "object-contain object-center bg-black",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            At Front10, I&apos;ve worked as both a Technical Leader and Frontend
            Developer, guiding product direction while staying deeply involved
            in implementation. My role spans multiple client-facing and internal
            projects, contributed to architectural decisions and collaborated
            closely with teammates to clarify product goals and frontend
            direction
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
    id: "TravelPaas",
    description: "Front10 - PROS",
    title: "TravelPaas",
    imgSrc: "/big/Pros.jpg",
    ctaText: "Go to Product",
    ctaText2: "Details",
    ctaLink: "https://book.azoresairlines.pt/booking/",
    tech: ["React.js", "TypeScript", "JavaScript", "Sass"],
    imageClassSmall: "object-cover object-center",
    imageClassBig: "object-cover object-center",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            As the frontend developer behind Digital Retail, I&apos;ve helped
            shape a highly customizable white-label booking engine built for
            multi-tenant environments. Designed to flex around each
            airline&apos;s brand identity and retail strategy, our Internet
            Booking Engine (IBE) supports everything from full-service carriers
            to lean startups—with tailored UX across desktop and mobile. The
            platform includes robust flows for booking management, award
            shopping, re-shopping, and cart functionality. Thanks to our
            component-based UI, scalable logic layer, and Retail APIs built on
            the PROS Offer/Order Management platform, airlines can configure
            features, visuals, and interactions to suit their unique
            needs—without compromising performance or consistency.
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
    id: "Woxo Video Editor",
    description: "Front10",
    title: "Woxo Video Editor",
    imgSrc: "/big/woxo.png",
    ctaText: "Go to Product",
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
    imageClassSmall: "object-contain object-center bg-white",
    imageClassBig: "object-contain object-center bg-white",
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
    id: "WorkInWeb",
    title: "WorkInWeb",
    description: "Founder",
    first: "WorkInWeb",
    imgSrc: "/big/workinweb.svg",
    ctaText: "Go to Website",
    ctaText2: "Details",
    ctaLink: "https://weworkinweb.com/",
    tech: ["Astro", "React", "TypeScript", "TailwindCSS"],
    imageClassSmall: "object-contain object-center p-2",
    imageClassBig: "object-contain object-center p-2",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            I run a small business that crafts modern, responsive landing pages
            for companies aiming to build their online presence. We specialize
            in clean, professional designs paired with reliable hosting, helping
            businesses present their products and services with clarity and
            confidence.
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
    id: "The Florida Clinics Aesthetic",
    title: "The Florida Clinics Aesthetic",
    description: "Website of a Aesthetic Clinic",
    imgSrc: "/logos/floridaclinic.png",
    ctaText: "Go to Website",
    ctaText2: "Details",
    ctaLink: "https://www.thefloridaclinicsaesthetics.com/",
    tech: ["React", "TypeScript", "TailwindCSS", "Next.js"],
    imageClassSmall: "object-contain object-center",
    imageClassBig: "object-contain object-center p-2",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Design and development of a website for a Aesthetic Clinic based in
            Florida
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
    id: "Evan Home Care",
    title: "Evan Home Care",
    description: "Website of a Home Care Agency",
    imgSrc: "/logos/evan.png",
    ctaText: "Go to Website",
    ctaText2: "Details",
    ctaLink: "https://evanhomecare.com/",
    tech: ["React", "TypeScript", "TailwindCSS", "Next.js"],
    imageClassSmall: "object-cover object-center",
    imageClassBig: "object-cover object-center",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Website of a Home Care Agency with internal analysis tools, training
            video section and employment submission form.
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
    id: "Beer Warehouse",
    title: "Beer Warehouse",
    description: "Web App and Mobile App (Demo)",
    first: "Personal Demos",

    imgSrc: "/big/beer-warehouse.png",
    ctaText: "Go to Product",
    ctaText2: "Details",
    ctaLink: [
      "https://beer-warehouse.kbueno-studio.com/en",
      "https://github.com/Kbueno1077/beer-warehouse-rn",
    ],
    ctaTexts: ["Live Demo", "GitHub"],

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
      "React Native",
      "Expo",
    ],
    imageClassSmall: "object-cover object-center",
    imageClassBig: "object-cover object-center",
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
          <br />
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
    id: "Trip Planner AI",
    description: "Personal Project",
    title: "Trip Planner AI",
    imgSrc: "/logos/tripplanner.svg",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://trip-planner.kbueno-studio.com/",
      "https://github.com/Kbueno1077/trip-planner",
    ],
    ctaTexts: ["Live Demo", "GitHub"],

    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "AI",
      "Vercel AI SDK",
      "Gemini",
      "Google Maps API",
      "Places API",
    ],
    imageClassSmall: "object-contain object-center p-2",
    imageClassBig: "object-contain object-center p-2",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Trip Planner AI is a platform that allows you to plan your trip with
            ease. It is built with React, Next.js, TypeScript, Vercel AI SDK,
            and Gemini. (is a demo project to learn and showcase the use of LLMs
            and ai sdk)
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
    id: "Ai Sdk Playground",
    description: "Personal Project",
    title: "Ai Sdk Playground",
    imgSrc: "/logos/aisdk.png",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://ai-sdk.kbueno-studio.com/",
      "https://github.com/Kbueno1077/next-js-aisdk",
    ],
    ctaTexts: ["Live Demo", "GitHub"],

    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "AI",
      "Vercel AI SDK",
      "Gemini",
      "OpenAI",
    ],
    imageClassSmall: "object-contain object-center bg-white",
    imageClassBig: "object-contain object-center bg-white",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Ai Sdk Playground is a demo project showcasing how to use Vercel AI
            SDK to build AI-powered applications. It demonstrates simple
            integration with LLMs, Streaming Responses, AI Chat, Structured
            data, multi-modal, image generation, voice generation, voice
            transcription to tools, and more.
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
    id: "Con10th",
    description: "Personal Project",
    title: "Con10th",
    imgSrc: "/logos/con10th.svg",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://con10th.kbueno-studio.com/",
      "https://github.com/Kbueno1077/con10th",
    ],
    ctaTexts: ["Live Demo", "GitHub"],

    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "AI",
      "Vercel AI SDK",
      "Gemini",
    ],
    imageClassSmall: "object-contain object-center",
    imageClassBig: "object-contain object-center p-2",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            Con10th is a platform that allows you to transform your ideas into
            engaging content in seconds. Our AI-powered platform helps you
            create high-quality, original content for any purpose with advanced
            machine learning. (is a demo project to learn and showcase the use
            of LLMs and ai sdk)
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
    id: "EZ - Data View",
    description: "Personal Project",
    title: "EZ - Data View",
    imgSrc: "/big/ez-charts.png",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://ezdataview.kbueno-studio.com/",
      "https://github.com/Kbueno1077/ezdataview",
    ],
    ctaTexts: ["Live Demo", "GitHub"],

    tech: ["React.js", "Next.js", "TypeScript", "Hero UI", "Charts", "Zustand"],
    imageClassSmall: "object-cover object-center scale-110",
    imageClassBig: "object-cover object-center",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>Build your charts on the web with ease. Customizable Charts</p>
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
    id: "FormMe",
    title: "FormMe",
    imgSrc: "/big/formMe.png",
    description: "Personal Project  ",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://form-me.kbueno-studio.com/",
      "https://github.com/Kbueno1077/formMe",
    ],
    ctaTexts: ["Live Demo", "GitHub"],
    tech: ["Svelte", "SvelteKit", "@skeleton.dev", "Firebase"],
    imageClassSmall: "object-contain object-center bg-white",
    imageClassBig: "object-contain object-center bg-white",
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
    id: "Todo - Doing - Done",
    title: "Todo - Doing - Done",
    imgSrc: "/big/todoLogo.png",
    description: "Personal Project  ",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://todo-doing-done.kbueno-studio.com/",
      "https://github.com/Kbueno1077/todo-doing-done",
    ],
    ctaTexts: ["Live Demo", "GitHub"],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Supabase",
      "DaisyUI",
    ],
    imageClassSmall: "object-cover object-center scale-110",
    imageClassBig: "object-cover object-center",
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
    id: "GranLine Maps",
    title: "GranLine Maps",
    imgSrc: "/big/maps.png",
    description: "Personal Project  ",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://grand-line.kbueno-studio.com/",
      "https://github.com/Kbueno1077/grand-line",
    ],
    ctaTexts: ["Live Demo", "GitHub"],
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
    imageClassSmall: "object-contain object-center",
    imageClassBig: "object-contain object-center",
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
    id: "Olympus Dominoes",
    title: "Olympus Dominoes",
    imgSrc: "/big/olympus.png",
    description: "Personal Project  ",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://olympus-dominoes.kbueno-studio.com/",
      "https://github.com/Kbueno1077/olympus-dominoes",
    ],
    ctaTexts: ["Live Demo", "GitHub"],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "MaterialUI",
      "TailwindCSS",
      "Supabase",
      "Recoil",
    ],
    imageClassSmall: "object-cover object-center scale-110",
    imageClassBig: "object-cover object-center",
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
    id: "Weather-Cast",
    title: "Weather-Cast",
    imgSrc: "/big/weather-cast.png",
    description: "Personal Project  ",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://weather-cast.kbueno-studio.com",
      "https://github.com/Kbueno1077/weather-cast",
    ],
    ctaTexts: ["Live Demo", "GitHub"],
    tech: [
      "React.js",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Tomorrows Weather API",
      "Leaflet",
    ],
    imageClassSmall: "object-contain object-center bg-[#B4C0C8]",
    imageClassBig: "object-contain object-center bg-[#B4C0C8]",
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
  {
    id: "Storybook-Demo",
    title: "Storybook-Demo",
    imgSrc: "/big/storybook.svg",
    description: "Personal Project  ",
    ctaText: "Live Demo",
    ctaText2: "Details",
    ctaLink: [
      "https://storybook-demo.kbueno-studio.com/",
      "https://github.com/Kbueno1077/storybook-demo",
    ],
    ctaTexts: ["Live Demo", "GitHub"],
    tech: ["React.js", "Storybook", "TypeScript", "TailwindCSS"],
    imageClassSmall: "object-contain object-center p-2",
    imageClassBig: "object-contain object-center",
    content: (technologies: string[]) => {
      return (
        <div>
          <p>
            A demo project showcasing component development and documentation
            using Storybook. This project demonstrates best practices for
            building reusable UI components, including interactive
            documentation, different component states, and accessibility
            features. The demo includes examples of buttons, forms, cards and
            other common UI elements.
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
