<!Doctype html>
<html class="no-js" lang="zxx">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Taleemiyat</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/favicon.png') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/animate.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/magnific-popup.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/fontawesome-all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/odometer.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/nice-select.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/meanmenu.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/swiper-bundle.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">
    </head>
     
    <body>
       <!-- sidebar-information-area-start -->
        <div class="sidebar-info side-info">
            <div class="sidebar-logo-wrapper mb-25">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-8">
                        <div class="sidebar-logo">
                            <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/logo-white.png') }}" alt="logo-img"></a>
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
                                <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/logo.png') }}" alt=""></a>
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
                                    <a href="{{ config('app.portal_link') }}" class="header-btn theme-btn theme-btn-medium theme-btn-3">Sign Up Now<i class="fa-light fa-arrow-up-right"></i></a>
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

@yield('content')
         </main>

        <!-- footer area start -->
        <footer class="footer-area h3_footer-area">
            <div class="footer-top pt-240 pb-55">
                <div class="container">
                   <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-7 col-md-7 col-sm-12">
                            <div class="footer-widget mb-40">
                                <div class="footer-logo">
                                    <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/logo-white.png') }}" alt=""></a>
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
        <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
        <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('assets/js/swiper-bundle.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.meanmenu.min.js') }}"></script>
        <script src="{{ asset('assets/js/wow.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.nice-select.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.scrollUp.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.magnific-popup.min.js') }}"></script>
        <script src="{{ asset('assets/js/odometer.min.js') }}"></script>
        <script src="{{ asset('assets/js/appear.min.js') }}"></script>
        <script src="{{ asset('assets/js/main.js') }}"></script>
    </body>
</html>