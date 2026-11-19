export type ProjectCategory = "professional" | "experiment" | "team" | "open-source";

export interface Project {
  title: string;
  subtitle?: string;
  /** Short label shown in mono above a featured card, e.g. "Product" or "Website". */
  kind?: string;
  year?: string;
  description: string;
  previewDescription?: string;
  image: string;
  url: string;
  tech: string[];
  category: ProjectCategory;
  role?: string;
  repoUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  logo?: string;
}

export const portfolioTagline = "A collection of websites and products I’ve helped build.";

export const featuredProjectTitles = ["Yuk Puncak", "Geolitix", "Pixelleven"];

export const projects: Project[] = [
  {
    "title": "Rintisan",
    "previewDescription": "A business-platform website, migrated from Vue 3 to Nuxt with SSR and TypeScript.",
    "subtitle": "Business platform website",
    "kind": "Website",
    "year": "2025",
    "category": "professional",
    "role": "Fullstack Engineer",
    "tech": [
      "Nuxt.js",
      "TypeScript",
      "SSR"
    ],
    "description": "A business-platform website, migrated from Vue 3 to Nuxt with SSR and TypeScript.",
    "image": "/static/projects/rintisan.webp",
    "url": "https://rintisan.co.id"
  },
  {
    "title": "Rintisan Billing",
    "previewDescription": "An invoicing and payments dashboard, migrated to Nuxt with TanStack Query.",
    "subtitle": "Invoicing & payments",
    "kind": "Web app",
    "year": "2025",
    "category": "professional",
    "role": "Fullstack Engineer",
    "tech": [
      "Nuxt.js",
      "TypeScript",
      "TanStack Query"
    ],
    "description": "An invoicing and payments dashboard, migrated to Nuxt and TypeScript with TanStack Query for client-side caching.",
    "image": "/static/projects/billing.webp",
    "url": "https://billing.rintisan.co.id"
  },
  {
    "title": "Daruma",
    "previewDescription": "A B2B commerce platform with catalog, ordering, and payment flows.",
    "subtitle": "B2B e-commerce",
    "kind": "Web app",
    "year": "2023",
    "category": "professional",
    "role": "Frontend Engineer",
    "tech": [
      "Nuxt.js",
      "TypeScript",
      "Nginx"
    ],
    "description": "A B2B commerce platform for industrial, office, and business supplies, with catalog, ordering, and payment flows.",
    "image": "/static/projects/daruma.webp",
    "url": "https://daruma.co.id"
  },
  {
    "title": "RasaRasa",
    "previewDescription": "A foodcourt website connecting culinary spaces, food brands, and events.",
    "subtitle": "Foodcourt & culinary spaces",
    "kind": "Website",
    "category": "professional",
    "role": "Website Developer",
    "tech": [],
    "description": "A foodcourt-management website connecting culinary spaces, food brands, digital ordering, and thematic events.",
    "image": "/static/projects/rasarasa.webp",
    "url": "https://rasarasa.co.id"
  },
  {
    "title": "Yuk Puncak",
    "previewDescription": "Villa booking with web, admin, API, and mobile apps. Built solo.",
    "subtitle": "Villa booking platform",
    "kind": "Product",
    "year": "2026",
    "category": "experiment",
    "role": "Solo Engineer",
    "tech": [
      "Next.js",
      "Hono",
      "PostgreSQL",
      "Redis",
      "Kotlin Multiplatform",
      "Dokploy"
    ],
    "description": "A villa-booking and property-management platform, built solo across customer web, admin tools, API, mobile apps on both stores, and infrastructure.",
    "image": "/static/projects/yukpuncak.webp",
    "url": "https://yukpuncak.com"
  },
  {
    "title": "Pixelleven",
    "previewDescription": "Photobooth system: a .NET camera app, dashboard, and API.",
    "subtitle": "Photobooth system",
    "kind": "Product",
    "year": "2026",
    "category": "experiment",
    "role": "Solo Engineer",
    "tech": [
      ".NET",
      "Next.js",
      "Hono"
    ],
    "description": "A photobooth system: a Windows app in .NET that controls a Canon DSLR for capture and printing, plus a dashboard and API for event sessions.",
    "image": "/static/projects/pixelleven.webp",
    "url": "https://pixelleven.id"
  },
  {
    "title": "Kasheer",
    "previewDescription": "A product website and seller dashboard for an F&B point-of-sale tool.",
    "subtitle": "F&B point-of-sale website",
    "kind": "Website",
    "year": "2025",
    "category": "professional",
    "role": "Website Developer",
    "tech": [],
    "description": "A product website and seller dashboard for an F&B point-of-sale platform, covering transactions, inventory, and multi-outlet operations.",
    "image": "/static/projects/kasheer.webp",
    "url": "https://kasheer.id"
  },
  {
    "title": "Ground Radar",
    "previewDescription": "A company website rebuilt in Next.js, with an interactive project map.",
    "subtitle": "GPR company website",
    "kind": "Website",
    "year": "2025",
    "category": "professional",
    "role": "Frontend Engineer",
    "tech": [
      "Next.js",
      "TypeScript",
      "Leaflet.js"
    ],
    "description": "A company website rebuilt in Next.js, with an interactive map for exploring ground-penetrating radar projects worldwide.",
    "image": "/static/projects/groundradar.webp",
    "url": "https://groundradar.com"
  },
  {
    "title": "Geolitix",
    "previewDescription": "Company site for cloud-based GPR analysis, built on Next.js and Sanity.",
    "subtitle": "Cloud-based GPR analysis",
    "kind": "Website",
    "year": "2024",
    "category": "professional",
    "role": "Fullstack Engineer",
    "tech": [
      "Next.js",
      "Sanity CMS",
      "TypeScript",
      "AWS Amplify"
    ],
    "description": "A CMS-powered company website introducing cloud-based GPR analysis, product capabilities, and trial entry points.",
    "image": "/static/projects/geolitix.webp",
    "url": "https://geolitix.com"
  },
  {
    "title": "YesDok",
    "previewDescription": "A telemedicine platform with online consultations and real-time video.",
    "subtitle": "Telemedicine platform",
    "kind": "Web app",
    "year": "2022",
    "category": "professional",
    "role": "Lead Web Developer",
    "tech": [
      "Nuxt.js",
      "Hono",
      "TypeScript",
      "WebRTC",
      "LiveKit"
    ],
    "description": "A telemedicine platform connecting patients and doctors through online consultations and real-time video.",
    "image": "/static/projects/yesdok.webp",
    "url": "https://yesdok.com"
  },
  {
    "title": "Sign-it",
    "previewDescription": "Digital document signing with PERURI e-Meterai integration.",
    "subtitle": "Digital document signing",
    "kind": "Web app",
    "year": "2023",
    "category": "professional",
    "role": "Frontend Engineer",
    "tech": [
      "Vue.js",
      "InteractJS",
      "Docker",
      "GCP"
    ],
    "description": "A live digital document-signing platform with signing flows, admin dashboards, and PERURI e-Meterai integration.",
    "image": "/static/projects/signit.webp",
    "url": "https://sign-it.id"
  },
  {
    "title": "ASA Indonesia",
    "previewDescription": "A consultancy website with services, client stories, and an enquiry flow.",
    "subtitle": "Customer-experience consultancy",
    "kind": "Website",
    "year": "2023",
    "category": "professional",
    "role": "Frontend Engineer",
    "tech": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST API"
    ],
    "description": "A consultancy website presenting customer-experience services, client stories, and a guided enquiry flow.",
    "image": "/static/projects/asa.webp",
    "url": "https://asaindonesia.net"
  }
];

export const experiences: Experience[] = [
  { company: "YesDok", role: "Lead Web Developer", period: "2022 — Now", logo: "/static/logos/yesdok.png" },
  { company: "Rintisan", role: "Fullstack Engineer, contract", period: "2025 — Now", logo: "/static/logos/rintisan.png" },
  { company: "Freelance", role: "Fullstack Developer", period: "2023 — Now" },
  { company: "Daruma", role: "Frontend Engineer, contract", period: "2022 — 2023", logo: "/static/logos/daruma.png" },
  { company: "Nashta Global Utama", role: "Fullstack Developer", period: "2021", logo: "/static/logos/nashta.png" },
];

export const contact = {
  email: "ivanrozack@gmail.com",
  whatsapp: "https://wa.me/6281234136030",
  linkedin: "https://www.linkedin.com/in/ivan-rozak/",
  github: "https://github.com/ivanrozak/",
  resumePdf: "/Ivan_Rozak_CV.pdf",
};
