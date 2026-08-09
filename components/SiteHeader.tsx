"use client";

import Link from "next/link";
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { PURGO_ORIGIN } from "@/lib/brand";

const nav = [
  { href: "/products", label: "Shop" },
  { href: "/#science", label: "Science" },
  { href: "/#routine", label: "Routine" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <BrandLogo size="sm" />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-form text-[0.78rem] uppercase tracking-[0.18em] text-ink/80 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PURGO_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-4 py-2.5 font-form text-[0.72rem] uppercase tracking-[0.16em] text-white transition hover:bg-brand-deep sm:inline-flex"
          >
            Shop at Purgo
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-full bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-form text-sm uppercase tracking-[0.16em]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PURGO_ORIGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full bg-brand px-4 py-2.5 font-form text-[0.72rem] uppercase tracking-[0.16em] text-white"
            >
              Shop at Purgo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
