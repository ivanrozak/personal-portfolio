import type { Metadata } from "next";

export const socialTitle = "Ivan Rozak — Fullstack Engineer";
export const socialDescription = "Websites, web apps, and real-time systems—from the first interface to production.";
export const socialImageAlt = "Ivan Rozak, fullstack engineer. Your next idea. Built for the real world.";

export const openGraphDefaults: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  url: "/",
  title: socialTitle,
  description: socialDescription,
  siteName: "Ivan Rozak",
  images: [{ url: "/social/portfolio-og-v2.png", width: 1200, height: 630, type: "image/png", alt: socialImageAlt }],
};

export const twitterDefaults: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  title: socialTitle,
  description: socialDescription,
  images: [{ url: "/social/portfolio-twitter-v2.png", width: 1200, height: 600, alt: socialImageAlt }],
};
