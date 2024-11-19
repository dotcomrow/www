import { NextResponse, userAgent } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

import { default as Constants } from "@utils/constants";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
    const { device } = userAgent(req)
    const { pathname } = req.nextUrl;
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/home", req.nextUrl));
    }
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-url', pathname.replace('/', ''));

    return NextResponse.next({
        request: {
            // Apply new request headers
            headers: requestHeaders,
        }
    });
}