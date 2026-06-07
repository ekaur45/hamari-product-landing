import Link from "next/link";

export default function Header() {
    return (
        <nav id="main-nav">
            <div className="nav-inner">
                <Link href="/#" className="logo">
                    <div className="logo-mark">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="logo-text">
                        Edu
                        <span>
                            Connect
                        </span>
                    </span>
                </Link>
                <div className="nav-links">
                    <Link href="/teachers">Teachers</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="nav-cta">
                    <Link href="/login" className="btn btn-ghost">Log In</Link>
                    <Link href="/register" className="btn btn-glow">Get Started Free</Link>
                </div>
            </div>
        </nav>
    )
}