"use client"

import { Link } from "lucide-react"

export default function Login(){
    return(<>
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
                <button className="social-btn">
                    <img src="https://www.google.com/favicon.ico" width="16" height="16" /> Continue with Google
                </button>
                <button className="social-btn">🍎 Continue with Apple</button>
                <div className="auth-or">or continue with email</div>
                <input className="fi" type="email" placeholder="Email Address" />
                <input className="fi" type="password" placeholder="Password" />
                <div className="flex justify-between items-center mb-5">
                    <label className="flex items-center gap-2 text-[0.82rem] text-[var(--text-m)] cursor-pointer">
                        <input type="checkbox" className="accent-[var(--teal-l)]" /> Remember me
                        </label>
                    <span className="text-[0.82rem] text-[var(--teal-l)] cursor-pointer font-semibold">Forgot password?</span>
                </div>
                <div className="btn btn-glow w-full justify-center" >Log In</div>
                <div className="auth-switch">Don{"'"}t have an account?
                    <Link href={'/register'}>Sign up free</Link>
                </div>
            </div>
        </div>
    </>)
}