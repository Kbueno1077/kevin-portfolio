import { ExpandableCardDemo } from "@/modules/ProjectsExpandable/ProjectsExpandable";

export default function Projects() {
    return (
        <>
            <div className="px-10 pt-10">
                <h1 className="text-4xl font-bold"> Projects </h1>
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center">
                <ExpandableCardDemo />
            </div>
        </>
    );
}
