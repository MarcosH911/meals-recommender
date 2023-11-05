import Link from "next/link";

import GoogleAuthButton from "@/app/(auth)/components/GoogleAuthButton";
import handleSignUp from "@/lib/server-actions/auth/handleSignUp";
import AuthInputPassword from "../components/AuthInputPassword";
import AuthButtonSubmit from "../components/AuthButtonSubmit";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Page() {
  return (
    <Card className="w-[25rem]">
      <CardHeader className="mb-4">
        <CardTitle className="mb-2">Get started</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSignUp} className="flex flex-col gap-4">
          <GoogleAuthButton />

          <div className="relative mt-2.5 flex py-1">
            <div className="absolute left-0 top-1/2 flex w-[43%] -translate-y-1/2 items-center border-t dark:border-slate-800"></div>
            <div className="absolute right-0 top-1/2 flex w-[43%] -translate-y-1/2 items-center border-t dark:border-slate-800"></div>
            <div className="absolute inset-0 flex items-center"></div>
            <div className="relative flex w-full justify-center">
              <span className="text-xs font-semibold uppercase dark:text-slate-400">
                or
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="name@example.com"
              className="dark:bg-slate-900"
            />
          </div>
          <div className="space-y-1">
            <Label>Password</Label>
            <AuthInputPassword />
          </div>
          <AuthButtonSubmit>Sign Up</AuthButtonSubmit>
          <div className="pt-5">
            <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
              Have an account?{" "}
              <Link href="/sign-in">
                <span className="text-slate-950 underline transition duration-100 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-400">
                  Sign In Now
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
