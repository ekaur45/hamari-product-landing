import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const token = req.cookies.get("taleemiyat_token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Optional: verify token with backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        credentials: "include"
    });

    if (!res.ok) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}
