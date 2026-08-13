"use client";

import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { products } from "@/lib/products";

export default function ProductsPageClient() {
  return (
    <div className="min-h-screen bg-[#f4f2eb] pt-24">
      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.16em] text-muted">Shop</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-shell md:text-5xl">
            The [FORM] renewal lineup
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Three copper peptide formulas for scalp and skin. Browse here, then
            complete purchase on Purgo Labs.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" delay={0.08}>
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <div className="seed-card bg-[#fffcf7] p-4 shadow-[0_18px_50px_rgba(47,46,36,0.06)] md:p-5">
                <ProductCard product={product} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
