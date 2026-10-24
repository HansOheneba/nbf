import { SusuBoxForm } from "@/components/forms/susu-box-form";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { susuBoxPage } from "@/content/susu-box";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Host a Susu Box",
  description: susuBoxPage.lede,
  path: susuBoxPage.path,
});

export default function SusuBoxPage() {
  return (
    <>
      <header className="surface-deep relative overflow-hidden bg-deep text-white">
        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow text-white/75">{susuBoxPage.eyebrow}</p>
            <h1 className="mt-4 text-display">{susuBoxPage.title}</h1>
            <p className="mt-6 max-w-xl text-body-lg text-white/90">{susuBoxPage.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#request" variant="inverse">
                Request a box
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="on-dark">
                How it works
              </ButtonLink>
            </div>
          </div>
          <div className="flex justify-center lg:col-span-5">
            <SusuBoxArt />
          </div>
        </Container>
      </header>

      <section id="how-it-works" className="border-b border-border">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-deep">How it works</p>
            <h2 className="mt-3 text-h1">Four steps, every season.</h2>
            <CycleDial />
          </Reveal>
          <ol className="grid gap-px self-start border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {susuBoxPage.steps.map((step, index) => (
              <li key={step.title} className="bg-paper p-6 sm:p-8">
                <p className="font-display text-h1 text-forest">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-h3">{step.title}</h3>
                <p className="mt-3 text-body text-ink/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-border bg-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
          <h2 className="text-h2 lg:col-span-4">{susuBoxPage.promises.title}</h2>
          <ul className="space-y-4 lg:col-span-7 lg:col-start-6">
            {susuBoxPage.promises.items.map((item) => (
              <li key={item} className="flex gap-4 border-b border-border pb-4 text-body-lg text-ink/85">
                <span aria-hidden className="mt-3 h-2 w-2 shrink-0 rounded-full bg-forest" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="request" className="scroll-mt-24">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <h2 className="text-h2">Request a Susu Box</h2>
            <p className="mt-4 text-body text-ink/80">
              Tell us where the box will live. We will confirm, bring it to you, and agree a
              collection day every three months.
            </p>
          </div>
          <div className="bg-white p-5 sm:p-8 lg:col-span-7 lg:col-start-6">
            <SusuBoxForm />
          </div>
        </Container>
      </section>
    </>
  );
}

/** The collection box, drawn with coins dropping into its slot. */
function SusuBoxArt() {
  const coins = [
    { x: 150, delay: "0s" },
    { x: 170, delay: "1.2s" },
    { x: 160, delay: "2.4s" },
  ];

  return (
    <svg viewBox="0 0 320 320" role="img" aria-label="A sealed Samaa Susu Box with coins dropping into it" className="w-full max-w-sm">
      {/* Shadow */}
      <ellipse cx="160" cy="292" rx="118" ry="12" fill="rgba(0,0,0,0.25)" />
      {/* Top face */}
      <path d="M52 120 L160 82 L268 120 L160 158 Z" fill="#f7f3ed" />
      <path d="M128 116 L192 116" stroke="#171717" strokeWidth="7" strokeLinecap="round" transform="rotate(-19 160 116)" />
      {/* Left face */}
      <path d="M52 120 L160 158 L160 286 L52 248 Z" fill="#efeae3" />
      {/* Right face */}
      <path d="M160 158 L268 120 L268 248 L160 286 Z" fill="#d9d2c8" />
      {/* Ribbon band, patterned like woven cloth */}
      <path d="M52 168 L160 206 L160 236 L52 198 Z" fill="#ef0026" />
      <path d="M160 206 L268 168 L268 198 L160 236 Z" fill="#b5001e" />
      <g stroke="#d9f24b" strokeWidth="3">
        <path d="M66 180 l10 4 M90 189 l10 4 M114 197 l10 4 M138 206 l10 4" />
        <path d="M174 209 l10 -4 M198 201 l10 -4 M222 192 l10 -4 M246 184 l10 -4" />
      </g>
      {/* Label */}
      <text x="106" y="150" textAnchor="middle" transform="skewY(19.4) translate(0 -37)" fontFamily="var(--font-space-grotesk), sans-serif" fontSize="22" fontWeight="600" fill="#171717">
        SAMAA
      </text>
      <text x="214" y="262" textAnchor="middle" transform="skewY(-19.4) translate(0 75)" fontFamily="var(--font-dm-sans), sans-serif" fontSize="12" fontWeight="600" fill="#5c564e" letterSpacing="2">
        No. 001
      </text>
      {/* Coins */}
      {coins.map((coin) => (
        <g key={coin.delay} className="coin-drop" style={{ animationDelay: coin.delay, transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx={coin.x} cy="108" r="13" fill="#f2c14e" stroke="#c9952a" strokeWidth="2.5" />
          <text x={coin.x} y="113" textAnchor="middle" fontSize="13" fontWeight="700" fill="#8a5a12">
            ₵
          </text>
        </g>
      ))}
    </svg>
  );
}

/** A three-month cycle: filling, filling, collection. */
function CycleDial() {
  const r = 70;
  const circumference = 2 * Math.PI * r;
  const segment = circumference / 3;

  return (
    <figure className="mt-10 flex items-center gap-6">
      <svg viewBox="0 0 180 180" aria-hidden="true" className="h-36 w-36 shrink-0 -rotate-90">
        {[0, 1, 2].map((index) => (
          <circle
            key={index}
            cx="90"
            cy="90"
            r={r}
            fill="none"
            stroke={index === 2 ? "var(--forest)" : "var(--border)"}
            strokeWidth="18"
            strokeDasharray={`${segment - 6} ${circumference - segment + 6}`}
            strokeDashoffset={-index * segment}
          />
        ))}
      </svg>
      <figcaption className="text-small text-ink/80">
        <span className="block font-display text-h3 text-ink">3 months</span>
        Two months of filling, then the third ends with a collection. Then it starts again.
      </figcaption>
    </figure>
  );
}
