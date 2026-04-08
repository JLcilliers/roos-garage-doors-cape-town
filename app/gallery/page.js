import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Recent Work | Garage Door Installations Across Cape Town",
  description: "Recent meranti, aluminium, and steel garage door installations across the Cape Town metro. Spec sheets from the Roos Garage Doors workshop archive.",
  alternates: { canonical: "/gallery" },
};

const JOBS = [
  { no: "01", title: "Horizontal Slat Meranti", area: "Constantia", material: "Meranti Timber", finish: "Natural oil, 3 coats", size: "2 400 x 2 100 mm", auto: "Eazylift E800", year: "2025" },
  { no: "02", title: "Double Sectional Aluminium", area: "Camps Bay", material: "Aluminium", finish: "Anodised charcoal", size: "4 800 x 2 100 mm", auto: "Eazylift E1000", year: "2025" },
  { no: "03", title: "Arched Heritage Replacement", area: "Stellenbosch", material: "Meranti Timber", finish: "Wax seal, matt", size: "2 650 x 2 300 mm", auto: "Manual", year: "2024" },
  { no: "04", title: "Aluzinc Stucco Sectional", area: "Durbanville", material: "Aluzinc Steel", finish: "Stucco embossed", size: "2 400 x 2 100 mm", auto: "Eazylift E800", year: "2024" },
  { no: "05", title: "Eazylift Retrofit", area: "Somerset West", material: "Automation", finish: "E600 operator swap", size: "Existing door", auto: "Eazylift E600", year: "2025" },
  { no: "06", title: "Coastal Aluminium Double", area: "Blouberg", material: "Aluminium", finish: "Marine grade powder", size: "4 800 x 2 100 mm", auto: "Eazylift E1000", year: "2024" },
  { no: "07", title: "Heritage Meranti Match", area: "Oranjezicht", material: "Meranti Timber", finish: "Custom stain match", size: "2 500 x 2 200 mm", auto: "Eazylift E800", year: "2024" },
  { no: "08", title: "Cottage Pane Aluminium", area: "Tokai", material: "Aluminium", finish: "White powder coat", size: "2 400 x 2 100 mm", auto: "Eazylift E800", year: "2025" },
  { no: "09", title: "Commercial Aluzinc", area: "Brackenfell", material: "Aluzinc Steel", finish: "Galvanised", size: "4 000 x 3 000 mm", auto: "Eazylift Commercial", year: "2024" },
];

function SpecCard({ job }) {
  return (
    <article className="card p-8 flex flex-col justify-between min-h-[340px] group">
      <header>
        <div className="flex items-start justify-between mb-8">
          <span className="display text-4xl text-[var(--color-aluminium)] group-hover:text-[var(--color-meranti)] transition-colors">{job.no}</span>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[var(--color-meranti)] border border-[var(--color-meranti)] px-2 py-1">{job.material}</span>
        </div>
        <h3 className="display text-2xl leading-[1.05] mb-1">{job.title}</h3>
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-steel)]">{job.area} &middot; {job.year}</div>
      </header>
      <dl className="mt-8 pt-6 border-t border-[var(--color-aluminium)] grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
        <dt className="eyebrow !text-[var(--color-steel)]">Size</dt>
        <dd className="text-right text-[var(--color-graphite)] font-medium">{job.size}</dd>
        <dt className="eyebrow !text-[var(--color-steel)]">Finish</dt>
        <dd className="text-right text-[var(--color-graphite)] font-medium">{job.finish}</dd>
        <dt className="eyebrow !text-[var(--color-steel)]">Automation</dt>
        <dd className="text-right text-[var(--color-graphite)] font-medium">{job.auto}</dd>
      </dl>
    </article>
  );
}

export default function Gallery() {
  return (
    <>
      <section className="border-b border-[var(--color-aluminium)] grain">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20">
          <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Recent Work"}]} />
          <div className="eyebrow mb-6">Workshop Archive &middot; 2024 &mdash; 2025</div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.9] max-w-5xl">Recent work,<br/>on the record.</h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--color-steel)]">A rolling record of doors we&rsquo;ve cut, assembled, finished, and hung across the Cape Town metro. Every job is logged with its material, finish, and operator &mdash; the same way we file it in the workshop.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOBS.map(j => <SpecCard key={j.no} job={j} />)}
        </div>
        <p className="mt-12 text-xs uppercase tracking-[0.16em] text-[var(--color-steel)] max-w-2xl">Photographs from the workshop archive are being catalogued and will appear alongside each spec sheet shortly.</p>
      </section>

      <CTASection heading="Like the look? Let&rsquo;s build yours." />
    </>
  );
}
