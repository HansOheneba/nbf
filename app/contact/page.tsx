import { EditorialImage } from "@/components/editorial/editorial-image";
import { ContactInquiry } from "@/components/forms/inquiry-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Write to Samaa Charity Projects about a question, a collaboration, or an interest in supporting a cause.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's start a conversation."
        lede={[
          "Have a question, an idea for a collaboration, or an interest in supporting a cause? We'd love to hear from you.",
          "Use the form below to get in touch, and tell us a little about what you'd like to discuss.",
        ]}
      />

      <Container className="grid items-start gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <EditorialImage
            image={images.profile}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div className="mt-8 max-w-md space-y-4 text-body text-ink/80">
            <p>A question about a cause.</p>
            <p>An idea for working together.</p>
            <p>An interest in supporting a cause.</p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="text-h3">Write to us</h2>
          <div className="mt-6">
            <ContactInquiry submitLabel="Send message" />
          </div>
        </div>
      </Container>
    </>
  );
}
