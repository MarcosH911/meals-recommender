import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import createServerClient from "@/utils/supabase/createServerClient";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";

    if (code) {
      const cookieStore = cookies();
      const supabase = createServerClient(cookieStore);

      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (!error) {
        return NextResponse.redirect(new URL(next, request.url));
      }
    }

    return NextResponse.redirect(new URL("/auth/auth-code-error", request.url));
  } catch (error) {
    console.error(error);
  }
}
