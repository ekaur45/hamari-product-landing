import { portalUrl } from "@/utils/misc.util";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeHero() {
    return (<section className="hero p-0">
        <div className="hero-grid">
            <div className="hero-content reveal">
                <div className="hero-badge">🔥 &nbsp;12,000+ active learners worldwide</div>
                <h1>Learn From The World{"'"}s <span className="grad-text">Best Teachers</span> — Anytime</h1>
                <p className="hero-sub">Book live 1:1 or group classes, get instant AI homework help, and track your progress — one
                    powerful platform for students, parents, and educators.</p>
                <div className="hero-btns"> 
                    <Link href={portalUrl('/auth/register/Student')} className="btn btn-glow btn-xl">Start Learning Free <ArrowRight/></Link> 
                <Link href="/teachers" className="btn btn-ghost btn-lg">Browse Teachers</Link> </div>
                <div className="hero-stats">
                    <div>
                        <div className="stat-val" >5,200</div>
                        <div className="stat-lbl">Verified Teachers</div>
                    </div>
                    <div>
                        <div className="stat-val">98+</div>
                        <div className="stat-lbl">% Satisfaction</div>
                    </div>
                    <div>
                        <div className="stat-val">40+</div>
                        <div className="stat-lbl">Subjects Covered</div>
                    </div>
                </div>
            </div>
            <div id="hero-right" className="relative">
                <div className="pill pill-1">
                    <div className="pill-icon">🎯</div>
                    <div className="pill-lbl">AI Credits Today</div>
                    <div className="pill-val">12 remaining</div>
                </div>
                <div className="hero-card-wrap" id="tilt-card">
                    <div className="hero-3d-card">
                        <div className="live-dot-wrap">
                            <div className="ldot"></div> <span className="live-txt">LIVE SESSION</span>
                        </div>
                        <div className="class-row">
                            <div className="av bg-linear-135 from-blue-800 to-blue-500">SA</div>
                            <div className="class-info">
                                <h4>Sarah Ahmed</h4>
                                <p>Advanced Mathematics · Year 11</p>
                            </div>
                        </div>
                        <div className="wb">
                            <svg viewBox="0 0 340 100" fill="none" xmlns="http://www.w3.org/2000/svg" id="wb-anim" >
                                <line x1="20" y1="80" x2="320" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                                <line x1="20" y1="10" x2="20" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                                <path id="wb-curve" d="" stroke="#2DD4BF" strokeWidth={2.5} strokeLinecap="round" fill="none" />
                                <circle id="wb-dot" cx="0" cy="0" r="4" fill="#2DD4BF" opacity={0.8} />
                                <text x="30" y="96" fill="rgba(255,255,255,0.3)" fontSize={9} fontFamily="DM Sans" >
                                    x
                                </text>
                                <text x="12" y="15" fill="rgba(255,255,255,0.3)" fontSize={9} fontFamily="DM Sans" >
                                    y
                                </text>
                            </svg>
                        </div>
                        <div className="class-foot">
                            <div className="flex items-center">
                                <div className="stu-cluster">
                                    <div className="sa bg-[#2563EB]">JK</div>
                                    <div className="sa bg-[#7C3AED]">RM</div>
                                    <div className="sa bg-[#D97706]">AT</div>
                                    <div className="sa bg-[#DC2626]">+4</div>
                                </div> <span className="stu-txt">7 students</span>
                            </div> <a href="#signup" className="btn btn-glow px-[18px] py-[9px] text-[0.8rem]">Join →</a>
                        </div>
                    </div>
                </div>
                <div className="pill pill-2">
                    <div className="pill-icon">💰</div>
                    <div className="pill-lbl">Teacher Earnings</div>
                    <div className="pill-val">£2,340 / mo</div>
                </div>
            </div>
        </div>
    </section>);
}