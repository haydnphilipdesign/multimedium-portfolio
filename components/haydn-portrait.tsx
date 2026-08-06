import Image from "next/image";

const alt = "Haydn Watkins, founder and web designer at Multimedium";

type HaydnPortraitProps = {
    fill?: boolean;
    sizes: string;
    priority?: boolean;
    className?: string;
};

export function HaydnPortrait({
    fill = false,
    sizes,
    priority = false,
    className,
}: HaydnPortraitProps) {
    return (
        <picture>
            <source
                media="(max-width: 767px)"
                srcSet="/images/haydn-portrait/haydn-portrait-mobile.webp"
            />
            {fill ? (
                <Image
                    src="/images/haydn-portrait/haydn-portrait-desktop.webp"
                    alt={alt}
                    fill
                    className={className}
                    sizes={sizes}
                    priority={priority}
                />
            ) : (
                <Image
                    src="/images/haydn-portrait/haydn-portrait-desktop.webp"
                    alt={alt}
                    width={1600}
                    height={2000}
                    className={className}
                    sizes={sizes}
                    priority={priority}
                />
            )}
        </picture>
    );
}
