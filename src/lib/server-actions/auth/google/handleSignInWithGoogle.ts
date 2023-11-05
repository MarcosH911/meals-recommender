"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";

async function handleSignInWithGoogle() {
  try {
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "/api/auth/callback",
      },
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error(error);
  }
}

export default handleSignInWithGoogle;
