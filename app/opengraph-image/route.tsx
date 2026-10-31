import { renderSocialImage } from "@/lib/social-image";

export const runtime = "nodejs";
export const dynamic = "force-static";

// Compatibility endpoint; sharing metadata uses the versioned public PNG.
export function GET() {
  return renderSocialImage(630);
}
