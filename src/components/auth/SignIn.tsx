import AuthService from "@/services/auth.service";
import { FormEvent, useState } from "react";
const authService = new AuthService();
export function SignIn({
    onSuccess
}: {
    onSuccess: () => void
}) {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!username.trim() || !password.trim()){
            alert("Please enter a username and password");
            return;
        }
        const response = await authService.login(username, password);
        if(response.statusCode === 200){
            onSuccess?.();
        }
    }
    return (<>
        <div className="w-full">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <em className="fas fa-envelope mr-2 text-primary"></em>Email Address
                </label>
                <div className="relative mb-4">
                    <em className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></em>
                    <input id="email" name="username" type="email" autoComplete="email" value={username} onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-primary transition"
                        placeholder="Enter your email" />
                </div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    <em className="fas fa-lock mr-2 text-primary"></em>Password
                </label>
                <div className="relative mb-4">
                    <em className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></em>
                    <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password"
                        className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-primary transition"
                        placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition">
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                </div>
                <div className="flex items-center justify-between">
                <button type="submit" className="flex items-center justify-center gap-2 px-8 py-3 bg-primary border-2 border-gray-100 text-white font-bold rounded-xl hover:bg-gray-50 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                    <em className="fas fa-arrow-right"></em>
                    Sign In
                </button>
                <div className="mt-4">
                    <p className="text-gray-500 text-sm">Don&apos;t have an account? <a href={process.env.NEXT_PUBLIC_PORTAL_LINK + `/auth/register/Student`} target="_blank" className="text-primary hover:underline">Sign Up</a></p>
                </div>
                </div>
            </form>
        </div>
    </>)
}