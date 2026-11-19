import type { Metadata } from "next";

export const socialTitle = "Ivan Rozak — Software Engineer";
export const socialDescription = "Software engineer from Jakarta, 5+ years in. Web, mobile, desktop, and real-time video, from the first screen to the server.";
export const socialImageAlt = "Ivan Rozak, software engineer. Hi, I’m Ivan. I like building useful software.";

export const openGraphDefaults: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  url: "/",
  title: socialTitle,
  description: socialDescription,
  siteName: "Ivan Rozak",
  images: [{ url: "/social/portfolio-og-v4.png", width: 1200, height: 630, type: "image/png", alt: socialImageAlt }],
};

export const twitterDefaults: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  title: socialTitle,
  description: socialDescription,
  images: [{ url: "/social/portfolio-twitter-v4.png", width: 1200, height: 600, alt: socialImageAlt }],
};
