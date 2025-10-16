export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  url: string;
}

export interface Experience {
  position: string;
  company: string;
  logo: string;
  period: string;
}

export const projects: Project[] = [
  {
    title: "Geolitix",
    year: "2024",
    description:
      "Developing cloud-based software for near surface and GPR data analysis. Process large datasets from any GPR instrument on any computer with a browser.",
    image: "/static/mockup_geolitix.jpg",
    url: "https://geolitix.com",
  },
  {
    title: "Ground Radar",
    year: "2025",
    description:
      "Building ground penetrating radar (GPR) technology platform for deep mineral exploration and geotechnical applications using UltraGPR technology.",
    image: "/static/mockup_groundradar.jpg",
    url: "https://groundradar.com",
  },
  {
    title: "Daruma B2B E-Commerce",
    year: "2023",
    description:
      "Developing B2B E-commerce platform where businesses can easily find and purchase a wide range of office tools and supplies.",
    image: "/static/mockup_daruma.jpg",
    url: "https://daruma.co.id",
  },
  {
    title: "YesDok",
    year: "2023",
    description:
      "A health-app video call platform developed using Next.js. Seamlessly connecting users with healthcare professionals.",
    image: "/static/mockup_yesdok.jpg",
    url: "https://yesdok.com",
  },
  {
    title: "Sign-it",
    year: "2023",
    description:
      "Developed a groundbreaking project for digital document signing, this platform streamlines the process of signing PDF documents.",
    image: "/static/mockup_signit.jpg",
    url: "https://sign-it.id",
  },
  {
    title: "ASA Indonesia",
    year: "2023",
    description:
      "Creating customer experience platform that connects businesses with their customers. Building lasting relationships from the first hello to forever connection.",
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
  },
  {
    position: "Front End Engineer",
    company: "Daruma (freelance)",
    logo: "/static/daruma.jpg",
    period: "2023",
  },
  {
    position: "Fullstack Engineer",
    company: "Nashta Global Utama",
    logo: "/static/nashta.jpg",
    period: "2021-2022",
  },
];
