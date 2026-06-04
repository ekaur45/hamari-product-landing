import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="foot-inner">
                <div className="foot-top">
                    <div> <a href="#" className="logo" style={{marginBottom:"14px"}}>
                        <div className="logo-mark"><svg viewBox="0 0 24 24"
                            style={{
                                width: "22px",
                                height: "22px",
                                stroke: "white",
                                fill: "none",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }}>
                            <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5" />
                        </svg></div> <span className="logo-text">Edu<span>Connect</span></span>
                    </a>
                        <p className="foot-brand-p">A complete LMS platform connecting students with verified teachers for live learning,
                            AI homework support, and academic excellence.</p>
                        <div className="socials"> <a href="#" className="soc">tw</a> <a href="#" className="soc">fb</a> <a href="#"
                            className="soc">ig</a> <a href="#" className="soc">li</a> </div>
                    </div>
                    <div className="foot-col">
                        <h4>Platform</h4> <a href="#">Find a Teacher</a> <a href="#">Group Sessions</a> <a href="#">AI Helper</a> <a
                            href="#">For Parents</a> <a href="#">Organisation</a>
                    </div>
                    <div className="foot-col">
                        <h4>For Teachers</h4> <a href="#">Become a Teacher</a> <a href="#">Payouts</a> <a href="#">Dashboard</a> <a
                            href="#">Referral Programme</a>
                    </div>
                    <div className="foot-col">
                        <h4>Support</h4> <a href="#">Help Centre</a> <a href="#">Contact Us</a> <a href="#">Privacy Policy</a> <a
                            href="#">Terms of Service</a> <a href="#">Safety & Trust</a>
                    </div>
                </div>
                <div className="foot-bot"> <span>© 2025 EduConnect. All rights reserved.</span> <span>Built with ❤️ for learners
                    worldwide</span> </div>
            </div>
        </footer>
    )
}