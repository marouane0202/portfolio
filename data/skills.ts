// Technical skills extracted from the local resume PDF.
export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "Microservices"]
  },
  {
    category: "Web Technologies",
    skills: ["React.js", "Next.js"]
  },
  {
    category: "Database Technologies",
    skills: ["Oracle", "MySQL", "SQL Server"]
  },
  {
    category: "DevOps & Delivery",
    skills: ["GitLab", "Jenkins", "Docker", "Kubernetes", "Jira", "Agile", "Scrum"]
  },
  {
    category: "Testing & Quality",
    skills: ["Jest", "JUnit", "Mockito", "JMeter", "SonarQube", "Unit Testing", "Integration Testing"]
  },
  {
    category: "Engineering Practices",
    skills: ["Clean Code", "SOLID Principles", "Prompt Engineering", "Code Review", "Technical Roadmapping"]
  }
];
