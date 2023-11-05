"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";

async function handleSignUp(formData: FormData) {
  try {
    const cookieStore = cookies();

    const supabase = createServerClient(cookieStore);

    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    if (!email || !password) {
      // TODO: Handle error
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error(error);
  }
}

export default handleSignUp;
