export type ProjectCategory = "professional" | "experiment" | "team" | "open-source";

export interface Project {
  title: string;
  subtitle?: string;
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

export const portfolioTagline = "A collection of websites and products I’ve helped build.";

export const projects: Project[] = [
  {
    "title": "Rintisan",
    "previewDescription": "A clearer home for digital business products and services.",
    "subtitle": "Business platform website",
    "year": "2023",
    "category": "professional",
    "role": "Frontend Engineer",
    "tech": [
      "Nuxt.js",
      "TypeScript",
      "SSR"
    ],
    "description": "A business-platform website bringing digital products and services into one clear online presence.",
    "image": "/static/projects/rintisan.webp",
    "url": "https://rintisan.co.id"
  },
  {
    "title": "Rintisan Billing",
    "subtitle": "Invoicing & payments",
    "year": "2023",
    "category": "professional",
    "role": "Frontend Engineer",
    "tech": [
      "Nuxt.js",
      "TypeScript",
      "TanStack Query"
    ],
    "description": "An invoicing and payments product, with a dashboard migrated to Nuxt, TypeScript, and TanStack Query.",
    "image": "/static/projects/billing.webp",
    "url": "https://billing.rintisan.co.id"
  },
  {
    "title": "Daruma",
    "subtitle": "B2B e-commerce",
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
    "previewDescription": "A website connecting culinary spaces, food brands, and thematic events.",
    "subtitle": "Foodcourt & culinary spaces",
    "category": "professional",
    "role": "Website Developer",
    "tech": [],
    "description": "A foodcourt-management website connecting culinary spaces, food brands, digital ordering, and thematic events.",
    "image": "/static/projects/rasarasa.webp",
    "url": "https://rasarasa.co.id"
  },
  {
    "title": "Yuk Puncak",
    "previewDescription": "A villa-booking platform, built from customer experience to infrastructure.",
    "subtitle": "Villa booking platform",
    "year": "2026",
    "category": "experiment",
    "role": "Solo Engineer",
    "tech": [
      "Next.js",
      "Hono",
      "React Native",
      "PostgreSQL",
      "Redis",
      "Dokploy"
    ],
    "description": "A villa-booking and property-management platform, built solo across customer web, admin tools, API, mobile, and infrastructure.",
    "image": "/static/projects/yukpuncak.webp",
    "url": "https://yukpuncak.com"
  },
  {
    "title": "Pixelleven",
    "previewDescription": "A personal photobooth project for memorable events.",
    "subtitle": "Photobooth experience",
    "category": "experiment",
    "role": "Independent Project",
    "tech": [],
    "description": "A personal photobooth venture with event packages, custom-frame inspiration, and a clear path to WhatsApp booking.",
    "image": "/static/projects/pixelleven.webp",
    "url": "https://pixelleven.id"
  },
  {
    "title": "Kasheer",
    "previewDescription": "A product website for F&B point-of-sale and inventory tools.",
    "subtitle": "F&B point-of-sale website",
    "category": "professional",
    "role": "Website Developer",
    "tech": [],
    "description": "A product website for an F&B point-of-sale platform, presenting transactions, inventory, and multi-outlet operations.",
    "image": "/static/projects/kasheer.webp",
    "url": "https://kasheer.id"
  },
  {
    "title": "Ground Radar",
    "subtitle": "GPR company website",
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
    "subtitle": "Cloud-based GPR analysis",
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
    "subtitle": "Telemedicine platform",
    "year": "2023",
    "category": "professional",
    "role": "Fullstack Developer",
    "tech": [
      "Nuxt.js",
      "NestJS",
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
    "previewDescription": "Upload, annotate, and sign digital documents online.",
    "subtitle": "Digital document signing",
    "year": "2023",
    "category": "professional",
    "role": "Frontend Engineer",
    "tech": [
      "Vue.js",
      "InteractJS",
      "Docker",
      "GCP"
    ],
    "description": "A digital document-signing platform with tools to upload, annotate, and sign PDFs online.",
    "image": "/static/projects/signit.webp",
    "url": "https://sign-it.id"
  },
  {
    "title": "ASA Indonesia",
    "subtitle": "Customer-experience consultancy",
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
