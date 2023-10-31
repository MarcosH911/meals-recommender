"use client";

import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import handleSignIn from "@/lib/server-actions/auth/handleSignIn";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle className="mb-2">Welcome back</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSignIn} className="space-y-4">
          {/* TODO: Continue with google */}

          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label>Password</Label>
              <Link href="/forgot-password">
                <span className="text-sm font-semibold text-slate-500 hover:underline">
                  Forgot password?
                </span>
              </Link>
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
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
            <Button className="w-full">Sign in</Button>
          </div>
          <div className="pt-5">
            <p className="text-center text-sm font-semibold text-slate-500">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up">
                <span className="text-slate-950 underline transition duration-100 hover:text-slate-500">
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
