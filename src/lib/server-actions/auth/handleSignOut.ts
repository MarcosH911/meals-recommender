"use server";

import { cookies } from "next/headers";

import createServerClient from "@/utils/supabase/createServerClient";

async function handleSignOut() {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.signOut();

  if (error) {
    // TODO
  }
}

export default handleSignOut;
