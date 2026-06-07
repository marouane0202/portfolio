// Work experience extracted from the local resume PDF.
export type Experience = {
  company: string;
  role: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Eurafric Information",
    role: "Software Engineer",
    location: "Casablanca, Morocco",
    type: "Full-time",
    startDate: "Jan 2025",
    endDate: "Present",
    description:
      "Contributing to software modernization, architectural optimization, Agile delivery, and quality assurance for production systems.",
    achievements: [
      "Contributed to the migration of legacy projects to modern frameworks, improving transition quality and system performance.",
      "Refactored core modules using SOLID principles to improve modularity, maintainability, and scalability.",
      "Managed end-to-end Agile/Scrum tasks by translating business requirements into technical roadmaps.",
      "Implemented unit and integration testing and conducted peer code reviews to improve stability and reduce production vulnerabilities."
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "React.js", "Next.js", "Jest", "JUnit", "Mockito"]
  },
  {
    company: "Intelcia IT Solutions",
    role: "Software Engineer",
    location: "Casablanca, Morocco",
    type: "Full-time",
    startDate: "Sept 2022",
    endDate: "Dec 2024",
    description:
      "Delivered software engineering work across project coordination, Agile lifecycle management, testing, quality assurance, and technical delivery.",
    achievements: [
      "Managed end-to-end project tasks within Agile/Scrum frameworks and coordinated with stakeholders.",
      "Translated business requirements into technical roadmaps for delivery teams.",
      "Streamlined development workflows and prioritized technical debt management to support tight production deadlines.",
      "Implemented rigorous unit and integration testing for microservices and frontend components.",
      "Conducted product testing and peer code reviews to maintain architectural integrity."
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "React.js", "SQL", "GitLab", "Jenkins", "Docker"]
  }
];
