import { Code2 } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="Technical strengths grouped for fast scanning."
        description="A recruiter-friendly view of the tools, platforms, and engineering practices used across projects."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.category} className="surface min-w-0 p-5 sm:p-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron/15 text-saffron">
                <Code2 size={20} />
              </span>
              <h3 className="break-safe text-lg font-bold text-ink sm:text-xl dark:text-paper">{group.category}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="break-safe rounded-md border border-stone-200 bg-paper px-3 py-2 text-sm font-semibold text-stone-700 transition hover:-translate-y-0.5 hover:border-moss hover:text-moss dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:text-teal-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
