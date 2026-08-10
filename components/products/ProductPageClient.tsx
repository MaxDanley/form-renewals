"use client";

import Link from "next/link";
import Accordion from "@/components/Accordion";
import ProductImage from "@/components/ProductImage";
import PurgoButton from "@/components/PurgoButton";
import StickyBuyBar from "@/components/StickyBuyBar";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { formatPrice, type FormProduct } from "@/lib/products";

export default function ProductPageClient({
  product,
  otherProducts,
}: {
  product: FormProduct;
  otherProducts: FormProduct[];
}) {
  return (
    <div className="min-h-screen bg-paper pb-24 pt-24">
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 md:grid-cols-2 md:gap-14 md:px-10 md:py-16">
        <Reveal className="space-y-4" y={36}>
          <Parallax offset={40}>
            <ProductImage
              src={product.image}
              alt={product.name}
              aspect="portrait"
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </Parallax>
          <div className="grid grid-cols-2 gap-4">
            <ProductImage
              src={product.secondImage}
              alt={`${product.name} packaging`}
              aspect="square"
              sizes="(max-width: 768px) 50vw, 22vw"
            />
            <ProductImage
              src={product.image}
              alt={`${product.name} detail`}
              aspect="square"
              sizes="(max-width: 768px) 50vw, 22vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:sticky md:top-28 md:self-start">
          <div className="flex flex-wrap items-center gap-3">
            {product.badge ? (
              <span className="seed-pill bg-brand-mist px-3 py-1 text-xs text-shell">
                {product.badge}
              </span>
            ) : null}
            <span className="text-xs uppercase tracking-[0.14em] text-muted">
              {product.code}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
            {product.name}
          </h1>
          <p className="font-renewal mt-2 text-xl text-brand-deep">renewal</p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {product.description}
          </p>

          <p className="mt-8 text-3xl tracking-[-0.02em] text-shell">
            {formatPrice(product.price)}
          </p>
          <p className="mt-2 text-sm text-muted">
            {product.size}. Purchase fulfilled on Purgo Labs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PurgoButton href={product.purgoUrl} className="w-full sm:w-auto">
              Shop at Purgo Labs
            </PurgoButton>
            <PurgoButton href="/products" external={false} variant="secondary">
              All formulas
            </PurgoButton>
          </div>

          <p className="mt-4 text-xs text-muted">
            Free US shipping on Purgo Labs orders · Risk-free store policies apply
            on Purgo.
          </p>

          <div className="mt-10">
            <Accordion
              items={[
                {
                  title: "Benefits",
                  content: (
                    <ul className="space-y-2">
                      {product.benefits.map((benefit) => (
                        <li key={benefit}>• {benefit}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Key actives",
                  content: (
                    <p>
                      <span className="inline-flex rounded-full border border-brand/40 px-3 py-1 font-form text-[0.7rem] uppercase tracking-[0.12em] text-brand-deep">
                        {product.actives}
                      </span>
                    </p>
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

      <section className="bg-paper-strong">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium tracking-[-0.02em] text-shell md:text-4xl">
              Feel the difference of peptide-led care.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-8 md:grid-cols-3" delay={0.05}>
            {product.features.map((feature, index) => (
              <StaggerItem key={feature.title}>
                <ProductImage
                  src={index % 2 === 0 ? product.image : product.secondImage}
                  alt={feature.title}
                  aspect="square"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
                <h3 className="mt-5 text-lg font-medium tracking-[-0.01em] text-shell">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-shell">
              Unlike ordinary wash-and-go formulas.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              [FORM] renewal keeps the actives front and center — copper peptides,
              clear directions, and packaging that stays quiet on purpose.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line">
                    <th className="py-3 font-form text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                      Compare
                    </th>
                    <th className="py-3 font-form text-[0.7rem] uppercase tracking-[0.14em]">
                      [FORM]
                    </th>
                    <th className="py-3 font-form text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                      Typical
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  {[
                    ["Peptide-forward actives", "Yes", "Rare"],
                    ["Clear leave-on / use guidance", "Yes", "Varies"],
                    ["Clinical, low-noise branding", "Yes", "Uncommon"],
                    ["Purchase via Purgo Labs today", "Yes", "—"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-line">
                      <td className="py-3 pr-4 text-ink">{row[0]}</td>
                      <td className="py-3 pr-4 text-ink">{row[1]}</td>
                      <td className="py-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-strong">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-10">
          <Reveal>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-shell">
              Questions? We&apos;re here to help.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <Accordion
              items={product.faqs.map((faq) => ({
                title: faq.question,
                content: <p>{faq.answer}</p>,
              }))}
            />
          </Reveal>
        </div>
      </section>

      {otherProducts.length ? (
        <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-shell">
              More from [FORM]
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-8 md:grid-cols-2">
            {otherProducts.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  className="seed-card group grid gap-4 bg-paper-strong p-4 transition hover:-translate-y-1 sm:grid-cols-[140px_1fr]"
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
                    <p className="mt-3 text-sm text-shell">{formatPrice(item.price)}</p>
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
