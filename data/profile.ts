// Portfolio identity data extracted from the local resume PDF.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Mohamed Abdeljalil Rouane",
  title: "Senior Software Engineer",
  location: "Casablanca, Morocco",
  email: "mohamedabdeljalilrouane@gmail.com",
  phone: "+212 681781958",
  website: "https://marouane0202.github.io/portfolio",
  resumeUrl: `${basePath}/resume.pdf`,
  summary:
    "Full-Stack Engineer with three years of experience in the IT sector, specializing in robust backend systems and intuitive frontend interfaces.",
  about:
    "I bring a strong analytical mindset to Agile environments, delivering scalable software within tight production cycles. My work spans backend architecture, frontend development, testing, code quality, DevOps workflows, and continuous technical improvement.",
  highlights: [
    "Architects backend systems and frontend interfaces for production environments.",
    "Works across Agile/Scrum delivery, project coordination, testing, and quality assurance.",
    "Focused on clean code, SOLID principles, maintainability, and scalable technical design."
  ]
} as const;
