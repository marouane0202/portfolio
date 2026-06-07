import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectsGrid() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Selected engineering work."
        description="Project entries support links, technology tags, screenshots, and concise impact statements."
      />
      {projects.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
          <article key={project.name} className="surface overflow-hidden transition hover:-translate-y-1">
            {project.screenshot ? (
              <div className="relative aspect-[16/10] bg-paper dark:bg-white/10">
                <Image src={project.screenshot} alt={`${project.name} screenshot`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            ) : null}
            <div className="p-6">
              <h3 className="text-xl font-bold text-ink dark:text-paper">{project.name}</h3>
              <p className="muted mt-3 text-sm leading-6">{project.description}</p>
              <p className="mt-4 border-l-2 border-saffron pl-3 text-sm font-semibold text-moss dark:text-teal-300">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag-soft">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-700 transition hover:-translate-y-0.5 hover:border-moss hover:text-moss dark:border-white/10 dark:text-stone-200 dark:hover:text-teal-300"
                    aria-label={`${project.name} live site`}
                    title="Live site"
                  >
                    <ExternalLink size={18} />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-700 transition hover:-translate-y-0.5 hover:border-moss hover:text-moss dark:border-white/10 dark:text-stone-200 dark:hover:text-teal-300"
                    aria-label={`${project.name} source code`}
                    title="Source code"
                  >
                    <Github size={18} />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
          ))}
        </div>
      ) : (
        <div className="surface p-6">
          <p className="muted leading-7">
            LinkedIn project entries are ready to be added in <span className="font-semibold text-ink dark:text-paper">data/projects.ts</span> once the project names, descriptions, links, and technologies are available.
          </p>
        </div>
      )}
    </section>
  );
}
