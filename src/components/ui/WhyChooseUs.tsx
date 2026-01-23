import Link from "next/link";

export default function WhyChooseUs() {
    return (
        <section className="h9_choose-area">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="section-area-9 text-center mb-40">
                            <span className="section-subtitle">Why Choose Us</span>
                            <h2 className="section-title mb-0">Reasons To Select Us</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                        <div className="h9_choose-item mb-30">
                            <div className="h9_choose-item-icon">
                                <img src="/assets/img/choose/1.png" alt="" />
                            </div>
                            <h4 className="h9_choose-item-title">Personalized Learning</h4>
                            <p>
                                Ut cursus sem metus, sagittis ullamcorper neque porttitor se
                                Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec
                                ultrices ante ac malesuada.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                        <div className="h9_choose-item mb-30">
                            <div className="h9_choose-item-icon">
                                <img src="/assets/img/choose/2.png" alt="" />
                            </div>
                            <h4 className="h9_choose-item-title">Trusted Content</h4>
                            <p>
                                Ut cursus sem metus, sagittis ullamcorper neque porttitor se
                                Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec
                                ultrices ante ac malesuada.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                        <div className="h9_choose-item mb-30">
                            <div className="h9_choose-item-icon">
                                <img src="/assets/img/choose/3.png" alt="" />
                            </div>
                            <h4 className="h9_choose-item-title">Tool Empower Teachers</h4>
                            <p>
                                Ut cursus sem metus, sagittis ullamcorper neque porttitor se
                                Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec
                                ultrices ante ac malesuada.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                        <div className="h9_choose-item-big mb-30">
                            <div className="h9_choose-item-big-img">
                                <img src="/assets/img/choose/bg-1.jpg" alt="" />
                            </div>
                            <div className="h9_choose-item-big-content">
                                <span>Become an Instructor</span>
                                <h3>
                                    <Link href="#">
                                        Come and Join Us to Disseminate Your Expertise.
                                    </Link>
                                </h3>
                                <p>
                                    Ut cursus sem metus, sagittis ullamcorper neque port Proin
                                    commodo lacinia Donec ultrices ante ac malesuada.
                                </p>
                                <Link href="#" className="theme-btn theme-btn-9">
                                    Become an Instructor<i className="fa-light fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                        <div className="h9_choose-item-big mb-30">
                            <div className="h9_choose-item-big-img">
                                <img src="/assets/img/choose/bg-2.jpg" alt="" />
                            </div>
                            <div className="h9_choose-item-big-content">
                                <span>Learners and Students</span>
                                <h3>
                                    <Link href="#">There Are No Limits to What You Can Learn.</Link>
                                </h3>
                                <p>
                                    Ut cursus sem metus, sagittis ullamcorper neque port Proin
                                    commodo lacinia Donec ultrices ante ac malesuada.
                                </p>
                                <Link href="#" className="theme-btn theme-btn-9">
                                    Terners, start here<i className="fa-light fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
