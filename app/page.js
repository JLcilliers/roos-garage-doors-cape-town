import Link from "next/link";
import { SERVICES, TESTIMONIALS, BUSINESS, AREAS } from "@/lib/business";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Garage Doors Cape Town | Meranti, Aluminium & Steel — Roos Since 2012",
  description: "Hand-built meranti, aluminium, and Aluzinc steel garage doors in Cape Town. Sole Eazylift automation supplier. Family workshop in Brackenfell. Free quotes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative grain border-b border-[var(--color-aluminium)] overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow mb-6">Brackenfell Workshop · Est. 2012</div>
            <h1 className="display text-[clamp(3rem,10vw,9rem)] leading-[0.85]">
              Garage<br/>doors, built<br/>
              <span className="text-[var(--color-meranti)]">in Cape Town.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[var(--color-steel)]">
              Meranti, aluminium, and Aluzinc steel doors hand-cut, assembled, and finished at 6 Brass Street, Brackenfell. Family run. Eazylift automation fitted. Free on-site quotes across the metro.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn">Get a free quote</Link>
              <Link href="/services/meranti-timber-garage-doors" className="btn btn-ghost">Explore the range</Link>
            </div>
          </div>
          <div className="md:col-span-4 border-l border-[var(--color-aluminium)] pl-8 space-y-6 text-sm">
            <div>
              <div className="eyebrow mb-1">Since</div>
              <div className="display text-5xl">2012</div>
            </div>
            <div>
              <div className="eyebrow mb-1">Materials</div>
              <div className="display text-3xl">Timber · Alu · Steel</div>
            </div>
            <div>
              <div className="eyebrow mb-1">Automation</div>
              <div className="display text-3xl text-[var(--color-meranti)]">Eazylift · Sole CPT</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="rule" />
            <h2 className="display text-5xl md:text-7xl">The Full Workshop</h2>
          </div>
          <p className="md:col-span-5 text-[var(--color-steel)] text-lg">Five services, one building. Every door you see on this site is quoted, cut, finished, and installed by the same team — from the bench in Brackenfell to your driveway.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card p-8 block group">
              <div className="flex items-start justify-between mb-10">
                <span className="display text-3xl text-[var(--color-aluminium)]">0{i + 1}</span>
                <span className="text-[var(--color-meranti)] text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <h3 className="display text-2xl mb-3">{s.name}</h3>
              <p className="text-sm text-[var(--color-steel)]">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[var(--color-graphite)] text-[var(--color-bone)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
          <div className="rule" />
          <h2 className="display text-5xl md:text-7xl mb-16 max-w-3xl text-[var(--color-bone)]">Why the neighbours keep asking who built it.</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { n: "01", h: "Built on site", p: "We don't broker doors. We mill meranti, cut panels, and assemble frames in our own Brackenfell workshop — so custom sizes, arches, and heritage replacements cost the same as standard." },
              { n: "02", h: "Sole Eazylift supplier", p: "Every automation job we do uses Eazylift operators — the only brand we've found that holds the door square cycle after cycle, with parts on our shelves, not in a container." },
              { n: "03", h: "Repairs by the builders", p: "The person on the phone is the person on the van. No middle layer. If it can't be saved, we tell you upfront and quote a replacement instead of burning through callouts." },
            ].map(item => (
              <div key={item.n}>
                <div className="display text-6xl text-[var(--color-meranti)] mb-4">{item.n}</div>
                <h3 className="display text-2xl mb-3 text-[var(--color-bone)]">{item.h}</h3>
                <p className="text-sm text-[var(--color-aluminium)]">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="rule" />
        <h2 className="display text-5xl md:text-7xl mb-16">Word from the street.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="card p-8 relative">
              <div className="display text-7xl text-[var(--color-meranti)] leading-none mb-2" aria-hidden>&ldquo;</div>
              <blockquote className="text-[var(--color-graphite)] text-base mb-6 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="text-xs uppercase tracking-[0.14em] text-[var(--color-steel)]">
                <span className="font-bold text-[var(--color-graphite)]">{t.author}</span> · {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* AREAS STRIP */}
      <section className="border-y border-[var(--color-aluminium)] bg-[var(--color-bone)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
          <div className="eyebrow mb-3">Service Areas</div>
          <h2 className="display text-3xl md:text-5xl mb-8 max-w-4xl">From Bloubergstrand to Gordon&rsquo;s Bay — we cover the whole Cape Town metro.</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-steel)]">
            {AREAS.map(a => <li key={a} className="whitespace-nowrap">{a}</li>)}
          </ul>
          <div className="mt-8">
            <Link href="/service-areas" className="text-[var(--color-meranti)] text-xs uppercase tracking-[0.16em] font-bold hover:text-[var(--color-ember)]">See all service areas →</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
