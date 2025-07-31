import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    subject,
    message,
}) => (
    <div>
        <h1>
            Hello from, {firstName} {lastName}!
        </h1>

        <h2>Introduction:</h2>
        <p>My email is {email}</p>

        <h2>Message:</h2>
        <p>{message}</p>

        <br />
        <p>Send using Resend</p>
    </div>
);
