// Update this file with projects from LinkedIn, your resume, or portfolio links.
// The frontend imports this local data directly; no backend or CMS is used.
export type Project = {
  name: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  screenshot?: string;
  impact: string;
};

export const projects: Project[] = [
  {
    name: "Decouvrir mon patrimoine",
    description:
      "Established functional and technical guidelines for interactions between MENPS, the Foundation for the Safeguarding of Rabat's Cultural Heritage, and the Mohamed VI Foundation for the Protection of the Environment. The platform streamlines school and teacher integration, supports public and private institution registration, manages Eco School and heritage preservation project submissions, and maintains service continuity through access-rights management.",
    techStack: ["Angular", "Symfony Framework", "PHP", "Node.js", "Docker", "Git", "Jira"],
    liveUrl: "https://decouvremonpatrimoine.fspcrabat.ma/",
    impact:
      "Improved data integrity and operational coordination across school registration, project submission, label awarding, and facility data update workflows."
  },
  {
    name: "Casier Judiciaire",
    description:
      "Online service for requesting an official Moroccan criminal record extract. Users can submit a request, choose delivery by email, registered letter, or court pickup, track request status, and download the original document by scanning a QR code.",
    techStack: ["Mobile Application", "Digital Public Service", "QR Code", "Identity Verification"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.ejustice.cj&hl=fr&gl=US",
    impact:
      "Digitized a high-value judicial service and simplified request submission, tracking, delivery, and document retrieval for citizens."
  },
  {
    name: "Relationship Doctor-Patient: Tabib.ma",
    description:
      "Doctor-patient relationship management web application. The solution helps patients discover nearby doctors, request appointments, and pay medical bills using online payment methods.",
    techStack: ["Web Application", "Appointment Booking", "Online Payment", "Healthcare"],
    liveUrl: "https://yibizzi.github.io/tabib.ma/",
    impact:
      "Created a practical healthcare workflow for doctor discovery, appointment requests, and patient billing."
  }
];
