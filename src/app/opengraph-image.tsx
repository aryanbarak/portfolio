import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered from the site's own colors and copy — no static asset and no
// third-party font/CDN fetch. Uses the ImageResponse default font.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#070810",
          color: "#f4f4f7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7c6cf2",
          }}
        >
          <div style={{ width: 40, height: 2, backgroundColor: "#7c6cf2" }} />
          Software Developer
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1.05 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 32, color: "#94a3b8", maxWidth: 900 }}>{siteConfig.tagline}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
