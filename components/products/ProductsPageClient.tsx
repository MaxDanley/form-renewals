"use client";

import {
  ArrowRight,
  BadgePercent,
  ExternalLink,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PurgoButton from "@/components/PurgoButton";
import Reveal from "@/components/motion/Reveal";
import { bundles, getBundleProducts } from "@/lib/catalog";
import { productImageClass } from "@/lib/images";
import { formatPrice, products, type FormProduct } from "@/lib/products";

function ShopProductCard({ product }: { product: FormProduct }) {
  const src = product.cardImage ?? product.image;

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/products/${product.slug}`}
        className="seed-card relative aspect-[4/5] overflow-hidden bg-[#ebe8df]"
      >
        <Image
          src={src}
          alt={product.name}
          fill
          className={`${productImageClass(src)} transition duration-500 group-hover:scale-[1.03]`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.badge ? (
          <span className="seed-pill absolute left-3 top-3 inline-flex items-center gap-1 bg-white/92 px-3 py-1 text-xs text-shell shadow-sm backdrop-blur">
            <Sparkles className="h-3 w-3" strokeWidth={1.75} />
            {product.badge}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-3 px-1 pt-5">
        <h3 className="text-xl font-medium tracking-[-0.02em] text-shell">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-xs uppercase tracking-[0.14em] text-muted">
          {product.benefitTags.join(" · ")}
        </p>
        <p className="text-lg font-medium text-shell">
          {formatPrice(product.price)}
        </p>
        <div className="mt-auto flex flex-col gap-2 pt-2">
          <PurgoButton
            href={product.purgoUrl}
            className="w-full !px-5 !py-3 !text-sm"
            icon={<ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />}
          >
            Shop Now
          </PurgoButton>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-shell transition hover:opacity-70"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function BundlePromo() {
  const full = bundles[1];
  const items = getBundleProducts(full);

  return (
    <article className="seed-shell relative min-h-[420px] overflow-hidden bg-shell text-white md:min-h-full">
      <Image
        src="/images/home/s5-bundle.jpg"
        alt=""
        fill
        className="object-cover object-[center_20%]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c16] via-[#1c1c16]/55 to-[#1c1c16]/20" />
      <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 md:p-8">
        <span className="seed-pill mb-3 inline-flex w-fit items-center gap-1 bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">
          <BadgePercent className="h-3.5 w-3.5" strokeWidth={1.75} />
          {full.badge}
        </span>
        <p className="text-xs uppercase tracking-[0.16em] text-white/70">
          Build your ritual
        </p>
        <h3 className="mt-2 max-w-[14ch] text-2xl font-medium tracking-[-0.02em] md:text-3xl">
          {full.name}
        </h3>
        <p className="mt-3 max-w-sm text-sm text-white/80">{full.tagline}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/60">
          {items.map((item) => item.name).join(" · ")}
        </p>
        <p className="mt-4 flex items-baseline gap-3 text-lg font-medium">
          <span>{formatPrice(full.price)}</span>
          <span className="text-sm font-normal text-white/55 line-through">
            {formatPrice(full.compareAt)}
          </span>
        </p>
        <div className="mt-6">
          <PurgoButton
            href={full.purgoUrl}
            variant="light"
            className="!px-5 !py-2.5 !text-sm"
            icon={<ShoppingBag className="h-4 w-4" strokeWidth={1.75} />}
          >
            Shop the ritual
          </PurgoButton>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPageClient() {
  const duo = bundles[0];
  const duoItems = getBundleProducts(duo);

  return (
    <div className="min-h-screen bg-[#f4f2eb]">
      <section className="px-3 pb-3 pt-20 md:px-5 md:pb-5 md:pt-24">
        <div className="seed-shell relative mx-auto min-h-[42svh] max-w-[1400px] overflow-hidden bg-[#eceae3] md:min-h-[52svh]">
          <Image
            src="/images/home/s1-shop-hero.jpg"
            alt="[FORM] renewal copper peptide lineup"
            fill
            priority
            className="object-cover object-[center_60%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f2eb]/90 via-[#f4f2eb]/55 to-transparent" />
          <div className="relative flex min-h-[42svh] items-end px-6 py-10 md:min-h-[52svh] md:px-12 md:py-14">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                The lineup
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-medium leading-[1.12] tracking-[-0.03em] text-shell md:max-w-3xl md:text-6xl">
                Excellence.
                <span className="block">Made effortless.</span>
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Three copper peptide formulas for scalp and skin. No internal
                codes — just the ritual: shampoo, capsules, and lift cream.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ShopProductCard key={product.slug} product={product} />
            ))}
            <BundlePromo />
          </div>
        </Reveal>
      </section>

      <section className="px-3 pb-3 md:px-5 md:pb-5">
        <div className="seed-shell mx-auto grid max-w-[1400px] overflow-hidden bg-[#fffcf7] md:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[480px]">
            <Image
              src="/images/home/s6-duo.jpg"
              alt="Copper Growth Shampoo and Capsule Cream"
              fill
              className="object-cover object-[72%_center]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 md:p-14">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Bundle + save {duo.savePercent}%
            </p>
            <h2 className="max-w-[14ch] text-3xl font-medium tracking-[-0.02em] text-shell md:text-4xl">
              {duo.name}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              {duo.description}
            </p>
            <p className="text-sm text-muted">
              {duoItems.map((item) => item.name).join(" + ")}
            </p>
            <p className="flex items-baseline gap-3 text-xl font-medium text-shell">
              <span>{formatPrice(duo.price)}</span>
              <span className="text-sm font-normal text-muted line-through">
                {formatPrice(duo.compareAt)}
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <PurgoButton
                href={duo.purgoUrl}
                icon={<ShoppingBag className="h-4 w-4" strokeWidth={1.75} />}
              >
                Shop the duo
              </PurgoButton>
              <Link
                href={`/products/${duoItems[0]?.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-shell underline underline-offset-4"
              >
                Learn more
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
