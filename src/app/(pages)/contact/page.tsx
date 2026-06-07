import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: `Contact - ${process.env.NEXT_APP_NAME}`,
    description: `${process.env.NEXT_APP_NAME} is a platform for learning and teaching`,
    openGraph: {
        images: "/assets/img/favicon/apple-touch-icon.png"
    }
};
export default async function Contact() {
    return (
        <>
            <section>
                <div className="inner">
                    <div className="tc mb-[60px]">
                        <div className="chip"><span className="chip-dot"></span>Get In Touch</div>
                        <h1 className="sec-title">Contact Us</h1>
                        <p className="sec-sub">Have a question or need help? We{"'"}re here for you — typically respond within 2 hours.</p>
                    </div>
                    <div className="contact-grid">
                        <div>
                            <div className="contact-item"><div className="contact-icon">📧</div><div><div className="contact-label">Email</div><div className="contact-val">hello@educonnect.com</div></div></div>
                            <div className="contact-item"><div className="contact-icon">📞</div><div><div className="contact-label">Phone</div><div className="contact-val">+44 20 7946 0958</div></div></div>
                            <div className="contact-item"><div className="contact-icon">📍</div><div><div className="contact-label">Head Office</div><div className="contact-val">12 Innovation Sq, London, EC1A 4AB</div></div></div>
                            <div className="contact-item"><div className="contact-icon">🕐</div><div><div className="contact-label">Support Hours</div><div className="contact-val">Mon–Sat: 8AM – 10PM (UK Time)</div></div></div>
                            <div className="mt-8">
                                <h3 className="font-[Sora] font-bold text-base mb-4">Follow Us</h3>
                                <div className="socials">
                                    <a className="soc">tw</a>
                                    <a className="soc">fb</a>
                                    <a className="soc">ig</a>
                                    <a className="soc">li</a>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-[rgba(13,148,136,0.1)] to-transparent border border-[rgba(45,212,191,0.2)] rounded-2xl p-[22px] mt-7">
                                <div className="text-base font-bold mb-2">🎓 Are you a teacher?</div>
                                <p className="text-[0.85rem] text-[var(--text-m)] mb-3.5">Join 5,200+ educators earning on EduConnect.</p>
                                <Link className="btn btn-glow btn-sm" href={'/register'}>Apply to Teach →</Link>
                            </div>
                        </div>
                        <div className="contact-form-box">
                            <h3>Send Us a Message</h3>
                            <div className="form-row mb-3.5">
                                <input className="fi mb-0" type="text" placeholder="First Name" />
                                <input className="fi mb-0" type="text" placeholder="Last Name" />
                            </div>
                            <input className="fi" type="email" placeholder="Email Address" />
                            <select className="fi">
                                <option>Select Topic</option>
                                <option>Booking Help</option>
                                <option>Technical Support</option>
                                <option>Teacher Application</option>
                                <option>Billing &amp; Payments</option>
                                <option>Partnership</option>
                                <option>Other</option>
                            </select>
                            <textarea className="fi min-h-[130px] resize-y font-[DM_Sans]" placeholder="Your message…"></textarea>
                            <div className="btn btn-glow w-full justify-center">Send Message →</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}