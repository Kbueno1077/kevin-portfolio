"use client";
import { TextArea } from "@/components/ui/areatext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

export function ContactMeModule() {
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    function setCSSLink() {
        var ss = document.createElement("link");
        ss.rel = "stylesheet";
        if (true) {
            ss.href =
                "//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css";
        } else {
            ss.href =
                "//cdn.jsdelivr.net/npm/@sweetalert2/theme-minimal/minimal.css";
        }
        document.head.appendChild(ss);
    }

    useEffect(() => {
        setCSSLink();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === "firstname") {
            setFirstname(value);
        } else if (id === "lastname") {
            setLastname(value);
        } else if (id === "email") {
            setEmail(value);
        } else if (id === "subject") {
            setSubject(value);
        } else if (id === "message") {
            setMessage(value);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = [
            !firstname,
            !lastname,
            !email,
            !subject,
            !message,
        ].filter(Boolean);
        if (errors.length > 0) {
            Swal.fire({
                title: "Error!",
                text: "Please fill in all the fields",
                icon: "error",
                confirmButtonText: "Continue",
                willOpen: () => {
                    setCSSLink();
                },
            });
            return;
        }

        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: firstname,
                lastName: lastname,
                email: email,
                subject: subject,
                message: message,
            }),
        });

        console.log(response);

        if (response.ok) {
            Swal.fire({
                title: "Message sent!",
                text: "Your message has been sent, keep an eye out for a response in your inbox",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "An error has ocurred and couldn't send the message, you can try again later or send the message to this email address: kbueno1077@gmail.com",
                icon: "error",
                confirmButtonText: "Continue",
            });
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Reach out
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Feel free to contact me — I’m all ears!
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                            onChange={handleChange}
                            value={firstname}
                            id="firstname"
                            placeholder="John"
                            type="text"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input
                            onChange={handleChange}
                            value={lastname}
                            id="lastname"
                            placeholder="Doe"
                            type="text"
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        onChange={handleChange}
                        value={email}
                        id="email"
                        placeholder="contactme.at@mail.com"
                        type="email"
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                        onChange={handleChange}
                        value={subject}
                        id="subject"
                        placeholder="Subject"
                        type="text"
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Message</Label>
                    <TextArea
                        onChange={handleChange}
                        value={message}
                        className="h-40"
                        id="message"
                        placeholder="Message ..."
                        type="text"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br cursor-pointer relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Send mail &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
