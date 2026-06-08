import { portalUrl } from "@/utils/misc.util";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="foot-inner">
                <div className="foot-top">
                    <div> <a href="#" className="logo" style={{ marginBottom: "14px" }}>
                        <Image src={"/assets/img/edura-dark@3x.png"} width={"200"} height={"100"} alt="logo" />
                    </a>
                        <p className="foot-brand-p">A complete LMS platform connecting students with verified teachers for live learning,
                            AI homework support, and academic excellence.
                        </p>
                        <div className="socials">
                            <a href="#" className="soc">
                                <FaTwitter/>
                            </a>
                            <a href="#" className="soc">
                                <FaFacebookF/>
                            </a>
                            <a href="#" className="soc">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="soc">
                                <FaLinkedinIn/>
                            </a>
                        </div>
                    </div>
                    <div className="foot-col">
                        <h4>Platform</h4> 
                        <Link href="/teachers">Find a Teacher</Link> 
                        <a href="#">Group Sessions</a> 
                        <a href="#">AI Helper</a> 
                        <a href="#">For Parents</a> 
                        <a href="#">Organisation</a>
                    </div>
                    <div className="foot-col">
                        <h4>For Teachers</h4> 
                        <Link href={portalUrl("/auth/register/teacher")}>Become a Teacher</Link> 
                        <a href="#">Payouts</a> 
                        <a href="#">Dashboard</a> 
                        <a href="#">Referral Programme</a>
                    </div>
                    <div className="foot-col">
                        <h4>Support</h4> 
                        <Link href="/contact">Help Centre</Link> 
                        <Link href="/contact">Contact Us</Link> 
                        <Link href="#">Privacy Policy</Link> 
                        <Link href="#">Terms of Service</Link> 
                        <Link href="#">Safety & Trust</Link>
                    </div>
                </div>
                <div className="foot-bot"> <span>© {(new Date()).getFullYear()} {process.env.NEXT_APP_NAME}. All rights reserved.</span> <span className="flex gap-2">Built with <Heart fill="#FFF" size={16} /> for learners
                    worldwide</span> </div>
            </div>
        </footer>
    )
}