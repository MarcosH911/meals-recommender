"use server";

import createServerClient from "@/utils/supabase/createServerClient";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

async function handleForgotPassword(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const email = String(formData.get("email"));

  if (!email) {
    redirect(
      "/forgot-password?error=You must enter an email",
      RedirectType.replace,
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    redirect(
      "/forgot-password?toastError=Something went wrong",
      RedirectType.replace,
    );
  }

  redirect("/TODO");
}

export default handleForgotPassword;
