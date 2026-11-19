"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const dark = !mounted || resolvedTheme !== "light";
  return <button
    type="button"
    className="icon-button theme-toggle"
    aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    onClick={() => setTheme(dark ? "light" : "dark")}
  >
    {dark ? <Sun size={14} aria-hidden="true" /> : <Moon size={14} aria-hidden="true" />}
  </button>;
}
