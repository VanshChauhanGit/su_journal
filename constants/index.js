import { Home, Users, FileText, BookOpen, Gavel, Mail } from "lucide-react";

export const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Aim & Scope", icon: Users, href: "/aim-scope" },
  { label: "Editorial Board", icon: FileText, href: "/editorial-board" },
  {
    label: "For Author Guidelines",
    href: "for-author-reviewers",
    dropdown: [
      { label: "Author Guidelines", href: "/author-guidelines" },
      { label: "Research Areas", href: "/research-areas" },
      { label: "Correction Policy", href: "/correction-policy" },
      { label: "Plagiarism Policy", href: "/plagiarism-policy" },
    ],
  },
  { label: "Peer Review Process", href: "/peer-review" },
  { label: "Reviewer Guidelines", href: "/reviewer-guidelines" },
  { label: "Ethics & Malpractice", icon: Gavel, href: "/ethics" },
  { label: "Contact us", icon: Mail, href: "/contact-us" },
];
