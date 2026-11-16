/* =====================================================
 * CENTRAL PORTFOLIO DATA — edit everything here.
 * Replace placeholder URLs (repo/live/pdf/verify links)
 * with your real ones.
 * ===================================================== */

export interface SocialLink {
  label: string;
  href: string;
}

export interface TechItem {
  name: string;
  category: string;
  icon:
    | "app-window"
    | "atom"
    | "smartphone"
    | "file-code"
    | "wind"
    | "boxes"
    | "terminal"
    | "brain"
    | "database"
    | "hard-drive"
    | "zap";
}

export interface RepoLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  repoLinks?: RepoLink[]; // multiple GitHub repos (e.g. backend + mobile)
  demoUrl?: string; // external live demo link
  demoBadge?: string; // small status label, e.g. "Beta" / "In Progress"
  figmaUrl?: string; // external Figma prototype link
  featured?: boolean;
  accent: "emerald" | "cyan" | "indigo" | "violet";
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  skills: string[];
  status?: string; // badge label, defaults to "Verified"
  verifyUrl: string;
  pdfUrl: string; // put PDFs in /public/certificates/*.pdf
}

export interface FallbackRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

/* ---------------------------------- Identity --------------------------------- */

export const profile = {
  name: "Daniel Purnomo",
  monogram: "Daniel.",
  role: "Fullstack & AI Engineer",
  subtitle:
    "An Information Systems student & Software Engineer who turns coffee into scalable code. Passionate about fullstack web development, AI/ML, and system architecture.",
  location: "UNAIR, Surabaya",
  email: "purnomodan@gmail.com",
  cvUrl: "/CV-Daniel-Purnomo.pdf", // drop your CV into /public
  tagline: "I don't just write code; I build solutions.",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/danielpurnomo" },
  { label: "LinkedIn", href: "https://linkedin.com/in/daniel-purnomo-197a70321" },
  { label: "Email", href: "mailto:purnomodan@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/danielpurnomo_" },
];

/* ----------------------------- GitHub configuration --------------------------- */

export const GITHUB_USERNAME = "danielpurnomo"; // <-- change to your real username

export const fallbackRepos: FallbackRepo[] = [
  {
    name: "ambatysm-backend",
    description:
      "Laravel RESTful API backend for the Ambatysm e-commerce web and mobile platform.",
    language: "PHP",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/danielpurnomo/ambatysm-backend",
  },
  {
    name: "porto",
    description:
      "Personal developer portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/danielpurnomo/porto",
  },
  {
    name: "Kyassha-Frontend",
    description: "Cross-platform mobile cashier application built with Flutter.",
    language: "Dart",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/danielpurnomo/Kyassha-Frontend",
  },
  {
    name: "Kyassha-Backend",
    description: "RESTful API backend service for the Kyassha POS/cashier system.",
    language: "PHP",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/danielpurnomo/Kyassha-Backend",
  },
  {
    name: "real-time-SIBI-sign-language-translator",
    description:
      "Real-time Indonesian Sign Language (SIBI) translator using MediaPipe hand-landmark extraction and LSTM neural networks.",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    html_url:
      "https://github.com/danielpurnomo/real-time-SIBI-sign-language-translator",
  },
  {
    name: "frontend-pmob",
    description:
      "Cross-platform mobile e-commerce application for Ambatysm built with Flutter and integrated with Laravel REST API.",
    language: "Dart",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/danielpurnomo/frontend-pmob",
  },
];

/* ---------------------------------- Tech stack -------------------------------- */

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend", icon: "app-window" },
  { name: "Vue.js", category: "Frontend", icon: "atom" },
  { name: "Flutter", category: "Mobile", icon: "smartphone" },
  { name: "TypeScript", category: "Language", icon: "file-code" },
  { name: "Tailwind CSS", category: "Styling", icon: "wind" },
  { name: "Figma", category: "UI / UX", icon: "app-window" },
  { name: "Laravel", category: "Backend", icon: "boxes" },
  { name: "Python", category: "Language", icon: "terminal" },
  { name: "PyTorch / Scikit-Learn", category: "AI / ML", icon: "brain" },
  { name: "TensorFlow / Keras", category: "AI / ML", icon: "brain" },
  { name: "PostgreSQL", category: "Database", icon: "database" },
  { name: "MySQL", category: "Database", icon: "hard-drive" },
  { name: "Supabase", category: "BaaS", icon: "zap" },
];

/* ----------------------------------- Projects --------------------------------- */

