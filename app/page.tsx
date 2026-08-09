import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";
import PurgoButton from "@/components/PurgoButton";
import { PURGO_ORIGIN } from "@/lib/brand";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="brand-atmosphere">
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 hero-plane" />
        <div className="absolute inset-y-0 right-0 hidden w-[52%] md:block">
          <PlaceholderImage
            label="Copper Growth Shampoo"
            caption="Hero visual placeholder"
            aspect="square"
            tone="deep"
            className="!aspect-auto h-full min-h-[100svh] rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.12),transparent_40%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-24">
          <div className="max-w-xl text-white md:max-w-lg">
            <div className="animate-rise mb-8">
              <BrandLogo href="/" tone="light" size="hero" />
            </div>
            <h1 className="animate-rise-delay-1 font-form text-3xl uppercase leading-[1.05] tracking-[0.04em] text-balance md:text-5xl">
              Peptide care for skin and scalp.
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
              Copper peptide formulas by [FORM] renewal — precise actives, quiet packaging.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <PurgoButton href={PURGO_ORIGIN} variant="light">
                Shop at Purgo Labs
              </PurgoButton>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 font-form text-[0.75rem] uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
              >
                View products
              </Link>
            </div>
          </div>

          <div className="mt-10 md:hidden">
            <PlaceholderImage
              label="Copper Growth Shampoo"
              caption="Hero visual placeholder"
              aspect="hero"
              tone="deep"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            The lineup
          </p>
          <h2 className="font-form mt-3 text-3xl uppercase tracking-[0.04em] md:text-4xl">
            Three formulas. One peptide language.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Photography comes later. Purchase buttons route to Purgo Labs today.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section id="science" className="section-rule bg-white/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
          <PlaceholderImage
            label="Peptide science"
            caption="Lifestyle placeholder"
            aspect="wide"
            tone="mist"
          />
          <div>
            <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-muted">
              Science
            </p>
            <h2 className="font-form mt-3 text-3xl uppercase tracking-[0.04em] md:text-4xl">
              Copper peptides, without the noise.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Finished topical preparations around GHK-Cu, AHK-Cu, and companion
              peptides — for scalp and skin routines that stay precise and wearable.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-ink">
              <li className="border-l-2 border-brand pl-4">
                Scalp cleanse with GHK-Cu + AHK-Cu + biotin
              </li>
              <li className="border-l-2 border-brand pl-4">
                Melt-on capsule cream for firmness appearance
              </li>
              <li className="border-l-2 border-brand pl-4">
                Concentrated lift cream with Snap-8
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="routine" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            Routine
          </p>
          <h2 className="font-form mt-3 text-3xl uppercase tracking-[0.04em] md:text-4xl">
            A care routine built around peptides.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Start with scalp. Layer skin. Keep the ritual short enough to repeat.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Cleanse",
              body: "Copper Growth Shampoo 3–4 times weekly with a short leave-on window.",
            },
            {
              step: "02",
              title: "Treat",
              body: "Capsule Cream melts on contact for daily firmness-focused skin care.",
            },
            {
              step: "03",
              title: "Refine",
              body: "Lift Cream targets expression-line appearance with a dual peptide dose.",
            },
          ].map((item) => (
            <div key={item.step} className="border-t border-line pt-6">
              <p className="font-form text-[0.7rem] uppercase tracking-[0.2em] text-brand-deep">
                {item.step}
              </p>
              <h3 className="font-form mt-4 text-xl uppercase tracking-[0.08em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-24">
          <div>
            <h2 className="font-form text-3xl uppercase tracking-[0.04em] md:text-4xl">
              Shop the formulas at Purgo Labs.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              This site is the [FORM] renewal brand shell. Checkout is live on Purgo
              Labs — product pages here send you straight to purchase.
            </p>
            <div className="mt-8">
              <PurgoButton href={PURGO_ORIGIN} variant="light">
                Continue to Purgo Labs
              </PurgoButton>
            </div>
          </div>
          <PlaceholderImage
            label="[FORM] lineup"
            caption="Collection placeholder"
            aspect="wide"
            tone="deep"
          />
        </div>
      </section>
    </div>
  );
}
