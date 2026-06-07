import { BriefcaseBusiness, Code2, Download, Layers3, MapPin, Send, ShieldCheck } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

export function Hero() {
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");
  const focusAreas = [
    { label: "Backend systems", icon: Layers3 },
    { label: "Frontend delivery", icon: Code2 },
    { label: "Quality engineering", icon: ShieldCheck }
  ];

  return (
    <section id="home" className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="section-kicker">Software Engineer / Full-stack delivery</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-ink dark:text-paper sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-moss dark:text-teal-300">{profile.title}</p>
        <p className="mt-3 flex items-center gap-2 text-stone-600 dark:text-stone-300">
          <MapPin size={18} aria-hidden />
          {profile.location}
        </p>
        <p className="muted mt-6 max-w-2xl text-lg leading-8">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:-translate-y-0.5 hover:bg-moss dark:bg-paper dark:text-ink dark:hover:bg-teal-200"
          >
            <Send size={17} />
            Contact me
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-saffron hover:text-saffron dark:border-white/10 dark:bg-white/5 dark:text-paper"
          >
            <Download size={17} />
            Resume
          </a>
          {linkedIn ? (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-[#0a66c2] hover:text-[#0a66c2] dark:border-white/10 dark:bg-white/5 dark:text-paper"
            >
              <linkedIn.icon size={17} />
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>

      <div className="signal-panel relative mx-auto w-full max-w-md overflow-hidden p-6 sm:p-7">
        <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,#14b8a6,#f59e0b,#be123c)]" />
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200 dark:text-teal-700">Current focus</p>
            <h2 className="mt-3 text-2xl font-black tracking-normal">Building durable product systems.</h2>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-teal-200 dark:bg-ink/10 dark:text-moss">
            <BriefcaseBusiness size={23} />
          </span>
        </div>

        <div className="mt-8 grid gap-3">
          {focusAreas.map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 p-4 dark:border-ink/10 dark:bg-ink/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-300/15 text-teal-200 dark:bg-teal-700/10 dark:text-moss">
                <item.icon size={19} />
              </span>
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center dark:border-ink/10">
          <div>
            <p className="text-2xl font-black">3+</p>
            <p className="mt-1 text-xs font-semibold opacity-70">Years</p>
          </div>
          <div>
            <p className="text-2xl font-black">Full</p>
            <p className="mt-1 text-xs font-semibold opacity-70">Stack</p>
          </div>
          <div>
            <p className="text-2xl font-black">Agile</p>
            <p className="mt-1 text-xs font-semibold opacity-70">Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
