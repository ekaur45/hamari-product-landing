import type { Metadata } from "next";
import Link from "next/link";
import TeacherService from "@/services/teacher.service";
import type { PaginatedApiResponse } from "@/services/api.service";
import type { Teacher } from "@/types/teacher.types";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us - {process.env.NEXT_APP_NAME}",
    description:
        "Learn about {process.env.NEXT_APP_NAME} and our mission to provide personalized tutoring",
};

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

const teacherService: TeacherService = new TeacherService();

const getLatestBlogs = async (): Promise<{ data: BlogListItem[]; meta: unknown }> => {
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

export default async function AboutPage() {
    const [teachersRes, blogsRes] = await Promise.all([
        teacherService.getFeaturedTeachers(),
        getLatestBlogs(),
    ]);

    const teachers = (teachersRes as PaginatedApiResponse<Teacher>).data || [];
    const blogs = blogsRes.data || [];

    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb-area pt-175 pb-120 bg-default relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="breadcrumb-content text-center text-white">
                                <h2 className="breadcrumb-title" style={{ color: "#fff" }}>About Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb flex justify-center gap-2">
                                        <li className="breadcrumb-item text-white font-bold text-lg underline">
                                            <Link href="/">Home</Link>
                                        </li>
                                        /
                                        <li className="breadcrumb-item active" aria-current="page">
                                            About
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src="/assets/img/breadcrumb/breadcrumb.jpg"
                    alt="About Us Breadcrumb"
                    width={1920}
                    height={1080}
                    className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50"
                />
            </section>

            {/* About Section */}
            <section className="h3_about-area pt-140 pb-90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                            <div className="h3_about-img mb-50">
                                <div className="h3_about-inner-img w_img mr-50">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/assets/img/landing-02.webp" alt={`${process.env.NEXT_APP_NAME} tutoring experience`} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-4">
                            <div className="h3_about-wrap mr-65 mb-50">
                                <div className="section-area-3 mb-35">
                                    <span className="section-subtitle">Know About Us</span>
                                    <h2 className="section-title mb-25">
                                        {process.env.NEXT_APP_NAME} — The Future of Tutoring, Built Around You
                                    </h2>
                                    <p className="section-text">
                                        Every student is different. {process.env.NEXT_APP_NAME} delivers 100%
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
                                className="h2_teacher-section bg-default relative"                                
                            >
                                <Image
                                    src="/assets/img/bg/become-teacher.jpg"
                                    alt="Become an Instructor Background"
                                    width={1920}
                                    height={1080}
                                    className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50"
                                />
                                <div className="section-area-2 z-10">
                                    <h2 className="section-title mb-20 text-white">
                                        Become an
                                        <span className="!text-primary ml-2">
                                            Instructor{" "}
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/assets/img/banner/2/line.png" alt="" />
                                        </span>
                                    </h2>
                                    <p className="section-text mb-25 !text-white">
                                        Teach what you know, grow your audience, and help students reach their goals—on
                                        a platform built for modern tutoring.
                                    </p>
                                    <div className="h3_about-content mb-25 !text-white">
                                        <div className="flex flex-wrap -mx-4">
                                            <div className="w-full sm:w-1/2 px-4">
                                                <span className="!text-white">
                                                    <i className="fa-regular fa-check"></i>Create your profile
                                                </span>
                                            </div>
                                            <div className="w-full sm:w-1/2 px-4">
                                                <span className="!text-white">
                                                    <i className="fa-regular fa-check"></i>Set your availability
                                                </span>
                                            </div>
                                            <div className="w-full sm:w-1/2 px-4">
                                                <span className="!text-white">
                                                    <i className="fa-regular fa-check"></i>Teach 1-on-1 sessions
                                                </span>
                                            </div>
                                            <div className="w-full sm:w-1/2 px-4">
                                                <span className="!text-white">
                                                    <i className="fa-regular fa-check"></i>Track learner progress
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h2_teacher-button z-10">
                                    <Link
                                        href="/teachers"
                                        className="theme-btn theme-btn-medium teacher-btn"
                                    >
                                        Become an Instructor
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {teachers?.length ? (
                            teachers.slice(0, 7).map((teacher: Teacher) => (
                                <div key={teacher.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
                                    <div className="h2_teacher-item mb-30">
                                        <div className="h2_teacher-img">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={
                                                    teacher.introductionVideoThumbnailUrl
                                                        ? process.env.NEXT_PUBLIC_ASSET_URL + teacher.introductionVideoThumbnailUrl
                                                        : "/assets/img/teacher/2/1.jpg"
                                                }
                                                alt={`${teacher.user?.firstName || ""} ${teacher.user?.lastName || ""}`.trim() || "Teacher"}
                                            />
                                        </div>
                                        <div className="h2_teacher-content">
                                            <h5 className="h2_teacher-content-title">
                                                <Link href={`/teachers/${teacher.id}`}>
                                                    {teacher.user?.firstName} {teacher.user?.lastName}
                                                </Link>
                                            </h5>
                                            <span>{teacher.tagline || "Teacher"}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-full px-4">
                                <div className="py-10 text-center">
                                    <p>No teachers found right now.</p>
                                    <Link href="/teachers" className="theme-btn theme-btn-medium teacher-btn mt-4 inline-block">
                                        Browse Teachers
                                    </Link>
                                </div>
                            </div>
                        )}
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
                                    <span className="!text-primary ml-2">
                                        Articles
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/assets/img/banner/2/line.png" alt="" />
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
                        {blogs.length ? (
                            blogs.map((blog) => (
                                <div key={blog.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                                    <div className="h2_blog-item mb-30">
                                        <div className="h2_blog-img">
                                            <Link href={blog.slug ? `/blog/${blog.slug}` : "/blog"}>
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={
                                                        blog.coverImage?.url
                                                            ? process.env.NEXT_PUBLIC_CMS_ASSETS_URL + blog.coverImage.url
                                                            : "/assets/img/blog/2/blog-1.jpg"
                                                    }
                                                    alt={blog.title || "Blog cover"}
                                                    width={370}
                                                    height={240}
                                                    className="w-full h-full object-cover rounded-t-lg"
                                                />
                                            </Link>
                                        </div>
                                        <div className="h2_blog-content">
                                            <div className="h2_blog-content-meta">
                                                <span>
                                                    <i className="fa-thin fa-user"></i>
                                                    {blog.author?.name || "Admin"}
                                                </span>
                                                <span>
                                                    <i className="fa-thin fa-clock"></i>
                                                    {blog.publishedAt || ""}
                                                </span>
                                            </div>
                                            <h5 className="h2_blog-content-title">
                                                <Link href={blog.slug ? `/blog/${blog.slug}` : "/blog"}>{blog.title}</Link>
                                            </h5>
                                            <Link href={blog.slug ? `/blog/${blog.slug}` : "/blog"} className="theme-btn blog-btn t-theme-btn">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-full px-4">
                                <div className="py-10 text-center">
                                    <p>No articles found right now.</p>
                                    <Link href="/blog" className="theme-btn blog-btn t-theme-btn mt-4 inline-block">
                                        View All Articles
                                    </Link>
                                </div>
                            </div>
                        )}
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
