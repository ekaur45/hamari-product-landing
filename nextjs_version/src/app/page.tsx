import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import Counter from "@/components/ui/Counter";
import TeacherSwiper from "@/components/ui/TeacherSwiper";
import TestimonialSwiper from "@/components/ui/TestimonialSwiper";
import BlogSection from "@/components/ui/BlogSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import TeacherService from "@/services/teacher.service";
const teacherService: TeacherService = new TeacherService()
export default async function Home() {
    const teachers = await teacherService.getFeaturedTeachers();
    console.log(teachers)
    const courses = [
        {
            img: "/assets/img/course/1/1.jpg",
            category: "Development",
            title: "The Complete 2023 Web Development Bootcamp",
            rating: 4.5,
            reviews: 120,
            price: "$120.00",
            oldPrice: "$150.00",
            authorImg: "/assets/img/course/3/author-1.jpg",
            authorName: "David Millar",
            lessons: 12,
            duration: "12h 30m",
        },
        {
            img: "/assets/img/course/1/2.jpg",
            category: "Design",
            title: "User Experience Design Essentials - Adobe XD UI UX Design",
            rating: 4.8,
            reviews: 90,
            price: "$90.00",
            oldPrice: "$110.00",
            authorImg: "/assets/img/course/3/author-1.jpg",
            authorName: "Jenny Wilson",
            lessons: 10,
            duration: "10h 15m",
        },
        {
            img: "/assets/img/course/1/3.jpg",
            category: "Marketing",
            title: "Digital Marketing Masterclass - 23 Courses in 1",
            rating: 4.7,
            reviews: 150,
            price: "$100.00",
            oldPrice: "$130.00",
            authorImg: "/assets/img/course/3/author-1.jpg",
            authorName: "Robert Fox",
            lessons: 15,
            duration: "15h 45m",
        },
    ];

    return (
        <>
            {/* Banner Area */}
            <section className="h3_banner-area">
                <div className="h3_single-banner">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 xl:w-7/12 px-4">
                                <div className="h3_banner-content">
                                    <div className="section-area-3 mb-45 ">
                                        <span className="section-subtitle">🏆 The Leader in Online Learning</span>
                                        <h1 className="section-title">Choose <span>3400+</span> Online
                                            <span>Video</span> Courses With New
                                            Additions.</h1>
                                        <p className="section-text">Through a combination of lectures, readings, and discussions, students.</p>
                                    </div>
                                    <form action="/teachers" className="h3_banner-form">
                                        <div className="h3_banner-form-item-search">
                                            <i className="fa-regular fa-magnifying-glass"></i>
                                            <input type="text" name="q" placeholder="What do you want to learn?" />
                                        </div>
                                        <div className="h3_banner-form-item">
                                            <button type="submit" className="theme-btn theme-btn-medium theme-btn-3 h3_banner-form-btn">Search</button>
                                        </div>
                                    </form>
                                    <img className="h3_banner-content-shape-1" src="assets/img/banner/3/shape-1.png" alt="" />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 xl:w-5/12 px-4 hidden lg:block">
                                <div className="h3_banner-right">
                                    <div className="h3_banner-img">
                                        <img src="assets/img/hero-01.webp" alt="" />
                                    </div>
                                    <div className="h3_banner-right-shape">
                                        <div className="inner-shpae-1">
                                            <img className="h3_banner-shape-2" src="assets/img/banner/3/shape-2.png" alt="" />
                                        </div>
                                        <img className="h3_banner-shape-1" src="assets/img/banner/3/shape-3.png" alt="" />
                                    </div>
                                    <div className="h3_banner-meta">
                                        <div className="h3_banner-meta-info">
                                            <span>Popular Course</span>
                                            <h5>Start Learning Today!!</h5>
                                        </div>
                                        <div className="h3_banner-meta-rating">
                                            <span><i className="fa-solid fa-star"></i>4.5 (3.4k Reviews)</span>
                                            <h5>Congratulations</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Counter Area */}
            <div className="counter-area pt-120 pb-110">
                <div className="container mx-auto px-4">
                    <div className="counter-wrap">
                        <div className="flex flex-wrap gap-0 -mx-4">
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <i className="fa-thin fa-globe"></i>
                                    </div>
                                    <div className="counter-info">
                                        <h3 className="counter-info-title">
                                            <Counter end={34} suffix="k" />
                                        </h3>
                                        <span className="counter-info-text">Foreign Followers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <i className="fa-thin fa-book-open"></i>
                                    </div>
                                    <div className="counter-info">
                                        <h3 className="counter-info-title">
                                            <Counter end={12} suffix="k" />
                                        </h3>
                                        <span className="counter-info-text">Classes complete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <i className="fa-thin fa-user-group"></i>
                                    </div>
                                    <div className="counter-info">
                                        <h3 className="counter-info-title">
                                            <Counter end={214} suffix="k" />
                                        </h3>
                                        <span className="counter-info-text">Students Enrolled</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4">
                                <div className="counter-item">
                                    <div className="counter-icon">
                                        <i className="fa-thin fa-medal"></i>
                                    </div>
                                    <div className="counter-info">
                                        <h3 className="counter-info-title">
                                            <Counter end={56} suffix="k" />
                                        </h3>
                                        <span className="counter-info-text">Certified teachers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Area */}
            <section className="h3_about-area pt-140 pb-90">
                <img
                    src="/assets/img/about/3/shape-5.png"
                    alt=""
                    className="h3_about-top-shape"
                />
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                            <div className="h3_about-img mb-50">
                                <div className="h3_about-inner-img w_img mr-50">
                                    <img src="/assets/img/landing-02.webp" alt="" />
                                </div>
                                <div className="h3_about-img-shape hidden sm:block">
                                    <img
                                        className="h3_about-img-shape-1"
                                        src="/assets/img/about/3/shape-1.png"
                                        alt=""
                                    />
                                    <img
                                        className="h3_about-img-shape-2"
                                        src="/assets/img/about/3/shape-2.png"
                                        alt=""
                                    />
                                    <img
                                        className="h3_about-img-shape-3"
                                        src="/assets/img/about/3/shape-3.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-4">
                            <div className="h3_about-wrap mr-65 mb-50">
                                <img
                                    src="/assets/img/about/3/shape-4.png"
                                    alt=""
                                    className="h3_about-wrap-shape"
                                />
                                <div className="section-area-3 mb-35 small-section-area-3">
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
                                <div className="h3_about-button">
                                    <Link
                                        href="/about"
                                        className="theme-btn theme-btn-medium theme-btn-3"
                                    >
                                        More Details
                                        <i className="fa-light fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Area */}
            <section className="h6_research-area pt-110 pb-70 fix">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="section-area-6 mb-55 text-center">
                                <h2 className="section-title mb-25">
                                    Empowering Students with Expert Tutors & Smart AI Tools
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 xl:w-7/12 2xl:w-7/12 px-4">
                            <div className="h6_research-img w_img mb-50">
                                <img src="/assets/img/landing-03.jpg" alt="" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 xl:w-5/12 2xl:w-5/12 px-4">
                            <div className="h6_research-wrap mb-50">
                                <div className="h6_research-content">
                                    <p>
                                        At Humari Product, our 1-to-1 tutoring is tailored to each
                                        student&apos;s goals and pace. With the full attention of a
                                        dedicated tutor—plus real-time AI support—students build
                                        confidence, master concepts faster, and make measurable
                                        progress.
                                    </p>
                                </div>
                            </div>
                            <div className="h4_about-content mb-25">
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-check"></i>Top-Rated, Qualified
                                        Tutors
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check"></i>Modern Online
                                        Classroom
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check"></i>Recorded Sessions
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check"></i>AI-Powered Feedback
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check"></i>Flexible & Secure
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Area */}
            <section className="h3_course-area pt-135 pb-110">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="section-area-3 text-center mb-40">
                                <span className="section-subtitle">Top Popular Courses</span>
                                <h2 className="section-title mb-0">Explore Featured Courses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="h3_course-tab mb-40">
                                <ul className="flex flex-wrap gap-2" id="pills-tab" role="tablist">
                                    <li role="presentation">
                                        <button className="px-4 py-2 rounded-full bg-blue-500 text-white active" id="pills-home-tab" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                            See All
                                        </button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300" id="pills-profile-tab" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" tabIndex={-1} >Trending</button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300" id="pills-contact-tab" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabIndex={-1}>Featured</button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300" id="pills-four-tab" type="button" role="tab" aria-controls="pills-four" aria-selected="false" tabIndex={-1}>Web Design</button>
                                    </li>
                                    <li role="presentation">
                                        <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300" id="pills-five-tab" type="button" role="tab" aria-controls="pills-five" aria-selected="false" tabIndex={-1}>Popular</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {courses.map((course, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                                <CourseCard {...course} />
                            </div>
                        ))}
                    </div>
                    <div className="tutor_button">
                        <Link
                            href="/course"
                            className="theme-btn theme-btn-medium theme-btn-3"
                        >
                            Explore All Courses
                            <i className="fa-light fa-arrow-up-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Teachers Area */}
            {
                teachers?.data && <TeacherSwiper teachers={teachers.data} />
            }

            {/* Testimonial Area */}
            <TestimonialSwiper />

            {/* Blog Area */}
            <BlogSection />

            {/* Why Choose Us Area */}
            <WhyChooseUs />

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
