import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer-area h3_footer-area">
            <div className="footer-top pt-240 pb-55">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between -mx-4">
                        <div className="w-full sm:w-full md:w-7/12 lg:w-7/12 xl:w-1/4 px-4">
                            <div className="footer-widget mb-40">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo/logo-white.png" alt="logo" />
                                    </Link>
                                </div>
                                <p className="footer-widget-text mb-35">
                                    Through a combination of lectures, readings, discussions, students will gain solid foundation in
                                    educational.
                                </p>
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-5/12 lg:w-5/12 xl:w-1/6 px-4 flex justify-center xl:justify-center">
                            <div className="footer-widget mb-40">
                                <h5 className="footer-widget-title">Useful Link</h5>
                                <div className="footer-widget-list">
                                    <ul>
                                        <li>
                                            <Link href="/blog">Blogs</Link>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                        <li>
                                            <a href="#">Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-full md:w-7/12 lg:w-7/12 xl:w-1/3 px-4 order-3 md:order-3 xl:order-4">
                            <div className="footer-widget ml-80 mb-40">
                                <h5 className="footer-widget-title">Newsletter</h5>
                                <p className="footer-widget-text mb-20 newsletter-text">
                                    Sign up foe our newsletter and get 34% <br /> off your next course.
                                </p>
                                <form action="#">
                                    <div className="footer-subscribe-form">
                                        <input type="email" placeholder="Enter Your Email*" />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                    <div className="footer-subscribe-condition">
                                        <label className="condition_label">
                                            I agree to the terms of use and privacy policy.
                                            <input type="checkbox" />
                                            <span className="check_mark"></span>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="copyright-area">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="copyright-text">
                                <p>Copyright © 2025 All Rights Reserved by Hamari Product</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
