import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact Us - Humari Product",
    description: "Get in touch with us",
};

export default function ContactPage() {
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
                                    <h3 className="contact-title mb-25">Send Me Message</h3>
                                    <form action="#" className="contact-form">
                                        <div className="flex flex-wrap -mx-4">
                                            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                                                <div className="contact-form-input mb-30">
                                                    <input type="text" placeholder="Your Name" />
                                                    <span className="inner-icon">
                                                        <i className="fa-thin fa-user"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                                                <div className="contact-form-input mb-30">
                                                    <input type="email" placeholder="Email Address" />
                                                    <span className="inner-icon">
                                                        <i className="fa-thin fa-envelope"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                                                <div className="contact-form-input mb-30">
                                                    <input type="text" placeholder="Your Number" />
                                                    <span className="inner-icon">
                                                        <i className="fa-thin fa-phone-volume"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 px-4">
                                                <div className="contact-form-input">
                                                    <span className="inner-icon inner-icon-select">
                                                        <i className="fa-thin fa-circle-exclamation"></i>
                                                    </span>
                                                    <select
                                                        name="select"
                                                        className="contact-form-list has-nice-select mb-30"
                                                    >
                                                        <option value="1">Select Subject</option>
                                                        <option value="2">Art & Design</option>
                                                        <option value="3">Graphic Design</option>
                                                        <option value="4">Web Design</option>
                                                        <option value="5">UX/UI Design</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="w-full px-4">
                                                <div className="contact-form-input mb-50 contact-form-textarea">
                                                    <textarea
                                                        name="message"
                                                        cols={30}
                                                        rows={10}
                                                        placeholder="Feel free to get in touch!"
                                                    ></textarea>
                                                    <span className="inner-icon">
                                                        <i className="fa-thin fa-pen"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full px-4">
                                                <div className="contact-form-submit mb-30">
                                                    <div className="contact-form-btn">
                                                        <a href="#" className="theme-btn contact-btn">
                                                            Send Message
                                                        </a>
                                                    </div>
                                                    <div className="contact-form-condition">
                                                        <label className="condition_label">
                                                            I agree that my data is collected and stored.
                                                            <input type="checkbox" />
                                                            <span className="check_mark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 xl:w-1/3 px-4">
                                <div className="contact-info ml-50 mb-20">
                                    <h3 className="contact-title mb-40">Get In Touch</h3>
                                    <div className="contact-info-item">
                                        <span>
                                            <i className="fa-thin fa-location-dot"></i>Address
                                        </span>
                                        <p>Hilton Conference Centre</p>
                                    </div>
                                    <div className="contact-info-item">
                                        <span>
                                            <i className="fa-thin fa-mobile-notch"></i>Phone
                                        </span>
                                        <a href="tel:+123548645850">+123 548 6458 50</a>
                                    </div>
                                    <div className="contact-info-item">
                                        <span>
                                            <i className="fa-thin fa-envelope"></i>Email
                                        </span>
                                        <a href="mailto:example@gmail.com">Example@gmail.com</a>
                                    </div>
                                    <div className="contact-social">
                                        <span>Social Media</span>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
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
