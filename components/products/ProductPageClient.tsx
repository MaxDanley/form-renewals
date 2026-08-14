"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Lock,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Accordion from "@/components/Accordion";
import ProductImage from "@/components/ProductImage";
import PurgoButton from "@/components/PurgoButton";
import StickyBuyBar from "@/components/StickyBuyBar";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { formatPrice, type FormProduct } from "@/lib/products";

function isLifestyleShot(src: string) {
  return src.includes("lifestyle") || src.includes("packaging");
}

export default function ProductPageClient({
  product,
  otherProducts,
}: {
  product: FormProduct;
  otherProducts: FormProduct[];
}) {
  const gallery = product.gallery?.length
    ? product.gallery
    : [product.image, product.secondImage];
  const [active, setActive] = useState(0);
  const heroSrc = gallery[active] ?? product.image;
  const lifestyleFit = isLifestyleShot(heroSrc) ? "cover" : "contain";

  return (
    <div className="min-h-screen bg-[#f4f2eb] pb-24 pt-24">
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10 md:py-16">
        <Reveal className="space-y-4" y={24}>
          <div className="seed-card relative aspect-[3/4] overflow-hidden bg-[#ebe8df]">
            <Image
              src={heroSrc}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
              className={
                lifestyleFit === "cover"
                  ? "object-cover object-center"
                  : "object-contain object-center p-8 md:p-12"
              }
            />
          </div>
          {gallery.length > 1 ? (
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`seed-card relative aspect-square overflow-hidden bg-[#ebe8df] transition ${
                    active === index
                      ? "ring-2 ring-[#2f2e24] ring-offset-2 ring-offset-[#f4f2eb]"
                      : "opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="120px"
                    className={
                      isLifestyleShot(src)
                        ? "object-cover"
                        : "object-contain p-3"
                    }
                  />
                </button>
              ))}
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.06} className="md:sticky md:top-28 md:self-start">
          <div className="flex flex-wrap items-center gap-3">
            {product.badge ? (
              <span className="seed-pill bg-[#ebe8df] px-3 py-1 text-xs text-shell">
                {product.badge}
              </span>
            ) : null}
            <span className="text-xs uppercase tracking-[0.14em] text-muted">
              {product.code}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {product.description}
          </p>

          <p className="mt-8 text-2xl tracking-[-0.02em] text-shell md:text-3xl">
            {formatPrice(product.price)}
          </p>
          <p className="mt-2 text-sm text-muted">{product.size}</p>
          <p className="mt-1 text-sm text-muted">{product.actives}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PurgoButton
              href={product.purgoUrl}
              className="w-full sm:w-auto"
              icon={<ShoppingBag className="h-4 w-4" strokeWidth={1.75} />}
              iconRight={<ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />}
            >
              Shop Now
            </PurgoButton>
            <PurgoButton
              href="/products"
              external={false}
              variant="secondary"
              icon={<ArrowLeft className="h-4 w-4" strokeWidth={1.75} />}
            >
              Back to shop
            </PurgoButton>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" strokeWidth={1.75} />
              Secure checkout on Purgo Labs
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5" strokeWidth={1.75} />
              Free US shipping on qualifying orders
            </span>
          </div>

          <div className="mt-10">
            <Accordion
              items={[
                {
                  title: "Benefits",
                  content: (
                    <ul className="space-y-2">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep"
                            strokeWidth={1.75}
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Directions",
                  content: <p>{product.directions}</p>,
                },
                {
                  title: "Ingredients",
                  content: <p>{product.ingredients}</p>,
                },
              ]}
            />
          </div>
        </Reveal>
      </section>

      <section className="px-3 pb-3 md:px-5 md:pb-5">
        <div className="seed-shell mx-auto max-w-[1400px] bg-[#7b7869] px-6 py-14 text-white md:px-12 md:py-16">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              Built for a ritual you can repeat.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-8 md:grid-cols-3" delay={0.04}>
            {product.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <h3 className="text-lg font-medium tracking-[-0.01em]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {feature.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-20">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-shell">
            Questions
          </h2>
        </Reveal>
        <Reveal delay={0.06} className="mt-8">
          <Accordion
            items={product.faqs.map((faq) => ({
              title: faq.question,
              content: <p>{faq.answer}</p>,
            }))}
          />
        </Reveal>
      </section>

      {otherProducts.length ? (
        <section className="mx-auto max-w-[1400px] px-5 pb-16 md:px-10 md:pb-20">
          <Reveal>
            <h2 className="inline-flex items-center gap-2 text-2xl font-medium tracking-[-0.02em] text-shell">
              More from the lineup
              <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
            {otherProducts.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  className="seed-card group grid gap-4 bg-[#fffcf7] p-4 transition hover:-translate-y-1 sm:grid-cols-[140px_1fr]"
                >
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    aspect="square"
                    sizes="140px"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-medium tracking-[-0.01em] text-shell">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-muted">{item.tagline}</p>
                    <p className="mt-3 text-sm text-shell">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      ) : null}

      <StickyBuyBar
        name={product.name}
        price={product.price}
        purgoUrl={product.purgoUrl}
      />
    </div>
  );
}
