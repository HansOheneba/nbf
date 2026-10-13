import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/site/logo";

export function CtaBand({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text?: string;
  href: string;
  label: string;
}) {
  return (
    <section className="surface-deep bg-deep text-white">
      <Container className="py-20 lg:py-28">
        <Logo variant="light" className="mb-8 h-16 w-16" />
        <h2 className="max-w-5xl text-display">{title}</h2>
        <div className="mt-8 max-w-xl bg-paper p-6 text-ink sm:p-8">
          {text ? <p className="text-body-lg">{text}</p> : null}
          <div className={text ? "mt-6" : undefined}>
            <ButtonLink href={href}>{label}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
