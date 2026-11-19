import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ivan Rozak",
    short_name: "IvanRozak",
    start_url: "/",
    icons: [
      {
        src: "/web-app-manifest-192x192.png?v=i",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png?v=i",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#0a0a0a",
    background_color: "#0a0a0a",
    display: "standalone",
  };
}
