import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
    const requestHeaders = new Headers(req.headers);

    requestHeaders.set("x-pathname", req.url);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
}
