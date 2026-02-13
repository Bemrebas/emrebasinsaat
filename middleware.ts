import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["tr"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301 redirect for old /en and /ar routes
  if (pathname.startsWith("/en") || pathname.startsWith("/ar")) {
    const newPath = pathname.replace(/^\/(en|ar)/, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
