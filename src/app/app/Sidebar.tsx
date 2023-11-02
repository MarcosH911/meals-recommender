import { ChefHatIcon, HomeIcon, ShirtIcon, User2Icon } from "lucide-react";

import SidebarItem from "./SidebarItem";
import { Separator } from "@/components/ui/separator";

const sidebarItems = [
  {
    icon: <HomeIcon />,
    label: "Home",
    href: "/app",
  },
  {
    icon: <ChefHatIcon />,
    label: "Meals",
    href: "/app/meals",
  },
  {
    // icon: <DumbbellIcon />,
    icon: <ShirtIcon />,
    // icon: <FlameIcon />,
    // Running shoe
    label: "Workouts",
    href: "/app/workouts",
  },
];

function Sidebar() {
  return (
    <div className="fixed left-0 flex h-full w-24 flex-col items-center gap-6 bg-white pt-6 shadow-[-10px_0_20px_0] shadow-slate-950/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-400 text-xl font-bold text-white">
        MH
      </div>
      <Separator className="w-16" />
      <div className="flex flex-col items-center gap-2">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>
      <Separator className="w-16" />
      <SidebarItem icon={<User2Icon />} label="" href="/app/settings" />
    </div>
  );
}

export default Sidebar;
