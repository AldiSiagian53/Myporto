import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const visitorSession = request.cookies.get("portfolio_visitor");

  if (!visitorSession) {
    return NextResponse.redirect(new URL("/visitor", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/about/:path*",
    "/contact/:path*",
    "/projects/:path*",
  ],
};