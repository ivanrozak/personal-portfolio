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
  logo?: string;
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
    title: "Yuk Puncak",
    year: "2026",
    category: "experiment",
    role: "Solo Engineer",
    tech: ["Next.js", "Hono", "React Native", "PostgreSQL", "Redis", "Dokploy"],
    description:
      "Villa booking and property management platform built entirely solo — admin panel, management panel, customer web, Android mobile app (internal testing), backend API, and self-hosted infrastructure via Dokploy.",
    image: "/static/mockup_yukpuncak.jpg",
    url: "https://yukpuncak.com",
  },
  {
    title: "Lumina",
    year: "2025",
    category: "experiment",
    role: "Solo Engineer",
    tech: ["Next.js", "LiveKit", "PostgreSQL", "S3"],
    description:
      "Video conferencing platform with organization and member management. Users can create orgs, invite members, and host meetings. Built solo with a self-hosted LiveKit media server and S3 file storage.",
    image: "/static/mockup_lumina.jpg",
    url: "https://lumina.inaplux.com",
  },
  {
    title: "Rintisan Landing Page",
    year: "2023",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Nuxt.js", "TypeScript", "SSR"],
    description:
      "Migrated the company landing page from Vue 3 to Nuxt with SSR and full SEO optimization. Achieved high Lighthouse scores across performance, accessibility, best practices, and SEO — delivered within one week.",
    image: "/static/mockup_rintisan.jpg",
    url: "https://rintisan.co.id",
  },
  {
    title: "Rintisan Billing Dashboard",
    year: "2023",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Nuxt.js", "TypeScript", "TanStack Query"],
    description:
      "Migrated the billing dashboard from Vue 3 JavaScript to Nuxt with full TypeScript adoption. Implemented TanStack Query for client-side caching to reduce unnecessary backend requests.",
    image: "/static/mockup_rintisan_billing.jpg",
    url: "https://billing.rintisan.co.id",
  },
  {
    title: "Ground Radar",
    year: "2025",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Next.js", "TypeScript", "Leaflet.js"],
    description:
      "Migrated the company website from WordPress to Next.js without a CMS, rebuilding the frontend for improved performance. Developed an interactive global project map using Leaflet.js with clickable markers and location-based popups.",
    image: "/static/mockup_groundradar.jpg",
    url: "https://groundradar.com",
  },
  {
    title: "Geolitix",
    year: "2024",
    category: "professional",
    role: "Fullstack Engineer",
    tech: ["Next.js", "Sanity CMS", "TypeScript", "AWS Amplify"],
    description:
      "Company website with full GDPR & CCPA compliance for a cloud-based GPR data analysis platform. Collaborated with client's team on AWS Amplify deployment.",
    image: "/static/mockup_geolitix.jpg",
    url: "https://geolitix.com",
  },
  {
    title: "Daruma B2B E-Commerce",
    year: "2023",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Nuxt.js", "TypeScript", "Nginx"],
    description:
      "B2B procurement platform for office supplies, enabling businesses to source and purchase in bulk. Features product catalog, bulk ordering, invoice management, and integrated payment gateway.",
    image: "/static/mockup_daruma.jpg",
    url: "https://daruma.co.id",
  },
  {
    title: "YesDok",
    year: "2023",
    category: "professional",
    role: "Fullstack Developer",
    tech: ["Nuxt.js", "NestJS", "TypeScript", "WebRTC", "LiveKit"],
    description:
      "Telemedicine platform connecting patients with doctors via real-time video consultation. Serving thousands of active users monthly across Indonesia.",
    image: "/static/mockup_yesdok.jpg",
    url: "https://yesdok.com",
  },
  {
    title: "Sign-it",
    year: "2023",
    category: "professional",
    role: "Frontend Engineer",
    tech: ["Vue.js", "InteractJS", "Docker", "GCP"],
    description:
      "Government-grade digital PDF signature platform built for PERURI. Users can upload, annotate, and sign documents electronically with legal validity.",
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
    position: "Fullstack Developer",
    company: "PT. Yesdok Indonesia",
    logo: "/static/yesdok.jpeg",
    period: "Jan 2022 - Present",
    type: "fulltime",
    description:
      "Led end-to-end development of a telemedicine platform serving thousands of active users monthly. Initiated migration from native WebRTC to a self-hosted LiveKit media server, owned B2B WebView integration with IFG Insurance, and maintained technical ownership through team downsizing from 20 to 7 developers.",
    tech: ["Nuxt.js", "NestJS", "TypeScript", "WebRTC", "LiveKit", "PostgreSQL"],
  },
  {
    position: "Freelance Fullstack Developer",
    company: "Various Clients",
    period: "2023 - Present",
    type: "freelance",
    description:
      "Delivered multiple client projects: rintisan.co.id landing page revamp (Vue 3 → Nuxt, SSR + SEO), billing dashboard migration to TypeScript + TanStack Query, Sign-it for PERURI, Geolitix, GroundRadar website migration, and Daruma B2B.",
    tech: ["Nuxt.js", "Next.js", "Vue.js", "TypeScript", "Docker", "AWS Amplify"],
  },
  {
    position: "Fullstack Developer",
    company: "PT. Nashta Global Utama",
    logo: "/static/nashta.jpg",
    period: "2020 - 2021",
    type: "fulltime",
    description:
      "Contributed to the Indonesian National Single Window (INSW) under the Ministry of Finance — developed role-based user management for national-scale trade and customs infrastructure. Supported Bea Cukai portal using microfrontend architecture.",
    tech: ["Vue.js", "Nuxt.js", "Node.js", "Microfrontend"],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Informatics Engineering (S.T.)",
    major: "Informatics Engineering",
    school: "Universitas 17 Agustus Surabaya",
    period: "2016 - 2020",
  },
  {
    degree: "Full Stack Developer Bootcamp",
    major: "Full Stack Development",
    school: "Arkademy Tech Education Platform",
    period: "2020",
  },
];
