"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import createServerClient from "@/utils/supabase/createServerClient";

async function handleSignOut() {
  try {
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore);

    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);

    redirect("/sign-in");
  } catch (error) {
    console.log(error);
  }
}

export default handleSignOut;
