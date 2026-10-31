/* eslint-disable @next/next/no-img-element -- ImageResponse requires plain image elements. */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const assets = Promise.all([
  readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf")),
  readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf")),
  readFile(join(process.cwd(), "public/static/social-portrait.png")),
]);

export async function renderSocialImage(height: 600 | 630) {
  const [regular, medium, portrait] = await assets;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "48px 60px 36px", background: "#ffffff", color: "#121212", fontFamily: "Geist" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 500, letterSpacing: -1 }}>ivan rozak.</div>
        <div style={{ display: "flex", fontSize: 18, color: "#646464" }}>Fullstack Engineer · Jakarta, Indonesia</div>
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 650, fontSize: 76, fontWeight: 500, lineHeight: 1.04, letterSpacing: -3 }}>
          <div style={{ display: "flex" }}>Your next idea.</div>
          <div style={{ display: "flex" }}>Built for the</div>
          <div style={{ display: "flex" }}>real world.</div>
        </div>
        <div style={{ display: "flex", width: 340, height: 340, alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1px solid #e4e4e7", padding: 18 }}>
          <div style={{ display: "flex", width: 302, height: 302, borderRadius: "50%", overflow: "hidden", background: "#ededed" }}>
            <img src={`data:image/png;base64,${portrait.toString("base64")}`} width={302} height={302} style={{ objectFit: "cover" }} alt="Ivan Rozak" />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #e4e4e7", paddingTop: 22, fontSize: 17 }}>
        <div style={{ display: "flex", color: "#646464" }}>Websites. Web apps. Real-time systems.</div>
        <div style={{ display: "flex", fontWeight: 500 }}>ivan-rozak.vercel.app</div>
      </div>
    </div>,
    {
      width: 1200,
      height,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
