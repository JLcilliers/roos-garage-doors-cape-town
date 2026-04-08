import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, BUSINESS } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = SERVICES.find(x => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.name} Cape Town | Built in Brackenfell`,
    description: `${s.short} Hand-built by Roos Garage Doors Cape Town. Free on-site quote.`.slice(0, 160),
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }) {
  const s = SERVICES.find(x => x.slug === params.slug);
  if (!s) notFound();
  const others = SERVICES.filter(x => x.slug !== s.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    provider: { "@type": "LocalBusiness", name: BUSINESS.name, telephone: BUSINESS.phone, url: BUSINESS.url },
    areaServed: { "@type": "City", name: "Cape Town" },
    description: s.hero,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />

      <section className="border-b border-[var(--color-aluminium)] grain">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-24">
          <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Services",href:"/"},{label: s.name}]} />
          <div className="eyebrow mb-6">Service</div>
          <h1 className="display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] max-w-5xl">{s.name}</h1>
          <p className="mt-8 max-w-2xl text-xl text-[var(--color-steel)]">{s.hero}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn">{s.cta}</Link>
            <a href={`tel:${BUSINESS.phone}`} className="btn btn-ghost">Call {BUSINESS.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg text-[var(--color-steel)] leading-relaxed">
          {s.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <aside className="md:col-span-5">
          <div className="card p-8 sticky top-24">
            <div className="rule" />
            <h2 className="display text-3xl mb-6">What you get</h2>
            <ul className="space-y-3">
              {s.features.map(f => (
                <li key={f} className="flex gap-3 text-sm">
                  <span className="text-[var(--color-meranti)] font-bold">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn mt-8 w-full justify-center">{s.cta}</Link>
          </div>
        </aside>
      </section>

      <section className="bg-[var(--color-graphite)] text-[var(--color-bone)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="rule" />
          <h2 className="display text-4xl md:text-5xl mb-12 text-[var(--color-bone)]">Other services from the workshop</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map(o => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="border border-[var(--color-steel)] p-6 hover:border-[var(--color-meranti)] transition-colors">
                <h3 className="display text-2xl mb-2 text-[var(--color-bone)]">{o.name}</h3>
                <p className="text-sm text-[var(--color-aluminium)]">{o.short}</p>
                <div className="mt-4 text-[var(--color-meranti)] text-xs uppercase tracking-[0.16em]">Read more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={s.cta + "."} />
    </>
  );
}
