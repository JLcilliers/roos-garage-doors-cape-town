import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Gallery | Garage Door Installations Across Cape Town",
  description: "Recent meranti, aluminium, and steel garage door installations across the Cape Town metro. See the Roos Garage Doors workshop output.",
  alternates: { canonical: "/gallery" },
};

const ITEMS = [
  { title: "Meranti Horizontal Slat", area: "Constantia", material: "Meranti Timber" },
  { title: "Double Aluminium Sectional", area: "Camps Bay", material: "Aluminium" },
  { title: "Arched Meranti Replacement", area: "Stellenbosch", material: "Meranti Timber" },
  { title: "Aluzinc Stucco Sectional", area: "Durbanville", material: "Aluzinc Steel" },
  { title: "Eazylift Retrofit", area: "Somerset West", material: "Automation" },
  { title: "Coastal Aluminium Double", area: "Blouberg", material: "Aluminium" },
  { title: "Heritage Meranti Match", area: "Oranjezicht", material: "Meranti Timber" },
  { title: "Cottage Pane Aluminium", area: "Tokai", material: "Aluminium" },
  { title: "Commercial Aluzinc", area: "Brackenfell", material: "Aluzinc Steel" },
];

function Tile({ item, i }) {
  const palettes = [
    "from-[#3A3F44] to-[#111315]",
    "from-[#B4591F] to-[#6a3110]",
    "from-[#B8BCC0] to-[#6a7079]",
    "from-[#111315] to-[#3A3F44]",
    "from-[#6A7A5C] to-[#3a4432]",
    "from-[#E2691C] to-[#873d0e]",
  ];
  return (
    <figure className="card overflow-hidden group">
      <div className={`aspect-[4/3] bg-gradient-to-br ${palettes[i % palettes.length]} relative`}>
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "repeating-linear-gradient(90deg, transparent 0, transparent 48px, rgba(255,255,255,.12) 48px, rgba(255,255,255,.12) 50px)"}} />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-meranti)]" />
        <div className="absolute top-4 left-4 text-[var(--color-bone)] text-[0.65rem] uppercase tracking-[0.18em] font-bold">{item.material}</div>
      </div>
      <figcaption className="p-5 flex items-center justify-between">
        <div>
          <div className="display text-xl">{item.title}</div>
          <div className="text-xs text-[var(--color-steel)] uppercase tracking-[0.14em] mt-1">{item.area}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <>
      <section className="border-b border-[var(--color-aluminium)] grain">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20">
          <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Gallery"}]} />
          <div className="eyebrow mb-6">Workshop Output</div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.9] max-w-5xl">Installations<br/>across the Cape.</h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--color-steel)]">Every door on this page was cut, assembled, finished, and hung by our Brackenfell team. Tap any tile for material and area.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => <Tile key={i} item={it} i={i} />)}
        </div>
        <p className="mt-10 text-sm text-[var(--color-steel)] max-w-2xl">Gallery tiles are placeholders. On deploy we&rsquo;ll replace each tile with a real photograph from the workshop archive.</p>
      </section>

      <CTASection heading="Like what you see? Let&rsquo;s build yours." />
    </>
  );
}
