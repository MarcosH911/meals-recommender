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
  href?: string;
  onClick?: () => void;
}

function SidebarItem({ icon, label, href, onClick }: Props) {
  const pathname = usePathname();

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        {href && (
          <Link href={href}>
            <div
              className={twMerge(
                "flex h-12 w-16 items-center justify-center rounded-lg text-slate-500 transition duration-150 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                pathname === href && "bg-slate-100 dark:bg-slate-800",
              )}
            >
              {icon}
            </div>
          </Link>
        )}
        {onClick && (
          <div
            className="flex h-12 w-16 items-center justify-center rounded-lg text-slate-500 transition duration-150 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50"
            onClick={() => onClick()}
          >
            {icon}
          </div>
        )}
      </TooltipTrigger>
      <TooltipContent
        side="right"
        sideOffset={10}
        className="relative overflow-visible dark:border-slate-700 dark:bg-slate-800"
      >
        <div className="absolute left-0 top-1/2 z-10 -translate-x-full -translate-y-1/2 border-y-[0.35rem] border-r-[0.60rem] border-transparent border-r-white dark:border-r-slate-800"></div>
        <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-y-[0.43rem] border-r-[0.74rem] border-transparent border-r-slate-200 dark:border-r-slate-700"></div>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export default SidebarItem;
