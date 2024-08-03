import ExpandableCardDemo from "@/modules/ProjectsModule/expandable-card-demo-standard";

export default function Projects() {
    return (
        <>
            <h1 className="text-5xl md:text-3xl font-bold p-10 text-center md:text-left">
                Projects
            </h1>
            <div className="overflow-auto w-full flex flex-col justify-center items-center pb-5 md:pb-0">
                <ExpandableCardDemo />
            </div>
        </>
    );
}
