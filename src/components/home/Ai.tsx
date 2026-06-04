export default function HomeAi() {
    return (
        <section className="pt-15">
            <div className="inner reveal">
                <div className="ai-grid">
                    <div>
                        <div className="chip"><span className="chip-dot"></span>AI-Powered Learning</div>
                        <h2 className="sec-title">Your 24/7 Homework Assistant</h2>
                        <p className="text-[var(--text-m)] leading-[1.8] mb-7">Stuck at midnight? Our AI helper is always
                            available. Get step-by-step explanations and instant answers — included with every account.</p>
                        <ul className="list-none flex flex-col gap-4 mb-9">
                            <li className="flex gap-[14px] items-start"> <span
                                className="text-[var(--teal-l)] text-base mt-[2px]">✓</span>
                                <div><strong className="text-[0.9rem] text-[var(--text)] font-semibold">12 free AI credits daily</strong>
                                    <p className="text-[0.83rem] text-[var(--text-m)] mt-[3px]">No payment needed to get started</p>
                                </div>
                            </li>
                            <li className="flex gap-[14px] items-start"> <span
                                className="text-[var(--teal-l)] text-base mt-[2px]">✓</span>
                                <div><strong className="text-[0.9rem] text-[var(--text)] font-semibold">Top up when you need more</strong>
                                    <p className="text-[0.83rem] text-[var(--text-m)] mt-[3px]">Affordable packs available any time</p>
                                </div>
                            </li>
                            <li className="flex gap-[14px] items-start"> <span
                                className="text-[var(--teal-l)] text-base mt-[2px]">✓</span>
                                <div><strong className="text-[0.9rem] text-[var(--text)] font-semibold">Smart teacher-matching
                                    chatbot</strong>
                                    <p className="text-[0.83rem] text-[var(--text-m)] mt-[3px]">Find your perfect teacher with AI
                                        guidance</p>
                                </div>
                            </li>
                        </ul> <a href="#signup" className="btn btn-glow btn-lg">Try AI Helper Free →</a>
                    </div>
                    <div className="gc ai-chat">
                        <div className="chat-msg">
                            <div className="chat-label">You</div> <span className="bubble user">Can you explain quadratic equations? I{"'"}m stuck
                                on the formula.</span>
                        </div>
                        <div className="chat-msg me">
                            <div className="chat-label text-right">AI Helper</div> <span className="bubble ai">Of course! The
                                formula x = (-b ± √(b²-4ac)) / 2a solves any ax² + bx + c = 0. Let me walk you through it step by
                                step…</span>
                        </div>
                        <div className="chat-msg">
                            <div className="chat-label">You</div> <span className="bubble user">Can you try with 2x² + 5x - 3 = 0?</span>
                        </div>
                        <div className="chat-msg me">
                            <div className="chat-label text-right">AI Helper</div> <span className="bubble ai">a=2, b=5, c=-3 → x
                                = (-5 ± √49) / 4 → x = 0.5 or x = -3 ✓</span>
                        </div>
                        <div className="credit-bar-wrap mt-3.5">
                            <div className="cb-lbl">Daily Credits</div>
                            <div className="cb-track">
                                <div className="cb-fill"></div>
                            </div>
                            <div className="cb-lbl">8 / 12 used</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}