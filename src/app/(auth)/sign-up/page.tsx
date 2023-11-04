"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import handleSignUp from "@/lib/server-actions/auth/handleSignUp";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle className="mb-2">Get started</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSignUp} className="flex flex-col gap-4">
          {/* TODO: Continue with google */}

          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="name@example.com"
              className="dark:bg-transparent"
            />
          </div>
          <div className="space-y-1">
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                className="dark:bg-transparent"
              />
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Button className="w-full">Sign Up</Button>
          </div>
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
