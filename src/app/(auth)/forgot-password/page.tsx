"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Page() {
  const [email, setEmail] = useState("");

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle className="mb-2">Reset Your Password</CardTitle>
        <CardDescription>
          Type in your email and we&apos;ll send you a link to reset your
          password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>
          <div className="pt-4">
            <Button className="w-full">Send Reset Email</Button>
          </div>
          <div className="pt-5">
            <p className="text-center text-sm font-semibold text-slate-500">
              Already have an account?{" "}
              <Link href="/sign-in">
                <span className="text-slate-950 underline transition duration-100 hover:text-slate-500">
                  Sign In
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
