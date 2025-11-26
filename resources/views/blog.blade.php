@extends('layout.index')
@section('content')
            <section class="breadcrumb-area bg-default" data-background="assets/img/breadcrumb/breadcrumb-bg.jpg">
                <img src="{{ asset('assets/img/breadcrumb/shape-1.png') }}" alt="" class="breadcrumb-shape">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content">
                                <h2 class="breadcrumb-title">Blog Grid</h2>
                                <div class="breadcrumb-list">
                                    <a href="{{ url('/') }}">Home</a>
                                    <span>Blog Grid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb area end -->

            <!-- blog area start -->
            <section class="innerPage_blog-area pt-120 pb-90">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_blog-item mb-30">
                                <div class="h2_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/2/blog-1.jpg') }}" alt=""></a>
                                </div>
                                <div class="h2_blog-content">
                                    <div class="h2_blog-content-meta">
                                        <span><i class="fa-thin fa-user"></i>Admin</span>
                                        <span><i class="fa-thin fa-clock"></i>June 23, 2023</span>
                                    </div>
                                    <h5 class="h2_blog-content-title"><a href="{{ url('/blog-details') }}">Education Week News and Views on Education Policy and Practice.</a></h5>
                                    <a href="{{ url('/blog-details') }}" class="theme-btn blog-btn t-theme-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_blog-item mb-30">
                                <div class="h2_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/2/blog-2.jpg') }}" alt=""></a>
                                </div>
                                <div class="h2_blog-content">
                                    <div class="h2_blog-content-meta">
                                        <span><i class="fa-thin fa-user"></i>Admin</span>
                                        <span><i class="fa-thin fa-clock"></i>June 23, 2023</span>
                                    </div>
                                    <h5 class="h2_blog-content-title"><a href="{{ url('/blog-details') }}">The Learning Network Teaching and Learning With The New York Times.</a></h5>
                                    <a href="#" class="theme-btn blog-btn t-theme-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_blog-item mb-30">
                                <div class="h2_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/2/blog-3.jpg') }}" alt=""></a>
                                </div>
                                <div class="h2_blog-content">
                                    <div class="h2_blog-content-meta">
                                        <span><i class="fa-thin fa-user"></i>Admin</span>
                                        <span><i class="fa-thin fa-clock"></i>June 23, 2023</span>
                                    </div>
                                    <h5 class="h2_blog-content-title"><a href="{{ url('/blog-details') }}">Nothing is Impossible to Learn If you are Passionate About this Subject</a></h5>
                                    <a href="#" class="theme-btn blog-btn t-theme-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_blog-item mb-30">
                                <div class="h2_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/2/blog-2.jpg') }}" alt=""></a>
                                </div>
                                <div class="h2_blog-content">
                                    <div class="h2_blog-content-meta">
                                        <span><i class="fa-thin fa-user"></i>Admin</span>
                                        <span><i class="fa-thin fa-clock"></i>June 23, 2023</span>
                                    </div>
                                    <h5 class="h2_blog-content-title"><a href="{{ url('/blog-details') }}">The Learning Network Teaching and Learning With The New York Times.</a></h5>
                                    <a href="#" class="theme-btn blog-btn t-theme-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_blog-item mb-30">
                                <div class="h2_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/2/blog-3.jpg') }}" alt=""></a>
                                </div>
                                <div class="h2_blog-content">
                                    <div class="h2_blog-content-meta">
                                        <span><i class="fa-thin fa-user"></i>Admin</span>
                                        <span><i class="fa-thin fa-clock"></i>June 23, 2023</span>
                                    </div>
                                    <h5 class="h2_blog-content-title"><a href="{{ url('/blog-details') }}">Nothing is Impossible to Learn If you are Passionate About this Subject</a></h5>
                                    <a href="#" class="theme-btn blog-btn t-theme-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="h2_blog-item mb-30">
                                <div class="h2_blog-img">
                                    <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/2/blog-1.jpg') }}" alt=""></a>
                                </div>
                                <div class="h2_blog-content">
                                    <div class="h2_blog-content-meta">
                                        <span><i class="fa-thin fa-user"></i>Admin</span>
                                        <span><i class="fa-thin fa-clock"></i>June 23, 2023</span>
                                    </div>
                                    <h5 class="h2_blog-content-title"><a href="{{ url('/blog-details') }}">Education Week News and Views on Education Policy and Practice.</a></h5>
                                    <a href="#" class="theme-btn blog-btn t-theme-btn">Read More</a>
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
            <!-- blog area end -->

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
        @endsection