"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  icon: React.ReactNode;
  label: string;
  href: string;
}

function SidebarItem({ icon, label, href }: Props) {
  const pathname = usePathname();

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <Link href={href}>
          <div
            className={twMerge(
              "flex h-12 w-16 items-center justify-center rounded-lg text-slate-500 transition duration-150 hover:bg-slate-100 hover:text-slate-950",
              pathname === href && "bg-slate-100",
            )}
          >
            {icon}
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        sideOffset={10}
        className="relative overflow-visible"
      >
        <div className="absolute left-0 top-1/2 z-10 -translate-x-full -translate-y-1/2 border-y-[0.35rem] border-r-[0.60rem] border-transparent border-r-white"></div>
        <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-y-[0.43rem] border-r-[0.74rem] border-transparent border-r-slate-200"></div>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export default SidebarItem;
