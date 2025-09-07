import {
  Home,
  Users,
  FileText,
  Mail,
  Instagram,
  Linkedin,
  LinkedinIcon,
} from "lucide-react";
import { Facebook, Twitter, Youtube, Link as LinkIcon } from "lucide-react";

export const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About University", icon: Users, href: "/about-university" },
  { label: "Editorial Board", icon: FileText, href: "/editorial-board" },

  { label: "Editor's Desk", href: "/editor-desk" },
  { label: "Referees", href: "/referees" },
  { label: "Why NJB", href: "/why-njb" },
  { label: "Menace of Plagiarism", href: "/menace-of-plagiarism" },
  {
    label: "Guidelines",
    href: "/guidelines",
  },
  { label: "Open Access", icon: Mail, href: "/open-access" },
];

export const editorialBoard = [
  {
    name: "Prof. Anoop Swarup",
    position: "Chairperson",
    institute: "Global Knowledge Alliance",
    location: "Melbourne (Australia)",
  },
  {
    name: "Prof. Ram Singh",
    position: "Department of Economics",
    institute: "Delhi School of Economics, University of Delhi",
    location: "Delhi",
  },
  {
    name: "Prof. Arun Kumar",
    position:
      "Motilal Nehru Institute of Research in Business Administration (MONIRBA)",
    institute: "University of Allahabad",
    location: "Allahabad",
  },
  {
    name: "Prof. G S. Gupta",
    position: "Former Professor",
    institute: "Indian Institute of Management (IIM-A)",
    location: "Ahmedabad (Gujarat)",
  },
  {
    name: "Prof. H. C. Purohit",
    position: "Head, Department of Management",
    institute: "Doon University",
    location: "Dehradun",
  },
  {
    name: "Prof. Rajan Yadav",
    position: "Head, Delhi School of Management",
    institute: "Delhi Technological University",
    location: "Delhi",
  },
  {
    name: "Prof. Nawal Kishore",
    position: "Former Director, School of Management Studies",
    institute: "Indira Gandhi National Open University",
    location: "New Delhi",
  },
  {
    name: "Prof. Alok Saklani",
    position: "",
    institute: "Shri Ram Himalayan University",
    location: "Rishikesh (Dehradun)",
  },
  {
    name: "Prof. Hardeep Chahal",
    position: "Department of Commerce",
    institute: "University of Jammu",
    location: "Jammu (J&K)",
  },
  {
    name: "Prof. H. K. Dangi",
    position: "Department of Commerce, Faculty of Commerce and Business",
    institute: "University of Delhi",
    location: "Delhi",
  },
  {
    name: "Dr. Savita Hanspal",
    position: "State University of Newyork",
    institute: "Newyork Institute of Technology",
    location: "U.S.A",
  },
  {
    name: "Prof. P. K. Jain",
    position: "Dept. of Management Studies",
    institute: "IIT Delhi",
    location: "Delhi",
  },
  {
    name: "Prof. R. C. Dangwal",
    position: "Department of Commerce, Dean",
    institute: "HNB Garhwal Central University",
    location: "Srinagar (Garhwal)",
  },
  {
    name: "Prof. R. D. Sharma",
    position: "Vice-Chancellor",
    institute: "Noida International University",
    location: "Greater Noida (U.P.)",
  },
  {
    name: "Prof. Sanjay Mishra",
    position: "School of Business",
    institute: "University of Kansas",
    location: "Kansas (USA)",
  },
  {
    name: "Prof. Surender Mor",
    position: "Department of Economics",
    institute: "BPS Women University",
    location: "Khanpur, Sonepat (Haryana)",
  },
  {
    name: "Dr. Surender Munjal",
    position: "University of Leeds Business School",
    institute: "",
    location: "Leeds (U.K.)",
  },
  {
    name: "Prof. Ramesh Chander Dalal",
    position: "Chairman, University Business School",
    institute: "Kurukshetra University",
    location: "Kurukshetra",
  },
];

