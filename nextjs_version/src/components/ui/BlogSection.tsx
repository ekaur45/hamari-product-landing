import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: "The Complete Guide to Build RESTful API Application",
        date: "April 16, 2023",
        author: "Hilary Ouse",
        category: "Education",
        img: "/assets/img/blog/3/1.jpg",
        desc: "Proin venenatis tincidunt ligula, in cursus neque volutpat et. Nam ut nibh porta.",
    },
    {
        id: 2,
        title: "Four Ways to Keep Your Workout Routine Fresh.",
        date: "March 24, 2023",
        author: "Elon Gated",
        category: "Education",
        img: "/assets/img/blog/3/2.jpg",
        desc: "Proin venenatis tincidunt ligula, in cursus neque volutpat et. Nam ut nibh porta.",
    },
    {
        id: 3,
        title: "Only One Thing Impossible For God Find Sense in Any.",
        date: "July 28, 2023",
        author: "Brian Cumin",
        category: "UX Design",
        img: "/assets/img/blog/3/3.jpg",
        desc: "Proin venenatis tincidunt ligula, in cursus neque volutpat et. Nam ut nibh porta.",
    },
];

export default function BlogSection() {
    return (
        <section className="h3_blog-area pt-135 pb-110">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-end mb-30 -mx-4">
                    <div className="w-full md:w-3/4 px-4">
                        <div className="section-area-3 mb-30">
                            <span className="section-subtitle">Featured News</span>
                            <h2 className="section-title mb-0">Read Our Latest News</h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-4">
                        <div className="h3_category-section-button mb-40 text-center md:text-end">
                            <Link
                                href="/blog"
                                className="theme-btn theme-btn-medium theme-btn-3"
                            >
                                View All Blog<i className="fa-light fa-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                            <div className="h3_blog-item mb-30">
                                <div className="h3_blog-img">
                                    <Link href="/blog">
                                        <img src={blog.img} alt={blog.title} />
                                    </Link>
                                    <Link href="#" className="h3_blog-img-meta">
                                        {blog.category}
                                    </Link>
                                </div>
                                <div className="h3_blog-content">
                                    <div className="h3_blog-content-meta">
                                        <span>
                                            <i className="fa-thin fa-clock"></i>
                                            {blog.date}
                                        </span>
                                        <span>
                                            <i className="fa-thin fa-user"></i>
                                            {blog.author}
                                        </span>
                                    </div>
                                    <h5 className="h3_blog-content-title">
                                        <Link href="/blog">{blog.title}</Link>
                                    </h5>
                                    <p>{blog.desc}</p>
                                    <Link href="/blog" className="h3_blog-btn">
                                        Read More<i className="fa-light fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
