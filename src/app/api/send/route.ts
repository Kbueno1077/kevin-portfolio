import { EmailTemplate } from "@/components/emails/EmailTemplate";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return Response.json(
            { error: "Email service is not configured" },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    try {
        const { data, error } = await resend.emails.send({
            from: "Resend, Kevin's portfolio <onboarding@resend.dev>",
            to: ["kbueno1077@gmail.com"],
            subject: subject,
            react: EmailTemplate({
                firstName,
                lastName,
                email,
                subject,
                message,
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
