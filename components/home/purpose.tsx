import { Motif } from "@/components/motion/motif";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homePage } from "@/content/home";

export function Purpose() {
  const { purpose } = homePage;
  const words = purpose.values.map((value) => value.word);

  return (
    <section aria-labelledby="purpose-title" className="relative overflow-hidden border-b border-border bg-paper">
      <Motif className="-top-10 -right-6 h-72 w-64 opacity-[0.12]" />
      <Motif className="bottom-24 -left-16 h-72 w-64 opacity-[0.08]" tone="deep" />

      <Container className="relative py-16 lg:py-28">
        <p id="purpose-title" className="eyebrow text-deep">
          {purpose.eyebrow}
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <p aria-hidden className="text-outline font-display text-[clamp(4rem,13vw,10rem)] leading-[0.8] tracking-[-0.05em] uppercase">
              Mission
            </p>
            <h2 className="sr-only">{purpose.mission.label}</h2>
            <p className="mt-6 max-w-xl border-l-4 border-forest pl-5 font-display text-h3 leading-[1.25] text-ink">
              {purpose.mission.statement}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:mt-40">
            <p aria-hidden className="font-display text-[clamp(4rem,13vw,10rem)] leading-[0.8] tracking-[-0.05em] text-forest uppercase">
              Vision
            </p>
            <h2 className="sr-only">{purpose.vision.label}</h2>
            <p className="mt-6 max-w-xl border-l-4 border-ink pl-5 font-display text-h3 leading-[1.25] text-ink">
              {purpose.vision.statement}
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {purpose.values.map((value, index) => (
            <li key={value.word} className="group bg-paper p-6 transition-colors duration-300 hover:bg-deep hover:text-white">
              <p className="font-display text-small text-forest group-hover:text-white/70">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-h3">{value.word}</h3>
              <p className="mt-2 text-small text-ink/75 group-hover:text-white/85">{value.line}</p>
            </li>
          ))}
        </ul>
      </Container>

      <div aria-hidden className="marquee border-t border-border bg-deep py-4 text-white">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0 items-center">
              {[...words, ...words].map((word, index) => (
                <span key={`${word}-${index}`} className="flex items-center font-display text-h2 uppercase">
                  <span className="px-6">{word}</span>
                  <span className="h-3 w-3 rounded-full bg-campaign-ball" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
