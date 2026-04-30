import Link from "next/link";

export default function WhyChooseUs() {
    return (
        <section className="h9_choose-area">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="section-area-9 text-center mb-40">
                            <span className="section-subtitle">Why Choose Us</span>
                            <h2 className="section-title mb-0">Reasons to learn with us</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                        <div className="h9_choose-item mb-30">
                            <div className="h9_choose-item-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://images.unsplash.com/photo-1584697964154-9de1e4a1c2f6?auto=format&fit=crop&w=120&h=120&q=80"
                                    alt="Student learning with guidance"
                                />
                            </div>
                            <h4 className="h9_choose-item-title">Personalized Learning</h4>
                            <p>
                                Learn at your pace with structured lessons, clear outcomes, and
                                support that adapts to your level.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                        <div className="h9_choose-item mb-30">
                            <div className="h9_choose-item-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=120&h=120&q=80"
                                    alt="High-quality learning resources"
                                />
                            </div>
                            <h4 className="h9_choose-item-title">Trusted Content</h4>
                            <p>
                                Carefully curated curriculum with practical examples—so you can
                                learn confidently and apply skills faster.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                        <div className="h9_choose-item mb-30">
                            <div className="h9_choose-item-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=120&h=120&q=80"
                                    alt="Teachers collaborating with tools"
                                />
                            </div>
                            <h4 className="h9_choose-item-title">Tools that empower teachers</h4>
                            <p>
                                Modern classroom-friendly tools to plan lessons, track progress,
                                and keep learners engaged.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                        <div className="h9_choose-item-big mb-30">
                            <div className="h9_choose-item-big-img">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                                    alt="Instructor teaching a class"
                                />
                            </div>
                            <div className="h9_choose-item-big-content">
                                <span>Become an Instructor</span>
                                <h3>
                                    <Link href="/teachers">Teach with impact.</Link>
                                </h3>
                                <p>
                                    Share your expertise, reach more learners, and grow your
                                    teaching career with the right tools.
                                </p>
                                <Link href="/teachers" className="theme-btn theme-btn-9">
                                    Become an Instructor<i className="fa-light fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                        <div className="h9_choose-item-big mb-30">
                            <div className="h9_choose-item-big-img">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                                    alt="Students studying together"
                                />
                            </div>
                            <div className="h9_choose-item-big-content">
                                <span>Learners and Students</span>
                                <h3>
                                    <Link href="/course">There are no limits to what you can learn.</Link>
                                </h3>
                                <p>
                                    Start today with beginner-friendly courses and step-by-step
                                    paths designed to keep you progressing.
                                </p>
                                <Link href="/course" className="theme-btn theme-btn-9">
                                    Learners, start here<i className="fa-light fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
