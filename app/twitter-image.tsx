import { renderSocialImage } from "@/lib/social-image";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "Ivan Rozak, fullstack engineer. Your next idea. Built for the real world.";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return renderSocialImage(600);
}
