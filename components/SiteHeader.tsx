"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { PURGO_ORIGIN } from "@/lib/brand";

const nav = [
  { href: "/products", label: "Shop" },
  { href: "/#science", label: "Science" },
  { href: "/#stories", label: "Learn" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="pointer-events-auto mx-auto flex max-w-[1400px] items-center justify-between gap-3">
        <div
          className={`seed-pill flex min-w-0 items-center gap-1 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition md:gap-2 md:px-4 md:py-2.5 ${
            scrolled
              ? "bg-[#2f2e24]/88 text-white backdrop-blur-xl"
              : "bg-white/80 text-[#1f2118] backdrop-blur-xl"
          }`}
        >
          <BrandLogo
            tone={scrolled ? "light" : "dark"}
            size="sm"
            className="!h-6 md:!h-7"
          />
          <nav className="ml-2 hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-[0.92rem] transition ${
                  scrolled
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-[#1f2118]/85 hover:bg-black/5 hover:text-[#1f2118]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className={`ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full md:hidden ${
              scrolled ? "text-white" : "text-[#1f2118]"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className={`h-px w-full ${scrolled ? "bg-white" : "bg-[#1f2118]"}`} />
              <span className={`h-px w-full ${scrolled ? "bg-white" : "bg-[#1f2118]"}`} />
              <span className={`h-px w-full ${scrolled ? "bg-white" : "bg-[#1f2118]"}`} />
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={PURGO_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden text-[0.92rem] transition sm:inline ${
              scrolled ? "text-white/90 hover:text-white" : "text-[#1f2118]/85 hover:text-[#1f2118]"
            }`}
          >
            Sign in
          </a>
          <a
            href={PURGO_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="seed-pill inline-flex items-center justify-center bg-[#2f2e24] px-4 py-2.5 text-[0.92rem] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition hover:bg-[#3d3c31]"
          >
            Get Started
          </a>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1400px] md:hidden">
          <div className="seed-card bg-white/95 px-4 py-4 text-[#1f2118] shadow-lg backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-3 py-2 text-[#1f2118]"
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
