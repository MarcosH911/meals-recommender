import Link from "next/link";

import GoogleAuthButton from "@/app/(auth)/components/GoogleAuthButton";
import handleSignIn from "@/lib/server-actions/auth/handleSignIn";
import AuthButtonSubmit from "../components/AuthButtonSubmit";
import AuthInputPassword from "../components/AuthInputPassword";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthErrorMessage from "../components/AuthErrorMessage";

function Page() {
  return (
    <Card className="w-[25rem]">
      <CardHeader className="mb-4">
        <CardTitle className="mb-2">Welcome back</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSignIn} className="flex flex-col gap-4">
          <GoogleAuthButton />

          <div className="relative mt-2.5 flex py-1">
            <div className="absolute left-0 top-1/2 flex w-[43%] -translate-y-1/2 items-center border-t border-slate-300 dark:border-slate-800"></div>
            <div className="absolute right-0 top-1/2 flex w-[43%] -translate-y-1/2 items-center border-t border-slate-300 dark:border-slate-800"></div>
            <div className="relative flex w-full justify-center">
              <span className="text-xs font-semibold uppercase dark:text-slate-400">
                or
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              required
              type="email"
              name="email"
              placeholder="name@example.com"
              className="dark:bg-slate-900"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label className="-mb-0.5">Password</Label>
              <Link href="/forgot-password" className="group" tabIndex={-1}>
                <span className="text-sm text-slate-500 group-hover:underline dark:text-slate-400">
                  Forgot password?
                </span>
              </Link>
            </div>
            <AuthInputPassword />
          </div>
          <AuthErrorMessage />
          <AuthButtonSubmit>Sign In</AuthButtonSubmit>
          <div className="pt-5">
            <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up">
                <span className="text-slate-950 underline transition duration-100 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-400">
                  Sign Up Now
                </span>
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default Page;
