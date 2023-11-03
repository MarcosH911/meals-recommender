import {
  ChefHatIcon,
  SettingsIcon,
  HomeIcon,
  ShirtIcon,
  LogOutIcon,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import handleSignOut from "@/lib/server-actions/auth/handleSignOut";
import ToggleThemeButton from "./ToggleThemeButton";
import { Separator } from "@/components/ui/separator";

function Sidebar() {
  return (
    <div className="fixed left-0 flex h-full w-24 flex-col items-center justify-between bg-white py-6 shadow-[-10px_0_20px_0] shadow-slate-950/20 dark:bg-slate-900 dark:shadow-[-5px_0_20px_0] dark:shadow-black">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-400 text-xl font-bold text-white">
          MH
        </div>
        <Separator className="w-16" />
        <div className="flex flex-col items-center gap-2">
          <SidebarItem icon={<HomeIcon />} label="Home" href="/app" />
          <SidebarItem icon={<ChefHatIcon />} label="Meals" href="/app/meals" />
          <SidebarItem
            icon={<ShirtIcon />}
            label="Workouts"
            href="/app/workouts"
          />
        </div>
        <Separator className="w-16" />
        <div className="flex flex-col items-center gap-2">
          <SidebarItem
            icon={<SettingsIcon />}
            label="Settings"
            href="/app/settings"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <SidebarItem
          icon={<LogOutIcon />}
          label="Sign Out"
          onClick={handleSignOut}
        />
        <ToggleThemeButton />
      </div>
    </div>
  );
}

export default Sidebar;
