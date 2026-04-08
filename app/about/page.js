import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/business";

export const metadata = {
  title: "About Roos Garage Doors — Family-Run in Brackenfell Since 2012",
  description: "A family-run Cape Town garage door workshop at 6 Brass Street, Brackenfell. Meet the team and see how every door is hand-built on site.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <section className="border-b border-[var(--color-aluminium)] grain">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20">
          <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "About"}]} />
          <div className="eyebrow mb-6">About Us</div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.9] max-w-4xl">A family-run Cape Town workshop.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg text-[var(--color-steel)] leading-relaxed">
          <p>Roos Garage Doors Cape Town has been independently owned and operated out of 6 Brass Street, Brackenfell since August 2012. We&rsquo;re part of the wider Roos Garage Doors family — one of South Africa&rsquo;s oldest garage door names — but the Cape Town branch is its own workshop, its own team, and its own set of standards.</p>
          <p>We do three things, and we do them in one building. We manufacture meranti timber doors from raw planks. We fabricate aluminium and Aluzinc steel doors from coil stock. And we install and repair everything we build. That&rsquo;s it. No showroom in another suburb feeding out to subcontractors. The person who builds your door is the person who hangs it.</p>
          <p>Because we own the manufacturing, we can make a non-standard door — an arched opening, a double-width sectional, a heritage-match for an older house — at the same price as a standard one. That&rsquo;s the single biggest reason architects and established Cape Town homeowners work with us repeatedly.</p>
          <p>And because we own the automation line (we&rsquo;re the sole Eazylift supplier in Cape Town), the motor that goes on your door is one we stock, calibrate, and service ourselves. When something does eventually need attention, we have the part on the shelf, not on a container ship.</p>
        </div>
        <aside className="md:col-span-5">
          <div className="card p-8 sticky top-24">
            <div className="rule" />
            <div className="eyebrow mb-4">Workshop Facts</div>
            <dl className="space-y-5 text-sm">
              <div><dt className="text-[var(--color-steel)] uppercase text-[0.7rem] tracking-[0.16em]">Founded</dt><dd className="display text-3xl">August 2012</dd></div>
              <div><dt className="text-[var(--color-steel)] uppercase text-[0.7rem] tracking-[0.16em]">Address</dt><dd className="font-semibold">{BUSINESS.address.street}, {BUSINESS.address.suburb}</dd></div>
              <div><dt className="text-[var(--color-steel)] uppercase text-[0.7rem] tracking-[0.16em]">Structure</dt><dd className="font-semibold">Family-owned, independent Cape Town branch</dd></div>
              <div><dt className="text-[var(--color-steel)] uppercase text-[0.7rem] tracking-[0.16em]">Specialty</dt><dd className="font-semibold">Custom meranti & Eazylift automation</dd></div>
              <div><dt className="text-[var(--color-steel)] uppercase text-[0.7rem] tracking-[0.16em]">Coverage</dt><dd className="font-semibold">Cape Town metro, Boland, West Coast</dd></div>
            </dl>
          </div>
        </aside>
      </section>

      <CTASection heading="Come see the workshop." body="Visitors welcome during business hours. Bring your measurements or a photo — we&rsquo;ll price it on the bench." />
    </>
  );
}
