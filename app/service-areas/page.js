import { AREAS } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Service Areas | Garage Doors Across the Cape Town Metro",
  description: "Roos Garage Doors covers Brackenfell, Bellville, Durbanville, Atlantic Seaboard, Southern Suburbs, Helderberg, and the West Coast. Free on-site quotes.",
  alternates: { canonical: "/service-areas" },
};

const REGIONS = [
  { name: "Northern Suburbs", suburbs: ["Brackenfell", "Bellville", "Durbanville", "Kuils River", "Kraaifontein", "Parow", "Goodwood"] },
  { name: "Southern Suburbs", suburbs: ["Claremont", "Constantia", "Tokai", "Bergvliet", "Newlands", "Rondebosch", "Wynberg"] },
  { name: "Atlantic Seaboard", suburbs: ["Sea Point", "Camps Bay", "Clifton", "Bantry Bay", "Green Point", "Mouille Point", "Bakoven"] },
  { name: "Helderberg & Boland", suburbs: ["Stellenbosch", "Somerset West", "Strand", "Gordon's Bay", "Paarl", "Franschhoek"] },
  { name: "West Coast & Blaauwberg", suburbs: ["Milnerton", "Table View", "Blouberg", "Parklands", "Melkbosstrand"] },
  { name: "City Bowl", suburbs: ["Oranjezicht", "Gardens", "Tamboerskloof", "Vredehoek", "Higgovale"] },
];

export default function ServiceAreas() {
  return (
    <>
      <section className="border-b border-[var(--color-aluminium)] grain">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20">
          <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Service Areas"}]} />
          <div className="eyebrow mb-6">Coverage</div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.9] max-w-5xl">We cover the whole Cape Town metro.</h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--color-steel)]">Free on-site measure and quote anywhere in the regions below. Outside the metro? Call us — we&rsquo;ll tell you straight whether it makes sense.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-12">
        {REGIONS.map(r => (
          <div key={r.name}>
            <div className="rule" />
            <h2 className="display text-4xl mb-4">{r.name}</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[var(--color-steel)]">
              {r.suburbs.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <CTASection heading="Not sure if we cover your area?" body="Phone the workshop — we&rsquo;ll answer on the first ring." />
    </>
  );
}
