"use client";

import Link from "next/link";
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { PURGO_ORIGIN } from "@/lib/brand";

const nav = [
  { href: "/products", label: "Shop" },
  { href: "/#science", label: "Science" },
  { href: "/#stories", label: "Learn" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="pointer-events-auto mx-auto flex max-w-[1400px] items-center justify-between gap-3">
        <div className="glass-nav seed-pill flex min-w-0 items-center gap-1 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.18)] md:gap-2 md:px-4 md:py-2.5">
          <BrandLogo tone="light" size="sm" className="!h-6 md:!h-7" />
          <nav className="ml-2 hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-[0.92rem] text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={PURGO_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[0.92rem] text-white/90 transition hover:text-white sm:inline"
          >
            Sign in
          </a>
          <a
            href={PURGO_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="seed-pill inline-flex items-center justify-center bg-white px-4 py-2.5 text-[0.92rem] font-medium text-ink shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition hover:bg-paper"
          >
            Get Started
          </a>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1400px] md:hidden">
          <div className="glass-nav seed-card px-4 py-4">
            <div className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-3 py-2 text-white/90"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
