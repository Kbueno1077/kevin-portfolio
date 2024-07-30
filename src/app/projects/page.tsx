import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-standard";

export default function Projects() {
    return (
        <>
            <h1 className="text-5xl md:text-3xl font-bold p-10">Projects</h1>
            <div className="overflow-auto w-full flex flex-col justify-center items-center">
                <ExpandableCardDemo />
            </div>
        </>
    );
}
