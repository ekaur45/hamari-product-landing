"use client"
import { User } from "@/types/user.types";
import ProfileImage from "../profile/ProfileImage";
import { Home, LogOut, User as UserIcon } from "lucide-react";
import AuthService from "@/services/auth.service";
import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/router";
const authService = new AuthService();
export default function LoggedInUser({ user }: { user: User }) {
    const ulRef = useRef<HTMLUListElement | null>(null);
    const [open, setOpen] = useState(false);
    // const router = useRouter();
    const handleLogout = async () => {
        await authService.logout();
        // router.push("/");
        window.location.reload();
    };
    useEffect(() => {
        function handleClickOutside(event: Event) {
          if (
            ulRef.current &&
            !ulRef.current.contains(event.target as Node)
          ) {
            setOpen(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("touchstart", handleClickOutside);
        };
      }, []);
    return (<>
        <div className="relative">
            <button className="flex gap-3 border border-2 border-[var(--glass-b)] px-5 py-2 rounded-lg"
            onClick={()=>setOpen(true)}
            >
                <div>
                    <ProfileImage user={user} />
                </div>
                <div>
                    <h4>
                        {user.firstName}
                        {user.lastName}
                    </h4>
                    <p>{user.role}</p>
                </div>
            </button>
            {open?<ul className="absolute right-0 min-w-[200px] bg-[var(--glass)] backdrop-blur-lg p-1 rounded-md border border-[var(--glass-b)] z-100"
            ref={ulRef}
            >
                <li className="p-3 hover:bg-[var(--glass)] rounded flex gap-3">
                    <Home />
                    Dashboard
                </li>
                <li className="p-3 hover:bg-[var(--glass)] rounded flex gap-3">
                    <UserIcon />
                    Profile
                </li>
                <li>
                    <hr className="bg-[var(--glass-b)] border-[var(--glass-b)] my-1" />
                </li>
                <button className="w-full" onClick={handleLogout}>
                    <li className="p-3 hover:bg-[var(--glass)] rounded flex gap-3">
                        <LogOut />
                        Logout
                    </li>
                </button>
            </ul>:null}
        </div>

    </>)
}