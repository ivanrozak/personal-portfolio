/* eslint-disable @next/next/no-img-element -- ImageResponse requires plain image elements. */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const assets = Promise.all([
  readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf")),
  readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf")),
  readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.ttf")),
  readFile(join(process.cwd(), "public/static/social-portrait.png")),
]);

export async function renderSocialImage(height: 600 | 630) {
  const [regular, medium, mono, portrait] = await assets;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", padding: "0 120px", background: "#0a0a0a", color: "#ededed", fontFamily: "Geist" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, borderLeft: "1px solid #1c1c1c", borderRight: "1px solid #1c1c1c", backgroundImage: "radial-gradient(ellipse at 50% 0%, #ffffff14 0%, transparent 60%)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: "1px solid #1c1c1c" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, fontWeight: 500 }}>
            <img src={`data:image/png;base64,${portrait.toString("base64")}`} width={40} height={40} style={{ borderRadius: 40, objectFit: "cover" }} alt="Ivan Rozak" />
            Ivan Rozak
          </div>
          <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 16, letterSpacing: 2, color: "#8f8f8f" }}>JAKARTA, ID · GMT+7</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "0 48px", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 500, lineHeight: 1.04, letterSpacing: -3 }}>
            <div style={{ display: "flex" }}>Hi, I’m Ivan.</div>
            <div style={{ display: "flex", color: "#8f8f8f" }}>I turn ideas into working software.</div>
          </div>
          <div style={{ display: "flex", fontSize: 24, lineHeight: 1.5, color: "#8f8f8f" }}>Software engineer · Web, mobile, desktop, and real-time video</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderTop: "1px solid #1c1c1c", fontFamily: "Geist Mono", fontSize: 16, letterSpacing: 2, color: "#8f8f8f" }}>
          <div style={{ display: "flex" }}>OPEN FOR NEW PROJECTS</div>
          <div style={{ display: "flex", color: "#ededed" }}>IVANROZAK.COM</div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
