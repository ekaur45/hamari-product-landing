import { Metadata } from "next";

export const metadata: Metadata = {
    title: `About - ${process.env.NEXT_APP_NAME}`,
    description: `${process.env.NEXT_APP_NAME} is a platform for learning and teaching`,
    openGraph:{
        images:"/assets/img/favicon/apple-touch-icon.png"
    }
};
export default function About() {
    return (
        <>
            <div className="about-hero">
                <div className="inner">
                    <div className="chip">
                        <span className="chip-dot">
                        </span>
                        Our Story
                    </div>
                    <h1>
                        Connecting Learners With
                        <span className="grad-text">
                            World-Class Teachers
                        </span>
                    </h1>
                    <p className="text-[var(--text-m)] text-[1.05rem] max-w-[620px] mx-auto mt-5 leading-[1.8]">
                        EduConnect was founded in 2022 with a simple belief: every student deserves access to excellent teaching, regardless of where they live or what they can afford.
                    </p>
                </div>
            </div>
            <section className="pt-0">
                <div className="inner">
                    <div className="mission-box">
                        <h2>
                            Our Mission
                        </h2>
                        <p>
                            To democratise education by building the world{"'"}s most trusted marketplace connecting passionate teachers with students who need them — powered by technology that makes learning more effective, accessible, and affordable than ever before.
                        </p>
                    </div>

                    <div className="tc mb-12">
                        <div className="chip">
                            <span className="chip-dot">
                            </span>
                            Our Values
                        </div>
                        <h2 className="sec-title">
                            What We Stand For
                        </h2>
                    </div>
                    <div className="value-grid">
                        <div className="gc value-card">
                            <div className="value-icon">🎯</div>
                            <h3>
                                Excellence First
                            </h3>
                            <p>
                                Every teacher on our platform is rigorously vetted. We believe in quality over quantity.
                            </p>
                        </div>
                        <div className="gc value-card">
                            <div className="value-icon">🌍</div>
                            <h3>
                                Accessibility
                            </h3>
                            <p>
                                Geography should never limit a student{"'"}s potential. We serve learners in 40+ countries.
                            </p>
                        </div>
                        <div className="gc value-card">
                            <div className="value-icon">🔐</div>
                            <h3>
                                Trust &amp; Safety
                            </h3>
                            <p>
                                Background checks, verified qualifications, and parent oversight keep every student safe.
                            </p>
                        </div>
                        <div className="gc value-card"><div className="value-icon">💡</div><h3>Innovation</h3><p>From AI homework help to real-time whiteboards, we push the boundaries of EdTech.</p></div>
                        <div className="gc value-card"><div className="value-icon">🤝</div><h3>Fair for Teachers</h3><p>Teachers set their own rates and keep the majority of their earnings. Their success is our success.</p></div>
                        <div className="gc value-card"><div className="value-icon">👨&zwj;👩&zwj;👧</div><h3>Family-Centred</h3><p>We build tools for parents too — because education is a team effort.</p></div>
                    </div>

                    <div className="mt-20">
                        <div className="tc mb-12" ><div className="chip"><span className="chip-dot"></span>Our Team</div><h2 className="sec-title">The People Behind EduConnect</h2></div>
                        <div className="team-grid">
                            <div className="gc team-card"><div className="team-av bg-gradient-to-br from-[var(--teal-d)] to-[var(--teal)]">AK</div><div className="team-name">Amir Khan</div><div className="team-role">CEO &amp; Co-Founder</div><div className="team-bio">Former head teacher turned tech entrepreneur. 12 years in education before founding EduConnect.</div></div>
                            <div className="gc team-card"><div className="team-av bg-gradient-to-br from-[#5B21B6] to-[#7C3AED]">SR</div><div className="team-name">Sofia Rodriguez</div><div className="team-role">CTO &amp; Co-Founder</div><div className="team-bio">Ex-Google engineer. Built the platform from scratch and leads a team of 24 engineers.</div></div>
                            <div className="gc team-card"><div className="team-av bg-gradient-to-br from-[#92400E] to-[#D97706]">TN</div><div className="team-name">Tariq Nasser</div><div className="team-role">Chief Product Officer</div><div className="team-bio">Previously at Duolingo. Obsessed with user experience and making learning genuinely enjoyable.</div></div>
                            <div className="gc team-card"><div className="team-av bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]">LP</div><div className="team-name">Laura Patel</div><div className="team-role">Head of Teacher Success</div><div className="team-bio">Onboarded our first 500 teachers personally. Champion of educator rights and fair pay.</div></div>
                        </div></div>

                    <div className="grid grid-cols-4 gap-5 mt-15 text-center">
                        <div className="gc p-7"><div className="font-[Sora] text-[2.5rem] font-extrabold text-[var(--teal-l)] mb-1.5">5,200+</div><div className="text-[0.85rem] text-[var(--text-m)]">Verified Teachers</div></div>
                        <div className="gc p-7"><div className="font-[Sora] text-[2.5rem] font-extrabold text-[var(--teal-l)] mb-1.5">12,000+</div><div className="text-[0.85rem] text-[var(--text-m)]">Active Students</div></div>
                        <div className="gc p-7"><div className="font-[Sora] text-[2.5rem] font-extrabold text-[var(--teal-l)] mb-1.5">40+</div><div className="text-[0.85rem] text-[var(--text-m)]">Countries</div></div>
                        <div className="gc p-7"><div className="font-[Sora] text-[2.5rem] font-extrabold text-[var(--teal-l)] mb-1.5">98%</div><div className="text-[0.85rem] text-[var(--text-m)]">Satisfaction Rate</div></div>
                    </div>
                </div>
            </section>

        </>
    )
}