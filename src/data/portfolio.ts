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

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
  accent: "emerald" | "cyan" | "indigo" | "violet";
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  skills: string[];
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
  email: "hello@danielpurnomo.dev",
  cvUrl: "/daniel-purnomo-cv.pdf", // drop your CV into /public
  tagline: "I don't just write code; I build solutions.",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/danielpurnomo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/danielpurnomo" },
  { label: "Email", href: "mailto:hello@danielpurnomo.dev" },
  { label: "Instagram", href: "https://www.instagram.com/danielpurnomo" },
];

/* ----------------------------- GitHub configuration --------------------------- */

export const GITHUB_USERNAME = "danielpurnomo"; // <-- change to your real username

export const fallbackRepos: FallbackRepo[] = [
  {
    name: "ReqLint",
    description:
      "NLP-powered requirement analyzer for user stories evaluating ISO 29148 & INVEST criteria.",
    language: "TypeScript",
    stargazers_count: 12,
    forks_count: 3,
    html_url: "https://github.com/danielpurnomo/reqlint",
  },
  {
    name: "ambatysm-admin",
    description:
      "Vue.js admin dashboard for the Ambatysm clothing brand e-commerce platform.",
    language: "Vue",
    stargazers_count: 8,
    forks_count: 2,
    html_url: "https://github.com/danielpurnomo/ambatysm-admin",
  },
  {
    name: "lastbite-platform",
    description:
      "Food-waste reduction startup platform connecting Surabaya students with discounted near-expiry meals.",
    language: "PHP",
    stargazers_count: 21,
    forks_count: 5,
    html_url: "https://github.com/danielpurnomo/lastbite-platform",
  },
  {
    name: "realtime-sibi-translator",
    description:
      "Computer vision sign language translation system using MediaPipe & LSTM for public services.",
    language: "Python",
    stargazers_count: 34,
    forks_count: 9,
    html_url: "https://github.com/danielpurnomo/sibi-translator",
  },
  {
    name: "flutter-ambatysm-client",
    description:
      "Flutter mobile client for Ambatysm — clean architecture, Riverpod state management.",
    language: "Dart",
    stargazers_count: 6,
    forks_count: 1,
    html_url: "https://github.com/danielpurnomo/ambatysm-flutter",
  },
  {
    name: "portfolio-next",
    description: "This portfolio — Next.js 15, Tailwind CSS v4, Framer Motion.",
    language: "TypeScript",
    stargazers_count: 15,
    forks_count: 4,
    html_url: "https://github.com/danielpurnomo",
  },
];

/* ---------------------------------- Tech stack -------------------------------- */

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend", icon: "app-window" },
  { name: "Vue.js", category: "Frontend", icon: "atom" },
  { name: "Flutter", category: "Mobile", icon: "smartphone" },
  { name: "TypeScript", category: "Language", icon: "file-code" },
  { name: "Tailwind CSS", category: "Styling", icon: "wind" },
  { name: "Laravel", category: "Backend", icon: "boxes" },
  { name: "Python", category: "Language", icon: "terminal" },
  { name: "PyTorch / Scikit-Learn", category: "AI / ML", icon: "brain" },
  { name: "PostgreSQL", category: "Database", icon: "database" },
  { name: "MySQL", category: "Database", icon: "hard-drive" },
  { name: "Supabase", category: "BaaS", icon: "zap" },
];

/* ----------------------------------- Projects --------------------------------- */

export const projects: Project[] = [
  {
    title: "ReqLint",
    description:
      "An NLP-powered requirement analyzer that lints user stories against ISO 29148 quality standards and INVEST criteria. Features automated quality scoring, PostgreSQL-backed storage, and BDD (Gherkin) integration so product teams catch ambiguous requirements before they reach the sprint board.",
    tech: ["Python", "NLP", "PostgreSQL", "BDD / Gherkin", "FastAPI"],
    repoUrl: "https://github.com/danielpurnomo/reqlint",
    liveUrl: "#",
    featured: true,
    accent: "emerald",
  },
  {
    title: "Ambatysm",
    description:
      "A fullstack e-commerce platform for a clothing brand. Ships with a Vue.js admin dashboard for inventory & order management, a Flutter mobile client built on clean architecture, and a Laravel RESTful API with JWT auth, payment gateway integration, and catalog search.",
    tech: ["Vue.js", "Flutter", "Laravel", "MySQL", "REST API"],
    repoUrl: "https://github.com/danielpurnomo/ambatysm",
    featured: true,
    accent: "cyan",
  },
  {
    title: "LastBite",
    description:
      "A food-waste reduction startup platform connecting university students in Surabaya with discounted near-expiry meals from local merchants. Partners with campus food merchants to rescue surplus food — real-time deal matching, merchant dashboards, and impact analytics.",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com/danielpurnomo/lastbite",
    liveUrl: "#",
    featured: true,
    accent: "indigo",
  },
  {
    title: "Real-Time SIBI Translator",
    description:
      "A computer vision sign language (SIBI) translation system using MediaPipe landmarks and an LSTM sequence model, aimed at improving accessibility in public service windows. All preprocessing runs on-device with importable Keras inference for sub-second latency.",
    tech: ["Python", "MediaPipe", "LSTM / Keras", "OpenCV"],
    repoUrl: "https://github.com/danielpurnomo/sibi-translator",
    accent: "violet",
  },
];

/* ------------------------------- Certifications ------------------------------- */

export const certifications: Certification[] = [
  {
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    issuedDate: "Jun 2024",
    skills: ["HTML", "CSS", "JavaScript", "Web Accessibility"],
    verifyUrl: "https://www.dicoding.com/", // replace with your real certificate URL
    pdfUrl: "/certificates/fundamental-frontend.pdf",
  },
  {
    title: "Menjadi Front-End Web Developer Expert",
    issuer: "Dicoding Indonesia",
    issuedDate: "Nov 2024",
    skills: ["SPA", "PWA", "Build Automation", "Testing"],
    verifyUrl: "https://www.dicoding.com/",
    pdfUrl: "/certificates/frontend-expert.pdf",
  },
  {
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    issuedDate: "Mar 2025",
    skills: ["Machine Learning", "Time Series", "NLP", "Deployment"],
    verifyUrl: "https://www.dicoding.com/",
    pdfUrl: "/certificates/applied-ml.pdf",
  },
  {
    title: "Belajar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    issuedDate: "Jan 2024",
    skills: ["SQL", "PostgreSQL", "Data Modeling", "Query Optimization"],
    verifyUrl: "https://www.dicoding.com/",
    pdfUrl: "/certificates/sql.pdf",
  },
];
