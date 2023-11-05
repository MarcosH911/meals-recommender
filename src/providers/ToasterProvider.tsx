"use client";

import { useTheme } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const toastClassName =
  "dark:bg-slate-900 dark:text-slate-100 dark:shadow-md dark:shadow-black/20 dark:border-slate-800 border border-slate-100 bg-slate-600 text-slate-950";

function ToasterProvider() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (searchParams.has("toastError")) {
      toast.error(searchParams.get("toastError"), {
        className: toastClassName,
      });
      router.replace(pathname);
    } else if (searchParams.has("toastSuccess")) {
      toast.success(searchParams.get("toastSuccess"), {
        className: toastClassName,
      });
      router.replace(pathname);
    }
  }, [theme, pathname, router, searchParams]);

  return <Toaster />;
}

export default ToasterProvider;
