import { ImageResponse } from "next/og";

type SocialImageCardInput = {
    width: number;
    height: number;
    brand: string;
    eyebrow: string;
    title: string;
    description: string;
    footerLeft: string;
    badge: string;
};

export function createSocialImageCard({
    width,
    height,
    brand,
    eyebrow,
    title,
    description,
    footerLeft,
    badge,
}: SocialImageCardInput) {
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
                        gap: 24,
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
                        {brand}
                    </div>
                    <div
                        style={{
                            fontSize: 20,
                            color: "rgba(255,255,255,0.65)",
                            textTransform: "uppercase",
                            letterSpacing: 1.2,
                        }}
                    >
                        {eyebrow}
                    </div>
                </div>

                <div
                    style={{
                        maxWidth: width - 180,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            fontSize: height >= 630 ? 76 : 68,
                            fontWeight: 800,
                            letterSpacing: -1.8,
                            lineHeight: 1.02,
                            color: "rgba(255,255,255,0.96)",
                            textWrap: "balance",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            marginTop: 22,
                            fontSize: 28,
                            lineHeight: 1.35,
                            color: "rgba(255,255,255,0.7)",
                            textWrap: "balance",
                        }}
                    >
                        {description}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 24,
                    }}
                >
                    <div
                        style={{
                            fontSize: 20,
                            color: "rgba(255,255,255,0.65)",
                        }}
                    >
                        {footerLeft}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px 16px",
                            borderRadius: 999,
                            border: "1px solid rgba(232,179,75,0.35)",
                            backgroundColor: "rgba(232,179,75,0.14)",
                            color: "rgba(255,255,255,0.88)",
                            fontSize: 18,
                            fontWeight: 600,
                        }}
                    >
                        {badge}
                    </div>
                </div>
            </div>
        ),
        {
            width,
            height,
        }
    );
}
