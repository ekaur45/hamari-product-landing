import Link from "next/link";

interface CourseCardProps {
    img: string;
    category: string;
    title: string;
    rating: number;
    reviews: number;
    price: string;
    oldPrice?: string;
    authorImg: string;
    authorName: string;
    lessons: number;
    duration: string;
}

export default function CourseCard({
    img,
    category,
    title,
    rating,
    reviews,
    price,
    oldPrice,
    authorImg,
    authorName,
    lessons,
    duration,
}: CourseCardProps) {
    return (
        <>
            <div className="h3_course-item mb-30">
                <div className="h3_course-item-top">
                    <div className="h3_course-item-img">
                        <a href="course-details.html"><img src="assets/img/course/3/1.jpg" alt=""/></a>
                        <div className="h3_course-item-tag">
                            <a href="#">Leadership</a>
                        </div>
                        <div className="h3_course-item-save">
                            <a href="#"><i className="fa-light fa-bookmark"></i></a>
                        </div>
                    </div>
                    <div className="h3_course-content">
                        <div className="h3_course-content-info">
                            <ul>
                                <li><i className="fa-light fa-book-blank"></i>42 Lessons</li>
                                <li><i className="fa-light fa-user-group"></i>64 Students</li>
                                <li><i className="fa-light fa-clock"></i>20 Hours</li>
                            </ul>
                        </div>
                        <h5 className="h3_course-content-title"><a href="course-details.html">A Comprehensive Overview of The Field of Education.</a></h5>
                        <div className="h3_course-content-price">
                            <span><del>$120</del>$96.00</span>
                            <h5>Free</h5>
                        </div>
                    </div>
                </div>
                <div className="h3_course-item-bottom">
                    <div className="h3_course-item-author">
                        <div className="h3_course-item-author-img">
                            <img src="assets/img/course/3/author-1.jpg" alt="" />
                        </div>
                        <div className="h3_course-item-author-info">
                            <span>By <a href="#">Widget</a></span>
                        </div>
                    </div>
                    <div className="h3_course-item-rating">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <span>(46)</span>
                    </div>
                </div>
            </div>
        </>
    );
}
