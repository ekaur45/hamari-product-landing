import Login from "@/components/auth/Login";
import Link from "next/link";

export default function LoginPage() {
    return (<>
    <div className="auth-wrap">
            <div className="auth-box">
                <div className="auth-logo">
                    <div className="logo-mark mx-auto mb-[12px]">
                        <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-white fill-none stroke-2">
                            <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5">
                            </path>
                        </svg>
                    </div>
                </div>
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-sub">Log in to your EduConnect account</p>               
                <Login/>
                <div className="auth-switch">Don{"'"}t have an account?
                    <Link href={'/register'}>Sign up free</Link>
                </div>
            </div>
        </div>
    </>)
}