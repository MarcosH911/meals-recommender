"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import type { CookieOptions } from "@supabase/ssr";

async function handleSignUp(email: string, password: string) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    },
  );

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    // TODO: Handle error
  }
}

export default handleSignUp;
