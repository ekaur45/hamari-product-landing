import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog Grid - Humari Product",
    description: "Read our latest news and articles",
};
const getBlogs = async (): Promise<{data: any[], meta: any}> => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/blogs?fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=publishedAt&populate[coverImage][fields][0]=url&populate[author][populate][avatar][fields][0]=url&populate[categories][fields][0]=name&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=10`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer 56bd6f0afea5af111c4f9e0d7a728f355d2e5322aa45337dec7e836d6001efe007a08929faa2d2c0d63b2e47ad924ce0647eea65d56305c6b05a192f77cae5ef9035f3cfface2b7bcf4c61dfe7727903a86cfdeced08757ab91c85b030f14bf4329afebba1c1309415bb6eb64f01b634ddb0128b1fb5fb64bc28565f1be9e7c7`,
        },
    })
    if(response.ok) {
        const data = await response.json();
        return data;
    }
    return {data: [], meta: {}};
}
export default async function BlogPage() {
    const blogs = await getBlogs();
    if(blogs.data.length === 0) {
        return <div>No blogs found</div>;
    }
    // const blogs = [
    //     {
    //         id: 1,
    //         title: "Education Week News and Views on Education Policy and Practice.",
    //         date: "June 23, 2023",
    //         author: "Admin",
    //         img: "/assets/img/blog/2/blog-1.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "The Learning Network Teaching and Learning With The New York Times.",
    //         date: "June 23, 2023",
    //         author: "Admin",
    //         img: "/assets/img/blog/2/blog-2.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "Nothing is Impossible to Learn If you are Passionate About this Subject",
    //         date: "June 23, 2023",
    //         author: "Admin",
    //         img: "/assets/img/blog/2/blog-3.jpg",
    //     },
    //     {
    //         id: 4,
    //         title: "The Learning Network Teaching and Learning With The New York Times.",
    //         date: "June 23, 2023",
    //         author: "Admin",
    //         img: "/assets/img/blog/2/blog-2.jpg",
    //     },
    //     {
    //         id: 5,
    //         title: "Nothing is Impossible to Learn If you are Passionate About this Subject",
    //         date: "June 23, 2023",
    //         author: "Admin",
    //         img: "/assets/img/blog/2/blog-3.jpg",
    //     },
    //     {
    //         id: 6,
    //         title: "Education Week News and Views on Education Policy and Practice.",
    //         date: "June 23, 2023",
    //         author: "Admin",
    //         img: "/assets/img/blog/2/blog-1.jpg",
    //     },
    // ];

    return (
        <>
            <section
                className="breadcrumb-area bg-default !hidden"
                style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg.jpg)" }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/assets/img/breadcrumb/shape-1.png"
                    alt=""
                    className="breadcrumb-shape"
                />
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
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

            <section className="innerPage_blog-area pt-6 pb-90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        {blogs.data.map((blog: any, index: number) => (
                            <div key={blog.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                                <div className="h2_blog-item mb-30">
                                    <div className="h2_blog-img overflow-hidden rounded-t-lg">
                                        <Link href={`/blog/${blog.slug}`}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={process.env.NEXT_PUBLIC_CMS_ASSETS_URL + blog.coverImage?.url} alt={blog.title} />
                                        </Link>
                                    </div>
                                    <div className="h2_blog-content">
                                        <div className="h2_blog-content-meta">
                                            <span>
                                                <i className="fa-thin fa-user"></i>
                                                {blog.author?.name}
                                            </span>
                                            <span>
                                                <i className="fa-thin fa-clock"></i>
                                                {blog.publishedAt}
                                            </span>
                                        </div>
                                        <h5 className="h2_blog-content-title">
                                            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h5>
                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            className="theme-btn blog-btn t-theme-btn"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {blogs.meta.pagination.totalPages > 1 && (
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
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
                    )}

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
