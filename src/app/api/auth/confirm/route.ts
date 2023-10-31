import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import createServerClient from "@/utils/supabase/createServerClient";

import type { EmailOtpType } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore);

    const { error } = await supabase.auth.verifyOtp({ type, token_hash });

    if (!error) {
      return NextResponse.redirect(new URL(`/${next.slice(1)}`, request.url));
    }
  }

  return NextResponse.redirect(new URL("TODO", request.url));
}
