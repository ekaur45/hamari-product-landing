"use client";

import { User } from "@/types/user.types";
import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import AuthService from "@/services/auth.service";
import { getCookie, getImageUrl } from "@/utils/misc.util";
import UISelect from "@/components/ui/Select";
import CurrencyService from "@/services/currency.service";
import UiMenu from "../ui/UiMenu";
import { Menu } from "primereact/menu";

const authService = new AuthService();
const currencyService: CurrencyService = new CurrencyService();
interface Currency {
    code: string;
    symbol: string;
    name: string;
}

export default function Header({
    isLoggedIn,
    decodedToken,
}: {
    isLoggedIn: boolean;
    decodedToken: User | null;
}) {
    const menuRef = useRef<Menu>(null);
    const router = useRouter();
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [returnUrl] = useState("");
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const currenciesMemo = useMemo(() => {
        return currencies;
    }, [currencies]);
    const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
    // Initialize currency from localStorage or default to USD


    const handleCurrencyChange = (currency: string) => {
        setSelectedCurrency(currency);
        if (typeof window !== "undefined") {
            document.cookie = `currency=${currency}; ${process.env.NEXT_PUBLIC_COOKIE_DOMAIN ? `Domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}; secure;` : ''} path=/;SameSite=Lax`;
            localStorage.setItem("selectedCurrency", currency);
            // You can emit a custom event or use context for currency changes
            window.dispatchEvent(new CustomEvent("currencyChanged", { detail: currency }));
            window.location.reload();
        }
    };

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
    useEffect(() => {
        const fetchCurrencies = async () => {
            const currencies = await currencyService.getCurrencies();
            setCurrencies(currencies);
            if (typeof window !== "undefined") {
                const savedCurrency = getCookie("currency");
                //const savedCurrency = localStorage.getItem("selectedCurrency");
                if (savedCurrency) {
                    setSelectedCurrency(savedCurrency);
                } else {
                    handleCurrencyChange(currencies[0].code);
                }
            }
        };
        fetchCurrencies();
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
    const handleLogout = async () => {
        await authService.logout();
        router.push("/");
        window.location.reload();
    };

    return (
        <>
            <header className="">
                <div
                    className={`h3_header-area ${isSticky ? "header-sticky sticky" : ""
                        }`}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between flex-wrap items-center -mx-4">
                            <div className="px-4">
                                <div className="h3_header-logo">
                                    <Link href="/">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/img/logo/logo.png"
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden xl:block px-4">
                                <div className="h3_header-middle">
                                    <nav
                                        className="h3_main-menu mobile-menu"
                                        id="mobile-menu"
                                    >
                                        <ul>
                                            <li>
                                                <Link href="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/teachers">
                                                    Teachers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">Blogs</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="flex gap-2 px-4">
                                {currenciesMemo.length > 0 && (
                                    <div className="hidden sm:block">
                                        <UISelect
                                            value={selectedCurrency}
                                            onChange={(e) => handleCurrencyChange(e.value)}
                                            options={currenciesMemo}
                                            optionLabel="code"
                                            optionValue="code"
                                            itemTemplate={(option: Currency) => (
                                                <div className="flex items-center gap-2 py-1">
                                                    <span className="font-bold text-base">{option.symbol}</span>
                                                    <span className="font-semibold text-sm">{option.code}</span>
                                                    <span className="text-xs text-gray-500 hidden lg:inline">
                                                        {option.name}
                                                    </span>
                                                </div>
                                            )}
                                            valueTemplate={(option: Currency) =>
                                                option ? (
                                                    <div className="flex items-center gap-1.5 px-1">
                                                        <span className="font-bold">{option.symbol}</span>
                                                        <span className="font-semibold text-sm">{option.code}</span>
                                                    </div>
                                                ) : (
                                                    <span>Select Currency</span>
                                                )
                                            }
                                            className="w-[90px] lg:w-[110px]"
                                        />
                                    </div>
                                )}
                                {isLoggedIn ? (

                                    <div className="h3_header-right flex items-center gap-2 sm:gap-3">
                                        <UiMenu 
                                        model={[{
                                            label: "Dashboard",
                                            icon: "fa-light fa-house",
                                            command: () => {
                                                if(typeof window !== "undefined") {
                                                    window.location.href = `${process.env.NEXT_PUBLIC_PORTAL_LINK}/${decodedToken?.role==='Student'?'student':decodedToken?.role==='Teacher'?'teacher':'parent'}/dashboard/`;
                                                }
                                            },
                                        },{
                                            label: "Profile",
                                            icon: "fa-light fa-user",
                                            command: () => {
                                                if(typeof window !== "undefined") {
                                                    window.location.href = `${process.env.NEXT_PUBLIC_PORTAL_LINK}/profile`;
                                                }
                                            },
                                        },
                                            {
                                            label: "Logout",
                                            icon: "fa-light fa-sign-out",
                                            command: handleLogout,
                                        }]}
                                        id="popup_menu_left"
                                        popup={true}
                                        ref={menuRef}
                                        />
                                        {/* Currency Selector */}
                                        {/* User Profile Section */}
                                        <div className="hidden sm:flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                        aria-controls="popup_menu_left"
                                        onClick={(event) => menuRef.current?.toggle(event)}
                                        >
                                            {/* User Avatar */}
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border-2 border-primary/20">
                                                {decodedToken?.details?.profileImage ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={getImageUrl(decodedToken.details.profileImage)}
                                                        alt={`${decodedToken?.firstName} ${decodedToken?.lastName}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-semibold text-sm">
                                                        {decodedToken?.firstName?.[0]}{decodedToken?.lastName?.[0]}
                                                    </div>
                                                )}
                                            </div>
                                            {/* Welcome Text */}
                                            <div className="hidden md:block">
                                                <p className="text-sm font-semibold text-gray-900 leading-tight">
                                                    {decodedToken?.firstName} {decodedToken?.lastName}
                                                </p>
                                                <p className="text-xs text-gray-500">Welcome back</p>
                                            </div>
                                        </div>
                                       

                                        {/* Mobile Welcome Text */}
                                        <div className="sm:hidden text-right">
                                            <p className="text-xs font-semibold text-gray-900 truncate max-w-[80px]">
                                                {decodedToken?.firstName}
                                            </p>
                                        </div>

                                        {/* Logout Button */}
                                        {/* <button
                                            onClick={handleLogout}
                                            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 bg-white border-2 border-gray-300 text-gray-900 font-semibold text-sm sm:text-base rounded-xl hover:bg-gray-50 hover:border-primary hover:text-primary transition-all whitespace-nowrap"
                                            title="Logout"
                                        >
                                            <em className="fa-light fa-sign-out text-sm sm:text-base"></em>
                                            <span className="hidden sm:inline">Logout</span>
                                        </button> */}

                                        {/* Mobile Menu Toggle */}
                                        <div className="header-menu-bar xl:hidden ml-2">
                                            <span
                                                className="header-menu-bar-icon side-toggle cursor-pointer"
                                                onClick={toggleMobileMenu}
                                            >
                                                <i className="fa-light fa-bars text-xl"></i>
                                            </span>
                                        </div>
                                    </div>

                                ) : (
                                    <>
                                        <div className="h3_header-right flex items-center gap-2 sm:gap-3">
                                            <a
                                                href={
                                                    `${process.env.NEXT_PUBLIC_PORTAL_LINK}/auth/login?returnUrl=${encodeURIComponent(returnUrl)}` ||
                                                    "#"
                                                }
                                                className="flex items-center justify-center gap-2 px-8 py-2 bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer"
                                            >
                                                Login
                                                <i className="fa-light fa-arrow-up-right"></i>
                                            </a>
                                            <div className="h3_header-btn hidden sm:block">
                                                <a
                                                    href={
                                                        `${process.env.NEXT_PUBLIC_PORTAL_LINK}/auth/register` ||
                                                        "#"
                                                    }
                                                    className="header-btn theme-btn theme-btn-medium theme-btn-3"
                                                >
                                                    Sign Up
                                                    <i className="fa-light fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                            <div className="header-menu-bar xl:hidden ml-10">
                                                <span
                                                    className="header-menu-bar-icon side-toggle"
                                                    onClick={toggleMobileMenu}
                                                >
                                                    <i className="fa-light fa-bars"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50 hidden">
                <ul className="flex justify-around items-center h-16 text-gray-600">
                    <li className="flex flex-col items-center justify-center">
                        <Link href="/" className="flex flex-col items-center">
                            <i className="fa-solid fa-house text-lg"></i>
                            <span className="text-xs mt-1">Home</span>
                        </Link>
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        <Link href="/search" className="flex flex-col items-center">
                            <i className="fa-solid fa-magnifying-glass text-lg"></i>
                            <span className="text-xs mt-1">Search</span>
                        </Link></li>
                    <li className="relative flex flex-col items-center justify-center">
                        <Link href="/add" className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full -mt-8 shadow-lg">
                            <i className="fa-solid fa-plus"></i>
                        </Link>
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        <Link href="/notifications" className="flex flex-col items-center relative">
                            <i className="fa-solid fa-bell text-lg"></i><span className="absolute top-0 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="text-xs mt-1">Alerts</span></Link></li><li className="flex flex-col items-center justify-center">
                        <button className="flex flex-col items-center" onClick={toggleMobileMenu}><i className="fas fa-bars text-xl"></i>
                        </button>
                        </li>
                </ul>
            </header>
        </>
    );
}
