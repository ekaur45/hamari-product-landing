export default function HomeSignup() {
    return (
        <section id="signup" className="pt-[60px]">
            <div className="inner">
                <div className="reveal max-w-[580px] mx-auto text-center" style={{margin:"0 auto"}}>
                    <div className="chip"><span className="chip-dot"></span>Get Started</div>
                    <h2 className="sec-title">Create Your Free Account</h2>
                    <p className="text-[var(--text-m)] mb-10">Join as a student, teacher, or parent. Completely free to
                        start.</p>
                    <div className="signup-grid"> <button className="role-btn sel">
                        <div className="rb-icon">🎓</div>
                        <div className="rb-name">I{"'"}m a Student</div>
                        <div className="rb-desc">Book classes & AI help</div>
                    </button> <button className="role-btn">
                            <div className="rb-icon">📚</div>
                            <div className="rb-name">I{"'"}m a Teacher</div>
                            <div className="rb-desc">Teach & earn</div>
                        </button> <button className="role-btn">
                            <div className="rb-icon">👨‍👩‍👧</div>
                            <div className="rb-name">I{"'"}m a Parent</div>
                            <div className="rb-desc">Manage child{"'"}s learning</div>
                        </button> <button className="role-btn">
                            <div className="rb-icon">🏫</div>
                            <div className="rb-name">Organisation</div>
                            <div className="rb-desc">School or academy</div>
                        </button> </div>
                    <div className="form-wrap">
                        <div className="form-row"> <input className="fi" type="text" placeholder="First Name" />
                            <input className="fi" type="text"
                                placeholder="Last Name" /> </div>
                        <input className="fi fi-full" type="email" placeholder="Email Address" />
                        <input
                            className="fi fi-full mb-[20px]" type="password" placeholder="Create Password" /> <button
                                className="btn btn-glow btn-lg w-full justify-center text-base">Create Free Account
                            →</button>
                        <p className="text-[0.76rem] text-[var(--text-s)] mt-[14px]">By registering you agree to our <a href="#"
                            className="text-[var(--teal-l)]">Terms</a> and <a href="#" className="text-[var(--teal-l)]">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}