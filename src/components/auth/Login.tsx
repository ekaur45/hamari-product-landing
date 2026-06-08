"use client"

import Link from "next/link"
import { FaApple, FaGoogle } from "react-icons/fa"
import UiCheckbox from "../ui/UiCheckbox"



export default function Login() {
    return (<form>
        <button className="social-btn">
            <FaGoogle size={20} />
            Continue with Google
        </button>
        <button className="social-btn">
            <FaApple size={24} />
            Continue with Apple</button>
        <div className="auth-or">or continue with email</div>
        <input className="fi" type="email" placeholder="Email Address" />
        <input className="fi" type="password" placeholder="Password" />
        <div className="flex justify-between items-center mb-5">
            <UiCheckbox description={"Remember me"} />

            <span className="text-[0.82rem] text-[var(--teal-l)] cursor-pointer font-semibold">Forgot password?</span>
        </div>
        <button className="btn btn-glow w-full justify-center" >Log In</button>
    </form>)
}