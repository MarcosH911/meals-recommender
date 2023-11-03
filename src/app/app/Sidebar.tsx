import {
  ChefHatIcon,
  CogIcon,
  HomeIcon,
  ShirtIcon,
  User2Icon,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import { Separator } from "@/components/ui/separator";

function Sidebar() {
  return (
    <div className="fixed left-0 flex h-full w-24 flex-col items-center justify-between bg-white py-6 shadow-[-10px_0_20px_0] shadow-slate-950/20">
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
            icon={<CogIcon />}
            label="Settings"
            href="/app/settings"
          />
        </div>
      </div>
      <div>
        <SidebarItem icon={<User2Icon />} label="" href="/app/" />
      </div>
    </div>
  );
}

export default Sidebar;
