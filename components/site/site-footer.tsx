import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { legalNav, mainNav, site, supportCta } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="surface-ink bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-page gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3">
            <Logo variant="icon" className="h-14 w-14" />
            <span className="font-display text-sm leading-none">
              Nana Boatemah
              <span className="mt-1 block">Foundation</span>
            </span>
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
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="eyebrow text-paper/70">Write to us</p>
          <p className="mt-4 text-small text-paper/80">
            Questions, ideas, and offers of support start with the contact form.
          </p>
          <Link href="/contact" className="mt-4 inline-block text-small underline underline-offset-4">
            Contact the foundation
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
        <div className="mx-auto flex w-full max-w-page flex-col gap-2 px-4 py-6 text-caption text-paper/70 sm:px-6 lg:px-8">
          <p>
            © {site.copyrightYear} {site.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
