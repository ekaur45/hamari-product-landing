export default function HomeTestimonials() {
    return (
        <section className="pt-5">
            <div className="inner reveal">
                <div className="tc">
                    <div className="chip"><span className="chip-dot"></span>Reviews</div>
                    <h2 className="sec-title">Students & Teachers Love EduConnect</h2>
                </div>
                <div className="testi-grid">
                    <div className="gc testi-gc">
                        <div className="testi-stars">★★★★★</div>
                        <p>{`"`}My daughter{`'`}s maths grade jumped from a C to an A in 6 weeks. The teacher was incredible and the
                            whiteboard made everything clear. Worth every penny.{`"`}</p>
                        <div className="testi-auth">
                            <div className="testi-av bg-[#2563EB]">FK</div>
                            <div>
                                <div className="testi-name">Fatima Khan</div>
                                <div className="testi-role">Parent · Birmingham</div>
                            </div>
                        </div>
                    </div>
                    <div className="gc testi-gc">
                        <div className="testi-stars">★★★★★</div>
                        <p>{`"`}As a teacher the platform is brilliant. I set my own rates, manage my schedule, and the payout system is
                            fully transparent. I earn £3,000+ per month now.{`"`}</p>
                        <div className="testi-auth">
                            <div className="testi-av bg-[:var(--teal)]">AR</div>
                            <div>
                                <div className="testi-name">Ahmed Raza</div>
                                <div className="testi-role">Teacher · Physics & Maths</div>
                            </div>
                        </div>
                    </div>
                    <div className="gc testi-gc">
                        <div className="testi-stars">★★★★★</div>
                        <p>{`"`}The AI helper saved me during exam season. I could ask questions at 1am and get proper explanations.
                            Passed A-Levels with ABB — couldn{`'`}t have done it without this.{`"`}</p>
                        <div className="testi-auth">
                            <div className="testi-av bg-[#7C3AED]">ZM</div>
                            <div>
                                <div className="testi-name">Zayn Malik</div>
                                <div className="testi-role">Student · A-Level Year 13</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}