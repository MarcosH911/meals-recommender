"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode;
}

function AuthButtonSubmit({ children }: Props) {
  const { pending } = useFormStatus();

  return (
    <div className="pt-4">
      <Button
        className="flex w-full items-center justify-center gap-2"
        disabled={pending}
      >
        {pending && <Loader2Icon className="h-4.5 w-4.5 animate-spin" />}
        {children}
      </Button>
    </div>
  );
}

export default AuthButtonSubmit;
