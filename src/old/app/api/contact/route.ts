import { NextResponse } from "next/server";

type ContactSubject = "general" | "support" | "partnership" | "feedback";

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    subject?: unknown;
    message?: unknown;
    consent?: unknown;
    company?: unknown; // honeypot
};

function isNonEmptyString(v: unknown): v is string {
    return typeof v === "string" && v.trim().length > 0;
}

function isSubject(v: unknown): v is ContactSubject {
    return v === "general" || v === "support" || v === "partnership" || v === "feedback";
}

export async function POST(req: Request) {
    let payload: ContactPayload;
    try {
        payload = (await req.json()) as ContactPayload;
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // basic bot check
    if (isNonEmptyString(payload.company)) {
        return NextResponse.json({ message: "Thanks—your message has been sent." }, { status: 200 });
    }

    const name = isNonEmptyString(payload.name) ? payload.name.trim() : "";
    const email = isNonEmptyString(payload.email) ? payload.email.trim() : "";
    const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
    const subject = isSubject(payload.subject) ? payload.subject : "general";
    const message = isNonEmptyString(payload.message) ? payload.message.trim() : "";
    const consent = payload.consent === true;

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }
    if (!consent) {
        return NextResponse.json({ error: "Please accept the consent checkbox to continue." }, { status: 400 });
    }
    if (message.length > 4000) {
        return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    // No email provider configured here by default.
    // This endpoint intentionally returns success after validation so the UI can behave realistically.
    // If you want, we can integrate an email provider (SMTP/Resend/SendGrid) later.
    console.info("[contact]", { name, email, phone, subject, messageLength: message.length });

    return NextResponse.json({ message: "Thanks—your message has been received. We’ll reply soon." }, { status: 200 });
}

