export type ProjectCategory = "professional" | "experiment" | "team" | "open-source";

export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  url: string;
  tech: string[];
  category: ProjectCategory;
  role?: string;
  repoUrl?: string;
}

export interface Experience {
  position: string;
  company: string;
  logo: string;
  period: string;
  type?: "fulltime" | "freelance" | "contract";
  description?: string;
  tech?: string[];
}

export interface Education {
  degree: string;
  major: string;
  school: string;
  period: string;
}

export const projects: Project[] = [
  {
    title: "Ground Radar",
    year: "2025",
    category: "professional",
    role: "Fullstack Engineer",
    tech: ["Next.js", "TypeScript", "Node.js", "REST API"],
    description:
      "Production platform for UltraGPR technology, enabling professionals to run deep mineral exploration and geotechnical surveys. Serves geoscientists and engineering firms worldwide.",
    image: "/static/mockup_groundradar.jpg",
    url: "https://groundradar.com",
  },
  {
    title: "Geolitix",
    year: "2024",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Next.js", "TypeScript", "WebAssembly", "Node.js"],
    description:
      "Cloud-based web application for processing and visualizing GPR survey data — no desktop software required. Allows geoscientists to analyze large datasets from any GPR instrument directly in the browser.",
    image: "/static/mockup_geolitix.jpg",
    url: "https://geolitix.com",
  },
  {
    title: "Daruma B2B E-Commerce",
    year: "2023",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    description:
      "B2B procurement platform for office supplies, enabling businesses to source and purchase in bulk. Features product catalog, bulk ordering, invoice management, and integrated payment gateway.",
    image: "/static/mockup_daruma.jpg",
    url: "https://daruma.co.id",
  },
  {
    title: "YesDok",
    year: "2023",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Next.js", "TypeScript", "WebRTC", "Node.js"],
    description:
      "Telemedicine platform connecting patients with doctors via real-time video consultation. Built with Next.js, serving thousands of users seeking accessible healthcare across Indonesia.",
    image: "/static/mockup_yesdok.jpg",
    url: "https://yesdok.com",
  },
  {
    title: "Sign-it",
    year: "2023",
    category: "professional",
    role: "Fullstack Engineer",
    tech: ["Next.js", "TypeScript", "Node.js", "PDF Processing"],
    description:
      "Digital document signing platform enabling paperless workflows. Users can upload, annotate, and sign PDF documents electronically — simplifying contract and approval processes.",
    image: "/static/mockup_signit.jpg",
    url: "https://sign-it.id",
  },
  {
    title: "ASA Indonesia",
    year: "2023",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Next.js", "TypeScript", "Node.js", "REST API"],
    description:
      "Customer engagement platform helping businesses build lasting relationships through automated touchpoints, analytics, and multi-channel communication tools.",
    image: "/static/mockup_asaindonesia.jpg",
    url: "https://asaindonesia.net",
  },
];

export const experiences: Experience[] = [
  {
    position: "Front End Engineer",
    company: "YesDok",
    logo: "/static/yesdok.jpeg",
    period: "2022 - Present",
    type: "fulltime",
    description:
      "Leading frontend development for Indonesia's telemedicine platform. Responsible for video consultation features, patient dashboard, and doctor portal — serving thousands of active users.",
    tech: ["Next.js", "TypeScript", "WebRTC", "Tailwind CSS"],
  },
  {
    position: "Front End Engineer",
    company: "Daruma",
    logo: "/static/daruma.jpg",
    period: "2023",
    type: "freelance",
    description:
      "Developed the complete frontend for a B2B procurement platform, including product catalog, bulk ordering flow, and checkout integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    position: "Fullstack Engineer",
    company: "Nashta Global Utama",
    logo: "/static/nashta.jpg",
    period: "2021 - 2022",
    type: "fulltime",
    description:
      "Built internal tools and client-facing web applications. Worked across the full stack from REST API design to frontend implementation.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },
];

// TODO: Fill in your actual education details
export const education: Education[] = [
  // {
  //   degree: "Bachelor of Computer Science",
  //   major: "Information Technology",
  //   school: "Universitas XXX",
  //   period: "2018 - 2022",
  // },
];
