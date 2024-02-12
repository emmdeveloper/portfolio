"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit  p-2 rounded-md hover:scale-110 active:scale-100 duration-200 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <MoonIcon className="w-[15px]" />
      ) : (
        <SunIcon className="w-[15px]" />
      )}
    </button>
  );
};
