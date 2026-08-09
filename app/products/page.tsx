import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop [FORM] renewal peptide skincare and scalp care formulas.",
};

export default function ProductsPage() {
  return (
    <div className="brand-atmosphere">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-form text-[0.7rem] uppercase tracking-[0.22em] text-muted">
          Shop
        </p>
        <h1 className="font-form mt-3 max-w-2xl text-4xl uppercase tracking-[0.04em] md:text-5xl">
          All formulas
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">
          Three copper peptide products. Photos are placeholders for now — purchase
          continues on Purgo Labs.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
