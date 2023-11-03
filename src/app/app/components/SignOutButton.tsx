import { LogOutIcon } from "lucide-react";

function SignOutButton() {
  return (
    <button className="flex h-10 w-full items-center gap-1.5 rounded-md px-3 text-left transition duration-150 hover:bg-slate-100">
      <LogOutIcon className="h-5 w-5" />
      <span className="font-semibold">Sign out</span>
    </button>
  );
}

export default SignOutButton;
