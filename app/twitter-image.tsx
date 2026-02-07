import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 72,
                    backgroundColor: "#0f1218",
                    backgroundImage:
                        "radial-gradient(ellipse 75% 55% at 35% 0%, rgba(232,179,75,0.26), transparent 60%), radial-gradient(ellipse 60% 45% at 90% 80%, rgba(120,145,196,0.2), transparent 55%), radial-gradient(ellipse 55% 40% at 0% 85%, rgba(153,164,188,0.16), transparent 55%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            fontSize: 34,
                            fontWeight: 700,
                            letterSpacing: -0.5,
                            color: "rgba(255,255,255,0.92)",
                        }}
                    >
                        Multimedium
                    </div>
                    <div
                        style={{
                            fontSize: 20,
                            color: "rgba(255,255,255,0.65)",
                        }}
                    >
                        www.multimedium.dev
                    </div>
                </div>

                <div
                    style={{
                        maxWidth: 980,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            fontSize: 72,
                            fontWeight: 800,
                            letterSpacing: -1.5,
                            lineHeight: 1.05,
                            color: "rgba(255,255,255,0.95)",
                        }}
                    >
                        <span>Web design for</span>
                        <span style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
                            <span>TCs + service teams</span>
                            <span style={{ color: "#e8b34b" }}>that need better leads.</span>
                        </span>
                    </div>
                    <div
                        style={{
                            marginTop: 20,
                            fontSize: 28,
                            lineHeight: 1.35,
                            color: "rgba(255,255,255,0.65)",
                        }}
                    >
                        Clear messaging, fast performance, and conversion-focused pages.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            fontSize: 20,
                            color: "rgba(255,255,255,0.65)",
                        }}
                    >
                        Haydn - Poconos, PA (Remote)
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px 16px",
                            borderRadius: 999,
                            border: "1px solid rgba(232,179,75,0.35)",
                            backgroundColor: "rgba(232,179,75,0.14)",
                            color: "rgba(255,255,255,0.85)",
                            fontSize: 18,
                            fontWeight: 600,
                        }}
                    >
                        multimedium.dev
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
