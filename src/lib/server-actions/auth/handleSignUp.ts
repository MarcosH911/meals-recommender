"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";
import { RedirectType, redirect } from "next/navigation";

async function handleSignUp(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  if (!email || !password) {
    redirect(
      "/sign-up?error=You must enter an email and a password",
      RedirectType.replace,
    );
  }

  if (password.length < 6) {
    redirect(
      "/sign-up?error=Password must be at least 6 characters",
      RedirectType.replace,
    );
  }

  if (password.length > 72) {
    redirect(
      "/sign-up?error=Password must be at most 72 characters",
      RedirectType.replace,
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:3000/initial-form",
    },
  });

  if (error) {
    redirect("/sign-up?toastError=Something went wrong", RedirectType.replace);
  }

  if (data.user?.identities?.length === 0) {
    redirect(
      "/sign-up?error=This email is already in use",
      RedirectType.replace,
    );
  }

  redirect("/confirm-email");
}

export default handleSignUp;
