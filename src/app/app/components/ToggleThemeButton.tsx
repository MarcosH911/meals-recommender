"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import SidebarItem from "./SidebarItem";
import useHasMounted from "@/hooks/useHasMounted";

function ToggleThemeButton() {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    <SidebarItem
      icon={theme === "dark" && hasMounted ? <SunIcon /> : <MoonIcon />}
      label="Theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}

export default ToggleThemeButton;
