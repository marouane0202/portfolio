// Education extracted from the local resume PDF. LinkedIn education pages were not publicly accessible.
export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
};

export const education: EducationItem[] = [
  {
    institution: "National Institute of Posts and Telecommunications",
    degree: "Master of Engineering",
    location: "Morocco",
    startDate: "2019",
    endDate: "2022",
    details: [
      "Engineering program focused on software, systems, telecommunications, and technical problem solving."
    ]
  },
  {
    institution: "Reda Slaoui",
    degree: "Pre-Engineering Foundation Studies",
    location: "Morocco",
    startDate: "2017",
    endDate: "2019",
    details: [
      "Preparatory engineering studies before entering the engineering program."
    ]
  }
];
