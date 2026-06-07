"use client"
import { ArrowRight, GraduationCap, HomeIcon, Info, LogIn, Menu, Phone, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BiHome } from "react-icons/bi";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMobileMenu = () => {
        if (!isOpen) {
            // lock scroll
            document.body.style.overflow = "hidden";

            // optional: also lock any custom wrapper
            document.getElementsByClassName("page").item(0)?.setAttribute(
                "style",
                "overflow: hidden;"
            );
        } else {
            // unlock scroll
            document.body.style.removeProperty("overflow");

            // restore page scroll
            document.getElementsByClassName("page").item(0)?.removeAttribute("style");
        }

        setIsOpen(!isOpen);
    }
    return (
        <>
            <nav id="main-nav" className="px-5 md:relative fixed top-0 left-0 right-0 w-[100dvw] transition-all duration-300">
                <div className="mx-auto max-w-screen-xl flex justify-between py-4">

                    <Link href="/#" className="logo">
                        <div className="logo-mark">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>

                        <span className="logo-text">
                            Edu <span>Connect</span>
                        </span>
                    </Link>

                    {/* NAV LINKS (desktop only) */}
                    <div className="hidden sm:flex nav-links">
                        <Link href="/teachers">Teachers</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    {/* CTA always visible */}
                    <div className="hidden sm:flex nav-cta">
                        <Link href="/login" className="btn btn-ghost">
                            Log In
                        </Link>
                        <Link href="/register" className="btn btn-glow">
                            Get Started Free
                        </Link>
                    </div>
                    <button className="sm:hidden flex"
                        onClick={toggleMobileMenu}>
                        <Menu />
                    </button>
                </div>
                {/* side nav mobile */}
            </nav>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[1030]"
                    onClick={toggleMobileMenu}
                />
            )}
            <aside className={`
    fixed top-0 right-0 h-dvh w-[80%] z-[1040]
    backdrop-blur-xl
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}>
                <div className="h-full w-full bg-[var(--glass)] p-5">
                    <div className="flex justify-between w-full">
                        <Link href="/#" className="logo">
                            <div className="logo-mark">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>

                            <span className="logo-text">
                                Edu <span>Connect</span>
                            </span>
                        </Link>
                        <button onClick={toggleMobileMenu}>
                            <XIcon />
                        </button>
                    </div>
                    <hr className="my-3 bg-[var(--teal-d)] border-[var(--teal)]" />
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <Link href="/login" className="btn btn-ghost justify-between flex gap-3 text-lg align-center">
                                Log In <LogIn />
                            </Link>
                            <Link href="/register" className="btn btn-glow justify-between">
                                Get Started Free <ArrowRight />
                            </Link>
                        </div>
                        <ul className="flex flex-col gap-3">
                            <Link href="/teachers" className="flex gap-3 align-center">
                                <li className="bg-[var(--teal-l)]/40 w-full px-3 py-2 rounded-xl flex gap-3 text-lg align-center">
                                    <HomeIcon size={24} />
                                    Home
                                </li>
                            </Link>
                            <Link href="/teachers">
                                <li className="bg-[var(--teal-l)]/40 w-full px-3 py-2 rounded-xl flex gap-3 text-lg align-center">
                                    <GraduationCap size={24} />
                                    Teachers
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className="bg-[var(--teal-l)]/40 w-full px-3 py-2 rounded-xl flex gap-3 text-lg align-center">
                                    <Info size={24} />
                                    About
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="bg-[var(--teal-l)]/40 w-full px-3 py-2 rounded-xl flex gap-3 text-lg align-center">
                                    <Phone size={24} />
                                    Contact
                                </li>
                            </Link>
                        </ul>

                    </div>
                </div>
            </aside>
        </>
    )
}