"use client";

import Link from "next/link";
import Accordion from "@/components/Accordion";
import PlaceholderImage from "@/components/PlaceholderImage";
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
    <div className="brand-atmosphere pb-24">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-2 md:gap-14 md:px-8 md:py-16">
        <Reveal className="space-y-4" y={36}>
          <Parallax offset={40}>
            <PlaceholderImage
              label={product.name}
              caption={`${product.code} · primary`}
              aspect="portrait"
              tone="brand"
            />
          </Parallax>
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderImage
              label="Detail"
              caption="Secondary"
              aspect="square"
              tone="mist"
            />
            <PlaceholderImage
              label="Lifestyle"
              caption="Secondary"
              aspect="square"
              tone="deep"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:sticky md:top-28 md:self-start">
          <div className="flex flex-wrap items-center gap-3">
            {product.badge ? (
              <span className="font-form text-[0.68rem] uppercase tracking-[0.16em] text-brand-deep">
                {product.badge}
              </span>
            ) : null}
            <span className="font-form text-[0.68rem] uppercase tracking-[0.16em] text-muted">
              {product.code}
            </span>
          </div>

          <h1 className="font-form mt-4 text-4xl uppercase tracking-[0.04em] md:text-5xl">
            {product.name}
          </h1>
          <p className="font-renewal mt-2 text-xl text-brand-deep">renewal</p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {product.description}
          </p>

          <p className="font-form mt-8 text-3xl tracking-[0.04em]">
            {formatPrice(product.price)}
          </p>
          <p className="mt-2 text-sm text-muted">
            {product.size}. Purchase fulfilled on Purgo Labs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PurgoButton href={product.purgoUrl} className="w-full sm:w-auto">
              Shop at Purgo Labs
            </PurgoButton>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 font-form text-[0.75rem] uppercase tracking-[0.16em] transition hover:border-ink/40"
            >
              All formulas
            </Link>
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

      <section className="section-rule bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Reveal>
            <h2 className="font-form max-w-xl text-3xl uppercase tracking-[0.04em] md:text-4xl">
              Feel the difference of peptide-led care.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-8 md:grid-cols-3" delay={0.05}>
            {product.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <PlaceholderImage
                  label={feature.title}
                  caption="Feature"
                  aspect="square"
                  tone="mist"
                />
                <h3 className="font-form mt-5 text-lg uppercase tracking-[0.08em]">
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

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <h2 className="font-form text-3xl uppercase tracking-[0.04em]">
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

      <section className="section-rule bg-white/40">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
          <Reveal>
            <h2 className="font-form text-3xl uppercase tracking-[0.04em]">
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
        <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Reveal>
            <h2 className="font-form text-2xl uppercase tracking-[0.06em]">
              More from [FORM]
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-8 md:grid-cols-2">
            {otherProducts.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  className="group grid gap-4 border border-line bg-white/40 p-4 transition hover:border-brand/40 sm:grid-cols-[140px_1fr]"
                >
                  <PlaceholderImage
                    label={item.shortName}
                    caption={item.code}
                    aspect="square"
                    tone="brand"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-form text-lg uppercase tracking-[0.06em]">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-muted">{item.tagline}</p>
                    <p className="mt-3 font-form text-sm">{formatPrice(item.price)}</p>
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
