import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 lg:py-36">
      <p className="eyebrow text-deep">404</p>
      <h1 className="mt-4 max-w-3xl text-h1">This page is not on the site.</h1>
      <p className="mt-5 max-w-xl text-body-lg text-ink/80">
        The address may be mistyped, or the page may have moved.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to the homepage</ButtonLink>
      </div>
    </Container>
  );
}
