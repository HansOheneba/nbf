import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { donateCta, legalNav, mainNav, site, supportCta } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="surface-ink bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-page gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center">
            <Logo variant="lockup-light" className="h-14 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-small text-paper/80">{site.description}</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="eyebrow text-paper/70">Pages</p>
          <ul className="mt-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-small hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={supportCta.href} className="text-small hover:text-white">
                {supportCta.label}
              </Link>
            </li>
            <li>
              <Link href={donateCta.href} className="text-small hover:text-white">
                {donateCta.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="eyebrow text-paper/70">Write to us</p>
          <p className="mt-4 text-small text-paper/80">
            Questions, ideas, and offers of support start with the contact form.
          </p>
          <Link href="/contact" className="mt-4 inline-block text-small underline underline-offset-4">
            Contact us
          </Link>
          <ul className="mt-6 flex gap-4">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-small underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-page flex-col gap-2 px-4 py-6 text-caption text-paper/70 sm:flex-row sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {site.copyrightYear} {site.name}.
          </p>
          <p>
            <Link href="/privacy#photographs" className="underline underline-offset-4 hover:text-paper">
              Photo credits
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
