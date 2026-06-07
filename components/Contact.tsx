import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="surface overflow-hidden p-4 sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Contact"
          title="Available for software engineering opportunities."
          description="Reach out for roles, collaborations, or portfolio feedback. All links are defined locally in the socialLinks data file."
        />
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group min-w-0 rounded-lg border border-stone-200 bg-paper p-4 transition hover:-translate-y-1 hover:border-moss hover:bg-white sm:p-5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <link.icon className="text-stone-500 transition group-hover:text-moss dark:text-stone-300 dark:group-hover:text-teal-300" size={22} />
              <p className="mt-4 font-semibold text-ink dark:text-paper">{link.label}</p>
              <p className="muted break-safe mt-1 min-w-0 text-sm leading-6">
                {link.label === "Email" ? profile.email : link.href.replace("https://", "")}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
