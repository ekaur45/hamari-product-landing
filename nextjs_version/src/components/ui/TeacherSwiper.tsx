"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import TeacherService from "@/services/teacher.service";

const teachers = [
    {
        id: 1,
        name: "Annette Blacks",
        role: "UI/UX Developer",
        img: "/assets/img/teacher/8/1.jpg",
    },
    {
        id: 2,
        name: "Michaels Leonel",
        role: "Web Designer",
        img: "/assets/img/teacher/8/2.jpg",
    },
    {
        id: 3,
        name: "Jenny Wilson",
        role: "Photographer",
        img: "/assets/img/teacher/8/3.jpg",
    },
    {
        id: 4,
        name: "Dianne Russell",
        role: "Graphic Designer",
        img: "/assets/img/teacher/8/4.jpg",
    },
    {
        id: 5,
        name: "Annette Blacks",
        role: "UI/UX Developer",
        img: "/assets/img/teacher/8/1.jpg",
    },
];

export default function TeacherSwiper({ teachers }: { teachers: any[] }) {

    return (
        <section className="h8_teacher-area pt-110 pb-115">
            <div className="container">
                <div className="row align-items-center mb-30">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="section-area-8 mb-20">
                            <span className="section-subtitle">Our Professionals</span>
                            <h2 className="section-title mb-0">Meet Our Teachers</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="h8_teacher-navigation mb-30">
                            <div className="h8_teacher-prev">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 7H1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7 1L1 7L7 13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="h8_teacher-next">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 7H13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7 1L13 7L7 13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".h8_teacher-prev",
                        nextEl: ".h8_teacher-next",
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    className="teacher-active-8"
                >
                    {teachers?.map((teacher: any) => (
                        <SwiperSlide key={teacher.id}>
                            <div className="h8_teacher-item">
                                <div className="h8_teacher-img w_img">
                                    {teacher.user?.details?.profileImage && <img src={teacher.introductionVideoThumbnailUrl ? process.env.NEXT_PUBLIC_ASSET_URL + teacher.introductionVideoThumbnailUrl : ''} alt={teacher.user.firstName} />}
                                    {/* <div className="h8_teacher-social">
                                        <span className="share">
                                            <i className="fa-light fa-share-nodes"></i>
                                        </span>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                                <div className="h8_teacher-content">
                                    <h5 className="h8_teacher-content-title">
                                        <Link href="#">{teacher.user.firstName} {teacher.user.lastName}</Link>
                                    </h5>
                                    <span>{teacher.tagline}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="tutor_button">
                    <Link href="/teachers" className="theme-btn theme-btn-medium theme-btn-3">
                        Meet Out Teachers<i className="fa-light fa-arrow-up-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
