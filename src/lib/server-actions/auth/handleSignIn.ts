"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";

async function handleSignIn(formData: FormData) {
  const cookieStore = cookies();

  const supabase = createServerClient(cookieStore);

  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!email || !password) {
    // TODO: Handle error
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // TODO: Handle error
    console.error(error.message);
    return;
  }
}

export default handleSignIn;
