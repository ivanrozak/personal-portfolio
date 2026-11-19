// Renders the favicon set from public/favicon.svg: `node scripts/generate-favicons.mjs` (needs the Playwright browser).
import { readFile, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

const publicDir = new URL("../public/", import.meta.url);
const round = await readFile(new URL("favicon.svg", publicDir), "utf8");
// Apple and Android crop icons to their own shape, so those get the disc's ground as a full-bleed square.
const square = round.replace(/<circle cx="256" cy="256" r="254"[^>]*\/>/, '<rect width="512" height="512" fill="url(#disc)"/>');

const browser = await chromium.launch();
const page = await browser.newPage();
const render = async (svg, size) => {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<html><body style="margin:0;background:transparent">${svg.replace("<svg ", `<svg width="${size}" height="${size}" `)}</body></html>`);
  return page.locator("svg").screenshot({ omitBackground: true });
};

const outputs = [
  ["favicon-16x16.png", round, 16],
  ["favicon-32x32.png", round, 32],
  ["apple-touch-icon.png", square, 180],
  ["web-app-manifest-192x192.png", square, 192],
  ["web-app-manifest-512x512.png", square, 512],
];
for (const [name, svg, size] of outputs) await writeFile(new URL(name, publicDir), await render(svg, size));

// favicon.ico holding PNG-encoded 16, 32 and 48 px images.
const images = [];
for (const size of [16, 32, 48]) images.push({ size, data: await render(round, size) });
const header = Buffer.alloc(6 + images.length * 16);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach(({ size, data }, i) => {
  const entry = 6 + i * 16;
  header.writeUInt8(size, entry); header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4); header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(data.length, entry + 8); header.writeUInt32LE(offset, entry + 12);
  offset += data.length;
});
await writeFile(new URL("favicon.ico", publicDir), Buffer.concat([header, ...images.map(image => image.data)]));
await browser.close();
console.log("Favicons written to public/");
