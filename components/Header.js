"use client";
import Link from "next/link";
import { useState } from "react";
import { BUSINESS, SERVICES } from "@/lib/business";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-aluminium)] bg-[var(--color-bone)]/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-graphite focus:text-bone focus:px-3 focus:py-2">Skip to content</a>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-baseline gap-2" aria-label={BUSINESS.name + " home"}>
          <span className="display text-2xl leading-none">ROOS</span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-steel)]">Garage Doors · CPT</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-[0.72rem] uppercase tracking-[0.16em] font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <div className="relative group">
            <button className="flex items-center gap-1">Services <span aria-hidden>▾</span></button>
            <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block pt-2">
              <div className="bg-[var(--color-bone)] border border-[var(--color-aluminium)] min-w-[260px] shadow-lg">
                {SERVICES.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="block px-4 py-3 border-b border-[var(--color-aluminium)] last:border-0 hover:bg-[var(--color-graphite)] hover:text-[var(--color-bone)]">{s.name}</Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/gallery">Gallery</Link>
          <Link href="/service-areas">Areas</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${BUSINESS.phone}`} className="text-[0.72rem] uppercase tracking-[0.14em] font-bold">{BUSINESS.phoneDisplay}</a>
          <Link href="/contact" className="btn">Get a quote</Link>
        </div>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8h20M4 14h20M4 20h20"/></svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--color-aluminium)]">
          <nav className="flex flex-col px-5 py-4 gap-1 text-sm uppercase tracking-[0.14em] font-semibold">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <div className="py-2 text-[var(--color-meranti)]">Services</div>
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="py-2 pl-4 normal-case text-[0.85rem]">{s.name}</Link>
            ))}
            <Link href="/gallery" onClick={() => setOpen(false)} className="py-2">Gallery</Link>
            <Link href="/service-areas" onClick={() => setOpen(false)} className="py-2">Service Areas</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
            <a href={`tel:${BUSINESS.phone}`} className="py-2 text-[var(--color-meranti)]">{BUSINESS.phoneDisplay}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
