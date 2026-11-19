export interface ResumeRole {
  company: string;
  place: string;
  period: string;
  role: string;
  logo?: string;
  points: string[];
}

export interface ResumeProduct {
  name: string;
  meta: string;
  url: string;
  stack: string;
  points: string[];
}

export const resumeUpdated = "Nov 2026";

export const resumeSummary =
  "5+ years shipping production systems, mostly in TypeScript, across web, backend, mobile, and infrastructure. I lead the web team at YesDok, a telemedicine platform, and built YukPuncak, a villa booking product, end to end.";

export const focusAreas = [
  { title: "Web apps & dashboards", stack: "Next.js, Nuxt, React, Vue, TypeScript" },
  { title: "Backend & APIs", stack: "Hono, NestJS, Node.js, PostgreSQL, Redis" },
  { title: "Real-time video", stack: "LiveKit, WebRTC, WebSocket" },
  { title: "Mobile & infrastructure", stack: "React Native, Kotlin Multiplatform, Docker, CI/CD" },
];

export const resumeRoles: ResumeRole[] = [
  {
    company: "PT Yesdok Indonesia",
    place: "Jakarta",
    period: "Jan 2022 — Present",
    role: "Lead Web Developer (2023 — Present) · Frontend Developer (2022 — 2023)",
    logo: "/static/logos/yesdok.png",
    points: [
      "Proposed and built the IFG Insurance integration, embedding YesDok’s consultation flow inside IFG’s React Native app through a WebView. It became the company’s most productive B2B channel.",
      "Lead the web team of 3 engineers, reviewing code and running production deployments for products serving about 4,000 live video consultations a month.",
      "Proposed and led the move from browser WebRTC to a self-hosted LiveKit server for consultations and recording. Roughly 1 in 5 recordings were corrupted before; it has not recurred since.",
      "Initiated the migration of the consultation service from PHP to Hono and TypeScript, with the backend team (in progress).",
    ],
  },
  {
    company: "Rintisan",
    place: "Remote",
    period: "Nov 2025 — Present",
    role: "Fullstack Engineer · part-time contract",
    logo: "/static/logos/rintisan.png",
    points: [
      "Building RasaRasa end to end (in development): Hono API on MySQL, Next.js web and admin panel, React Native app.",
      "Migrated the marketing site and billing dashboard from Vue 3 to Nuxt with SSR and TypeScript, adding TanStack Query.",
      "Built the product website and seller dashboard for Kasheer, an F&B point-of-sale and inventory tool.",
    ],
  },
  {
    company: "Daruma",
    place: "B2B e-commerce",
    period: "Dec 2022 — Jun 2023",
    role: "Frontend Engineer · 6-month contract",
    logo: "/static/logos/daruma.png",
    points: [
      "Migrated the B2B e-commerce marketplace for office and industrial supplies from a legacy Java stack to Nuxt, alongside a new Go backend.",
      "Rebuilt the catalog, ordering, and payment flows on the new frontend.",
    ],
  },
  {
    company: "PT Nashta Global Utama",
    place: "Jakarta",
    period: "2021",
    role: "Fullstack Developer",
    logo: "/static/logos/nashta.png",
    points: [
      "Built role-based access control for the Indonesian National Single Window (INSW), the Ministry of Finance system that clears all import and export trade.",
      "Delivered frontend modules for the Indonesian Customs (Bea Cukai) portal within a shared microfrontend architecture.",
    ],
  },
];

export const resumeProducts: ResumeProduct[] = [
  {
    name: "YukPuncak",
    meta: "Villa booking & property management SaaS · 2026",
    url: "https://yukpuncak.com",
    stack: "Next.js · Hono · PostgreSQL · Redis · Kotlin Multiplatform · Docker",
    points: [
      "Booking engine, property management, admin dashboard, REST API, and a mobile app live on the App Store and Google Play. 40 properties live.",
      "Double-booking prevention in three layers: Redis locks on holds, PostgreSQL transactions with date-overlap checks, and expiring pending reservations.",
    ],
  },
  {
    name: "Pixelleven",
    meta: "Photobooth system · 2026",
    url: "https://pixelleven.id",
    stack: ".NET · Next.js · Hono",
    points: [
      "Windows desktop app in .NET that controls a Canon DSLR over PTP for capture and printing. Ran a full live event without failures.",
      "Admin dashboard and API for event sessions; each print carries a QR code that opens the guest’s photos.",
    ],
  },
];

export const freelanceSummary =
  "Sign-it (PERURI e-Meterai integration, live) · Ground Radar · Geolitix (AWS Amplify) · ASA Indonesia";

export const skillRows = [
  { label: "Languages", value: "TypeScript, JavaScript, Kotlin, C#, SQL" },
  { label: "Frontend & mobile", value: "React, Next.js, Vue, Nuxt, Tailwind CSS, React Native, Kotlin Multiplatform" },
  { label: "Backend", value: "Node.js, Hono, NestJS, Express, .NET, REST APIs" },
  { label: "Data", value: "PostgreSQL, MySQL, Redis" },
  { label: "Infrastructure", value: "Docker, Linux VPS, Dokploy, GitHub Actions, Cloudflare, AWS (S3, Amplify), GlitchTip" },
  { label: "Real-time", value: "LiveKit, WebRTC, WebSocket" },
  { label: "Education", value: "B.Eng., Informatics Engineering — Universitas 17 Agustus 1945 Surabaya, 2016 — 2020 · Fullstack Developer Bootcamp — Arkademy, 2020" },
  { label: "Spoken", value: "Indonesian (native) · English (professional working proficiency)" },
];
