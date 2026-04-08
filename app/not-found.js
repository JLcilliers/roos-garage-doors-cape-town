import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 py-32 text-center">
      <div className="display text-[clamp(5rem,20vw,14rem)] leading-none text-[var(--color-meranti)]">404</div>
      <h1 className="display text-4xl mt-4 mb-6">This door doesn&rsquo;t open.</h1>
      <p className="text-[var(--color-steel)] mb-8">The page you&rsquo;re after has moved or never existed. Try one of these instead.</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/" className="btn">Home</Link>
        <Link href="/contact" className="btn btn-ghost">Contact us</Link>
      </div>
    </section>
  );
}
