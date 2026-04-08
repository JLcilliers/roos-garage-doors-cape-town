import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS, SERVICES } from "@/lib/business";

export const metadata = {
  title: "Contact Roos Garage Doors Cape Town | Free On-Site Quotes",
  description: "Phone 021 981 8118 or visit the workshop at 6 Brass Street, Brackenfell Industria. Free on-site quotes across the Cape Town metro.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="border-b border-[var(--color-aluminium)] grain">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20">
          <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Contact"}]} />
          <div className="eyebrow mb-6">Get in touch</div>
          <h1 className="display text-[clamp(3rem,10vw,9rem)] leading-[0.88] max-w-5xl">Let&rsquo;s build<br/>your door.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid md:grid-cols-12 gap-12">
        {/* Contact details */}
        <div className="md:col-span-5 space-y-10">
          <div>
            <div className="eyebrow mb-3">Workshop</div>
            <address className="not-italic text-lg leading-relaxed">
              {BUSINESS.address.street}<br/>
              {BUSINESS.address.suburb}<br/>
              {BUSINESS.address.city} {BUSINESS.address.postal}
            </address>
          </div>
          <div>
            <div className="eyebrow mb-3">Phone</div>
            <a href={`tel:${BUSINESS.phone}`} className="display text-4xl hover:text-[var(--color-meranti)]">{BUSINESS.phoneDisplay}</a>
            <div className="text-sm text-[var(--color-steel)] mt-2">Backup cell: <a href={`tel:${BUSINESS.cell}`} className="underline">{BUSINESS.cellDisplay}</a></div>
          </div>
          <div>
            <div className="eyebrow mb-3">Email</div>
            <ul className="space-y-2 text-sm">
              <li><span className="uppercase text-[0.7rem] tracking-[0.14em] text-[var(--color-steel)]">Sales & quotes:</span><br/><a className="font-semibold hover:text-[var(--color-meranti)]" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
              <li><span className="uppercase text-[0.7rem] tracking-[0.14em] text-[var(--color-steel)]">Trade orders:</span><br/><a className="font-semibold hover:text-[var(--color-meranti)]" href={`mailto:${BUSINESS.tradeEmail}`}>{BUSINESS.tradeEmail}</a></li>
              <li><span className="uppercase text-[0.7rem] tracking-[0.14em] text-[var(--color-steel)]">Repairs & technical:</span><br/><a className="font-semibold hover:text-[var(--color-meranti)]" href={`mailto:${BUSINESS.repairEmail}`}>{BUSINESS.repairEmail}</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Hours</div>
            <ul className="space-y-1 text-sm">
              {BUSINESS.hours.map(h => (
                <li key={h.day} className="flex justify-between"><span className="font-semibold">{h.day}</span><span className="text-[var(--color-steel)]">{h.open}{h.close && `–${h.close}`}</span></li>
              ))}
              <li className="text-xs text-[var(--color-steel)] pt-2">Closed on South African public holidays.</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-7">
          <div className="card p-8 md:p-10">
            <div className="rule" />
            <h2 className="display text-4xl mb-6">Request a quote</h2>
            <form
              action={`mailto:${BUSINESS.email}`}
              method="post"
              encType="text/plain"
              className="grid gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[0.7rem] uppercase tracking-[0.14em] font-bold mb-2">Name</span>
                  <input required type="text" name="name" className="w-full border border-[var(--color-aluminium)] bg-[var(--color-bone)] px-4 py-3 focus:border-[var(--color-meranti)] outline-none" />
                </label>
                <label className="block">
                  <span className="block text-[0.7rem] uppercase tracking-[0.14em] font-bold mb-2">Phone</span>
                  <input required type="tel" name="phone" className="w-full border border-[var(--color-aluminium)] bg-[var(--color-bone)] px-4 py-3 focus:border-[var(--color-meranti)] outline-none" />
                </label>
              </div>
              <label className="block">
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] font-bold mb-2">Email</span>
                <input required type="email" name="email" className="w-full border border-[var(--color-aluminium)] bg-[var(--color-bone)] px-4 py-3 focus:border-[var(--color-meranti)] outline-none" />
              </label>
              <label className="block">
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] font-bold mb-2">Suburb</span>
                <input type="text" name="suburb" className="w-full border border-[var(--color-aluminium)] bg-[var(--color-bone)] px-4 py-3 focus:border-[var(--color-meranti)] outline-none" />
              </label>
              <label className="block">
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] font-bold mb-2">What do you need?</span>
                <select name="service" className="w-full border border-[var(--color-aluminium)] bg-[var(--color-bone)] px-4 py-3 focus:border-[var(--color-meranti)] outline-none">
                  <option>New door — not sure which</option>
                  {SERVICES.map(s => <option key={s.slug}>{s.name}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] font-bold mb-2">Details</span>
                <textarea name="details" rows={5} className="w-full border border-[var(--color-aluminium)] bg-[var(--color-bone)] px-4 py-3 focus:border-[var(--color-meranti)] outline-none" />
              </label>
              <button type="submit" className="btn justify-center">Send enquiry</button>
              <p className="text-xs text-[var(--color-steel)]">Form opens your email client. For backend submission, connect Formspree, Resend, or Vercel Forms on deploy.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
