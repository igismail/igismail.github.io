/**
 * All portfolio content lives here. Edit text, links and lists in this file;
 * the page components read from it and need no changes.
 */
import {
  Code2,
  Smartphone,
  Network,
  Cloud,
  Cpu,
  Wrench,
  Users,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Mohammed Ismail",
  initials: "MI",
  greeting: "Hi, I'm",
  roles: ["Flutter App Developer", "Mobile App Developer", "CSE Undergraduate", "Problem Solver"],
  tagline: "I build fast, responsive cross-platform mobile apps with Flutter and Dart.",
  availability: "Open to opportunities",
  location: "Chattogram, Bangladesh",
  /** Put your photo in /public (e.g. /profile.jpg) and set the path here. Empty = monogram. */
  photo: "",
  cvUrl: "/Mohammed_Ismail_CV.pdf",
  email: "mohammodismail2020@gmail.com",
  phone: "+880 1892-945568",
  address: "Khulshi, Chattogram, Bangladesh",
  github: "https://github.com/igismail",
  linkedin: "https://www.linkedin.com/in/mohammed-ismail-b2009022b/",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const heroBadges = ["Flutter", "Dart", "Firebase", "Arduino"];

export const about = {
  text: "Motivated and detail-oriented Computer Science & Engineering student at Port City International University (CGPA 3.53) with hands-on experience building responsive cross-platform mobile apps using Flutter and Dart, plus embedded systems projects with Arduino. Strong in problem solving, communication and task management, and comfortable in remote or team-based environments.",
  stats: [
    { value: "3+", label: "Projects", caption: "Shipped mobile & embedded builds" },
    { value: "Flutter", label: "& Dart", caption: "Primary stack for cross-platform apps" },
    { value: "3.53", label: "CGPA", caption: "B.Sc. in CSE, Port City Int'l University" },
  ],
};

/** `wide` makes the card span two columns on large screens. */
export type SkillGroup = { title: string; icon: LucideIcon; items: string[]; wide?: boolean };

export const skills: SkillGroup[] = [
  { title: "Languages", icon: Code2, items: ["Dart", "Python", "C/C++"] },
  {
    title: "Mobile",
    icon: Smartphone,
    wide: true,
    items: ["Flutter", "Cross-Platform Development", "Android", "Responsive UI", "UI/UX"],
  },
  {
    title: "State Management & Networking",
    icon: Network,
    items: ["GetX", "BLoC", "REST APIs", "HTTP", "Dio"],
  },
  { title: "Backend & Cloud", icon: Cloud, items: ["Firebase", "FlutterFire"] },
  {
    title: "Embedded Systems",
    icon: Cpu,
    items: [
      "Arduino Uno",
      "Ultrasonic Sensors",
      "Servo Motors",
      "Sensor Integration",
      "Serial Communication",
    ],
  },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code", "Android Studio"] },
  {
    title: "Soft Skills",
    icon: Users,
    wide: true,
    items: ["Problem Solving", "Communication", "Teamwork", "Task Management"],
  },
];

export const projectFilters = ["All", "Flutter", "AI", "Embedded"] as const;
export type ProjectCategory = Exclude<(typeof projectFilters)[number], "All">;

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  categories: ProjectCategory[];
  /** Visual style of the card thumbnail. */
  thumb: "ats" | "face" | "bus" | "dome";
  github: string;
  /** Leave empty until a live demo exists; the button shows as "Demo soon". */
  demo: string;
};

export const projects: Project[] = [
  {
    title: "AI Resume ATS Checker",
    description:
      "Analyzes resumes and gives structured feedback with an ATS score, so candidates know exactly what to fix.",
    highlights: [
      "Resume upload & keyword analysis",
      "Section checking & formatting evaluation",
      "Report generation",
      "Splash, login, registration, upload, analysis & report screens",
    ],
    tags: ["Flutter", "Dart", "AI"],
    categories: ["Flutter", "AI"],
    thumb: "ats",
    github: "https://github.com/igismail",
    demo: "",
  },
  {
    title: "Face Detection App",
    description:
      "Detects and locates human faces in images, wrapped in a clean, user-friendly interface.",
    highlights: ["Face detection & localisation", "Image picker flow", "Minimal, focused UI"],
    tags: ["Flutter", "Computer Vision"],
    categories: ["Flutter", "AI"],
    thumb: "face",
    github: "https://github.com/igismail",
    demo: "",
  },
  {
    title: "Bus Management & Ticket Booking",
    description:
      "Manage bus information, view available buses, book tickets and calculate travel cost in one app.",
    highlights: ["Bus information management", "Available bus listings", "Booking & cost calculation"],
    tags: ["Flutter", "Dart"],
    categories: ["Flutter"],
    thumb: "bus",
    github: "https://github.com/igismail",
    demo: "",
  },
  {
    title: "Smart Iron Dome Prototype",
    description:
      "Defense-inspired prototype that detects objects, tracks their position and rotates toward the target automatically.",
    highlights: ["Arduino Uno + ultrasonic sensors", "Servo-driven tracking", "Laser module targeting"],
    tags: ["Arduino", "C/C++", "Embedded Systems"],
    categories: ["Embedded"],
    thumb: "dome",
    github: "https://github.com/igismail",
    demo: "",
  },
];

export const education = [
  {
    school: "Port City International University",
    place: "Chattogram",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "July 2023 – Present",
    score: "CGPA 3.53",
  },
  {
    school: "Omorgani M.E.S College",
    place: "Chattogram",
    degree: "Higher Secondary Certificate (Science)",
    period: "2020 – 2022",
    score: "GPA 4.08",
  },
  {
    school: "Bakolia High School",
    place: "Chattogram",
    degree: "Secondary School Certificate (Science)",
    period: "2018 – 2020",
    score: "GPA 4.22",
  },
];

export const contact = {
  heading: "Let's build something great together",
  subheading:
    "Have a project, internship or role in mind? Send a message and I'll get back to you quickly.",
};

export const footer = {
  text: "© 2026 Mohammed Ismail. Built with Flutter passion and React.",
};
