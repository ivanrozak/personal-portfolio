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
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "40px 60px 30px", background: "#ffffff", color: "#121212", fontFamily: "Geist" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 500, letterSpacing: -1 }}>ivan rozak.</div>
        <div style={{ display: "flex", fontSize: 18, color: "#646464" }}>Fullstack Engineer · Jakarta, Indonesia</div>
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 650 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 70, fontWeight: 500, lineHeight: 1.04, letterSpacing: -2.5 }}>
            <div style={{ display: "flex" }}>Your next idea.</div>
            <div style={{ display: "flex" }}>Built for the</div>
            <div style={{ display: "flex" }}>real world.</div>
          </div>
          <div style={{ display: "flex", marginTop: 20, maxWidth: 540, fontSize: 20, lineHeight: 1.4, color: "#646464" }}>I’m Ivan, a fullstack engineer. From your first idea to a product people can use.</div>
          <div style={{ display: "flex", marginTop: 24, alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", padding: "14px 22px", background: "#121212", color: "white", borderRadius: 40, fontSize: 17 }}>Discuss your project</div>
            <div style={{ display: "flex", fontSize: 17 }}>View my work</div>
          </div>
        </div>
        <div style={{ display: "flex", width: 320, height: 320, alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1px solid #e4e4e7", padding: 18 }}>
          <div style={{ display: "flex", width: 282, height: 282, borderRadius: "50%", overflow: "hidden", background: "#ededed" }}>
            <img src={`data:image/png;base64,${portrait.toString("base64")}`} width={282} height={282} style={{ objectFit: "cover" }} alt="Ivan Rozak" />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #e4e4e7", paddingTop: 22, fontSize: 17 }}>
        <div style={{ display: "flex", color: "#646464" }}>Websites. Web apps. Real-time systems.</div>
        <div style={{ display: "flex", fontWeight: 500 }}>ivanrozak.com</div>
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
