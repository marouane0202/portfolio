import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeader } from "@/components/SectionHeader";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeader eyebrow="Education" title="Academic background." />
      {education.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.institution} className="surface p-6">
              <GraduationCap className="text-coral" size={26} />
              <h3 className="mt-4 text-xl font-bold text-ink dark:text-paper">{item.degree}</h3>
              <p className="mt-1 font-semibold text-stone-700 dark:text-stone-200">{item.institution}</p>
              <p className="muted mt-1 text-sm">
                {item.location} / {item.startDate} - {item.endDate}
              </p>
              <ul className="mt-4 space-y-2">
                {item.details.map((detail) => (
                  <li key={detail} className="muted text-sm leading-6">
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <div className="surface p-6">
          <GraduationCap className="text-coral" size={26} />
          <p className="muted mt-4 leading-7">
            Academic entries are ready to be added in <span className="font-semibold text-ink dark:text-paper">data/education.ts</span> once you provide the LinkedIn education details.
          </p>
        </div>
      )}
    </section>
  );
}
