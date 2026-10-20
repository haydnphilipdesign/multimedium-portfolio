import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
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
          background: "#f6f5f0",
          color: "#192e3b",
          padding: 70,
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
          multimedium.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: -4,
            lineHeight: 1.08,
          }}
        >
          <span>Websites for the people who get</span>
          <span style={{ color: "#204bcc" }}>deals to the closing table.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 23,
          }}
        >
          <span>For transaction coordinators, agents & brokerages</span>
          <span>multimedium.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
