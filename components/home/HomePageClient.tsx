"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";
import PurgoButton from "@/components/PurgoButton";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Parallax from "@/components/motion/Parallax";
import { PURGO_ORIGIN } from "@/lib/brand";
import { products } from "@/lib/products";

const ease = [0.22, 1, 0.36, 1] as const;

const stories = [
  {
    name: "Maya",
    quote: "The shampoo ritual finally feels clinical and calm — not noisy.",
    label: "Member story",
  },
  {
    name: "Jordan",
    quote: "Capsule Cream melted in and layered under everything else.",
    label: "Member story",
  },
  {
    name: "Avery",
    quote: "Lift Cream is the small jar I actually finish.",
    label: "Member story",
  },
];

const ugcTiles = [
  "Bathroom shelf",
  "Pump detail",
  "Morning ritual",
  "Scalp care",
  "Capsule melt",
  "Press note",
  "Travel kit",
  "Texture close-up",
];

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 hero-plane" />
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-y-0 right-0 hidden w-[52%] md:block"
      >
        <PlaceholderImage
          label="Copper Growth Shampoo"
          caption="Hero visual placeholder"
          aspect="square"
          tone="deep"
          className="!aspect-auto h-[120%] min-h-[120svh] rounded-none"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.12),transparent_40%)]" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24"
      >
        <div className="max-w-xl text-white md:max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="mb-8"
          >
            <BrandLogo href="/" tone="light" size="hero" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="font-form text-3xl uppercase leading-[1.05] tracking-[0.04em] text-balance md:text-5xl"
          >
            Peptide care for skin and scalp.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg"
          >
            Copper peptide formulas by [FORM] renewal — precise actives, quiet packaging.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <PurgoButton href={PURGO_ORIGIN} variant="light">
              Shop at Purgo Labs
            </PurgoButton>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 font-form text-[0.75rem] uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
            >
              View products
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 md:hidden">
          <PlaceholderImage
            label="Copper Growth Shampoo"
            caption="Hero visual placeholder"
            aspect="hero"
            tone="deep"
          />
        </div>
      </motion.div>
    </section>
  );
}

