<!Doctype html>
<html class="no-js" lang="zxx">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>School University & Online Education Template | Hamari Product - eLearning Education</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/favicon.png') }}>
        <!-- Place favicon.ico in the root directory -->

		<!-- CSS here -->
        <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/animate.min.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/magnific-popup.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/fontawesome-all.min.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/odometer.min.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/nice-select.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/meanmenu.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/swiper-bundle.min.css') }}>
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}>
    </head>
     
    <body>
        <!-- sidebar-information-area-start -->
        <div class="sidebar-info side-info">
            <div class="sidebar-logo-wrapper mb-25">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-8">
                        <div class="sidebar-logo">
                            <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/logo-white.png') }} alt="logo-img"></a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-4">
                        <div class="sidebar-close-wrapper text-end">
                            <button class="sidebar-close side-info-close"><i class="fal fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu-wrapper fix">
                <div class="mobile-menu"></div>
            </div>
        </div>
        <div class="offcanvas-overlay"></div>
        <!-- sidebar-information-area-end -->

        <!-- header area start -->
       <header> 
            <div class="h3_header-area header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-sm-7 col-6">
                            <div class="h3_header-logo">
                                <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/logo.png') }} alt=""></a>
                            </div>
                        </div>
                        <div class="col-xl-6 d-none d-xl-block">
                            <div class="h3_header-middle">
                                <nav class="h3_main-menu mobile-menu" id="mobile-menu">
                                    <ul>
                                        <li><a href="{{ url('/about') }}">About Us</a></li>
                                        <li><a href="{{ url('/blog') }}">Blogs</a></li>
                                        <li><a href="{{ url('/contact') }}">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-5 col-6">
                            <div class="h3_header-right">
                                <div class="h3_header-btn d-none d-sm-block">
                                    <a href="#" class="header-btn theme-btn theme-btn-medium theme-btn-3">Sign Up Now<i class="fa-light fa-arrow-up-right"></i></a>
                                </div>
                                <div class="header-menu-bar d-xl-none ml-10">
                                    <span class="header-menu-bar-icon side-toggle">
                                        <i class="fa-light fa-bars"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- header area end -->

        <main>
            <!-- breadcrumb area start -->
            <section class="breadcrumb-area bg-default" data-background="assets/img/breadcrumb/breadcrumb-bg.jpg">
                <img src="{{ asset('assets/img/breadcrumb/shape-1.png') }} alt="" class="breadcrumb-shape">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content">
                                <h2 class="breadcrumb-title">Course Archive</h2>
                                <div class="breadcrumb-list">
                                    <a href="{{ url('/') }}">Home</a>
                                    <span>Course</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb area end -->

            <!-- course area start -->
            <section class="innerPage_course-area pt-120 pb-90">
                <div class="container">
                    <div class="innerPage_course-top mb-30">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-xl-4 col-md-4">
                                <div class="innerPage_course-left mb-20">
                                    <p>Showing 1-8 of 24 results</p>
                                </div>
                            </div>
                            <div class="col-xl-8 col-md-8">
                                <div class="innerPage_course-right mb-20">
                                    <div class="innerPage_course-category">
                                        <select name="select" class="innerPage_course-category-list has-nice-select">
                                            <option value="1">Art & Design</option>
                                            <option value="2">Graphic Design</option>
                                            <option value="3">Web Design</option>
                                            <option value="4">UX/UI Design</option>
                                        </select>
                                    </div>
                                    <div class="innerPage_course-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search Item">
                                            <button type="submit" class="innerPage_course-search-btn"><i class="fa-thin fa-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_course-item mb-30">
                                <div class="h2_course-item-img">
                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/2/1.jpg') }} alt=""></a>
                                </div>
                                <div class="h2_course-content">
                                    <div class="h2_course-content-top">
                                        <div class="h2_course-rating">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                            <span>(03 Reviews)</span>
                                        </div>
                                        <div class="h2_course-save">
                                            <a href="#"><i class="fa-thin fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                    <h5 class="h2_course-content-title"><a href="{{ url('/course-details') }}">Introduction to Psychology Subject</a></h5>
                                    <div class="h2_course-content-info">
                                        <span><i class="fa-thin fa-book-blank"></i>23 Lessons</span>
                                        <span><i class="fa-thin fa-user-group"></i>45 Students</span>
                                    </div>
                                    <p class="h2_course-content-text">
                                        Through a combination of lectures, readings and discussions students.
                                    </p>
                                    <div class="h2_course-content-author">
                                        <div class="h2_course-author-img">
                                            <img src="{{ asset('assets/img/course/2/author-1.jpg') }} alt="">
                                        </div>
                                        <div class="h2_course-author-info">
                                            <span>By <a href="#">Eric Wid get</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="h2_course-content-bottom">
                                    <div class="h2_course-bottom-price">
                                        <span><del>$140</del>$96.00</span>
                                    </div>
                                    <div class="h2_course-bottom-btn">
                                        <a href="{{ url('/course-details') }}">More Details<i class="fa-light fa-arrow-right"></i><i class="fa-light fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_course-item mb-30">
                                <div class="h2_course-item-img">
                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/2/2.jpg') }} alt=""></a>
                                </div>
                                <div class="h2_course-content">
                                    <div class="h2_course-content-top">
                                        <div class="h2_course-rating">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                            <span>(03 Reviews)</span>
                                        </div>
                                        <div class="h2_course-save">
                                            <a href="#"><i class="fa-thin fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                    <h5 class="h2_course-content-title"><a href="{{ url('/course-details') }}">Complete Angular Developer in 2023</a></h5>
                                    <div class="h2_course-content-info">
                                        <span><i class="fa-thin fa-book-blank"></i>54 Lessons</span>
                                        <span><i class="fa-thin fa-user-group"></i>72 Students</span>
                                    </div>
                                    <p class="h2_course-content-text">
                                        Through a combination of lectures, readings and discussions students.
                                    </p>
                                    <div class="h2_course-content-author">
                                        <div class="h2_course-author-img">
                                            <img src="{{ asset('assets/img/course/2/author-2.jpg') }} alt="">
                                        </div>
                                        <div class="h2_course-author-info">
                                            <span>By <a href="#">Hanson Deck</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="h2_course-content-bottom">
                                    <div class="h2_course-bottom-price">
                                        <span><del>$120</del>$70.00</span>
                                    </div>
                                    <div class="h2_course-bottom-btn">
                                        <a href="{{ url('/course-details') }}">More Details<i class="fa-light fa-arrow-right"></i><i class="fa-light fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_course-item mb-30">
                                <div class="h2_course-item-img">
                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/2/3.jpg') }} alt=""></a>
                                </div>
                                <div class="h2_course-content">
                                    <div class="h2_course-content-top">
                                        <div class="h2_course-rating">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                            <span>(03 Reviews)</span>
                                        </div>
                                        <div class="h2_course-save">
                                            <a href="#"><i class="fa-thin fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                    <h5 class="h2_course-content-title"><a href="{{ url('/course-details') }}">The Science of Well-being for Teens</a></h5>
                                    <div class="h2_course-content-info">
                                        <span><i class="fa-thin fa-book-blank"></i>67 Lessons</span>
                                        <span><i class="fa-thin fa-user-group"></i>24 Students</span>
                                    </div>
                                    <p class="h2_course-content-text">
                                        Through a combination of lectures, readings and discussions students.
                                    </p>
                                    <div class="h2_course-content-author">
                                        <div class="h2_course-author-img">
                                            <img src="{{ asset('assets/img/course/2/author-3.jpg') }} alt="">
                                        </div>
                                        <div class="h2_course-author-info">
                                            <span>By <a href="#">Max Conversion</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="h2_course-content-bottom">
                                    <div class="h2_course-bottom-price">
                                        <span><del>$150</del>$99.00</span>
                                    </div>
                                    <div class="h2_course-bottom-btn">
                                        <a href="{{ url('/course-details') }}">More Details<i class="fa-light fa-arrow-right"></i><i class="fa-light fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_course-item mb-30">
                                <div class="h2_course-item-img">
                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/2/4.jpg') }} alt=""></a>
                                </div>
                                <div class="h2_course-content">
                                    <div class="h2_course-content-top">
                                        <div class="h2_course-rating">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                            <span>(03 Reviews)</span>
                                        </div>
                                        <div class="h2_course-save">
                                            <a href="#"><i class="fa-thin fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                    <h5 class="h2_course-content-title"><a href="{{ url('/course-details') }}">AWS Machine Learning Engineer</a></h5>
                                    <div class="h2_course-content-info">
                                        <span><i class="fa-thin fa-book-blank"></i>57 Lessons</span>
                                        <span><i class="fa-thin fa-user-group"></i>98 Students</span>
                                    </div>
                                    <p class="h2_course-content-text">
                                        Through a combination of lectures, readings and discussions students.
                                    </p>
                                    <div class="h2_course-content-author">
                                        <div class="h2_course-author-img">
                                            <img src="{{ asset('assets/img/course/2/author-4.jpg') }} alt="">
                                        </div>
                                        <div class="h2_course-author-info">
                                            <span>By <a href="#">Ravi O'Leigh</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="h2_course-content-bottom">
                                    <div class="h2_course-bottom-price">
                                        <span><del>$159</del>$98.00</span>
                                    </div>
                                    <div class="h2_course-bottom-btn">
                                        <a href="{{ url('/course-details') }}">More Details<i class="fa-light fa-arrow-right"></i><i class="fa-light fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_course-item mb-30">
                                <div class="h2_course-item-img">
                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/2/5.jpg') }} alt=""></a>
                                </div>
                                <div class="h2_course-content">
                                    <div class="h2_course-content-top">
                                        <div class="h2_course-rating">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                            <span>(03 Reviews)</span>
                                        </div>
                                        <div class="h2_course-save">
                                            <a href="#"><i class="fa-thin fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                    <h5 class="h2_course-content-title"><a href="{{ url('/course-details') }}">Introduction User Experience Design</a></h5>
                                    <div class="h2_course-content-info">
                                        <span><i class="fa-thin fa-book-blank"></i>58 Lessons</span>
                                        <span><i class="fa-thin fa-user-group"></i>50 Students</span>
                                    </div>
                                    <p class="h2_course-content-text">
                                        Through a combination of lectures, readings and discussions students.
                                    </p>
                                    <div class="h2_course-content-author">
                                        <div class="h2_course-author-img">
                                            <img src="{{ asset('assets/img/course/2/author-5.jpg') }} alt="">
                                        </div>
                                        <div class="h2_course-author-info">
                                            <span>By <a href="#">Valentino Morose</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="h2_course-content-bottom">
                                    <div class="h2_course-bottom-price">
                                        <span><del>$135</del>$69.00</span>
                                    </div>
                                    <div class="h2_course-bottom-btn">
                                        <a href="{{ url('/course-details') }}">More Details<i class="fa-light fa-arrow-right"></i><i class="fa-light fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_course-item mb-30">
                                <div class="h2_course-item-img">
                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/2/6.jpg') }} alt=""></a>
                                </div>
                                <div class="h2_course-content">
                                    <div class="h2_course-content-top">
                                        <div class="h2_course-rating">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                            <span>(03 Reviews)</span>
                                        </div>
                                        <div class="h2_course-save">
                                            <a href="#"><i class="fa-thin fa-bookmark"></i></a>
                                        </div>
                                    </div>
                                    <h5 class="h2_course-content-title"><a href="{{ url('/course-details') }}">Spoken English for Career Develop</a></h5>
                                    <div class="h2_course-content-info">
                                        <span><i class="fa-thin fa-book-blank"></i>35 Lessons</span>
                                        <span><i class="fa-thin fa-user-group"></i>24 Students</span>
                                    </div>
                                    <p class="h2_course-content-text">
                                        Through a combination of lectures, readings and discussions students.
                                    </p>
                                    <div class="h2_course-content-author">
                                        <div class="h2_course-author-img">
                                            <img src="{{ asset('assets/img/course/2/author-6.jpg') }} alt="">
                                        </div>
                                        <div class="h2_course-author-info">
                                            <span>By <a href="#">Dylan Meringue</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="h2_course-content-bottom">
                                    <div class="h2_course-bottom-price">
                                        <span><del>$230</del>$173</span>
                                    </div>
                                    <div class="h2_course-bottom-btn">
                                        <a href="{{ url('/course-details') }}">More Details<i class="fa-light fa-arrow-right"></i><i class="fa-light fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="pagination-area mt-20 mb-30">
                                <ul>
                                    <li><a href="#">01</a></li>
                                    <li><a href="#">02</a></li>
                                    <li><a href="#">03</a></li>
                                    <li><a href="#">04</a></li>
                                    <li><a href="#"><i class="fa-light fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- course area end -->

            <!-- cta area start -->
            <div class="cta-area h3_cta-area">
                <div class="container">
                    <div class="cta-wrapper">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-lg-6">
                                <div class="cta-content mb-30 mb-lg-0">
                                    <span class="cta-subtitle">Download App</span>
                                    <h2 class="cta-title">Are you Ready to Start your
                                        Online Course?</h2>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="cta-button">
                                    <a href="#" class="cta-btn"><i class="fa-brands fa-apple"></i>Apple Store</a>
                                    <a href="#" class="cta-btn"><i class="fa-brands fa-google-play"></i>Play Store</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- cta area end -->
        </main>

        <!-- footer area start -->
        <footer class="footer-area h3_footer-area">
            <div class="footer-top pt-240 pb-55">
                <div class="container">
                   <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-7 col-md-7 col-sm-12">
                            <div class="footer-widget mb-40">
                                <div class="footer-logo">
                                    <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/logo-white.png') }} alt=""></a>
                                </div>
                                <p class="footer-widget-text mb-35">
                                    Through a combination of lectures, readings, discussions, students will gain solid foundation in educational.
                                </p>
                                <div class="footer-social">
                                    <ul>
                                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center">
                            <div class="footer-widget mb-40">
                                <h5 class="footer-widget-title">Useful Link</h5>
                                <div class="footer-widget-list">
                                    <ul>
                                        <li><a href="{{ url('/blog') }}">Blogs</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-7 col-md-7 col-sm-12 order-md-3 order-xl-4">
                            <div class="footer-widget ml-80 mb-40">
                                <h5 class="footer-widget-title">Newsletter</h5>
                                <p class="footer-widget-text mb-20 newsletter-text">Sign up foe our newsletter and get 34% <br> off your next course.</p>
                                <form action="#">
                                    <div class="footer-subscribe-form">
                                        <input type="email" placeholder="Enter Your Email*">
                                        <button type="submit">Subscribe</button>
                                    </div>
                                    <div class="footer-subscribe-condition">
                                        <label class="condition_label">I agree to the terms of use and privacy policy.
                                            <input type="checkbox">
                                            <span class="check_mark"></span>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright-area">
                    <div class="row">
                        <div class="col-12">
                            <div class="copyright-text">
                                <p>Copyright © 2025 All Rights Reserved by Hamari Product</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer area end -->

		<!-- JS here -->
        <script src="{{ asset('assets/js/jquery.min.js') }}></script>
        <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}></script>
        <script src="{{ asset('assets/js/swiper-bundle.min.js') }}></script>
        <script src="{{ asset('assets/js/jquery.meanmenu.min.js') }}></script>
        <script src="{{ asset('assets/js/wow.min.js') }}></script>
        <script src="{{ asset('assets/js/jquery.nice-select.min.js') }}></script>
        <script src="{{ asset('assets/js/jquery.scrollUp.min.js') }}></script>
        <script src="{{ asset('assets/js/jquery.magnific-popup.min.js') }}></script>
        <script src="{{ asset('assets/js/odometer.min.js') }}></script>
        <script src="{{ asset('assets/js/appear.min.js') }}></script>
        <script src="{{ asset('assets/js/main.js') }}></script>
    </body>
</html>