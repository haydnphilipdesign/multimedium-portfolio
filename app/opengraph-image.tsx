import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
                        "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,179,75,0.26), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 65%, rgba(120,145,196,0.2), transparent 55%), radial-gradient(ellipse 50% 35% at 10% 85%, rgba(153,164,188,0.16), transparent 55%)",
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
                        Haydn — Web Design &amp; Development
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
                            flexWrap: "wrap",
                            alignItems: "baseline",
                            gap: 18,
                            fontSize: 76,
                            fontWeight: 800,
                            letterSpacing: -1.5,
                            lineHeight: 1.05,
                            color: "rgba(255,255,255,0.95)",
                        }}
                    >
                        <span>Websites that</span>
                        <span style={{ color: "#e8b34b" }}>win trust.</span>
                    </div>
                    <div
                        style={{
                            marginTop: 22,
                            fontSize: 28,
                            lineHeight: 1.35,
                            color: "rgba(255,255,255,0.65)",
                        }}
                    >
                        Clear messaging, premium design, and fast pages that turn
                        visitors into inquiries.
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
                        www.multimedium.dev
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "12px 16px",
                            borderRadius: 999,
                            border: "1px solid rgba(232,179,75,0.35)",
                            backgroundColor: "rgba(232,179,75,0.14)",
                            color: "rgba(255,255,255,0.85)",
                            fontSize: 18,
                            fontWeight: 600,
                        }}
                    >
                        Available for new projects
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
