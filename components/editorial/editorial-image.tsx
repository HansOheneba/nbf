import Image from "next/image";
import type { GalleryImage } from "@/content/images";
import { cn } from "@/lib/cn";

export function EditorialImage({
  image,
  sizes,
  aspect = "aspect-[4/5]",
  priority = false,
  position = "object-center",
  className,
}: {
  image: GalleryImage;
  sizes: string;
  aspect?: string;
  priority?: boolean;
  position?: string;
  className?: string;
}) {
  return (
    <div className={cn("group", className)}>
      <div className={cn("relative overflow-hidden bg-muted", aspect)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]",
            position,
          )}
        />
      </div>
    </div>
  );
}
