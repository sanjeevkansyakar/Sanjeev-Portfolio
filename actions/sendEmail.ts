"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contactFormEmail";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact From <onboarding@resend.dev>",
            to: "techtalk2541@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (error) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
