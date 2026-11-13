import Link from "next/link";

type BlogListItem = {
    id: number | string;
    title?: string;
    slug?: string;
    excerpt?: string;
    publishedAt?: string;
    coverImage?: { url?: string } | null;
    author?: { name?: string } | null;
    categories?: Array<{ name?: string }> | null;
};

const getLatestBlogs = async (): Promise<{ data: BlogListItem[]; meta: any }> => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_API_URL}/blogs?fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=publishedAt&populate[coverImage][fields][0]=url&populate[author][populate][avatar][fields][0]=url&populate[categories][fields][0]=name&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
            },
        }
    );

    if (response.ok) {
        return await response.json();
    }

    return { data: [], meta: {} };
};

export default async function BlogSection() {
    const blogs = await getLatestBlogs();

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
                    {blogs.data.map((blog) => (
                        <div key={blog.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                            <div className="h3_blog-item mb-30">
                                <div className="h3_blog-img">
                                    <Link href={blog.slug ? `/blog/${blog.slug}` : "/blog"}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={
                                                blog.coverImage?.url
                                                    ? process.env.NEXT_PUBLIC_CMS_ASSETS_URL + blog.coverImage.url
                                                    : "/assets/img/blog/3/1.jpg"
                                            }
                                            alt={blog.title || "Blog cover"}
                                        />
                                    </Link>
                                    <Link href="#" className="h3_blog-img-meta">
                                        {blog.categories?.[0]?.name || "News"}
                                    </Link>
                                </div>
                                <div className="h3_blog-content">
                                    <div className="h3_blog-content-meta">
                                        <span>
                                            <i className="fa-thin fa-clock"></i>
                                            {blog.publishedAt}
                                        </span>
                                        <span>
                                            <i className="fa-thin fa-user"></i>
                                            {blog.author?.name}
                                        </span>
                                    </div>
                                    <h5 className="h3_blog-content-title">
                                        <Link href={blog.slug ? `/blog/${blog.slug}` : "/blog"}>{blog.title}</Link>
                                    </h5>
                                    <p>{blog.excerpt || ""}</p>
                                    <Link href={blog.slug ? `/blog/${blog.slug}` : "/blog"} className="h3_blog-btn">
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
