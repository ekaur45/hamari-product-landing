"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UiLink({ href,children }: { href: string,children:React.ReactNode }) {
    const pathname = usePathname();
    return (
        <Link href={href}>
            <div className={`tab ${pathname == href ? ' act' : ''}`}>{children}</div>
        </Link>
    )
}