"use server";

import createServerClient from "@/utils/supabase/createServerClient";
import { cookies } from "next/headers";

async function handleForgotPassword(formData: FormData) {
  const cookieStore = cookies();

  const supabase = createServerClient(cookieStore);

  const email = String(formData.get("email"));

  if (!email) {
    // TODO: Handle error
    return;
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    // TODO: Handle error
    console.error(error.message);
    return;
  }
}

export default handleForgotPassword;
