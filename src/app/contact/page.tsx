import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - Taleemiyat",
    description: "Get in touch with us",
};

export default function ContactPage() {
    const contact = {
        addressLabel: "Address",
        addressText: "Taleemiyat — Online Learning",
        phoneLabel: "Phone",
        phone: "+123 548 6458 50",
        emailLabel: "Email",
        email: "support@taleemiyat.com",
        socials: {
            twitter: "https://twitter.com/",
            facebook: "https://facebook.com/",
            linkedin: "https://linkedin.com/",
        },
    };

    return (
        <>
            <section className="breadcrumb-area pt-175 pb-120">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="breadcrumb-content text-center">
                                <h2 className="breadcrumb-title">Contact Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb flex justify-center">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Contact
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-area pt-120 pb-120">
                <div className="container mx-auto px-4">
                    <div className="contact-wrap">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-2/3 xl:w-2/3 px-4">
                                <div className="contact-content pr-80 mb-20">
                                    <h3 className="contact-title mb-10">Send a message</h3>
                                    <p className="mb-25">
                                        Have a question about courses, teachers, or partnerships? Fill out the form and
                                        we’ll get back to you.
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 xl:w-1/3 px-4">
                                <div className="contact-info ml-50 mb-20">
                                    <h3 className="contact-title mb-40">Get in touch</h3>
                                    <div className="contact-info-item">
                                        <span>
                                            <i className="fa-thin fa-location-dot"></i>
                                            {contact.addressLabel}
                                        </span>
                                        <p>{contact.addressText}</p>
                                    </div>
                                    <div className="contact-info-item">
                                        <span>
                                            <i className="fa-thin fa-mobile-notch"></i>
                                            {contact.phoneLabel}
                                        </span>
                                        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                                    </div>
                                    <div className="contact-info-item">
                                        <span>
                                            <i className="fa-thin fa-envelope"></i>
                                            {contact.emailLabel}
                                        </span>
                                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                    </div>
                                    <div className="contact-social">
                                        <span>Social Media</span>
                                        <ul>
                                            <li>
                                                <a
                                                    href={contact.socials.twitter}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="Visit our Twitter"
                                                >
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={contact.socials.facebook}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="Visit our Facebook"
                                                >
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={contact.socials.linkedin}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="Visit our LinkedIn"
                                                >
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe
                        title="Map location"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d147120.012062842!2d13.706000467398074!3d51.075159941942076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1senveto!5e0!3m2!1sen!2sbd!4v1680961754336!5m2!1sen!2sbd"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            <div className="cta-area h3_cta-area">
                <div className="container mx-auto px-4">
                    <div className="cta-wrapper">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                                <div className="cta-content mb-30 lg:mb-0">
                                    <span className="cta-subtitle">Download App</span>
                                    <h2 className="cta-title">
                                        Are you Ready to Start your Online Course?
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                                <div className="cta-button">
                                    <a href="#" className="cta-btn">
                                        <i className="fa-brands fa-apple"></i>Apple Store
                                    </a>
                                    <a href="#" className="cta-btn">
                                        <i className="fa-brands fa-google-play"></i>Play Store
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
