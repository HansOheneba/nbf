import Link from "next/link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { TextLink } from "@/components/ui/button";
import type { Article } from "@/content/articles";

export function StoryPreview({
  story,
  aspect = "aspect-[4/5]",
  sizes,
}: {
  story: Article;
  aspect?: string;
  sizes: string;
}) {
  return (
    <article>
      <EditorialImage image={story.image} aspect={aspect} sizes={sizes} />
      <p className="mt-4 eyebrow text-deep">{story.kind}</p>
      <h3 className="mt-2 text-h3">
        <Link href={`/stories/${story.slug}`} className="hover:text-deep">
          {story.title}
        </Link>
      </h3>
      <p className="mt-3 text-small text-ink/80">{story.summary}</p>
      <p className="mt-3 text-caption text-muted-foreground">Reviewed {story.reviewDate}</p>
      <div className="mt-4">
        <TextLink href={`/stories/${story.slug}`}>Read the article</TextLink>
      </div>
    </article>
  );
}
