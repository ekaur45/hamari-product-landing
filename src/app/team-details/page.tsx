import type { Metadata } from "next";
import Link from "next/link";
import CourseCardTwo from "@/components/ui/CourseCardTwo";

export const metadata: Metadata = {
    title: "Team Details - Humari Product",
    description: "Teacher details",
};

export default function TeamDetailsPage() {
    const featuredCourses = [
        {
            img: "/assets/img/course/2/1.jpg",
            title: "Introduction to Psychology Subject",
            rating: 5,
            reviews: 3,
            lessons: 23,
            students: 45,
            desc: "Through a combination of lectures, readings and discussions students.",
            authorImg: "/assets/img/course/2/author-1.jpg",
            authorName: "Eric Wid get",
            price: "$96.00",
            oldPrice: "$140",
        },
        {
            img: "/assets/img/course/2/2.jpg",
            title: "Complete Angular Developer in 2023",
            rating: 5,
            reviews: 3,
            lessons: 54,
            students: 72,
            desc: "Through a combination of lectures, readings and discussions students.",
            authorImg: "/assets/img/course/2/author-2.jpg",
            authorName: "Hanson Deck",
            price: "$70.00",
            oldPrice: "$120",
        },
        {
            img: "/assets/img/course/2/3.jpg",
            title: "The Science of Well-being for Teens",
            rating: 5,
            reviews: 3,
            lessons: 67,
            students: 24,
            desc: "Through a combination of lectures, readings and discussions students.",
            authorImg: "/assets/img/course/2/author-3.jpg",
            authorName: "Max Conversion",
            price: "$99.00",
            oldPrice: "$150",
        },
    ];

    return (
        <>
            <section
                className="breadcrumb-area bg-default"
                style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg.jpg)" }}
            >
                <img
                    src="/assets/img/breadcrumb/shape-1.png"
                    alt=""
                    className="breadcrumb-shape"
                />
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-title">Our Professor</h2>
                                <div className="breadcrumb-list">
                                    <Link href="/">Home</Link>
                                    <span>Our Professor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="teacher_details-area pt-120 pb-60">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-5/12 lg:w-1/3 px-4">
                            <div className="teacher_details-img w_img mb-50">
                                <img src="/assets/img/teacher/2/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-7/12 lg:w-2/3 px-4">
                            <div className="teacher_details-content mb-50">
                                <div className="teacher_details-admin">
                                    <h4 className="teacher_details-title">Marvin McKinney</h4>
                                    <span>Web Designer, Researcher</span>
                                </div>
                                <div className="teacher_details-rating">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                    <span>(03 Reviews)</span>
                                </div>
                                <h5 className="teacher_details-title2">About Me</h5>
                                <p className="mb-20">
                                    Lorem ipsum dolor sit amet, consectetur elit sed do eius mod
                                    tempor incidid labore dolore magna aliqua. enim ad minim eniam
                                    quis nostrud exercitation ullamco laboris nisi aliquip ex
                                    commodo consequat. duis aute irure dolor in repreed ut
                                    perspiciatis unde omnis iste natus error sit voluptat em acus
                                    antium.
                                </p>
                                <p className="mb-30">
                                    doloremque laudantium totam rem aperiam, eaque ipsa quae ab
                                    illo inventore veritatis et quasi arch itecto beatae vitae
                                    dicta sunt explicabo.
                                </p>
                                <h5 className="teacher_details-title2">Contact Me</h5>
                                <div className="teacher_details-info">
                                    <ul>
                                        <li>
                                            <span>Address:</span>Hilton Conference Centre
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            <a href="mailto:Example@gmail.com">Example@gmail.com</a>
                                        </li>
                                        <li>
                                            <span>Phone:</span>
                                            <a href="tel:+123548645850">+123 548 6458 50</a>
                                        </li>
                                    </ul>
                                    <div className="teacher_details-social">
                                        <a href="#">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="course-area pb-90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="course-section-area">
                                <div className="section-area section-area-top">
                                    <h2 className="section-title mb-50">Our Featured Courses</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {featuredCourses.map((course, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                                <CourseCardTwo {...course} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
