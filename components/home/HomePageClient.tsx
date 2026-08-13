"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import PurgoButton from "@/components/PurgoButton";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PURGO_ORIGIN } from "@/lib/brand";
import { formatPrice, products } from "@/lib/products";

const ease = [0.22, 1, 0.36, 1] as const;
const shampoo = products[0];
const capsule = products[1];
const lift = products[2];

const stories = [
  {
    name: "Maya",
    quote: "The shampoo ritual finally feels clinical and calm.",
    image: shampoo.image,
  },
  {
    name: "Jordan",
    quote: "Capsule Cream melted in and layered under everything else.",
    image: capsule.image,
  },
  {
    name: "Avery",
    quote: "Lift Cream is the small jar I actually finish.",
    image: lift.image,
  },
];

function HeroSection() {
  return (
    <section className="relative w-full bg-[#f4f2eb] pb-3 md:pb-5">
      <div className="seed-hero relative min-h-[92svh] w-full bg-[#eceae3]">
        <Image
          src="/hero.jpg"
          alt="[FORM] renewal copper peptide lineup"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] md:object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f2eb]/92 via-[#f4f2eb]/72 to-transparent md:from-[#f4f2eb]/88 md:via-[#f4f2eb]/40 md:to-transparent" />

        <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1400px] items-center px-6 py-28 md:px-14 md:py-24">
          <div className="max-w-lg text-[#1f2118]">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="max-w-[16ch] text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-balance text-[#2f2e24] md:text-[2.35rem]"
            >
              A life-changing care routine, built around peptides.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="mt-4 max-w-md text-sm leading-relaxed text-[#3d3c31] md:text-[0.95rem]"
            >
              Transform scalp and skin with copper peptide formulas designed for
              real, repeatable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <PurgoButton href="/products" external={false} variant="primary">
                Shop the lineup
              </PurgoButton>
              <Link
                href={shampoo.purgoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#2f2e24] transition hover:opacity-70"
              >
                Buy on Purgo <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="lineup" className="bg-[#f4f2eb] px-3 pb-3 md:px-5 md:pb-5">
      <div className="seed-shell mx-auto max-w-[1400px] bg-[#7b7869] px-6 py-16 text-white md:px-12 md:py-24">
        <Reveal className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
          <h2 className="max-w-[14ch] text-3xl font-medium tracking-[-0.02em] text-white md:text-5xl">
            Whole body care starts with peptides.
          </h2>
          <div>
            <p className="max-w-md text-base leading-relaxed text-white/80">
              Formulations that provide sustained support using clinically
              studied copper peptides.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-flex items-center gap-1 text-[0.95rem] font-medium text-white transition hover:opacity-70"
            >
              Shop All <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3" delay={0.05}>
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <div className="seed-card bg-[#8a8778] p-4 md:p-5">
                <ProductCard product={product} tone="onDark" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="bg-shell px-3 py-3 md:px-5 md:py-5">
      <div className="seed-shell mx-auto max-w-[1400px] bg-paper-strong">
        <div className="grid items-center gap-8 px-6 py-12 md:grid-cols-2 md:gap-12 md:px-12 md:py-16">
          <Reveal>
            <span className="seed-pill inline-flex bg-brand-mist px-3 py-1.5 text-sm text-shell">
              Bundle the ritual
            </span>
            <h2 className="mt-5 max-w-[16ch] text-3xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
              Daily essentials for scalp and skin.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Our copper peptide shampoo paired with Capsule Cream supports scalp
              clarity and firmer-looking skin in one quiet ritual.
            </p>
            <div className="mt-8">
              <PurgoButton href="/products" external={false} variant="primary">
                Shop the lineup
              </PurgoButton>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              <div className="seed-card relative aspect-[5/4] bg-brand-mist">
                <div className="absolute inset-0 grid grid-cols-2 items-end gap-2 p-6">
                  <div className="relative h-full">
                    <Image
                      src={shampoo.image}
                      alt={shampoo.name}
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                    <span className="absolute left-1/2 top-2 -translate-x-1/2 seed-pill bg-white px-2 py-1 text-[0.7rem] text-shell shadow">
                      {shampoo.code}
                    </span>
                  </div>
                  <div className="relative h-full">
                    <Image
                      src={capsule.image}
                      alt={capsule.name}
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                    <span className="absolute left-1/2 top-2 -translate-x-1/2 seed-pill bg-white px-2 py-1 text-[0.7rem] text-shell shadow">
                      {capsule.code}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[shampoo.image, shampoo.secondImage, capsule.secondImage].map(
                  (src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className="seed-card relative aspect-square bg-brand-mist"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-contain p-3"
                        sizes="160px"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TechSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const count = useTransform(scrollYProgress, [0.2, 0.55], [0, 12]);
  const [display, setDisplay] = useState(0);
  useMotionValueEvent(count, "change", (v) => setDisplay(Math.round(v)));

  return (
    <section
      ref={ref}
      id="technology"
      className="relative px-3 py-3 md:px-5 md:py-5"
    >
      <div className="seed-shell relative mx-auto min-h-[85svh] max-w-[1400px] overflow-hidden bg-[linear-gradient(160deg,#4a4838_0%,#6f6c52_40%,#8a8664_100%)]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={capsule.secondImage}
            alt=""
            fill
            className="object-cover blur-2xl scale-125"
            sizes="100vw"
          />
        </div>

        <div className="relative flex min-h-[85svh] items-center px-4 py-16 md:px-10">
          <div className="glass-panel seed-shell grid w-full gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                ● Peptide technology
              </p>
              <h2 className="mt-4 max-w-[16ch] text-3xl font-medium tracking-[-0.02em] text-white md:text-5xl">
                Most formulas talk peptides—[FORM] doses them.
              </h2>
              <div className="mt-8 seed-card inline-flex items-center gap-3 bg-white/10 px-4 py-3 text-white">
                <span className="text-sm text-white/75">Copper peptide focus</span>
                <span className="text-2xl font-medium">↑{display}x</span>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                    Scalp delivery
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    GHK-Cu + AHK-Cu cleanse with a short leave-on window before rinse.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                    Skin delivery
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    Capsule Cream melts on contact for sustained-release actives.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="seed-card relative mx-auto aspect-square max-w-md bg-white/10">
                <Image
                  src={shampoo.image}
                  alt={shampoo.name}
                  fill
                  className="object-contain p-8"
                  sizes="420px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScienceSection() {
  return (
    <section id="science" className="bg-paper px-3 py-16 md:px-5 md:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.16em] text-muted">
            Science
          </p>
          <h2 className="mt-4 max-w-[14ch] text-3xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
            Copper peptides, made simple.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Scalp and skin respond to what you repeat. Our formulas put GHK-Cu
            and companion actives front and center—so the ritual stays clear,
            calm, and consistent.
          </p>
          <div className="mt-8">
            <PurgoButton href="/products" external={false} variant="primary">
              Explore formulas
            </PurgoButton>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="seed-card relative aspect-[4/5] bg-[#ebe8df] md:aspect-square">
            <Image
              src={shampoo.secondImage}
              alt={shampoo.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReviewSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="stories" className="bg-paper px-3 pb-10 md:px-5 md:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
            A quieter ritual, with clearer results.
          </h2>
          <p className="mt-4 text-base text-muted">
            Early notes from people building a copper peptide routine with [FORM].
          </p>
        </Reveal>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={stories[active].name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease }}
              className="seed-shell relative mx-auto aspect-[16/10] max-w-5xl overflow-hidden bg-[#ebe8df]"
            >
              <Image
                src={stories[active].image}
                alt={stories[active].name}
                fill
                className="object-contain p-12 md:p-16"
                sizes="900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2e24]/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white md:p-10">
                <div>
                  <p className="text-sm text-white/70">Member notes</p>
                  <p className="mt-2 max-w-md text-xl md:text-2xl">
                    “{stories[active].quote}”
                  </p>
                </div>
                <button
                  type="button"
                  className="seed-pill bg-white/15 px-4 py-2 text-sm backdrop-blur"
                  onClick={() =>
                    setActive((value) => (value + 1) % stories.length)
                  }
                >
                  Next · {stories[active].name}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function UgcSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-28%"]);

  const tiles = [
    { src: shampoo.image, label: "Copper Growth", fit: "contain" as const },
    {
      src: "/products/form-shampoo-lifestyle.png",
      label: "Bathroom ritual",
      fit: "cover" as const,
    },
    {
      src: "/products/form-shampoo-packaging.jpg",
      label: "Bottle + box",
      fit: "cover" as const,
    },
    { src: capsule.image, label: "Capsule Cream", fit: "contain" as const },
    { src: capsule.secondImage, label: "Packaging", fit: "contain" as const },
    { src: lift.image, label: "Lift Cream", fit: "contain" as const },
  ];

  return (
    <section ref={ref} className="overflow-hidden bg-paper px-3 py-16 md:px-5 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
            From the [FORM] lineup
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted">
            Studio and lifestyle shots of the copper peptide formulas.
          </p>
        </Reveal>
      </div>

      <motion.div style={{ x }} className="mt-10 flex w-max gap-4 px-3 md:gap-5 md:px-5">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="seed-shell relative h-[360px] w-[240px] overflow-hidden bg-[#ebe8df] md:h-[420px] md:w-[280px]"
          >
            <Image
              src={tile.src}
              alt={tile.label}
              fill
              className={
                tile.fit === "cover"
                  ? "object-cover object-center"
                  : "object-contain object-center p-8"
              }
              sizes="280px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2f2e24]/65 to-transparent p-4">
              <p className="text-sm text-white">{tile.label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function BookendSection() {
  return (
    <section className="bg-paper px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto grid max-w-[1400px] gap-3 md:grid-cols-2 md:gap-5">
        <Reveal>
          <div className="seed-shell relative min-h-[480px] overflow-hidden bg-shell">
            <Image
              src="/products/form-shampoo-lifestyle.png"
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="50vw"
            />
            <div className="relative flex h-full min-h-[480px] flex-col justify-end p-8 text-white md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Purgo Labs
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                Available through Purgo
              </h2>
              <p className="mt-3 max-w-sm text-white/80">
                Browse the formulas here, then complete purchase on Purgo Labs.
              </p>
              <div className="mt-6">
                <PurgoButton href={PURGO_ORIGIN} variant="light">
                  Visit Purgo
                </PurgoButton>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="seed-shell relative min-h-[480px] overflow-hidden bg-[#7b7869]">
            <div className="absolute inset-y-0 right-0 flex w-[55%] items-center justify-center">
              <div className="relative h-[70%] w-[70%]">
                <Image
                  src={shampoo.image}
                  alt={shampoo.name}
                  fill
                  className="object-contain"
                  sizes="280px"
                />
              </div>
            </div>
            <div className="relative flex h-full min-h-[480px] flex-col justify-end p-8 text-white md:p-10">
              <h2 className="max-w-[12ch] text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                Start with Copper Growth.
              </h2>
              <p className="mt-3 max-w-xs text-white/85">
                From {formatPrice(shampoo.price)}
              </p>
              <div className="mt-6">
                <PurgoButton href={shampoo.purgoUrl} variant="light">
                  Shop Now
                </PurgoButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePageClient() {
  return (
    <div className="bg-[#f4f2eb]">
      <HeroSection />
      <ProductSection />
      <HighlightSection />
      <TechSection />
      <ScienceSection />
      <ReviewSection />
      <UgcSection />
      <BookendSection />
    </div>
  );
}
