import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

// Run after a Next production build: the compatibility routes render the source.
const distDir = process.argv[2] || ".next";
await mkdir("public/social", { recursive: true });
for (const [route, file] of [
  ["opengraph-image", "portfolio-og-v2.png"],
  ["twitter-image", "portfolio-twitter-v2.png"],
]) {
  await copyFile(join(distDir, "server/app", `${route}.body`), join("public/social", file));
  console.log(`Exported ${file}`);
}
