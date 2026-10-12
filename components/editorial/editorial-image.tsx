import Image from "next/image";
import type { GalleryImage } from "@/content/images";
import { cn } from "@/lib/cn";

export function EditorialImage({
  image,
  sizes,
  aspect = "aspect-[4/5]",
  priority = false,
  className,
  captionClassName,
}: {
  image: GalleryImage;
  sizes: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
  captionClassName?: string;
}) {
  return (
    <figure className={cn("group", className)}>
      <div className={cn("relative overflow-hidden bg-muted", aspect)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className={cn("mt-3 text-caption text-muted-foreground", captionClassName)}>
        <a href={image.creditHref} className="underline decoration-border underline-offset-2">
          {image.caption}
        </a>
      </figcaption>
    </figure>
  );
}
