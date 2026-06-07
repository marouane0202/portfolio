"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-paper/85 backdrop-blur-xl dark:border-white/10 dark:bg-graphite/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 font-semibold text-ink dark:text-paper">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm text-paper shadow-soft dark:bg-paper dark:text-ink">
            MR
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-white/70 hover:text-moss dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-teal-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white/70 text-stone-700 transition hover:border-moss hover:text-moss dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:text-teal-300"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white/70 text-stone-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-stone-200"
            aria-label="Toggle navigation"
            title="Toggle navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid border-t border-stone-200 bg-paper/95 transition-all md:hidden dark:border-white/10 dark:bg-graphite/95",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-stone-700 hover:bg-white/70 dark:text-stone-200 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
