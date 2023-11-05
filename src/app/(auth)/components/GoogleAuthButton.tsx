"use client";

import { useState } from "react";
import { LoaderIcon } from "lucide-react";

import GoogleIcon from "@/components/custom/logos/googleIcon";
import createBrowserClient from "@/utils/supabase/createBrowserClient";
import { redirect, usePathname, useRouter } from "next/navigation";

function GoogleAuthButton() {
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleSignInWithGoogle = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const supabase = createBrowserClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/api/auth/callback",
      },
    });

    if (error) {
      router.replace(pathname + "?toastError=Something went wrong");
    }
  };

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="flex h-10 items-center justify-center gap-2 rounded-[0.25rem] border border-slate-200 text-center text-sm font-semibold transition duration-150 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:hover:border-slate-700 dark:hover:bg-slate-800"
    >
      {isLoading ? (
        <LoaderIcon className="-mr-0.5 h-5 w-5 animate-spin" />
      ) : (
        <GoogleIcon className="h-4.5 w-4.5" />
      )}
      <span>Continue with Google</span>
    </button>
  );
}

export default GoogleAuthButton;
