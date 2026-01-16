import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog Grid - Humari Product",
    description: "Read our latest news and articles",
};

export default function BlogPage() {
    const blogs = [
        {
            id: 1,
            title: "Education Week News and Views on Education Policy and Practice.",
            date: "June 23, 2023",
            author: "Admin",
            img: "/assets/img/blog/2/blog-1.jpg",
        },
        {
            id: 2,
            title: "The Learning Network Teaching and Learning With The New York Times.",
            date: "June 23, 2023",
            author: "Admin",
            img: "/assets/img/blog/2/blog-2.jpg",
        },
        {
            id: 3,
            title: "Nothing is Impossible to Learn If you are Passionate About this Subject",
            date: "June 23, 2023",
            author: "Admin",
            img: "/assets/img/blog/2/blog-3.jpg",
        },
        {
            id: 4,
            title: "The Learning Network Teaching and Learning With The New York Times.",
            date: "June 23, 2023",
            author: "Admin",
            img: "/assets/img/blog/2/blog-2.jpg",
        },
        {
            id: 5,
            title: "Nothing is Impossible to Learn If you are Passionate About this Subject",
            date: "June 23, 2023",
            author: "Admin",
            img: "/assets/img/blog/2/blog-3.jpg",
        },
        {
            id: 6,
            title: "Education Week News and Views on Education Policy and Practice.",
            date: "June 23, 2023",
            author: "Admin",
            img: "/assets/img/blog/2/blog-1.jpg",
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
                                <h2 className="breadcrumb-title">Blog Grid</h2>
                                <div className="breadcrumb-list">
                                    <Link href="/">Home</Link>
                                    <span>Blog Grid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="innerPage_blog-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        {blogs.map((blog, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="h2_blog-item mb-30">
                                    <div className="h2_blog-img">
                                        <Link href="/blog-details">
                                            <img src={blog.img} alt={blog.title} />
                                        </Link>
                                    </div>
                                    <div className="h2_blog-content">
                                        <div className="h2_blog-content-meta">
                                            <span>
                                                <i className="fa-thin fa-user"></i>
                                                {blog.author}
                                            </span>
                                            <span>
                                                <i className="fa-thin fa-clock"></i>
                                                {blog.date}
                                            </span>
                                        </div>
                                        <h5 className="h2_blog-content-title">
                                            <Link href="/blog-details">{blog.title}</Link>
                                        </h5>
                                        <Link
                                            href="/blog-details"
                                            className="theme-btn blog-btn t-theme-btn"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
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
