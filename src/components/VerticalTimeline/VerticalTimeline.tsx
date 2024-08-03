"use client";

import { IconCode } from "@tabler/icons-react";
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

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                visible={inView0}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#111827", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #374151" }}
                date="2016 - 2021"
                iconStyle={{ background: "#404040", color: "#fff" }}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <img
                            src={"/logos/uclv.png"}
                            alt={"Front10 Company"}
                            className="w-[100%] h-[100%] object-contain"
                        />
                    </div>
                }
            >
                <div ref={ref0}>
                    <div>
                        <h3 className="text-white text-[24px] font-bold">
                            Central University {'"Marta Abreu"'} of Las Villas
                        </h3>
                        <div className={"flex justify-between"}>
                            <p
                                className="text-primary text-[16px] font-semibold"
                                style={{ margin: 0 }}
                            >
                                Bachelor in Computer Science
                            </p>
                            <p
                                className=" text-[16px] font-semibold text-[#9377FF]"
                                style={{ margin: 0 }}
                            >
                                Full Time
                            </p>
                        </div>
                    </div>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {UclvBulletPoints.map((point, index) => (
                            <li
                                key={`experience-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
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
                contentStyle={{ background: "#111827", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #374151" }}
                date="2021"
                iconStyle={{ background: "#404040", color: "#fff" }}
                icon={
                    <IconCode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                }
            >
                <div ref={ref1}>
                    <div>
                        <h3 className="text-white text-[24px] font-bold">
                            Frontend Developer
                        </h3>
                        <div className={"flex justify-between"}>
                            <p
                                className="text-primary text-[16px] font-semibold"
                                style={{ margin: 0 }}
                            >
                                Freelancer
                            </p>
                            <p
                                className=" text-[16px] font-semibold text-[#9377FF]"
                                style={{ margin: 0 }}
                            >
                                Part Time
                            </p>
                        </div>
                    </div>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {Freelancer1BulletPoints.map((point, index) => (
                            <li
                                key={`experience-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                visible={inView2}
                contentStyle={{ background: "#111827", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #374151" }}
                className="vertical-timeline-element--work"
                date="Nov 2021 - Jul 2023"
                iconStyle={{
                    background: "#2B2C30",
                    color: "#fff",
                }}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <img
                            src={"/logos/dark_woxo.jpeg"}
                            alt={"Front10 Company"}
                            className="w-[60%] h-[60%] object-contain"
                        />
                    </div>
                }
            >
                <div ref={ref2}>
                    <div>
                        <h3 className="text-white text-[24px] font-bold">
                            Frontend Developer
                        </h3>
                        <div className={"flex justify-between"}>
                            <p
                                className="text-primary text-[16px] font-semibold"
                                style={{ margin: 0 }}
                            >
                                Front10 - Woxo
                            </p>
                            <p
                                className=" text-[16px] font-semibold text-[#9377FF]"
                                style={{ margin: 0 }}
                            >
                                Full Time
                            </p>
                        </div>
                    </div>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {WoxoBulletPoints.map((point, index) => (
                            <li
                                key={`experience-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                contentStyle={{ background: "#111827", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #374151" }}
                visible={inView4}
                className="vertical-timeline-element--work"
                date="2023 - Present"
                iconStyle={{ background: "#404040", color: "#fff" }}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <img
                            src={"/logos/logo.png"}
                            alt={"Front10 Company"}
                            className="w-[80%] h-[80%] object-contain"
                        />
                    </div>
                }
            >
                <div ref={ref4}>
                    <div>
                        <h3 className="text-white text-[24px] font-bold">
                            Web Developer
                        </h3>
                        <div className={"flex justify-between"}>
                            <p
                                className="text-primary text-[16px] font-semibold"
                                style={{ margin: 0 }}
                            >
                                Freelancer
                            </p>
                            <p
                                className=" text-[16px] font-semibold text-[#9377FF]"
                                style={{ margin: 0 }}
                            >
                                Full Time
                            </p>
                        </div>
                    </div>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {Freelancer2BulletPoints.map((point, index) => (
                            <li
                                key={`experience-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                contentStyle={{ background: "#111827", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #374151" }}
                visible={inView3}
                className="vertical-timeline-element--work"
                date="Jul 2023 - Present"
                iconStyle={{ background: "black", color: "#fff" }}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <img
                            src={"/logos/front10.jpg"}
                            alt={"Front10 Company"}
                            className="w-[60%] h-[60%] object-contain"
                        />
                    </div>
                }
            >
                {" "}
                <div ref={ref3}>
                    <div>
                        <h3 className="text-white text-[24px] font-bold">
                            Lead Frontend Developer
                        </h3>
                        <div className={"flex justify-between"}>
                            <p
                                className="text-primary text-[16px] font-semibold"
                                style={{ margin: 0 }}
                            >
                                Front10 - Pros
                            </p>
                            <p
                                className=" text-[16px] font-semibold text-[#9377FF]"
                                style={{ margin: 0 }}
                            >
                                Full Time
                            </p>
                        </div>
                    </div>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {ProsBulletPoints.map((point, index) => (
                            <li
                                key={`experience-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
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
    `Thrive in a fast-paced environment, contributing innovative ideas and swiftly executing 
them for continuous improvement.`,
    `Assisted in troubleshooting and improving existing code, improving software quality overall`,
    `Redesigned modules to enhance efﬁciency, resulting in a substantial performance 
improvement`,
    `Developed an enhanced a core library for the seamless playback of customizable in-ﬂight 
videos.`,
    `Exercise creative discretion to augment and reﬁne the user interface design.`,
];

const ProsBulletPoints = [
    `Implement and sustain features for a highly adaptable interface, tailored to accommodate 
    the unique requirements of various airlines utilizing the product.`,
    `Transform Figma designs into precise and efﬁcient code`,
    `Employ responsive design principles to ensure optimal viewing and interaction experience 
    across a wide range of devices`,
    `Prioritize tasks based on their relevance, proactively propose efﬁcient and rapidly implenting solutions to rectify unwanted behaviors.`,
    `Develop tests and conduct thorough code reviews to ensure software quality and reliability.`,
    `Worked with QA team to ﬁx bugs and improve the quality of applications`,
    `Participate in code reviews
`,
];
