import { CopyValue } from "@/components/donate/copy-value";
import { Container } from "@/components/ui/container";
import { directGiving, taxNote } from "@/content/donate";

type Row = { label: string; value: string | null };

export function WaysToGive() {
  return (
    <section aria-labelledby="ways-to-give" className="border-t border-border bg-white">
      <Container className="py-16 lg:py-24">
        <p className="eyebrow text-deep">Ways to give</p>
        <h2 id="ways-to-give" className="mt-3 max-w-2xl text-h2">
          Give online, by bank transfer, or with Mobile Money.
        </h2>

        <div className="mt-10 grid gap-px border border-border bg-border lg:grid-cols-3">
          <article className="flex flex-col bg-paper p-6 sm:p-8">
            <h3 className="text-h3">{directGiving.online.title}</h3>
            <p className="mt-3 text-body text-ink/80">{directGiving.online.text}</p>
          </article>
          <DetailCard title={directGiving.bank.title} rows={directGiving.bank.rows} note={directGiving.bank.note} />
          <DetailCard title={directGiving.momo.title} rows={directGiving.momo.rows} note={directGiving.momo.note} />
        </div>

        <aside className="mt-10 grid gap-4 border-l-4 border-forest bg-paper p-6 sm:p-8 lg:grid-cols-12">
          <h3 className="text-h4 lg:col-span-4">{taxNote.title}</h3>
          <p className="text-body text-ink/80 lg:col-span-8">{taxNote.text}</p>
        </aside>
      </Container>
    </section>
  );
}

function DetailCard({ title, rows, note }: { title: string; rows: readonly Row[]; note: string }) {
  return (
    <article className="flex flex-col bg-paper p-6 sm:p-8">
      <h3 className="text-h3">{title}</h3>
      <dl className="mt-5 divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <div key={row.label} className="py-3">
            <dt className="text-caption font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              {row.label}
            </dt>
            <dd className="mt-1 flex min-h-9 items-center justify-between gap-3">
              {row.value ? (
                <>
                  <span className="font-display text-body font-medium text-ink">{row.value}</span>
                  <CopyValue value={row.value} label={row.label} />
                </>
              ) : (
                // Shown until the detail is added in content/donate.ts.
                <span
                  aria-hidden
                  className="block h-4 w-40 max-w-full animate-pulse rounded-sm bg-border motion-reduce:animate-none"
                />
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-caption text-muted-foreground">{note}</p>
    </article>
  );
}
