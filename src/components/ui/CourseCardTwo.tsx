import Link from "next/link";

interface CourseCardTwoProps {
    img: string;
    title: string;
    rating: number;
    reviews: number;
    lessons: number;
    students: number;
    desc: string;
    authorImg: string;
    authorName: string;
    price: string;
    oldPrice?: string;
}

export default function CourseCardTwo({
    img,
    title,
    rating,
    reviews,
    lessons,
    students,
    desc,
    authorImg,
    authorName,
    price,
    oldPrice,
}: CourseCardTwoProps) {
    return (
        <div className="h2_course-item mb-30">
            <div className="h2_course-item-img">
                <Link href="/course-details">
                    <img src={img} alt={title} />
                </Link>
            </div>
            <div className="h2_course-content">
                <div className="h2_course-content-top">
                    <div className="h2_course-rating">
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
                        <span>({reviews.toString().padStart(2, "0")} Reviews)</span>
                    </div>
                    <div className="h2_course-save">
                        <a href="#">
                            <i className="fa-thin fa-bookmark"></i>
                        </a>
                    </div>
                </div>
                <h5 className="h2_course-content-title">
                    <Link href="/course-details">{title}</Link>
                </h5>
                <div className="h2_course-content-info">
                    <span>
                        <i className="fa-thin fa-book-blank"></i>
                        {lessons} Lessons
                    </span>
                    <span>
                        <i className="fa-thin fa-user-group"></i>
                        {students} Students
                    </span>
                </div>
                <p className="h2_course-content-text">{desc}</p>
                <div className="h2_course-content-author">
                    <div className="h2_course-author-img">
                        <img src={authorImg} alt={authorName} />
                    </div>
                    <div className="h2_course-author-info">
                        <span>
                            By <a href="#">{authorName}</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="h2_course-content-bottom">
                <div className="h2_course-bottom-price">
                    <span>
                        {oldPrice && <del>{oldPrice}</del>}
                        {price}
                    </span>
                </div>
                <div className="h2_course-bottom-btn">
                    <Link href="/course-details">
                        More Details<i className="fa-light fa-arrow-right"></i>
                        <i className="fa-light fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
