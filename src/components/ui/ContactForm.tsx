"use client";

import { useId, useMemo, useState } from "react";

type ContactSubject = "general" | "support" | "partnership" | "feedback";
type ContactSubjectOrEmpty = "" | ContactSubject;

type SubmitState =
    | { status: "idle" }
    | { status: "submitting" }
    | { status: "success"; message: string }
    | { status: "error"; message: string };

const SUBJECT_OPTIONS: Array<{ value: ContactSubject; label: string }> = [
    { value: "general", label: "General inquiry" },
    { value: "support", label: "Support" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" },
];

const MAX_MESSAGE_LENGTH = 4000;

function isValidEmail(v: string) {
    // pragmatic validation (avoids false negatives vs complex RFC patterns)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function ContactForm() {
    const formId = useId();
    const [state, setState] = useState<SubmitState>({ status: "idle" });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState<ContactSubjectOrEmpty>("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false);
    const [company, setCompany] = useState(""); // honeypot

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone: false,
        subject: false,
        message: false,
        consent: false,
    });

    const canSubmit = useMemo(() => {
        if (!consent) return false;
        if (!name.trim()) return false;
        if (!email.trim() || !isValidEmail(email)) return false;
        if (!subject) return false;
        if (!message.trim()) return false;
        if (message.trim().length > MAX_MESSAGE_LENGTH) return false;
        return true;
    }, [consent, email, message, name, subject]);

    const errors = useMemo(() => {
        const next: Record<string, string> = {};
        if (!name.trim()) next.name = "Please enter your name.";
        if (!email.trim()) next.email = "Please enter your email.";
        else if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
        if (!subject) next.subject = "Please select a subject.";
        if (!message.trim()) next.message = "Please write a short message.";
        else if (message.trim().length > MAX_MESSAGE_LENGTH) next.message = `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
        if (!consent) next.consent = "Please accept consent to continue.";
        return next;
    }, [consent, email, message, name, subject]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (state.status === "submitting") return;

        setTouched({
            name: true,
            email: true,
            phone: true,
            subject: true,
            message: true,
            consent: true,
        });
        if (!canSubmit) {
            setState({ status: "error", message: "Please fix the highlighted fields and try again." });
            return;
        }

        setState({ status: "submitting" });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject: subject || "general",
                    message,
                    consent,
                    company,
                }),
            });

            const data = (await res.json().catch(() => null)) as null | { message?: string; error?: string };
            if (!res.ok) {
                setState({ status: "error", message: data?.error || "Something went wrong. Please try again." });
                return;
            }

            setState({ status: "success", message: data?.message || "Thanks—your message has been sent." });
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
            setConsent(false);
            setCompany("");
            setTouched({
                name: false,
                email: false,
                phone: false,
                subject: false,
                message: false,
                consent: false,
            });
        } catch {
            setState({ status: "error", message: "Network error. Please try again." });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form" aria-describedby={`${formId}-status`}>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                    <div className="contact-form-input mb-30">
                        <label className="sr-only" htmlFor={`${formId}-name`}>
                            Your name
                        </label>
                        <input
                            id={`${formId}-name`}
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                            aria-invalid={touched.name && Boolean(errors.name)}
                            aria-describedby={touched.name && errors.name ? `${formId}-name-error` : undefined}
                            required
                        />
                        <span className="inner-icon" aria-hidden="true">
                            <i className="fa-thin fa-user"></i>
                        </span>
                        {touched.name && errors.name ? (
                            <p id={`${formId}-name-error`} className="mt-2 text-sm" role="alert">
                                {errors.name}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                    <div className="contact-form-input mb-30">
                        <label className="sr-only" htmlFor={`${formId}-email`}>
                            Email address
                        </label>
                        <input
                            id={`${formId}-email`}
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                            aria-invalid={touched.email && Boolean(errors.email)}
                            aria-describedby={touched.email && errors.email ? `${formId}-email-error` : undefined}
                            required
                        />
                        <span className="inner-icon" aria-hidden="true">
                            <i className="fa-thin fa-envelope"></i>
                        </span>
                        {touched.email && errors.email ? (
                            <p id={`${formId}-email-error`} className="mt-2 text-sm" role="alert">
                                {errors.email}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                    <div className="contact-form-input mb-30">
                        <label className="sr-only" htmlFor={`${formId}-phone`}>
                            Phone number (optional)
                        </label>
                        <input
                            id={`${formId}-phone`}
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            placeholder="Phone (optional)"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                        />
                        <span className="inner-icon" aria-hidden="true">
                            <i className="fa-thin fa-phone-volume"></i>
                        </span>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                    <div className="contact-form-input">
                        <label className="sr-only" htmlFor={`${formId}-subject`}>
                            Subject
                        </label>
                        <span className="inner-icon inner-icon-select" aria-hidden="true">
                            <i className="fa-thin fa-circle-exclamation"></i>
                        </span>
                        <select
                            id={`${formId}-subject`}
                            name="subject"
                            className="contact-form-list has-nice-select mb-30"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value as ContactSubjectOrEmpty)}
                            onBlur={() => setTouched((t) => ({ ...t, subject: true }))}
                            aria-invalid={touched.subject && Boolean(errors.subject)}
                            aria-describedby={touched.subject && errors.subject ? `${formId}-subject-error` : undefined}
                        >
                            <option value="">Select subject</option>
                            {SUBJECT_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        {touched.subject && errors.subject ? (
                            <p id={`${formId}-subject-error`} className="mt-2 text-sm" role="alert">
                                {errors.subject}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="w-full px-4">
                    <div className="contact-form-input mb-50 contact-form-textarea">
                        <label className="sr-only" htmlFor={`${formId}-message`}>
                            Message
                        </label>
                        <textarea
                            id={`${formId}-message`}
                            name="message"
                            cols={30}
                            rows={10}
                            placeholder="Tell us how we can help…"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                            maxLength={MAX_MESSAGE_LENGTH + 200} // allow typing, validate at submit
                            aria-invalid={touched.message && Boolean(errors.message)}
                            aria-describedby={`${formId}-message-help${touched.message && errors.message ? ` ${formId}-message-error` : ""}`}
                            required
                        ></textarea>
                        <span className="inner-icon" aria-hidden="true">
                            <i className="fa-thin fa-pen"></i>
                        </span>
                        <div className="mt-2 flex items-center justify-between gap-3">
                            <p id={`${formId}-message-help`} className="text-sm">
                                Max {MAX_MESSAGE_LENGTH} characters.
                            </p>
                            <p className="text-sm" aria-label="Character count">
                                {message.trim().length}/{MAX_MESSAGE_LENGTH}
                            </p>
                        </div>
                        {touched.message && errors.message ? (
                            <p id={`${formId}-message-error`} className="mt-2 text-sm" role="alert">
                                {errors.message}
                            </p>
                        ) : null}
                    </div>
                </div>

                {/* honeypot (hidden from users) */}
                <div className="sr-only" aria-hidden="true">
                    <label htmlFor={`${formId}-company`}>Company</label>
                    <input
                        id={`${formId}-company`}
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>

                <div className="w-full px-4">
                    <div className="contact-form-submit mb-30">
                        <div className="contact-form-btn">
                            <button
                                type="submit"
                                className="theme-btn contact-btn"
                                disabled={!canSubmit || state.status === "submitting"}
                            >
                                {state.status === "submitting" ? "Sending…" : "Send Message"}
                            </button>
                        </div>
                        <div className="contact-form-condition">
                            <label className="condition_label">
                                I agree that my data may be used to respond to this request.
                                <input
                                    type="checkbox"
                                    checked={consent}
                                    onChange={(e) => setConsent(e.target.checked)}
                                    onBlur={() => setTouched((t) => ({ ...t, consent: true }))}
                                    aria-invalid={touched.consent && Boolean(errors.consent)}
                                    aria-describedby={touched.consent && errors.consent ? `${formId}-consent-error` : undefined}
                                    required
                                />
                                <span className="check_mark"></span>
                            </label>
                            {touched.consent && errors.consent ? (
                                <p id={`${formId}-consent-error`} className="mt-2 text-sm" role="alert">
                                    {errors.consent}
                                </p>
                            ) : null}
                        </div>

                        <p
                            id={`${formId}-status`}
                            className="mt-3 text-sm"
                            role={state.status === "error" ? "alert" : "status"}
                            aria-live="polite"
                        >
                            {state.status === "success" ? state.message : null}
                            {state.status === "error" ? state.message : null}
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

