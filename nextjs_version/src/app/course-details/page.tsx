import type { Metadata } from "next";
import Link from "next/link";
import CourseDetailsContent from "@/components/ui/CourseDetailsContent";

export const metadata: Metadata = {
    title: "Course Details - Humari Product",
    description: "Course details and curriculum",
};

export default function CourseDetailsPage() {
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
                                <h2 className="breadcrumb-title">
                                    Introduction to User Experience Design
                                </h2>
                                <div className="breadcrumb-list">
                                    <Link href="/">Home</Link>
                                    <span>Course Details</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CourseDetailsContent />

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
