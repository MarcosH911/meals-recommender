import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

import type { CookieOptions } from "@supabase/ssr";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: "", ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value: "", ...options });
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (
    (request.nextUrl.pathname.startsWith("/sign-in") ||
      request.nextUrl.pathname.startsWith("/sign-up") ||
      request.nextUrl.pathname.startsWith("/forgot-password")) &&
    session
  ) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  if (!session && request.nextUrl.pathname.startsWith("/app")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}
