"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";

async function handleSignIn(formData: FormData) {
  try {
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore);

    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

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
  } catch (error) {
    console.error(error);
  }
}

export default handleSignIn;
