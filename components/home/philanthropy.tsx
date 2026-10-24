import { GivingCalculator } from "@/components/home/giving-calculator";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homePage } from "@/content/home";
import { cn } from "@/lib/cn";

export function Philanthropy() {
  const { philanthropy } = homePage;
  const last = philanthropy.story.length - 1;

  return (
    <section aria-labelledby="philanthropy-title" className="surface-ink relative overflow-hidden bg-ink text-paper">
      <Container className="relative py-20 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-campaign-coral">{philanthropy.eyebrow}</p>
          <h2 id="philanthropy-title" className="mt-4 text-h1">
            {philanthropy.title}
          </h2>
          <p className="mt-6 max-w-2xl text-body-lg text-paper/80">{philanthropy.lede}</p>
        </Reveal>

        <ol className="mt-16 space-y-10 lg:mt-24 lg:space-y-14">
          {philanthropy.story.map((step, index) => (
            <li key={step.figure}>
              <Reveal
                delay={60}
                className={cn(
                  "grid gap-2 border-t border-white/15 pt-6 lg:grid-cols-12 lg:items-baseline lg:gap-8",
                  index % 2 === 1 && "lg:pl-[8%]",
                )}
              >
                <p
                  className={cn(
                    "font-display leading-[0.85] tracking-[-0.045em] lg:col-span-7",
                    index === last
                      ? "text-[clamp(3.5rem,11vw,9.5rem)] text-forest"
                      : "text-[clamp(2.75rem,7vw,6rem)] text-white",
                  )}
                >
                  {step.figure}
                </p>
                <p
                  className={cn(
                    "text-body-lg lg:col-span-5",
                    index === last ? "font-display text-h3 text-white" : "text-paper/75",
                  )}
                >
                  {step.line}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-20 lg:mt-28">
          <p className="mx-auto max-w-4xl text-center font-display text-h2 text-balance text-white">
            {philanthropy.close}
          </p>
        </Reveal>

        <Reveal className="mt-16 lg:mt-24">
          <GivingCalculator />
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href={philanthropy.cta.href} variant="inverse">
            {philanthropy.cta.label}
          </ButtonLink>
          <ButtonLink href={philanthropy.secondary.href} variant="on-dark">
            {philanthropy.secondary.label}
          </ButtonLink>
        </div>
        <p className="mt-8 max-w-3xl text-caption text-paper/55">
          {philanthropy.note}{" "}
          <a
            href={philanthropy.sourceHref}
            className="underline underline-offset-2 hover:text-paper"
            rel="noreferrer noopener"
            target="_blank"
          >
            Source
          </a>
        </p>
      </Container>
    </section>
  );
}