function ProductCarouselSection() {
  return (
    <section
      id="lineup"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <Reveal className="mb-4 max-w-2xl">
        <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-muted">
          Whole-body ritual, peptide-first
        </p>
      </Reveal>
      <Reveal delay={0.05} className="mb-4 max-w-2xl">
        <h2 className="font-form text-3xl uppercase tracking-[0.04em] md:text-4xl">
          Formulations that stay precise.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mb-12 max-w-xl">
        <p className="text-sm leading-relaxed text-muted">
          Three copper peptide formulas. Scroll to explore — photography placeholders
          for now, purchase on Purgo Labs.
        </p>
      </Reveal>

      <div className="mb-8 flex items-end justify-between gap-4">
        <Reveal>
          <p className="font-form text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Shop all
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href="/products"
            className="font-form text-[0.72rem] uppercase tracking-[0.16em] text-brand-deep underline-offset-4 hover:underline"
          >
            View catalog
          </Link>
        </Reveal>
      </div>

      <Stagger className="grid gap-10 md:grid-cols-3">
        {products.map((product) => (
          <StaggerItem key={product.slug}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="section-rule overflow-hidden bg-white/55">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <Reveal>
          <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-brand-deep">
            Bundle the ritual
          </p>
          <h2 className="font-form mt-3 text-3xl uppercase tracking-[0.04em] md:text-4xl">
            Scalp + skin, in one peptide language.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Pair Copper Growth Shampoo with Capsule Cream for a short weekly cleanse
            and a daily melt-on treatment — same brand system, different jobs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PurgoButton href={`${PURGO_ORIGIN}/products/ghk-cu-copper-peptide-shampoo`}>
              Shop shampoo
            </PurgoButton>
            <Link
              href="/products/capsule-cream"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 font-form text-[0.75rem] uppercase tracking-[0.16em] transition hover:border-ink/40"
            >
              View capsule cream
            </Link>
          </div>
        </Reveal>
        <Parallax offset={60}>
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderImage
              label="Shampoo"
              caption="Highlight"
              aspect="portrait"
              tone="brand"
            />
            <PlaceholderImage
              label="Capsule"
              caption="Highlight"
              aspect="portrait"
              tone="mist"
              className="mt-10"
            />
          </div>
        </Parallax>
      </div>
    </section>
  );
}

function PeptideTechSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const count = useTransform(scrollYProgress, [0.15, 0.55], [0, 12]);
  const [display, setDisplay] = useState(0);
  useMotionValueEvent(count, "change", (v) => setDisplay(Math.round(v)));

  const phases = [
    {
      title: "Copper cleanse",
      body: "GHK-Cu and AHK-Cu meet the scalp in a short leave-on window before rinse.",
    },
    {
      title: "Melt-on delivery",
      body: "Capsule Cream releases actives on contact — measured, layered, quiet.",
    },
    {
      title: "Focused refine",
      body: "Lift Cream concentrates GHK-Cu with Snap-8 where expression lines show.",
    },
  ];

  return (
    <section
      ref={ref}
      id="science"
      className="relative bg-brand text-white"
    >
      <div className="mx-auto grid min-h-[140vh] max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:px-8">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-white/70">
              ● Peptide technology
            </p>
            <h2 className="font-form mt-4 text-3xl uppercase tracking-[0.04em] md:text-4xl">
              Most formulas talk peptides. These dose them.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
              Scroll through the [FORM] delivery story — copper peptide care built for
              repeatable scalp and skin rituals.
            </p>
          </Reveal>

          <div className="mt-12">
            <p className="font-form text-[0.7rem] uppercase tracking-[0.18em] text-white/65">
              Copper peptide focus
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-form text-6xl tracking-[0.04em] md:text-7xl">
                ↑{display}
              </span>
              <span className="font-renewal mb-2 text-2xl text-white/80">x clarity</span>
            </div>
            <p className="mt-2 text-sm text-white/65">
              Scroll-linked marker — same interaction pattern as Seed&apos;s ViaCap counter.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-16 py-10">
          {phases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 0.05}>
              <div className="border-t border-white/20 pt-8">
                <p className="font-form text-[0.7rem] uppercase tracking-[0.2em] text-white/60">
                  0{index + 1}
                </p>
                <h3 className="font-form mt-3 text-2xl uppercase tracking-[0.08em]">
                  {phase.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                  {phase.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScienceSection() {
  return (
    <section id="routine" className="section-rule overflow-hidden bg-white/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <Reveal>
          <Parallax offset={40}>
            <PlaceholderImage
              label="Peptide science"
              caption="Science / Peptides 101"
              aspect="wide"
              tone="mist"
            />
          </Parallax>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-muted">
              Discover
            </p>
            <h2 className="font-form mt-3 text-3xl uppercase tracking-[0.04em] md:text-4xl">
              You are more than surface.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Skin and scalp respond to what you repeat. [FORM] renewal keeps the
              ritual short: cleanse, treat, refine — copper peptides without the noise.
            </p>
          </Reveal>
          <Stagger className="mt-8 space-y-4" delay={0.1}>
            {[
              "Scalp cleanse with GHK-Cu + AHK-Cu + biotin",
              "Melt-on capsule cream for firmness appearance",
              "Concentrated lift cream with Snap-8",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="border-l-2 border-brand pl-4 text-sm text-ink">
                  {item}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-8">
            <Link
              href="/products"
              className="font-form text-[0.72rem] uppercase tracking-[0.16em] text-brand-deep underline-offset-4 hover:underline"
            >
              Science / Peptide lineup
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ReviewSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal className="max-w-2xl">
        <h2 className="font-form text-3xl uppercase tracking-[0.04em] md:text-4xl">
          Rituals worth repeating.
        </h2>
        <p className="mt-4 text-base text-muted">
          Placeholder stories for now — same carousel rhythm Seed uses for member
          transformations.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={stories[active].name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease }}
            >
              <PlaceholderImage
                label={stories[active].name}
                caption={stories[active].label}
                aspect="wide"
                tone="brand"
              />
              <blockquote className="mt-6 max-w-lg">
                <p className="font-renewal text-2xl leading-snug text-ink md:text-3xl">
                  “{stories[active].quote}”
                </p>
                <footer className="font-form mt-4 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                  {stories[active].name}
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <Stagger className="flex flex-col gap-3">
          {stories.map((story, index) => (
            <StaggerItem key={story.name}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className={`w-full border px-5 py-4 text-left transition ${
                  active === index
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white/50 hover:border-brand/40"
                }`}
              >
                <p className="font-form text-[0.7rem] uppercase tracking-[0.16em]">
                  {story.label}
                </p>
                <p className="mt-2 text-sm">{story.name}</p>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
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
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-45%"]);

  return (
    <section ref={ref} className="overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            Stories from the shelf
          </p>
          <h2 className="font-form mt-3 text-3xl uppercase tracking-[0.04em] md:text-4xl">
            Scientists, rituals, and quiet packaging.
          </h2>
        </Reveal>
      </div>

      <motion.div style={{ x }} className="mt-12 flex w-max gap-4 px-5 md:gap-6 md:px-8">
        {ugcTiles.map((tile, index) => (
          <div key={tile} className="w-[240px] shrink-0 md:w-[300px]">
            <PlaceholderImage
              label={tile}
              caption={`UGC ${index + 1}`}
              aspect="portrait"
              tone={index % 3 === 0 ? "brand" : index % 3 === 1 ? "mist" : "deep"}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function LabsSection() {
  return (
    <section className="section-rule bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <Reveal>
          <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-white/60">
            ● Purgo Labs — fulfillment
          </p>
          <h2 className="font-form mt-3 text-3xl uppercase tracking-[0.04em] md:text-4xl">
            Because the brand shell is [FORM]. Checkout is Purgo.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            This site carries the renewal story. Purchase buttons send you to the live
            Purgo Labs product pages until native checkout lands here.
          </p>
          <div className="mt-8">
            <PurgoButton href={PURGO_ORIGIN} variant="light">
              Read more on Purgo
            </PurgoButton>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Parallax offset={50}>
            <PlaceholderImage
              label="Lab shelf"
              caption="Bookend visual"
              aspect="wide"
              tone="deep"
            />
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}

function BookendSection() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
        <Reveal className="max-w-xl">
          <h2 className="font-form text-3xl uppercase tracking-[0.04em] md:text-4xl">
            Change your peptide routine for good.
          </h2>
          <p className="mt-4 text-base text-white/80">
            Start with Copper Growth Shampoo — purchase fulfilled on Purgo Labs.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <PurgoButton
            href={`${PURGO_ORIGIN}/products/ghk-cu-copper-peptide-shampoo`}
            variant="light"
          >
            Shop Now
          </PurgoButton>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePageClient() {
  return (
    <div className="brand-atmosphere">
      <HeroSection />
      <ProductCarouselSection />
      <HighlightSection />
      <PeptideTechSection />
      <ScienceSection />
      <ReviewSection />
      <UgcSection />
      <LabsSection />
      <BookendSection />
    </div>
  );
}