export const projects: Project[] = [
  {
    title: "ReqLint — Automated Agile User Story Quality Analyzer",
    description:
      "Hybrid rule-based NLP and machine learning pipeline to automatically evaluate and score agile user stories against 6 INVEST quality criteria, integrated with a Laravel web interface for actionable feedback and automated rewrite recommendations.",
    tech: ["Python", "NLP", "Scikit-Learn", "Laravel", "RESTful API"],
    repoUrl: "https://github.com/danielpurnomo/reqlint",
    demoUrl: "http://reqlint.caiis.ai.id/",
    demoBadge: "In Progress",
    featured: true,
    accent: "emerald",
  },
  {
    title: "Ambatysm — Full-Stack E-Commerce Web & Mobile Platform",
    description:
      "End-to-end e-commerce platform for a clothing brand supporting a Vue.js web storefront and cross-platform Flutter mobile app powered by a unified Laravel RESTful API backend and MySQL.",
    tech: ["Laravel", "Vue.js", "Flutter", "MySQL", "REST API"],
    repoLinks: [
      {
        label: "Backend (Laravel)",
        href: "https://github.com/danielpurnomo/ambatysm-backend",
      },
      {
        label: "Mobile (Flutter)",
        href: "https://github.com/danielpurnomo/frontend-pmob",
      },
    ],
    featured: true,
    accent: "cyan",
  },
  {
    title: "Wisata Batik Okra — Operational Management System & UI/UX Redesign",
    description:
      "Stakeholder requirements gathering, current-to-future state user journey mapping, and high-fidelity interactive Figma prototypes to digitize booking, inventory, and visitor operations for a cultural tourism enterprise in Surabaya.",
    tech: ["Figma", "System Analysis", "UI/UX Design", "User Journey Mapping"],
    figmaUrl:
      "https://www.figma.com/design/szZz2Y4QwcMMkvLvsZq43D/Wisata-Batik-Okra?node-id=6233-3273&p=f&t=wcjHTHG9TPTL1G4t-0",
    featured: true,
    accent: "indigo",
  },
  {
    title: "Real-Time SIBI Sign Language Translator (Gemastik 2026)",
    description:
      "Real-time computer vision pipeline using MediaPipe hand-landmark extraction and LSTM neural networks to translate Indonesian Sign Language (SIBI) for public service accessibility at Dukcapil counters.",
    tech: ["Python", "MediaPipe", "TensorFlow/Keras", "LSTM", "Computer Vision"],
    repoUrl: "https://github.com/danielpurnomo/real-time-SIBI-sign-language-translator",
    featured: true,
    accent: "violet",
  },
];

/* ------------------------------- Certifications ------------------------------- */

export const certifications: Certification[] = [
  {
    title: "Certified Junior Web Programmer",
    issuer:
      "BNSP / LSP Universitas Airlangga (Reg. No. J.346 00248 2026)",
    issuedDate: "Nov 2026",
    skills: ["Web Development", "Laravel", "PHP", "REST API", "BNSP Certified"],
    verifyUrl: "#", // replace with your real verification URL
    pdfUrl: "/certificates/Sertifikat-Daniel-Purnomo.pdf",
  },
  {
    title: "Samsung Innovation Campus (SIC) Batch 7",
    issuer: "Samsung Electronics Indonesia",
    issuedDate: "2026",
    skills: ["Python", "AI & Machine Learning", "IoT", "Coding Bootcamp"],
    verifyUrl: "#",
    pdfUrl: "#",
  },
  {
    title: "Top 10 Finalist — Innovation Case Competition",
    issuer: "Campus Data Week",
    issuedDate: "2026",
    skills: ["Data Analytics", "Business Case", "Problem Solving", "Innovation"],
    verifyUrl: "#",
    pdfUrl: "#",
  },
  {
    title: "Data Science & Software Engineering Competitions",
    issuer: "UNPAD Hackathon & IPB GammaFest Data Science",
    issuedDate: "2026",
    skills: ["Hackathon", "Data Science", "Machine Learning", "Rapid Prototyping"],
    verifyUrl: "#",
    pdfUrl: "#",
  },
  {
    title: "Data Science Competition — ARA 7.0 ITS",
    issuer: "Institut Teknologi Sepuluh Nopember (ITS)",
    issuedDate: "2026",
    skills: ["Data Science", "Machine Learning", "Python", "Data Analytics"],
    status: "Participant",
    verifyUrl: "#",
    pdfUrl: "#",
  },
  {
    title: "Top 5 Finalist — National Business Case Competition 2026",
    issuer: "National Business Case Competition",
    issuedDate: "Nov 2026",
    skills: ["Business Case", "Strategic Analysis", "Problem Solving", "Pitching"],
    status: "Finalist · Ongoing",
    verifyUrl: "#",
    pdfUrl: "#",
  },
];
