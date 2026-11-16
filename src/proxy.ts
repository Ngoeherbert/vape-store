import { NextResponse, type NextRequest } from "next/server";

const AGE_COOKIE = "age_verified";
const REGION_COOKIE = "ship_region";

// Paths that never need the age/region gate.
const open = [
  "/age-check",
  "/region",
  "/blocked",
  "/admin",
  "/api",
  "/_next",
  "/favicon.ico",
  "/images",
  "/icons",
];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (open.some((p) => pathname === p || pathname.startsWith(`${p}/`)))
    return NextResponse.next();

  if (!req.cookies.get(AGE_COOKIE)) {
    const url = req.nextUrl.clone();
    url.pathname = "/age-check";
    url.search = `?next=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }
  if (!req.cookies.get(REGION_COOKIE)) {
    const url = req.nextUrl.clone();
    url.pathname = "/region";
    url.search = "";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/((?!.*\\.).*)"] };
