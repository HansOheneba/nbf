import Link from "next/link";
import { PolicyPage, type PolicySection } from "@/components/editorial/policy-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Safeguarding",
  description:
    "How Samaa Charity Projects keeps children and vulnerable adults safe, and how to raise a concern.",
  path: "/safeguarding",
});

const list = "list-disc space-y-2 pl-5 marker:text-forest";
const link = "font-medium text-deep underline decoration-deep/30 underline-offset-4";

const sections: PolicySection[] = [
  {
    id: "commitment",
    title: "Our commitment",
    body: (
      <>
        <p>
          Everyone who comes into contact with Samaa Charity Projects has the right to be safe,
          respected and free from harm, abuse and exploitation. The welfare of children and
          vulnerable adults comes first, ahead of reputation, relationships or fundraising.
        </p>
        <p>
          We have zero tolerance for abuse. Anyone working with us who sees, hears or suspects
          harm has a duty to act. Staying silent is not neutral.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "Who this applies to",
    body: (
      <>
        <p>This policy applies to everyone who acts for Samaa, in person or online:</p>
        <ul className={list}>
          <li>board members, staff and initiative leads;</li>
          <li>volunteers, including event and Susu Box volunteers;</li>
          <li>partners, sponsors, contractors and guests at our events.</li>
        </ul>
        <p>
          A <strong>child</strong> is anyone under 18, as defined by the Children&apos;s Act,
          1998 (Act 560) and the 1992 Constitution of Ghana. A <strong>vulnerable adult</strong>{" "}
          is anyone 18 or over who, for any reason, may be unable to protect themselves from harm
          or exploitation.
        </p>
      </>
    ),
  },
  {
    id: "principles",
    title: "The principles we work by",
    body: (
      <ul className={list}>
        <li>
          <strong>Welfare first.</strong> A child&apos;s physical, emotional and psychological
          wellbeing comes before anything else.
        </li>
        <li>
          <strong>Listen and believe.</strong> Anyone who raises a concern will be taken
          seriously and treated with respect.
        </li>
        <li>
          <strong>Dignity, always.</strong> We never use images or stories that shame, pity or
          expose the people we support.
        </li>
        <li>
          <strong>Act in partnership.</strong> We work with families, communities, the Department
          of Social Welfare and other relevant authorities.
        </li>
        <li>
          <strong>Confidentiality, not secrecy.</strong> Concerns are shared only with those who
          need to know, but we will never promise to keep a disclosure of harm secret.
        </li>
      </ul>
    ),
  },
  {
    id: "conduct",
    title: "Code of conduct",
    body: (
      <>
        <p>Everyone covered by this policy agrees to:</p>
        <ul className={list}>
          <li>treat every child and adult with respect, regardless of age, sex, disability, health, religion or background;</li>
          <li>never be alone with a child out of sight of other adults, and plan activities so that this is not needed;</li>
          <li>never contact a child privately by phone, message or social media;</li>
          <li>never photograph or film a child without the written consent of a parent or guardian;</li>
          <li>never offer money, gifts or favours in exchange for anything, and never exploit the trust that comes with our work;</li>
          <li>never use alcohol or drugs while responsible for children or vulnerable adults;</li>
          <li>report any concern straight away, even if it involves a colleague, a partner or a donor.</li>
        </ul>
      </>
    ),
  },
  {
    id: "recruitment",
    title: "Safer recruitment",
    body: (
      <p>
        Before anyone works directly with children or vulnerable adults on our behalf, we confirm
        their identity, take at least two references, and request a police background check where
        one is available. Everyone signs this code of conduct and receives a safeguarding briefing
        before they start. Partners who work with children must show that they have a safeguarding
        policy of their own.
      </p>
    ),
  },
  {
    id: "images-and-stories",
    title: "Images, stories and health information",
    body: (
      <ul className={list}>
        <li>We only share a person&apos;s image or story with their informed consent, and a parent&apos;s or guardian&apos;s for a child.</li>
        <li>We never publish a child&apos;s full name, school or location alongside their image.</li>
        <li>We never identify a child or adult as living with sickle cell disease or any other health condition without explicit consent.</li>
        <li>Photographs on this website are illustrations unless we clearly say otherwise.</li>
      </ul>
    ),
  },
  {
    id: "events",
    title: "At our events",
    body: (
      <p>
        At events such as Red for a Reason, children must be accompanied by a parent or guardian
        throughout. Volunteers working with young players are briefed beforehand, wear
        identification, and work in pairs. Photography by the event team follows the rules above,
        and guests are asked not to share images of other people&apos;s children.
      </p>
    ),
  },
  {
    id: "report",
    title: "Raising a concern",
    body: (
      <>
        <div className="border-l-4 border-forest bg-white p-5">
          <p className="font-display text-h4 text-ink">If someone is in immediate danger</p>
          <p className="mt-2">
            Call the Ghana Police Service on <strong>191</strong> or the emergency number{" "}
            <strong>112</strong>. Outside Ghana, call your local emergency number.
          </p>
        </div>
        <p>
          For any other concern about the safety or wellbeing of a child or vulnerable adult
          connected to our work, or about the behaviour of anyone acting for Samaa, tell us as soon
          as you can:
        </p>
        <ul className={list}>
          <li>
            use the{" "}
            <Link href="/contact?topic=safeguarding" className={link}>
              contact form
            </Link>{" "}
            and choose &ldquo;A safeguarding concern&rdquo;. It goes straight to our safeguarding lead;
          </li>
          <li>or speak to any Samaa board member or event lead in person.</li>
        </ul>
        <p>
          Please do not investigate yourself. Write down what you saw or were told, in the
          person&apos;s own words where possible, with the date and time. You do not need to be
          certain. It is always right to report a concern.
        </p>
        <p>
          We will acknowledge every concern within two working days, and refer it to the
          Department of Social Welfare, the Domestic Violence and Victim Support Unit (DOVVSU) of
          the Ghana Police Service, or another authority where required. Anyone who raises a
          concern in good faith will be supported and protected.
        </p>
      </>
    ),
  },
  {
    id: "responsibility",
    title: "Responsibility and review",
    body: (
      <p>
        The board holds overall responsibility for safeguarding and appoints a designated
        safeguarding lead who receives and manages concerns. The policy is reviewed by the board
        every year, after any serious incident, and whenever the law or our work changes.
      </p>
    ),
  },
];

export default function SafeguardingPage() {
  return (
    <PolicyPage
      eyebrow="Safeguarding"
      title="Everyone we work with has the right to be safe."
      lede="This policy sets out how Samaa Charity Projects protects children and vulnerable adults, what we expect of everyone who acts for us, and how to raise a concern."
      updated="24 October 2026"
      sections={sections}
    />
  );
}
