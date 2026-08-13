"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

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
          className={`seed-pill flex min-w-0 items-center gap-1 px-3 py-2 shadow-[0_8px_30px_rgba(47,46,36,0.08)] transition md:gap-1.5 md:px-3.5 md:py-2 ${
            scrolled
              ? "bg-[#fffcf7]/92 text-[#1f2118] backdrop-blur-xl"
              : "bg-white/75 text-[#1f2118] backdrop-blur-xl"
          }`}
        >
          <BrandLogo tone="dark" size="sm" />
          <nav className="ml-1.5 hidden items-center gap-0.5 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-[0.88rem] text-[#1f2118]/80 transition hover:bg-black/5 hover:text-[#1f2118]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#1f2118] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-[#1f2118]" />
              <span className="h-px w-full bg-[#1f2118]" />
              <span className="h-px w-full bg-[#1f2118]" />
            </span>
          </button>
        </div>

        <Link
          href="/products"
          className="seed-pill inline-flex items-center justify-center bg-[#2f2e24] px-4 py-2.5 text-[0.88rem] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition hover:bg-[#3d3c31]"
        >
          Shop
        </Link>
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
