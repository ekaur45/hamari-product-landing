<!Doctype html>
<html class="no-js" lang="zxx">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Taleemiyat</title>
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
            <!-- banner area start -->
            <section class="h3_banner-area">
                <div class="h3_single-banner">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-7 col-lg-6 col-md-12">
                                <div class="h3_banner-content">
                                    <div class="section-area-3 mb-45 ">
                                        <span class="section-subtitle">🏆 The Leader in Online Learning</span>
                                        <h1 class="section-title">Choose <span>3400+</span> Online
                                            <span>Video</span> Courses With New
                                            Additions.</h1>
                                        <p class="section-text">Through a combination of lectures, readings, and discussions, students.</p>
                                    </div>
                                    <form action="#" class="h3_banner-form">
                                        <div class="h3_banner-form-item">
                                            <div class="h3_banner-form-item-search">
                                                <i class="fa-regular fa-magnifying-glass"></i>
                                                <input type="text" placeholder="Search Course">
                                            </div>
                                        </div>
                                        <div class="h3_banner-form-item">
                                            <div class="h3_banner-category">
                                                <a href="#"><i class="fa-solid fa-grid"></i><span>Category</span><i class="fa-light fa-angle-down"></i></a>
                                                <ul class="h3_banner-category-submenu">
                                                    <li><a href="#">Design</a></li>
                                                    <li><a href="#">Development</a></li>
                                                    <li><a href="#">Marketing</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="h3_banner-form-item">
                                            <button type="submit" class="theme-btn theme-btn-medium theme-btn-3 h3_banner-form-btn">Search</button>
                                        </div>
                                    </form>
                                    <img class="h3_banner-content-shape-1" src="{{ asset('assets/img/banner/3/shape-1.png') }} alt="">
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 d-none d-lg-block">
                                <div class="h3_banner-right">
                                    <div class="h3_banner-img">
                                        <img src="{{ asset('assets/img/hero-01.webp') }} alt="">
                                    </div>
                                    <div class="h3_banner-right-shape">
                                        <div class="inner-shpae-1">
                                            <img class="h3_banner-shape-2" src="{{ asset('assets/img/banner/3/shape-2.png') }} alt="">
                                        </div>
                                        <img class="h3_banner-shape-1" src="{{ asset('assets/img/banner/3/shape-3.png') }} alt="">
                                    </div>
                                    <div class="h3_banner-meta">
                                        <div class="h3_banner-meta-info">
                                            <span>Popular Course</span>
                                            <h5>Start Learning Today!!</h5>
                                        </div>
                                        <div class="h3_banner-meta-rating">
                                            <span><i class="fa-solid fa-star"></i>4.5 (3.4k Reviews)</span>
                                            <h5>Congratulations</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- banner area end -->

            <!-- counter area start -->
            <div class="counter-area pt-120 pb-110">
                <div class="container">
                    <div class="counter-wrap">
                        <div class="row g-0">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div class="counter-item">
                                    <div class="counter-icon">
                                        <i class="fa-thin fa-globe"></i>
                                    </div>
                                    <div class="counter-info">
                                        <h3 class="counter-info-title">
                                            <span class="odometer count_one" data-count="34">00</span>
                                            <span>k</span>
                                        </h3>
                                        <span class="counter-info-text">Foreign Followers</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div class="counter-item">
                                    <div class="counter-icon">
                                        <i class="fa-thin fa-book-open"></i>
                                    </div>
                                    <div class="counter-info">
                                        <h3 class="counter-info-title">
                                            <span class="odometer count_one" data-count="12">00</span>
                                            <span>k</span>
                                        </h3>
                                        <span class="counter-info-text">Classes complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div class="counter-item">
                                    <div class="counter-icon">
                                        <i class="fa-thin fa-user-group"></i>
                                    </div>
                                    <div class="counter-info">
                                        <h3 class="counter-info-title">
                                            <span class="odometer count_one" data-count="214">00</span>
                                            <span>k</span>
                                        </h3>
                                        <span class="counter-info-text">Students Enrolled</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div class="counter-item">
                                    <div class="counter-icon">
                                        <i class="fa-thin fa-medal"></i>
                                    </div>
                                    <div class="counter-info">
                                        <h3 class="counter-info-title">
                                            <span class="odometer count_one" data-count="56">00</span>
                                            <span>k</span>
                                        </h3>
                                        <span class="counter-info-text">Certified teachers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- counter area end -->

            <!-- about area start -->
            <section class="h3_about-area pt-140 pb-90">
                <img src="{{ asset('assets/img/about/3/shape-5.png') }} alt="" class="h3_about-top-shape">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-6">
                            <div class="h3_about-img mb-50">
                                <div class="h3_about-inner-img w_img mr-50">
                                    <img src="{{ asset('assets/img/landing-02.webp') }} alt="">
                                </div>
                                <div class="h3_about-img-shape d-none d-sm-block">
                                    <img class="h3_about-img-shape-1" src="{{ asset('assets/img/about/3/shape-1.png') }} alt="">
                                    <img class="h3_about-img-shape-2" src="{{ asset('assets/img/about/3/shape-2.png') }} alt="">
                                    <img class="h3_about-img-shape-3" src="{{ asset('assets/img/about/3/shape-3.png') }} alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12">
                            <div class="h3_about-wrap mr-65 mb-50">
                                <img src="{{ asset('assets/img/about/3/shape-4.png') }} alt="" class="h3_about-wrap-shape">
                                <div class="section-area-3 mb-35 small-section-area-3">
                                    <span class="section-subtitle">Know About Us</span>
                                    <h2 class="section-title mb-25">Humari Product — The Future of Tutoring, Built Around You</h2>
                                    <p class="section-text">
                                        Every student is different. Humari Product delivers 100% personalised tutoring—1-on-1 sessions, AI-assisted practice, and transparent progress—so growth is visible and measurable.
                                    </p>
                                </div>
                                <div class="h3_about-content mb-35">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <span><i class="fa-regular fa-check"></i>Personalised plans</span>
                                        </div>
                                        <div class="col-sm-6">
                                            <span><i class="fa-regular fa-check"></i>AI + human expertise</span>
                                        </div>
                                        <div class="col-sm-6">
                                            <span><i class="fa-regular fa-check"></i>Safe & reliable</span>
                                        </div>
                                        <div class="col-sm-6">
                                            <span><i class="fa-regular fa-check"></i>Flexible</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="section-title mb-25">Our Mission</h2>
                                <p class="section-text">
                                        To make high-quality tutoring accessible, effective, and stress-free—from classroom support to exam prep, with real confidence along the way.
                                    </p>
                                <div class="h3_about-button">
                                    <a href="#" class="theme-btn theme-btn-medium theme-btn-3">More Details<i class="fa-light fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- about area end -->

            <section class="h6_research-area pt-110 pb-70 fix">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-area-6 mb-55 text-center">
                                <h2 class="section-title mb-25">Empowering Students with Expert Tutors & Smart AI Tools</h2>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xxl-7 col-xl-6 col-lg-6">
                            <div class="h6_research-img w_img mb-50">
                                <img src="{{ asset('assets/img/landing-03.jpg') }} alt="">
                            </div>
                        </div>
                        <div class="col-xxl-5 col-xl-6 col-lg-6">
                            <div class="h6_research-wrap mb-50">
                                <div class="h6_research-content">
                                    
                                    <p>At Humari Product, our 1-to-1 tutoring is tailored to each student’s goals and pace. With the full attention of a dedicated tutor—plus real-time AI support—students build confidence, master concepts faster, and make measurable progress.</p>
                                </div>
                                
                            </div>
                            <div class="h4_about-content mb-25">
                                    <ul>
                                        <li><i class="fa-regular fa-check"></i>Top-Rated, Qualified Tutors</li>
                                        <li><i class="fa-regular fa-check"></i>Modern Online Classroom</li>
                                        <li><i class="fa-regular fa-check"></i>Recorded Sessions</li>
                                        <li><i class="fa-regular fa-check"></i>AI-Powered Feedback </li>
                                        <li><i class="fa-regular fa-check"></i>Flexible & Secure</li>

                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- course area start -->
            <section class="h3_course-area pt-135 pb-110">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section-area-3 text-center mb-40">
                                <span class="section-subtitle">Top Popular Courses</span>
                                <h2 class="section-title mb-0">Explore Featured Courses</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="h3_course-tab mb-40">
                                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                        See All
                                      </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Trending</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Featured</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="pills-four-tab" data-bs-toggle="pill" data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-four" aria-selected="false">Web Design</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="pills-five-tab" data-bs-toggle="pill" data-bs-target="#pills-five" type="button" role="tab" aria-controls="pills-five" aria-selected="false">Popular</button>
                                    </li>
                                </ul>                                      
                            </div>
                        </div>
                    </div>
                    <div class="h3_course-wrap">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/1.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-1.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/2.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Studying Principles of Educational Organizational.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-2.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/3.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-3.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                               <div class="row">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/1.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-1.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/2.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Studying Principles of Educational Organizational.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-2.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/3.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-3.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/1.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-1.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/2.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Studying Principles of Educational Organizational.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-2.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/3.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-3.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-four-tab" tabindex="0">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/1.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-1.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/2.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Studying Principles of Educational Organizational.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-2.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/3.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-3.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-five" role="tabpanel" aria-labelledby="pills-five-tab" tabindex="0">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/1.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-1.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/2.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Studying Principles of Educational Organizational.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-2.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="h3_course-item mb-30">
                                            <div class="h3_course-item-top">
                                                <div class="h3_course-item-img">
                                                    <a href="{{ url('/course-details') }}"><img src="{{ asset('assets/img/course/3/3.jpg') }} alt=""></a>
                                                    <div class="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div class="h3_course-item-save">
                                                        <a href="#"><i class="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div class="h3_course-content">
                                                    <div class="h3_course-content-info">
                                                        <ul>
                                                            <li><i class="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i class="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i class="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 class="h3_course-content-title"><a href="{{ url('/course-details') }}">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div class="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="h3_course-item-bottom">
                                                <div class="h3_course-item-author">
                                                    <div class="h3_course-item-author-img">
                                                        <img src="{{ asset('assets/img/course/3/author-3.jpg') }} alt="">
                                                    </div>
                                                    <div class="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div class="h3_course-item-rating">
                                                    <ul>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                        <li><i class="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tutor_button">
                    <a href="{{ url('/course') }}" class="theme-btn theme-btn-medium theme-btn-3">Explore All Courses<i class="fa-light fa-arrow-up-right"></i></a>
                    </div>
                </div>
            </section>
            <!-- course area end -->


            <!-- Our Teacher Start -->
            <section class="h8_teacher-area pt-110 pb-115">
                <div class="container">
                    <div class="row align-items-center mb-30">
                        <div class="col-xl-8 col-lg-8 col-md-8">
                            <div class="section-area-8 mb-20">
                                <span class="section-subtitle">Our Professionals</span>
                                <h2 class="section-title mb-0">Meet Our Teachers</h2>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4">
                            <div class="h8_teacher-navigation mb-30">
                                <div class="h8_teacher-prev">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="h8_teacher-next">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="teacher-active-8 swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="h8_teacher-item">
                                    <div class="h8_teacher-img w_img">
                                        <img src="{{ asset('assets/img/teacher/8/1.jpg') }} alt="">
                                        <div class="h8_teacher-social">
                                            <span class="share"><i class="fa-light fa-share-nodes"></i></span>
                                            <ul>
                                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="h8_teacher-content">
                                        <h5 class="h8_teacher-content-title">
                                            <a href="#">Annette Blacks</a>
                                        </h5>
                                        <span>UI/UX Developer</span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="h8_teacher-item">
                                    <div class="h8_teacher-img w_img">
                                        <img src="{{ asset('assets/img/teacher/8/2.jpg') }} alt="">
                                        <div class="h8_teacher-social">
                                            <span class="share"><i class="fa-light fa-share-nodes"></i></span>
                                            <ul>
                                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="h8_teacher-content">
                                        <h5 class="h8_teacher-content-title">
                                            <a href="#">Michaels Leonel</a>
                                        </h5>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="h8_teacher-item">
                                    <div class="h8_teacher-img w_img">
                                        <img src="{{ asset('assets/img/teacher/8/3.jpg') }} alt="">
                                        <div class="h8_teacher-social">
                                            <span class="share"><i class="fa-light fa-share-nodes"></i></span>
                                            <ul>
                                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="h8_teacher-content">
                                        <h5 class="h8_teacher-content-title">
                                            <a href="#">Jenny Wilson</a>
                                        </h5>
                                        <span>Photographer</span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="h8_teacher-item">
                                    <div class="h8_teacher-img w_img">
                                        <img src="{{ asset('assets/img/teacher/8/4.jpg') }} alt="">
                                        <div class="h8_teacher-social">
                                            <span class="share"><i class="fa-light fa-share-nodes"></i></span>
                                            <ul>
                                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="h8_teacher-content">
                                        <h5 class="h8_teacher-content-title">
                                            <a href="#">Dianne Russell</a>
                                        </h5>
                                        <span>Graphic Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tutor_button">
                    <a href="{{ url('/team') }}" class="theme-btn theme-btn-medium theme-btn-3">Meet Out Teachers<i class="fa-light fa-arrow-up-right"></i></a>
                    </div>
                </div>
            </section>
            <!-- Our Teacher End -->
            

            <!-- testimonial area start -->
            <section class="h3_testimonial-area pt-135 pb-140">
                <div class="container">
                    <div class="row align-items-end mb-30">
                        <div class="col-md-8">
                            <div class="section-area-3 mb-30">
                                <span class="section-subtitle">Testimonials</span>
                                <h2 class="section-title mb-0">What’s People Say</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="h3_testimonial-navigation mb-40">
                                <div class="h3_testimonial-prev"><i class="fa-regular fa-arrow-left"></i>
                                </div>
                                <div class="h3_testimonial-next"><i class="fa-regular fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h3_testimonial-active swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="h3_testimonial-item">
                                    <div class="h3_testimonial-item-content">
                                        <p>Duis euismod ipsum vel ultrices gravida. Vestibulum ac nulla condimentum, euismod massa ut, maximus orci. Aliquam nulla neque, ornare quis ligula et, scelerisque laoreet ex. Aliquam vulputate velit nisl, a eleifend libero mattis id. Vivamus nec ligula ullamcorper, porta sapien id, ullamcorper ligula. Mauris sed condimentum nisl.</p>
                                        <img src="{{ asset('assets/img/testimonial/3/quote.png') }} alt="" class="quote">
                                    </div>
                                    <div class="h3_testimonial-item-author">
                                        <img src="{{ asset('assets/img/testimonial/3/1.jpg') }} alt="">
                                        <div class="h3_testimonial-item-author-info">
                                            <h5>Sue Shei</h5>
                                            <span>Special Education</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="h3_testimonial-item">
                                    <div class="h3_testimonial-item-content">
                                        <p>Duis euismod ipsum vel ultrices gravida. Vestibulum ac nulla condimentum, euismod massa ut, maximus orci. Aliquam nulla neque, ornare quis ligula et, scelerisque laoreet ex. Aliquam vulputate velit nisl, a eleifend libero mattis id. Vivamus nec ligula ullamcorper, porta sapien id, ullamcorper ligula. Mauris sed condimentum nisl.</p>
                                        <img src="{{ asset('assets/img/testimonial/3/quote.png') }} alt="" class="quote">
                                    </div>
                                    <div class="h3_testimonial-item-author">
                                        <img src="{{ asset('assets/img/testimonial/3/2.jpg') }} alt="">
                                        <div class="h3_testimonial-item-author-info">
                                            <h5>Hanson Deck</h5>
                                            <span>Special Education</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="{{ asset('assets/img/testimonial/3/shape-1.png') }} alt="" class="h3_testimonial-shape-1">
                <img src="{{ asset('assets/img/testimonial/3/shape-2.png') }} alt="" class="h3_testimonial-shape-2">
                <img src="{{ asset('assets/img/testimonial/3/shape-3.png') }} alt="" class="h3_testimonial-shape-3">
                <img src="{{ asset('assets/img/testimonial/3/shape-4.png') }} alt="" class="h3_testimonial-shape-4">
            </section>
            <!-- testimonial area end -->

            <!-- blog area start -->
            <section class="h3_blog-area pt-135 pb-110">
                <div class="container">
                    <div class="row align-items-end mb-30">
                        <div class="col-md-9">
                            <div class="section-area-3 mb-30">
                                <span class="section-subtitle">Featured News</span>
                                <h2 class="section-title mb-0">Read Our Latest News</h2>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="h3_category-section-button mb-40 text-md-end">
                                <a href="{{ url('/blog') }}" class="theme-btn theme-btn-medium theme-btn-3">View All Blog<i class="fa-light fa-arrow-up-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h3_blog-item mb-30">
                                <div class="h3_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/3/1.jpg') }} alt=""></a>
                                    <a href="#" class="h3_blog-img-meta">Education</a>
                                </div>
                                <div class="h3_blog-content">
                                    <div class="h3_blog-content-meta">
                                        <span><i class="fa-thin fa-clock"></i>April 16, 2023</span>
                                        <span><i class="fa-thin fa-user"></i>Hilary Ouse</span>
                                    </div>
                                    <h5 class="h3_blog-content-title"><a href="{{ url('/blog-details') }}">The Complete Guide to Build RESTful API Application</a></h5>
                                    <p>Proin venenatis tincidunt ligula, in cursus neque volutpat et. Nam ut nibh porta.</p>
                                    <a href="#" class="h3_blog-btn">Read More<i class="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h3_blog-item mb-30">
                                <div class="h3_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/3/2.jpg') }} alt=""></a>
                                    <a href="#" class="h3_blog-img-meta">Education</a>
                                </div>
                                <div class="h3_blog-content">
                                    <div class="h3_blog-content-meta">
                                        <span><i class="fa-thin fa-clock"></i>March 24, 2023</span>
                                        <span><i class="fa-thin fa-user"></i>Elon Gated</span>
                                    </div>
                                    <h5 class="h3_blog-content-title"><a href="{{ url('/blog-details') }}">Four Ways to Keep Your Workout Routine Fresh.</a></h5>
                                    <p>Proin venenatis tincidunt ligula, in cursus neque volutpat et. Nam ut nibh porta.</p>
                                    <a href="#" class="h3_blog-btn">Read More<i class="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h3_blog-item mb-30">
                                <div class="h3_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/3/3.jpg') }} alt=""></a>
                                    <a href="#" class="h3_blog-img-meta">UX Design</a>
                                </div>
                                <div class="h3_blog-content">
                                    <div class="h3_blog-content-meta">
                                        <span><i class="fa-thin fa-clock"></i>July 28, 2023</span>
                                        <span><i class="fa-thin fa-user"></i>Brian Cumin</span>
                                    </div>
                                    <h5 class="h3_blog-content-title"><a href="{{ url('/blog-details') }}">Only One Thing Impossible For God Find Sense in Any.</a></h5>
                                    <p>Proin venenatis tincidunt ligula, in cursus neque volutpat et. Nam ut nibh porta.</p>
                                    <a href="#" class="h3_blog-btn">Read More<i class="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- blog area end -->

            <section class="h9_choose-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-area-9 text-center mb-40">
                                <span class="section-subtitle">Why Choose Us</span>
                                <h2 class="section-title mb-0">Reasons To Select Us</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="h9_choose-item mb-30">
                                <div class="h9_choose-item-icon">
                                    <img src="{{ asset('assets/img/choose/1.png') }} alt="">
                                </div>
                                <h4 class="h9_choose-item-title">Personalized Learning</h4>
                                <p>Ut cursus sem metus, sagittis ullamcorper neque porttitor se Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec ultrices  ante ac malesuada.</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="h9_choose-item mb-30">
                                <div class="h9_choose-item-icon">
                                    <img src="{{ asset('assets/img/choose/2.png') }} alt="">
                                </div>
                                <h4 class="h9_choose-item-title">Trusted Content</h4>
                                <p>Ut cursus sem metus, sagittis ullamcorper neque porttitor se Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec ultrices  ante ac malesuada.</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="h9_choose-item mb-30">
                                <div class="h9_choose-item-icon">
                                    <img src="{{ asset('assets/img/choose/3.png') }} alt="">
                                </div>
                                <h4 class="h9_choose-item-title">Tool Empower Teachers</h4>
                                <p>Ut cursus sem metus, sagittis ullamcorper neque porttitor se Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec ultrices  ante ac malesuada.</p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="h9_choose-item-big mb-30">
                                <div class="h9_choose-item-big-img">
                                    <img src="{{ asset('assets/img/choose/bg-1.jpg') }} alt="">
                                </div>
                                <div class="h9_choose-item-big-content">
                                    <span>Become an Instructor</span>
                                    <h3><a href="#">Come and Join Us to Disseminate Your Expertise.</a></h3>
                                    <p>Ut cursus sem metus, sagittis ullamcorper neque port Proin commodo lacinia Donec ultrices ante ac malesuada.</p>
                                    <a href="#" class="theme-btn theme-btn-9">Become an Instructor<i class="fa-light fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="h9_choose-item-big mb-30">
                                <div class="h9_choose-item-big-img">
                                    <img src="{{ asset('assets/img/choose/bg-2.jpg') }} alt="">
                                </div>
                                <div class="h9_choose-item-big-content">
                                    <span>Learners and Students</span>
                                    <h3><a href="#">There Are No Limits to What You Can Learn.</a></h3>
                                    <p>Ut cursus sem metus, sagittis ullamcorper neque port Proin commodo lacinia Donec ultrices ante ac malesuada.</p>
                                    <a href="#" class="theme-btn theme-btn-9">Terners, start here<i class="fa-light fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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