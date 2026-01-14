"use client";

import { IconCode } from "@tabler/icons-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function VerticalTimelineDemo() {
  const { ref: ref0, inView: inView0 } = useInView({ triggerOnce: true });
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });

  const contentStyle = {
    background: "#18181b", // zinc-900
    color: "#e5e5e5", // neutral-200
    boxShadow: "none",
    border: "1px solid #27272a", // zinc-800
    borderRadius: "1rem",
  };

  const contentArrowStyle = {
    borderRight: "7px solid #18181b", // zinc-900
  };

  const iconStyle = {
    background: "#18181b", // zinc-900
    color: "#fff",
    border: "4px solid #27272a", // zinc-800
    boxShadow: "0 0 0 2px #18181b",
  };

  return (
    <VerticalTimeline lineColor="#27272a">
      <VerticalTimelineElement
        visible={inView0}
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2016 - 2021"
        iconStyle={iconStyle}
        icon={
          <div className="flex justify-center items-center w-full h-full p-1 rounded-full bg-white overflow-hidden">
            <Image
              height={500}
              width={500}
              quality={100}
              src={"/logos/uclv.png"}
              alt={"UCLV"}
              className="w-full h-full object-contain"
            />
          </div>
        }
      >
        <div ref={ref0}>
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Central University {'"Marta Abreu"'} of Las Villas
            </h3>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="text-neutral-400 text-sm md:text-base font-semibold m-0">
                Bachelor in Computer Science
              </p>
              <p className="text-[#9377FF] text-sm md:text-base font-semibold m-0 mt-1 md:mt-0">
                Full Time
              </p>
            </div>
          </div>
          <ul className="mt-6 list-disc ml-5 space-y-2">
            {UclvBulletPoints.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-neutral-300 text-sm pl-1 tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        visible={inView1}
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2021"
        iconStyle={iconStyle}
        icon={
          <div className="flex justify-center items-center w-full h-full bg-zinc-800 rounded-full">
            <IconCode className="text-white h-6 w-6" />
          </div>
        }
      >
        <div ref={ref1}>
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Frontend Developer
            </h3>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="text-neutral-400 text-sm md:text-base font-semibold m-0">
                Freelancer
              </p>
              <p className="text-[#9377FF] text-sm md:text-base font-semibold m-0 mt-1 md:mt-0">
                Part Time
              </p>
            </div>
          </div>
          <ul className="mt-6 list-disc ml-5 space-y-2">
            {Freelancer1BulletPoints.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-neutral-300 text-sm pl-1 tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        visible={inView2}
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        className="vertical-timeline-element--work"
        date="Nov 2021 - Jul 2023"
        iconStyle={iconStyle}
        icon={
          <div className="flex justify-center items-center w-full h-full bg-black rounded-full overflow-hidden p-1">
            <Image
              height={500}
              width={500}
              quality={100}
              src={"/logos/dark_woxo.jpeg"}
              alt={"Front10 Company"}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        }
      >
        <div ref={ref2}>
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Frontend Developer
            </h3>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="text-neutral-400 text-sm md:text-base font-semibold m-0">
                Front10 - Woxo
              </p>
              <p className="text-[#9377FF] text-sm md:text-base font-semibold m-0 mt-1 md:mt-0">
                Full Time
              </p>
            </div>
          </div>
          <ul className="mt-6 list-disc ml-5 space-y-2">
            {WoxoBulletPoints.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-neutral-300 text-sm pl-1 tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        visible={inView4}
        className="vertical-timeline-element--work"
        date="2023 - 2024"
        iconStyle={iconStyle}
        icon={
          <div className="flex justify-center items-center w-full h-full bg-black rounded-full overflow-hidden p-1">
            <Image
              height={500}
              width={500}
              quality={100}
              src={"/logos/Logo.png"}
              alt={"Front10 Company"}
              className="w-full h-full object-contain"
            />
          </div>
        }
      >
        <div ref={ref4}>
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Web Developer
            </h3>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="text-neutral-400 text-sm md:text-base font-semibold m-0">
                Freelancer
              </p>
              <p className="text-[#9377FF] text-sm md:text-base font-semibold m-0 mt-1 md:mt-0">
                Full Time
              </p>
            </div>
          </div>
          <ul className="mt-6 list-disc ml-5 space-y-2">
            {Freelancer2BulletPoints.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-neutral-300 text-sm pl-1 tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        visible={inView3}
        className="vertical-timeline-element--work"
        date="Jul 2023 - Present"
        iconStyle={iconStyle}
        icon={
          <div className="flex justify-center items-center w-full h-full bg-black rounded-full overflow-hidden p-1">
            <Image
              height={500}
              width={500}
              quality={100}
              src={"/logos/front10.png"}
              alt={"Front10 Company"}
              className="w-full h-full object-contain"
            />
          </div>
        }
      >
        <div ref={ref3}>
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Lead Frontend Developer
            </h3>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="text-neutral-400 text-sm md:text-base font-semibold m-0">
                Front10 - Pros
              </p>
              <p className="text-[#9377FF] text-sm md:text-base font-semibold m-0 mt-1 md:mt-0">
                Full Time
              </p>
            </div>
          </div>
          <ul className="mt-6 list-disc ml-5 space-y-2">
            {ProsBulletPoints.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-neutral-300 text-sm pl-1 tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        visible={inView5}
        className="vertical-timeline-element--work"
        date="Sept 2024 - Present"
        iconStyle={iconStyle}
        icon={
          <div className="flex justify-center items-center w-full h-full bg-white rounded-full overflow-hidden p-1">
            <Image
              height={500}
              width={500}
              quality={100}
              src={"/logos/workinweb_logo.jpeg"}
              alt={"WorkinWeb Company"}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        }
      >
        <div ref={ref5}>
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Founder / Developer
            </h3>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <p className="text-neutral-400 text-sm md:text-base font-semibold m-0">
                WorkInWeb
              </p>
              <p className="text-[#9377FF] text-sm md:text-base font-semibold m-0 mt-1 md:mt-0">
                Full Time
              </p>
            </div>
          </div>
          <ul className="mt-6 list-disc ml-5 space-y-2">
            {WorkInWebBulletPoints.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-neutral-300 text-sm pl-1 tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

const UclvBulletPoints = [
  `Learned the basics of coding, algorithms, data structures and different paradigms.`,
  `Gained a solid understanding of the fundamentals of Java, Scala, C++`,
  `Learning about hardware components, memory, and CPU architecture.`,
  `Covering software development methodologies, testing, and project management.`,
  `Database Management Systems`,
];

const Freelancer1BulletPoints = [
  `Started my journey in the world of frontend development.`,
  `Learned the basics of HTML, CSS, and JavaScript.`,
  `Gained a solid understanding of responsive design principles.`,
  `Started in part time jobs as freelancer where rapidly learned by doing.`,
];

const Freelancer2BulletPoints = [
  `Brainstorm project ideas based on my interests, skills and things I want to try out.`,
  `Created a space for personal projects where I cant test and play with different technologies resulting in a great self-learning experience.`,
  `Sketch out the user interface (UI) and user experience (UX).`,
  `Choose the right tech stack (e.g., frontend, backend, database).`,
  `Continuously improve your project based on feedback and interesting new idea.`,
  `Deployment of project to a server or cloud platform.`,
];

const WoxoBulletPoints = [
  `Thrive in a fast-paced environment, contributing innovative ideas and swiftly executing them for continuous improvement.`,
  `Assisted in troubleshooting and improving existing code, improving software quality overall`,
  `Redesigned modules to enhance efﬁciency, resulting in a substantial performance improvement`,
  `Developed an enhanced a core library for the seamless playback of customizable in-ﬂight videos.`,
  `Exercise creative discretion to augment and reﬁne the user interface design.`,
];

const ProsBulletPoints = [
  `Implement and sustain features for a highly adaptable interface, tailored to accommodate the unique requirements of various airlines utilizing the product.`,
  `Transform Figma designs into precise and efﬁcient code`,
  `Employ responsive design principles to ensure optimal viewing and interaction experience across a wide range of devices`,
  `Prioritize tasks based on their relevance, proactively propose efﬁcient and rapidly implenting solutions to rectify unwanted behaviors.`,
  `Develop tests and conduct thorough code reviews to ensure software quality and reliability.`,
  `Worked with QA team to ﬁx bugs and improve the quality of applications`,
  `Participate in code reviews`,
];

const WorkInWebBulletPoints = [
  `Collaborate with clients to understand their business needs and target audience for effective landing page design.`,
  `Create modern, responsive landing pages that effectively showcase client products and services.`,
  `Design compelling user interfaces focused on conversion optimization and lead generation.`,
  `Implement SEO best practices and performance optimizations for improved search rankings.`,
  `Provide ongoing maintenance, analytics tracking, and iterative improvements based on user data.`,
  `Handle complete deployment process including domain setup, hosting configuration.`,
];
