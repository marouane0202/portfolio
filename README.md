# Software Engineer Portfolio

A modern, recruiter-friendly portfolio built with Next.js App Router, TypeScript, Tailwind CSS, reusable components, and local data files.

## Run Locally

```bash
npm install
npm run dev
```

On Windows PowerShell, if script execution blocks `npm`, run:

```bash
npm.cmd install
npm.cmd run dev
```

## Update Portfolio Data

All portfolio content is stored locally in `/data` and imported directly by the frontend. No backend, database, authentication, API server, or CMS is used.

- `data/profile.ts`: name, headline, location, summary, about text, profile image, resume URL
- `data/experience.ts`: LinkedIn-style work history
- `data/education.ts`: education entries
- `data/skills.ts`: grouped skills
- `data/projects.ts`: projects, links, tech stacks, screenshots
- `data/certifications.ts`: certifications
- `data/socialLinks.ts`: email, LinkedIn, GitHub, resume

Replace the placeholder values with your LinkedIn profile details when ready.
