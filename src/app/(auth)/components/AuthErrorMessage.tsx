"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function AuthErrorMessage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { pending } = useFormStatus();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.has("error")) {
      setErrorMessage(searchParams.get("error"));
      router.replace(pathname);
    }
  }, [searchParams, router, pathname]);

  useEffect(() => {
    if (pending) {
      setErrorMessage(null);
    }
  }, [pending]);

  if (!errorMessage) return null;

  return <div className="text-sm text-red-600">{errorMessage}</div>;
}

export default AuthErrorMessage;
