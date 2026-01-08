import { TechStackCards } from "@/modules/TechStackCards/TechStackCards";

export default function Tech() {
  return (
    <>
      <h1 className="text-5xl md:text-3xl font-bold p-10 text-center md:text-left">
        Tech Stack
      </h1>
      <TechStackCards />
    </>
  );
}
