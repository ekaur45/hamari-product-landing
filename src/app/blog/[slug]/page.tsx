import RenderBlogContent from "@/components/blog/RenderBlogContent";
import Link from "next/link";

const getBlog = async (slug: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/blogs?filters[slug][$eq]=${slug}&populate[coverImage]=true&populate[author][populate]=avatar&populate[seo]=true&populate[categories]=true&populate[tags]=true`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer 56bd6f0afea5af111c4f9e0d7a728f355d2e5322aa45337dec7e836d6001efe007a08929faa2d2c0d63b2e47ad924ce0647eea65d56305c6b05a192f77cae5ef9035f3cfface2b7bcf4c61dfe7727903a86cfdeced08757ab91c85b030f14bf4329afebba1c1309415bb6eb64f01b634ddb0128b1fb5fb64bc28565f1be9e7c7`,
        },
    })
    if(response.ok) {
        const data = await response.json();
        return data.data[0];
    }
    return null;
}
export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = await getBlog(slug);
    if(!blog) {
        return <div>Blog not found</div>;
    }
    return         <>

    <section className="blog_details-area pt-4 pb-80">
        <div className="container mx-auto px-4">
            {/* <div className="blog_details-img">
                <img src={process.env.NEXT_PUBLIC_CMS_ASSETS_URL + blog.coverImage?.url} alt={blog.title} />
            </div> */}
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-2/3 xl:w-2/3 px-4">
                    <div className="blog_details-wrap mb-60">
                       
                        <div className="blog_details-top mb-4">
                            <h3 className="blog_details-title">
                                {blog.title}
                            </h3>
                            <div className="blog_details-meta">
                                <div className="blog_details-author">
                                    <div className="blog_details-author-img">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={process.env.NEXT_PUBLIC_CMS_ASSETS_URL + blog.author?.avatar?.url} alt={blog.author?.name} 
                                        className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="blog_details-author-info">
                                        <span>Author</span>
                                        <h5>
                                            <Link href="#">{blog.author?.name}</Link>
                                        </h5>
                                    </div>
                                </div>
                                <div className="blog_details-category">
                                    <span>Category</span>
                                    <h5>
                                        <a href="#" className="capitalize">{blog.categories?.[0]?.name}</a>
                                    </h5>
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog_details-image">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={process.env.NEXT_PUBLIC_CMS_ASSETS_URL + blog.coverImage?.url} alt={blog.title}
                            className="w-full h-full object-cover max-h-[500px] rounded-lg"
                            />
                        </div>
                        <div className="blog_details-content">
                           <RenderBlogContent blocks={blog.content} />
                        </div>
                        <div className="blog_details-related mb-45 mt-45">
                            <h3 className="blog_details-related-title">Related Blogs</h3>
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="h2_blog-item mb-30">
                                        <div className="h2_blog-img">
                                            <Link href="/blog-details">
                                                <img src="/assets/img/blog/2/blog-1.jpg" alt="" />
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
                                                    Education Week News and View on Education Policy
                                                    and Practice.
                                                </Link>
                                            </h5>
                                            <Link
                                                href="#"
                                                className="theme-btn blog-btn t-theme-btn"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="h2_blog-item mb-30">
                                        <div className="h2_blog-img">
                                            <Link href="/blog-details">
                                                <img src="/assets/img/blog/2/blog-2.jpg" alt="" />
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
                                                    The Learning Network Teaching and Learning With
                                                    The New York.
                                                </Link>
                                            </h5>
                                            <Link
                                                href="#"
                                                className="theme-btn blog-btn t-theme-btn"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 xl:w-1/3 px-4">
                    <div className="blog_details-sidebar mb-60 sticky top-[100px]">
                        <div className="blog_details-widget">
                            <h4 className="blog_details-widget-title">Search</h4>
                            <form action="#">
                                <input type="text" placeholder="Search here..." />
                                <button type="submit">
                                    <i className="fa-thin fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                        <div className="blog_details-widget">
                            <h4 className="blog_details-widget-title">Recent Posts</h4>
                            <div className="blog_details-widget-post">
                                <div className="blog_details-post-img">
                                    <a href="#">
                                        <img src="/assets/img/blog/details/post-1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="blog_details-post-info">
                                    <span>
                                        <i className="fa-thin fa-clock"></i>March 23, 2023
                                    </span>
                                    <h6>
                                        <a href="#">Education Week Policy and Practice.</a>
                                    </h6>
                                </div>
                            </div>
                            <div className="blog_details-widget-post">
                                <div className="blog_details-post-img">
                                    <a href="#">
                                        <img src="/assets/img/blog/details/post-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="blog_details-post-info">
                                    <span>
                                        <i className="fa-thin fa-clock"></i>March 23, 2023
                                    </span>
                                    <h6>
                                        <a href="#">
                                            The Learning way Teaching & Learning.
                                        </a>
                                    </h6>
                                </div>
                            </div>
                            <div className="blog_details-widget-post">
                                <div className="blog_details-post-img">
                                    <a href="#">
                                        <img src="/assets/img/blog/details/post-3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="blog_details-post-info">
                                    <span>
                                        <i className="fa-thin fa-clock"></i>March 23, 2023
                                    </span>
                                    <h6>
                                        <a href="#">
                                            Only One thing Impossible to Find.
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="blog_details-widget widget-category">
                            <h4 className="blog_details-widget-title">Categories</h4>
                            <div className="blog_details-widget-tag">
                                <ul>
                                    {blog.categories?.map((category: any) => (
                                        <li key={category.id}>
                                            <a href="#" className="capitalize">{category.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="blog_details-widget hidden">
                            <h4 className="blog_details-widget-title">Popular Courses</h4>
                            <div className="blog_details-widget-course">
                                <div className="blog_details-course-img">
                                    <a href="#">
                                        <img
                                            src="/assets/img/blog/details/course-1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="blog_details-course-info">
                                    <h6>
                                        <a href="#">The Complete JS Course For Expert!</a>
                                    </h6>
                                    <a href="#" className="inner-course-rate">
                                        Free
                                    </a>
                                </div>
                            </div>
                            <div className="blog_details-widget-course">
                                <div className="blog_details-course-img">
                                    <a href="#">
                                        <img
                                            src="/assets/img/blog/details/course-2.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="blog_details-course-info">
                                    <h6>
                                        <a href="#">
                                            Medical Visual Deployment and Usability
                                        </a>
                                    </h6>
                                    <a href="#" className="inner-course-rate">
                                        Free
                                    </a>
                                </div>
                            </div>
                            <div className="blog_details-widget-course">
                                <div className="blog_details-course-img">
                                    <a href="#">
                                        <img
                                            src="/assets/img/blog/details/course-3.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="blog_details-course-info">
                                    <h6>
                                        <a href="#">
                                            The Graphic Design with Project Course
                                        </a>
                                    </h6>
                                    <a href="#" className="inner-course-rate">
                                        Free
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="blog_details-widget">
                            <h4 className="blog_details-widget-title">Tags</h4>
                            <div className="blog_details-widget-tag">
                                <ul>
                                    {blog.tags?.map((tag: any) => (
                                        <li key={tag.id}>
                                            <a href="#">#{tag.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
</>;
}