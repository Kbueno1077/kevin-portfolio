import { ContactMeModule } from "@/modules/ContactMeModule/ContactMeModule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Kevin Bueno for frontend, UI/UX, and AI product work — full-time, contract, or freelance.",
};

export default function ContactMe() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl font-bold p-10 text-center md:text-left">
                Contact Me
            </h1>
            <div className="overflow-auto w-full flex flex-col justify-center items-center py-5 px-5 md:px-0">
                <ContactMeModule />
            </div>
        </>
    );
}
