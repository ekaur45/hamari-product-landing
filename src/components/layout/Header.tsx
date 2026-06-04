import Link from "next/link";

export default function Header() {
    return (
        <nav id="main-nav">
            <div className="nav-inner">
                <Link href="/#" className="logo">
                    <div className="logo-mark">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5" />
                        </svg> </div>
                    <span className="logo-text">Edu<span>Connect</span></span>
                </Link>
                <div className="nav-links">
                    <a href="#how">How It Works</a>
                    <a href="#teachers">Teachers</a>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a> </div>
                <div className="nav-cta">
                    <a href="#signup" className="btn btn-ghost">Log In</a>
                    <a href="#signup"
                        className="btn btn-glow">Get Started Free</a>
                </div>
            </div>
        </nav>
    )
}