"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";
import { RedirectType, redirect } from "next/navigation";

async function handleSignIn(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  if (!email || !password) {
    redirect(
      "/sign-in?error=You must enter email and password",
      RedirectType.replace,
    );
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(
      `/sign-in?error=Incorrect email or password`,
      RedirectType.replace,
    );
  }
}

export default handleSignIn;
