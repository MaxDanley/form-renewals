"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { bundles } from "@/lib/catalog";
import { products } from "@/lib/products";

const nav = [
  { href: "/products", label: "Shop", hasMenu: true },
  { href: "/#science", label: "Science", hasMenu: false },
  { href: "/#stories", label: "Learn", hasMenu: false },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const onProductsHero = pathname === "/products" && !scrolled;
  const lightChrome = onProductsHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setShopOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!shopOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!shopRef.current?.contains(event.target as Node)) {
        setShopOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShopOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [shopOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="pointer-events-auto mx-auto flex max-w-[1400px] items-center justify-between gap-3">
        <div
          ref={shopRef}
          className="relative"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <div
            className={`seed-pill flex min-w-0 items-center gap-1 px-3 py-2 shadow-[0_8px_30px_rgba(47,46,36,0.08)] transition md:gap-1.5 md:px-3.5 md:py-2 ${
              lightChrome
                ? "bg-white/15 text-white backdrop-blur-xl"
                : scrolled
                  ? "bg-[#fffcf7]/92 text-[#1f2118] backdrop-blur-xl"
                  : "bg-white/75 text-[#1f2118] backdrop-blur-xl"
            }`}
          >
            <BrandLogo
              tone={lightChrome ? "light" : "dark"}
              size="sm"
            />
            <nav className="ml-1.5 hidden items-center gap-0.5 md:flex">
              {nav.map((item) =>
                item.hasMenu ? (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => setShopOpen((value) => !value)}
                    className={`rounded-full px-3 py-1.5 text-[0.88rem] transition ${
                      lightChrome
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-[#1f2118]/80 hover:bg-black/5 hover:text-[#1f2118]"
                    } ${shopOpen ? (lightChrome ? "bg-white/10" : "bg-black/5") : ""}`}
                    aria-expanded={shopOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-3 py-1.5 text-[0.88rem] transition ${
                      lightChrome
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-[#1f2118]/80 hover:bg-black/5 hover:text-[#1f2118]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <button
              type="button"
              className={`ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full md:hidden ${
                lightChrome ? "text-white" : "text-[#1f2118]"
              }`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex w-4 flex-col gap-1">
                <span
                  className={`h-px w-full ${lightChrome ? "bg-white" : "bg-[#1f2118]"}`}
                />
                <span
                  className={`h-px w-full ${lightChrome ? "bg-white" : "bg-[#1f2118]"}`}
                />
                <span
                  className={`h-px w-full ${lightChrome ? "bg-white" : "bg-[#1f2118]"}`}
                />
              </span>
            </button>
          </div>

          {/* Desktop Shop dropdown */}
          <div
            className={`absolute left-0 top-[calc(100%+0.35rem)] hidden w-[320px] origin-top transition md:block ${
              shopOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            <div className="seed-card border border-white/40 bg-white/90 p-3 shadow-[0_24px_60px_rgba(47,46,36,0.16)] backdrop-blur-xl">
              <ul className="space-y-1">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-black/5"
                      onClick={() => setShopOpen(false)}
                    >
                      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#ebe8df]">
                        <Image
                          src={product.image}
                          alt=""
                          fill
                          className="object-contain p-1.5"
                          sizes="44px"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                          {product.code}
                        </span>
                        <span className="block truncate text-sm font-medium text-shell">
                          {product.name}
                        </span>
                      </span>
                      {product.badge === "New" ? (
                        <span className="seed-pill ml-auto bg-[#d9d4c4] px-2 py-0.5 text-[0.65rem] text-shell">
                          New
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/products"
                    className="flex items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-black/5"
                    onClick={() => setShopOpen(false)}
                  >
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#ebe8df]">
                      <Image
                        src={products[0].image}
                        alt=""
                        fill
                        className="object-contain p-1.5"
                        sizes="44px"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                        Duo
                      </span>
                      <span className="block truncate text-sm font-medium text-shell">
                        {bundles[0].name}
                      </span>
                    </span>
                    <span className="seed-pill ml-auto bg-[#c5c29a] px-2 py-0.5 text-[0.65rem] text-shell">
                      Save {bundles[0].savePercent}%
                    </span>
                  </Link>
                </li>
              </ul>
              <Link
                href="/products"
                onClick={() => setShopOpen(false)}
                className="mt-2 flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-shell transition hover:bg-black/5"
              >
                Shop all products
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/products"
          className={`seed-pill inline-flex items-center justify-center px-4 py-2.5 text-[0.88rem] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition ${
            lightChrome
              ? "bg-white text-[#1f2118] hover:bg-[#f4f2eb]"
              : "bg-[#2f2e24] text-white hover:bg-[#3d3c31]"
          }`}
        >
          Shop
        </Link>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1400px] md:hidden">
          <div className="seed-card bg-white/95 px-3 py-3 text-[#1f2118] shadow-lg backdrop-blur-xl">
            <p className="px-2 pb-2 text-xs uppercase tracking-[0.14em] text-muted">
              Shop
            </p>
            <div className="flex flex-col gap-1">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-2 py-2"
                >
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-[#ebe8df]">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-contain p-1"
                      sizes="40px"
                    />
                  </span>
                  <span className="text-sm text-shell">{product.name}</span>
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 text-sm font-medium text-shell"
              >
                Shop all products →
              </Link>
              <Link
                href="/#science"
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 text-sm text-shell"
              >
                Science
              </Link>
              <Link
                href="/#stories"
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 text-sm text-shell"
              >
                Learn
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
