"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";
import { redirect } from "next/navigation";

async function handleSignOut() {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.signOut();

  if (error) {
    // TODO
  }

  redirect("/sign-in");
}

export default handleSignOut;
