import { StoryPreview } from "@/components/editorial/story-preview";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Stories and resources",
  description:
    "Educational articles on sickle cell disease, sickle cell trait, and knowing your status, each with sources and a review date.",
  path: "/stories",
});

export default function StoriesPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <PageIntro
        eyebrow="Stories and resources"
        title="Knowledge is worth sharing."
        lede={[
          "These articles explain sickle cell disease, the difference between trait and disease, and why a blood test is how a person knows their status.",
          "They are educational pages with sources and a review date. They are not personal stories, and they are not a record of Samaa Charity Projects' activities.",
        ]}
      />

      <Container className="grid gap-16 py-16 lg:grid-cols-12 lg:py-24">
        <Reveal className="lg:col-span-7">
          <StoryPreview
            story={lead}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 54vw, 100vw"
          />
        </Reveal>
        <div className="space-y-14 lg:col-span-4 lg:col-start-9">
          {rest.map((story, index) => (
            <Reveal key={story.slug} delay={index * 80}>
              <StoryPreview
                story={story}
                aspect={index === 0 ? "aspect-[4/5]" : "aspect-[3/2]"}
                sizes="(min-width: 1024px) 28vw, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
