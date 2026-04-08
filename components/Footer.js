import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-graphite)] text-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="display text-5xl mb-4 leading-none">ROOS<br/><span className="text-[var(--color-meranti)]">GARAGE DOORS</span></div>
          <p className="text-sm text-[var(--color-aluminium)] max-w-sm">Hand-built in Brackenfell since 2012. Timber, aluminium, and steel doors for every Cape Town opening — plus the only Eazylift automation in the region.</p>
          <div className="mt-6 text-sm space-y-1">
            <div>{BUSINESS.address.street}</div>
            <div>{BUSINESS.address.suburb}, {BUSINESS.address.city} {BUSINESS.address.postal}</div>
            <div className="pt-2"><a href={`tel:${BUSINESS.phone}`} className="hover:text-[var(--color-ember)]">{BUSINESS.phoneDisplay}</a></div>
            <div><a href={`mailto:${BUSINESS.email}`} className="hover:text-[var(--color-ember)]">{BUSINESS.email}</a></div>
          </div>
        </div>
        <div>
          <div className="eyebrow !text-[var(--color-ember)] mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {SERVICES.map(s => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-[var(--color-ember)]">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow !text-[var(--color-ember)] mb-4">Workshop Hours</div>
          <ul className="space-y-2 text-sm">
            {BUSINESS.hours.map(h => (
              <li key={h.day} className="flex justify-between gap-4"><span>{h.day}</span><span className="text-[var(--color-aluminium)]">{h.open}{h.close && `–${h.close}`}</span></li>
            ))}
          </ul>
          <div className="eyebrow !text-[var(--color-ember)] mt-8 mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-[var(--color-ember)]">About</Link></li>
            <li><Link href="/gallery" className="hover:text-[var(--color-ember)]">Gallery</Link></li>
            <li><Link href="/service-areas" className="hover:text-[var(--color-ember)]">Service Areas</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-ember)]">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-steel)] py-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--color-aluminium)]">
          <div>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</div>
          <div>Family-run in Brackenfell since {BUSINESS.founded}.</div>
        </div>
      </div>
    </footer>
  );
}
