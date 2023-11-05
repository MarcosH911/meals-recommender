"use client";

import { useState } from "react";
import { LoaderIcon } from "lucide-react";

import GoogleIcon from "@/components/custom/logos/googleIcon";
import createBrowserClient from "@/utils/supabase/createBrowserClient";

function GoogleAuthButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const supabase = createBrowserClient();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/api/auth/callback",
        },
      });

      if (error) throw new Error(error.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="flex h-10 items-center justify-center gap-2 rounded-[0.25rem] border border-slate-800 bg-slate-900 text-center text-sm font-semibold text-slate-50 transition duration-150 hover:border-slate-700 hover:bg-slate-800"
    >
      {isLoading ? (
        <LoaderIcon className="-mr-0.5 h-5 w-5 animate-spin" />
      ) : (
        <GoogleIcon className="h-4.5 w-4.5 brightness-0 invert" />
      )}
      <span>Continue with Google</span>
    </button>
  );
}

export default GoogleAuthButton;
