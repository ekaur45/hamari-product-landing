"use client"
import { useEffect } from "react";

export default function ScrollDetect() {
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById("main-nav");
            if (!nav) return;

            // only apply sticky logic on md+
            const isDesktop = window.innerWidth >= 768;

            if (!isDesktop) return;

            nav.classList.toggle("sticky-nav", window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return null
}