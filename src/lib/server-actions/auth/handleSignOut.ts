"use server";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

import createServerClient from "@/utils/supabase/createServerClient";

async function handleSignOut() {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/app?toastError=Something went wrong", RedirectType.replace);
  }

  redirect("/sign-in");
}

export default handleSignOut;
