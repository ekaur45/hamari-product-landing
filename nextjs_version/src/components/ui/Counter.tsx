"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
    end: number;
    suffix?: string;
    duration?: number;
}

export default function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const animateCounter = () => {
            const increment = end / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, 16);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounter();
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, end, duration]);

    return (
        <span ref={counterRef} className="odometer count_one">
            {count.toString().padStart(2, "0")}
            {suffix}
        </span>
    );
}
