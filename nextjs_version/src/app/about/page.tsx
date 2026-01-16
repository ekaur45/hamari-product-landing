import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us - Humari Product",
    description:
        "Learn about Humari Product and our mission to provide personalized tutoring",
};

export default function AboutPage() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb-area pt-175 pb-120">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="breadcrumb-content text-center">
                                <h2 className="breadcrumb-title">About Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb flex justify-center">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            About
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="h3_about-area pt-140 pb-90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                            <div className="h3_about-img mb-50">
                                <div className="h3_about-inner-img w_img mr-50">
                                    <img src="/assets/img/landing-02.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-4">
                            <div className="h3_about-wrap mr-65 mb-50">
                                <div className="section-area-3 mb-35">
                                    <span className="section-subtitle">Know About Us</span>
                                    <h2 className="section-title mb-25">
                                        Humari Product — The Future of Tutoring, Built Around You
                                    </h2>
                                    <p className="section-text">
                                        Every student is different. Humari Product delivers 100%
                                        personalised tutoring—1-on-1 sessions, AI-assisted practice,
                                        and transparent progress—so growth is visible and measurable.
                                    </p>
                                </div>
                                <div className="h3_about-content mb-35">
                                    <div className="flex flex-wrap -mx-4">
                                        <div className="w-full sm:w-1/2 px-4">
                                            <span>
                                                <i className="fa-regular fa-check"></i>Personalised plans
                                            </span>
                                        </div>
                                        <div className="w-full sm:w-1/2 px-4">
                                            <span>
                                                <i className="fa-regular fa-check"></i>AI + human expertise
                                            </span>
                                        </div>
                                        <div className="w-full sm:w-1/2 px-4">
                                            <span>
                                                <i className="fa-regular fa-check"></i>Safe & reliable
                                            </span>
                                        </div>
                                        <div className="w-full sm:w-1/2 px-4">
                                            <span>
                                                <i className="fa-regular fa-check"></i>Flexible
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="section-title mb-25">Our Mission</h2>
                                <p className="section-text">
                                    To make high-quality tutoring accessible, effective, and
                                    stress-free—from classroom support to exam prep, with real
                                    confidence along the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teacher Area */}
            <section className="h2_teacher-area pb-80">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-full lg:w-2/3 xl:w-1/2 px-4 mb-30">
                            <div
                                className="h2_teacher-section bg-default"
                                style={{ backgroundImage: "url(/assets/img/teacher/2/bg.jpg)" }}
                            >
                                <div className="section-area-2">
                                    <h2 className="section-title mb-30">
                                        Our Most <br /> Experience
                                        <span>
                                            Professor{" "}
                                            <img src="/assets/img/banner/2/line.png" alt="" />
                                        </span>
                                    </h2>
                                </div>
                                <div className="h2_teacher-button">
                                    <Link
                                        href="#"
                                        className="theme-btn theme-btn-medium teacher-btn"
                                    >
                                        Become An Instructor
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
                                <div className="h2_teacher-item mb-30">
                                    <div className="h2_teacher-img">
                                        <img src={`/assets/img/teacher/2/${item}.jpg`} alt="" />
                                    </div>
                                    <div className="h2_teacher-content">
                                        <h5 className="h2_teacher-content-title">
                                            <Link href="#">Parsley Montana</Link>
                                        </h5>
                                        <span>Lead Teacher</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Area */}
            <section className="h2_blog-area pb-90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2 px-4">
                            <div className="section-area-2 mb-50 text-center h2_blog-section-area">
                                <h2 className="section-title mb-30">
                                    Our Latest
                                    <span>
                                        Articles <img src="/assets/img/banner/2/line.png" alt="" />
                                    </span>
                                </h2>
                                <p className="section-text">
                                    Through a combination of lectures, readings, discussions,
                                    students will gain a solid foundation in educational
                                    psychology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                                <div className="h2_blog-item mb-30">
                                    <div className="h2_blog-img">
                                        <Link href="/blog-details">
                                            <img src={`/assets/img/blog/2/blog-${item}.jpg`} alt="" />
                                        </Link>
                                    </div>
                                    <div className="h2_blog-content">
                                        <div className="h2_blog-content-meta">
                                            <span>
                                                <i className="fa-thin fa-user"></i>Admin
                                            </span>
                                            <span>
                                                <i className="fa-thin fa-clock"></i>June 23, 2023
                                            </span>
                                        </div>
                                        <h5 className="h2_blog-content-title">
                                            <Link href="/blog-details">
                                                Education Week News and Views on Education Policy and
                                                Practice.
                                            </Link>
                                        </h5>
                                        <Link href="#" className="theme-btn blog-btn t-theme-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Area */}
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
