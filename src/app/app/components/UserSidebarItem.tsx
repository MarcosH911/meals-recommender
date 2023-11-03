import { MoonIcon, SunIcon, User2Icon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DarkModeSwitch from "./DarkModeSwitch";
import SignOutButton from "./SignOutButton";

function UserSidebarItem() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex h-12 w-16 cursor-pointer items-center justify-center rounded-lg text-slate-500 transition duration-150 hover:bg-slate-100 hover:text-slate-950">
          <User2Icon />
        </div>
      </PopoverTrigger>
      <PopoverContent side="right" className="mb-6 w-48 p-1">
        <div>
          <div className="flex h-10 w-full items-center gap-3 rounded-md px-3 text-left">
            <span className="font-semibold">Theme</span>
            <div className="flex items-center justify-center gap-1">
              <SunIcon className="h-5 w-5" />
              <DarkModeSwitch />
              <MoonIcon className="h-5 w-5" />
            </div>
          </div>
          <SignOutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserSidebarItem;
