import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="LinkedIn-style work history, kept local."
        description="Role summaries, achievements, and technologies are imported directly from local data files."
      />
      <div className="space-y-5">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.role}`} className="surface p-6 transition hover:-translate-y-1">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-moss/10 text-moss dark:bg-teal-300/10 dark:text-teal-300">
                  <BriefcaseBusiness size={21} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink dark:text-paper">{item.role}</h3>
                  <p className="mt-1 font-semibold text-stone-700 dark:text-stone-200">{item.company}</p>
                  <p className="muted mt-1 text-sm">
                    {item.location} / {item.type}
                  </p>
                </div>
              </div>
              <p className="rounded-md bg-paper px-3 py-2 text-sm font-semibold text-stone-700 dark:bg-white/10 dark:text-stone-200">
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <p className="muted mt-5 leading-7">{item.description}</p>
            <ul className="mt-4 space-y-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3 text-sm leading-6 text-stone-700 dark:text-stone-200">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                  {achievement}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span key={tech} className="tag-soft">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
