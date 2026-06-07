import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-paper/70 py-8 dark:border-white/10 dark:bg-graphite/55">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-stone-300">
        <p>(c) {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#home" className="font-semibold text-moss hover:text-teal-900 dark:text-teal-300">
          Back to top
        </a>
      </div>
    </footer>
  );
}
