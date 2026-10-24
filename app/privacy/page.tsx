import Link from "next/link";
import { PolicyPage, type PolicySection } from "@/components/editorial/policy-page";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy and data protection",
  description:
    "How Samaa Charity Projects collects, uses, protects and shares personal information, and the rights you have over it.",
  path: "/privacy",
});

const list = "list-disc space-y-2 pl-5 marker:text-forest";
const link = "font-medium text-deep underline decoration-deep/30 underline-offset-4";

const sections: PolicySection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Samaa Charity Projects (&ldquo;Samaa&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) works
          towards education, health and empowerment for people and communities across Africa. We
          are the data controller for the personal information described on this page.
        </p>
        <p>
          We handle personal information in line with Ghana&apos;s Data Protection Act, 2012 (Act
          843), and with the data protection laws of any other country where we work or raise
          funds. This notice is reviewed by our board each year, and whenever the way we work
          changes.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>We only ask for what we need for the thing you are doing. That means:</p>
        <ul className={list}>
          <li>
            <strong>Enquiries.</strong> Your name, email address, the type of enquiry and your
            message, from the contact, Get Involved and campaign forms.
          </li>
          <li>
            <strong>Donations.</strong> Your name (unless you give anonymously), email address,
            the cause you choose and the amount. Card and Mobile Money details are entered on our
            payment provider&apos;s secure page and never reach this website.
          </li>
          <li>
            <strong>Susu Box requests.</strong> Your name, email, an optional phone number, the
            name and type of the place, the area and town, and how many boxes you would like.
          </li>
          <li>
            <strong>Event attendance.</strong> Your name and email when you request a place at an
            event such as Red for a Reason.
          </li>
          <li>
            <strong>Volunteers and partners.</strong> Contact details and, where a role involves
            children or vulnerable adults, the safer-recruitment checks described in our{" "}
            <Link href="/safeguarding" className={link}>
              safeguarding policy
            </Link>
            .
          </li>
        </ul>
        <p>
          We do not ask for health information. Please do not include symptoms, test results or
          other medical details in any form.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use it, and why we are allowed to",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul className={list}>
          <li>reply to you and keep a record of what was agreed;</li>
          <li>process and acknowledge donations, issue receipts, and meet our financial and legal obligations;</li>
          <li>deliver, collect and account for Susu Boxes;</li>
          <li>arrange events, volunteering and partnerships;</li>
          <li>keep children and vulnerable adults safe.</li>
        </ul>
        <p>
          We rely on your <strong>consent</strong> (for example, when you send a form), on what
          is needed to carry out something you asked for, on our <strong>legal obligations</strong>{" "}
          (for example, financial records), and on our <strong>legitimate interest</strong> in
          running a well-governed charity. You can withdraw consent at any time.
        </p>
        <p>
          We will only send you news or appeals if you have said yes. Every message will tell you
          how to stop them.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We never sell or rent personal information. We share it only with service providers who
          help us run the charity, under written terms that require them to protect it:
        </p>
        <ul className={list}>
          <li>
            our <strong>payment provider</strong>, which takes and confirms online payments and
            sends its own receipt;
          </li>
          <li>
            our <strong>email delivery service</strong>, which forwards form messages to our team;
          </li>
          <li>our website host.</li>
        </ul>
        <p>
          We may also share information when the law requires it, or when it is needed to protect
          someone from harm, as set out in our safeguarding policy.
        </p>
        <p>
          Some of these providers store data outside Ghana. Where that happens, we choose providers
          that apply protections at least as strong as those required in Ghana.
        </p>
      </>
    ),
  },
  {
    id: "keeping-it-safe",
    title: "Keeping it safe, and for how long",
    body: (
      <>
        <p>
          Form messages are sent securely to our team and are not kept in a database on this
          website. If a message cannot be sent, the form says so and nothing is stored. Access to
          personal information is limited to the people who need it.
        </p>
        <p>We keep information only as long as we need it:</p>
        <ul className={list}>
          <li>donation and financial records: for as long as the law requires, usually six years;</li>
          <li>enquiries: up to two years after our last contact;</li>
          <li>Susu Box records: for as long as you host a box, then six years for the financial record;</li>
          <li>safeguarding records: for as long as is needed to protect the people involved.</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul className={list}>
          <li>ask what personal information we hold about you and get a copy;</li>
          <li>ask us to correct anything that is wrong;</li>
          <li>ask us to delete it, where we are not required to keep it;</li>
          <li>object to, or ask us to limit, how we use it;</li>
          <li>withdraw your consent at any time.</li>
        </ul>
        <p>
          To use any of these rights, write to us through the{" "}
          <Link href="/contact?topic=question" className={link}>
            contact form
          </Link>{" "}
          with &ldquo;Data request&rdquo; in your message. We will reply within 30 days. If you
          are not happy with our answer, you can complain to the{" "}
          <a href="https://dataprotection.org.gh" className={link} rel="noreferrer noopener" target="_blank">
            Data Protection Commission of Ghana
          </a>
          , or to the data protection authority where you live.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: (
      <p>
        This website does not use advertising or analytics cookies, and it does not track you
        across other sites. It uses your browser&apos;s session storage to remember small things
        for the length of your visit, such as whether you closed the event notice. That
        information stays on your device.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our forms are meant for adults. We do not knowingly collect personal information from
        anyone under 18 without the consent of a parent or guardian. We never publish the name,
        photograph or story of a child we support without that consent, and we never identify a
        child&apos;s health condition.
      </p>
    ),
  },
  {
    id: "health-information",
    title: "Health information on this site",
    body: (
      <p>
        Pages about sickle cell disease, mental health and women&apos;s health are for general
        awareness. They cite public health authorities and show the date they were reviewed. They
        are not personal medical advice, and Samaa Charity Projects does not provide medical care,
        testing, counselling, therapy or crisis support. These pages do not collect information
        about your health.
      </p>
    ),
  },
  {
    id: "photographs",
    title: "Photographs",
    body: (
      <>
        <p>
          Photographs illustrate the subjects on this site. They are not records of Samaa Charity
          Projects&apos; work, and the people in them are not staff, partners or participants.
          Credits are listed where the photographer is known.
        </p>
        <ul className="space-y-5">
          {Object.values(images).map((image) => {
            const creditHref = "creditHref" in image ? image.creditHref : undefined;
            return (
              <li key={image.src}>
                {creditHref ? (
                  <a href={creditHref} className={`text-small ${link}`} rel="noreferrer noopener" target="_blank">
                    {image.caption}
                  </a>
                ) : (
                  <p className="text-small font-medium">{image.caption}</p>
                )}
                <p className="mt-1 text-caption text-ink/75">{image.alt}</p>
              </li>
            );
          })}
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this notice",
    body: (
      <p>
        If we change how we use personal information, we will update this page and the date at
        the top. Significant changes will be highlighted here.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy and data protection"
      title="Your information, handled with care."
      lede="This notice explains what personal information Samaa Charity Projects collects, why, how we look after it, and the rights you have over it."
      updated="24 October 2026"
      sections={sections}
    />
  );
}
