"use client";

import {
  ArrowRight,
  Beaker,
  BookOpen,
  ExternalLink,
  FlaskConical,
  Lock,
  Menu,
  Package,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { bundles } from "@/lib/catalog";
import { products } from "@/lib/products";

const nav = [
  { href: "/products", label: "Shop", hasMenu: true, icon: ShoppingBag },
  { href: "/#science", label: "Science", hasMenu: false, icon: FlaskConical },
  { href: "/#stories", label: "Learn", hasMenu: false, icon: BookOpen },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const lightChrome = false;

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
            <BrandLogo tone={lightChrome ? "light" : "dark"} size="sm" />
            <nav className="ml-1.5 hidden items-center gap-0.5 md:flex">
              {nav.map((item) => {
                const Icon = item.icon;
                const itemClass = `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.88rem] transition ${
                  lightChrome
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-[#1f2118]/80 hover:bg-black/5 hover:text-[#1f2118]"
                }`;

                if (item.hasMenu) {
                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => setShopOpen((value) => !value)}
                      className={`${itemClass} ${
                        shopOpen
                          ? lightChrome
                            ? "bg-white/10"
                            : "bg-black/5"
                          : ""
                      }`}
                      aria-expanded={shopOpen}
                      aria-haspopup="true"
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link key={item.href} href={item.href} className={itemClass}>
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <button
              type="button"
              className={`ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full md:hidden ${
                lightChrome ? "text-white" : "text-[#1f2118]"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>
          </div>

          <div
            className={`absolute left-0 top-[calc(100%+0.35rem)] hidden w-[340px] origin-top transition md:block ${
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
                      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#1c1c16]">
                        <Image
                          src={product.cardImage}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                          {product.benefitTags[0]}
                        </span>
                        <span className="block truncate text-sm font-medium text-shell">
                          {product.name}
                        </span>
                      </span>
                      {product.badge === "New" ? (
                        <span className="seed-pill ml-auto inline-flex items-center gap-1 bg-[#d9d4c4] px-2 py-0.5 text-[0.65rem] text-shell">
                          <Sparkles className="h-3 w-3" strokeWidth={1.75} />
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
                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#ebe8df]">
                      <Package className="h-4 w-4 text-shell" strokeWidth={1.75} />
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
                <span className="inline-flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
                  Shop all products
                </span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/products"
          className={`seed-pill inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[0.88rem] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition ${
            lightChrome
              ? "bg-white text-[#1f2118] hover:bg-[#f4f2eb]"
              : "bg-[#2f2e24] text-white hover:bg-[#3d3c31]"
          }`}
        >
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />
          Shop
        </Link>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1400px] md:hidden">
          <div className="seed-card bg-white/95 px-3 py-3 text-[#1f2118] shadow-lg backdrop-blur-xl">
            <p className="flex items-center gap-2 px-2 pb-2 text-xs uppercase tracking-[0.14em] text-muted">
              <Beaker className="h-3.5 w-3.5" strokeWidth={1.75} />
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
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-[#1c1c16]">
                    <Image
                      src={product.cardImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>
                  <span className="text-sm text-shell">{product.name}</span>
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-shell"
              >
                Shop all products
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              <Link
                href="/#science"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-shell"
              >
                <FlaskConical className="h-4 w-4" strokeWidth={1.75} />
                Science
              </Link>
              <Link
                href="/#stories"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-shell"
              >
                <BookOpen className="h-4 w-4" strokeWidth={1.75} />
                Learn
              </Link>
              <a
                href="https://www.purgolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-shell"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                Purgo Labs
              </a>
            </div>
            <div className="mt-3 flex gap-3 border-t border-line px-2 pt-3 text-[0.7rem] text-muted">
              <span className="inline-flex items-center gap-1">
                <Lock className="h-3 w-3" strokeWidth={1.75} />
                Secure checkout
              </span>
              <span className="inline-flex items-center gap-1">
                <Truck className="h-3 w-3" strokeWidth={1.75} />
                Free US shipping
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
