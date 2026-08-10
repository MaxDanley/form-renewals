"use client";

import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { products } from "@/lib/products";

export default function ProductsPageClient() {
  return (
    <div className="seed-page min-h-screen bg-paper pt-24">
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-sm text-muted">Shop</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-0.02em] text-shell md:text-6xl">
            All formulas
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted">
            Three copper peptide products. Purchase continues on Purgo Labs.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" delay={0.08}>
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <div className="seed-card bg-paper-strong p-4 md:p-5">
                <ProductCard product={product} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
