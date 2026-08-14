"use client";

import {
  ArrowRight,
  BadgePercent,
  ExternalLink,
  FlaskConical,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PurgoButton from "@/components/PurgoButton";
import Reveal from "@/components/motion/Reveal";
import { bundles, getBundleProducts } from "@/lib/catalog";
import { formatPrice, products, type FormProduct } from "@/lib/products";

const ease = [0.22, 1, 0.36, 1] as const;
const featured = products[0];
const duo = bundles[0];
const gridProducts = products.slice(1);

function CodePill({
  code,
  tone = "dark",
}: {
  code: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`seed-pill inline-flex border px-3 py-1 text-[0.7rem] uppercase tracking-[0.12em] ${
        tone === "light"
          ? "border-white/35 text-white"
          : "border-[#2f2e24]/25 text-shell"
      }`}
    >
      {code}
    </span>
  );
}

function ShopProductCard({ product }: { product: FormProduct }) {
  return (
    <article className="seed-shell flex h-full min-h-[320px] flex-col overflow-hidden bg-[#fffcf7] md:min-h-[340px] md:flex-row">
      <div className="relative min-h-[220px] flex-1 bg-[#ebe8df] md:min-h-0">
        {product.badge ? (
          <span className="seed-pill absolute left-4 top-4 z-10 inline-flex items-center gap-1 bg-[#d9d4c4] px-3 py-1 text-xs text-shell">
            <Sparkles className="h-3 w-3" strokeWidth={1.75} />
            {product.badge}
          </span>
        ) : null}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain object-center p-8 md:p-10"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-8">
        <div>
          <CodePill code={product.code} />
          <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-shell">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
            {product.tagline}
          </p>
          <p className="mt-5 text-lg font-medium text-shell">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <PurgoButton
            href={`/products/${product.slug}`}
            external={false}
            variant="primary"
            className="!px-5 !py-2.5 !text-sm"
            iconRight={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />}
          >
            Learn More
          </PurgoButton>
          <a
            href={product.purgoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-shell underline underline-offset-4 transition hover:opacity-70"
          >
            Shop Now
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </article>
  );
}

function BundleCard() {
  const items = getBundleProducts(duo);

  return (
    <article className="seed-shell flex h-full min-h-[320px] flex-col overflow-hidden bg-[#fffcf7] md:min-h-[340px] md:flex-row">
      <div className="relative min-h-[220px] flex-1 bg-[#ebe8df] md:min-h-0">
        <span className="seed-pill absolute left-4 top-4 z-10 inline-flex items-center gap-1 bg-[#c5c29a] px-3 py-1 text-xs text-shell">
          <BadgePercent className="h-3.5 w-3.5" strokeWidth={1.75} />
          {duo.badge}
        </span>
        <div className="absolute inset-0 grid grid-cols-2 items-end gap-2 p-6 md:p-8">
          {items.map((item) => (
            <div key={item.slug} className="relative h-full min-h-[160px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain object-bottom p-2"
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-8">
        <div>
          <CodePill code="DUO" />
          <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-shell">
            {duo.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
            {duo.description}
          </p>
          <p className="mt-5 flex items-baseline gap-3 text-lg font-medium text-shell">
            <span>{formatPrice(duo.price)}</span>
            <span className="text-sm font-normal text-muted line-through">
              {formatPrice(duo.compareAt)}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <PurgoButton
            href={`/products/${items[0]?.slug}`}
            external={false}
            variant="primary"
            className="!px-5 !py-2.5 !text-sm"
            iconRight={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />}
          >
            Learn More
          </PurgoButton>
          <a
            href={duo.purgoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-shell underline underline-offset-4 transition hover:opacity-70"
          >
            Shop Now
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPageClient() {
  const [activeSlug, setActiveSlug] = useState(featured.slug);
  const active = products.find((p) => p.slug === activeSlug) ?? featured;

  return (
    <div className="min-h-screen bg-[#f4f2eb]">
      {/* Hero */}
      <section className="relative min-h-[72svh] overflow-hidden bg-shell md:min-h-[80svh]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <Image
            src="/hero.jpg"
            alt="[FORM] renewal peptide care"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-[#2f2e24]/55" />
        </motion.div>

        <div className="relative mx-auto flex min-h-[72svh] max-w-[1400px] items-end px-6 pb-16 pt-32 md:min-h-[80svh] md:px-10 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="max-w-[16ch] text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl"
          >
            Peptide care, made for scalp and skin.
          </motion.h1>
        </div>
      </section>

      {/* Featured bestseller band */}
      <section className="bg-[#f4f2eb] px-3 pb-3 pt-3 md:px-5 md:pb-5">
        <div className="seed-shell mx-auto grid max-w-[1400px] overflow-hidden bg-[#7b7869] text-white lg:grid-cols-[0.85fr_1.35fr_0.9fr]">
          <div className="border-b border-white/10 p-5 md:p-6 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-white/60">
              Lineup
            </p>
            <div className="flex flex-col gap-2">
              {products.map((product) => {
                const selected = product.slug === active.slug;
                return (
                  <button
                    key={product.slug}
                    type="button"
                    onClick={() => setActiveSlug(product.slug)}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition ${
                      selected ? "bg-white/15" : "hover:bg-white/8"
                    }`}
                  >
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white/10">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        className="object-contain p-1.5"
                        sizes="48px"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-white/55">
                        {product.code}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {product.shortName}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
            <div>
              {active.badge ? (
                <span className="seed-pill mb-4 inline-flex bg-[#c5c29a] px-3 py-1 text-xs text-shell">
                  {active.badge}
                </span>
              ) : null}
              <div className="mt-2">
                <CodePill code={active.code} tone="light" />
              </div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                {active.name}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                {active.tagline}
              </p>
              <p className="mt-6 text-2xl font-medium">
                {formatPrice(active.price)}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <PurgoButton
                href={`/products/${active.slug}`}
                external={false}
                variant="light"
                className="!px-5 !py-2.5 !text-sm"
                iconRight={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />}
              >
                Learn More
              </PurgoButton>
              <a
                href={active.purgoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white underline underline-offset-4 transition hover:opacity-70"
              >
                <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />
                Shop Now
              </a>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src={
                active.slug === featured.slug
                  ? "/products/form-shampoo-lifestyle.png"
                  : active.secondImage
              }
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f2e24]/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-sm text-white/85">
                Not sure where to start?
              </p>
              <Link
                href="/#science"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white underline underline-offset-4"
              >
                <FlaskConical className="h-3.5 w-3.5" strokeWidth={1.75} />
                Learn the science
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equal-height product + bundle grid */}
      <section className="mx-auto max-w-[1400px] px-3 py-8 md:px-5 md:py-12">
        <Reveal>
          <div className="grid auto-rows-fr gap-4 md:grid-cols-2 md:gap-5">
            {gridProducts.map((product) => (
              <ShopProductCard key={product.slug} product={product} />
            ))}
            <BundleCard />
            <article className="seed-shell relative min-h-[320px] overflow-hidden bg-shell text-white md:min-h-[340px]">
              <Image
                src="/products/form-shampoo-packaging.jpg"
                alt=""
                fill
                className="object-cover opacity-55"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative flex h-full min-h-[320px] flex-col justify-end p-6 md:min-h-[340px] md:p-8">
                <span className="seed-pill mb-3 inline-flex w-fit items-center gap-1 bg-[#c5c29a] px-3 py-1 text-xs text-shell">
                  <BadgePercent className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {bundles[1].badge}
                </span>
                <h3 className="max-w-[14ch] text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                  {bundles[1].name}
                </h3>
                <p className="mt-3 max-w-sm text-sm text-white/80">
                  {bundles[1].description}
                </p>
                <p className="mt-4 flex items-baseline gap-3 text-lg font-medium">
                  <span>{formatPrice(bundles[1].price)}</span>
                  <span className="text-sm font-normal text-white/55 line-through">
                    {formatPrice(bundles[1].compareAt)}
                  </span>
                </p>
                <div className="mt-6">
                  <PurgoButton
                    href={bundles[1].purgoUrl}
                    variant="light"
                    className="!px-5 !py-2.5 !text-sm"
                    icon={<ShoppingBag className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Shop the ritual
                  </PurgoButton>
                </div>
              </div>
            </article>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
