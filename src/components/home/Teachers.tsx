import Link from "next/link";

export default function HomeTeachers() {
    return (
        <section id="teachers" className="pt-15">
            <div className="inner reveal">
                <div className="tc">
                    <div className="chip"><span className="chip-dot"></span>Our Teachers</div>
                    <h2 className="sec-title">Learn From Verified Experts</h2>
                    <p className="sec-sub">Every teacher is background-checked and approved before going live.</p>
                </div>
                <div className="subjects-wrap">
                    <div className="subj-pill act">All Subjects</div>
                    <div className="subj-pill">Mathematics</div>
                    <div className="subj-pill">Science</div>
                    <div className="subj-pill">English</div>
                    <div className="subj-pill">Physics</div>
                    <div className="subj-pill">Chemistry</div>
                    <div className="subj-pill">Biology</div>
                    <div className="subj-pill">History</div>
                    <div className="subj-pill">Arabic</div>
                    <div className="subj-pill">Urdu</div>
                    <div className="subj-pill">Computer Science</div>
                </div>
                <div className="teachers-grid">
                    <div className="gc tc-gc">
                        <div className="tc-av bg-[linear-gradient(135deg,#1E40AF,#3B82F6)]">SA</div>
                        <div className="tc-name">Sarah Ahmed</div>
                        <div className="tc-sub">Mathematics · Physics</div>
                        <div className="tc-stars">★★★★★</div>
                        <div className="tc-tags"><span className="tc-tag">GCSE</span><span className="tc-tag">A-Level</span><span
                            className="tc-tag">IB</span></div>
                        <div className="tc-price">£35 <span>/ 60 min</span></div> <a href="#signup" className="btn btn-glow w-full justify-center mt-4"
                        >Book Session</a>
                    </div>
                    <div className="gc tc-gc featured border-[rgba(45,212,191,0.4)] relative">
                        <div
                            className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-[linear-gradient(135deg,var(--coral),var(--amber))] text-white text-[0.68rem] font-bold px-[14px] py-[4px] rounded-full whitespace-nowrap tracking-[0.04em]">
                            ⭐ TOP RATED</div>
                        <div className="tc-av bg-[linear-gradient(135deg,var(--teal-d),var(--teal))]">MR</div>
                        <div className="tc-name">Mohammed Raza</div>
                        <div className="tc-sub">Chemistry · Biology</div>
                        <div className="tc-stars">★★★★★</div>
                        <div className="tc-tags"><span className="tc-tag">GCSE</span><span className="tc-tag">A-Level</span><span
                            className="tc-tag">University</span></div>
                        <div className="tc-price">£40 <span>/ 60 min</span></div> <a href="#signup" className="btn btn-glow w-full justify-center mt-4"
                        >Book Session</a>
                    </div>
                    <div className="gc tc-gc">
                        <div className="tc-av bg-[linear-gradient(135deg,#5B21B6,#7C3AED)]">PK</div>
                        <div className="tc-name">Priya Kapoor</div>
                        <div className="tc-sub">English · Literature</div>
                        <div className="tc-stars">★★★★★</div>
                        <div className="tc-tags"><span className="tc-tag">KS3</span><span className="tc-tag">GCSE</span><span
                            className="tc-tag">Creative</span></div>
                        <div className="tc-price">£32 <span>/ 60 min</span></div> <a href="#signup" className="btn btn-glow w-full justify-center mt-4"
                        >Book Session</a>
                    </div>
                </div>
                <div className="text-center mt-9">
                    <Link href="/teachers" className="btn btn-ghost btn-lg">View All 5,200+ Teachers →</Link>
                </div>
            </div>
        </section>
    )
}