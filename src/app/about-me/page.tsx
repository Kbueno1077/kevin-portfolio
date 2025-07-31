import VerticalTimelineDemo from "@/modules/VerticalTimeline/VerticalTimeline";

export default function AboutMe() {
    return (
        <>
            <h1 className="text-5xl md:text-3xl font-bold p-10 text-center md:text-left">
                About Me
            </h1>
            <div className="overflow-auto w-full flex flex-col justify-center items-center pb-5">
                <VerticalTimelineDemo />
            </div>
        </>
    );
}
