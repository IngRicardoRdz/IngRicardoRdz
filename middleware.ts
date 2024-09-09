import { NextRequest, NextResponse } from "next/server";

import { SupportedLanguages } from "@/app/i18n/i18n.utils";

let locales = SupportedLanguages.map((lang) => lang.code);
let defaultLocale = locales[1];

//* Get the preferred locale, similar to the above or using a library
const getLocale = (request: NextRequest) => {
    const acceptLanguage = request.headers.get("Accept-Language");
    const preferredLocale = acceptLanguage?.split(",")[0] ?? defaultLocale;
    return locales.includes(preferredLocale) ? preferredLocale : defaultLocale;
}

export function middleware(request: NextRequest) {
    //* Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    //* Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    //* e.g. incoming request is /products
    //* The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        //* Skip all internal paths (_next)
        "/((?!_next).*)",
        //* Optional: only run on root (/) URL
        //* '/'
    ],
};