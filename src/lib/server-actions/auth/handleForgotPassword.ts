"use server";

import createServerClient from "@/utils/supabase/createServerClient";
import { cookies } from "next/headers";

async function handleForgotPassword(formData: FormData) {
  try {
    const cookieStore = cookies();

    const supabase = createServerClient(cookieStore);

    const email = String(formData.get("email"));

    if (!email) {
      // TODO: Handle error
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error(error);
  }
}

export default handleForgotPassword;
