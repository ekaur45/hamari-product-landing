"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        const sidebar = document.querySelector(".sidebar-info");
        const overlay = document.querySelector(".offcanvas-overlay");
        if (sidebar && overlay) {
            sidebar.classList.toggle("sidebar-open");
            overlay.classList.toggle("overlay-open");
        }
    };

    return (
        <header>
            <div className={`h3_header-area ${isSticky ? "header-sticky sticky" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-7 col-6">
                            <div className="h3_header-logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="h3_header-middle">
                                <nav className="h3_main-menu mobile-menu" id="mobile-menu">
                                    <ul>
                                        <li>
                                            <Link href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/teachers">Teachers</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Blogs</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-5 col-6">
                            <div className="h3_header-right">
                                <div className="h3_header-btn d-none d-sm-block">
                                    <a
                                        href={`${process.env.NEXT_PUBLIC_PORTAL_LINK}/auth/register` || "#"}
                                        className="header-btn theme-btn theme-btn-medium theme-btn-3"
                                    >
                                        Sign Up Now<i className="fa-light fa-arrow-up-right"></i>
                                    </a>
                                </div>
                                <div className="header-menu-bar d-xl-none ml-10">
                                    <span className="header-menu-bar-icon side-toggle" onClick={toggleMobileMenu}>
                                        <i className="fa-light fa-bars"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
