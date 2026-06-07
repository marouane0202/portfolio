import { CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader eyebrow="About" title="A practical engineer with product sense." description={profile.about} />
      <div className="grid gap-4 md:grid-cols-3">
        {profile.highlights.map((highlight) => (
          <div key={highlight} className="surface p-5">
            <CheckCircle2 className="mb-4 text-moss dark:text-teal-300" size={24} />
            <p className="muted leading-7">{highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
