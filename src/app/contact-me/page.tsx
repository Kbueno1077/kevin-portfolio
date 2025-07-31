import { ContactMeModule } from "@/modules/ContactMeModule/ContactMeModule";

export default function ContactMe() {
    return (
        <>
            <h1 className="text-5xl md:text-3xl font-bold p-10 text-center md:text-left">
                Contact Me
            </h1>
            <div className="overflow-auto w-full flex flex-col justify-center items-center py-5 px-5 md:px-0">
                <ContactMeModule />
            </div>
        </>
    );
}
