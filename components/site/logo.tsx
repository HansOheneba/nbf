import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "mark" | "light" | "lockup" | "lockup-light" | "lockup-campaign";
  className?: string;
  priority?: boolean;
};

const sources = {
  mark: { src: "/logos/samaa-mark.png", width: 271, height: 330, alt: "" },
  light: { src: "/logos/samaa-mark-light.png", width: 271, height: 330, alt: "" },
  lockup: {
    src: "/logos/samaa-lockup-campaign.png",
    width: 902,
    height: 330,
    alt: "Samaa Charity Projects",
  },
  "lockup-light": {
    src: "/logos/samaa-lockup-light.png",
    width: 902,
    height: 330,
    alt: "Samaa Charity Projects",
  },
  "lockup-campaign": {
    src: "/logos/samaa-lockup-campaign.png",
    width: 902,
    height: 330,
    alt: "Samaa Charity Projects",
  },
} as const;

export function Logo({ variant = "mark", className, priority = false }: LogoProps) {
  const image = sources[variant];

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
