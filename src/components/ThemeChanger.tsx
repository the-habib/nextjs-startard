"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="p-2 rounded-full transition-transform hover:scale-110"
      aria-label="Toggle Theme"
    >
      {isLight ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3 " />}
    </button>
  );
};

export default ThemeChanger;
