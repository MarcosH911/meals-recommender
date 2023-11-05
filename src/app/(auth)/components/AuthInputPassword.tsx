"use client";

import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

function AuthInputPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        required
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        className="dark:bg-slate-900"
      />
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setShowPassword((show) => !show)}
      >
        {showPassword ? (
          <EyeOffIcon className="h-4.5 w-4.5" />
        ) : (
          <EyeIcon className="h-4.5 w-4.5" />
        )}
      </div>
    </div>
  );
}

export default AuthInputPassword;