export const referees = [
  {
    name: "Prof. Anoop Swarup",
    designation:
      "Chairperson, Global Knowledge Alliance, Melbourne (Australia)",
  },
  {
    name: "Dr. Ajay Kumar",
    designation:
      "Department of Management, Central University of Haryana, Mahendergarh",
  },
  {
    name: "Prof. Arun Kumar",
    designation: "MONIRBA, University of Allahabad, Allahabad",
  },
  {
    name: "Prof. C.P. Gupta",
    designation:
      "Department of Finance and Business Economics, South Campus, University of Delhi, New Delhi",
  },
  {
    name: "Prof. Furqan Qamar",
    designation:
      "Centre for Management Studies, Jamia Millia Islamia, New Delhi",
  },
  {
    name: "Prof. I.S. Gupta",
    designation:
      "Former Professor, Indian Institute of Management (IIM-A), Ahmedabad",
  },
  {
    name: "Prof. Garima Gupta",
    designation: "Faculty of Management Studies, University of Delhi, Delhi",
  },
  {
    name: "Prof. Hammad K. Danqi",
    designation: "Faculty of Commerce and Business, University of Delhi, Delhi",
  },
  {
    name: "Prof. H. C. Purohit",
    designation:
      "Head, Department of Management Studies, Doon University, Dehradun",
  },
  {
    name: "Prof. Hardeep Chahal",
    designation: "Head, Department of Commerce, University of Jammu, Jammu",
  },
  {
    name: "Dr. Komal Nagar",
    designation: "The Business School, University of Jammu, Jammu",
  },
  {
    name: "Prof. Neelak Krishnan",
    designation: "Indira Gandhi National Open University, New Delhi",
  },
  {
    name: "Prof. Pravin Saxena",
    designation:
      "Faculty of Commerce, Dayalbagh Educational Institute, Dayalbagh, Agra",
  },
  {
    name: "Prof. R. C. Dangwal",
    designation:
      "School of Commerce, HNB Garhwal Central University, Srinagar (Garhwal)",
  },
  {
    name: "Prof. R. D. Sharma",
    designation: "Former Vice-Chancellor, University of Jammu, Jammu",
  },
  {
    name: "Prof. Ram Singh",
    designation: "Delhi School of Economics, University of Delhi, Delhi",
  },
  {
    name: "Prof. Ramesh Chander Dhal",
    designation:
      "University Business School, Kurukshetra University, Kurukshetra",
  },
  {
    name: "Prof. Ruchi Gupta",
    designation: "Shaheed Bhagat Singh College, University of Delhi, New Delhi",
  },
  {
    name: "Prof. Sanjay Mishra",
    designation: "School of Business, University of Kansas, Kansas (U.S.A.)",
  },
  {
    name: "Prof. Shyam Kumar Singh",
    designation:
      "Former Professor of Economics and Director, School of Social Sciences, Indira Gandhi National Open University, New Delhi",
  },
  {
    name: "Prof. Sweta Anand",
    designation:
      "Dean, School of Management, Gautam Buddha University, Greater Noida",
  },
  {
    name: "Prof. Sunil Kumar Gupta",
    designation:
      "Indira Gandhi National Open University, New Delhi (Currently Registrar, Central University of Haryana, Mahendergarh)",
  },
  {
    name: "Prof. Surender Mor",
    designation:
      "Chairman, Department of Economics, BPS Women University, Khanpur, Sonepat (Haryana)",
  },
];

export const footerContent = {
  quickLinks: {
    title: "Quick Links",
    social: [
      {
        href: "https://www.linkedin.com/school/shobhit-university/",
        icon: <LinkedinIcon size={20} />,
      },
      {
        href: "https://www.facebook.com/ShobhitUniversityIndia/",
        icon: <Facebook size={20} />,
      },
      {
        href: "https://x.com/shobhituniv?lang=en",
        icon: <Twitter size={20} />,
      },
      {
        href: "https://www.instagram.com/Shobhituniv",
        icon: <Instagram size={20} />,
      },
      {
        href: "https://www.youtube.com/user/shobhituniversityin",
        icon: <Youtube size={20} />,
      },
      {
        href: "https://www.shobhituniversity.ac.in/",
        icon: <LinkIcon size={20} />,
      },
    ],
    links: [
      // { label: "Home", href: "/" },
      // { label: "FAQ's", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Site-map", href: "#" },
    ],
  },
  journal: {
    title: "Journal Contents",
    links: [
      { label: "Current Issue", href: "#" },
      { label: "Archive Issues", href: "#" },
      { label: "Special Issues", href: "#" },
      { label: "Best Paper Awards", href: "#" },
      {
        label: "Regular Publication e-Certificate",
        href: "#",
      },
      {
        label: "Special Publication e-Certificate",
        href: "#",
      },
    ],
  },
  downloads: {
    title: "Downloads",
    links: [
      { label: "NJB Template", href: "#" },
      { label: "Copyright Form", href: "#" },
      { label: "Originality Certificate", href: "#" },
    ],
    // extra: {
    //   title: "Subscription Fee",
    //   link: { label: "Subscription Fee", href: "#" },
    // },
  },
  authors: {
    title: "For Authors & Reviewers",
    links: [
      { label: "Author Guidelines", href: "/guidelines" },
      { label: "Reviewer Guidelines", href: "/guidelines" },
      { label: "Peer Review Process", href: "#" },
      { label: "Ethics & Malpractice", href: "#" },
      { label: "Research Areas", href: "#" },
      { label: "Correction Policy", href: "#" },
      { label: "Plagiarism Policy", href: "#" },
    ],
  },
};
