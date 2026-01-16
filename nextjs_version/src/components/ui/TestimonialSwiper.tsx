"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        id: 1,
        name: "Sue Shei",
        role: "Special Education",
        content:
            "Duis euismod ipsum vel ultrices gravida. Vestibulum ac nulla condimentum, euismod massa ut, maximus orci. Aliquam nulla neque, ornare quis ligula et, scelerisque laoreet ex. Aliquam vulputate velit nisl, a eleifend libero mattis id. Vivamus nec ligula ullamcorper, porta sapien id, ullamcorper ligula. Mauris sed condimentum nisl.",
        img: "/assets/img/testimonial/3/1.jpg",
    },
    {
        id: 2,
        name: "Hanson Deck",
        role: "Special Education",
        content:
            "Duis euismod ipsum vel ultrices gravida. Vestibulum ac nulla condimentum, euismod massa ut, maximus orci. Aliquam nulla neque, ornare quis ligula et, scelerisque laoreet ex. Aliquam vulputate velit nisl, a eleifend libero mattis id. Vivamus nec ligula ullamcorper, porta sapien id, ullamcorper ligula. Mauris sed condimentum nisl.",
        img: "/assets/img/testimonial/3/2.jpg",
    },
    {
        id: 3,
        name: "Sue Shei",
        role: "Special Education",
        content:
            "Duis euismod ipsum vel ultrices gravida. Vestibulum ac nulla condimentum, euismod massa ut, maximus orci. Aliquam nulla neque, ornare quis ligula et, scelerisque laoreet ex. Aliquam vulputate velit nisl, a eleifend libero mattis id. Vivamus nec ligula ullamcorper, porta sapien id, ullamcorper ligula. Mauris sed condimentum nisl.",
        img: "/assets/img/testimonial/3/1.jpg",
    },
];

export default function TestimonialSwiper() {
    return (
        <section className="h3_testimonial-area pt-135 pb-140">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-end mb-30 -mx-4">
                    <div className="w-full md:w-2/3 px-4">
                        <div className="section-area-3 mb-30">
                            <span className="section-subtitle">Testimonials</span>
                            <h2 className="section-title mb-0">What's People Say</h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <div className="h3_testimonial-navigation mb-40">
                            <div className="h3_testimonial-prev">
                                <i className="fa-regular fa-arrow-left"></i>
                            </div>
                            <div className="h3_testimonial-next">
                                <i className="fa-regular fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".h3_testimonial-prev",
                        nextEl: ".h3_testimonial-next",
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 2,
                        },
                    }}
                    className="h3_testimonial-active"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="h3_testimonial-item">
                                <div className="h3_testimonial-item-content">
                                    <p>{testimonial.content}</p>
                                    <img
                                        src="/assets/img/testimonial/3/quote.png"
                                        alt=""
                                        className="quote"
                                    />
                                </div>
                                <div className="h3_testimonial-item-author">
                                    <img src={testimonial.img} alt={testimonial.name} />
                                    <div className="h3_testimonial-item-author-info">
                                        <h5>{testimonial.name}</h5>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <img
                src="/assets/img/testimonial/3/shape-1.png"
                alt=""
                className="h3_testimonial-shape-1"
            />
            <img
                src="/assets/img/testimonial/3/shape-2.png"
                alt=""
                className="h3_testimonial-shape-2"
            />
            <img
                src="/assets/img/testimonial/3/shape-3.png"
                alt=""
                className="h3_testimonial-shape-3"
            />
            <img
                src="/assets/img/testimonial/3/shape-4.png"
                alt=""
                className="h3_testimonial-shape-4"
            />
        </section>
    );
}
