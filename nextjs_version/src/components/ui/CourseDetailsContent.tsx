"use client";

import { useState } from "react";
import Link from "next/link";

export default function CourseDetailsContent() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <section className="course_details-area pt-120 pb-60">
            <div className="container">
                <div className="course_details-img">
                    <img src="/assets/img/course/details/1.jpg" alt="" />
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="course_details-wrap mb-55">
                            <div className="course_details-top mb-60">
                                <h3 className="course_details-title">
                                    Introduction to User Experience Design
                                </h3>
                                <div className="course_details-meta">
                                    <div className="course_details-meta-left">
                                        <div className="course_details-author">
                                            <div className="course_details-author-img">
                                                <img
                                                    src="/assets/img/course/details/author.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="course_details-author-info">
                                                <span>Teacher</span>
                                                <h5>
                                                    <Link href="/team">Dylan Meringue</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="course_details-category">
                                            <span>Categories</span>
                                            <h5>
                                                <a href="#">Online Teaching</a>
                                            </h5>
                                        </div>
                                        <div className="course_details-rating">
                                            <span>Review</span>
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
                                        </div>
                                    </div>
                                    <div className="course_details-meta-right">
                                        <a href="#" className="theme-btn theme-btn-medium">
                                            Free
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="course_details-tab-button">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === "overview" ? "active" : ""
                                                }`}
                                            onClick={() => setActiveTab("overview")}
                                            type="button"
                                        >
                                            <i className="fa-solid fa-bookmark"></i>
                                            <span>Overview</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === "curriculum" ? "active" : ""
                                                }`}
                                            onClick={() => setActiveTab("curriculum")}
                                            type="button"
                                        >
                                            <i className="fa-thin fa-box"></i>
                                            <span>Curriculum</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === "instructor" ? "active" : ""
                                                }`}
                                            onClick={() => setActiveTab("instructor")}
                                            type="button"
                                        >
                                            <i className="fa-thin fa-user"></i>
                                            <span>Instructor</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === "reviews" ? "active" : ""
                                                }`}
                                            onClick={() => setActiveTab("reviews")}
                                            type="button"
                                        >
                                            <i className="fa-thin fa-message-dots"></i>
                                            <span>Reviews</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="course_details-tab-content">
                                <div className="tab-content" id="pills-tabContent">
                                    {activeTab === "overview" && (
                                        <div
                                            className="tab-pane fade show active"
                                            role="tabpanel"
                                        >
                                            <div className="course_details-content">
                                                <h4 className="course_details-content-title mb-15">
                                                    Courses Description
                                                </h4>
                                                <p className="mb-25">
                                                    Curabitur tempus tincidunt tellus ac placerat. Nullam
                                                    non libero nisi. Fusce congue est eget nisl tristique
                                                    ornare. Vestibulum id massa felis. Nullam vehicula
                                                    bibendum nulla eu vulputate. Aenean fringilla tortor
                                                    ut laoreet congue magna, a viverra turpis consectetur
                                                    porta.
                                                </p>
                                                <p className="mb-40">
                                                    Curabitur tempus tincidunt tellus ac placerat. Nullam
                                                    non libero nisi. Fusce congue est eget nisl tristique
                                                    ornare. Vestibulum id massa felis. Nullam vehicula
                                                    bibendum nulla eu vulputate. Aenean fringilla tortor
                                                    ut laoreet congue magna, a viverra turpis consectetur
                                                    porta.
                                                </p>
                                                <h4 className="course_details-content-title mb-20">
                                                    What you will learn in this course
                                                </h4>
                                                <div className="course_details-content-list">
                                                    <ul>
                                                        <li>
                                                            Etyma protium et olio gravida cur abitur est dui
                                                            viverrid non mi egret
                                                        </li>
                                                        <li>
                                                            Dictum Bibendum sapiens internum malasada fames ac
                                                            ante ipsum primes
                                                        </li>
                                                        <li>
                                                            Fauci bus cur abitur pulvinar rut rum masa sed so
                                                            dales sapiens utricles
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === "curriculum" && (
                                        <div
                                            className="tab-pane fade show active"
                                            role="tabpanel"
                                        >
                                            <div className="course_details-curriculum">
                                                <h4 className="course_details-content-title mb-15">
                                                    Course Curriculum
                                                </h4>
                                                <p className="mb-25">
                                                    Curabitur tempus tincidunt tellus ac placerat. Nullam
                                                    non libero nisi. Fusce congue est eget nisl tristique
                                                    ornare. Vestibulum id massa felis. Nullam vehicula
                                                    bibendum nulla eu vulputate. Aenean fringilla tortor
                                                    ut laoreet congue magna, a viverra turpis consectetur
                                                    porta.
                                                </p>
                                                <div className="accordion" id="Expp">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button
                                                                className="accordion-button"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseOne"
                                                                aria-expanded="true"
                                                                aria-controls="collapseOne"
                                                            >
                                                                Greetings and introduction
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapseOne"
                                                            className="accordion-collapse collapse show"
                                                            aria-labelledby="headingOne"
                                                            data-bs-parent="#Expp"
                                                        >
                                                            <div className="accordion-body">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa-brands fa-youtube"></i>
                                                                            Getting Started{" "}
                                                                        </a>
                                                                        <span>
                                                                            04:00
                                                                            <i className="fa-light fa-lock-keyhole"></i>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa-brands fa-youtube"></i>WP
                                                                            Theme Development{" "}
                                                                        </a>
                                                                        <span>
                                                                            04:00
                                                                            <i className="fa-light fa-lock-keyhole"></i>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Add more accordion items as needed */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === "instructor" && (
                                        <div
                                            className="tab-pane fade show active"
                                            role="tabpanel"
                                        >
                                            <div className="course_details-instructor">
                                                <div className="course_details-thumbnail w_img">
                                                    <img
                                                        src="/assets/img/teacher/2/1.jpg"
                                                        alt="team images"
                                                    />
                                                </div>
                                                <div className="course_details-author-content">
                                                    <h6 className="course_details-author-title">
                                                        Jane Seymour
                                                    </h6>
                                                    <span className="course_details-author-subtitle">
                                                        Founder &amp; CEO
                                                    </span>
                                                    <p>
                                                        Consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt labore et dolore magna aliqua enim minim
                                                        veniam quis nostrud exercitation ulla mco laboris
                                                        nisi ut aliquip ex ea commodo consequat. duis aute
                                                        irure dolor in reprehenderit in voluptate.
                                                    </p>
                                                    <div className="contact-social">
                                                        <span>Social Media</span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa-brands fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa-brands fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa-brands fa-behance"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === "reviews" && (
                                        <div
                                            className="tab-pane fade show active"
                                            role="tabpanel"
                                        >
                                            <div className="course_details-review">
                                                <h4 className="course_details-review-title">
                                                    Student Ratings &amp; Reviews
                                                </h4>
                                                <div className="course_details-review-wrap">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-md-4 col-sm-4">
                                                            <div className="course_details-review-left">
                                                                <h5>5.0</h5>
                                                                <ul>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa-solid fa-star"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa-solid fa-star"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa-solid fa-star"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa-solid fa-star"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <i className="fa-solid fa-star"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <p>(4 Reviews)</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 col-sm-8">
                                                            <div className="course_details-review-content">
                                                                <ul>
                                                                    <li>
                                                                        <span className="review-rating">
                                                                            5 <i className="fa-solid fa-star"></i>
                                                                        </span>
                                                                        <span className="review-progress-bar"></span>
                                                                        <span className="review-rating-count">
                                                                            1
                                                                        </span>
                                                                    </li>
                                                                    {/* Add more review bars */}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="course_details-sidebar mb-60">
                            <div className="course_details-price">
                                <del>$36.00</del>
                                <h2>$28.00</h2>
                            </div>
                            <div className="course_details-list">
                                <ul>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-clock"></i>Duration
                                        </span>
                                        <span>15 Weeks</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-user-group"></i>Students
                                        </span>
                                        <span>354</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-file-lines"></i>Lessons
                                        </span>
                                        <span>42</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-chart-line-up"></i>Skill Level
                                        </span>
                                        <span>Beginner</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-language"></i>Language
                                        </span>
                                        <span>English</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-user"></i>Instructor
                                        </span>
                                        <span>Dylan Meringue</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-percent"></i>Pass Percentage
                                        </span>
                                        <span>84%</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-thin fa-calendar-days"></i>Deadline
                                        </span>
                                        <span>24 March 2023</span>
                                    </li>
                                </ul>
                                <div className="course_details-sidebar-btn">
                                    <a href="#" className="course-btn theme-btn theme-btn-big">
                                        Purchase Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
