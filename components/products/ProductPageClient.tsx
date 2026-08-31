"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Lock,
  Pause,
  Play,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Accordion from "@/components/Accordion";
import ComingSoonTag from "@/components/ComingSoonTag";
import PurgoButton from "@/components/PurgoButton";
import StickyBuyBar from "@/components/StickyBuyBar";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { isScenePhoto, productImageClass } from "@/lib/images";
import { formatPrice, type FormProduct } from "@/lib/products";

const tabs = [
  { id: "product", label: "Product" },
  { id: "benefits", label: "Benefits" },
  { id: "ingredients", label: "Ingredients" },
  { id: "how-to-use", label: "How to use" },
  { id: "faqs", label: "FAQs" },
] as const;

function ProductGallery({ product }: { product: FormProduct }) {
  const gallery = product.gallery?.length
    ? product.gallery
    : [product.image, product.secondImage];
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSrc = gallery[active] ?? product.image;
  const showVideo = Boolean(product.videoSrc) && playing;

  useEffect(() => {
    setPlaying(false);
    setActive(0);
  }, [product.slug]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (showVideo) {
      void videoRef.current.play().catch(() => undefined);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [showVideo, product.videoSrc]);

  return (
    <div className="space-y-4">
      <div className="seed-card relative aspect-[3/4] overflow-hidden bg-[#ebe8df]">
        {showVideo && product.videoSrc ? (
          <video
            ref={videoRef}
            src={product.videoSrc}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            loop
            controls={false}
          />
        ) : (
          <Image
            src={heroSrc}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 48vw"
            className={productImageClass(heroSrc)}
          />
        )}

        {product.videoSrc ? (
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-shell shadow-sm backdrop-blur"
            aria-label={playing ? "Pause product video" : "Play product video"}
          >
            {playing ? (
              <Pause className="h-3.5 w-3.5" strokeWidth={1.75} />
            ) : (
              <Play className="h-3.5 w-3.5" strokeWidth={1.75} />
            )}
            {playing ? "Pause" : "Play video"}
          </button>
        ) : null}
      </div>

      {gallery.length > 1 ? (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => {
                setActive(index);
                setPlaying(false);
              }}
              className={`relative aspect-square overflow-hidden rounded-[1.25rem] bg-[#ebe8df] transition ${
                active === index && !playing
                  ? "ring-2 ring-[#2f2e24] ring-offset-2 ring-offset-[#f4f2eb]"
                  : "opacity-80 hover:opacity-100"
              }`}
              aria-label={`View image ${index + 1} of ${product.name}`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className={productImageClass(src, true)}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ProductTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("product");

  useEffect(() => {
    const ids = tabs.map((tab) => tab.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id as (typeof tabs)[number]["id"]);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[4.5rem] z-30 bg-[#f4f2eb]/90 px-3 py-3 backdrop-blur-xl md:top-[5rem] md:px-5">
      <div className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`seed-pill shrink-0 px-4 py-2 text-sm font-medium transition ${
                selected
                  ? "bg-[#2f2e24] text-white"
                  : "bg-white/70 text-shell hover:bg-white"
              }`}
            >
              {tab.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductPageClient({
  product,
  otherProducts,
}: {
  product: FormProduct;
  otherProducts: FormProduct[];
}) {
  const [openGroup, setOpenGroup] = useState(0);
  const scene = product.benefitImage ?? product.cardImage ?? product.secondImage;

  return (
    <div className="min-h-screen bg-[#f4f2eb] pb-24">
      <div id="product" className="scroll-mt-28 pt-24">
        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10 md:py-16">
          <Reveal className="md:sticky md:top-36 md:self-start" y={24}>
            <ProductGallery product={product} />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flex flex-wrap items-center gap-3">
              {product.badge ? (
                <span className="seed-pill bg-[#ebe8df] px-3 py-1 text-xs text-shell">
                  {product.badge}
                </span>
              ) : null}
              <span className="text-xs uppercase tracking-[0.14em] text-muted">
                {product.benefitTags.join(" · ")}
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
              Size · {product.size}
            </p>
            <p className="mt-4 text-3xl tracking-[-0.02em] text-shell">
              {product.price === undefined
                ? "Price at launch"
                : formatPrice(product.price)}
            </p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Great for
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.greatFor.map((tag) => (
                  <span
                    key={tag}
                    className="seed-pill border border-[#2f2e24]/15 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-shell"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {product.purgoUrl ? (
                <PurgoButton
                  href={product.purgoUrl}
                  className="w-full sm:w-auto"
                  icon={<ShoppingBag className="h-4 w-4" strokeWidth={1.75} />}
                  iconRight={
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                  }
                >
                  Shop Now
                </PurgoButton>
              ) : (
                <ComingSoonTag className="w-full sm:w-auto" />
              )}
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
                {product.comingSoon
                  ? "Concentrated clinical actives · Formula final"
                  : "Concentrated clinical actives · Secure checkout"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5" strokeWidth={1.75} />
                {product.comingSoon
                  ? "Launching soon on Purgo Labs"
                  : "Free US shipping on qualifying orders"}
              </span>
            </div>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
              {product.story.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-[#ebe8df] px-6 py-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Key active concentration
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {product.keyActives.map((active) => (
                  <div key={active.name}>
                    <p className="font-renewal text-2xl text-shell md:text-3xl">
                      {active.name}
                    </p>
                    {active.percent ? (
                      <p className="mt-1 text-lg font-medium text-shell">
                        {active.percent}
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-muted">Featured active</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <ProductTabs />

      <section id="benefits" className="scroll-mt-28 px-3 py-6 md:px-5 md:py-10">
        <div className="seed-shell mx-auto grid max-w-[1400px] overflow-hidden bg-[#fffcf7] md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Formulated from peptide research
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-shell md:text-4xl">
              Trust the actives, not the noise.
            </h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {product.benefitGroups.map((group, index) => {
                const open = openGroup === index;
                return (
                  <div key={group.title}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={open}
                      onClick={() => setOpenGroup(open ? -1 : index)}
                    >
                      <span className="text-sm font-medium uppercase tracking-[0.14em] text-shell">
                        {group.title}
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 text-muted transition ${open ? "rotate-45" : ""}`}
                        strokeWidth={1.75}
                      />
                    </button>
                    {open ? (
                      <ul className="space-y-2 pb-5 text-sm leading-relaxed text-muted">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep"
                              strokeWidth={1.75}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden md:min-h-full">
            <Image
              src={scene}
              alt={product.name}
              fill
              className={
                isScenePhoto(scene)
                  ? "object-cover object-center"
                  : "object-contain object-center p-10"
              }
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section
        id="ingredients"
        className="scroll-mt-28 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24"
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            {product.name}
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
            Clinically minded ingredients
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {product.formulaBlurb}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-8 md:grid-cols-3" delay={0.05}>
          {product.featuredIngredients.map((ingredient) => (
            <StaggerItem key={ingredient.name} className="text-center">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-[#ebe8df]">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  className={productImageClass(ingredient.image)}
                  sizes="320px"
                />
              </div>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-shell">
                {ingredient.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="font-medium text-shell">Why we chose it: </span>
                {ingredient.why}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Full formula
            </p>
            <h3 className="mt-3 font-renewal text-3xl text-shell md:text-4xl">
              {product.ingredientCount} ingredients
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-muted md:text-base">
            {product.ingredients}
          </p>
        </Reveal>
      </section>

      <section
        id="how-to-use"
        className="scroll-mt-28 border-y border-line bg-[#fffcf7]"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              {product.ritualLabel}
            </p>
            <h2 className="mt-3 font-renewal text-4xl text-shell md:text-5xl">
              {product.ritualTitle}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {product.ritualSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                {product.ritualImages?.[index] ? (
                  <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#ebe8df]">
                    <Image
                      src={product.ritualImages[index]}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                ) : null}
                <p className="text-sm text-muted">{index + 1}</p>
                <p className="mt-4 font-renewal text-2xl leading-snug text-shell md:text-3xl">
                  {step}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            {product.directions}
          </p>
        </div>
      </section>

      <section
        id="faqs"
        className="scroll-mt-28 mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-20"
      >
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
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-shell">
              More from the lineup
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
            {otherProducts.map((item) => {
              const src = item.cardImage ?? item.image;
              return (
                <StaggerItem key={item.slug}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="seed-card group grid overflow-hidden bg-[#fffcf7] transition hover:-translate-y-1 sm:grid-cols-[160px_1fr]"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#ebe8df] sm:aspect-auto sm:min-h-full">
                      <Image
                        src={src}
                        alt={item.name}
                        fill
                        className={productImageClass(src, true)}
                        sizes="160px"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-5">
                      <p className="text-lg font-medium tracking-[-0.01em] text-shell">
                        {item.name}
                      </p>
                      <p className="mt-2 text-sm text-muted">{item.tagline}</p>
                      <p className="mt-3 text-sm text-shell">
                        {item.price === undefined
                          ? "Coming soon"
                          : formatPrice(item.price)}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
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
