import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["tr"],
  defaultLocale: "tr",
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301 redirect for old /en and /ar routes to /tr equivalent
  if (pathname.startsWith("/en") || pathname.startsWith("/ar")) {
    const remainingPath = pathname.replace(/^\/(en|ar)/, "");
    const url = request.nextUrl.clone();
    url.pathname = `/tr${remainingPath}`;
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
