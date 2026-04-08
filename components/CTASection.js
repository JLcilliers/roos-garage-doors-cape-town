import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export default function CTASection({ heading = "Ready for a door that does the job?", body = "Free on-site measure and quote across the Cape Town metro. Usually back to you the same day." }) {
  return (
    <section className="bg-[var(--color-graphite)] text-[var(--color-bone)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <div className="rule" />
          <h2 className="display text-5xl md:text-6xl mb-4 text-[var(--color-bone)]">{heading}</h2>
          <p className="text-[var(--color-aluminium)] text-lg max-w-xl">{body}</p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link href="/contact" className="btn" style={{borderBottomColor: "var(--color-ember)"}}>Get a free quote</Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn btn-ghost" style={{borderColor: "var(--color-bone)", color: "var(--color-bone)"}}>Call {BUSINESS.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
