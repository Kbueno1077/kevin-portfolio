import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";

function MoreTech() {
    return (
        <div>
            <div className="flex justify-center items-center py-10  md:mt-[100px] flex-col px-4">
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-6xl mx-auto mb-10">
                    I have also used tools like
                    <LinkPreview
                        url="https://cloudinary.com/"
                        className="font-bold"
                    >
                        {" "}
                        Cloudinary,
                    </LinkPreview>
                    <LinkPreview
                        url="https://supabase.com/"
                        className="font-bold"
                    >
                        {" "}
                        Supabase,
                    </LinkPreview>
                    <LinkPreview
                        url="https://www.mongodb.com/"
                        className="font-bold"
                    >
                        {" "}
                        MongoDB,{" "}
                    </LinkPreview>
                    which are a great way to storage data and media.
                </p>

                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-6xl mx-auto mb-10">
                    I&apos;m always trying new ways to build stuff so I have
                    given a try to some libraries like
                    <LinkPreview
                        url="https://recoiljs.org/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        {" "}
                        Recoil,
                    </LinkPreview>{" "}
                    <LinkPreview
                        url="https://xstate.js.org/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        xState
                    </LinkPreview>{" "}
                </p>

                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-6xl mx-auto mb-10">
                    And UI/UX tools to make better, faster and smoother
                    experiences like
                    <LinkPreview
                        url="https://ui.aceternity.com/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        {" "}
                        Accertenty,
                    </LinkPreview>{" "}
                    <LinkPreview
                        url="https://www.framer.com/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Framer Motion
                    </LinkPreview>{" "}
                    <span>and others</span>
                </p>
            </div>
        </div>
    );
}

export default MoreTech;
