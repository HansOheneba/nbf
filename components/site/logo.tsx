import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "mark" | "icon";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "mark", className, priority = false }: LogoProps) {
  const icon = variant === "icon";

  return (
    <Image
      src={icon ? "/logos/icon_logo.png" : "/logos/NBF_logo.png"}
      alt=""
      width={icon ? 1971 : 1080}
      height={icon ? 1944 : 1080}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
