import type { Metadata } from "next";
import Link from "next/link";
import CourseCardTwo from "@/components/ui/CourseCardTwo";

export const metadata: Metadata = {
    title: "Course Archive - Humari Product",
    description: "Explore our courses",
};

export default function CoursePage() {
    const courses = [
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
        {
            img: "/assets/img/course/2/4.jpg",
            title: "AWS Machine Learning Engineer",
            rating: 5,
            reviews: 3,
            lessons: 57,
            students: 98,
            desc: "Through a combination of lectures, readings and discussions students.",
            authorImg: "/assets/img/course/2/author-4.jpg",
            authorName: "Ravi O'Leigh",
            price: "$98.00",
            oldPrice: "$159",
        },
        {
            img: "/assets/img/course/2/5.jpg",
            title: "Introduction User Experience Design",
            rating: 5,
            reviews: 3,
            lessons: 58,
            students: 50,
            desc: "Through a combination of lectures, readings and discussions students.",
            authorImg: "/assets/img/course/2/author-5.jpg",
            authorName: "Valentino Morose",
            price: "$69.00",
            oldPrice: "$135",
        },
        {
            img: "/assets/img/course/2/6.jpg",
            title: "Spoken English for Career Develop",
            rating: 5,
            reviews: 3,
            lessons: 35,
            students: 24,
            desc: "Through a combination of lectures, readings and discussions students.",
            authorImg: "/assets/img/course/2/author-6.jpg",
            authorName: "Dylan Meringue",
            price: "$173",
            oldPrice: "$230",
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
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-title">Course Archive</h2>
                                <div className="breadcrumb-list">
                                    <Link href="/">Home</Link>
                                    <span>Course</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="innerPage_course-area pt-120 pb-90">
                <div className="container">
                    <div className="innerPage_course-top mb-30">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-4 col-md-4">
                                <div className="innerPage_course-left mb-20">
                                    <p>Showing 1-8 of 24 results</p>
                                </div>
                            </div>
                            <div className="col-xl-8 col-md-8">
                                <div className="innerPage_course-right mb-20">
                                    <div className="innerPage_course-category">
                                        <select
                                            name="select"
                                            className="innerPage_course-category-list has-nice-select"
                                        >
                                            <option value="1">Art & Design</option>
                                            <option value="2">Graphic Design</option>
                                            <option value="3">Web Design</option>
                                            <option value="4">UX/UI Design</option>
                                        </select>
                                    </div>
                                    <div className="innerPage_course-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search Item" />
                                            <button
                                                type="submit"
                                                className="innerPage_course-search-btn"
                                            >
                                                <i className="fa-thin fa-magnifying-glass"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {courses.map((course, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <CourseCardTwo {...course} />
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pagination-area mt-20 mb-30">
                                <ul>
                                    <li>
                                        <a href="#">01</a>
                                    </li>
                                    <li>
                                        <a href="#">02</a>
                                    </li>
                                    <li>
                                        <a href="#">03</a>
                                    </li>
                                    <li>
                                        <a href="#">04</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-light fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cta-area h3_cta-area">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="cta-content mb-30 mb-lg-0">
                                    <span className="cta-subtitle">Download App</span>
                                    <h2 className="cta-title">
                                        Are you Ready to Start your Online Course?
                                    </h2>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
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
