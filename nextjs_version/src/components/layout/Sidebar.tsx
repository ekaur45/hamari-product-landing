"use client";

import Link from "next/link";

export default function Sidebar() {
    const closeSidebar = () => {
        const sidebar = document.querySelector(".sidebar-info");
        const overlay = document.querySelector(".offcanvas-overlay");
        if (sidebar && overlay) {
            sidebar.classList.remove("sidebar-open");
            overlay.classList.remove("overlay-open");
        }
    };

    return (
        <>
            <div className="sidebar-info side-info">
                <div className="sidebar-logo-wrapper mb-25">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-8">
                            <div className="sidebar-logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/logo-white.png" alt="logo-img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-4">
                            <div className="sidebar-close-wrapper text-end">
                                <button className="sidebar-close side-info-close" onClick={closeSidebar}>
                                    <i className="fal fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu-wrapper fix">
                    <div className="mobile-menu">
                        {/* Mobile menu content can be dynamically injected or rendered here */}
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/blog">Blogs</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="offcanvas-overlay" onClick={closeSidebar}></div>
        </>
    );
}
