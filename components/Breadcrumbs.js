import Link from "next/link";

export default function Breadcrumbs({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: it.href ? `https://roosgaragedoorscapetown.co.za${it.href}` : undefined,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-steel)] mb-6">
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-2">
              {it.href ? <Link href={it.href} className="hover:text-[var(--color-meranti)]">{it.label}</Link> : <span className="text-[var(--color-graphite)]">{it.label}</span>}
              {i < items.length - 1 && <span aria-hidden>/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
