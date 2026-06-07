import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const requestHeaders = new Headers(req.headers);

    requestHeaders.set("x-pathname", req.url);
  
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
}
