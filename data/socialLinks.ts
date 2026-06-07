import { Linkedin, Mail, Phone } from "lucide-react";

// Contact details extracted from the local resume PDF, plus portfolio links.
export const socialLinks = [
  {
    label: "Email",
    href: "mailto:mohamedabdeljalilrouane@gmail.com",
    icon: Mail
  },
  {
    label: "Phone",
    href: "tel:+212681781958",
    icon: Phone
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-abdeljalil-rouane/",
    icon: Linkedin
  }
] as const;
